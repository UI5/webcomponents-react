import{n as e}from"./chunk-jRWAZmH_.js";import{Ji as t,Xi as n,Xm as r,Yi as i,Zi as a,n as o,r as s}from"./iframe-CJ_kH7bw.js";import{r as c}from"./react-B0uNh-ME.js";import{_ as l,m as u,o as d,p as f,s as p,t as m}from"./components-oGzuta6Q.js";import{_ as h,d as g,o as _,r as v,u as y}from"./blocks-DgKI4zWC.js";import{n as b,t as x}from"./SubcomponentsSection-B_rkJ3on.js";import{Default as S,WithSubMenu as C,n as w,t as T}from"./Menu.stories-0QA3Dwte.js";function E(e){let r={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...c(),...e.components};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(g,{of:T}),`
`,(0,O.jsx)(p,{of:T,since:`0.23.0`}),`
`,(0,O.jsx)(r.h2,{id:`example`,children:`Example`}),`
`,(0,O.jsx)(v,{of:S}),`
`,(0,O.jsx)(r.h2,{id:`properties`,children:`Properties`}),`
`,(0,O.jsx)(f,{of:S}),`
`,(0,O.jsx)(r.h2,{id:`opening-menus`,children:`Opening Menus`}),`
`,(0,O.jsxs)(r.p,{children:[`You can open and close the `,(0,O.jsx)(r.code,{children:`Menu`}),` component in a declarative way using the `,(0,O.jsx)(r.code,{children:`open`}),` and `,(0,O.jsx)(r.code,{children:`opener`}),` prop.`]}),`
`,(0,O.jsx)(r.pre,{children:(0,O.jsx)(r.code,{className:`language-jsx`,children:`const MyComponentWithMenu = () => {
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
`,(0,O.jsx)(r.h2,{id:`more-examples`,children:`More examples`}),`
`,(0,O.jsx)(r.h3,{id:`menu-with-submenu`,children:`Menu with Submenu`}),`
`,(0,O.jsx)(v,{of:C}),`
`,(0,O.jsx)(y,{children:x}),`
`,(0,O.jsx)(r.h2,{id:`menuitem`,children:`MenuItem`}),`
`,(0,O.jsx)(_,{of:n}),`
`,(0,O.jsx)(u,{metaOf:T,hideHTMLPropsNote:!0,exclude:o,of:n}),`
`,(0,O.jsx)(r.h2,{id:`menuitemgroup`,children:`MenuItemGroup`}),`
`,(0,O.jsx)(_,{of:t}),`
`,(0,O.jsx)(u,{metaOf:T,hideHTMLPropsNote:!0,exclude:o,of:t}),`
`,(0,O.jsx)(d,{})]})}function D(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,O.jsx)(t,{...e,children:(0,O.jsx)(E,{...e})}):E(e)}var O;e((()=>{O=r(),l(),m(),h(),w(),a(),i(),b(),s()}))();export{D as default};