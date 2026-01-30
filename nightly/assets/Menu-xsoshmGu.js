import{j as e,B as r}from"./iframe-DVGWhCAE.js";import{useMDXComponents as d}from"./index-B9xkaSV0.js";import{A as s}from"./ArgTypesWithNote-DLO21Y30.js";import{C as x}from"./ControlsWithNote-C60QK1TR.js";import{D as h}from"./DocsHeader-DgEUA2RG.js";import{F as l}from"./CommandsAndQueries-dho9FID6.js";import{M as f,C as i,a as j,D as m}from"./blocks-BJbIBXfd.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-BtZfIwQC.js";import{M as a}from"./index-BLVo9Abq.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8G75QKe0.js";import"./information-omXjQTPD.js";import"./sys-enter-2-C04ebACG.js";import"./alert-BHqxLN4g.js";import"./Tag-BSVrbtw1.js";import"./index-BJLS4IRc.js";import"./index-BHsujjCW.js";import"./Link-Dgw-_ZOU.js";import"./copy-CZDbwxXZ.js";import"./copy-BlV96bJM.js";import"./GitHub-Mark-BYCuHz4P.js";import"./TableOfContent-B3yr3fci.js";import"./index-CRrKr04f.js";import"./index-Q2-fVCzE.js";import"./index-Nk5G6RU7.js";import"./index-DGKs15kB.js";import"./index-NT87e1sK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DANVMAHb.js";import"./addCustomCSSWithScoping-5Jg_uRZD.js";import"./locked-D4BVNoDj.js";import"./index-GHQOoZQV.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
