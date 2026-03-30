import{j as e,A as r}from"./iframe-Dr24b1_2.js";import{u as d,M as x,C as s,a as h,D as i}from"./blocks-DOkdIKLK.js";import{A as p}from"./ArgTypesWithNote-VMzpTHko.js";import{C as l}from"./ControlsWithNote-BXcQcfnL.js";import{D as f}from"./DocsHeader-9y2YWA-s.js";import{F as j}from"./Footer-B2LKGocf.js";import"./CommandsAndQueries-D2RSxAeU.js";import"./PageNotFound-t4KH-Yk6.js";import{C as t,D as m,W as M,M as u}from"./Menu.stories-CCgub2Un.js";import{M as a}from"./index-sQzQE7BJ.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CL-oiXYR.js";import"./information-C20uFQS0.js";import"./sys-enter-2-CQd_0MF7.js";import"./alert-B9PmGrag.js";import"./Tag-BIxdINB7.js";import"./index-DrqpZzSV.js";import"./index-VF4msgJe.js";import"./Link-CG4ImuUx.js";import"./copy-zEtP8ZOb.js";import"./copy-D1SgAW06.js";import"./GitHub-Mark-BVwUWF2c.js";import"./TableOfContent-CTShD90n.js";import"./index-DcUuq1aq.js";import"./index-CjU6u75C.js";import"./index-_maGeclj.js";import"./index-aTzn3I1m.js";import"./index-B_PGO6aF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dh4aGlp7.js";import"./addCustomCSSWithScoping-BCzlWLsZ.js";import"./Illustrations-Dt9P8lxH.js";import"./i18n-defaults-CFWtSmu6.js";import"./locked-Da37vbKv.js";import"./index-DqjM5LbU.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
`,e.jsx(f,{of:t,since:"0.23.0"}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(l,{of:m}),`
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
`,e.jsx(s,{of:M}),`
`,e.jsx(h,{children:C}),`
`,e.jsx(n.h2,{id:"menuitem",children:"MenuItem"}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(p,{metaOf:t,hideHTMLPropsNote:!0,exclude:r,of:a}),`
`,e.jsx(n.h2,{id:"menuitemgroup",children:"MenuItemGroup"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(p,{metaOf:t,hideHTMLPropsNote:!0,exclude:r,of:u}),`
`,e.jsx(j,{})]})}function oe(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}export{oe as default};
