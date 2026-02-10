import { generateMessageItems } from '@sb/mockData/generateMessageItems.js';
import type { Meta, StoryObj } from '@storybook/react-vite';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import TitleLevel from '@ui5/webcomponents/dist/types/TitleLevel.js';
import WrappingType from '@ui5/webcomponents/dist/types/WrappingType.js';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import arrowLeftIcon from '@ui5/webcomponents-icons/dist/slim-arrow-left.js';
import { useI18nBundle } from '@ui5/webcomponents-react-base/hooks';
import { useRef, useState } from 'react';
import { FlexBoxAlignItems, FlexBoxJustifyContent } from '../../enums/index.js';
import { Bar } from '../../webComponents/Bar/index.js';
import { Button } from '../../webComponents/Button/index.js';
import { Dialog } from '../../webComponents/Dialog/index.js';
import { Link } from '../../webComponents/Link/index.js';
import { ResponsivePopover } from '../../webComponents/ResponsivePopover/index.js';
import { Title } from '../../webComponents/Title/index.js';
import { FlexBox } from '../FlexBox/index.js';
import { MessageItem } from '../MessageItem/index.js';
import { MessageViewButton } from '../MessageViewButton/index.js';
import type { MessageViewDomRef } from './index.js';
import { MessageView } from './index.js';

const meta = {
  title: 'User Feedback / MessageView',
  component: MessageView,
  args: {
    showDetailsPageHeader: true,
    groupItems: false,
    children: [
      <MessageItem
        key={1}
        titleText={'Error Message Type (1)'}
        subtitleText={'Some bad error occurred'}
        type={ValueState.Negative}
        counter={1}
        groupName={'Products'}
      >
        First Error Message Description.
      </MessageItem>,
      <MessageItem
        key={3}
        titleText={'Warning Message Type'}
        subtitleText={'Warning without details'}
        type={ValueState.Critical}
        counter={3}
      />,
      <MessageItem
        key={4}
        titleText={
          'Long Empty Message Type (no title, no subtitle, no children/details) - The details view is only available if the `titleText` is not fully visible. It is NOT recommended to use long titles!'
        }
        groupName={'Products'}
      />,
      <MessageItem
        key={5}
        titleText={'Information Message Type without subtitle'}
        type={ValueState.Information}
        groupName={'Products'}
      />,
      <MessageItem
        key={6}
        titleText={'None Message Type'}
        subtitleText={'Value State None will be handled as Information'}
        type={ValueState.None}
        groupName={'Employees'}
      >
        Informative message
      </MessageItem>,
      <MessageItem key={7} titleText={'Error Message Type (2)'} type={ValueState.Negative} counter={3} />,
    ],
  },
  tags: ['package:@ui5/webcomponents-react'],
} satisfies Meta<typeof MessageView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MessageViewInDialog: Story = {
  name: 'MessageView in Dialog',
  render(args) {
    const [open, setOpen] = useState(false);
    const messageViewRef = useRef<MessageViewDomRef>(null);
    const [isOnDetailsPage, setIsOnDetailsPage] = useState(false);
    return (
      <>
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          Open Dialog
        </Button>
        <Dialog
          resizable
          style={{ width: '500px' }}
          className="contentPartNoPadding headerPartNoPadding"
          open={open}
          onClose={() => {
            setOpen(false);
            messageViewRef.current.navigateBack();
          }}
          header={
            <Bar
              startContent={
                <FlexBox alignItems={FlexBoxAlignItems.Center}>
                  {isOnDetailsPage && (
                    <Button
                      icon={arrowLeftIcon}
                      design={ButtonDesign.Transparent}
                      onClick={() => {
                        setIsOnDetailsPage(false);
                        messageViewRef.current.navigateBack();
                      }}
                      style={{ marginInline: '0 0.5rem' }}
                    />
                  )}
                  <Title level={TitleLevel.H4}>Messages</Title>
                </FlexBox>
              }
            />
          }
          footer={
            <FlexBox
              alignItems={FlexBoxAlignItems.Center}
              justifyContent={FlexBoxJustifyContent.End}
              style={{
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              <Button
                design={ButtonDesign.Transparent}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Close
              </Button>
            </FlexBox>
          }
        >
          <MessageView
            ref={messageViewRef}
            {...args}
            showDetailsPageHeader={false}
            onItemSelect={() => {
              setIsOnDetailsPage(true);
            }}
          />
        </Dialog>
      </>
    );
  },
};

export const WithMessageViewButton: Story = {
  name: 'with MessageViewButton & Popover',
  render() {
    const ref = useRef(null);
    const messageViewRef = useRef<MessageViewDomRef>(null);
    const [isOnDetailsPage, setIsOnDetailsPage] = useState(false);
    const [open, setOpen] = useState(false);
    const numberOfItems = {
      information: 2,
      warning: 5,
      success: 3,
      error: 3,
    };
    return (
      <>
        <MessageViewButton
          counter={3}
          type={ValueState.Negative}
          onClick={(e) => {
            ref.current.opener = e.currentTarget;
            setOpen(true);
          }}
        />
        <ResponsivePopover
          ref={ref}
          open={open}
          headerText="Messages"
          className="contentPartNoPadding headerPartNoPadding"
          onClose={() => {
            messageViewRef.current.navigateBack();
            setOpen(false);
          }}
          header={
            <Bar
              startContent={
                <FlexBox alignItems={FlexBoxAlignItems.Center}>
                  {isOnDetailsPage && (
                    <Button
                      design={ButtonDesign.Transparent}
                      icon="slim-arrow-left"
                      onClick={() => {
                        setIsOnDetailsPage(false);
                        messageViewRef.current.navigateBack();
                      }}
                      style={{ marginInline: '0 0.5rem' }}
                    />
                  )}
                  <Title level={TitleLevel.H4}>Messages</Title>
                </FlexBox>
              }
            />
          }
          footer={
            <FlexBox
              alignItems={FlexBoxAlignItems.Center}
              justifyContent={FlexBoxJustifyContent.End}
              style={{
                paddingBlock: '0.25rem',
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              <Button
                design={ButtonDesign.Transparent}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Close
              </Button>
            </FlexBox>
          }
        >
          <MessageView
            style={{ height: '500px', maxWidth: '600px' }}
            ref={messageViewRef}
            showDetailsPageHeader={false}
            groupItems
            onItemSelect={() => {
              setIsOnDetailsPage(true);
            }}
          >
            {generateMessageItems(numberOfItems)}
          </MessageView>
        </ResponsivePopover>
      </>
    );
  },
};

export const WithLinks: Story = {
  name: 'with Links',
  render(args) {
    const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
    const listAccessibleDescription = `${i18nBundle.getText({ key: 'LIST_INTERACTIVE_ITEMS', defaultText: 'List with interactive items.' })} ${i18nBundle.getText({ key: 'MOVE_TO_CONTENT_F2', defaultText: 'To move to the content press F2.' })}`;

    return (
      <MessageView {...args} listAccessibleDescription={listAccessibleDescription}>
        <MessageItem
          titleText={
            <Link
              wrappingType={WrappingType.None}
              onClick={(e) => {
                e.stopPropagation();
                alert('Link pressed!');
              }}
            >
              Error message
            </Link>
          }
          subtitleText="This message contains a link"
          type={ValueState.Negative}
        />
        <MessageItem
          titleText={
            <Link
              wrappingType={WrappingType.None}
              onClick={(e) => {
                e.stopPropagation();
                alert('Link pressed!');
              }}
            >
              Click here to view the error log.
            </Link>
          }
          type={ValueState.Negative}
        />
        <MessageItem
          titleText={
            <Link
              wrappingType={WrappingType.None}
              onClick={(e) => {
                e.stopPropagation();
                alert('Link pressed!');
              }}
            >
              Long Error Message Type without children/details including a Link as `titleText` which has
              wrappingType="None" applied. - The details view is only available if the `titleText` is not fully visible.
              It is NOT recommended to use long titles!
            </Link>
          }
          type={ValueState.Negative}
          counter={3}
        />
        <MessageItem
          titleText="Information Message"
          subtitleText="No interactive elements"
          type={ValueState.Information}
        />
      </MessageView>
    );
  },
};
