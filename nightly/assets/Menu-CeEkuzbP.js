import{j as e,e as r}from"./iframe-BiIJdVyr.js";import{useMDXComponents as d}from"./index--rLY9036.js";import{A as s}from"./ArgTypesWithNote-gknkRY6W.js";import{C as x}from"./ControlsWithNote-BjTqfsnP.js";import{D as h}from"./DocsHeader-De9lqbgQ.js";import{F as l}from"./CommandsAndQueries-D08-AnOE.js";import{M as f,C as i,a as j,D as m}from"./blocks-BFHpLm1y.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-DXN2DOHY.js";import{M as a}from"./index-RwiDnjk_.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-e3YpZRrx.js";import"./information-SSL8fTlY.js";import"./sys-enter-2-DpynL0zo.js";import"./alert-Cg_jUYoP.js";import"./Tag-Bq1oXArm.js";import"./index-Dh7QOf24.js";import"./index-DvsRYyu2.js";import"./Link-Bm6hDi5n.js";import"./copy-JHYt0Qja.js";import"./copy-BPqkJYr8.js";import"./GitHub-Mark-BgiKOk1P.js";import"./TableOfContent-X_zRrbOZ.js";import"./index-5WE_OvnW.js";import"./index-D-2Xy6-7.js";import"./index-CjEEWo15.js";import"./index-NQDiuZnO.js";import"./index-D5j3aFdB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DSKVbp8f.js";import"./addCustomCSSWithScoping-syEQKqx0.js";import"./locked-CwjY4xUt.js";import"./index-DJq3P0uy.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
