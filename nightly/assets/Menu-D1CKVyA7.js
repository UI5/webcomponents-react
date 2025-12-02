import{j as e,e as r}from"./iframe-B5_Arj0w.js";import{useMDXComponents as d}from"./index-C5nExjBH.js";import{A as s}from"./ArgTypesWithNote-CcvI9Ema.js";import{C as x}from"./ControlsWithNote-RC0KwfIN.js";import{D as h}from"./DocsHeader-R0l67TN5.js";import{F as l}from"./CommandsAndQueries-DVJBDd6t.js";import{M as f,C as i,a as j,D as m}from"./blocks-COnGRWLL.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-CnMjRYzf.js";import{M as a}from"./index-B8CsQS4K.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-c-guL6iQ.js";import"./information-DnWQdbsO.js";import"./sys-enter-2-yT9c6yra.js";import"./alert-B0if0F-6.js";import"./Tag-BJnasszI.js";import"./index-lFnbjF6s.js";import"./index-B-64gK_m.js";import"./Link-DYcelBM6.js";import"./copy-DUyNBGP7.js";import"./copy-C_i6TFMR.js";import"./GitHub-Mark-BZiEvxen.js";import"./TableOfContent-BVkhO1lE.js";import"./index-BHuFfOWM.js";import"./index-BNDO-MHt.js";import"./index-D9R5EBek.js";import"./index-C4ir_qvG.js";import"./index-NifsWW0H.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-hIZvC53N.js";import"./addCustomCSSWithScoping-C5sFpCeo.js";import"./locked-D_0iovtZ.js";import"./index-D5xHzcjw.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
