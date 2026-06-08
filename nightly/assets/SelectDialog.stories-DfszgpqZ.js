import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{$d as r,Cp as i,Dd as a,O as o,Od as s,Su as c,Wg as l,ad as u,af as d,ef as f,k as p,mh as m,od as h,of as g,r as _,wp as v,xu as y}from"./iframe-2aOx3Cwb.js";var b,x=n((()=>{b=``+new URL(`Laptop1-BiqZozDV.jpg`,import.meta.url).href})),S,C=n((()=>{S=``+new URL(`Laptop2-CLTht4yo.jpg`,import.meta.url).href})),w,T=n((()=>{w=``+new URL(`PC1-BekXrNHY.jpg`,import.meta.url).href})),E,D=n((()=>{E=``+new URL(`PC2-DZLCUDFz.jpg`,import.meta.url).href})),O=e({Default:()=>N,MultiSelect:()=>P,__namedExportsOrder:()=>F,default:()=>j}),k,A,j,M,N,P,F,I=n((()=>{x(),C(),T(),D(),_(),s(),k=t(l(),1),v(),c(),h(),f(),g(),p(),A=m(),j={title:`Modals & Popovers / SelectDialog`,component:o,argTypes:{children:{control:{disable:!0}},onSearch:{control:{disable:!0}},onCancel:{control:{disable:!0}}},args:{headerText:`Select Product`,open:!1},parameters:{chromatic:{delay:1e3}},tags:[`extends:@ui5/webcomponents`,`cem-module:Dialog`,`package:@ui5/webcomponents-react`]},M=[{img:b,description:`LT-10`,text:`Gaming Laptop`},{img:S,description:`LT-20`,text:`Business Laptop`},{img:E,description:`HT-10`,text:`Gaming PC`},{img:w,description:`HT-20`,text:`Business PC`}],N={render:e=>{let[t,n]=(0,k.useState)(e.open),r=()=>{n(!0)},a=t=>{n(!1),e.onClose(t)};return(0,k.useEffect)(()=>{n(e.open)},[e.open]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(i,{onClick:r,children:`Open SelectDialog`}),(0,A.jsx)(o,{...e,open:t,onClose:a,children:Array(40).fill(``).map((e,t)=>{let n=M[t%4];return(0,A.jsx)(u,{selected:t===1,image:(0,A.jsx)(`img`,{src:n.img,alt:`Example Image`}),description:`${n.description}${t}`,text:n.text},`${n.text}${t}`)})})]})}},P={render:()=>{let[e,t]=(0,k.useState)(!1),n={"HT-102":!0,"HT-203":!0,"HT-1038":!0},[s,c]=(0,k.useState)(n),l=(0,k.useRef)(s),[f,p]=(0,k.useState)(),[m,h]=(0,k.useState)(Object.keys(n)),g=()=>{l.current=s},_=()=>{t(!0)},v=()=>{t(!1)},b=e=>{p(e.detail.value)};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(i,{onClick:_,children:`Open Dialog`}),(0,A.jsx)(o,{open:e,selectionMode:a.Multiple,numberOfSelectedItems:Object.keys(s).length,listProps:{onSelectionChange:e=>{let t=e.detail.targetItem.dataset.description;c(e=>{if(e[t]){let{[t]:n,...r}=e;return r}else return{...e,[t]:!0}})}},showClearButton:!0,rememberSelections:!0,onClear:()=>{c({})},onConfirm:()=>{h(Object.keys(s))},onClose:v,onSearchInput:b,onSearch:b,onSearchReset:()=>{p(void 0)},onBeforeOpen:g,onCancel:()=>{c(l.current)},children:Array(40).fill(``).map((e,t)=>{let n=M[t%4],r=`${n.description}${t}`,i=f?.toLowerCase();return f&&!r.toLowerCase().includes(i)&&!n.text.toLowerCase().includes(i)?null:(0,A.jsx)(u,{image:(0,A.jsx)(`img`,{src:n.img,alt:`Example Image`}),description:`${n.description}${t}`,"data-description":`${n.description}${t}`,selected:s[r],text:n.text},`${n.text}${t}`)}).filter(Boolean)}),(0,A.jsxs)(d,{children:[(0,A.jsx)(y,{children:`Selected: `}),(0,A.jsx)(r,{children:m.join(`, `)})]})]})}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState<boolean | undefined>(args.open);
    const onButtonClick = () => {
      setOpen(true);
    };
    const handleClose = e => {
      setOpen(false);
      args.onClose(e);
    };
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button onClick={onButtonClick}>Open SelectDialog</Button>
        <SelectDialog {...args} open={open} onClose={handleClose}>
          {new Array(40).fill('').map((_, index) => {
          const currentProduct = listItems[index % 4];
          return <ListItemStandard selected={index === 1} image={<img src={currentProduct.img} alt="Example Image" />} description={\`\${currentProduct.description}\${index}\`} key={\`\${currentProduct.text}\${index}\`} text={currentProduct.text} />;
        })}
        </SelectDialog>
      </>;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    // predefined selection
    const selectedProducts = {
      'HT-102': true,
      'HT-203': true,
      'HT-1038': true
    };
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
    const handleSearch = e => {
      setSearchVal(e.detail.value);
    };
    // reset input value of search field
    const handleSearchReset = () => {
      setSearchVal(undefined);
    };
    // select/unselect
    const handleItemClick = e => {
      const itemDescription = e.detail.targetItem.dataset.description;
      setSelectedItems(prev => {
        if (prev[itemDescription]) {
          const {
            [itemDescription]: _omit,
            ...rest
          } = prev;
          return rest;
        } else {
          return {
            ...prev,
            [itemDescription]: true
          };
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
    return <>
        <Button onClick={handleOpen}>Open Dialog</Button>
        <SelectDialog open={dialogOpen} selectionMode={ListSelectionMode.Multiple} numberOfSelectedItems={Object.keys(selectedItems).length} listProps={{
        onSelectionChange: handleItemClick
      }} showClearButton rememberSelections onClear={handleClear} onConfirm={handleConfirm} onClose={handleClose} onSearchInput={handleSearch} onSearch={handleSearch} onSearchReset={handleSearchReset} onBeforeOpen={handleBeforeOpen} onCancel={handleCancel}>
          {new Array(40).fill('').map((_, index) => {
          const currentProduct = listItems[index % 4];
          const description = \`\${currentProduct.description}\${index}\`;
          const lowerCaseSearchVal = searchVal?.toLowerCase();
          if (searchVal && !description.toLowerCase().includes(lowerCaseSearchVal) && !currentProduct.text.toLowerCase().includes(lowerCaseSearchVal)) {
            return null;
          }
          return <ListItemStandard image={<img src={currentProduct.img} alt="Example Image" />} description={\`\${currentProduct.description}\${index}\`} data-description={\`\${currentProduct.description}\${index}\`} key={\`\${currentProduct.text}\${index}\`} selected={selectedItems[description]} text={currentProduct.text} />;
        }).filter(Boolean)}
        </SelectDialog>
        <FlexBox>
          <Label>Selected: </Label>
          <Text>{products.join(', ')}</Text>
        </FlexBox>
      </>;
  }
}`,...P.parameters?.docs?.source}}},F=[`Default`,`MultiSelect`]}));I();export{N as Default,P as MultiSelect,F as __namedExportsOrder,j as default,I as n,O as t};