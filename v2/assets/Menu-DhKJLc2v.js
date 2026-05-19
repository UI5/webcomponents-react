import{i as e}from"./preload-helper-DbRxMUml.js";import{$i as t,Fm as n,ea as r,n as i,na as a,r as o,ta as s}from"./iframe-C0NX5zi9.js";import{J as c,_ as l,d as u,o as d,r as f,u as p}from"./blocks-C1FzTFS0.js";import{_ as m,m as h,o as g,p as _,s as v,t as y}from"./components-LzckH7o1.js";import{n as b,t as x}from"./SubcomponentsSection-B_Fcxgn5.js";import{Default as S,WithSubMenu as C,n as w,t as T}from"./Menu.stories-B7CalAm8.js";function E(e){let n={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...c(),...e.components};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(u,{of:T}),`
`,(0,O.jsx)(v,{of:T,since:`0.23.0`}),`
`,(0,O.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,O.jsx)(f,{of:S}),`
`,(0,O.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,O.jsx)(_,{of:S}),`
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
`,(0,O.jsx)(f,{of:C}),`
`,(0,O.jsx)(p,{children:x}),`
`,(0,O.jsx)(n.h2,{id:`menuitem`,children:`MenuItem`}),`
`,(0,O.jsx)(d,{of:s}),`
`,(0,O.jsx)(h,{metaOf:T,hideHTMLPropsNote:!0,exclude:i,of:s}),`
`,(0,O.jsx)(n.h2,{id:`menuitemgroup`,children:`MenuItemGroup`}),`
`,(0,O.jsx)(d,{of:t}),`
`,(0,O.jsx)(h,{metaOf:T,hideHTMLPropsNote:!0,exclude:i,of:t}),`
`,(0,O.jsx)(g,{})]})}function D(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,O.jsx)(t,{...e,children:(0,O.jsx)(E,{...e})}):E(e)}var O;e((()=>{O=n(),m(),y(),l(),w(),a(),r(),b(),o()}))();export{D as default};