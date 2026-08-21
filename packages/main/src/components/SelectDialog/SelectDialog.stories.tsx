import Laptop1 from '@sb/demoImages/Laptop1.jpg';
import Laptop2 from '@sb/demoImages/Laptop2.jpg';
import Pc1 from '@sb/demoImages/PC1.jpg';
import Pc2 from '@sb/demoImages/PC2.jpg';
import { isChromatic } from '@sb/utils.js';
import type { Meta, StoryObj } from '@storybook/react-vite';
import ListSelectionMode from '@ui5/webcomponents/dist/types/ListSelectionMode.js';
import type { CSSProperties } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../../webComponents/Button/index.js';
import type { DialogDomRef } from '../../webComponents/Dialog/index.js';
import { Label } from '../../webComponents/Label/index.js';
import { ListItemStandard } from '../../webComponents/ListItemStandard/index.js';
import { Text } from '../../webComponents/Text/index.js';
import { FlexBox } from '../FlexBox/index.js';
import { SelectDialog } from './index.js';
import type { SelectDialogPropTypes } from './index.js';

const meta = {
  title: 'Modals & Popovers / SelectDialog',
  component: SelectDialog,
  argTypes: {
    children: { control: { disable: true } },
    onSearch: { control: { disable: true } },
    onCancel: { control: { disable: true } },
  },
  args: { headerText: 'Select Product', open: isChromatic },
  parameters: {
    chromatic: { delay: 1000 },
  },
  tags: ['extends:@ui5/webcomponents', 'cem-module:Dialog', 'package:@ui5/webcomponents-react'],
} satisfies Meta<typeof SelectDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const listItems = [
  { img: Laptop1, description: 'LT-10', text: 'Gaming Laptop' },
  { img: Laptop2, description: 'LT-20', text: 'Business Laptop' },
  { img: Pc2, description: 'HT-10', text: 'Gaming PC' },
  { img: Pc1, description: 'HT-20', text: 'Business PC' },
];
export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState<boolean | undefined>(args.open);
    const onButtonClick = () => {
      setOpen(true);
    };
    const handleClose = (e) => {
      setOpen(false);
      args.onClose(e);
    };
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return (
      <>
        <Button onClick={onButtonClick}>Open SelectDialog</Button>
        <SelectDialog {...args} open={open} onClose={handleClose}>
          {new Array(40).fill('').map((_, index) => {
            const currentProduct = listItems[index % 4];
            return (
              <ListItemStandard
                selected={index === 1}
                image={<img src={currentProduct.img} alt="Example Image" />}
                description={`${currentProduct.description}${index}`}
                key={`${currentProduct.text}${index}`}
                text={currentProduct.text}
              />
            );
          })}
        </SelectDialog>
      </>
    );
  },
};

export const MultiSelect: Story = {
  render: () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    // predefined selection
    const selectedProducts = { 'HT-102': true, 'HT-203': true, 'HT-1038': true };
    // number of selected items
    const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(selectedProducts);
    const selectedItemsBeforeOpen = useRef(selectedItems);
    const [searchVal, setSearchVal] = useState<string | undefined>();
    const [products, setProducts] = useState(Object.keys(selectedProducts));

    const handleBeforeOpen = () => {
      selectedItemsBeforeOpen.current = selectedItems;
    };
    const handleOpen = () => {
      setDialogOpen(true);
    };
    const handleClose = () => {
      setDialogOpen(false);
    };
    // search
    const handleSearch = (e) => {
      setSearchVal(e.detail.value);
    };
    // reset input value of search field
    const handleSearchReset = () => {
      setSearchVal(undefined);
    };
    // select/unselect
    const handleItemClick = (e) => {
      const itemDescription = e.detail.targetItem.dataset.description;
      setSelectedItems((prev) => {
        if (prev[itemDescription]) {
          const { [itemDescription]: _omit, ...rest } = prev;
          return rest;
        } else {
          return { ...prev, [itemDescription]: true };
        }
      });
    };
    // clear selection
    const handleClear = () => {
      setSelectedItems({});
    };
    // confirm selection
    const handleConfirm = () => {
      setProducts(Object.keys(selectedItems));
    };
    // cancel selection
    const handleCancel = () => {
      setSelectedItems(selectedItemsBeforeOpen.current);
    };

    return (
      <>
        <Button onClick={handleOpen}>Open Dialog</Button>
        <SelectDialog
          open={dialogOpen}
          selectionMode={ListSelectionMode.Multiple}
          numberOfSelectedItems={Object.keys(selectedItems).length}
          listProps={{ onSelectionChange: handleItemClick }}
          showClearButton
          rememberSelections
          onClear={handleClear}
          onConfirm={handleConfirm}
          onClose={handleClose}
          onSearchInput={handleSearch}
          onSearch={handleSearch}
          onSearchReset={handleSearchReset}
          onBeforeOpen={handleBeforeOpen}
          onCancel={handleCancel}
        >
          {new Array(40)
            .fill('')
            .map((_, index) => {
              const currentProduct = listItems[index % 4];
              const description = `${currentProduct.description}${index}`;
              const lowerCaseSearchVal = searchVal?.toLowerCase();
              if (
                searchVal &&
                !description.toLowerCase().includes(lowerCaseSearchVal) &&
                !currentProduct.text.toLowerCase().includes(lowerCaseSearchVal)
              ) {
                return null;
              }
              return (
                <ListItemStandard
                  image={<img src={currentProduct.img} alt="Example Image" />}
                  description={`${currentProduct.description}${index}`}
                  data-description={`${currentProduct.description}${index}`}
                  key={`${currentProduct.text}${index}`}
                  selected={selectedItems[description]}
                  text={currentProduct.text}
                />
              );
            })
            .filter(Boolean)}
        </SelectDialog>
        <FlexBox>
          <Label>Selected: </Label>
          <Text>{products.join(', ')}</Text>
        </FlexBox>
      </>
    );
  },
};

const announcementItems = Array.from({ length: 40 }, (_unused, index) => ({
  id: `P-${index.toString().padStart(3, '0')}`,
  text: ['Gaming Laptop', 'Business Laptop', 'Gaming PC', 'Business PC'][index % 4],
}));

const liveRegionStyle: CSSProperties = {
  position: 'absolute',
  clip: 'rect(1px,1px,1px,1px)',
  userSelect: 'none',
  left: '-1000px',
  top: '-1000px',
  pointerEvents: 'none',
};

export const SearchResultAnnouncement: Story = {
  render: () => {
    const [dialogEl, setDialogEl] = useState<DialogDomRef | null>(null);
    const liveSpanRef = useRef<HTMLSpanElement | null>(null);
    const [open, setOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const filteredItems = useMemo(() => {
      const query = searchValue.trim().toLowerCase();
      if (!query) {
        return announcementItems;
      }
      return announcementItems.filter(
        (item) => item.id.toLowerCase().includes(query) || item.text.toLowerCase().includes(query),
      );
    }, [searchValue]);

    const announceCount = (count: number) => {
      const span = liveSpanRef.current;
      if (!span) {
        return;
      }
      span.textContent = count === 0 ? 'No results found' : `${count} results available`;
    };

    const handleSearch = (event: Parameters<NonNullable<SelectDialogPropTypes['onSearch']>>[0]) => {
      setSearchValue(event.detail.value);
      announceCount(filteredItems.length);
    };

    const handleSearchReset = () => {
      setSearchValue('');
      announceCount(announcementItems.length);
    };

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open SelectDialog</Button>
        <SelectDialog
          ref={setDialogEl}
          headerText="Select Product"
          open={open}
          onClose={() => setOpen(false)}
          onSearch={handleSearch}
          onSearchReset={handleSearchReset}
        >
          {filteredItems.map((item) => (
            <ListItemStandard key={item.id} description={item.id} text={item.text} />
          ))}
        </SelectDialog>
        {dialogEl && createPortal(<span ref={liveSpanRef} aria-live="polite" style={liveRegionStyle} />, dialogEl)}
      </>
    );
  },
};
