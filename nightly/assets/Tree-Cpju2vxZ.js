import{j as e}from"./iframe-CyAbfAjR.js";import{useMDXComponents as p}from"./index-06KDG4AT.js";import{A as o}from"./ArgTypesWithNote-jMDZUutl.js";import{C as c}from"./ControlsWithNote-CXY6QOFG.js";import{D as h}from"./DocsHeader-DYghzqu4.js";import{F as x}from"./CommandsAndQueries-B2npLt1g.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-D91UiS7A.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-BKnCqj-Q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dx49XSH_.js";import"./information-Rep9dVOS.js";import"./sys-enter-2-_ycOnn14.js";import"./alert-BWU-sYPN.js";import"./Tag-DcmGlVyp.js";import"./index-DGFLZE4P.js";import"./index-C2mRWa3H.js";import"./Link-Cj1yeMGo.js";import"./copy-XzXIZVUb.js";import"./copy-DuIUrssG.js";import"./GitHub-Mark-DmmIQwOR.js";import"./TableOfContent-BN3tMLts.js";import"./index-B_ujFW-9.js";import"./index-zvTPe1JW.js";import"./index-DTVJfpj2.js";import"./index-DhltPY3F.js";import"./index-CmuOjIMO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyLeRq-g.js";import"./addCustomCSSWithScoping-zxsplMRu.js";import"./general-leave-request-BJbvCsOF.js";import"./index-EwWM-M_C.js";import"./navigation-right-arrow-DpOJRghh.js";import"./navigation-down-arrow-CL70XcuK.js";import"./navigation-right-arrow-ChTgZnRi.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
