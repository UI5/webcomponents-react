import{n as e}from"./chunk-zsgVPwQN.js";import{Ji as t,Wm as n,Xi as r,Yi as i,Zi as a,n as o,r as s}from"./iframe-Cka0UKMq.js";import{r as c}from"./react-xgcNoH_S.js";import{c as l,h as u,m as d,s as f,t as p,v as m}from"./components-Ds5Cfq3J.js";import{_ as h,d as g,o as _,r as v,u as y}from"./blocks-B40191hP.js";import{n as b,t as x}from"./SubcomponentsSection-DDnl7AR6.js";import{Default as S,WithSubMenu as C,n as w,t as T}from"./Menu.stories-KIf7oh1P.js";function E(e){let n={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...c(),...e.components};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(g,{of:T}),`
`,(0,O.jsx)(l,{of:T,since:`0.23.0`}),`
`,(0,O.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,O.jsx)(v,{of:S}),`
`,(0,O.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,O.jsx)(d,{of:S}),`
`,(0,O.jsx)(n.h2,{id:`opening-menus`,children:`Opening Menus`}),`
`,(0,O.jsxs)(n.p,{children:[`You can open and close the `,(0,O.jsx)(n.code,{children:`Menu`}),` component in a declarative way using the `,(0,O.jsx)(n.code,{children:`open`}),` and `,(0,O.jsx)(n.code,{children:`opener`}),` prop.`]}),`
`,(0,O.jsx)(n.pre,{children:(0,O.jsx)(n.code,{className:`language-jsx`,children:`const MyComponentWithMenu = () => {
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
`,(0,O.jsx)(n.h2,{id:`more-examples`,children:`More examples`}),`
`,(0,O.jsx)(n.h3,{id:`menu-with-submenu`,children:`Menu with Submenu`}),`
`,(0,O.jsx)(v,{of:C}),`
`,(0,O.jsx)(y,{children:x}),`
`,(0,O.jsx)(n.h2,{id:`menuitem`,children:`MenuItem`}),`
`,(0,O.jsx)(_,{of:r}),`
`,(0,O.jsx)(u,{metaOf:T,hideHTMLPropsNote:!0,exclude:o,of:r}),`
`,(0,O.jsx)(n.h2,{id:`menuitemgroup`,children:`MenuItemGroup`}),`
`,(0,O.jsx)(_,{of:t}),`
`,(0,O.jsx)(u,{metaOf:T,hideHTMLPropsNote:!0,exclude:o,of:t}),`
`,(0,O.jsx)(f,{})]})}function D(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,O.jsx)(t,{...e,children:(0,O.jsx)(E,{...e})}):E(e)}var O;e((()=>{O=n(),m(),p(),h(),w(),a(),i(),b(),s()}))();export{D as default};