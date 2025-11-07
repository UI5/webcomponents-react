import type { Meta, StoryObj } from '@storybook/react-vite';
import { MenuItem } from '@ui5/webcomponents-react';
import { useRef, useState } from 'react';
import { useFakeStream } from '../../../../../.storybook/utils.js';
import type { InputPropTypes } from './index.js';
import { Input } from './index.js';

const meta = {
  title: 'Input',
  component: Input,
  argTypes: {
    actions: { control: { disable: true } },
    children: { control: { disable: true } },
    icon: { control: { disable: true } },
    valueStateMessage: { control: { disable: true } },
  },
  tags: ['package:@ui5/webcomponents-ai', 'experimental'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    return <Input {...args} actions={<MenuItem key="generate" text="Generate" data-action="generate" />} />;
  },
};

const SAMPLE_TEXTS = {
  en: 'Innovation managers lead with creativity.',
  bg: 'Мениджърите по иновации водят с креативност.',
  de: 'Innovationsmanager führen mit Kreativität.',
  expanded: 'They combine creative ideas with strategic action.',
  simplified: 'They lead using creativity.',
  summarized: 'Driving innovation creatively.',
};

const MENU_CONFIG = [
  {
    text: 'Regenerate',
    action: 'regenerate',
    processingLabel: 'Regenerating text...',
    completedLabel: 'Regenerated text',
    textKey: 'en',
    replaces: 'generate',
  },
  {
    text: 'Fix spelling and grammar',
    action: 'fixSpelling',
    processingLabel: 'Fixing spelling and grammar...',
    completedLabel: 'Fixed spelling and grammar',
    textKey: 'en',
  },
  {
    text: 'Rewrite text',
    isGroup: true,
    children: [
      {
        text: 'Simplify',
        action: 'simplify',
        processingLabel: 'Simplifying text...',
        completedLabel: 'Simplified text',
        textKey: 'simplified',
        isChild: true,
      },
      {
        text: 'Expand',
        action: 'expand',
        processingLabel: 'Expanding text...',
        completedLabel: 'Expanded text',
        textKey: 'expanded',
        isChild: true,
      },
      {
        text: 'Summarize',
        action: 'summarize',
        processingLabel: 'Summarizing text...',
        completedLabel: 'Summarized text',
        textKey: 'summarized',
        isChild: true,
      },
    ],
  },
  {
    text: 'Translate',
    isGroup: true,
    children: [
      {
        text: 'English',
        action: 'translateEN',
        processingLabel: 'Translating to English...',
        completedLabel: 'Translated to English',
        textKey: 'en',
        isChild: true,
      },
      {
        text: 'German',
        action: 'translateDE',
        processingLabel: 'Translating to German...',
        completedLabel: 'Translated to German',
        textKey: 'de',
        isChild: true,
      },
      {
        text: 'Bulgarian',
        action: 'translateBG',
        processingLabel: 'Translating to Bulgarian...',
        completedLabel: 'Translated to Bulgarian',
        textKey: 'bg',
        isChild: true,
      },
    ],
  },
];

type VersionHistoryItem = {
  action: string;
  endAction: string;
  timestamp: string;
  value: string;
};

const initialPlaceholder = 'Write your title';

export const WithFakeStream: Story = {
  name: 'with Stream',
  render: (args) => {
    const [versionHistory, setVersionHistory] = useState<VersionHistoryItem[]>([]);
    const [currentHistoryIndex, setCurrentHistoryIndex] = useState(-1);
    const [placeholder, setPlaceholder] = useState(initialPlaceholder);
    const hasHistory = versionHistory.length > 0;
    const currentActionRef = useRef<string>('');
    const { value, isTyping, isProcessing, setValue, startStream, stopStream } = useFakeStream(50);

    const handleVersionChange: InputPropTypes['onVersionChange'] = (e) => {
      setCurrentHistoryIndex((prev) => (e.detail.backwards ? prev - 1 : prev + 1));
    };

    const handleItemClick: InputPropTypes['onItemClick'] = (e) => {
      const { action, processingLabel, textKey } = e.detail.item.dataset;
      if (isProcessing || !action) {
        return;
      }
      currentActionRef.current = action;

      let text = SAMPLE_TEXTS[textKey ?? 'en'];
      switch (action) {
        case 'simplify': {
          text = SAMPLE_TEXTS.simplified;
          break;
        }
        case 'expand': {
          text = SAMPLE_TEXTS.expanded;
          break;
        }
        case 'summarize': {
          text = SAMPLE_TEXTS.expanded;
          break;
        }
        case 'translateEN': {
          text = SAMPLE_TEXTS.en;
          break;
        }
        case 'translateDE': {
          text = SAMPLE_TEXTS.de;
          break;
        }
        case 'translateBG': {
          text = SAMPLE_TEXTS.bg;
          break;
        }
      }

      setPlaceholder(processingLabel);
      startStream({
        text,
        onProcessingComplete: () => {
          setPlaceholder(initialPlaceholder);
        },
        onComplete: (fullText) => {
          setVersionHistory((prev) => [
            ...prev,
            { action, endAction: 'completed', timestamp: new Date().toISOString(), value: fullText },
          ]);
          setCurrentHistoryIndex((prev) => prev + 1);
          setValue('');
        },
      });
    };

    const handleStopGeneration: InputPropTypes['onStopGeneration'] = (e) => {
      stopStream();
      setVersionHistory((prev) => [
        ...prev,
        {
          action: currentActionRef.current,
          endAction: 'stopped',
          timestamp: new Date().toISOString(),
          value: e.target.value,
        },
      ]);
      setCurrentHistoryIndex((prev) => prev + 1);
      setValue('');
    };

    const handleInput: InputPropTypes['onInput'] = (e) => {
      setValue(e.target.value);
    };

    return (
      <Input
        {...args}
        style={{ width: '400px' }}
        value={isProcessing ? '' : value || versionHistory[currentHistoryIndex]?.value || ''}
        placeholder={placeholder}
        currentVersion={currentHistoryIndex + 1}
        totalVersions={versionHistory.length}
        loading={isProcessing || isTyping}
        onVersionChange={handleVersionChange}
        onStopGeneration={handleStopGeneration}
        onItemClick={handleItemClick}
        onInput={handleInput}
        actions={
          <>
            {hasHistory ? (
              MENU_CONFIG.map((configItem, index) => {
                if (configItem.replaces && !hasHistory) {
                  return null;
                }

                if (configItem.isGroup && Array.isArray(configItem.children)) {
                  return (
                    <MenuItem key={index} text={configItem.text}>
                      {configItem.children.map((child) => (
                        <MenuItem
                          key={child.text}
                          text={child.text}
                          data-action={child.action}
                          data-processing-label={child.processingLabel}
                          data-completed-label={child.completedLabel}
                          data-text-key={child.textKey}
                        />
                      ))}
                    </MenuItem>
                  );
                }

                return (
                  <MenuItem
                    key={configItem.text}
                    text={configItem.text}
                    data-action={configItem.action}
                    data-processing-label={configItem.processingLabel}
                    data-completed-label={configItem.completedLabel}
                    data-text-key={configItem.textKey}
                  />
                );
              })
            ) : (
              <MenuItem key="generate" text="Generate" data-action="generate" data-processing-label="Processing..." />
            )}
          </>
        }
      />
    );
  },
};
