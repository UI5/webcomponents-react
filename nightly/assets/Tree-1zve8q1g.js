import{j as e}from"./iframe-DoasxszC.js";import{u as p,M as c,C as o,a as h,D as i}from"./blocks-DBX_G92C.js";import{A as s}from"./ArgTypesWithNote-C6YZamB9.js";import{C as x}from"./ControlsWithNote-B6cTbFDY.js";import{D as j}from"./DocsHeader-BFtvyrC2.js";import{F as f}from"./Footer-BMRkHXkr.js";import"./CommandsAndQueries-Bg5oLjv_.js";import"./PageNotFound-DlCPYtCu.js";import{S as T}from"./SubcomponentsSection-BVy4lpQe.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-DKw6HLpi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bkq6_nAR.js";import"./information-C1mBwnJc.js";import"./sys-enter-2-D2TESZyh.js";import"./alert-CWEkUWZv.js";import"./Tag-DCvAsOsB.js";import"./index-DUsiHM8W.js";import"./index-CY9OUOeY.js";import"./Link-CvHgBQZc.js";import"./copy-DxyiXEXB.js";import"./copy-Bp1X0rrX.js";import"./GitHub-Mark-B2tTDOGy.js";import"./TableOfContent-BL-dDNDX.js";import"./index-BuSM4uik.js";import"./index-C3bV2_l1.js";import"./index-Dl7LQ4u1.js";import"./index-BxFkVED5.js";import"./index-UQi-W-Cc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CwB0h3WK.js";import"./addCustomCSSWithScoping-D15HIh5y.js";import"./Illustrations-B4E_SvFf.js";import"./i18n-defaults-CFWtSmu6.js";import"./general-leave-request-Dv2BTtN3.js";import"./index-DXinWdIe.js";import"./navigation-right-arrow-CIOXuOhx.js";import"./navigation-down-arrow-BAtAokVf.js";import"./navigation-right-arrow-BiRIP0c6.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r}),`
`,e.jsx(j,{of:r,since:"0.10.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(x,{of:m}),`
`,e.jsx(t.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"lazy-load-treeitems",children:"Lazy Load TreeItems"}),`
`,e.jsx(o,{of:u}),`
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
`,e.jsx(h,{children:T}),`
`,e.jsx(t.h2,{id:"treeitem",children:"TreeItem"}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(s,{metaOf:r,of:a}),`
`,e.jsx(t.h2,{id:"treeitemcustom",children:"TreeItemCustom"}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(s,{metaOf:r,of:d}),`
`,e.jsx(f,{})]})}function re(n={}){const{wrapper:t}={...p(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{re as default};
