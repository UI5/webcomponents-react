import{j as e}from"./iframe-C4uJ0-S9.js";import{useMDXComponents as p}from"./index-7yLcmjFP.js";import{A as o}from"./ArgTypesWithNote-n8jO8V14.js";import{C as c}from"./ControlsWithNote-Xba4zRPV.js";import{D as h}from"./DocsHeader-CZJ1s6Cq.js";import{F as x}from"./CommandsAndQueries-B5y1yjIv.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-CBo7THUN.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-B2z2xgM3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-qq5TSXaV.js";import"./information-CGc2Gyu5.js";import"./sys-enter-2-8QAf9lpT.js";import"./alert-CoEJOo1j.js";import"./Tag-BnlqX_yt.js";import"./index-BCADQjVB.js";import"./index-KgBIbLv3.js";import"./Link-BtGKi5yG.js";import"./copy-DRncM3oG.js";import"./copy-CcXkheL2.js";import"./GitHub-Mark-AuYrpZ4h.js";import"./TableOfContent-CwQN62Px.js";import"./index-Cqxv-6mm.js";import"./index-Cxz2391_.js";import"./index-DOaerJgo.js";import"./index-ccsE6YRa.js";import"./index-DWkRZCu2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DS9Hrz5j.js";import"./addCustomCSSWithScoping-CUwa-fZt.js";import"./general-leave-request-Ddn2qLOs.js";import"./index-CjnSo5ff.js";import"./navigation-right-arrow-jw1yzYIV.js";import"./navigation-down-arrow-DVAbjQ7x.js";import"./navigation-right-arrow-BVMX59iQ.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
`,e.jsx(h,{of:r,since:"0.10.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:m}),`
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
`,e.jsx(s,{of:a}),`
`,e.jsx(o,{metaOf:r,of:a}),`
`,e.jsx(t.h2,{id:"treeitemcustom",children:"TreeItemCustom"}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(o,{metaOf:r,of:d}),`
`,e.jsx(x,{})]})}function ee(n={}){const{wrapper:t}={...p(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{ee as default};
