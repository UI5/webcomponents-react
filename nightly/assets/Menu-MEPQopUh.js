import{j as e,e as r}from"./iframe-DWPhu-XW.js";import{useMDXComponents as d}from"./index-CTKrG-Il.js";import{A as s}from"./ArgTypesWithNote-CgUTS2n7.js";import{C as x}from"./ControlsWithNote-DKx3CuYi.js";import{D as h}from"./DocsHeader-D4Ao4KHN.js";import{F as l}from"./CommandsAndQueries-CU5SVthr.js";import{M as f,C as i,a as j,D as m}from"./blocks-CEz7tllO.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-CS48btRT.js";import{M as a}from"./index-BpK0vNVO.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bdh_RTY9.js";import"./information-Du5hwuH3.js";import"./sys-enter-2-Xjz6cji1.js";import"./alert-CbVbnvcl.js";import"./Tag-Dba4-MU4.js";import"./index-BUa9lJQh.js";import"./index-CiWXYZya.js";import"./Link-DkEMVIRA.js";import"./copy-CDd7Awxe.js";import"./copy-DPKhld63.js";import"./GitHub-Mark-n4sweNCN.js";import"./TableOfContent-C4JT23W_.js";import"./index-Cr6-mnTI.js";import"./index-BO-QmtYo.js";import"./index-dWLwPKk_.js";import"./index-3as0AtcW.js";import"./index-Cqyay8-b.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bmz1hEk-.js";import"./addCustomCSSWithScoping-_7UfQKgI.js";import"./locked-CvzYQOBo.js";import"./index-DxERPK8k.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
