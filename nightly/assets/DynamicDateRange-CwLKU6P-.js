import{j as e}from"./iframe-T7Wqg8UQ.js";import{useMDXComponents as s}from"./index-B1_Kr1qi.js";import{M as m,C as o}from"./blocks-AtAGVbf3.js";import"./Tag-gMzT9-kJ.js";import"./index-1-SdBrMb.js";import{C as l}from"./ControlsWithNote-BqBu_Mq2.js";import{D as p}from"./DocsHeader-CrVecl48.js";import{F as d}from"./CommandsAndQueries-BErUSC1w.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DIgX3cnD.js";import"./preload-helper-PPVm8Dsz.js";import"./information-fYaYVBJG.js";import"./sys-enter-2-CqaPP6tK.js";import"./alert-DdeG0Okn.js";import"./index-OjQEK6Sv.js";import"./index-B0vEPx1d.js";import"./Link-CS0U2zW0.js";import"./copy-DIiyOBxc.js";import"./copy-D9NRoizO.js";import"./GitHub-Mark-Biv-_v1T.js";import"./TableOfContent-NE_Wj6NX.js";import"./index-Do-8N8-4.js";import"./index-CSyU4Rfq.js";import"./index-CuClVFCS.js";import"./index-Cpwr9m7H.js";import"./index-C36GduEZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ctd-T3Yg.js";import"./addCustomCSSWithScoping-SxSnbZxk.js";import"./Gregorian-DKOFYazB.js";import"./query-CzSBusdE.js";import"./Input-D7QMmGXc.js";import"./ResponsivePopoverCommon.css-BRMWd7_E.js";import"./ValueStateMessage.css-Cfl8bS23.js";import"./Suggestions.css-U--NnjnQ.js";import"./appointment-2-D7pgQs55.js";import"./ListItemStandard-4LZiCxap.js";import"./slim-arrow-left-CCjtyarL.js";import"./Calendar-hZx1Cq9l.js";import"./InvisibleMessage-DMA9x9s-.js";import"./index-BXctqxI6.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
