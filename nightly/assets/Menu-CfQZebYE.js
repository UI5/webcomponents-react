import{j as e,e as r}from"./iframe-CJRlzZgA.js";import{useMDXComponents as d}from"./index-CbUzkcD0.js";import{A as s}from"./ArgTypesWithNote-haRI0WKx.js";import{C as x}from"./ControlsWithNote-m4NXE0Lk.js";import{D as h}from"./DocsHeader-CYhP0NKu.js";import{F as l}from"./CommandsAndQueries-BJK9fmCd.js";import{M as f,C as i,a as j,D as m}from"./blocks-QclREKVQ.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-wd_QJiyb.js";import{M as a}from"./index-BtxBs3Jt.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B3EVM4WW.js";import"./information-CTfPsGYk.js";import"./sys-enter-2-DT64nekl.js";import"./alert-D_x5VnX_.js";import"./Tag-D6uzQqkN.js";import"./index-CEi9QmXA.js";import"./index-CgUHdFlG.js";import"./Link-0WAKzVuH.js";import"./copy-DJuCUsOV.js";import"./copy-Dm16cUhk.js";import"./GitHub-Mark-DrwbB2D9.js";import"./TableOfContent-CbWMIbhM.js";import"./index-DLQSfTW2.js";import"./index-CEHRPvSv.js";import"./index-DNJOtG7U.js";import"./index-B-KWFPaJ.js";import"./index-DBGTLlVz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ckhrx5tI.js";import"./addCustomCSSWithScoping-CXI5gvd5.js";import"./locked-BSOS063w.js";import"./index-Boy-FxzM.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
