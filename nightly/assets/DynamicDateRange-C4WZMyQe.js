import{j as e}from"./iframe-CNlfMRh7.js";import{useMDXComponents as s}from"./index-HXyduBEt.js";import{M as m,C as o}from"./blocks-Dntxnfj7.js";import"./Tag-CSkrKRNp.js";import"./index-CE5EvvTL.js";import{C as l}from"./ControlsWithNote-DiIYS2s0.js";import{D as p}from"./DocsHeader-DVo3393M.js";import{F as d}from"./CommandsAndQueries-DPIrOVa1.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-eOAH5mYX.js";import"./preload-helper-PPVm8Dsz.js";import"./information-A5dyTfTj.js";import"./sys-enter-2-Dq0W94t5.js";import"./alert-B1A4HH0Q.js";import"./index-B1BCaeBo.js";import"./index-HOJNtIkV.js";import"./Link-DJApgqFJ.js";import"./copy-BD8xVlU3.js";import"./copy-NJiLz1Ae.js";import"./GitHub-Mark-AYmqLjCo.js";import"./TableOfContent-Dze4y5yw.js";import"./index-Bfxe_3pA.js";import"./index-BsNAKev7.js";import"./index-CMp48S8l.js";import"./index-BZFP7GSJ.js";import"./index-BUkOiAQJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-UJ6G4FQA.js";import"./addCustomCSSWithScoping-0QMDzhQB.js";import"./Gregorian-rc5BiZRZ.js";import"./query-CzSBusdE.js";import"./Input-avR_XQYF.js";import"./ResponsivePopoverCommon.css-BShgZ2fu.js";import"./ValueStateMessage.css-DvxKbQOQ.js";import"./Suggestions.css-Dxb_YfCJ.js";import"./appointment-2-SHGXmzsz.js";import"./ListItemStandard-CN81KWn3.js";import"./slim-arrow-left-dMD26J2j.js";import"./Calendar-8JO1cRXc.js";import"./InvisibleMessage-vJ02izGr.js";import"./index-DMq0_oht.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
