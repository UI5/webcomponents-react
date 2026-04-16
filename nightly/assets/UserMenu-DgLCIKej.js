import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-1ARNaUmP.js";import{i as n,n as r,r as i,t as a}from"./UserMenuItem-BQMESQ3T.js";import{h as o,m as s}from"./webComponents-PHSJGZqe.js";import{r as c}from"./react-BZibOG70.js";import{_ as l,o as u,p as d,s as f,t as p}from"./components-sy8-k2gf.js";import{_ as m,d as h,n as g,o as _,r as v,u as y}from"./blocks-D9k7TVdi.js";import{n as b,t as x}from"./SubcomponentsSection-BZUidqqR.js";import{Default as S,n as C,t as w}from"./UserMenu.stories-D7IfOgzO.js";function T(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...c(),...e.components};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(h,{of:w}),`
`,(0,D.jsx)(f,{of:w}),`
`,(0,D.jsx)(`br`,{}),`
`,(0,D.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,D.jsx)(v,{of:S}),`
`,(0,D.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,D.jsx)(d,{of:S}),`
`,(0,D.jsx)(t.h2,{id:`open-usermenu`,children:`Open UserMenu`}),`
`,(0,D.jsxs)(t.p,{children:[`The `,(0,D.jsx)(t.code,{children:`UserMenu`}),` requires an `,(0,D.jsx)(t.code,{children:`opener`}),` so it knows where to anchor itself when opened.
To provide this, you can either:`]}),`
`,(0,D.jsxs)(t.ul,{children:[`
`,(0,D.jsxs)(t.li,{children:[`Assign an `,(0,D.jsx)(t.code,{children:`id`}),` to the element rendered in the `,(0,D.jsx)(t.code,{children:`profile`}),` slot.`]}),`
`,(0,D.jsxs)(t.li,{children:[`Use the `,(0,D.jsx)(t.code,{children:`targetRef`}),` provided in the `,(0,D.jsx)(t.code,{children:`detail`}),` of the `,(0,D.jsx)(t.code,{children:`onProfileClick`}),` event properties.`]}),`
`]}),`
`,(0,D.jsxs)(t.h3,{id:`via-targetref`,children:[`Via `,(0,D.jsx)(t.code,{children:`targetRef`})]}),`
`,(0,D.jsx)(t.pre,{children:(0,D.jsx)(t.code,{className:`language-tsx`,children:`function RefOpener() {
  const [open, setOpen] = useState(false);
  const userMenuRef = useRef<UserMenuDomRef>(null);
  return (
    <>
      <ShellBar
        onProfileClick={(e) => {
          const { targetRef } = e.detail;
          userMenuRef.current.opener = targetRef;
          setOpen(true);
        }}
        profile={<Avatar initials="JD" />}
      />
      <UserMenu
        ref={userMenuRef}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
}
`})}),`
`,(0,D.jsxs)(t.h3,{id:`via-id`,children:[`Via `,(0,D.jsx)(t.code,{children:`id`})]}),`
`,(0,D.jsx)(t.pre,{children:(0,D.jsx)(t.code,{className:`language-tsx`,children:`function IdOpener() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ShellBar
        onProfileClick={(e) => {
          setOpen(true);
        }}
        profile={<Avatar initials="JD" id="userMenuOpener" />}
      />
      <UserMenu
        open={open}
        opener="userMenuOpener"
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
}
`})}),`
`,(0,D.jsx)(y,{children:x}),`
`,(0,D.jsx)(t.h2,{id:`usermenuaccount`,children:`UserMenuAccount`}),`
`,(0,D.jsx)(_,{of:i}),`
`,(0,D.jsx)(g,{of:i}),`
`,(0,D.jsx)(t.h2,{id:`usermenuitem`,children:`UserMenuItem`}),`
`,(0,D.jsx)(_,{of:a}),`
`,(0,D.jsx)(g,{of:a}),`
`,(0,D.jsx)(t.h2,{id:`usermenuitemgroup`,children:`UserMenuItemGroup`}),`
`,(0,D.jsx)(_,{of:s}),`
`,(0,D.jsx)(g,{of:s}),`
`,(0,D.jsx)(u,{})]})}function E(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,D.jsx)(t,{...e,children:(0,D.jsx)(T,{...e})}):T(e)}var D;e((()=>{D=t(),l(),p(),m(),b(),n(),r(),o(),C()}))();export{E as default};