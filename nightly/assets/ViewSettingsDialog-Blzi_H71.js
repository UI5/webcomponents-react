import{j as t,e as n}from"./iframe-D3k-2Qmx.js";import{useMDXComponents as x}from"./index-BSBCExsS.js";import{M as d,C as h,a as j,D as i,A as r}from"./blocks-bv8Dsnai.js";import"./Tag-9PM7-eum.js";import"./index-By3VOOwb.js";import{C as f}from"./ControlsWithNote-Q6ZOBFdr.js";import{D as S}from"./DocsHeader-cryOFXwi.js";import{F as u}from"./CommandsAndQueries-DsxWaHqI.js";import{S as D}from"./SubcomponentsSection-BVy4lpQe.js";import{C as s,D as m,S as p,F as a,a as c}from"./ViewSettingsDialog.stories-BLLaLzy-.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bs4ke0_q.js";import"./sys-enter-2-C1RuQ14F.js";import"./alert-CgXiLrEU.js";import"./index-aLtq1xU9.js";import"./index-CU7B0Jzs.js";import"./Link-CTDi8zx_.js";import"./copy-BIO46Laf.js";import"./copy-Ba7LzWJS.js";import"./GitHub-Mark-D7iv6mYV.js";import"./TableOfContent-HbhTBcUN.js";import"./index-B4561E-8.js";import"./index-7likbAae.js";import"./index-CcT0HfRf.js";import"./index-ne93MLaG.js";import"./index-DsyKOjMu.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CVKdFd1t.js";import"./addCustomCSSWithScoping-BuaXJWbP.js";import"./query-CzSBusdE.js";import"./InvisibleMessage-DVDXe7QT.js";import"./sort-D0Lj3yeq.js";import"./filter-D2gwwH7C.js";import"./i18n-defaults-BS8OTJAB.js";import"./SegmentedButton-hBWk1uUq.js";import"./ListItemStandard-CIk7Var7.js";import"./parameters-bundle.css-MDhRcvbE.js";function l(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...x(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:s}),`
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
