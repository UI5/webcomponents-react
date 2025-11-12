import{j as e}from"./iframe-DEgT_E8s.js";import{useMDXComponents as s}from"./index-BZRAiVGZ.js";import{M as m,C as o}from"./blocks-B_KstB4C.js";import"./Tag-DE605aSS.js";import"./index-YPzE27b5.js";import{C as l}from"./ControlsWithNote-D4xdDKZF.js";import{D as p}from"./DocsHeader-BG4I1a_v.js";import{F as d}from"./CommandsAndQueries-BnsxTdlD.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-mvHporV5.js";import"./preload-helper-PPVm8Dsz.js";import"./information-r8cEHEup.js";import"./sys-enter-2-ChDTDdJ5.js";import"./alert-Dx6xYju9.js";import"./index-BBLpbuxz.js";import"./index-Dzkg0-9t.js";import"./Link-z1epMX3F.js";import"./copy-BCKI97AT.js";import"./copy-CnDYhLIP.js";import"./GitHub-Mark-D1gyXFQM.js";import"./TableOfContent-BYZd9K0G.js";import"./index-q4TahdKC.js";import"./index-DdLyBjYX.js";import"./index-DuT1R6mu.js";import"./index-5Z9enrbF.js";import"./index-C1jXIPsp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C1yrXOFa.js";import"./addCustomCSSWithScoping-CGm4Cfs5.js";import"./Gregorian-DUOk9CwH.js";import"./query-CzSBusdE.js";import"./Input-CGH6t_eq.js";import"./ResponsivePopoverCommon.css-Dv84NKMT.js";import"./ValueStateMessage.css-CUqUPYSj.js";import"./Suggestions.css-KnKAVWRs.js";import"./appointment-2-nSXMWEf2.js";import"./ListItemStandard-FLiQ-oOI.js";import"./slim-arrow-left-Kmkh0Y_H.js";import"./Calendar-DT5_1c8N.js";import"./InvisibleMessage-DtVtDVKI.js";import"./index-B5tA4rVe.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
