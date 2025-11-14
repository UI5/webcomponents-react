import type * as CEM from '@ui5/webcomponents-tools/lib/cem/types-internal';
import { useEffect, useMemo, useRef, useState, useTransition } from 'react';
// @ts-expect-error: storybook can handle this
import cemAi from './custom-element-manifests/ai.json';
// @ts-expect-error: storybook can handle this
import cemFiori from './custom-element-manifests/fiori.json';
// @ts-expect-error: storybook can handle this
import cemMain from './custom-element-manifests/main.json';

export const isChromatic = process.env.STORYBOOK_ENV === 'chromatic';

export const MAPPED_THEMES = [
  { value: 'sap_horizon', title: 'Morning Horizon (Light)' },
  { value: 'sap_horizon_dark', title: 'Evening Horizon (Dark)' },
  { value: 'sap_horizon_hcb', title: 'Horizon High Contrast Black' },
  { value: 'sap_horizon_hcw', title: 'Horizon High Contrast White' },
  { value: 'sap_fiori_3', title: 'Quartz Light' },
  { value: 'sap_fiori_3_dark', title: 'Quartz Dark' },
  { value: 'sap_fiori_3_hcb', title: 'Quartz High Contrast Black' },
  { value: 'sap_fiori_3_hcw', title: 'Quartz High Contrast White' },
];

export const excludePropsForAbstract = ['className', 'style'];

export function useGetCem(storyTags: string[]) {
  const extendsAnnotation = storyTags?.find((tag) => tag.startsWith('extends:'));
  const packageAnnotation = storyTags?.find((tag) => tag.startsWith('package:'));
  const annotation = extendsAnnotation ?? packageAnnotation;

  switch (annotation) {
    case 'extends:@ui5/webcomponents':
    case 'package:@ui5/webcomponents':
      return cemMain;
    case 'package:@ui5/webcomponents-fiori':
      return cemFiori;
    case 'package:@ui5/webcomponents-ai':
      return cemAi;
  }
}

const replaceSubComps = {
  ListItemBase: ['ListItemStandard', 'ListItemCustom', 'ListItemGroup'],
  InputSuggestionItem: ['SuggestionItem', 'SuggestionItemGroup'],
  NotificationListItemBase: ['NotificationListItem'],
  ToolbarItem: ['ToolbarSeparator', 'ToolbarSpacer', 'ToolbarButton', 'ToolbarSelect', 'ToolbarSelectOption'],
  TreeItemBase: ['TreeItem', 'TreeItemCustom'],
  AvatarGroupItem: ['Avatar'],
  TableFeature: ['TableGrowing', 'TableSelection', 'TableVirtualizer', 'TableSelectionMulti', 'TableSelectionSingle'],
  SideNavigationItemBase: ['SideNavigationItem', 'SideNavigationGroup', 'SideNavigationSubItem'],
  TableRowActionBase: ['TableRowAction', 'TableRowActionNavigation'],
  TableHeaderCellActionBase: ['TableHeaderCellActionAI'],
};

function findSubComponentsRecursively(moduleName: string, cem: CEM.Package): string[] {
  const subComponentsSet = new Set<string>();

  const recursiveFind = (moduleName: string) => {
    const module = cem?.modules.find((module: CEM.Module) => module.path === `dist/${moduleName}.js`);
    if (!module) return;

    module.declarations.forEach((decl: CEM.CustomElement) => {
      (decl.slots || []).forEach((slot: CEM.Slot) => {
        (slot._ui5type?.references || []).forEach((ref: CEM.TypeReference) => {
          const name = ref.name.replace(/^I([A-Z])/g, '$1');
          const subComps = replaceSubComps[name] || [name];
          subComps.forEach((subComp: string) => {
            if (!subComponentsSet.has(subComp)) {
              subComponentsSet.add(subComp);
              recursiveFind(subComp);
            }
          });
        });
      });
    });
  };

  recursiveFind(moduleName);

  return Array.from(subComponentsSet);
}

export function useGetSubComponentsOfModule(moduleName: string, tags: string[]) {
  const cem = useGetCem(tags);
  return useMemo(() => {
    return findSubComponentsRecursively(moduleName, cem);
  }, [cem, moduleName]);
}

type StartStreamOptions = {
  text: string;
  onComplete?: (fullText: string) => void;
  onProcessingComplete?: () => void;
};
export function useFakeStream(initialValue = '', typingDelay = 10, startingDelay = 1500) {
  const [value, setValue] = useState(initialValue);
  const [transitionIsPending, startTransition] = useTransition(); // active character updates
  const [isProcessing, setIsProcessing] = useState(false); // starting delay
  const [isTyping, setIsTyping] = useState(false); // actively typing characters
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isProcessingRef = useRef(isProcessing);
  const isTypingRef = useRef(isTyping);
  isProcessingRef.current = isProcessing;
  isTypingRef.current = isTyping;

  const startStream = ({ text, onComplete, onProcessingComplete }: StartStreamOptions) => {
    // Stop previous stream and timeout
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setValue('');
    setIsProcessing(true);

    timeoutRef.current = setTimeout(() => {
      setIsProcessing(false);

      if (onProcessingComplete) {
        onProcessingComplete();
      }

      setIsTyping(true);
      let index = 0;

      intervalRef.current = setInterval(() => {
        if (index < text.length) {
          const nextChar = text[index];
          index++;

          startTransition(() => {
            setValue((prev) => prev + nextChar);
          });
        } else {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          setIsTyping(false);

          if (onComplete) {
            onComplete(text);
          }
        }
      }, typingDelay);
    }, startingDelay);
  };

  const stopStream = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsProcessing(false);
    setIsTyping(false);
  };

  return { value, transitionIsPending, isProcessing, isTyping, setValue, startStream, stopStream };
}

export function useStopStreamByESC(loading: boolean, stopStream: () => void, onStop?: () => void) {
  const loadingRef = useRef(loading);
  loadingRef.current = loading;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && loadingRef.current) {
        stopStream();
        if (onStop) {
          onStop();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [stopStream, onStop]);
}
