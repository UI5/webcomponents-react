import{j as e}from"./iframe-CirU0arv.js";import{useMDXComponents as p}from"./index-Dp75W_mY.js";import{A as o}from"./ArgTypesWithNote-BTy7rjUR.js";import{C as c}from"./ControlsWithNote-tO4J5snW.js";import{D as h}from"./DocsHeader-8R2ciWLq.js";import{F as x}from"./CommandsAndQueries-C-xkLV_B.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-BZ_tUEGn.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-BksepWh-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DkGOPQ-r.js";import"./information-Z8YFf98o.js";import"./sys-enter-2-5bsV2B9A.js";import"./alert-FLQkBZSI.js";import"./Tag-BIXyVbav.js";import"./index-4atoEi4m.js";import"./index-Dxm6BO0O.js";import"./Link-cWf0Ff_j.js";import"./copy-DsC2VAeq.js";import"./copy-BRU5ISS0.js";import"./GitHub-Mark-Z7M2BZpt.js";import"./TableOfContent-DKP86iI-.js";import"./index-BrqGQq-t.js";import"./index-BUDPFl9U.js";import"./index-B7a5GE08.js";import"./index-VennLGrv.js";import"./index-DCit48ot.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CtMJGvuv.js";import"./addCustomCSSWithScoping-DTjbXshP.js";import"./general-leave-request-Cc2UvVhw.js";import"./index-MEM9Yvlw.js";import"./navigation-right-arrow-BbxMtceQ.js";import"./navigation-down-arrow-DDJMQEkQ.js";import"./navigation-right-arrow-EmtR-Po3.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
