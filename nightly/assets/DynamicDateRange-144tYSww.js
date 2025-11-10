import{j as e}from"./iframe-DQwRYUbX.js";import{useMDXComponents as s}from"./index-vjXmNDkF.js";import{M as m,C as o}from"./blocks-1vj7sSP-.js";import"./Tag-Bdxh15UZ.js";import"./index-BpYg0Kr8.js";import{C as l}from"./ControlsWithNote-BGvoVuZj.js";import{D as p}from"./DocsHeader-D7gM7WDy.js";import{F as d}from"./CommandsAndQueries-R5zgQe7_.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-D8TgsJIP.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CU2Cyzgy.js";import"./sys-enter-2-BkaREG8L.js";import"./alert-BlLCWEro.js";import"./index-Brhb0SYT.js";import"./index-CKWavmbi.js";import"./Link-CbfnLrLH.js";import"./copy-F6aV49Rb.js";import"./copy-f1OrbY2r.js";import"./GitHub-Mark-CXL6PMAb.js";import"./TableOfContent-B_-p14at.js";import"./index-DKyjFioH.js";import"./index-BFkPs8ZC.js";import"./index-PC8Kunji.js";import"./index-DPLN1GXU.js";import"./index-CcZnr9i8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bm5JhsBg.js";import"./addCustomCSSWithScoping-B4GQYg_M.js";import"./Gregorian-BW3SZKus.js";import"./query-CzSBusdE.js";import"./Input-SpzJURTk.js";import"./ResponsivePopoverCommon.css-CkBrsDgT.js";import"./ValueStateMessage.css-PgRMx7qS.js";import"./Suggestions.css-CcojFhMW.js";import"./appointment-2-D_5RKHId.js";import"./ListItemStandard-Cgm9Qe--.js";import"./slim-arrow-left-3rIUsAuq.js";import"./Calendar-C26uZElJ.js";import"./InvisibleMessage-BxtAo5W7.js";import"./index-Cgy9ImwA.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
