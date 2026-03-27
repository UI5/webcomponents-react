import{j as e}from"./iframe-GiALwnwk.js";import{useMDXComponents as p}from"./index-D5Br25pp.js";import{A as o}from"./ArgTypesWithNote-BeYGqatD.js";import{C as c}from"./ControlsWithNote-Cgmfge1m.js";import{D as h}from"./DocsHeader-BqCCLfbL.js";import{F as x}from"./Footer-CTpmUzQu.js";import"./CommandsAndQueries-C_IHadBx.js";import"./PageNotFound-lhidYwaf.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as m}from"./blocks-CWQEoHYq.js";import{C as r,D as s,L as u,T as a,a as d}from"./Tree.stories-Cet-qZAG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Df-74Kk_.js";import"./information-DVV2_7m2.js";import"./sys-enter-2-BLXa0HBj.js";import"./alert-C-pLX4kq.js";import"./Tag-LkaAJwXo.js";import"./index-D48RNIki.js";import"./index-C2OBDsL0.js";import"./Link-Cl18BXak.js";import"./copy-swqFIkzM.js";import"./copy-BjtWQX8c.js";import"./GitHub-Mark-CONmBkWC.js";import"./TableOfContent-B7J8UzQ4.js";import"./index-DmWjxGkj.js";import"./index-_Dwwjvl6.js";import"./index-j7N-4kUz.js";import"./index-DsAl_UTx.js";import"./index-Q6Oco0u-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-3O-UdkwG.js";import"./addCustomCSSWithScoping-DYkoSNAv.js";import"./Illustrations-OXUCAhva.js";import"./i18n-defaults-CFWtSmu6.js";import"./general-leave-request-t3BSa1cT.js";import"./index-CSIhU0w2.js";import"./navigation-right-arrow-C6hsZ--E.js";import"./navigation-down-arrow-Dw3dfCIj.js";import"./navigation-right-arrow-CIGq5ecr.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
