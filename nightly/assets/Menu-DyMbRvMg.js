import{j as e,e as r}from"./iframe-BBfeQq2L.js";import{useMDXComponents as d}from"./index-D1XkxxyM.js";import{A as s}from"./ArgTypesWithNote-BPSw1p49.js";import{C as x}from"./ControlsWithNote-CYbnvQ9W.js";import{D as h}from"./DocsHeader-D2aJwWU_.js";import{F as l}from"./CommandsAndQueries-Buygq3eA.js";import{M as f,C as i,a as j,D as m}from"./blocks-CxdXAZue.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-CNgqOOuA.js";import{M as a}from"./index-DJw_8V3-.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C57-wRZv.js";import"./information-BnGyGqAy.js";import"./sys-enter-2-B5N_dLso.js";import"./alert-DOI_-LG9.js";import"./Tag-4fcKG2ic.js";import"./index-H1CGp5_C.js";import"./index-Dh6gCloB.js";import"./Link-DOA2fpa3.js";import"./copy-C8sZB7u0.js";import"./copy-2iUWozfp.js";import"./GitHub-Mark-mOh0KIWM.js";import"./TableOfContent-C41PSHKe.js";import"./index-B5Wcj6ld.js";import"./index-BY7hZSSK.js";import"./index-ChSH85IQ.js";import"./index-CB8857Gd.js";import"./index-C4_hmu2m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CDXTaCTd.js";import"./addCustomCSSWithScoping-_H14R7FJ.js";import"./locked-CHWOhTLD.js";import"./index-C7nxsY8A.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
`,e.jsx(h,{of:t,since:"0.23.0"}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(x,{of:p}),`
`,e.jsx(n.h2,{id:"opening-menus",children:"Opening Menus"}),`
`,e.jsxs(n.p,{children:["You can open and close the ",e.jsx(n.code,{children:"Menu"})," component in a declarative way using the ",e.jsx(n.code,{children:"open"})," and ",e.jsx(n.code,{children:"opener"})," prop."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const MyComponentWithMenu = () => {
  const buttonRef = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <Button
        ref={buttonRef}
        onClick={() => {
          setMenuIsOpen(true);
        }}
      >
        Open Action Sheet
      </Button>
      <Menu
        opener={buttonRef.current}
        open={menuIsOpen}
        onClose={() => {
          setMenuIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(n.h3,{id:"menu-with-submenu",children:"Menu with Submenu"}),`
`,e.jsx(i,{of:M}),`
`,e.jsx(j,{children:C}),`
`,e.jsx(n.h2,{id:"menuitem",children:"MenuItem"}),`
`,e.jsx(m,{of:a}),`
`,e.jsx(s,{metaOf:t,hideHTMLPropsNote:!0,exclude:r,of:a}),`
`,e.jsx(n.h2,{id:"menuitemgroup",children:"MenuItemGroup"}),`
`,e.jsx(m,{of:u}),`
`,e.jsx(s,{metaOf:t,hideHTMLPropsNote:!0,exclude:r,of:u}),`
`,e.jsx(l,{})]})}function $(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}export{$ as default};
