import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{t as r}from"./react-IGKVQItS.js";import{t as i}from"./jsx-runtime-O9QVJvLM.js";import{n as a,t as o}from"./Button-BXQYAnlm.js";import{n as s,t as c}from"./Text-CuxzD5Cs.js";import{c as l,s as u}from"./List-CCTHrhK0.js";import{n as d,t as f}from"./ListItemStandard-DHfQG17U.js";import{n as p,t as m}from"./Label-DsMOpcOg.js";import{O as h,k as g,r as _,vt as v,yt as y}from"./iframe-C3Q66FQy.js";var b,x=n((()=>{b=``+new URL(`Laptop1-BiqZozDV.jpg`,import.meta.url).href})),S,C=n((()=>{S=``+new URL(`Laptop2-CLTht4yo.jpg`,import.meta.url).href})),w,T=n((()=>{w=``+new URL(`PC1-BekXrNHY.jpg`,import.meta.url).href})),E,D=n((()=>{E=``+new URL(`PC2-DZLCUDFz.jpg`,import.meta.url).href})),O=e({Default:()=>N,MultiSelect:()=>P,__namedExportsOrder:()=>F,default:()=>j}),k,A,j,M,N,P,F,I=n((()=>{x(),C(),T(),D(),_(),l(),k=t(r(),1),a(),p(),d(),s(),y(),g(),A=i(),j={title:`Modals & Popovers / SelectDialog`,component:h,argTypes:{children:{control:{disable:!0}},onSearch:{control:{disable:!0}},onCancel:{control:{disable:!0}}},args:{headerText:`Select Product`,open:!1},parameters:{chromatic:{delay:1e3}},tags:[`extends:@ui5/webcomponents`,`cem-module:Dialog`,`package:@ui5/webcomponents-react`]},M=[{img:b,description:`LT-10`,text:`Gaming Laptop`},{img:S,description:`LT-20`,text:`Business Laptop`},{img:E,description:`HT-10`,text:`Gaming PC`},{img:w,description:`HT-20`,text:`Business PC`}],N={render:e=>{let[t,n]=(0,k.useState)(e.open),r=()=>{n(!0)},i=t=>{n(!1),e.onClose(t)};return(0,k.useEffect)(()=>{n(e.open)},[e.open]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(o,{onClick:r,children:`Open SelectDialog`}),(0,A.jsx)(h,{...e,open:t,onClose:i,children:Array(40).fill(``).map((e,t)=>{let n=M[t%4];return(0,A.jsx)(f,{selected:t===1,image:(0,A.jsx)(`img`,{src:n.img,alt:`Example Image`}),description:`${n.description}${t}`,text:n.text},`${n.text}${t}`)})})]})}},P={render:()=>{let[e,t]=(0,k.useState)(!1),n={"HT-102":!0,"HT-203":!0,"HT-1038":!0},[r,i]=(0,k.useState)(n),a=(0,k.useRef)(r),[s,l]=(0,k.useState)(),[d,p]=(0,k.useState)(Object.keys(n)),g=()=>{a.current=r},_=()=>{t(!0)},y=()=>{t(!1)},b=e=>{l(e.detail.value)};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(o,{onClick:_,children:`Open Dialog`}),(0,A.jsx)(h,{open:e,selectionMode:u.Multiple,numberOfSelectedItems:Object.keys(r).length,listProps:{onSelectionChange:e=>{let t=e.detail.targetItem.dataset.description;i(e=>{if(e[t]){let{[t]:n,...r}=e;return r}else return{...e,[t]:!0}})}},showClearButton:!0,rememberSelections:!0,onClear:()=>{i({})},onConfirm:()=>{p(Object.keys(r))},onClose:y,onSearchInput:b,onSearch:b,onSearchReset:()=>{l(void 0)},onBeforeOpen:g,onCancel:()=>{i(a.current)},children:Array(40).fill(``).map((e,t)=>{let n=M[t%4],i=`${n.description}${t}`,a=s?.toLowerCase();return s&&!i.toLowerCase().includes(a)&&!n.text.toLowerCase().includes(a)?null:(0,A.jsx)(f,{image:(0,A.jsx)(`img`,{src:n.img,alt:`Example Image`}),description:`${n.description}${t}`,"data-description":`${n.description}${t}`,selected:r[i],text:n.text},`${n.text}${t}`)}).filter(Boolean)}),(0,A.jsxs)(v,{children:[(0,A.jsx)(m,{children:`Selected: `}),(0,A.jsx)(c,{children:d.join(`, `)})]})]})}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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