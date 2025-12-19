import{j as e,e as r}from"./iframe-l0Gg6LLs.js";import{useMDXComponents as d}from"./index-Cae9Voso.js";import{A as s}from"./ArgTypesWithNote-D1k1D1kl.js";import{C as x}from"./ControlsWithNote-BPBkFbxc.js";import{D as h}from"./DocsHeader-BIjaJ0Nr.js";import{F as l}from"./CommandsAndQueries-Clw2dQJN.js";import{M as f,C as i,a as j,D as m}from"./blocks-C2P3yVo4.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-CAqccIoX.js";import{M as a}from"./index-CQebLHzz.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DCqXNXQw.js";import"./information-BcS3rXju.js";import"./sys-enter-2-BSmamrdx.js";import"./alert-B368tBUy.js";import"./Tag-CjLUfCmJ.js";import"./index-Bwbvp4Wo.js";import"./index-C2QpZOLo.js";import"./Link-BXQMs19K.js";import"./copy-VS6NZnYU.js";import"./copy-B13EJS-v.js";import"./GitHub-Mark-BXPdSfrH.js";import"./TableOfContent-BdkB29Mz.js";import"./index-FAekmb_7.js";import"./index-I7Wz355y.js";import"./index-CihYjerb.js";import"./index-lxp-HdMJ.js";import"./index-hvU57qSB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DhC4Vn3X.js";import"./addCustomCSSWithScoping-DDpmsdIj.js";import"./locked-DFeA3E6s.js";import"./index-DvhE-T2P.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
