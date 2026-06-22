import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{i as n,n as r,r as i,t as a}from"./UserMenuItem-BYADK7TG.js";import{h as o,m as s}from"./webComponents-CAzSHKWX.js";import{A as c,_ as l,d as u,n as d,o as f,r as p,u as m}from"./blocks-CEa8nYtD.js";import{E as h,b as g,f as _,t as v,u as y}from"./components-4_N6kcDN.js";import{n as b,t as x}from"./SubcomponentsSection-Da9yr5rF.js";import{Default as S,n as C,t as w}from"./UserMenu.stories-e7AO1SbV.js";function T(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...c(),...e.components};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(u,{of:w}),`
`,(0,D.jsx)(_,{of:w}),`
`,(0,D.jsx)(`br`,{}),`
`,(0,D.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,D.jsx)(p,{of:S}),`
`,(0,D.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,D.jsx)(g,{of:S}),`
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
`,(0,D.jsx)(m,{children:x}),`
`,(0,D.jsx)(t.h2,{id:`usermenuaccount`,children:`UserMenuAccount`}),`
`,(0,D.jsx)(f,{of:i}),`
`,(0,D.jsx)(d,{of:i}),`
`,(0,D.jsx)(t.h2,{id:`usermenuitem`,children:`UserMenuItem`}),`
`,(0,D.jsx)(f,{of:a}),`
`,(0,D.jsx)(d,{of:a}),`
`,(0,D.jsx)(t.h2,{id:`usermenuitemgroup`,children:`UserMenuItemGroup`}),`
`,(0,D.jsx)(f,{of:s}),`
`,(0,D.jsx)(d,{of:s}),`
`,(0,D.jsx)(y,{})]})}function E(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,D.jsx)(t,{...e,children:(0,D.jsx)(T,{...e})}):T(e)}var D;e((()=>{D=t(),h(),v(),l(),b(),n(),r(),o(),C()}))();export{E as default};