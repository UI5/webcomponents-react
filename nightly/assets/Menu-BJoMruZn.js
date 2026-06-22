import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{n,t as r}from"./MenuItem-9thm5XAr.js";import{i,r as a}from"./MenuSeparator-C5SCyZ6Q.js";import{n as o,r as s}from"./iframe-BCsGPyEy.js";import{A as c,_ as l,d as u,o as d,r as f,u as p}from"./blocks-Bi7Hvh-J.js";import{E as m,S as h,b as g,f as _,t as v,u as y}from"./components-SjvSbESx.js";import{n as b,t as x}from"./SubcomponentsSection-Da9yr5rF.js";import{Default as S,WithSubMenu as C,n as w,t as T}from"./Menu.stories-Cxh7rEzd.js";function E(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...c(),...e.components};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(u,{of:T}),`
`,(0,O.jsx)(_,{of:T,since:`0.23.0`}),`
`,(0,O.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,O.jsx)(f,{of:S}),`
`,(0,O.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,O.jsx)(g,{of:S}),`
`,(0,O.jsx)(t.h2,{id:`opening-menus`,children:`Opening Menus`}),`
`,(0,O.jsxs)(t.p,{children:[`You can open and close the `,(0,O.jsx)(t.code,{children:`Menu`}),` component in a declarative way using the `,(0,O.jsx)(t.code,{children:`open`}),` and `,(0,O.jsx)(t.code,{children:`opener`}),` prop.`]}),`
`,(0,O.jsx)(t.pre,{children:(0,O.jsx)(t.code,{className:`language-jsx`,children:`const MyComponentWithMenu = () => {
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
`,(0,O.jsx)(t.h2,{id:`more-examples`,children:`More examples`}),`
`,(0,O.jsx)(t.h3,{id:`menu-with-submenu`,children:`Menu with Submenu`}),`
`,(0,O.jsx)(f,{of:C}),`
`,(0,O.jsx)(p,{children:x}),`
`,(0,O.jsx)(t.h2,{id:`menuitem`,children:`MenuItem`}),`
`,(0,O.jsx)(d,{of:r}),`
`,(0,O.jsx)(h,{metaOf:T,hideHTMLPropsNote:!0,exclude:o,of:r}),`
`,(0,O.jsx)(t.h2,{id:`menuitemgroup`,children:`MenuItemGroup`}),`
`,(0,O.jsx)(d,{of:a}),`
`,(0,O.jsx)(h,{metaOf:T,hideHTMLPropsNote:!0,exclude:o,of:a}),`
`,(0,O.jsx)(y,{})]})}function D(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,O.jsx)(t,{...e,children:(0,O.jsx)(E,{...e})}):E(e)}var O;e((()=>{O=t(),m(),v(),l(),w(),n(),i(),b(),s()}))();export{D as default};