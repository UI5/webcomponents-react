import{i as e}from"./preload-helper-usAeo7Bx.js";import{Fr as t,Pr as n,Ua as r,Wa as i,io as a,lh as o,lt as s,n as c,no as l,r as u,ro as d,to as f,ut as p}from"./iframe-k3VOpMSv.js";import{J as m,_ as h,d as g,n as _,o as v,r as y,u as b}from"./blocks-B7N1S-RB.js";import{E as x,b as S,f as C,t as w,u as T}from"./components-Chyde1jT.js";import{n as E,t as D}from"./SubcomponentsSection-Da9yr5rF.js";import{Default as O,WithCustomTabs as k,n as A,t as j}from"./ViewSettingsDialog.stories-B2veyXQT.js";function M(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...m(),...e.components};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(g,{of:j}),`
`,(0,P.jsx)(C,{of:j,since:`0.20.0`}),`
`,(0,P.jsx)(`br`,{}),`
`,(0,P.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,P.jsx)(y,{of:O}),`
`,(0,P.jsx)(t.h2,{id:`with-custom-tabs`,children:`With Custom Tabs`}),`
`,(0,P.jsx)(y,{of:k}),`
`,(0,P.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,P.jsx)(S,{of:O}),`
`,(0,P.jsx)(t.h2,{id:`opening-viewsettingsdialog`,children:`Opening ViewSettingsDialog`}),`
`,(0,P.jsxs)(t.p,{children:[`You can open and close the `,(0,P.jsx)(t.code,{children:`ViewSettingsDialog`}),` component in a declarative way using the `,(0,P.jsx)(t.code,{children:`open`}),` prop.`]}),`
`,(0,P.jsx)(t.pre,{children:(0,P.jsx)(t.code,{className:`language-jsx`,children:`const ViewSettingsDialogComponent = () => {
  const [showVSD, setShowVSD] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setShowVSD(true);
        }}
      >
        Open ViewSettingsDialog
      </Button>
      <ViewSettingsDialog
        open={showVSD}
        onClose={() => {
          setShowVSD(false);
        }}
        sortItems={
          <>
            <SortItem text="Name" />
            <SortItem text="Position" />
            <SortItem text="Company" />
            <SortItem text="Department" />
          </>
        }
      />
    </>
  );
};
`})}),`
`,(0,P.jsx)(b,{children:D}),`
`,(0,P.jsx)(t.h2,{id:`sortitem`,children:`SortItem`}),`
`,(0,P.jsx)(v,{of:n}),`
`,(0,P.jsx)(_,{exclude:c,of:n}),`
`,(0,P.jsx)(t.h2,{id:`filteritem`,children:`FilterItem`}),`
`,(0,P.jsx)(v,{of:d}),`
`,(0,P.jsx)(_,{exclude:c,of:d}),`
`,(0,P.jsx)(t.h2,{id:`filteritemoption`,children:`FilterItemOption`}),`
`,(0,P.jsx)(v,{of:f}),`
`,(0,P.jsx)(_,{exclude:c,of:f}),`
`,(0,P.jsx)(t.h2,{id:`groupitem`,children:`GroupItem`}),`
`,(0,P.jsx)(t.p,{children:(0,P.jsx)(t.strong,{children:`Since v2.15.0`})}),`
`,(0,P.jsx)(v,{of:r}),`
`,(0,P.jsx)(_,{exclude:c,of:r}),`
`,(0,P.jsx)(t.h2,{id:`viewsettingsdialogcustomtab`,children:`ViewSettingsDialogCustomTab`}),`
`,(0,P.jsx)(t.p,{children:(0,P.jsx)(t.strong,{children:`Since v2.22.0`})}),`
`,(0,P.jsx)(v,{of:s}),`
`,(0,P.jsx)(_,{exclude:c,of:s}),`
`,(0,P.jsx)(T,{})]})}function N(e={}){let{wrapper:t}={...m(),...e.components};return t?(0,P.jsx)(t,{...e,children:(0,P.jsx)(M,{...e})}):M(e)}var P;e((()=>{P=o(),x(),w(),E(),h(),a(),l(),t(),i(),p(),A(),u()}))();export{N as default};