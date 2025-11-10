import type { Meta, StoryObj } from '@storybook/react-vite';
import type { MenuPropTypes } from '@ui5/webcomponents-react';
import { Menu, MenuItem } from '@ui5/webcomponents-react';
import { useRef, useState } from 'react';
import { useFakeStream, useStopStreamByESC } from '../../../../../.storybook/utils.js';
import type { TextAreaPropTypes } from './index.js';
import { TextArea } from './index.js';

const meta = {
  title: 'TextArea',
  component: TextArea,
  argTypes: {
    menu: { control: { disable: true } },
    valueStateMessage: { control: { disable: true } },
  },
  tags: ['package:@ui5/webcomponents-ai', 'experimental'],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const SAMPLE_TEXT =
  'Innovation managers operate with both creativity and business acumen, driving initiatives that cultivate an innovation-friendly culture, streamline the execution of new ideas, and ultimately unlock value for the organization and its customers.';

type VersionHistoryItem = {
  action: string;
  endAction: string;
  timestamp: string;
  value: string;
  promptDescription: string;
};

export const WithFakeStream: Story = {
  name: 'with Stream',
  args: { placeholder: 'Write your content here...', rows: 8 },
  render(args) {
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
        {...args}
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
  },
};
