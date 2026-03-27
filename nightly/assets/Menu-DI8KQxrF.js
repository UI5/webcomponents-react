import{j as e,A as r}from"./iframe-DNoxABv1.js";import{useMDXComponents as d}from"./index-DQAMMhq5.js";import{A as s}from"./ArgTypesWithNote-Cc8pN54_.js";import{C as x}from"./ControlsWithNote-CkiiUodH.js";import{D as h}from"./DocsHeader-BCqO4hZN.js";import{F as l}from"./Footer-CRUbKNtZ.js";import"./CommandsAndQueries-DUw_qZ-D.js";import"./PageNotFound-DExHfP7X.js";import{M as f,C as i,a as j,D as m}from"./blocks-CIhTxD7j.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-BA1Ok-yn.js";import{M as a}from"./index-BoZ5DN26.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-I7XZadEI.js";import"./information-BBbHiJJj.js";import"./sys-enter-2-CL00FEGT.js";import"./alert-8k6AaqYY.js";import"./Tag-C_8TAHAf.js";import"./index-Kl-B_MHz.js";import"./index-DAoAOn92.js";import"./Link-4KtEWIlR.js";import"./copy-DWlPDnmg.js";import"./copy-BoMvLlry.js";import"./GitHub-Mark-CIM-w4tw.js";import"./TableOfContent-BxuLiWq8.js";import"./index-B0My9-lL.js";import"./index-BfoP-fai.js";import"./index-KaiTFuVE.js";import"./index-BEeVgB1o.js";import"./index-DVs60LFY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CQViNCUD.js";import"./addCustomCSSWithScoping-CvyaWJf_.js";import"./Illustrations-eHdiuTwk.js";import"./i18n-defaults-CFWtSmu6.js";import"./locked-Bw-VSSxy.js";import"./index-DAqs15-E.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
