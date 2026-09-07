import { Button } from '../../../webComponents/Button/index.js';
import { ActionSheet } from '../index.js';

export const ActionSheetKeyboardTestComp = () => {
  return (
    <>
      <button id="opener" data-testid="opener">
        Opener
      </button>
      <ActionSheet open opener="opener">
        {new Array(5).fill('').map((_, index) => (
          <Button key={index}>{`Button${index}`}</Button>
        ))}
      </ActionSheet>
    </>
  );
};
