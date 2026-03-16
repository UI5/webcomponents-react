import{j as e}from"./iframe-BVmbmlmH.js";import{useMDXComponents as p}from"./index-BayNuhgZ.js";import{A as o}from"./ArgTypesWithNote-Dm8GONSn.js";import{C as c}from"./ControlsWithNote-DKY_t_-S.js";import{D as h}from"./DocsHeader-BnbiGjxt.js";import{F as x}from"./Footer-jyZDOgk8.js";import"./CommandsAndQueries-HKIzYk5f.js";import"./PageNotFound-Bx-Sm5Da.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as m}from"./blocks-DMMtyDnL.js";import{C as r,D as s,L as u,T as a,a as d}from"./Tree.stories-BMfb0haX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DLhdihT5.js";import"./information-BShnHlGL.js";import"./sys-enter-2-I6roqntb.js";import"./alert-D_-PGSyq.js";import"./Tag-CX0-uTWT.js";import"./index-BCEgOOyQ.js";import"./index-B9kq_n6z.js";import"./Link-mk6Fv6C7.js";import"./copy-B6G0dudT.js";import"./copy-GT2usG3-.js";import"./GitHub-Mark-C2JmqxPR.js";import"./TableOfContent-DlRBwInQ.js";import"./index-CGmvxCgE.js";import"./index-hq6INLou.js";import"./index-BxRkRPbG.js";import"./index-BJnbAjLN.js";import"./index-DOsMkDHm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DY1Um-8U.js";import"./addCustomCSSWithScoping-BGYdQCs4.js";import"./Illustrations-CSa63wVD.js";import"./i18n-defaults-CFWtSmu6.js";import"./general-leave-request-BxyDe9dU.js";import"./index-CNlu7VXT.js";import"./navigation-right-arrow-aqMR-wNy.js";import"./navigation-down-arrow-CRpQ5yDC.js";import"./navigation-right-arrow-VmHT47vc.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
