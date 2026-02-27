import{j as e}from"./iframe-DAxVciiO.js";import{useMDXComponents as s}from"./index-h_8BIj8E.js";import{M as m,C as o}from"./blocks-V6tY60BP.js";import"./Tag-CfpPKB5J.js";import"./index-Cl51mnxs.js";import{C as l}from"./ControlsWithNote-DOHOEzX8.js";import{D as p}from"./DocsHeader-C9iUY6-3.js";import{F as d}from"./CommandsAndQueries-DAf-gTsq.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BaRods0K.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BJmehL1Z.js";import"./sys-enter-2-CCej0FVR.js";import"./alert-DT2E8uxg.js";import"./index-x-HMM4OA.js";import"./index-CXz3G2II.js";import"./Link-CPXkUhXc.js";import"./copy-CusNMk6v.js";import"./copy-DS8F9wTV.js";import"./GitHub-Mark-C48nxFEF.js";import"./TableOfContent-CS4QbVvc.js";import"./index-DQeQ_3Br.js";import"./index-BTWHfyOb.js";import"./index-DtbiWkK2.js";import"./index-C2J6ydOt.js";import"./index-45VXzBs0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqjBRadn.js";import"./addCustomCSSWithScoping-B-5Zxa-U.js";import"./Gregorian-Q3k5Oc8x.js";import"./getCachedLocaleDataInstance-VCqErxvm.js";import"./query-CzSBusdE.js";import"./Input-BFNvfe1M.js";import"./ResponsivePopoverCommon.css-DUa--h-C.js";import"./ValueStateMessage.css-B-JXAMRh.js";import"./Suggestions.css-l1R1Q3Wi.js";import"./appointment-2-C4zytNX4.js";import"./ListItemStandard-DHZqKCWt.js";import"./slim-arrow-left-73M4yTHK.js";import"./Calendar-YRyvEk0a.js";import"./InvisibleMessage-CJvoI51j.js";import"./index-_vvkfygM.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
`,e.jsx(d,{})]})}function ee(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{ee as default};
