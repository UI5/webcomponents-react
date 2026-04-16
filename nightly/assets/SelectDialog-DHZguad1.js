import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-1ARNaUmP.js";import{t as n}from"./src-Cgo3IeY-.js";import{t as r}from"./MessageStrip-DwY-VZga.js";import{r as i}from"./react-BZibOG70.js";import{_ as a,o,p as s,s as c,t as l}from"./components-Da28yRWl.js";import{_ as u,d,r as f}from"./blocks-D9k7TVdi.js";import{Default as p,MultiSelect as m,n as h,t as g}from"./SelectDialog.stories-2NTTpQ9v.js";function _(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...i(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(d,{of:g}),`
`,(0,y.jsx)(c,{of:g}),`
`,(0,y.jsx)(`br`,{}),`
`,(0,y.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,y.jsx)(f,{of:p}),`
`,(0,y.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,y.jsx)(s,{of:p}),`
`,(0,y.jsx)(t.h2,{id:`opening-selectdialogs`,children:`Opening SelectDialogs`}),`
`,(0,y.jsxs)(t.p,{children:[`You can open and close the `,(0,y.jsx)(t.code,{children:`SelectDialog`}),` component in a declarative way using the `,(0,y.jsx)(t.code,{children:`open`}),` and `,(0,y.jsx)(t.code,{children:`opener`}),` prop.`]}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-jsx`,children:`const MyComponentWithSelectDialog = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setDialogIsOpen(true);
        }}
      >
        Open SelectDialog
      </Button>
      <SelectDialog open={dialogIsOpen} headerText="Select Product">
        <ListItemStandard image="pathToImg" description="description" text="Product" />
      </SelectDialog>
    </>
  );
};
`})}),`
`,(0,y.jsx)(t.h2,{id:`more-examples`,children:`More Examples`}),`
`,(0,y.jsx)(t.h3,{id:`selectdialog-in-multiselect-mode-with-search`,children:`SelectDialog in MultiSelect mode with search`}),`
`,(0,y.jsx)(r,{hideCloseButton:!0,children:(0,y.jsxs)(y.Fragment,{children:[`This example remembers its selection by setting `,(0,y.jsx)(t.code,{children:`rememberSelections`}),` to `,(0,y.jsx)(t.code,{children:`true`}),`.`]})}),`
`,(0,y.jsx)(f,{of:m,sourceState:`none`}),`
`,(0,y.jsxs)(`details`,{children:[(0,y.jsx)(`summary`,{children:`Show Code`}),(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-tsx`,children:`const MultiSelectDialog = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  // predefined selection
  const selectedProducts = { 'HT-102': true, 'HT-203': true, 'HT-1038': true };
  // number of selected items
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(selectedProducts);
  const selectedItemsBeforeOpen = useRef(selectedItems);
  const [searchVal, setSearchVal] = useState();
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
        mode={ListSelectionMode.Multiple}
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
            const description = \`\${currentProduct.description}\${index}\`;
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
                image={currentProduct.img}
                description={\`\${currentProduct.description}\${index}\`}
                data-description={\`\${currentProduct.description}\${index}\`}
                key={\`\${currentProduct.text}\${index}\`}
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
};
`})})]}),`
`,(0,y.jsx)(`br`,{}),`
`,(0,y.jsx)(`br`,{}),`
`,(0,y.jsx)(o,{})]})}function v(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;e((()=>{y=t(),a(),l(),u(),n(),h()}))();export{v as default};