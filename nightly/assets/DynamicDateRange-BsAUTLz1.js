import{j as e}from"./iframe-CCKRZdbF.js";import{useMDXComponents as s}from"./index-BW1v5Z1e.js";import{M as m,C as o}from"./blocks-DizR4yrp.js";import"./Tag-D_1GVpYe.js";import"./index-BXous6Vg.js";import{C as l}from"./ControlsWithNote-DsN0lGLb.js";import{D as p}from"./DocsHeader-B4kkYud_.js";import{F as d}from"./CommandsAndQueries-D1vMTwJ_.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BtpX5sX7.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DXZj2K0P.js";import"./sys-enter-2-_UoM3OrC.js";import"./alert-BYsKIWrN.js";import"./index-DgC4fDU8.js";import"./index-C4ynR4jc.js";import"./Link-DVIX6xLA.js";import"./copy-Bb6xLZz3.js";import"./copy-DCYvEQ2A.js";import"./GitHub-Mark-BgmPkKgT.js";import"./TableOfContent-DhuQYpKP.js";import"./index-ppkYs0Pw.js";import"./index-TT9wAavy.js";import"./index-Xy0A6wMV.js";import"./index-BMpz4bfD.js";import"./index-byvg7TJC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Di3RALWU.js";import"./addCustomCSSWithScoping-BCWPiCrh.js";import"./Gregorian-CCi-1Kdo.js";import"./query-CzSBusdE.js";import"./Input-C5oVUkIB.js";import"./ResponsivePopoverCommon.css-Bikw0MiR.js";import"./ValueStateMessage.css-BuporDJE.js";import"./Suggestions.css-0ImH9Wru.js";import"./appointment-2-BcjXfd69.js";import"./ListItemStandard-DBjVOyrh.js";import"./slim-arrow-left-PO29y6My.js";import"./Calendar-B80Qgnxd.js";import"./InvisibleMessage-4YLx3Nor.js";import"./index-Y-BADZTS.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
