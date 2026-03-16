import{j as e,E as r}from"./iframe-D8qIAX_f.js";import{useMDXComponents as d}from"./index-DiTh5Uxf.js";import{A as s}from"./ArgTypesWithNote-Dlfp5uen.js";import{C as x}from"./ControlsWithNote-BQC-xq4A.js";import{D as h}from"./DocsHeader-Bo5dZeF6.js";import{F as l}from"./Footer-CDmCmrx9.js";import"./CommandsAndQueries-KW_TEdhO.js";import"./PageNotFound-DinCfZiZ.js";import{M as f,C as i,a as j,D as m}from"./blocks-CdiMt6d7.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-DijGe0sF.js";import{M as a}from"./index-D-Ci0ZAc.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CUBI-ScP.js";import"./information-BSkhwjAM.js";import"./sys-enter-2-DXbxqs0w.js";import"./alert-D1bzSBmg.js";import"./Tag-DNk7gwKS.js";import"./index-D_VELT5i.js";import"./index-BWh6tnxq.js";import"./Link-sqVv97Mp.js";import"./copy-CV4ADswS.js";import"./copy-B-3EcH3S.js";import"./GitHub-Mark-CXtbX1p4.js";import"./TableOfContent-Y2XZ-6aA.js";import"./index-CaB62qmL.js";import"./index-isyxk5XI.js";import"./index-BFvnR1Pd.js";import"./index-D5GeJD0z.js";import"./index-DHpssY4F.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D5egdqPD.js";import"./addCustomCSSWithScoping-Dd8DeQed.js";import"./Illustrations-CZMe32im.js";import"./i18n-defaults-CFWtSmu6.js";import"./locked-DtG0dDp6.js";import"./index-CAO143tU.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
`,e.jsx(l,{})]})}function te(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}export{te as default};
