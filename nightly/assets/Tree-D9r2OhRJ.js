import{j as e}from"./iframe-Dl0DWg8M.js";import{useMDXComponents as p}from"./index-Dunz3Qkg.js";import{A as o}from"./ArgTypesWithNote-CSJwfAu9.js";import{C as c}from"./ControlsWithNote-BKBVRwue.js";import{D as h}from"./DocsHeader-C-1I2b0K.js";import{F as x}from"./CommandsAndQueries-DcyHQWO5.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-z5J1zZs0.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-Cl7fnE4Y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CIa6NQE1.js";import"./information-0V3r1Ig4.js";import"./sys-enter-2-CxUk-uXZ.js";import"./alert-DWaZJdGL.js";import"./Tag-8UYUnG7U.js";import"./index-9_QD_94O.js";import"./index-fJlTqGLz.js";import"./Link-C2qcQY2b.js";import"./copy-VcR1WfQh.js";import"./copy-BhfJfLSX.js";import"./GitHub-Mark-CgrwmV-_.js";import"./TableOfContent-W0pmQgwB.js";import"./index-qDCkQVmj.js";import"./index-ClreWoEe.js";import"./index-BtW57M3z.js";import"./index-DfHOwcie.js";import"./index-D98fiUtL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B8jMVyWi.js";import"./addCustomCSSWithScoping-BtXYUpmM.js";import"./general-leave-request-C2qKAsav.js";import"./index-CXra9vNC.js";import"./navigation-right-arrow-B-ZYLR3_.js";import"./navigation-down-arrow-CCcXbr-Q.js";import"./navigation-right-arrow-RU6yhQUV.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
