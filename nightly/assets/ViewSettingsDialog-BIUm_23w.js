import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-CeCnFQbk.js";import{c as n,d as r,f as i,l as a,m as o,n as s,p as c,s as l,t as u,u as d}from"./ViewSettingsDialogCustomTab-Cn50W35k.js";import{n as f,r as p}from"./iframe-mvdSW5yP.js";import{r as m}from"./react-CQ3ONXOp.js";import{_ as h,o as g,p as _,s as v,t as y}from"./components-CXun0vpw.js";import{_ as b,d as x,n as S,o as C,r as w,u as T}from"./blocks-CmQKNlJd.js";import{n as E,t as D}from"./SubcomponentsSection-CWGLK7BZ.js";import{Default as O,WithCustomTabs as k,n as A,t as j}from"./ViewSettingsDialog.stories-BJJpirld.js";function M(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...m(),...e.components};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(x,{of:j}),`
`,(0,P.jsx)(v,{of:j,since:`0.20.0`}),`
`,(0,P.jsx)(`br`,{}),`
`,(0,P.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,P.jsx)(w,{of:O}),`
`,(0,P.jsx)(t.h2,{id:`with-custom-tabs`,children:`With Custom Tabs`}),`
`,(0,P.jsx)(w,{of:k}),`
`,(0,P.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,P.jsx)(_,{of:O}),`
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
`,(0,P.jsx)(T,{children:D}),`
`,(0,P.jsx)(t.h2,{id:`sortitem`,children:`SortItem`}),`
`,(0,P.jsx)(C,{of:l}),`
`,(0,P.jsx)(S,{exclude:f,of:l}),`
`,(0,P.jsx)(t.h2,{id:`filteritem`,children:`FilterItem`}),`
`,(0,P.jsx)(C,{of:c}),`
`,(0,P.jsx)(S,{exclude:f,of:c}),`
`,(0,P.jsx)(t.h2,{id:`filteritemoption`,children:`FilterItemOption`}),`
`,(0,P.jsx)(C,{of:r}),`
`,(0,P.jsx)(S,{exclude:f,of:r}),`
`,(0,P.jsx)(t.h2,{id:`groupitem`,children:`GroupItem`}),`
`,(0,P.jsx)(t.p,{children:(0,P.jsx)(t.strong,{children:`Since v2.15.0`})}),`
`,(0,P.jsx)(C,{of:a}),`
`,(0,P.jsx)(S,{exclude:f,of:a}),`
`,(0,P.jsx)(t.h2,{id:`viewsettingsdialogcustomtab`,children:`ViewSettingsDialogCustomTab`}),`
`,(0,P.jsx)(t.p,{children:(0,P.jsx)(t.strong,{children:`Since v2.22.0`})}),`
`,(0,P.jsx)(C,{of:u}),`
`,(0,P.jsx)(S,{exclude:f,of:u}),`
`,(0,P.jsx)(g,{})]})}function N(e={}){let{wrapper:t}={...m(),...e.components};return t?(0,P.jsx)(t,{...e,children:(0,P.jsx)(M,{...e})}):M(e)}var P;e((()=>{P=t(),h(),y(),E(),b(),o(),i(),n(),d(),s(),A(),p()}))();export{N as default};