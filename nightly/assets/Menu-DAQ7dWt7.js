import{n as e}from"./chunk-jRWAZmH_.js";import{Gm as t,Ji as n,Xi as r,Yi as i,Zi as a,n as o,r as s}from"./iframe-S6__9jAv.js";import{r as c}from"./react-D3EuYWKP.js";import{_ as l,m as u,o as d,p as f,s as p,t as m}from"./components-V1kqwHKF.js";import{_ as h,d as g,o as _,r as v,u as y}from"./blocks-B1LbS50_.js";import{n as b,t as x}from"./SubcomponentsSection-DYUGiO1B.js";import{Default as S,WithSubMenu as C,n as w,t as T}from"./Menu.stories-B4WKLwmJ.js";function E(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...c(),...e.components};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(g,{of:T}),`
`,(0,O.jsx)(p,{of:T,since:`0.23.0`}),`
`,(0,O.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,O.jsx)(v,{of:S}),`
`,(0,O.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,O.jsx)(f,{of:S}),`
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
`,(0,O.jsx)(_,{of:n}),`
`,(0,O.jsx)(u,{metaOf:T,hideHTMLPropsNote:!0,exclude:o,of:n}),`
`,(0,O.jsx)(d,{})]})}function D(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,O.jsx)(t,{...e,children:(0,O.jsx)(E,{...e})}):E(e)}var O;e((()=>{O=t(),l(),m(),h(),w(),a(),i(),b(),s()}))();export{D as default};