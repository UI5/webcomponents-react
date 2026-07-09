import{a as e,c as t,i as n}from"./preload-helper-B45gAKPr.js";import{t as r}from"./react-CymAsZIc.js";import{t as i}from"./jsx-runtime-BBQGix-2.js";import{n as a,t as o}from"./Button-5u2iej_u.js";import{n as s,t as c}from"./Text-CvN-8hrf.js";import{_ as l,v as u}from"./List-DhAs0zSK.js";import{n as d,t as f}from"./ListItemStandard-uNoKhlFM.js";import{n as p,t as m}from"./Label-5v8MPrtq.js";import{O as h,bt as g,k as _,r as v,vt as y,yt as b}from"./iframe-B6gs43HQ.js";var x,S=n((()=>{x=``+new URL(`Laptop1-BiqZozDV.jpg`,import.meta.url).href})),C,w=n((()=>{C=``+new URL(`Laptop2-CLTht4yo.jpg`,import.meta.url).href})),T,E=n((()=>{T=``+new URL(`PC1-BekXrNHY.jpg`,import.meta.url).href})),D,O=n((()=>{D=``+new URL(`PC2-DZLCUDFz.jpg`,import.meta.url).href})),k=e({Default:()=>F,MultiSelect:()=>I,SearchResultAnnouncement:()=>z,__namedExportsOrder:()=>B,default:()=>N}),A,j,M,N,P,F,I,L,R,z,B,V=n((()=>{S(),w(),E(),O(),v(),u(),A=t(r(),1),j=t(g(),1),a(),p(),d(),s(),b(),_(),M=i(),N={title:`Modals & Popovers / SelectDialog`,component:h,argTypes:{children:{control:{disable:!0}},onSearch:{control:{disable:!0}},onCancel:{control:{disable:!0}}},args:{headerText:`Select Product`,open:!1},parameters:{chromatic:{delay:1e3}},tags:[`extends:@ui5/webcomponents`,`cem-module:Dialog`,`package:@ui5/webcomponents-react`]},P=[{img:x,description:`LT-10`,text:`Gaming Laptop`},{img:C,description:`LT-20`,text:`Business Laptop`},{img:D,description:`HT-10`,text:`Gaming PC`},{img:T,description:`HT-20`,text:`Business PC`}],F={render:e=>{let[t,n]=(0,A.useState)(e.open),r=()=>{n(!0)},i=t=>{n(!1),e.onClose(t)};return(0,A.useEffect)(()=>{n(e.open)},[e.open]),(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(o,{onClick:r,children:`Open SelectDialog`}),(0,M.jsx)(h,{...e,open:t,onClose:i,children:Array(40).fill(``).map((e,t)=>{let n=P[t%4];return(0,M.jsx)(f,{selected:t===1,image:(0,M.jsx)(`img`,{src:n.img,alt:`Example Image`}),description:`${n.description}${t}`,text:n.text},`${n.text}${t}`)})})]})}},I={render:()=>{let[e,t]=(0,A.useState)(!1),n={"HT-102":!0,"HT-203":!0,"HT-1038":!0},[r,i]=(0,A.useState)(n),a=(0,A.useRef)(r),[s,u]=(0,A.useState)(),[d,p]=(0,A.useState)(Object.keys(n)),g=()=>{a.current=r},_=()=>{t(!0)},v=()=>{t(!1)},b=e=>{u(e.detail.value)};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(o,{onClick:_,children:`Open Dialog`}),(0,M.jsx)(h,{open:e,selectionMode:l.Multiple,numberOfSelectedItems:Object.keys(r).length,listProps:{onSelectionChange:e=>{let t=e.detail.targetItem.dataset.description;i(e=>{if(e[t]){let{[t]:n,...r}=e;return r}else return{...e,[t]:!0}})}},showClearButton:!0,rememberSelections:!0,onClear:()=>{i({})},onConfirm:()=>{p(Object.keys(r))},onClose:v,onSearchInput:b,onSearch:b,onSearchReset:()=>{u(void 0)},onBeforeOpen:g,onCancel:()=>{i(a.current)},children:Array(40).fill(``).map((e,t)=>{let n=P[t%4],i=`${n.description}${t}`,a=s?.toLowerCase();return s&&!i.toLowerCase().includes(a)&&!n.text.toLowerCase().includes(a)?null:(0,M.jsx)(f,{image:(0,M.jsx)(`img`,{src:n.img,alt:`Example Image`}),description:`${n.description}${t}`,"data-description":`${n.description}${t}`,selected:r[i],text:n.text},`${n.text}${t}`)}).filter(Boolean)}),(0,M.jsxs)(y,{children:[(0,M.jsx)(m,{children:`Selected: `}),(0,M.jsx)(c,{children:d.join(`, `)})]})]})}},L=Array.from({length:40},(e,t)=>({id:`P-${t.toString().padStart(3,`0`)}`,text:[`Gaming Laptop`,`Business Laptop`,`Gaming PC`,`Business PC`][t%4]})),R={position:`absolute`,clip:`rect(1px,1px,1px,1px)`,userSelect:`none`,left:`-1000px`,top:`-1000px`,pointerEvents:`none`},z={render:()=>{let[e,t]=(0,A.useState)(null),n=(0,A.useRef)(null),[r,i]=(0,A.useState)(!1),[a,s]=(0,A.useState)(``),c=(0,A.useMemo)(()=>{let e=a.trim().toLowerCase();return e?L.filter(t=>t.id.toLowerCase().includes(e)||t.text.toLowerCase().includes(e)):L},[a]),l=e=>{let t=n.current;t&&(t.textContent=e===0?`No results found`:`${e} results available`)};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(o,{onClick:()=>i(!0),children:`Open SelectDialog`}),(0,M.jsx)(h,{ref:t,headerText:`Select Product`,open:r,onClose:()=>i(!1),onSearch:e=>{s(e.detail.value),l(c.length)},onSearchReset:()=>{s(``),l(L.length)},children:c.map(e=>(0,M.jsx)(f,{description:e.id,text:e.text},e.id))}),e&&(0,j.createPortal)((0,M.jsx)(`span`,{ref:n,"aria-live":`polite`,style:R}),e)]})}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
      return announcementItems.filter(item => item.id.toLowerCase().includes(query) || item.text.toLowerCase().includes(query));
    }, [searchValue]);
    const announceCount = (count: number) => {
      const span = liveSpanRef.current;
      if (!span) {
        return;
      }
      span.textContent = count === 0 ? 'No results found' : \`\${count} results available\`;
    };
    const handleSearch = (event: Parameters<NonNullable<SelectDialogPropTypes['onSearch']>>[0]) => {
      setSearchValue(event.detail.value);
      announceCount(filteredItems.length);
    };
    const handleSearchReset = () => {
      setSearchValue('');
      announceCount(announcementItems.length);
    };
    return <>
        <Button onClick={() => setOpen(true)}>Open SelectDialog</Button>
        <SelectDialog ref={setDialogEl} headerText="Select Product" open={open} onClose={() => setOpen(false)} onSearch={handleSearch} onSearchReset={handleSearchReset}>
          {filteredItems.map(item => <ListItemStandard key={item.id} description={item.id} text={item.text} />)}
        </SelectDialog>
        {dialogEl && createPortal(<span ref={liveSpanRef} aria-live="polite" style={liveRegionStyle} />, dialogEl)}
      </>;
  }
}`,...z.parameters?.docs?.source}}},B=[`Default`,`MultiSelect`,`SearchResultAnnouncement`]}));V();export{F as Default,I as MultiSelect,z as SearchResultAnnouncement,B as __namedExportsOrder,N as default,V as n,k as t};