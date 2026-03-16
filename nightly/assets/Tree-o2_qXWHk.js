import{j as e}from"./iframe-BIP38Qmu.js";import{useMDXComponents as p}from"./index-CCzfQ4AK.js";import{A as o}from"./ArgTypesWithNote-H7KWc-px.js";import{C as c}from"./ControlsWithNote-DlY6D4bI.js";import{D as h}from"./DocsHeader-D4aiXO6T.js";import{F as x}from"./Footer-DAbghHc6.js";import"./CommandsAndQueries-BAg-w2Ve.js";import"./PageNotFound-z2fC1f6d.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as m}from"./blocks-69-jnurL.js";import{C as r,D as s,L as u,T as a,a as d}from"./Tree.stories-CEz8Bk65.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_7tcSj3.js";import"./information-Cf_JR6Aw.js";import"./sys-enter-2-D5AeNUHf.js";import"./alert-CMm7pEpj.js";import"./Tag-D0zcjL-3.js";import"./index-BEp_fWNn.js";import"./index-BlYNx0T3.js";import"./Link-B13MM4G6.js";import"./copy-q2hIMu45.js";import"./copy-nvOf1vVL.js";import"./GitHub-Mark-vHfAubj_.js";import"./TableOfContent-CAcSs8TN.js";import"./index-pu7JlX44.js";import"./index-C0fOqYC4.js";import"./index-Du9D3QZW.js";import"./index-DXmoRv88.js";import"./index-ZEQXSIQn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BrBZ3oM5.js";import"./addCustomCSSWithScoping-3IpFFLGa.js";import"./Illustrations-BEksg9v0.js";import"./i18n-defaults-CFWtSmu6.js";import"./general-leave-request-Eos9z7mz.js";import"./index-Bt4sAh6G.js";import"./navigation-right-arrow-8O47gqPc.js";import"./navigation-down-arrow-D-lJHCSC.js";import"./navigation-right-arrow-BBJGgKV7.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
