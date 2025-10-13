import{j as e,e as r}from"./iframe-Dx8AIwnl.js";import{useMDXComponents as d}from"./index-dcVclcbT.js";import{A as s}from"./ArgTypesWithNote-BraHb0gd.js";import{C as x}from"./ControlsWithNote-ByDrkwNV.js";import{D as h}from"./DocsHeader-DwE6DgNV.js";import{F as l}from"./CommandsAndQueries-DUfglqKp.js";import{M as f,C as i,a as j,D as m}from"./blocks-p2QhlYpp.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-D2sCbJJ6.js";import{M as a}from"./index-wnZIWv8_.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CNQX-dlK.js";import"./information-0cXHjBj8.js";import"./sys-enter-2-Gb3kXppf.js";import"./alert-aIxIGm79.js";import"./Tag-CzwecjZk.js";import"./index-C0W6hmhl.js";import"./index-BVmKbVfO.js";import"./Link-Br-d-ePU.js";import"./copy-CDqLuYFM.js";import"./copy-BI62_cw9.js";import"./GitHub-Mark-ZS8iHUgZ.js";import"./TableOfContent-9BBQOd01.js";import"./index-Bp4XYY8b.js";import"./index-BaN1UK0U.js";import"./index-CPYahFg1.js";import"./index-DByobapb.js";import"./index-BwRqY3Cv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B0yp5HV-.js";import"./addCustomCSSWithScoping-Bxh4uOHa.js";import"./locked-CHoKCDtT.js";import"./index-D0kWUCin.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
