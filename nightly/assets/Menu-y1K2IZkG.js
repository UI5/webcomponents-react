import{j as e,A as r}from"./iframe-D2WvPMQO.js";import{u as d,M as x,C as s,a as h,D as i}from"./blocks-Cy8tSwuN.js";import{A as p}from"./ArgTypesWithNote-BbKu0TXg.js";import{C as l}from"./ControlsWithNote-W2MnsLWm.js";import{D as f}from"./DocsHeader-Dn8n_uow.js";import{F as j}from"./Footer-CcjLnWXZ.js";import"./CommandsAndQueries-GHyhdZ5z.js";import"./PageNotFound--xUWQamC.js";import{C as t,D as m,W as M,M as u}from"./Menu.stories-C-yLT8Aq.js";import{M as a}from"./index-f3qoxjJC.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-iukRSAfG.js";import"./information-C8cZAxRB.js";import"./sys-enter-2-dY36Ay86.js";import"./alert-C9lTQ0KQ.js";import"./Tag-77Zcvr-C.js";import"./index-35M5Bral.js";import"./index-itXLTY8o.js";import"./Link-B9O6M9m0.js";import"./copy-DMwbApOt.js";import"./copy-DEDrq7eG.js";import"./GitHub-Mark-DoIHarqw.js";import"./TableOfContent-BVPApRYH.js";import"./index-CEhSDieG.js";import"./index-CNWb7VVG.js";import"./index-D85ZyHtS.js";import"./index-BHdhu-GL.js";import"./index-PtvYek1_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BEnkyBc2.js";import"./addCustomCSSWithScoping-qrEX4tTM.js";import"./Illustrations-T5lVOB-y.js";import"./i18n-defaults-CFWtSmu6.js";import"./locked-PEikiUoC.js";import"./index-BdP9ec3o.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
`,e.jsx(f,{of:t,since:"0.23.0"}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(l,{of:m}),`
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
`,e.jsx(s,{of:M}),`
`,e.jsx(h,{children:C}),`
`,e.jsx(n.h2,{id:"menuitem",children:"MenuItem"}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(p,{metaOf:t,hideHTMLPropsNote:!0,exclude:r,of:a}),`
`,e.jsx(n.h2,{id:"menuitemgroup",children:"MenuItemGroup"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(p,{metaOf:t,hideHTMLPropsNote:!0,exclude:r,of:u}),`
`,e.jsx(j,{})]})}function oe(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}export{oe as default};
