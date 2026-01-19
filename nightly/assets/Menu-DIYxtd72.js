import{j as e,e as r}from"./iframe-CqyRxNKY.js";import{useMDXComponents as d}from"./index-CXuCYMlQ.js";import{A as s}from"./ArgTypesWithNote-zqTmFbgo.js";import{C as x}from"./ControlsWithNote-QwD0LoME.js";import{D as h}from"./DocsHeader-B5BV8WRG.js";import{F as l}from"./CommandsAndQueries-DLVKRV5D.js";import{M as f,C as i,a as j,D as m}from"./blocks-05z5mbmD.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-OewBUR3R.js";import{M as a}from"./index-DROT4aTM.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C2IzZWSs.js";import"./information-Ezgcqzkg.js";import"./sys-enter-2-5MMglnM6.js";import"./alert-BAouMQ7q.js";import"./Tag-DuSXABBC.js";import"./index-BymRtllO.js";import"./index-4M_RVJJe.js";import"./Link-CXMFuXBh.js";import"./copy-D8nw0rNl.js";import"./copy-B4Tt60gX.js";import"./GitHub-Mark-DqVdFPyg.js";import"./TableOfContent-D9XYfqlc.js";import"./index-H9dUlo5Q.js";import"./index-BseYaHXw.js";import"./index-DzGBN3np.js";import"./index-CcSvXznG.js";import"./index-CwxFUtHh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bdq0yBwh.js";import"./addCustomCSSWithScoping-Bi_7urmM.js";import"./locked-YVXGX3t1.js";import"./index-zb7AW-_8.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
