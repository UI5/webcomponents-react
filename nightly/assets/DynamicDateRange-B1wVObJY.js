import{j as e}from"./iframe-JQDqhQTc.js";import{useMDXComponents as s}from"./index-SjG54pW2.js";import{M as m,C as o}from"./blocks-DPmUjEjQ.js";import"./Tag-DGi-8g-u.js";import"./index-lJfxqfBt.js";import{C as l}from"./ControlsWithNote-gPJQaIcm.js";import{D as p}from"./DocsHeader-BrzdijUK.js";import{F as d}from"./CommandsAndQueries-Crv-3Mfa.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CFymuTxL.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DOgKPosF.js";import"./sys-enter-2-C0saRr3v.js";import"./alert-C_Y0d_GP.js";import"./index-BpgBwQjv.js";import"./index-CUZKwPNc.js";import"./Link-Dpu-eDDr.js";import"./copy-CgQ5C712.js";import"./copy-t9TmEwA0.js";import"./GitHub-Mark-ChPM-wav.js";import"./TableOfContent-CQNt4SGr.js";import"./index-DLqk7pLq.js";import"./index-BKiGQD-R.js";import"./index-BFgRiJXe.js";import"./index-DcWtp55E.js";import"./index-BIpZPYH3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B5_fArc3.js";import"./addCustomCSSWithScoping-c6XYl4zv.js";import"./Gregorian-Bzh1Wv0v.js";import"./getCachedLocaleDataInstance-CG7WjZMM.js";import"./query-CzSBusdE.js";import"./Input-DzNOpfWd.js";import"./ResponsivePopoverCommon.css-uDfhSOOV.js";import"./ValueStateMessage.css-D_eI0sN-.js";import"./Suggestions.css-CHR_q4Cp.js";import"./appointment-2-yaVMIROB.js";import"./ListItemStandard-DASuqUXG.js";import"./slim-arrow-left-B-vlLZu9.js";import"./Calendar-BMP4Ohvu.js";import"./InvisibleMessage-CFQZBAEm.js";import"./index-fI0mUgfo.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
