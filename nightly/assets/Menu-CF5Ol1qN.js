import{j as e,B as r}from"./iframe-CqFnJp-S.js";import{useMDXComponents as d}from"./index-CynYu3xa.js";import{A as s}from"./ArgTypesWithNote-BDsH-loP.js";import{C as x}from"./ControlsWithNote-Bb4mcuQO.js";import{D as h}from"./DocsHeader-BXRJUbp3.js";import{F as l}from"./CommandsAndQueries-D_WKy8dN.js";import{M as f,C as i,a as j,D as m}from"./blocks-AhMBMxUR.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-B-i9wU-T.js";import{M as a}from"./index-CbbR4Mr2.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DezDvmls.js";import"./information-60cadcf1.js";import"./sys-enter-2-seBR9LV9.js";import"./alert-vPdDlciv.js";import"./Tag-Cwi_n_M2.js";import"./index-CA0UVsfH.js";import"./index-CR3t_8EC.js";import"./Link-18Y5h9Ta.js";import"./copy-CFHibi2r.js";import"./copy-B3ylxRux.js";import"./GitHub-Mark-CZ2jx5rB.js";import"./TableOfContent-CMB21LG_.js";import"./index-BARlfa70.js";import"./index-lhl517Nj.js";import"./index-B8Ys29Cw.js";import"./index-CaJgjkX1.js";import"./index-B_RIKuGc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B6mfgC9Q.js";import"./addCustomCSSWithScoping-Dl0yXOSQ.js";import"./locked-TsInwaL-.js";import"./index-Nlf-0oV_.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
