import{j as e}from"./iframe-Cs-5LFqP.js";import{useMDXComponents as p}from"./index-4_wYEVSM.js";import{A as o}from"./ArgTypesWithNote-lsn4A74t.js";import{C as c}from"./ControlsWithNote-DkHNPNjQ.js";import{D as h}from"./DocsHeader-C63k-aiO.js";import{F as x}from"./CommandsAndQueries-pWQonQL4.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-Ml05RtQw.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-CzE7HSk3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bj7p5WqA.js";import"./information-CG8AIpkm.js";import"./sys-enter-2-DunLLOB1.js";import"./alert-IqDG9ylo.js";import"./Tag-ChHbpWGO.js";import"./index-BUJAXr9p.js";import"./index-B7_af3sB.js";import"./Link-DZfJcWGy.js";import"./copy-CSR0A_Ed.js";import"./copy-DN4ABQ_i.js";import"./GitHub-Mark-CGoBiWKN.js";import"./TableOfContent-ebLhGbNZ.js";import"./index-tt3zNDS3.js";import"./index-DkXjtxgK.js";import"./index-k6loN7up.js";import"./index-CHkORph3.js";import"./index-CmIMKxCO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Oma2N1kf.js";import"./addCustomCSSWithScoping-BCQiyr6x.js";import"./general-leave-request-Zc9TwFLs.js";import"./index-h8anB-3B.js";import"./navigation-right-arrow-mkQxvhCZ.js";import"./navigation-down-arrow-BLqwS3WT.js";import"./navigation-right-arrow-MiZu20cu.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
