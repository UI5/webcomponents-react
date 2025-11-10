import{j as e}from"./iframe-DwaN3YOb.js";import{useMDXComponents as s}from"./index-DJkPMHl0.js";import{M as m,C as o}from"./blocks-VOPJhWRb.js";import"./Tag-CvvDTrwW.js";import"./index-CeIuBzgz.js";import{C as l}from"./ControlsWithNote-D9Mkz8kQ.js";import{D as p}from"./DocsHeader-DxQVAhbX.js";import{F as d}from"./CommandsAndQueries-celHgEKj.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DhjsTYRw.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DlBGosYj.js";import"./sys-enter-2-D6KHkFFC.js";import"./alert-CbpKaM9g.js";import"./index-DTu_z_3g.js";import"./index-CUaYuXp6.js";import"./Link-DCuWG7Zr.js";import"./copy-BenzFaGk.js";import"./copy-CKG1fqk8.js";import"./GitHub-Mark-DLw5nuH0.js";import"./TableOfContent-CSJmcthz.js";import"./index-CVTJV5Os.js";import"./index-DjYkOeBC.js";import"./index-C3ayLo5Y.js";import"./index-Bi8h6EAq.js";import"./index-D4NPnlzD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-pPwV4WuA.js";import"./addCustomCSSWithScoping-CDiHCMLw.js";import"./Gregorian-BOUgtRbn.js";import"./query-CzSBusdE.js";import"./Input-CLIZhDum.js";import"./ResponsivePopoverCommon.css-CJC70dmu.js";import"./ValueStateMessage.css-DJT3AHT7.js";import"./Suggestions.css-CeDH46KQ.js";import"./appointment-2-pQ8Q3LlB.js";import"./ListItemStandard-C2rgfoOK.js";import"./slim-arrow-left-CBm8HomQ.js";import"./Calendar-CXKuLZ5f.js";import"./InvisibleMessage-C38-tOeF.js";import"./index-KwF5pWQ5.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
