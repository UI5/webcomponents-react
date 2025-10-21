import{j as e}from"./iframe-pfqRYewB.js";import{useMDXComponents as p}from"./index-DxYcUkXM.js";import{A as o}from"./ArgTypesWithNote-CQMKo8WC.js";import{C as c}from"./ControlsWithNote-1jH7cerp.js";import{D as h}from"./DocsHeader-C02JYCTh.js";import{F as x}from"./CommandsAndQueries-CBK4GytM.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-CN6sML6r.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-CE95sJIj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-TMKVCirT.js";import"./information-BrehxxGu.js";import"./sys-enter-2-CTsRx7VM.js";import"./alert-qaqpTU-O.js";import"./Tag-DOr7yVDv.js";import"./index-DQUabOTm.js";import"./index-DQ0pLIsd.js";import"./Link-C4McI5Wx.js";import"./copy-C6T5m5t-.js";import"./copy-0Cu3Y4If.js";import"./GitHub-Mark-DJ5zcdzH.js";import"./TableOfContent-C20Gax9P.js";import"./index-BOCv1nQg.js";import"./index-C87hBs3b.js";import"./index-D05B83RK.js";import"./index-5KySo-3G.js";import"./index-BkIEU9nM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BJxPXkiU.js";import"./addCustomCSSWithScoping-D2yzvGyj.js";import"./general-leave-request-Byq-b-gI.js";import"./index-DPBow1JV.js";import"./navigation-right-arrow-B9Xr6jRR.js";import"./navigation-down-arrow-C-s-4mEI.js";import"./navigation-right-arrow-C-NoESB4.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
