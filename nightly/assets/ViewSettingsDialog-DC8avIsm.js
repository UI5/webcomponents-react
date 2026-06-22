import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{c as n,d as r,f as i,l as a,m as o,n as s,p as c,s as l,t as u,u as d}from"./ViewSettingsDialogCustomTab-BlFn17h1.js";import{n as f,r as p}from"./iframe-BCsGPyEy.js";import{A as m,_ as h,d as g,n as _,o as v,r as y,u as b}from"./blocks-Bi7Hvh-J.js";import{E as x,b as S,f as C,t as w,u as T}from"./components-SjvSbESx.js";import{n as E,t as D}from"./SubcomponentsSection-Da9yr5rF.js";import{Default as O,WithCustomTabs as k,n as A,t as j}from"./ViewSettingsDialog.stories-CwpenSI0.js";function M(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...m(),...e.components};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(g,{of:j}),`
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
`,(0,P.jsx)(v,{of:l}),`
`,(0,P.jsx)(_,{exclude:f,of:l}),`
`,(0,P.jsx)(t.h2,{id:`filteritem`,children:`FilterItem`}),`
`,(0,P.jsx)(v,{of:c}),`
`,(0,P.jsx)(_,{exclude:f,of:c}),`
`,(0,P.jsx)(t.h2,{id:`filteritemoption`,children:`FilterItemOption`}),`
`,(0,P.jsx)(v,{of:r}),`
`,(0,P.jsx)(_,{exclude:f,of:r}),`
`,(0,P.jsx)(t.h2,{id:`groupitem`,children:`GroupItem`}),`
`,(0,P.jsx)(t.p,{children:(0,P.jsx)(t.strong,{children:`Since v2.15.0`})}),`
`,(0,P.jsx)(v,{of:a}),`
`,(0,P.jsx)(_,{exclude:f,of:a}),`
`,(0,P.jsx)(t.h2,{id:`viewsettingsdialogcustomtab`,children:`ViewSettingsDialogCustomTab`}),`
`,(0,P.jsx)(t.p,{children:(0,P.jsx)(t.strong,{children:`Since v2.22.0`})}),`
`,(0,P.jsx)(v,{of:u}),`
`,(0,P.jsx)(_,{exclude:f,of:u}),`
`,(0,P.jsx)(T,{})]})}function N(e={}){let{wrapper:t}={...m(),...e.components};return t?(0,P.jsx)(t,{...e,children:(0,P.jsx)(M,{...e})}):M(e)}var P;e((()=>{P=t(),x(),w(),E(),h(),o(),i(),n(),d(),s(),A(),p()}))();export{N as default};