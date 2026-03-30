import{j as e,A as r}from"./iframe-DMCuegit.js";import{u as d,M as x,C as s,a as h,D as i}from"./blocks-_hT2CGz-.js";import{A as p}from"./ArgTypesWithNote-CNYrCXCJ.js";import{C as l}from"./ControlsWithNote-CCfPh1IT.js";import{D as f}from"./DocsHeader-BGUPBIWz.js";import{F as j}from"./Footer-0Wa-LUTc.js";import"./CommandsAndQueries-C9E2MGX7.js";import"./PageNotFound-BG19bJbD.js";import{C as t,D as m,W as M,M as u}from"./Menu.stories-C7LYVfHq.js";import{M as a}from"./index-BdsjKe3M.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-eKDFsa2E.js";import"./information-5_fbL55R.js";import"./sys-enter-2-Dil9t1r8.js";import"./alert-D7vPLYbi.js";import"./Tag-DKKBiDqY.js";import"./index-D62lIz3L.js";import"./index-otx7j-A2.js";import"./Link-CmPTNs7p.js";import"./copy-B-HwLSgn.js";import"./copy-CPtUp5y0.js";import"./GitHub-Mark-DIeXcjWa.js";import"./TableOfContent-CJ3fOdBx.js";import"./index-DEoJMyHo.js";import"./index-Dzpyi8IH.js";import"./index-C9z-ZS1p.js";import"./index-C1STFZgh.js";import"./index-Di3QE5re.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B5tqyg7w.js";import"./addCustomCSSWithScoping-C0Smz55A.js";import"./Illustrations-bTO4h7is.js";import"./i18n-defaults-CFWtSmu6.js";import"./locked-BJpqPuBE.js";import"./index-DcV1pgbn.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
