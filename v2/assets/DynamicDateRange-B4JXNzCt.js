import{j as e}from"./iframe-Dt3EMGkV.js";import{useMDXComponents as s}from"./index-B20WHrxF.js";import{M as m,C as o}from"./blocks-BHc609zj.js";import"./Tag-BlFr4TrL.js";import"./index-4o5lIxTZ.js";import{C as l}from"./ControlsWithNote-C8ZAtGvJ.js";import{D as p}from"./DocsHeader-BFCSvIjI.js";import{F as d}from"./CommandsAndQueries-B8G4x6Z0.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CFO08spi.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CdIvcuNT.js";import"./sys-enter-2-DUO5Ca52.js";import"./alert-AiSO8uTO.js";import"./index-BTxuEF3n.js";import"./index-B13Eko7E.js";import"./Link-BFnbyO9N.js";import"./copy-CKK4O4gq.js";import"./copy-CTtd4S6z.js";import"./GitHub-Mark-lQb1Kumq.js";import"./TableOfContent-BrPxZHd0.js";import"./index-DwsDjCru.js";import"./index-DYPFLkL0.js";import"./index-3ZVLHlpm.js";import"./index-ChSomlCw.js";import"./index-CGnaTP2m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DIflbpx1.js";import"./addCustomCSSWithScoping--L6xjApc.js";import"./Gregorian-D2a5xYBp.js";import"./query-CzSBusdE.js";import"./Input-B3RJG3gm.js";import"./ResponsivePopoverCommon.css-aexR0yTU.js";import"./ValueStateMessage.css-yur_ejCi.js";import"./Suggestions.css-CLQcfKgH.js";import"./appointment-2-B9jtFPSc.js";import"./ListItemStandard-Dag2Pm4v.js";import"./slim-arrow-left-Vfmtv-BG.js";import"./Calendar-KCLqM4xL.js";import"./InvisibleMessage-IeyuxUiP.js";import"./index-D_NFJJg0.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
