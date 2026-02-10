import{j as e}from"./iframe-DmoM9f-3.js";import{useMDXComponents as s}from"./index-B20arXE0.js";import{M as m,C as o}from"./blocks-BpV1oLoN.js";import"./Tag-C5kFbKbl.js";import"./index-BLNEyCKE.js";import{C as l}from"./ControlsWithNote-r_kaA0NY.js";import{D as p}from"./DocsHeader-a_YCyG36.js";import{F as d}from"./CommandsAndQueries-D46yw8vq.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CpX8qfsL.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DFrNJXON.js";import"./sys-enter-2-97edjggS.js";import"./alert-DFs18VX5.js";import"./index-D10NIdcs.js";import"./index-CwkZexmy.js";import"./Link-CJAlKdXH.js";import"./copy-47AFjMvF.js";import"./copy-CLLjPrKq.js";import"./GitHub-Mark-DhrdlfJG.js";import"./TableOfContent-DpBIb8tu.js";import"./index-BsxZ4Cqo.js";import"./index-C9RFs9lp.js";import"./index-BS6TqzQW.js";import"./index-DEJMdS-B.js";import"./index--5fdhH7F.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BvwMzl7A.js";import"./addCustomCSSWithScoping-CrnVfoLT.js";import"./Gregorian-LJmipx1T.js";import"./getCachedLocaleDataInstance-DxCRCQja.js";import"./query-CzSBusdE.js";import"./Input-YzFTUt5T.js";import"./ResponsivePopoverCommon.css-CYbIQSV_.js";import"./ValueStateMessage.css-Bt2Hz2Bm.js";import"./Suggestions.css-CF_t5b_V.js";import"./appointment-2-sjUlPf_F.js";import"./ListItemStandard-BJDVbUng.js";import"./slim-arrow-left-Bvhj6GcU.js";import"./Calendar-CwwngNMW.js";import"./InvisibleMessage-DxxG7hrg.js";import"./index-CfmXpjSG.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
