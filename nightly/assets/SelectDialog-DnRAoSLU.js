import{j as e}from"./iframe-DcVQn4h7.js";import{useMDXComponents as c}from"./index-DjjpMNLx.js";import{M as l,C as o}from"./blocks-DpuwUxz9.js";import"./Tag-DIkCdjNz.js";import{M as a}from"./index-DQQWkI0N.js";import{C as d}from"./ControlsWithNote-Cjn4CI-t.js";import{D as p}from"./DocsHeader-UHsRexcK.js";import{F as m}from"./Footer-NfYngWNA.js";import"./CommandsAndQueries-BQOFWNIa.js";import"./PageNotFound-CVfCATZz.js";import{C as r,D as s,M as h}from"./SelectDialog.stories-ACLkG3cj.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cy8WRBMY.js";import"./sys-enter-2-BclYTqTi.js";import"./alert-YdCtzqbp.js";import"./index-CqxmVbMG.js";import"./index-DdVtCCP3.js";import"./Link-CVy3lCMm.js";import"./copy-BiurfHxj.js";import"./copy-Bc0coMMf.js";import"./GitHub-Mark-eGrRYaWL.js";import"./TableOfContent-CNL8YZr2.js";import"./index-DAQytdMa.js";import"./index-C5tsWYzj.js";import"./index-fZCQALbq.js";import"./index-CEU1rAw4.js";import"./index-CwCoovk9.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BldFJeaD.js";import"./addCustomCSSWithScoping-BZ_vF02V.js";import"./Illustrations-Bw1pJyGV.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-elD2Xgk2.js";import"./ListItemStandard-BaNuWCKC.js";import"./Input-BW9GEfIA.js";import"./ResponsivePopoverCommon.css-osNOcHdW.js";import"./ValueStateMessage.css-OYxMPf1f.js";import"./Suggestions.css-BtxCLxQv.js";import"./InvisibleMessage-Ru2nSyo5.js";import"./search-BXEVE-ph.js";import"./index-DtAi62Ks.js";import"./index-CuArEFdj.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:r}),`
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
