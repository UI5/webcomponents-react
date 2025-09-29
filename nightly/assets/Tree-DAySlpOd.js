import{j as e}from"./iframe-CfR5iN1B.js";import{useMDXComponents as p}from"./index-WDvIe_cH.js";import{A as o}from"./ArgTypesWithNote-DpKAmiZ1.js";import{C as c}from"./ControlsWithNote-fyp4mFm_.js";import{D as h}from"./DocsHeader-2XMWKy1o.js";import{F as x}from"./CommandsAndQueries-Cn01gt7T.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-CfXjvcLO.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-DGwmOKo5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DekWkQZr.js";import"./information-DTEN63Fk.js";import"./sys-enter-2-DpY8LIaY.js";import"./alert-C8yZ5BF8.js";import"./Tag-BTK-zFQw.js";import"./index-DImzYd9b.js";import"./index-Dow-CDJC.js";import"./Link-DJBSV0Mu.js";import"./copy-Yrnd-QKj.js";import"./copy-CaX7ddbO.js";import"./GitHub-Mark-spj1qVKo.js";import"./TableOfContent-WJhDVAFL.js";import"./index-DqPScGjh.js";import"./index-s45nBPnw.js";import"./index-3b3tgeGr.js";import"./index-BlanoaUa.js";import"./index-B5r1lcgY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BSc69HNM.js";import"./addCustomCSSWithScoping-Bvh6JLqq.js";import"./general-leave-request-CLSBmAhG.js";import"./index-D1nK-6X7.js";import"./navigation-right-arrow-D40jgVaK.js";import"./navigation-down-arrow-_LdOzUHF.js";import"./navigation-right-arrow-B91yu81w.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
