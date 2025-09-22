import{j as e}from"./iframe-DpsLP052.js";import{useMDXComponents as s}from"./index-_rtImS1W.js";import{M as m,C as o}from"./blocks-PRfqR2eX.js";import"./Tag-C7F6-79_.js";import"./index-BFgF6Hw1.js";import{C as l}from"./ControlsWithNote-BB6ixV-z.js";import{D as p}from"./DocsHeader-DmvPzofP.js";import{F as d}from"./CommandsAndQueries-B3V0wcrs.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CT7Kz41k.js";import"./preload-helper-PPVm8Dsz.js";import"./information-NX8J3kcU.js";import"./sys-enter-2-DlH7FC2F.js";import"./alert-BDCJXtoD.js";import"./index-BB8Wt2y3.js";import"./index-Cb94JCFH.js";import"./Link-lhnFzeWI.js";import"./copy-BNMQiwjZ.js";import"./copy-LcJtQKoV.js";import"./GitHub-Mark-CKuNC7Db.js";import"./TableOfContent-zs7QCM0s.js";import"./index-DfDXcGgq.js";import"./index-82Uo0cXy.js";import"./addCustomCSSWithScoping-3Nlci0j7.js";import"./index-DCyO76rI.js";import"./index-BfX04KMA.js";import"./index-DZ1ovLuc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D03GatZl.js";import"./Gregorian-BVE9F4Hc.js";import"./query-CzSBusdE.js";import"./Input-CWGfSp5U.js";import"./ResponsivePopoverCommon.css-CLt9oG7E.js";import"./ValueStateMessage.css-D6BpVT04.js";import"./Suggestions.css-Bv-BnXKd.js";import"./appointment-2-DwPKgZKZ.js";import"./ListItemStandard-Br3a0ITv.js";import"./slim-arrow-left-C0NQF6FC.js";import"./Calendar-4_0HHLpx.js";import"./InvisibleMessage-5ZJM9qmO.js";import"./index-yG3MGDtB.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
