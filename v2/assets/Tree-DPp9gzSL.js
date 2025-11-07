import{j as e}from"./iframe-Dt3EMGkV.js";import{useMDXComponents as p}from"./index-B20WHrxF.js";import{A as o}from"./ArgTypesWithNote-DCBsRlY0.js";import{C as c}from"./ControlsWithNote-C8ZAtGvJ.js";import{D as h}from"./DocsHeader-BFCSvIjI.js";import{F as x}from"./CommandsAndQueries-B8G4x6Z0.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-BHc609zj.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-DPIGftl9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-4o5lIxTZ.js";import"./information-CdIvcuNT.js";import"./sys-enter-2-DUO5Ca52.js";import"./alert-AiSO8uTO.js";import"./Tag-BlFr4TrL.js";import"./index-BTxuEF3n.js";import"./index-B13Eko7E.js";import"./Link-BFnbyO9N.js";import"./copy-CKK4O4gq.js";import"./copy-CTtd4S6z.js";import"./GitHub-Mark-lQb1Kumq.js";import"./TableOfContent-BrPxZHd0.js";import"./index-DwsDjCru.js";import"./index-DYPFLkL0.js";import"./index-3ZVLHlpm.js";import"./index-ChSomlCw.js";import"./index-CGnaTP2m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DIflbpx1.js";import"./addCustomCSSWithScoping--L6xjApc.js";import"./general-leave-request-FHP1r6we.js";import"./index-BBLdtj_k.js";import"./navigation-right-arrow-BkvomJoX.js";import"./navigation-down-arrow-CM9oa_p2.js";import"./navigation-right-arrow-DgXFepz4.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
