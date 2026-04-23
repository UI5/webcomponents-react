import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-CNp2Ms8r.js";import{i as n,n as r,r as i,t as a}from"./TreeItemCustom-Bq0gwEvi.js";import{r as o}from"./react-CSLkFeD8.js";import{_ as s,m as c,o as l,p as u,s as d,t as f}from"./components-Cg26NzkQ.js";import{_ as p,d as m,o as h,r as g,u as _}from"./blocks-BObCibHN.js";import{n as v,t as y}from"./SubcomponentsSection-DoWmTHU2.js";import{Default as b,LazyLoading as x,n as S,t as C}from"./Tree.stories-BP_Z9_Fq.js";function w(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,pre:`pre`,...o(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(m,{of:C}),`
`,(0,E.jsx)(d,{of:C,since:`0.10.0`}),`
`,(0,E.jsx)(`br`,{}),`
`,(0,E.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,E.jsx)(g,{of:b}),`
`,(0,E.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,E.jsx)(u,{of:b}),`
`,(0,E.jsx)(t.h1,{id:`more-examples`,children:`More Examples`}),`
`,(0,E.jsx)(`br`,{}),`
`,(0,E.jsx)(t.h2,{id:`lazy-load-treeitems`,children:`Lazy Load TreeItems`}),`
`,(0,E.jsx)(g,{of:x}),`
`,(0,E.jsx)(t.h3,{id:`code`,children:`Code`}),`
`,(0,E.jsx)(t.pre,{children:(0,E.jsx)(t.code,{className:`language-jsx`,children:`const LazyLoadingTree = () => {
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
`,(0,E.jsx)(t.h2,{id:`treeitem`,children:`TreeItem`}),`
`,(0,E.jsx)(h,{of:i}),`
`,(0,E.jsx)(c,{metaOf:C,of:i}),`
`,(0,E.jsx)(t.h2,{id:`treeitemcustom`,children:`TreeItemCustom`}),`
`,(0,E.jsx)(h,{of:a}),`
`,(0,E.jsx)(c,{metaOf:C,of:a}),`
`,(0,E.jsx)(l,{})]})}function T(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,E.jsx)(t,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;e((()=>{E=t(),s(),f(),v(),p(),n(),r(),S()}))();export{T as default};