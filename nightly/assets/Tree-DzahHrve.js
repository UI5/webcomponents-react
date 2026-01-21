import{j as e}from"./iframe-f3iLPpTx.js";import{useMDXComponents as p}from"./index-Cg-5LGOy.js";import{A as o}from"./ArgTypesWithNote-DYDMdG_J.js";import{C as c}from"./ControlsWithNote-Bu0kyXyv.js";import{D as h}from"./DocsHeader-B-7a3kS4.js";import{F as x}from"./CommandsAndQueries-ANshK3xd.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-DoSJn-9n.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-BwxWdTuf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C4t1_KXY.js";import"./information-D9tZEGE7.js";import"./sys-enter-2-DE9YD12B.js";import"./alert-BBZcuL-v.js";import"./Tag-HMKYn_gR.js";import"./index-C81LpEbs.js";import"./index-DzXajydQ.js";import"./Link-EHnjrAaJ.js";import"./copy-DoG1WmGJ.js";import"./copy-BPmTOQZZ.js";import"./GitHub-Mark-Bin-zAIE.js";import"./TableOfContent-D-qzXXkG.js";import"./index-TWvX3fxG.js";import"./index-oCC-c3oA.js";import"./index-Dq8bnboK.js";import"./index-C3jxOnm0.js";import"./index-DY8Z5oY2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ce84hNWi.js";import"./addCustomCSSWithScoping-FBci05L8.js";import"./general-leave-request-DV039atr.js";import"./index-x-l5-c_J.js";import"./navigation-right-arrow-BU9xMcPj.js";import"./navigation-down-arrow-HRklLRvN.js";import"./navigation-right-arrow-DnSqIm0M.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
