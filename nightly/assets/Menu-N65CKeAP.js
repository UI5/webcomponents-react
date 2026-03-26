import{j as e,A as r}from"./iframe-BKYtcRXv.js";import{useMDXComponents as d}from"./index-D1nSvVZo.js";import{A as s}from"./ArgTypesWithNote-BEb4oDuC.js";import{C as x}from"./ControlsWithNote-BcvFcJ1w.js";import{D as h}from"./DocsHeader-CGFr-N59.js";import{F as l}from"./Footer-CV4xu3yB.js";import"./CommandsAndQueries-CUyuiRf6.js";import"./PageNotFound-vT0hMOra.js";import{M as f,C as i,a as j,D as m}from"./blocks-C1gp0dCe.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-Z7KU77VG.js";import{M as a}from"./index-SDPAjY-f.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BHofxaIm.js";import"./information-xnBwopqv.js";import"./sys-enter-2-CNvKNMds.js";import"./alert-CToXuYXU.js";import"./Tag-DHmTMk4C.js";import"./index-qZc2Xmmm.js";import"./index-ewdSxNga.js";import"./Link-DoqDiayo.js";import"./copy-DrIA0QZ4.js";import"./copy-Dd5cryj7.js";import"./GitHub-Mark-CdbwaB6F.js";import"./TableOfContent-DOsZXCWq.js";import"./index-BVN1tX5Y.js";import"./index-CruiZV6T.js";import"./index-C0tgyAAj.js";import"./index-BKTLLMG4.js";import"./index-Gx-AmRBv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cc6AlvW2.js";import"./addCustomCSSWithScoping-CxGG2dIU.js";import"./Illustrations-C92Wb11w.js";import"./i18n-defaults-CFWtSmu6.js";import"./locked-z_Oethkx.js";import"./index-B1bH12t0.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
`,e.jsx(l,{})]})}function te(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}export{te as default};
