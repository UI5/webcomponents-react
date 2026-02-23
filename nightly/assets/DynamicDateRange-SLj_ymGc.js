import{j as e}from"./iframe-COnm-5Wq.js";import{useMDXComponents as s}from"./index-BScb0EKa.js";import{M as m,C as o}from"./blocks-DdnCkDeP.js";import"./Tag-B6PukD9x.js";import"./index-DuYLDSkg.js";import{C as l}from"./ControlsWithNote-CLwYkghc.js";import{D as p}from"./DocsHeader-CMx88To0.js";import{F as d}from"./CommandsAndQueries-fIm6tI_s.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-56S88Q9C.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B-WRmTFj.js";import"./sys-enter-2-CoP1Serd.js";import"./alert-CyV5UnQC.js";import"./index-CEwTdt5x.js";import"./index-nBIeIwBJ.js";import"./Link-HYZaoUUQ.js";import"./copy-CwG4PXtS.js";import"./copy-qxwrkOPO.js";import"./GitHub-Mark-CW0QoAHo.js";import"./TableOfContent-CgktCJnI.js";import"./index-Be7TM_X2.js";import"./index-P97YIdW0.js";import"./index-B7Tpi00A.js";import"./index-AzkmjRNO.js";import"./index-D0jCTq5s.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BgIs3PmD.js";import"./addCustomCSSWithScoping-6qkiGAQG.js";import"./Gregorian-DMcc3nqO.js";import"./getCachedLocaleDataInstance-MN0sJYgd.js";import"./query-CzSBusdE.js";import"./Input-IFtsbt_3.js";import"./ResponsivePopoverCommon.css-CcP_WrIC.js";import"./ValueStateMessage.css-BFPsrOD8.js";import"./Suggestions.css-DD-tyscS.js";import"./appointment-2-DsFgoeHU.js";import"./ListItemStandard-BhUgq0GU.js";import"./slim-arrow-left-CY8P-Gx3.js";import"./Calendar-XUlPCmpo.js";import"./InvisibleMessage-B1Y0A4_S.js";import"./index-Du1BrkM7.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
