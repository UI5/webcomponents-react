import{a as e,c as t,i as n}from"./preload-helper-DbRxMUml.js";import{$r as r,Fm as i,Qr as a,Tu as o,_t as s,ai as c,di as l,gt as u,ii as d,ng as f,ni as p,oi as m,ri as h,si as g,ui as _,wu as v}from"./iframe-1tBaAyV3.js";import{n as y,t as b}from"./history-WsqS-q8P.js";var x=e({Default:()=>T,ShowMoreItem:()=>j,WithScopeAndItems:()=>D,__namedExportsOrder:()=>M,default:()=>w}),S,C,w,T,E,D,O,k,A,j,M,N=n((()=>{s(),y(),v(),S=t(f(),1),g(),c(),h(),r(),l(),C=i(),w={title:`Inputs / Search`,component:_,argTypes:{children:{control:{disable:!0}},illustration:{control:{disable:!0}},scopes:{control:{disable:!0}},messageArea:{control:{disable:!0}},action:{control:{disable:!0}}},tags:[`package:@ui5/webcomponents-fiori`,`experimental`]},T={},E=[{name:`Laptop`,scope:`products`},{name:`Leave Requests`,scope:`apps`},{name:`Log work`,scope:`apps`},{name:`Manage Products`,scope:`apps`},{name:`Mobile Phones`,scope:`products`},{name:`Tablet`,scope:`products`}],D={args:{showClearIcon:!0,placeholder:`Search Apps, Products`,scopeValue:`all`,scopes:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(a,{text:`All`,value:`all`}),(0,C.jsx)(a,{text:`Apps`,value:`apps`}),(0,C.jsx)(a,{text:`Products`,value:`products`})]})},render(e){let[t,n]=(0,S.useState)(E),r=t=>{e.onScopeChange(t);let{scope:r}=t.detail;r.text===`All`?n(E):n(E.filter(e=>e.scope===r.text.toLowerCase()))};return(0,C.jsx)(_,{...e,onScopeChange:r,children:t.map(e=>(0,C.jsx)(m,{text:e.name,scopeName:e.scope},e.name))})}},O=[{text:`Search Item 1`,icon:b},{text:`Search Item 2`,icon:o},{text:`Search Item 3`,icon:b},{text:`Search Item 4`,icon:b},{text:`Search Item 5`,icon:o},{text:`Search Item 6`,icon:u}],k=O.slice(0,3),A=O.slice(3),j={args:{showClearIcon:!0,placeholder:`Placeholder`},render(e){let[t,n]=(0,S.useState)(!1);return(0,C.jsxs)(_,{...e,children:[(0,C.jsxs)(d,{headerText:`Group Header 1`,children:[k.map(e=>(0,C.jsx)(m,{text:e.text,icon:e.icon},e.text)),!t&&(0,C.jsx)(p,{itemsToShowCount:A.length,onClick:()=>{n(!0)}}),t&&A.map(e=>(0,C.jsx)(m,{text:e.text,icon:e.icon},e.text))]}),(0,C.jsxs)(d,{headerText:`Group Header 2`,children:[(0,C.jsx)(m,{text:`Search Item 1`,icon:b}),(0,C.jsx)(m,{text:`Search Item 2`,icon:b}),(0,C.jsx)(m,{text:`Search Item 3`,icon:u})]})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{}`,...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    showClearIcon: true,
    placeholder: 'Search Apps, Products',
    scopeValue: 'all',
    scopes: <>
        <SearchScope text="All" value="all" />
        <SearchScope text="Apps" value="apps" />
        <SearchScope text="Products" value="products" />
      </>
  },
  render(args) {
    const [filterData, setFilterData] = useState(scopeData);
    const handleScopeChange: SearchPropTypes['onScopeChange'] = e => {
      args.onScopeChange(e);
      const {
        scope
      } = e.detail;
      if (scope.text === 'All') {
        setFilterData(scopeData);
      } else {
        setFilterData(scopeData.filter(item => {
          return item.scope === scope.text.toLowerCase();
        }));
      }
    };
    return <Search {...args} onScopeChange={handleScopeChange}>
        {filterData.map(item => {
        return <SearchItem key={item.name} text={item.name} scopeName={item.scope} />;
      })}
      </Search>;
  }
}`,...D.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    showClearIcon: true,
    placeholder: 'Placeholder'
  },
  render(args) {
    const [showHiddenItems, setShowHiddenItems] = useState(false);
    return <Search {...args}>
        <SearchItemGroup headerText="Group Header 1">
          {visibleItems.map(item => {
          return <SearchItem key={item.text} text={item.text} icon={item.icon} />;
        })}
          {!showHiddenItems && <SearchItemShowMore itemsToShowCount={hiddenItems.length} onClick={() => {
          setShowHiddenItems(true);
        }} />}
          {showHiddenItems && hiddenItems.map(item => {
          return <SearchItem key={item.text} text={item.text} icon={item.icon} />;
        })}
        </SearchItemGroup>
        <SearchItemGroup headerText="Group Header 2">
          <SearchItem text="Search Item 1" icon={historyIcon} />
          <SearchItem text="Search Item 2" icon={historyIcon} />
          <SearchItem text="Search Item 3" icon={globeIcon} />
        </SearchItemGroup>
      </Search>;
  }
}`,...j.parameters?.docs?.source}}},M=[`Default`,`WithScopeAndItems`,`ShowMoreItem`]}));N();export{T as Default,j as ShowMoreItem,D as WithScopeAndItems,M as __namedExportsOrder,w as default,N as n,x as t};