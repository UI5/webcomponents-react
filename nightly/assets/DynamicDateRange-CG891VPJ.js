import{j as e}from"./iframe-gbBUxptC.js";import{useMDXComponents as s}from"./index-BaGM4qgt.js";import{M as m,C as o}from"./blocks-BtAmmb_9.js";import"./Tag-DXmb03WA.js";import"./index-a6vq6nFR.js";import{C as l}from"./ControlsWithNote-fzSXxYPC.js";import{D as p}from"./DocsHeader-BiMMxbix.js";import{F as d}from"./CommandsAndQueries-BmjJVETk.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-h_6ZZy2t.js";import"./preload-helper-PPVm8Dsz.js";import"./information-RQmI2RmD.js";import"./sys-enter-2-BfzFGSW6.js";import"./alert-BAR71iQk.js";import"./index-DTWmKJf_.js";import"./index-FjtRLsYm.js";import"./Link-BqgTlNng.js";import"./copy-DVkPUjJ_.js";import"./copy-CmUJgJe8.js";import"./GitHub-Mark-DTnt1VPs.js";import"./TableOfContent-CTFQyASA.js";import"./index-CAL1VzDv.js";import"./index-C5e2Rf9k.js";import"./index-ClLX1AfH.js";import"./index-n6dTxbQI.js";import"./index-CHg7n_fg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cfhz7n7-.js";import"./addCustomCSSWithScoping-BVowAJ0u.js";import"./Gregorian-Y0_tHWvq.js";import"./getCachedLocaleDataInstance-QsWbpyum.js";import"./query-CzSBusdE.js";import"./Input-DpRW8R60.js";import"./ResponsivePopoverCommon.css-CB1aGVFH.js";import"./ValueStateMessage.css-0cpHNy9C.js";import"./Suggestions.css-CH_OcyZq.js";import"./appointment-2-Cw6tuDY8.js";import"./ListItemStandard-CwkyZiZH.js";import"./slim-arrow-left-BdY0Hc7b.js";import"./Calendar-CVPUnTqN.js";import"./InvisibleMessage-1DPtlwXM.js";import"./index-CbnIJMNo.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
