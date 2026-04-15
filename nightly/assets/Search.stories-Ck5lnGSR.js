import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{t as r}from"./react-C184PLS3.js";import{t as i}from"./jsx-runtime-1ARNaUmP.js";import{n as a,t as o}from"./search-CmSgjNoH.js";import{a as s,c,d as l,f as u,i as d,l as f,n as p,o as m,r as h,s as g,t as _,u as v}from"./globe-BHLMmvMJ.js";import{n as y,t as b}from"./history-CVnSJt3f.js";var x=n({Default:()=>T,ShowMoreItem:()=>j,WithScopeAndItems:()=>D,__namedExportsOrder:()=>M,default:()=>w}),S,C,w,T,E,D,O,k,A,j,M,N=e((()=>{p(),y(),o(),S=t(r(),1),v(),c(),m(),d(),u(),C=i(),w={title:`Inputs / Search`,component:l,argTypes:{children:{control:{disable:!0}},illustration:{control:{disable:!0}},scopes:{control:{disable:!0}},messageArea:{control:{disable:!0}},action:{control:{disable:!0}}},tags:[`package:@ui5/webcomponents-fiori`,`experimental`]},T={},E=[{name:`Laptop`,scope:`products`},{name:`Leave Requests`,scope:`apps`},{name:`Log work`,scope:`apps`},{name:`Manage Products`,scope:`apps`},{name:`Mobile Phones`,scope:`products`},{name:`Tablet`,scope:`products`}],D={args:{showClearIcon:!0,placeholder:`Search Apps, Products`,scopeValue:`all`,scopes:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(h,{text:`All`,value:`all`}),(0,C.jsx)(h,{text:`Apps`,value:`apps`}),(0,C.jsx)(h,{text:`Products`,value:`products`})]})},render(e){let[t,n]=(0,S.useState)(E),r=t=>{e.onScopeChange(t);let{scope:r}=t.detail;r.text===`All`?n(E):n(E.filter(e=>e.scope===r.text.toLowerCase()))};return(0,C.jsx)(l,{...e,onScopeChange:r,children:t.map(e=>(0,C.jsx)(f,{text:e.name,scopeName:e.scope},e.name))})}},O=[{text:`Search Item 1`,icon:b},{text:`Search Item 2`,icon:a},{text:`Search Item 3`,icon:b},{text:`Search Item 4`,icon:b},{text:`Search Item 5`,icon:a},{text:`Search Item 6`,icon:_}],k=O.slice(0,3),A=O.slice(3),j={args:{showClearIcon:!0,placeholder:`Placeholder`},render(e){let[t,n]=(0,S.useState)(!1);return(0,C.jsxs)(l,{...e,children:[(0,C.jsxs)(g,{headerText:`Group Header 1`,children:[k.map(e=>(0,C.jsx)(f,{text:e.text,icon:e.icon},e.text)),!t&&(0,C.jsx)(s,{itemsToShowCount:A.length,onClick:()=>{n(!0)}}),t&&A.map(e=>(0,C.jsx)(f,{text:e.text,icon:e.icon},e.text))]}),(0,C.jsxs)(g,{headerText:`Group Header 2`,children:[(0,C.jsx)(f,{text:`Search Item 1`,icon:b}),(0,C.jsx)(f,{text:`Search Item 2`,icon:b}),(0,C.jsx)(f,{text:`Search Item 3`,icon:_})]})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{}`,...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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