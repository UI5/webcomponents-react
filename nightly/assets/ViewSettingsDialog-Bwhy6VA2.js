import{i as e}from"./preload-helper-usAeo7Bx.js";import{Ga as t,Nr as n,Pr as r,Wa as i,ao as a,io as o,lt as s,mh as c,n as l,no as u,r as d,ro as f,ut as p}from"./iframe-BULObFlw.js";import{J as m,_ as h,d as g,n as _,o as v,r as y,u as b}from"./blocks-DXs5SD8z.js";import{E as x,b as S,f as C,t as w,u as T}from"./components-D7YyppO1.js";import{n as E,t as D}from"./SubcomponentsSection-Da9yr5rF.js";import{Default as O,WithCustomTabs as k,n as A,t as j}from"./ViewSettingsDialog.stories-BefHzs9g.js";function M(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...m(),...e.components};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(g,{of:j}),`
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
`,(0,P.jsx)(_,{exclude:l,of:n}),`
`,(0,P.jsx)(t.h2,{id:`filteritem`,children:`FilterItem`}),`
`,(0,P.jsx)(v,{of:o}),`
`,(0,P.jsx)(_,{exclude:l,of:o}),`
`,(0,P.jsx)(t.h2,{id:`filteritemoption`,children:`FilterItemOption`}),`
`,(0,P.jsx)(v,{of:u}),`
`,(0,P.jsx)(_,{exclude:l,of:u}),`
`,(0,P.jsx)(t.h2,{id:`groupitem`,children:`GroupItem`}),`
`,(0,P.jsx)(t.p,{children:(0,P.jsx)(t.strong,{children:`Since v2.15.0`})}),`
`,(0,P.jsx)(v,{of:i}),`
`,(0,P.jsx)(_,{exclude:l,of:i}),`
`,(0,P.jsx)(t.h2,{id:`viewsettingsdialogcustomtab`,children:`ViewSettingsDialogCustomTab`}),`
`,(0,P.jsx)(t.p,{children:(0,P.jsx)(t.strong,{children:`Since v2.22.0`})}),`
`,(0,P.jsx)(v,{of:s}),`
`,(0,P.jsx)(_,{exclude:l,of:s}),`
`,(0,P.jsx)(T,{})]})}function N(e={}){let{wrapper:t}={...m(),...e.components};return t?(0,P.jsx)(t,{...e,children:(0,P.jsx)(M,{...e})}):M(e)}var P;e((()=>{P=c(),x(),w(),E(),h(),a(),f(),r(),t(),p(),A(),d()}))();export{N as default};