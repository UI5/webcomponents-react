import{j as e}from"./iframe-BMswfRdZ.js";import{useMDXComponents as p}from"./index-MaqCtoEe.js";import{A as o}from"./ArgTypesWithNote-BvJFmjv5.js";import{C as c}from"./ControlsWithNote-C5w7tvs5.js";import{D as h}from"./DocsHeader-DyZhqw-W.js";import{F as x}from"./CommandsAndQueries-B0EQ2-2W.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-BZVeQw2D.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-CnbHjUpq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-ZVjbqr.js";import"./information-1i220cDO.js";import"./sys-enter-2-CawaAm0L.js";import"./alert-uwYQHS-7.js";import"./Tag-BVHvhlCz.js";import"./index-mp2uLi6B.js";import"./index-FIeWjkuH.js";import"./Link-BGQljDJU.js";import"./copy-B-yWQLT6.js";import"./copy-Cy5PMYPR.js";import"./GitHub-Mark-CpBusc3m.js";import"./TableOfContent-C_ApkRdL.js";import"./index-Cf0lk0Qk.js";import"./index-B-CAKhwh.js";import"./index-B7ZM6Wte.js";import"./index-E1nxDY_p.js";import"./index-Dm33NnkB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzwX1HTL.js";import"./addCustomCSSWithScoping-DQLnc9QR.js";import"./general-leave-request-DZLpt5-N.js";import"./index-Db9h7yxY.js";import"./navigation-right-arrow-DhhhdeU2.js";import"./navigation-down-arrow-CWAFdQMV.js";import"./navigation-right-arrow-DFMNvzTi.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
