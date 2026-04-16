import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-1ARNaUmP.js";import{F as n,P as r}from"./webComponents-C_rBiqMZ.js";import{a as i,c as a,l as o,o as s,s as c,u as l}from"./ViewSettingsDialog-C2q8Y1J8.js";import{n as u,r as d}from"./utils-D7PmBb4C.js";import{r as f}from"./react-BZibOG70.js";import{_ as p,o as m,p as h,s as g,t as _}from"./components-Da28yRWl.js";import{_ as v,d as y,n as b,o as x,r as S,u as C}from"./blocks-D9k7TVdi.js";import{n as w,t as T}from"./SubcomponentsSection-BZUidqqR.js";import{Default as E,n as D,t as O}from"./ViewSettingsDialog.stories-4gZkOMKK.js";function k(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...f(),...e.components};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(y,{of:O}),`
`,(0,j.jsx)(g,{of:O,since:`0.20.0`}),`
`,(0,j.jsx)(`br`,{}),`
`,(0,j.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,j.jsx)(S,{of:E}),`
`,(0,j.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,j.jsx)(h,{of:E}),`
`,(0,j.jsx)(t.h2,{id:`opening-viewsettingsdialog`,children:`Opening ViewSettingsDialog`}),`
`,(0,j.jsxs)(t.p,{children:[`You can open and close the `,(0,j.jsx)(t.code,{children:`ViewSettingsDialog`}),` component in a declarative way using the `,(0,j.jsx)(t.code,{children:`open`}),` prop.`]}),`
`,(0,j.jsx)(t.pre,{children:(0,j.jsx)(t.code,{className:`language-jsx`,children:`const ViewSettingsDialogComponent = () => {
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
`,(0,j.jsx)(C,{children:T}),`
`,(0,j.jsx)(t.h2,{id:`sortitem`,children:`SortItem`}),`
`,(0,j.jsx)(x,{of:i}),`
`,(0,j.jsx)(b,{exclude:u,of:i}),`
`,(0,j.jsx)(t.h2,{id:`filteritem`,children:`FilterItem`}),`
`,(0,j.jsx)(x,{of:o}),`
`,(0,j.jsx)(b,{exclude:u,of:o}),`
`,(0,j.jsx)(t.h2,{id:`filteritemoption`,children:`FilterItemOption`}),`
`,(0,j.jsx)(x,{of:c}),`
`,(0,j.jsx)(b,{exclude:u,of:c}),`
`,(0,j.jsx)(t.h2,{id:`groupitem`,children:`GroupItem`}),`
`,(0,j.jsx)(t.p,{children:(0,j.jsx)(t.strong,{children:`Since v2.15.0`})}),`
`,(0,j.jsx)(x,{of:r}),`
`,(0,j.jsx)(b,{exclude:u,of:r}),`
`,(0,j.jsx)(m,{})]})}function A(e={}){let{wrapper:t}={...f(),...e.components};return t?(0,j.jsx)(t,{...e,children:(0,j.jsx)(k,{...e})}):k(e)}var j;e((()=>{j=t(),p(),_(),w(),v(),l(),a(),s(),n(),D(),d()}))();export{A as default};