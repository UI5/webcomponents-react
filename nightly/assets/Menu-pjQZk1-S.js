import{j as e,e as r}from"./iframe-CSbQr9Kh.js";import{useMDXComponents as d}from"./index-Bm__WzDY.js";import{A as s}from"./ArgTypesWithNote-CstL8bgS.js";import{C as x}from"./ControlsWithNote-DZZmzkQV.js";import{D as h}from"./DocsHeader-B6C0zwaH.js";import{F as l}from"./CommandsAndQueries-BBfDJted.js";import{M as f,C as i,a as j,D as m}from"./blocks-TfJF1wSB.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-BLpPzmTn.js";import{M as a}from"./index-NnhxwBdh.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-cCDc2RK7.js";import"./information-DqQUPKzo.js";import"./sys-enter-2-BXqUXr7U.js";import"./alert-CG5QiRAo.js";import"./Tag-A7CWsIQR.js";import"./index-D2CGZc8Q.js";import"./index-DOzwAkgD.js";import"./Link-Cjj3vJ0R.js";import"./copy-fwkYkRnZ.js";import"./copy-CIEB0M7W.js";import"./GitHub-Mark-Bl3IYQkW.js";import"./TableOfContent-Bh04lbeo.js";import"./index-CqhcpXS6.js";import"./index-HYYwxuYt.js";import"./index-B6cEeVTY.js";import"./index-CnvIjGJy.js";import"./index-BC5Egg9m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbQfKOeW.js";import"./addCustomCSSWithScoping-D9vmwUKM.js";import"./locked-unspsycN.js";import"./index-DhlXeXbd.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
