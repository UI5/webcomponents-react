import{j as e,e as r}from"./iframe-BgUChC8z.js";import{useMDXComponents as d}from"./index-Bt3QSaL1.js";import{A as s}from"./ArgTypesWithNote-o5v6cBw_.js";import{C as x}from"./ControlsWithNote-C0BpeSlm.js";import{D as h}from"./DocsHeader-DpC7xko2.js";import{F as l}from"./CommandsAndQueries-BiCzXToa.js";import{M as f,C as i,a as j,D as m}from"./blocks-xGQg2Vw5.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-CgmpHelT.js";import{M as a}from"./index-DEer2bFX.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Wo45_tYZ.js";import"./information-B5F-s1Wz.js";import"./sys-enter-2-pPHl1vwI.js";import"./alert-C-NbCkDs.js";import"./Tag-C_OAQHPO.js";import"./index-DUpxdMFd.js";import"./index-D4lpRvQf.js";import"./Link-BaaJYg0_.js";import"./copy-BA9m2lze.js";import"./copy-BTfIxGSH.js";import"./GitHub-Mark-BLzFnLXs.js";import"./TableOfContent-zmIy0jA9.js";import"./index-BQfpsC01.js";import"./index-BNFZf5J7.js";import"./index-EZPmIbpG.js";import"./index-I7ioAdFJ.js";import"./index-C5F4agy_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNw7RwQP.js";import"./addCustomCSSWithScoping-CSlMgmu5.js";import"./locked-BgFZOXsV.js";import"./index-4tQ7h-TP.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
