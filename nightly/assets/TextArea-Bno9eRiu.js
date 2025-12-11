import{j as n}from"./iframe-BO0jLSss.js";import{useMDXComponents as a}from"./index-DKYRdGJC.js";import{M as p,C as r}from"./blocks-B4u3eIrx.js";import"./Tag-GPe-hxqe.js";import"./index-CblgVrgk.js";import{C as c}from"./ControlsWithNote-2-KFiyR7.js";import{D as l}from"./DocsHeader-DfVL_kuq.js";import{F as u}from"./CommandsAndQueries-CgQBaZ0f.js";import{C as o,D as i,W as m}from"./TextArea.stories-B1PCNzsL.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D3uCnnkd.js";import"./sys-enter-2-wxpj1ZiR.js";import"./alert-BevRZGbf.js";import"./index-Cxn0-wv1.js";import"./index-CpvGRbxq.js";import"./Link-C1ayfMxn.js";import"./copy-C0cKcgNP.js";import"./copy-D8dGmaRo.js";import"./GitHub-Mark-CDemERz7.js";import"./TableOfContent-BGsE7-dd.js";import"./index-DelbaEfh.js";import"./index-ZGr5TJVA.js";import"./index-CEuImug1.js";import"./index-MgaH4Bh7.js";import"./index-CQJ8H28h.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-3DyNz5yK.js";import"./addCustomCSSWithScoping-tlJvF9vw.js";import"./TextArea-BNFrjucW.js";import"./ValueStateMessage.css-DX9Ekmj2.js";import"./parameters-bundle.css-UR8Qxv08.js";import"./InvisibleMessage-Ckou_TOv.js";import"./ToolbarButton-hAwVnrRW.js";import"./overflow-1XdbunpB.js";import"./navigation-left-arrow-B99VeIoP.js";import"./navigation-right-arrow-BWB9l_WM.js";import"./ToolbarSpacer-c8X6e4is.js";import"./ai-BODz8PnN.js";import"./stop-MHwEle1t.js";import"./index-UgWshkgW.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
`,n.jsx(l,{of:o,experimental:!0}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"example",children:"Example"}),`
`,n.jsx(r,{of:i}),`
`,n.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(c,{of:i}),`
`,n.jsx(e.h2,{id:"textarea-with-fake-stream",children:"TextArea with Fake Stream"}),`
`,n.jsx(e.p,{children:"TextArea component implementing simple stream handling."}),`
`,n.jsx(r,{of:m}),`
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
`,n.jsx(u,{})]})}function $(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{$ as default};
