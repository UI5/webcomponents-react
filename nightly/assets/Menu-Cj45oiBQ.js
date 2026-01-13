import{j as e,e as r}from"./iframe-BX6l_vT-.js";import{useMDXComponents as d}from"./index-Bzy26fup.js";import{A as s}from"./ArgTypesWithNote-C1VDdiz2.js";import{C as x}from"./ControlsWithNote-DT25iZ0d.js";import{D as h}from"./DocsHeader-Dd5Ldadt.js";import{F as l}from"./CommandsAndQueries-BQamr4MW.js";import{M as f,C as i,a as j,D as m}from"./blocks-dv2dOEr1.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-C7b1SBeR.js";import{M as a}from"./index-Da0rSCI1.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Brt5lPnV.js";import"./information-BHJaLhAv.js";import"./sys-enter-2-EZBfp4iZ.js";import"./alert-DUVH4PBA.js";import"./Tag-CPbL9Jm0.js";import"./index-DKRKom99.js";import"./index-CPY8w0If.js";import"./Link-LBAuQHud.js";import"./copy-IRAbc-Qz.js";import"./copy-DJpI-ZKv.js";import"./GitHub-Mark-BYqQpMuY.js";import"./TableOfContent-DfjT9NBm.js";import"./index-JvehRoeP.js";import"./index-DN8AW8ib.js";import"./index-5GNX0CLe.js";import"./index-CdanIUAH.js";import"./index-CUja4hYj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJYHkaYl.js";import"./addCustomCSSWithScoping-DPpaQSds.js";import"./locked-DQfhWo-9.js";import"./index-ov0f3dGH.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
