import{j as e,B as r}from"./iframe-CtC7gYmF.js";import{useMDXComponents as d}from"./index-Di_URU-1.js";import{A as s}from"./ArgTypesWithNote-B-PQqAxc.js";import{C as x}from"./ControlsWithNote-VDJmcR8g.js";import{D as h}from"./DocsHeader-Bz17cmNN.js";import{F as l}from"./CommandsAndQueries-DJ8rBoed.js";import{M as f,C as i,a as j,D as m}from"./blocks-mn43RK2l.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-BFYrahzz.js";import{M as a}from"./index-CKbtZPUk.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BQgIK84O.js";import"./information-CFH6-U84.js";import"./sys-enter-2-DcKU3U88.js";import"./alert-BgZS6-Ve.js";import"./Tag-DL1jc8MZ.js";import"./index-B89psySH.js";import"./index-C6r9Z_qm.js";import"./Link-DC3Ks00x.js";import"./copy-Bc4RlbqC.js";import"./copy-qYhvVcV8.js";import"./GitHub-Mark-BaXje0NN.js";import"./TableOfContent-FJaxAP6D.js";import"./index-Bc0i7q2T.js";import"./index-BjvlOMJE.js";import"./index-D2-G6hnA.js";import"./index-DbYbEtFi.js";import"./index-BCFTf5Mq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVmORIKm.js";import"./addCustomCSSWithScoping-u1_Fcso4.js";import"./locked-DzYlPjjq.js";import"./index-BXTPSteP.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
