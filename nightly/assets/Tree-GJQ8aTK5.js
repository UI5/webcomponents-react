import{j as e}from"./iframe-Djuy8UzU.js";import{useMDXComponents as p}from"./index-CgJpCImo.js";import{A as o}from"./ArgTypesWithNote-OZhKxckb.js";import{C as c}from"./ControlsWithNote-D01OONhh.js";import{D as h}from"./DocsHeader-BSuqjT5e.js";import{F as x}from"./CommandsAndQueries-DtRiB_cH.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-Phup9Acl.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-oSWA_wvZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Da0VpmUz.js";import"./information-CINaYo8g.js";import"./sys-enter-2-BqczY9Tp.js";import"./alert-BZgl_BE3.js";import"./Tag-B73vgZIB.js";import"./index-DedsmHJ0.js";import"./index-CLO3npv1.js";import"./Link-BtCtR7u3.js";import"./copy-6q0sL-ve.js";import"./copy-YJEoppKk.js";import"./GitHub-Mark-BPTz9Eth.js";import"./TableOfContent-DnBqa40u.js";import"./index-BrSO2QY2.js";import"./index-DRZrAGbU.js";import"./index-CAq-HQ8b.js";import"./index-B4ZMGb2N.js";import"./index-CgYDTHag.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BYVpCo3h.js";import"./addCustomCSSWithScoping-JvBMAy04.js";import"./general-leave-request-DEzSQ5tJ.js";import"./index-Cv13D_Xn.js";import"./navigation-right-arrow-Ce-NM_S4.js";import"./navigation-down-arrow-B0vTzU2n.js";import"./navigation-right-arrow-BxQGxPzo.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
