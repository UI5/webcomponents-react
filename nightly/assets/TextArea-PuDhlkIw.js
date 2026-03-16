import{j as n}from"./iframe-BIP38Qmu.js";import{useMDXComponents as a}from"./index-CCzfQ4AK.js";import{M as p,C as r}from"./blocks-69-jnurL.js";import"./Tag-D0zcjL-3.js";import"./index-C_7tcSj3.js";import{C as c}from"./ControlsWithNote-DlY6D4bI.js";import{D as m}from"./DocsHeader-D4aiXO6T.js";import{F as l}from"./Footer-DAbghHc6.js";import"./CommandsAndQueries-BAg-w2Ve.js";import"./PageNotFound-z2fC1f6d.js";import{C as o,D as i,W as u}from"./TextArea.stories-BIP2u8SK.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cf_JR6Aw.js";import"./sys-enter-2-D5AeNUHf.js";import"./alert-CMm7pEpj.js";import"./index-BEp_fWNn.js";import"./index-BlYNx0T3.js";import"./Link-B13MM4G6.js";import"./copy-q2hIMu45.js";import"./copy-nvOf1vVL.js";import"./GitHub-Mark-vHfAubj_.js";import"./TableOfContent-CAcSs8TN.js";import"./index-pu7JlX44.js";import"./index-C0fOqYC4.js";import"./index-Du9D3QZW.js";import"./index-DXmoRv88.js";import"./index-ZEQXSIQn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BrBZ3oM5.js";import"./addCustomCSSWithScoping-3IpFFLGa.js";import"./Illustrations-BEksg9v0.js";import"./i18n-defaults-CFWtSmu6.js";import"./TextArea-_4JH1zrc.js";import"./ValueStateMessage.css-CUWnXMd3.js";import"./parameters-bundle.css-BprtGMjT.js";import"./InvisibleMessage-CSZZfWPC.js";import"./ToolbarSpacer-D_FpCPdV.js";import"./ToolbarButton-UppJZZRZ.js";import"./overflow-D0Q8iiex.js";import"./navigation-left-arrow-BxelQ_y_.js";import"./navigation-right-arrow-8O47gqPc.js";import"./ai-CfcSybfO.js";import"./stop-outTpjkQ.js";import"./index-BXx7h-vS.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
`,n.jsx(m,{of:o,experimental:!0}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"example",children:"Example"}),`
`,n.jsx(r,{of:i}),`
`,n.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(c,{of:i}),`
`,n.jsx(e.h2,{id:"textarea-with-fake-stream",children:"TextArea with Fake Stream"}),`
`,n.jsx(e.p,{children:"TextArea component implementing simple stream handling."}),`
`,n.jsx(r,{of:u}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"Show Static Code"}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { TextArea, TextAreaPropTypes } from '@ui5/webcomponents-ai-react';
import { Menu, MenuItem, MenuPropTypes } from '@ui5/webcomponents-react';
import { useEffect, useRef, useState, useTransition } from 'react';

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

const SAMPLE_TEXT =
  'Innovation managers operate with both creativity and business acumen, driving initiatives that cultivate an innovation-friendly culture, streamline the execution of new ideas, and ultimately unlock value for the organization and its customers.';

type VersionHistoryItem = {
  action: string;
  endAction: string;
  timestamp: string;
  value: string;
  promptDescription: string;
};

function AITextArea(props) {
  const { value, isTyping, isProcessing, setValue, startStream, stopStream } = useFakeStream();
  const [versionHistory, setVersionHistory] = useState<VersionHistoryItem[]>([]);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(-1);
  const [promptDescription, setPromptDescription] = useState('');
  const currentActionRef = useRef<string>('');
  const isLoading = isProcessing || isTyping;

  const handleItemClick: MenuPropTypes['onItemClick'] = (e) => {
    const { action } = e.detail.item.dataset;
    if (isProcessing || !action) {
      return;
    }
    currentActionRef.current = action;
    setPromptDescription('Generating text...');
    startStream({
      text: SAMPLE_TEXT,
      onComplete: (fullText) => {
        setVersionHistory((prev) => [
          ...prev,
          {
            action,
            endAction: 'completed',
            timestamp: new Date().toISOString(),
            value: fullText,
            promptDescription: 'Generated text',
          },
        ]);
        setCurrentHistoryIndex((prev) => prev + 1);
        setValue('');
        setPromptDescription('');
      },
    });
  };

  const handleStopGeneration: TextAreaPropTypes['onStopGeneration'] = () => {
    stopStream();
    handleStop();
  };

  const handleStop = () => {
    setVersionHistory((prev) => [
      ...prev,
      {
        action: currentActionRef.current,
        endAction: 'stopped',
        timestamp: new Date().toISOString(),
        value: value,
        promptDescription: 'Generated text (stopped)',
      },
    ]);
    setCurrentHistoryIndex((prev) => prev + 1);
    setValue('');
    setPromptDescription('');
  };

  const handleVersionChange: TextAreaPropTypes['onVersionChange'] = (e) => {
    setCurrentHistoryIndex((prev) => (e.detail.backwards ? prev - 1 : prev + 1));
    setValue('');
  };

  const handleInput: TextAreaPropTypes['onInput'] = (e) => {
    setValue(e.target.value);
  };

  useStopStreamByESC(isLoading, stopStream, handleStop);

  return (
    <TextArea
      {...props}
      value={value || versionHistory[currentHistoryIndex]?.value || ''}
      currentVersion={currentHistoryIndex + 1}
      totalVersions={versionHistory.length}
      loading={isLoading}
      promptDescription={promptDescription || versionHistory[currentHistoryIndex]?.promptDescription || ''}
      onStopGeneration={handleStopGeneration}
      onVersionChange={handleVersionChange}
      onInput={handleInput}
      menu={
        <Menu onItemClick={handleItemClick}>
          <MenuItem text="Generate text" data-action="generate" />
        </Menu>
      }
    />
  );
}
`})})]}),`
`,n.jsx(l,{})]})}function rn(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{rn as default};
