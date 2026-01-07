import{j as e}from"./iframe-vPuL6nrR.js";import{useMDXComponents as p}from"./index-SqnB7SsH.js";import{A as o}from"./ArgTypesWithNote-CUtkZwAJ.js";import{C as c}from"./ControlsWithNote-a1UinLEk.js";import{D as h}from"./DocsHeader-CSCF6kAf.js";import{F as x}from"./CommandsAndQueries-BhV0DcZ1.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-CGVrLY5L.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-yZotnwxa.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CrDwtJBU.js";import"./information-D9zj9sOE.js";import"./sys-enter-2-D6w_QQfA.js";import"./alert-C_Ss2xwM.js";import"./Tag-Bv6LdF2m.js";import"./index-CfldzWz8.js";import"./index-BrWx5AOh.js";import"./Link-eKxzOHxo.js";import"./copy-QG4ReKgs.js";import"./copy-DGJagZ4x.js";import"./GitHub-Mark-BYVMr9TD.js";import"./TableOfContent-Tu4xnnoI.js";import"./index-MOLGybyv.js";import"./index-D8Laxk3p.js";import"./index-C6iociGO.js";import"./index-DeGdMjr2.js";import"./index-D5bO2WHW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DQtnDDkb.js";import"./addCustomCSSWithScoping-Ddp0ymp7.js";import"./general-leave-request-Dgp02FHs.js";import"./index-DcvU_XKJ.js";import"./navigation-right-arrow-BR8wObxR.js";import"./navigation-down-arrow-zIYYcACt.js";import"./navigation-right-arrow-DIDO5vFl.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
