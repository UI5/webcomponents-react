import{j as e}from"./iframe-COKmt9GX.js";import{useMDXComponents as p}from"./index-CzY2e8So.js";import{A as o}from"./ArgTypesWithNote-B1d80Kwh.js";import{C as c}from"./ControlsWithNote-GGi7HBIW.js";import{D as h}from"./DocsHeader-Cr0putdn.js";import{F as x}from"./CommandsAndQueries-DSaWGMGq.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-BC1CQ7iN.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-BEx_LVvN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C27X2XUm.js";import"./information-CfFvhrkY.js";import"./sys-enter-2-BMhsQaT7.js";import"./alert-Cbc0R2SK.js";import"./Tag-DloN_KbF.js";import"./index-WnbZc56M.js";import"./index-DjGJsOok.js";import"./Link-BA2-5m1C.js";import"./copy-aXFxWRJ8.js";import"./copy-CyMKHNyy.js";import"./GitHub-Mark-CWHMnGQ2.js";import"./TableOfContent-BJyZaqmf.js";import"./index-CQHeIIHf.js";import"./index-C6DL1JMC.js";import"./index-BVPy0Kvc.js";import"./index-CfIzOoJC.js";import"./index-D5ATbVNg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CXoeJUKj.js";import"./addCustomCSSWithScoping-CbQo03JJ.js";import"./general-leave-request-DxQfDsYT.js";import"./index-DhVmRSsQ.js";import"./navigation-right-arrow-CZWnArrm.js";import"./navigation-down-arrow-RRwxkr-f.js";import"./navigation-right-arrow-BoUWLgXr.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
