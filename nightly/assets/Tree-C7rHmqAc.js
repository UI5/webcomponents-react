import{j as e}from"./iframe-B8dw45Pm.js";import{useMDXComponents as p}from"./index-CDTgJgbW.js";import{A as o}from"./ArgTypesWithNote-DitSOjhQ.js";import{C as c}from"./ControlsWithNote-f9_HgGwn.js";import{D as h}from"./DocsHeader-o7_-BHSH.js";import{F as x}from"./Footer-DGDb1ilk.js";import"./CommandsAndQueries-Bl0bAz-u.js";import"./PageNotFound-DfoC1Yw_.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as m}from"./blocks-CPHZ0sq-.js";import{C as r,D as s,L as u,T as a,a as d}from"./Tree.stories-BfER8Nrz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D7N30NY8.js";import"./information-SmgVOr7y.js";import"./sys-enter-2-CP5yuJAd.js";import"./alert-8CVWRnEr.js";import"./Tag-WXORlQvy.js";import"./index-DMbxZG4m.js";import"./index-DOUsK0Sd.js";import"./Link-BB11RQL1.js";import"./copy-CzdwgprO.js";import"./copy-KGIzxzBV.js";import"./GitHub-Mark-FW8PEMRV.js";import"./TableOfContent-BCSvRamV.js";import"./index-S966bfr_.js";import"./index-6NVZEy4N.js";import"./index-C46a650J.js";import"./index-BGlbQvkZ.js";import"./index-QyvR-n2-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B1CIx6RM.js";import"./addCustomCSSWithScoping-CsB8TxAm.js";import"./Illustrations-Df2_smGK.js";import"./i18n-defaults-CFWtSmu6.js";import"./general-leave-request-3B9crYTh.js";import"./index-B_Jr5JgK.js";import"./navigation-right-arrow-BdBKLkX8.js";import"./navigation-down-arrow-SQxN7jii.js";import"./navigation-right-arrow-DLo6eUJB.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
`,e.jsx(h,{of:r,since:"0.10.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(t.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"lazy-load-treeitems",children:"Lazy Load TreeItems"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(t.h3,{id:"code",children:"Code"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const LazyLoadingTree = () => {
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
`,e.jsx(T,{children:f}),`
`,e.jsx(t.h2,{id:"treeitem",children:"TreeItem"}),`
`,e.jsx(m,{of:a}),`
`,e.jsx(o,{metaOf:r,of:a}),`
`,e.jsx(t.h2,{id:"treeitemcustom",children:"TreeItemCustom"}),`
`,e.jsx(m,{of:d}),`
`,e.jsx(o,{metaOf:r,of:d}),`
`,e.jsx(x,{})]})}function oe(n={}){const{wrapper:t}={...p(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{oe as default};
