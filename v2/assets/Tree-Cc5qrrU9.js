import{j as e}from"./iframe-CFWpN4R7.js";import{useMDXComponents as p}from"./index-dB03iz0B.js";import{A as o}from"./ArgTypesWithNote-Dt2WDsHa.js";import{C as c}from"./ControlsWithNote-C70Tw8LD.js";import{D as h}from"./DocsHeader-DGz5p46N.js";import{F as x}from"./Footer-DJewOY_X.js";import"./CommandsAndQueries-CCwXwUid.js";import"./PageNotFound-CLSfRNnq.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as m}from"./blocks-Aj9mLxPA.js";import{C as r,D as s,L as u,T as a,a as d}from"./Tree.stories-DJ7DfYaV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BhKFh4UU.js";import"./information-CkAnn-lR.js";import"./sys-enter-2-D36-WSJV.js";import"./alert-CoDmVWPa.js";import"./Tag-B06DXZI6.js";import"./index-nHUwJst8.js";import"./index-lnQyu4TM.js";import"./Link-RyF9dh8t.js";import"./copy-BFI66KPL.js";import"./copy-DSqUQhHe.js";import"./GitHub-Mark-DdMj_2nh.js";import"./TableOfContent-5EAtsXjY.js";import"./index-B803YP9c.js";import"./index-CeR8RWqv.js";import"./index-D83xFEsI.js";import"./index-4-t9AGVk.js";import"./index-DnsyYKyj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_Q3wyl1.js";import"./addCustomCSSWithScoping-CJGgSOK2.js";import"./Illustrations-dv6stKlC.js";import"./i18n-defaults-CFWtSmu6.js";import"./general-leave-request-wEJ-WKDw.js";import"./index-DBJSqui-.js";import"./navigation-right-arrow-BAsSc-Qi.js";import"./navigation-down-arrow-CrgxLPHm.js";import"./navigation-right-arrow-B7tVG0rj.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
