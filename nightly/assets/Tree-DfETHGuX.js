import{j as e}from"./iframe-DvHwewhR.js";import{useMDXComponents as p}from"./index-CLaogw5S.js";import{A as o}from"./ArgTypesWithNote-By_aH_AE.js";import{C as c}from"./ControlsWithNote-B6M_GQJb.js";import{D as h}from"./DocsHeader-BH0B3pCH.js";import{F as x}from"./CommandsAndQueries-BNdncSiU.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-CB2I7-76.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-DlgyMzaN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bt09l3yh.js";import"./information-CIIJNTCs.js";import"./sys-enter-2-CzO95d9X.js";import"./alert-Dwvb1Up2.js";import"./Tag-CbT4PDaW.js";import"./index-Dxi3lBUy.js";import"./index-CdEjZa35.js";import"./Link-BbkEIv5w.js";import"./copy-CLgzmG1F.js";import"./copy-CCEG4Gow.js";import"./GitHub-Mark-BD4VRPkp.js";import"./TableOfContent-CqehIVhz.js";import"./index-KqEBtHRf.js";import"./index-BPXy8zzT.js";import"./index-Dm8v7iX1.js";import"./index-BcAV-ghG.js";import"./index-BpY-7uI8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CoI2TKPf.js";import"./addCustomCSSWithScoping-B6Lor8tu.js";import"./general-leave-request-f4HkoQ9N.js";import"./index-BtAgcYwE.js";import"./navigation-right-arrow-CCD3zipp.js";import"./navigation-down-arrow-CvLDjJLV.js";import"./navigation-right-arrow-BYbNeqhe.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
