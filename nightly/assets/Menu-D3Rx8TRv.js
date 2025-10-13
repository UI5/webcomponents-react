import{j as e,e as r}from"./iframe-BwzExPTt.js";import{useMDXComponents as d}from"./index-Bhb-E2jz.js";import{A as s}from"./ArgTypesWithNote-CicIuLZc.js";import{C as x}from"./ControlsWithNote-DVJSXWDB.js";import{D as h}from"./DocsHeader-BMPfxLy5.js";import{F as l}from"./CommandsAndQueries-BAktAF7I.js";import{M as f,C as i,a as j,D as m}from"./blocks-DoJWfB08.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-kIMLbR3L.js";import{M as a}from"./index-B_GLb9ph.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DtZ9fejJ.js";import"./information-YiJ0QHVh.js";import"./sys-enter-2-C0SOTOu7.js";import"./alert-D_Giis5d.js";import"./Tag-6zLQrCPp.js";import"./index-BFn1YmVY.js";import"./index-C5BRum1i.js";import"./Link-Bms7m456.js";import"./copy-DifwunK3.js";import"./copy-BSdgsQYS.js";import"./GitHub-Mark-2d5y6_NM.js";import"./TableOfContent-DtXVnr4E.js";import"./index-Ct12qQup.js";import"./index-CbkAtpsv.js";import"./index-A3mNxkAq.js";import"./index-Bt-scq3R.js";import"./index-DpOmhYSX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CoHCzslt.js";import"./addCustomCSSWithScoping-pwpobhcn.js";import"./locked-T0BpWoVY.js";import"./index-CVr98FNx.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
