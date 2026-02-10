import{j as e}from"./iframe-D3h_j2y4.js";import{useMDXComponents as p}from"./index-a9MBNRjP.js";import{A as o}from"./ArgTypesWithNote-D6UWZdlZ.js";import{C as c}from"./ControlsWithNote-C1Q49NgS.js";import{D as h}from"./DocsHeader-C-7cMXuV.js";import{F as x}from"./CommandsAndQueries-DkEtb3C9.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-Cp97O8Me.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-Ungkc2gO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B9e5YBdN.js";import"./information-Du_n-m1U.js";import"./sys-enter-2-_5l1H-Gx.js";import"./alert-DiqJ6xxp.js";import"./Tag-Be6y1yqM.js";import"./index-CH7UrjOG.js";import"./index-BhBE3smf.js";import"./Link-Dali4gAe.js";import"./copy-BfLwmTPU.js";import"./copy-Dke-3UUt.js";import"./GitHub-Mark-DQssIEO6.js";import"./TableOfContent-B8qKcdwY.js";import"./index-BY-U4HhI.js";import"./index-BOt5HncK.js";import"./index-BQ-14eq3.js";import"./index-DX_7kgjZ.js";import"./index-DnWdQH32.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-llHj0RCs.js";import"./addCustomCSSWithScoping-uA_fHk2N.js";import"./general-leave-request-C0fHGxdd.js";import"./index-DTeZzsS7.js";import"./navigation-right-arrow-DBTblMcB.js";import"./navigation-down-arrow-BgTxiuzp.js";import"./navigation-right-arrow-BFKs6dr_.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
