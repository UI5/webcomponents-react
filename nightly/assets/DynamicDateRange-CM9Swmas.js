import{j as e}from"./iframe-RmeQ8XGC.js";import{useMDXComponents as s}from"./index-kR0XEGhk.js";import{M as m,C as o}from"./blocks-DaxiJjGb.js";import"./Tag-SV0H5ODo.js";import"./index-1jGrAlxH.js";import{C as l}from"./ControlsWithNote-DR8yiqR3.js";import{D as p}from"./DocsHeader-BKDiKraC.js";import{F as d}from"./CommandsAndQueries-C1TIWg_l.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-M9uu7CG9.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BGE1sBpB.js";import"./sys-enter-2-CFWWj7rX.js";import"./alert-DOCQy2rj.js";import"./index-Dn-It_jb.js";import"./index-Dg9UiDQJ.js";import"./Link-DiD1re6X.js";import"./copy-8JrxNrui.js";import"./copy-Bxjpqlrz.js";import"./GitHub-Mark-CV1P4XZF.js";import"./TableOfContent-BD56OkoI.js";import"./index-BIaOPhno.js";import"./index-CaXdH-JM.js";import"./index-P4hNb3E_.js";import"./index-BzAkCwZQ.js";import"./index-ICvStq6z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BCSTig2E.js";import"./addCustomCSSWithScoping-D6LA06yL.js";import"./Gregorian-CcExuJn4.js";import"./query-CzSBusdE.js";import"./Input-C0RQAQ_K.js";import"./ResponsivePopoverCommon.css-Bb2CDDwj.js";import"./ValueStateMessage.css-A-AQ78Le.js";import"./Suggestions.css-DQpTb0pt.js";import"./appointment-2-DUzKYfUB.js";import"./ListItemStandard-ZLNiFs4r.js";import"./slim-arrow-left-Dft_WWw6.js";import"./Calendar-CQSIPhT2.js";import"./InvisibleMessage-CAjaGHoP.js";import"./index-FUSiAWga.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
`,e.jsx(p,{of:r}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(n.h3,{id:"value-change",children:"Value Change"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(n.h4,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function DynamicDateRangeComponent() {
  const [selValue, setSelValue] = useState("");
  const [convertedDates, setConvertedDates] = useState("");
  return (
    <>
      <DynamicDateRange
        onChange={(e) => {
          const selectedValue = e.detail.value;
          setSelValue(JSON.stringify(selectedValue));

          const dates = e.currentTarget.toDates(selectedValue);
          setConvertedDates(
            dates.map((date) => date.toLocaleString()).join(" - "),
          );
        }}
      />
      <hr />
      <FlexBox alignItems="Center" gap="0.5rem">
        <Label for="sel-val" showColon>
          Selected Value
        </Label>
        <Input
          id="sel-val"
          readonly
          value={selValue}
          style={{ width: "100%", maxWidth: "400px" }}
        />
      </FlexBox>
      <FlexBox alignItems="Center" gap="0.5rem">
        <Label for="conv-val" showColon>
          Converted Dates
        </Label>
        <Input
          id="conv-val"
          readonly
          value={convertedDates}
          style={{ width: "100%", maxWidth: "400px" }}
        />
      </FlexBox>
    </>
  );
}
`})}),`
`,e.jsx(d,{})]})}function $(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{$ as default};
