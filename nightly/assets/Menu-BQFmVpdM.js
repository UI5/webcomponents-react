import{j as e,E as r}from"./iframe-B-JB9Mrg.js";import{useMDXComponents as d}from"./index-C6ab_87c.js";import{A as s}from"./ArgTypesWithNote-LfpMfKCk.js";import{C as x}from"./ControlsWithNote-QgGQUsr2.js";import{D as h}from"./DocsHeader-o-VKCo2B.js";import{F as l}from"./Footer-BoXWBFNs.js";import"./CommandsAndQueries-BMpPCtQI.js";import"./PageNotFound-DwjQIJMb.js";import{M as f,C as i,a as j,D as m}from"./blocks-gUSy1z8f.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-CRbpOxv3.js";import{M as a}from"./index-DhQdS3qf.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BUD8Dloj.js";import"./information-Bvi5gDZ4.js";import"./sys-enter-2-CDMo7mQ9.js";import"./alert-B5324jWv.js";import"./Tag-rJaILc04.js";import"./index-C_JAtQ1_.js";import"./index-BNovRndr.js";import"./Link-CUeYoLvN.js";import"./copy-xM69dy-U.js";import"./copy-B23uPwnI.js";import"./GitHub-Mark-CuXBZfmU.js";import"./TableOfContent-DfATZyjw.js";import"./index-COHIvdEC.js";import"./index-CxXKp92D.js";import"./index-UGbMf_4Y.js";import"./index-4LdkJtv9.js";import"./index-BmSIhnsV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_QxycfjS.js";import"./addCustomCSSWithScoping-DBFLD3Dt.js";import"./Illustrations-BGg5U59s.js";import"./i18n-defaults-CFWtSmu6.js";import"./locked-B6YTUtHi.js";import"./index-DMJElkcE.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
