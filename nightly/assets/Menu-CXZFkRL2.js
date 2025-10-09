import{j as e,e as r}from"./iframe-D7FikSiu.js";import{useMDXComponents as d}from"./index-BenG4a-h.js";import{A as s}from"./ArgTypesWithNote-CQNCd0n6.js";import{C as x}from"./ControlsWithNote-BVRLUUJy.js";import{D as h}from"./DocsHeader-CoDJ8064.js";import{F as l}from"./CommandsAndQueries-DD_YKX8j.js";import{M as f,C as i,a as j,D as m}from"./blocks-Yxlvk0d_.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-DHTH2s-1.js";import{M as a}from"./index-BPsTvMvc.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C7R8Sd2K.js";import"./information-uIClPmp3.js";import"./sys-enter-2-CoINRXQ6.js";import"./alert-C1AwfvUs.js";import"./Tag-CPn9c9wp.js";import"./index--O96gYhw.js";import"./index-DD0ZDplT.js";import"./Link-VxMUEtoN.js";import"./copy-DXGGQE6h.js";import"./copy-BeTo-Yk5.js";import"./GitHub-Mark-8DjVUxwp.js";import"./TableOfContent-DuAbMaWr.js";import"./index-C3kgqoQY.js";import"./index-BmpVzGJg.js";import"./index-BlrcmYdd.js";import"./index-BWKg7Ny9.js";import"./index-sclNFwhc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DXj9DeaS.js";import"./addCustomCSSWithScoping-qQ8FRtdZ.js";import"./locked-DQQIMRfu.js";import"./index-DFSropHd.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
