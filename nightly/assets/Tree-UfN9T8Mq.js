import{j as e}from"./iframe-BF6vIVo6.js";import{useMDXComponents as p}from"./index-LfmOxbs8.js";import{A as o}from"./ArgTypesWithNote-Il_G55vt.js";import{C as c}from"./ControlsWithNote-CW6StnRt.js";import{D as h}from"./DocsHeader-C_w2jjky.js";import{F as x}from"./CommandsAndQueries-BZWG0qBB.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-BEVYxzM4.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-D8GqmR9b.js";import"./preload-helper-PPVm8Dsz.js";import"./index-COzDMtK9.js";import"./information-v6F873AP.js";import"./sys-enter-2-WuXn7rus.js";import"./alert-C89y0cfE.js";import"./Tag-Bbrw4Mg6.js";import"./index-Do8jjW18.js";import"./index-DdICQhrF.js";import"./Link-C3nR6kZV.js";import"./copy-CtLEypSk.js";import"./copy-BsYfEWuv.js";import"./GitHub-Mark-JjRId1WV.js";import"./TableOfContent-D6SS1QPi.js";import"./index-DdhWaCX8.js";import"./index-CTIQkpgO.js";import"./index-DoBDF59y.js";import"./index-B5sOe_-e.js";import"./index-CKX87Paa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BsUQb2cX.js";import"./addCustomCSSWithScoping-B22aBF7H.js";import"./general-leave-request-D0ua5b4D.js";import"./index-DStEZLfo.js";import"./navigation-right-arrow-CbOrGt_U.js";import"./navigation-down-arrow-BCi3JcgJ.js";import"./navigation-right-arrow-D4L2xcHa.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
