import{j as e}from"./iframe-C_ZjSpvw.js";import{useMDXComponents as p}from"./index-D99mDNJl.js";import{A as o}from"./ArgTypesWithNote-B3zQnEY5.js";import{C as c}from"./ControlsWithNote-DZwuVK-s.js";import{D as h}from"./DocsHeader-Ch568gUM.js";import{F as x}from"./CommandsAndQueries-DoIIg28U.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-DhOgu6aS.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-0t4DjjIr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CFaSARe7.js";import"./information-DjWFOZk0.js";import"./sys-enter-2-Bcyd_2Ym.js";import"./alert-D6bEf6aa.js";import"./Tag-BTyw-Q9o.js";import"./index-CQkucwsg.js";import"./index-uA7KkxCs.js";import"./Link-DjlLuVoY.js";import"./copy-B1L4YoL5.js";import"./copy-o8vYo4aG.js";import"./GitHub-Mark-BUjikfMH.js";import"./TableOfContent-r9ezFAWt.js";import"./index-BT7ySl7f.js";import"./index-Cj8N_CMD.js";import"./index-B7Kpc4-r.js";import"./index-Arj44yrL.js";import"./index-xyj4veU8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dvgs_TOk.js";import"./addCustomCSSWithScoping-Bja_IMOg.js";import"./general-leave-request-BNOpaTqR.js";import"./index-D1q_umKP.js";import"./navigation-right-arrow-C6IZxjIu.js";import"./navigation-down-arrow-BbdKFfmI.js";import"./navigation-right-arrow-Bw3RXKs8.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
