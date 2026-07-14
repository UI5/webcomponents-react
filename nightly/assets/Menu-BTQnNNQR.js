import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./jsx-runtime-CFwixLRt.js";import{n,t as r}from"./MenuItem-2GAJwJKO.js";import{i,r as a}from"./MenuSeparator-UT_fIk8J.js";import{n as o,r as s}from"./iframe-CTDu8Uac.js";import{i as c}from"./react-DnC3AmCq.js";import{E as l,S as u,b as d,f,t as p,u as m}from"./components-K3OY9Vc3.js";import{_ as h,d as g,o as _,r as v,u as y}from"./blocks-HGm0n3ze.js";import{n as b,t as x}from"./SubcomponentsSection-NAzYiQqQ.js";import{Default as S,WithSubMenu as C,n as w,t as T}from"./Menu.stories-BxOlnJDF.js";function E(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...c(),...e.components};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(g,{of:T}),`
`,(0,O.jsx)(f,{of:T,since:`0.23.0`}),`
`,(0,O.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,O.jsx)(v,{of:S}),`
`,(0,O.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,O.jsx)(d,{of:S}),`
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
`,(0,O.jsx)(v,{of:C}),`
`,(0,O.jsx)(y,{children:x}),`
`,(0,O.jsx)(t.h2,{id:`menuitem`,children:`MenuItem`}),`
`,(0,O.jsx)(_,{of:r}),`
`,(0,O.jsx)(u,{metaOf:T,hideHTMLPropsNote:!0,exclude:o,of:r}),`
`,(0,O.jsx)(t.h2,{id:`menuitemgroup`,children:`MenuItemGroup`}),`
`,(0,O.jsx)(_,{of:a}),`
`,(0,O.jsx)(u,{metaOf:T,hideHTMLPropsNote:!0,exclude:o,of:a}),`
`,(0,O.jsx)(m,{})]})}function D(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,O.jsx)(t,{...e,children:(0,O.jsx)(E,{...e})}):E(e)}var O;e((()=>{O=t(),l(),p(),h(),w(),n(),i(),b(),s()}))();export{D as default};