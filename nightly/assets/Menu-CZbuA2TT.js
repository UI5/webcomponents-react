import{j as e,B as r}from"./iframe-Cv4sgl-6.js";import{useMDXComponents as d}from"./index-CBIpMKi2.js";import{A as s}from"./ArgTypesWithNote-Cy1L9taY.js";import{C as x}from"./ControlsWithNote-BDU2GaF-.js";import{D as h}from"./DocsHeader-BrY58g2d.js";import{F as l}from"./CommandsAndQueries-DF8E8wiu.js";import{M as f,C as i,a as j,D as m}from"./blocks-DPiPd9tl.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-kfggpDAj.js";import{M as a}from"./index-DKp39vto.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DcbEzSTS.js";import"./information-D12ZJp7Z.js";import"./sys-enter-2-B0uzD6GZ.js";import"./alert-BQ9eRDhW.js";import"./Tag-BCHKI4FR.js";import"./index-BdK0aYpg.js";import"./index-CeG26Jn9.js";import"./Link-BXe55YD0.js";import"./copy-Buz7yFy9.js";import"./copy-Bby_UTo9.js";import"./GitHub-Mark-CKxe69xP.js";import"./TableOfContent-Bh8N9yMW.js";import"./index-BbeCayQT.js";import"./index-CtOMiTIA.js";import"./index-AkExkdLb.js";import"./index-CP4yHlqi.js";import"./index-C5UblPZZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CEw8P-vI.js";import"./addCustomCSSWithScoping-ChLo0vcI.js";import"./locked-DoUAD8_D.js";import"./index-CZX0Moao.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
