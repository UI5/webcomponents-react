import{j as e,e as r}from"./iframe-BiMlSvB5.js";import{useMDXComponents as d}from"./index-zjeO5ftS.js";import{A as s}from"./ArgTypesWithNote-DeIplwdt.js";import{C as x}from"./ControlsWithNote-BBextbqG.js";import{D as h}from"./DocsHeader-BQXM59R4.js";import{F as l}from"./CommandsAndQueries-Ihy_vY5j.js";import{M as f,C as i,a as j,D as m}from"./blocks-JfRoz7Bu.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-Do1KZz6F.js";import{M as a}from"./index-AZRBhAd2.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DdnnKwEp.js";import"./information-B40Y1iPW.js";import"./sys-enter-2-CkPUHPx-.js";import"./alert-BwKvOFsR.js";import"./Tag-DcGxJxNj.js";import"./index-CJR1a3iJ.js";import"./index-COwkRR6t.js";import"./Link-hDp19ErW.js";import"./copy-CW_E660l.js";import"./copy-CpLwtFwa.js";import"./GitHub-Mark-DTMOfX6U.js";import"./TableOfContent-Zea73YRm.js";import"./index-DJoGcUHO.js";import"./index-CjwASx83.js";import"./index-BN_7wmc1.js";import"./index-BTBLl-af.js";import"./index-CvgLLP4J.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-g_QfzUS9.js";import"./addCustomCSSWithScoping-Dxx39OMa.js";import"./locked-Dl4EKnOR.js";import"./index-Cqp5gX4l.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
