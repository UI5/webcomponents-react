import { useState } from 'react';
import { Button } from '../../../webComponents/Button/index.js';
import { Modals } from '../index.js';

export const ModalsPreventInitialFocus = () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Modals />
      <Button
        data-testid="open-dialog"
        onClick={() => {
          const { close } = Modals.showDialog({
            preventInitialFocus: true,
            headerText: 'Dialog Title',
            onOpen: () => {
              setOpened(true);
            },
            children: "I'm a Dialog!",
            footer: (
              <Button data-testid="dialog-close" onClick={() => close()}>
                Close
              </Button>
            ),
          });
        }}
      >
        Open Dialog
      </Button>
      <span data-testid="opened-flag">{opened ? 'opened' : 'closed'}</span>
    </>
  );
};
