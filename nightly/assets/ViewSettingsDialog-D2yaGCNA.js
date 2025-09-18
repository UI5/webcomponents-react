import{j as t,e as n}from"./iframe-DTHPT7iA.js";import{useMDXComponents as x}from"./index-74UlZZJj.js";import{M as d,C as h,a as j,D as i,A as r}from"./blocks-BEm3tjb6.js";import"./Tag-CJADm4_M.js";import"./index-C3HgU9VG.js";import{C as f}from"./ControlsWithNote-BGcGZ2Tw.js";import{D as S}from"./DocsHeader-DrsGZt_2.js";import{F as u}from"./CommandsAndQueries-BD3jeLaK.js";import{S as D}from"./SubcomponentsSection-BVy4lpQe.js";import{C as s,D as m,S as p,F as a,a as c}from"./ViewSettingsDialog.stories-CYvWJuIO.js";import"./preload-helper-D9Z9MdNV.js";import"./information-DoW4IMVD.js";import"./sys-enter-2-ByI7nkKd.js";import"./alert-COIhFOls.js";import"./index-t5gVEC_D.js";import"./index-C6-xBNa3.js";import"./Link-BbcZTKOL.js";import"./copy-B5eacD66.js";import"./copy-mCNoL2s6.js";import"./GitHub-Mark-BX4sI9ta.js";import"./TableOfContent-DcI8r7Mg.js";import"./index-DwOvcXXK.js";import"./index-Cj0CYz_p.js";import"./addCustomCSSWithScoping-DApCUjf-.js";import"./index-D_aw5Z2j.js";import"./index-dqQUzE09.js";import"./index-ig2sn1RW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BENd75qS.js";import"./query-CzSBusdE.js";import"./InvisibleMessage-CQmpcPbi.js";import"./sort-CkNGZFxL.js";import"./filter-CTlYESOp.js";import"./i18n-defaults-BS8OTJAB.js";import"./SegmentedButton-BqpTppJT.js";import"./ListItemStandard-CIUna04V.js";import"./parameters-bundle.css-MDhRcvbE.js";function l(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...x(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:s}),`
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
