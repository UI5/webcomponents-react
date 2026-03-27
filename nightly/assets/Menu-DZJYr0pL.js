import{j as e,A as r}from"./iframe-GiALwnwk.js";import{useMDXComponents as d}from"./index-D5Br25pp.js";import{A as s}from"./ArgTypesWithNote-BeYGqatD.js";import{C as x}from"./ControlsWithNote-Cgmfge1m.js";import{D as h}from"./DocsHeader-BqCCLfbL.js";import{F as l}from"./Footer-CTpmUzQu.js";import"./CommandsAndQueries-C_IHadBx.js";import"./PageNotFound-lhidYwaf.js";import{M as f,C as i,a as j,D as m}from"./blocks-CWQEoHYq.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-B2l0x229.js";import{M as a}from"./index-CVbP4v4m.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Df-74Kk_.js";import"./information-DVV2_7m2.js";import"./sys-enter-2-BLXa0HBj.js";import"./alert-C-pLX4kq.js";import"./Tag-LkaAJwXo.js";import"./index-D48RNIki.js";import"./index-C2OBDsL0.js";import"./Link-Cl18BXak.js";import"./copy-swqFIkzM.js";import"./copy-BjtWQX8c.js";import"./GitHub-Mark-CONmBkWC.js";import"./TableOfContent-B7J8UzQ4.js";import"./index-DmWjxGkj.js";import"./index-_Dwwjvl6.js";import"./index-j7N-4kUz.js";import"./index-DsAl_UTx.js";import"./index-Q6Oco0u-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-3O-UdkwG.js";import"./addCustomCSSWithScoping-DYkoSNAv.js";import"./Illustrations-OXUCAhva.js";import"./i18n-defaults-CFWtSmu6.js";import"./locked-BM_fSs_W.js";import"./index-CulHXitp.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
