import{j as e,B as r}from"./iframe-D3h_j2y4.js";import{useMDXComponents as d}from"./index-a9MBNRjP.js";import{A as s}from"./ArgTypesWithNote-D6UWZdlZ.js";import{C as x}from"./ControlsWithNote-C1Q49NgS.js";import{D as h}from"./DocsHeader-C-7cMXuV.js";import{F as l}from"./CommandsAndQueries-DkEtb3C9.js";import{M as f,C as i,a as j,D as m}from"./blocks-Cp97O8Me.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-DzYFsUn8.js";import{M as a}from"./index-6N93CEdB.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B9e5YBdN.js";import"./information-Du_n-m1U.js";import"./sys-enter-2-_5l1H-Gx.js";import"./alert-DiqJ6xxp.js";import"./Tag-Be6y1yqM.js";import"./index-CH7UrjOG.js";import"./index-BhBE3smf.js";import"./Link-Dali4gAe.js";import"./copy-BfLwmTPU.js";import"./copy-Dke-3UUt.js";import"./GitHub-Mark-DQssIEO6.js";import"./TableOfContent-B8qKcdwY.js";import"./index-BY-U4HhI.js";import"./index-BOt5HncK.js";import"./index-BQ-14eq3.js";import"./index-DX_7kgjZ.js";import"./index-DnWdQH32.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-llHj0RCs.js";import"./addCustomCSSWithScoping-uA_fHk2N.js";import"./locked-Dol0la96.js";import"./index-BD6qAUAK.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
