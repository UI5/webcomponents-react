import{j as e}from"./iframe-4qrVzB25.js";import{useMDXComponents as p}from"./index-C23NGFAV.js";import{A as o}from"./ArgTypesWithNote-DyW9y6b1.js";import{C as c}from"./ControlsWithNote-BYEE2MCW.js";import{D as h}from"./DocsHeader-DT0KhBwl.js";import{F as x}from"./CommandsAndQueries-C8f_O47Z.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-CyApLjCn.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-BmS2wj8-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BHBPbkXo.js";import"./information-DyICkYh-.js";import"./sys-enter-2-I-7Y6xsp.js";import"./alert-DbMRFtnZ.js";import"./Tag-DxNYrBt-.js";import"./index-CU3hZFou.js";import"./index-MWca-2b0.js";import"./Link-Cc0E88FG.js";import"./copy-B-DhHHC8.js";import"./copy-BwZFHKgv.js";import"./GitHub-Mark-CEvF6Ciw.js";import"./TableOfContent-CvIukNHP.js";import"./index-Cj8ZVdQX.js";import"./index-bsQInf2g.js";import"./index-CMfGGfhU.js";import"./index-Cvq3zOuj.js";import"./index-Cjln1VVF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BbqnCkxg.js";import"./addCustomCSSWithScoping-DQAaXiXr.js";import"./general-leave-request-CkIreW5S.js";import"./index-CC5rZlHP.js";import"./navigation-right-arrow-DTS3LoQE.js";import"./navigation-down-arrow-CW_68QW5.js";import"./navigation-right-arrow-XZ7xPYvX.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
