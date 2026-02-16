import{j as e}from"./iframe-COmYM7FM.js";import{useMDXComponents as s}from"./index-nJK3ZT8W.js";import{M as m,C as o}from"./blocks-DAY1TuCU.js";import"./Tag-C7vo2194.js";import"./index-8dZG1YHw.js";import{C as l}from"./ControlsWithNote-D0uv15nF.js";import{D as p}from"./DocsHeader-CST8qEMS.js";import{F as d}from"./CommandsAndQueries-BOWLtTE6.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-B_mSaKZW.js";import"./preload-helper-PPVm8Dsz.js";import"./information-le6myuh6.js";import"./sys-enter-2-CL75I8bf.js";import"./alert-lhOUxaTm.js";import"./index-DFr8Hmr1.js";import"./index-YGBVCLbI.js";import"./Link-CcuckqWN.js";import"./copy-Dq2e23NG.js";import"./copy-CXZAgH3a.js";import"./GitHub-Mark-qFlD-nLv.js";import"./TableOfContent-tjnC9ti3.js";import"./index-Bf48pKls.js";import"./index-Baj766Uq.js";import"./index-C84ZyqAr.js";import"./index-WRRg6L2_.js";import"./index-CGzRflPR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CJJkccm1.js";import"./addCustomCSSWithScoping-CPOeZ7S_.js";import"./Gregorian-CBVUNrSe.js";import"./getCachedLocaleDataInstance-D6w5DYxV.js";import"./query-CzSBusdE.js";import"./Input-Bu6vC63z.js";import"./ResponsivePopoverCommon.css-C4KWqDDR.js";import"./ValueStateMessage.css-DI3W06n_.js";import"./Suggestions.css-CPV1YgiF.js";import"./appointment-2-6Kg5aE6C.js";import"./ListItemStandard-BflPf8Ge.js";import"./slim-arrow-left-Dk61mTAO.js";import"./Calendar-DbYIr84I.js";import"./InvisibleMessage-B-FhaSLI.js";import"./index-Duy0U0pN.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
