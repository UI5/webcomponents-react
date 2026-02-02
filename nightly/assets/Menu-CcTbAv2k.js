import{j as e,B as r}from"./iframe-DW8uOQp0.js";import{useMDXComponents as d}from"./index-DjfSR8mu.js";import{A as s}from"./ArgTypesWithNote-BK1Qi0CN.js";import{C as x}from"./ControlsWithNote-TxyFHGCU.js";import{D as h}from"./DocsHeader-DP0FcHj9.js";import{F as l}from"./CommandsAndQueries-CfxeF-Et.js";import{M as f,C as i,a as j,D as m}from"./blocks-B-FDorPY.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-CviAJ8JY.js";import{M as a}from"./index-BpsyYYzX.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B6OSuhq3.js";import"./information-Dh4y9R_M.js";import"./sys-enter-2-DblypcwG.js";import"./alert-CwT2Bhtr.js";import"./Tag-DZD94rKb.js";import"./index-BettgKsC.js";import"./index-DHspvyEH.js";import"./Link-DBMfTmkv.js";import"./copy-B4B5A7Oi.js";import"./copy-BPjUZJw9.js";import"./GitHub-Mark-CzgqyYAc.js";import"./TableOfContent-DIWuESi1.js";import"./index-wMLjz3fG.js";import"./index-BIXJrD8M.js";import"./index-DCmHXknG.js";import"./index-B1HFxIWl.js";import"./index-BlVT_NLP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BqxCMWvb.js";import"./addCustomCSSWithScoping-InFg9UZ2.js";import"./locked-BR627rj7.js";import"./index-TN7ViLEj.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
