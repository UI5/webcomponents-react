import{n as e}from"./chunk-zsgVPwQN.js";import{Gt as t,Jt as n,Kt as r,Wm as i,qt as a}from"./iframe-D9IUu2NC.js";import{r as o}from"./react-5KuaLat8.js";import{c as s,h as c,m as l,s as u,t as d,v as f}from"./components-C00obw89.js";import{_ as p,d as m,o as h,r as g,u as _}from"./blocks-DR1MtBDA.js";import{n as v,t as y}from"./SubcomponentsSection-DDnl7AR6.js";import{Default as b,LazyLoading as x,n as S,t as C}from"./Tree.stories-C6W2Isjx.js";function w(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,pre:`pre`,...o(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(m,{of:C}),`
`,(0,E.jsx)(s,{of:C,since:`0.10.0`}),`
`,(0,E.jsx)(`br`,{}),`
`,(0,E.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,E.jsx)(g,{of:b}),`
`,(0,E.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,E.jsx)(l,{of:b}),`
`,(0,E.jsx)(n.h1,{id:`more-examples`,children:`More Examples`}),`
`,(0,E.jsx)(`br`,{}),`
`,(0,E.jsx)(n.h2,{id:`lazy-load-treeitems`,children:`Lazy Load TreeItems`}),`
`,(0,E.jsx)(g,{of:x}),`
`,(0,E.jsx)(n.h3,{id:`code`,children:`Code`}),`
`,(0,E.jsx)(n.pre,{children:(0,E.jsx)(n.code,{className:`language-jsx`,children:`const LazyLoadingTree = () => {
  const [lazyChildren, setLazyChildren] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleItemToggle = (e) => {
    if (e.detail.item.dataset.id === 'lazychildren' && !lazyChildren) {
      e.preventDefault();
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setLazyChildren(
          <>
            <TreeItem text="Tree 3.1" />
            <TreeItem text="Tree 3.2" />
          </>
        );
        e.detail.item.toggle();
      }, 3000);
    }
  };
  return (
    <BusyIndicator active={loading} style={{ width: '100%' }}>
      <Tree onItemToggle={handleItemToggle}>
        <TreeItem text="Has pre-loaded children">
          <TreeItem text="Tree 1.1" />
          <TreeItem text="Tree 1.2" />
        </TreeItem>
        <TreeItem text="Has no children" />
        <TreeItem text="Has children but not yet loaded" hasChildren icon={dlCloutIcon} data-id="lazychildren">
          {lazyChildren}
        </TreeItem>
      </Tree>
    </BusyIndicator>
  );
};
`})}),`
`,(0,E.jsx)(_,{children:y}),`
`,(0,E.jsx)(n.h2,{id:`treeitem`,children:`TreeItem`}),`
`,(0,E.jsx)(h,{of:a}),`
`,(0,E.jsx)(c,{metaOf:C,of:a}),`
`,(0,E.jsx)(n.h2,{id:`treeitemcustom`,children:`TreeItemCustom`}),`
`,(0,E.jsx)(h,{of:t}),`
`,(0,E.jsx)(c,{metaOf:C,of:t}),`
`,(0,E.jsx)(u,{})]})}function T(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,E.jsx)(t,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;e((()=>{E=i(),f(),d(),v(),p(),n(),r(),S()}))();export{T as default};