import{n as e}from"./chunk-zsgVPwQN.js";import{Ct as t,Dt as n,Et as r,Ot as i,Tt as a,Wm as o,wt as s}from"./iframe-CfLcoMHk.js";import{r as c}from"./react-DnXUr-UZ.js";import{c as l,m as u,s as d,t as f,v as p}from"./components-DBuBsu7x.js";import{_ as m,d as h,n as g,o as _,r as v,u as y}from"./blocks-dJatPlFp.js";import{n as b,t as x}from"./SubcomponentsSection-DDnl7AR6.js";import{Default as S,n as C,t as w}from"./UserMenu.stories-B8N0bhHR.js";function T(e){let r={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...c(),...e.components};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(h,{of:w}),`
`,(0,D.jsx)(l,{of:w}),`
`,(0,D.jsx)(`br`,{}),`
`,(0,D.jsx)(r.h2,{id:`example`,children:`Example`}),`
`,(0,D.jsx)(v,{of:S}),`
`,(0,D.jsx)(r.h2,{id:`properties`,children:`Properties`}),`
`,(0,D.jsx)(u,{of:S}),`
`,(0,D.jsx)(r.h2,{id:`open-usermenu`,children:`Open UserMenu`}),`
`,(0,D.jsxs)(r.p,{children:[`The `,(0,D.jsx)(r.code,{children:`UserMenu`}),` requires an `,(0,D.jsx)(r.code,{children:`opener`}),` so it knows where to anchor itself when opened.
To provide this, you can either:`]}),`
`,(0,D.jsxs)(r.ul,{children:[`
`,(0,D.jsxs)(r.li,{children:[`Assign an `,(0,D.jsx)(r.code,{children:`id`}),` to the element rendered in the `,(0,D.jsx)(r.code,{children:`profile`}),` slot.`]}),`
`,(0,D.jsxs)(r.li,{children:[`Use the `,(0,D.jsx)(r.code,{children:`targetRef`}),` provided in the `,(0,D.jsx)(r.code,{children:`detail`}),` of the `,(0,D.jsx)(r.code,{children:`onProfileClick`}),` event properties.`]}),`
`]}),`
`,(0,D.jsxs)(r.h3,{id:`via-targetref`,children:[`Via `,(0,D.jsx)(r.code,{children:`targetRef`})]}),`
`,(0,D.jsx)(r.pre,{children:(0,D.jsx)(r.code,{className:`language-tsx`,children:`function RefOpener() {
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
`,(0,D.jsxs)(r.h3,{id:`via-id`,children:[`Via `,(0,D.jsx)(r.code,{children:`id`})]}),`
`,(0,D.jsx)(r.pre,{children:(0,D.jsx)(r.code,{className:`language-tsx`,children:`function IdOpener() {
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
`,(0,D.jsx)(r.h2,{id:`usermenuaccount`,children:`UserMenuAccount`}),`
`,(0,D.jsx)(_,{of:n}),`
`,(0,D.jsx)(g,{of:n}),`
`,(0,D.jsx)(r.h2,{id:`usermenuitem`,children:`UserMenuItem`}),`
`,(0,D.jsx)(_,{of:a}),`
`,(0,D.jsx)(g,{of:a}),`
`,(0,D.jsx)(r.h2,{id:`usermenuitemgroup`,children:`UserMenuItemGroup`}),`
`,(0,D.jsx)(_,{of:t}),`
`,(0,D.jsx)(g,{of:t}),`
`,(0,D.jsx)(d,{})]})}function E(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,D.jsx)(t,{...e,children:(0,D.jsx)(T,{...e})}):T(e)}var D;e((()=>{D=o(),p(),f(),m(),b(),i(),r(),s(),C()}))();export{E as default};