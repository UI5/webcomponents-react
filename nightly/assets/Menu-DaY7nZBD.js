import{j as e,e as r}from"./iframe-pGkg1yhx.js";import{useMDXComponents as d}from"./index-zZGraQiW.js";import{A as s}from"./ArgTypesWithNote-B4DDNWPn.js";import{C as x}from"./ControlsWithNote-B93C_YVi.js";import{D as h}from"./DocsHeader-D3Z603yd.js";import{F as l}from"./CommandsAndQueries-0d0cMNfY.js";import{M as f,C as i,a as j,D as m}from"./blocks-h-E2EZ8G.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-zGI7luPX.js";import{M as a}from"./index-B9MMB4xe.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dhkbob0y.js";import"./information-cXVVKah4.js";import"./sys-enter-2-hj8-ImHG.js";import"./alert-B1o_Hsr7.js";import"./Tag-au1p2NGj.js";import"./index-Bw9Ab4ZS.js";import"./index-DdsduAWA.js";import"./Link-D-i4oyZF.js";import"./copy-CYAZ_Ukm.js";import"./copy-DnSu0Tnk.js";import"./GitHub-Mark-I5I5hI39.js";import"./TableOfContent-DvuGEVlp.js";import"./index-2g5O9IIc.js";import"./index-CfRPSEYz.js";import"./index-BwnLifZ4.js";import"./index-Wi1PYVS4.js";import"./index-D6ltds-N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Do_htNQl.js";import"./addCustomCSSWithScoping-BX6PI_rc.js";import"./locked-CAJ-q58v.js";import"./index-C00NisRT.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
