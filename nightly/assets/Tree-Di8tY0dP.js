import{j as e}from"./iframe-CLRwe_KU.js";import{useMDXComponents as p}from"./index-zMDfw_hp.js";import{A as o}from"./ArgTypesWithNote-BhV7LOCH.js";import{C as c}from"./ControlsWithNote-j11wmhcQ.js";import{D as h}from"./DocsHeader-tjuWzKnX.js";import{F as x}from"./Footer-CY1WkGvT.js";import"./CommandsAndQueries-Qa8JAgCb.js";import"./PageNotFound-Et84DOUJ.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as m}from"./blocks-B36l4j9a.js";import{C as r,D as s,L as u,T as a,a as d}from"./Tree.stories-D5nOy0Mp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Di2mC61N.js";import"./information-BHtbew5c.js";import"./sys-enter-2-CeQJ4tH7.js";import"./alert-DGiHprsp.js";import"./Tag-DLCMnG64.js";import"./index-rGV23ifs.js";import"./index-DhQiji0Y.js";import"./Link-CQgjpXoE.js";import"./copy-tZxK2l79.js";import"./copy-C_QN3LWn.js";import"./GitHub-Mark-BTLyGR0g.js";import"./TableOfContent-Cm92Ha4S.js";import"./index-BqJblJml.js";import"./index-9xLRD1c-.js";import"./index-BFFCZnKZ.js";import"./index-CZmIgKIQ.js";import"./index-B905PbE4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B5LoBpt5.js";import"./addCustomCSSWithScoping-BmaQonB-.js";import"./Illustrations-BsZAm-cT.js";import"./i18n-defaults-CFWtSmu6.js";import"./general-leave-request-CEPVpwM7.js";import"./index-CWV1r8Rz.js";import"./navigation-right-arrow-BF4xw2D4.js";import"./navigation-down-arrow-jRSiZ6yO.js";import"./navigation-right-arrow-C-ZNhxUq.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
`,e.jsx(h,{of:r,since:"0.10.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:s}),`
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
`,e.jsx(m,{of:a}),`
`,e.jsx(o,{metaOf:r,of:a}),`
`,e.jsx(t.h2,{id:"treeitemcustom",children:"TreeItemCustom"}),`
`,e.jsx(m,{of:d}),`
`,e.jsx(o,{metaOf:r,of:d}),`
`,e.jsx(x,{})]})}function oe(n={}){const{wrapper:t}={...p(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{oe as default};
