import{j as e}from"./iframe-DM9V3iUD.js";import{useMDXComponents as s}from"./index-BQ6e0XMP.js";import{M as m,C as o}from"./blocks-DPjpReUC.js";import"./Tag-CDZyEpMs.js";import"./index-BrIfMidb.js";import{C as l}from"./ControlsWithNote-BixiXI7D.js";import{D as p}from"./DocsHeader-B7CLdpe5.js";import{F as d}from"./CommandsAndQueries-DLgIXMfv.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-Dankzf0f.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CYZk7_Tc.js";import"./sys-enter-2-CIB1w1Kt.js";import"./alert-bTHWJErv.js";import"./index-HLIjrNCW.js";import"./index-3ho0Fy_x.js";import"./Link-CqfS--3L.js";import"./copy-CzwRG-tI.js";import"./copy-QNTFDBhh.js";import"./GitHub-Mark-9mFh2ESO.js";import"./TableOfContent-BCMbnTpd.js";import"./index-C_fRRkTw.js";import"./index-CG9Hqh1R.js";import"./index-D-UVDN6M.js";import"./index-DQbG0AXp.js";import"./index-Crs5q-DX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CWqaDePq.js";import"./addCustomCSSWithScoping-UQbkgHWD.js";import"./Gregorian-52O1HeU1.js";import"./query-CzSBusdE.js";import"./Input-Cf96M2D8.js";import"./ResponsivePopoverCommon.css-Ct9-fwKq.js";import"./ValueStateMessage.css-BZpk9Qij.js";import"./Suggestions.css-CJjXKwO3.js";import"./appointment-2-B0AgOPxK.js";import"./ListItemStandard-DoSQq3Vg.js";import"./slim-arrow-left-1H9vPHNN.js";import"./Calendar-CZ6Vt6NI.js";import"./InvisibleMessage-CuXKyopF.js";import"./index-BURWi97k.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
