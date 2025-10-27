import{j as e}from"./iframe-ByiiILXu.js";import{useMDXComponents as p}from"./index-DYpmG0kU.js";import{A as o}from"./ArgTypesWithNote-CKdhDpiv.js";import{C as c}from"./ControlsWithNote-AjBaHx3q.js";import{D as h}from"./DocsHeader-6lb3uMew.js";import{F as x}from"./CommandsAndQueries-ByQHAThU.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-DrNhXH8Y.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-DkTdM-8Q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B20WCXLG.js";import"./information-tN-lRIsU.js";import"./sys-enter-2-eFq8QnH9.js";import"./alert-DCLbzn71.js";import"./Tag-WBOqYu0X.js";import"./index-COPBcnoz.js";import"./index-C2Yky6-6.js";import"./Link-DX54TCdQ.js";import"./copy-DxuTh0d6.js";import"./copy-08ilKZ0c.js";import"./GitHub-Mark-D9ZH9lDK.js";import"./TableOfContent-ojyBFHoB.js";import"./index-8yUpcOxv.js";import"./index-y2DJOFuG.js";import"./index-C0jaTjnN.js";import"./index-BkgEbRU4.js";import"./index-DJ81LlKI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-7LYDV0x0.js";import"./addCustomCSSWithScoping-DIYkZsvP.js";import"./general-leave-request-DEjpYoSq.js";import"./index-DvDvcTBA.js";import"./navigation-right-arrow-6AlcfDn3.js";import"./navigation-down-arrow-DFV_iHIE.js";import"./navigation-right-arrow-vs1LV1Nl.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
