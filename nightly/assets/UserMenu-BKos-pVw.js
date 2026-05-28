import{i as e}from"./preload-helper-usAeo7Bx.js";import{Ft as t,It as n,Lt as r,Nt as i,Pt as a,Rt as o,lh as s}from"./iframe-CyUQkVze.js";import{J as c,_ as l,d as u,n as d,o as f,r as p,u as m}from"./blocks-0TgFerki.js";import{E as h,b as g,f as _,t as v,u as y}from"./components-Bzz5osS0.js";import{n as b,t as x}from"./SubcomponentsSection-Da9yr5rF.js";import{Default as S,n as C,t as w}from"./UserMenu.stories-CU8WdOU4.js";function T(e){let n={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...c(),...e.components};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(u,{of:w}),`
`,(0,D.jsx)(_,{of:w}),`
`,(0,D.jsx)(`br`,{}),`
`,(0,D.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,D.jsx)(p,{of:S}),`
`,(0,D.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,D.jsx)(g,{of:S}),`
`,(0,D.jsx)(n.h2,{id:`open-usermenu`,children:`Open UserMenu`}),`
`,(0,D.jsxs)(n.p,{children:[`The `,(0,D.jsx)(n.code,{children:`UserMenu`}),` requires an `,(0,D.jsx)(n.code,{children:`opener`}),` so it knows where to anchor itself when opened.
To provide this, you can either:`]}),`
`,(0,D.jsxs)(n.ul,{children:[`
`,(0,D.jsxs)(n.li,{children:[`Assign an `,(0,D.jsx)(n.code,{children:`id`}),` to the element rendered in the `,(0,D.jsx)(n.code,{children:`profile`}),` slot.`]}),`
`,(0,D.jsxs)(n.li,{children:[`Use the `,(0,D.jsx)(n.code,{children:`targetRef`}),` provided in the `,(0,D.jsx)(n.code,{children:`detail`}),` of the `,(0,D.jsx)(n.code,{children:`onProfileClick`}),` event properties.`]}),`
`]}),`
`,(0,D.jsxs)(n.h3,{id:`via-targetref`,children:[`Via `,(0,D.jsx)(n.code,{children:`targetRef`})]}),`
`,(0,D.jsx)(n.pre,{children:(0,D.jsx)(n.code,{className:`language-tsx`,children:`function RefOpener() {
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
`,(0,D.jsxs)(n.h3,{id:`via-id`,children:[`Via `,(0,D.jsx)(n.code,{children:`id`})]}),`
`,(0,D.jsx)(n.pre,{children:(0,D.jsx)(n.code,{className:`language-tsx`,children:`function IdOpener() {
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
`,(0,D.jsx)(m,{children:x}),`
`,(0,D.jsx)(n.h2,{id:`usermenuaccount`,children:`UserMenuAccount`}),`
`,(0,D.jsx)(f,{of:r}),`
`,(0,D.jsx)(d,{of:r}),`
`,(0,D.jsx)(n.h2,{id:`usermenuitem`,children:`UserMenuItem`}),`
`,(0,D.jsx)(f,{of:t}),`
`,(0,D.jsx)(d,{of:t}),`
`,(0,D.jsx)(n.h2,{id:`usermenuitemgroup`,children:`UserMenuItemGroup`}),`
`,(0,D.jsx)(f,{of:i}),`
`,(0,D.jsx)(d,{of:i}),`
`,(0,D.jsx)(y,{})]})}function E(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,D.jsx)(t,{...e,children:(0,D.jsx)(T,{...e})}):T(e)}var D;e((()=>{D=s(),h(),v(),l(),b(),o(),n(),a(),C()}))();export{E as default};