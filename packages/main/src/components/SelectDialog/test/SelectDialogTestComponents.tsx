import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import ListSelectionMode from '@ui5/webcomponents/dist/types/ListSelectionMode.js';
import { useState } from 'react';
import { Button } from '../../../webComponents/Button/index.js';
import { ListItemStandard, type ListItemStandardDomRef } from '../../../webComponents/ListItemStandard/index.js';
import { SelectDialog } from '../index.js';
import type { SelectDialogPropTypes } from '../index.js';

const listItems = new Array(5)
  .fill('')
  .map((_, index) => (
    <ListItemStandard key={index} data-li={index} description={`description${index}`} text={`Product${index}`} />
  ));

export const SelectDialogBasicTestComp = () => {
  return <SelectDialog open>{listItems}</SelectDialog>;
};

export const SelectDialogHeaderTestComp = () => {
  const [open, setOpen] = useState(true);
  const [headerTextAlignCenter, setHeaderTextAlignCenter] = useState(false);
  const [headerTextLevel, setHeaderTextLevel] = useState<SelectDialogPropTypes['headerTextLevel']>('H1');

  return (
    <div>
      <Button data-testid="open-btn" onClick={() => setOpen(true)}>
        Open
      </Button>
      <Button data-testid="toggle-center" onClick={() => setHeaderTextAlignCenter((c) => !c)}>
        Toggle Center
      </Button>
      <Button data-testid="set-h2" onClick={() => setHeaderTextLevel('H2')}>
        Set H2
      </Button>
      <SelectDialog
        headerText="Select Dialog"
        headerTextAlignCenter={headerTextAlignCenter}
        headerTextLevel={headerTextLevel}
        open={open}
        onClose={() => setOpen(false)}
      >
        {listItems}
      </SelectDialog>
    </div>
  );
};

export const SelectDialogSelectionWithToggleTestComp = () => {
  const [open, setOpen] = useState(true);
  const [rememberSelections, setRememberSelections] = useState(false);
  const [selectionMode, setSelectionMode] = useState<SelectDialogPropTypes['selectionMode']>(ListSelectionMode.Single);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [closeCount, setCloseCount] = useState(0);
  const [confirmCount, setConfirmCount] = useState(0);
  const [changeCount, setChangeCount] = useState(0);

  return (
    <>
      <Button data-testid="open-btn" onClick={() => setOpen(true)}>
        Open
      </Button>
      <Button data-testid="toggle-remember" onClick={() => setRememberSelections((r) => !r)}>
        Toggle Remember
      </Button>
      <Button data-testid="set-multiple" onClick={() => setSelectionMode(ListSelectionMode.Multiple)}>
        Set Multiple
      </Button>
      <Button data-testid="set-single" onClick={() => setSelectionMode(ListSelectionMode.Single)}>
        Set Single
      </Button>
      <Button
        data-testid="reset"
        onClick={() => {
          setSelectedItems([]);
          setRememberSelections(false);
          setSelectionMode(ListSelectionMode.Single);
        }}
      >
        Reset
      </Button>
      <SelectDialog
        selectionMode={selectionMode}
        rememberSelections={rememberSelections}
        open={open}
        onConfirm={(e) => {
          setSelectedItems(e.detail.selectedItems.map((item) => (item as unknown as ListItemStandardDomRef).text));
          setConfirmCount((c) => c + 1);
        }}
        onClose={() => {
          console.log('close');
          setOpen(false);
          setCloseCount((c) => c + 1);
        }}
        listProps={{
          onSelectionChange: () => setChangeCount((c) => c + 1),
        }}
      >
        {listItems}
      </SelectDialog>
      <span data-testid="selected-items">Last Selected Item: {selectedItems.join('')}</span>
      <span data-testid="close-count">{closeCount}</span>
      <span data-testid="confirm-count">{confirmCount}</span>
      <span data-testid="change-count">{changeCount}</span>
      <span data-testid="remember-state">{rememberSelections ? 'true' : 'false'}</span>
      <span data-testid="mode-state">{selectionMode}</span>
    </>
  );
};

// Tracks search/input/reset values and counts via DOM
export const SelectDialogSearchTestComp = () => {
  const [inputVal, setInputVal] = useState('');
  const [searchVal, setSearchVal] = useState('');
  const [searchCount, setSearchCount] = useState(0);
  const [inputCount, setInputCount] = useState(0);
  const [resetCount, setResetCount] = useState(0);

  return (
    <>
      <SelectDialog
        onSearch={(e) => {
          setSearchVal(e.detail.value);
          setSearchCount((c) => c + 1);
        }}
        onSearchInput={(e) => {
          setInputVal(e.detail.value);
          setInputCount((c) => c + 1);
        }}
        onSearchReset={() => setResetCount((c) => c + 1)}
        open
      >
        {listItems}
      </SelectDialog>
      <span data-testid="input-val">input: {inputVal}</span>
      <span data-testid="search-val">search: {searchVal}</span>
      <span data-testid="search-count">{searchCount}</span>
      <span data-testid="input-count">{inputCount}</span>
      <span data-testid="reset-count">{resetCount}</span>
    </>
  );
};

export const SelectDialogConfirmButtonTextTestComp = () => {
  const [confirmCount, setConfirmCount] = useState(0);
  return (
    <>
      <SelectDialog
        selectionMode={ListSelectionMode.Multiple}
        confirmButtonText="Exterminate"
        onConfirm={() => setConfirmCount((c) => c + 1)}
        open
      />
      <span data-testid="confirm-count">{confirmCount}</span>
    </>
  );
};

export const SelectDialogNumberOfSelectedItemsTestComp = () => {
  return <SelectDialog selectionMode={ListSelectionMode.Multiple} numberOfSelectedItems={1337} open />;
};

export const SelectDialogCancelWithToggleTestComp = () => {
  const [open, setOpen] = useState(false);
  const [cancelCount, setCancelCount] = useState(0);
  const [selectionMode, setSelectionMode] = useState<SelectDialogPropTypes['selectionMode']>(ListSelectionMode.Single);

  return (
    <>
      <Button data-testid="open-btn" onClick={() => setOpen(true)}>
        Open
      </Button>
      <Button data-testid="set-multiple" onClick={() => setSelectionMode(ListSelectionMode.Multiple)}>
        Set Multiple
      </Button>
      <Button data-testid="set-single" onClick={() => setSelectionMode(ListSelectionMode.Single)}>
        Set Single
      </Button>
      <SelectDialog
        open={open}
        onCancel={() => setCancelCount((c) => c + 1)}
        onClose={() => setOpen(false)}
        selectionMode={selectionMode}
      >
        {listItems}
      </SelectDialog>
      <span data-testid="cancel-count">{cancelCount}</span>
    </>
  );
};

export const SelectDialogConfirmButtonPropsTestComp = () => {
  return (
    <SelectDialog
      // @ts-expect-error: design is not a valid prop - only added for testing purpose
      confirmButtonProps={{ disabled: true, design: ButtonDesign.Negative, 'data-testid': 'confirmBtn' }}
      open
      selectionMode={ListSelectionMode.Multiple}
    />
  );
};
