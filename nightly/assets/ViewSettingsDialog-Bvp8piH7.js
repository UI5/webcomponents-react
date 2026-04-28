import{n as e}from"./chunk-jRWAZmH_.js";import{Ca as t,Cr as n,Fa as r,Gm as i,Ia as a,La as o,Ra as s,Sr as c,n as l,r as u,wa as d}from"./iframe-CIxr1oGB.js";import{r as f}from"./react-SG0niN1o.js";import{_ as p,o as m,p as h,s as g,t as _}from"./components-BNEF2O9g.js";import{_ as v,d as y,n as b,o as x,r as S,u as C}from"./blocks-Dd0jPISe.js";import{n as w,t as T}from"./SubcomponentsSection-DYUGiO1B.js";import{Default as E,n as D,t as O}from"./ViewSettingsDialog.stories-ny41lgCj.js";function k(e){let n={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...f(),...e.components};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(y,{of:O}),`
`,(0,j.jsx)(g,{of:O,since:`0.20.0`}),`
`,(0,j.jsx)(`br`,{}),`
`,(0,j.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,j.jsx)(S,{of:E}),`
`,(0,j.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,j.jsx)(h,{of:E}),`
`,(0,j.jsx)(n.h2,{id:`opening-viewsettingsdialog`,children:`Opening ViewSettingsDialog`}),`
`,(0,j.jsxs)(n.p,{children:[`You can open and close the `,(0,j.jsx)(n.code,{children:`ViewSettingsDialog`}),` component in a declarative way using the `,(0,j.jsx)(n.code,{children:`open`}),` prop.`]}),`
`,(0,j.jsx)(n.pre,{children:(0,j.jsx)(n.code,{className:`language-jsx`,children:`const ViewSettingsDialogComponent = () => {
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
`,(0,j.jsx)(n.h2,{id:`sortitem`,children:`SortItem`}),`
`,(0,j.jsx)(x,{of:c}),`
`,(0,j.jsx)(b,{exclude:l,of:c}),`
`,(0,j.jsx)(n.h2,{id:`filteritem`,children:`FilterItem`}),`
`,(0,j.jsx)(x,{of:o}),`
`,(0,j.jsx)(b,{exclude:l,of:o}),`
`,(0,j.jsx)(n.h2,{id:`filteritemoption`,children:`FilterItemOption`}),`
`,(0,j.jsx)(x,{of:r}),`
`,(0,j.jsx)(b,{exclude:l,of:r}),`
`,(0,j.jsx)(n.h2,{id:`groupitem`,children:`GroupItem`}),`
`,(0,j.jsx)(n.p,{children:(0,j.jsx)(n.strong,{children:`Since v2.15.0`})}),`
`,(0,j.jsx)(x,{of:t}),`
`,(0,j.jsx)(b,{exclude:l,of:t}),`
`,(0,j.jsx)(m,{})]})}function A(e={}){let{wrapper:t}={...f(),...e.components};return t?(0,j.jsx)(t,{...e,children:(0,j.jsx)(k,{...e})}):k(e)}var j;e((()=>{j=i(),p(),_(),w(),v(),s(),a(),n(),d(),D(),u()}))();export{A as default};