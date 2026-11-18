import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { useRef } from 'react';
import { Dialog } from '../../../webComponents/Dialog/index.js';
import { MessageItem } from '../../MessageItem/index.js';
import type { MessageViewDomRef } from '../index.js';
import { MessageView } from '../index.js';

export const WithDetailsPageHeader = () => {
  return (
    <MessageView showDetailsPageHeader>
      <MessageItem titleText="Password too short" type={ValueState.Negative}>
        The password must contain at least two character types.
      </MessageItem>
      <MessageItem titleText="Check your input" type={ValueState.Critical}>
        Please review the highlighted fields.
      </MessageItem>
    </MessageView>
  );
};

export const InDialogWithoutHeader = () => {
  const ref = useRef<MessageViewDomRef>(null);
  const backBtnRef = useRef<HTMLButtonElement>(null);
  return (
    <Dialog open style={{ width: '400px' }}>
      <button ref={backBtnRef} slot="header" data-testid="dialog-back" onClick={() => ref.current?.navigateBack()}>
        nav back
      </button>
      <MessageView
        ref={ref}
        showDetailsPageHeader={false}
        onItemSelect={() => {
          // no header → app ensures a11y by moving focus to its own (interactive) back button
          requestAnimationFrame(() => {
            backBtnRef.current?.focus();
          });
        }}
      >
        <MessageItem titleText="Password too short" type={ValueState.Negative}>
          The password must contain at least two character types.
        </MessageItem>
        <MessageItem titleText="Check your input" type={ValueState.Critical}>
          Please review the highlighted fields.
        </MessageItem>
      </MessageView>
    </Dialog>
  );
};
