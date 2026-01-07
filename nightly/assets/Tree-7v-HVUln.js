import{j as e}from"./iframe-BZdybOkV.js";import{useMDXComponents as p}from"./index-BK2w2T2j.js";import{A as o}from"./ArgTypesWithNote-BF8XFaT6.js";import{C as c}from"./ControlsWithNote-N2Edy_L7.js";import{D as h}from"./DocsHeader-BhxEfJQ0.js";import{F as x}from"./CommandsAndQueries-6n7MF1sx.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-CP8RdzkU.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-CWYoN7UF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DK3P8KDJ.js";import"./information-jzJbJB_1.js";import"./sys-enter-2-DNIkITIL.js";import"./alert-CQPwWPwe.js";import"./Tag-BzbxKur3.js";import"./index-BZ_ngRjy.js";import"./index-S-6P9mRF.js";import"./Link-ko8YnVxU.js";import"./copy-CNB7hovH.js";import"./copy-CIp50y-g.js";import"./GitHub-Mark-DWF2R_nS.js";import"./TableOfContent-BXnsnagM.js";import"./index-BIP_3DrI.js";import"./index-QZaRYYY3.js";import"./index-DrYECb-G.js";import"./index-Ceagbcxz.js";import"./index-DEm1B2JB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-s2glcktZ.js";import"./addCustomCSSWithScoping-DEKm0mwm.js";import"./general-leave-request-BzuzX2cq.js";import"./index-C13ceQxY.js";import"./navigation-right-arrow-YVh7qiaT.js";import"./navigation-down-arrow--7f146sQ.js";import"./navigation-right-arrow-CVnmAike.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
