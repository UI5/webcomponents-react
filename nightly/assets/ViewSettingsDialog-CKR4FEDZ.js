import{i as e}from"./preload-helper-DbRxMUml.js";import{Dr as t,Fm as n,Ga as r,Ja as i,Ka as a,Na as o,Or as s,Pa as c,at as l,it as u,n as d,qa as f,r as p}from"./iframe-DGtyr4px.js";import{J as m,_ as h,d as g,n as _,o as v,r as y,u as b}from"./blocks-BC8A_08h.js";import{_ as x,o as S,p as C,s as w,t as T}from"./components-DFYIVurm.js";import{n as E,t as D}from"./SubcomponentsSection-B_Fcxgn5.js";import{Default as O,WithCustomTabs as k,n as A,t as j}from"./ViewSettingsDialog.stories-Z3ZZuKb0.js";function M(e){let n={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...m(),...e.components};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(g,{of:j}),`
`,(0,P.jsx)(w,{of:j,since:`0.20.0`}),`
`,(0,P.jsx)(`br`,{}),`
`,(0,P.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,P.jsx)(y,{of:O}),`
`,(0,P.jsx)(n.h2,{id:`with-custom-tabs`,children:`With Custom Tabs`}),`
`,(0,P.jsx)(y,{of:k}),`
`,(0,P.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,P.jsx)(C,{of:O}),`
`,(0,P.jsx)(n.h2,{id:`opening-viewsettingsdialog`,children:`Opening ViewSettingsDialog`}),`
`,(0,P.jsxs)(n.p,{children:[`You can open and close the `,(0,P.jsx)(n.code,{children:`ViewSettingsDialog`}),` component in a declarative way using the `,(0,P.jsx)(n.code,{children:`open`}),` prop.`]}),`
`,(0,P.jsx)(n.pre,{children:(0,P.jsx)(n.code,{className:`language-jsx`,children:`const ViewSettingsDialogComponent = () => {
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
`,(0,P.jsx)(n.h2,{id:`sortitem`,children:`SortItem`}),`
`,(0,P.jsx)(v,{of:t}),`
`,(0,P.jsx)(_,{exclude:d,of:t}),`
`,(0,P.jsx)(n.h2,{id:`filteritem`,children:`FilterItem`}),`
`,(0,P.jsx)(v,{of:f}),`
`,(0,P.jsx)(_,{exclude:d,of:f}),`
`,(0,P.jsx)(n.h2,{id:`filteritemoption`,children:`FilterItemOption`}),`
`,(0,P.jsx)(v,{of:r}),`
`,(0,P.jsx)(_,{exclude:d,of:r}),`
`,(0,P.jsx)(n.h2,{id:`groupitem`,children:`GroupItem`}),`
`,(0,P.jsx)(n.p,{children:(0,P.jsx)(n.strong,{children:`Since v2.15.0`})}),`
`,(0,P.jsx)(v,{of:o}),`
`,(0,P.jsx)(_,{exclude:d,of:o}),`
`,(0,P.jsx)(n.h2,{id:`viewsettingsdialogcustomtab`,children:`ViewSettingsDialogCustomTab`}),`
`,(0,P.jsx)(n.p,{children:(0,P.jsx)(n.strong,{children:`Since v2.22.0`})}),`
`,(0,P.jsx)(v,{of:u}),`
`,(0,P.jsx)(_,{exclude:d,of:u}),`
`,(0,P.jsx)(S,{})]})}function N(e={}){let{wrapper:t}={...m(),...e.components};return t?(0,P.jsx)(t,{...e,children:(0,P.jsx)(M,{...e})}):M(e)}var P;e((()=>{P=n(),x(),T(),E(),h(),i(),a(),s(),c(),l(),A(),p()}))();export{N as default};