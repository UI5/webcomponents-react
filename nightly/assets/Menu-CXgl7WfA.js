import{j as e,e as r}from"./iframe-CqyMw63j.js";import{useMDXComponents as d}from"./index-GHxgs1Oh.js";import{A as s}from"./ArgTypesWithNote-DhjYl0xC.js";import{C as x}from"./ControlsWithNote-Ck71R3qs.js";import{D as h}from"./DocsHeader-DC4NOlH0.js";import{F as l}from"./CommandsAndQueries-Ckqtj5q6.js";import{M as f,C as i,a as j,D as m}from"./blocks-gNAN3wnS.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-Oc-Ye4jV.js";import{M as a}from"./index-Cu6qQNSN.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DZeMBOtb.js";import"./information-B-SB47kj.js";import"./sys-enter-2-8wJJb_fs.js";import"./alert-DS7w9_j5.js";import"./Tag-9sg0d6U8.js";import"./index-fW-mpTRV.js";import"./index-CRtLMoP1.js";import"./Link-8hzPxLpd.js";import"./copy-C_O2G0CQ.js";import"./copy-CygH_bff.js";import"./GitHub-Mark-Burz5wza.js";import"./TableOfContent-CyJZKYaH.js";import"./index-Ccu9AWNy.js";import"./index-CyG-uGBl.js";import"./index-B8X3UXQy.js";import"./index-DqKKFvdB.js";import"./index-CEokL_Ra.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-hBi7rm2H.js";import"./addCustomCSSWithScoping-C9ZUc-46.js";import"./locked-ZtXGf8vf.js";import"./index-6w_ODf-x.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
