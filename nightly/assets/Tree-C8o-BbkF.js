import{j as e}from"./iframe-D2WvPMQO.js";import{u as p,M as c,C as o,a as h,D as i}from"./blocks-Cy8tSwuN.js";import{A as s}from"./ArgTypesWithNote-BbKu0TXg.js";import{C as x}from"./ControlsWithNote-W2MnsLWm.js";import{D as j}from"./DocsHeader-Dn8n_uow.js";import{F as f}from"./Footer-CcjLnWXZ.js";import"./CommandsAndQueries-GHyhdZ5z.js";import"./PageNotFound--xUWQamC.js";import{S as T}from"./SubcomponentsSection-BVy4lpQe.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-DJCr98Xm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-iukRSAfG.js";import"./information-C8cZAxRB.js";import"./sys-enter-2-dY36Ay86.js";import"./alert-C9lTQ0KQ.js";import"./Tag-77Zcvr-C.js";import"./index-35M5Bral.js";import"./index-itXLTY8o.js";import"./Link-B9O6M9m0.js";import"./copy-DMwbApOt.js";import"./copy-DEDrq7eG.js";import"./GitHub-Mark-DoIHarqw.js";import"./TableOfContent-BVPApRYH.js";import"./index-CEhSDieG.js";import"./index-CNWb7VVG.js";import"./index-D85ZyHtS.js";import"./index-BHdhu-GL.js";import"./index-PtvYek1_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BEnkyBc2.js";import"./addCustomCSSWithScoping-qrEX4tTM.js";import"./Illustrations-T5lVOB-y.js";import"./i18n-defaults-CFWtSmu6.js";import"./general-leave-request-B8ilZuak.js";import"./index-CHoH1lJm.js";import"./navigation-right-arrow-28YF9v8S.js";import"./navigation-down-arrow-Cxwn0PTJ.js";import"./navigation-right-arrow-Di_8TZdY.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r}),`
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
