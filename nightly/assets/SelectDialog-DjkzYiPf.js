import{j as e}from"./iframe-iYU5spAk.js";import{useMDXComponents as c}from"./index-BzD2IrSQ.js";import{M as l,C as o}from"./blocks-BI7QxqeB.js";import"./Tag-BusGuvh6.js";import{M as a}from"./index-Cq3_Xc9J.js";import{C as d}from"./ControlsWithNote-DYiwBMQ2.js";import{D as p}from"./DocsHeader-_GpZrLV2.js";import{F as m}from"./Footer-BTHx_eA0.js";import"./CommandsAndQueries-BRXiW4dn.js";import"./PageNotFound-C8n2TUKE.js";import{C as r,D as s,M as h}from"./SelectDialog.stories-C-EusFkh.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D0J7LS4n.js";import"./sys-enter-2-De6BCoo5.js";import"./alert-Dh59S2xt.js";import"./index-DUNXsDMC.js";import"./index-DqeVDsPv.js";import"./Link-DNrZNopF.js";import"./copy-CLCoEAhJ.js";import"./copy-DCVJQWNc.js";import"./GitHub-Mark-oclh5OA_.js";import"./TableOfContent-ZERqextU.js";import"./index-B2lbw_UO.js";import"./index-BWMAVmh3.js";import"./index-D_eTNKvK.js";import"./index-9CESre8T.js";import"./index-B5WhhwGp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-LCeBFvC9.js";import"./addCustomCSSWithScoping-Pos0RdE7.js";import"./Illustrations-B_rOPeGm.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-CjSo2Ws_.js";import"./ListItemStandard-cf92RqQJ.js";import"./Input-CPcEboco.js";import"./ResponsivePopoverCommon.css-MzYjXUbZ.js";import"./ValueStateMessage.css-CiiA2s3E.js";import"./Suggestions.css-CltR8Y_x.js";import"./InvisibleMessage-BqlPeigB.js";import"./search-m3QvWV_k.js";import"./index-BdYyxTLQ.js";import"./index-DyWQ4Yet.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:r}),`
`,e.jsx(p,{of:r}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(n.h2,{id:"opening-selectdialogs",children:"Opening SelectDialogs"}),`
`,e.jsxs(n.p,{children:["You can open and close the ",e.jsx(n.code,{children:"SelectDialog"})," component in a declarative way using the ",e.jsx(n.code,{children:"open"})," and ",e.jsx(n.code,{children:"opener"})," prop."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const MyComponentWithSelectDialog = () => {
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
`,e.jsx(n.h2,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(n.h3,{id:"selectdialog-in-multiselect-mode-with-search",children:"SelectDialog in MultiSelect mode with search"}),`
`,e.jsx(a,{hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:["This example remembers its selection by setting ",e.jsx(n.code,{children:"rememberSelections"})," to ",e.jsx(n.code,{children:"true"}),"."]})}),`
`,e.jsx(o,{of:h,sourceState:"none"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show Code"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const MultiSelectDialog = () => {
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
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(m,{})]})}function te(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{te as default};
