import{j as e}from"./iframe-CwFVqG2B.js";import{useMDXComponents as p}from"./index-DLCucreN.js";import{A as o}from"./ArgTypesWithNote-CX3Bm6Kd.js";import{C as c}from"./ControlsWithNote-BOame1rn.js";import{D as h}from"./DocsHeader-BLFXiIJM.js";import{F as x}from"./CommandsAndQueries-CPEglOxS.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-BPmtq9pk.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-C1cPNxHi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dun977o4.js";import"./information-BBSRrLZV.js";import"./sys-enter-2-D4JTR3Iq.js";import"./alert-vk5CGtWZ.js";import"./Tag-BAaIxfbN.js";import"./index-CCtj0faG.js";import"./index-BdiKbL49.js";import"./Link-LJw1ucv9.js";import"./copy-DFplFJsA.js";import"./copy-BGYvKTCJ.js";import"./GitHub-Mark-CX4tnN_g.js";import"./TableOfContent-890WGvsJ.js";import"./index-graRZSxK.js";import"./index-B1OrttLk.js";import"./index-CMU9Wk5L.js";import"./index-Cs50Favg.js";import"./index-DS4oeWmb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BQrnNeIO.js";import"./addCustomCSSWithScoping-C4aLMSRb.js";import"./general-leave-request-CPQcWlh8.js";import"./index-C0EOMgqx.js";import"./navigation-right-arrow-B5fnZfYe.js";import"./navigation-down-arrow-CKNuRE7w.js";import"./navigation-right-arrow-CUpkPzT9.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
