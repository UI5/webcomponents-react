import{j as t,e as n}from"./iframe-CCKRZdbF.js";import{useMDXComponents as x}from"./index-BW1v5Z1e.js";import{M as d,C as h,a as j,D as i,A as r}from"./blocks-DizR4yrp.js";import"./Tag-D_1GVpYe.js";import"./index-BXous6Vg.js";import{C as f}from"./ControlsWithNote-DsN0lGLb.js";import{D as S}from"./DocsHeader-B4kkYud_.js";import{F as u}from"./CommandsAndQueries-D1vMTwJ_.js";import{S as D}from"./SubcomponentsSection-BVy4lpQe.js";import{C as s,D as m,S as p,F as a,a as c}from"./ViewSettingsDialog.stories-DVOUfV0W.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DXZj2K0P.js";import"./sys-enter-2-_UoM3OrC.js";import"./alert-BYsKIWrN.js";import"./index-DgC4fDU8.js";import"./index-C4ynR4jc.js";import"./Link-DVIX6xLA.js";import"./copy-Bb6xLZz3.js";import"./copy-DCYvEQ2A.js";import"./GitHub-Mark-BgmPkKgT.js";import"./TableOfContent-DhuQYpKP.js";import"./index-ppkYs0Pw.js";import"./index-TT9wAavy.js";import"./index-Xy0A6wMV.js";import"./index-BMpz4bfD.js";import"./index-byvg7TJC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Di3RALWU.js";import"./addCustomCSSWithScoping-BCWPiCrh.js";import"./query-CzSBusdE.js";import"./InvisibleMessage-4YLx3Nor.js";import"./sort-DN0o8GTS.js";import"./filter-4F45alAB.js";import"./i18n-defaults-BS8OTJAB.js";import"./SegmentedButton-tNr2gkyL.js";import"./ListItemStandard-DBjVOyrh.js";import"./parameters-bundle.css-MDhRcvbE.js";function l(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...x(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:s}),`
`,t.jsx(S,{of:s,since:"0.20.0"}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(h,{of:m}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(f,{of:m}),`
`,t.jsx(o.h2,{id:"opening-viewsettingsdialog",children:"Opening ViewSettingsDialog"}),`
`,t.jsxs(o.p,{children:["You can open and close the ",t.jsx(o.code,{children:"ViewSettingsDialog"})," component in a declarative way using the ",t.jsx(o.code,{children:"open"})," prop."]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const ViewSettingsDialogComponent = () => {
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
`,t.jsx(j,{children:D}),`
`,t.jsx(o.h2,{id:"sortitem",children:"SortItem"}),`
`,t.jsx(i,{of:p}),`
`,t.jsx(r,{exclude:n,of:p}),`
`,t.jsx(o.h2,{id:"filteritem",children:"FilterItem"}),`
`,t.jsx(i,{of:a}),`
`,t.jsx(r,{exclude:n,of:a}),`
`,t.jsx(o.h2,{id:"filteritemoption",children:"FilterItemOption"}),`
`,t.jsx(i,{of:c}),`
`,t.jsx(r,{exclude:n,of:c}),`
`,t.jsx(u,{})]})}function nt(e={}){const{wrapper:o}={...x(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(l,{...e})}):l(e)}export{nt as default};
