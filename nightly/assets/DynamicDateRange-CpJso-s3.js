import{j as e}from"./iframe-D-TNtC6A.js";import{useMDXComponents as s}from"./index-DDfPSZgy.js";import{M as m,C as o}from"./blocks-RldXLLlr.js";import"./Tag-CVmCoWT_.js";import"./index-PDZqoB_N.js";import{C as p}from"./ControlsWithNote-DSxfGZl9.js";import{D as l}from"./DocsHeader-CUOKLgFp.js";import{F as d}from"./Footer-DhOHIb5E.js";import"./CommandsAndQueries-CCy8Y-No.js";import"./PageNotFound-CRTwOHot.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CbvwIWZJ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DHrVSqd8.js";import"./sys-enter-2-B-IKKoin.js";import"./alert-COQE9Wii.js";import"./index-dgee814-.js";import"./index-C4n54s66.js";import"./Link-BGCjF1qN.js";import"./copy-C4dBWRao.js";import"./copy-BJeubdCo.js";import"./GitHub-Mark-RhUI6Vhf.js";import"./TableOfContent-DEnJajz9.js";import"./index-dI-i4srq.js";import"./index-DA9C_9_K.js";import"./index-C2w-vlt1.js";import"./index-BDllvg-C.js";import"./index-DbrfUFZo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CV5eSmfw.js";import"./addCustomCSSWithScoping-5_2YlXdt.js";import"./Illustrations-MW4Ztj5J.js";import"./i18n-defaults-CFWtSmu6.js";import"./Gregorian-BQA6xk9b.js";import"./FormatUtils-C_JZOcpN.js";import"./query-CzSBusdE.js";import"./Input-BXBWRRsA.js";import"./ResponsivePopoverCommon.css-BXn4_Wc7.js";import"./ValueStateMessage.css-B4_y8RjA.js";import"./Suggestions.css-hnx4n1TH.js";import"./appointment-2-CWJBvj0v.js";import"./ListItemStandard-DuzTgsRf.js";import"./slim-arrow-left-T5YbGK6d.js";import"./Calendar-CNjZuctb.js";import"./InvisibleMessage-BWPPhSeN.js";import"./index-BLX5GUEm.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
`,e.jsx(l,{of:r}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(p,{of:a}),`
`,e.jsx(t.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(t.h3,{id:"value-change",children:"Value Change"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(t.h4,{id:"code",children:"Code"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`function DynamicDateRangeComponent() {
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
`,e.jsx(d,{})]})}function re(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{re as default};
