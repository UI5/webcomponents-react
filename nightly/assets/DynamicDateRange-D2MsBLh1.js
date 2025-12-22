import{j as e}from"./iframe-C4opeNuJ.js";import{useMDXComponents as s}from"./index-DlqCzQ5b.js";import{M as m,C as o}from"./blocks-BnM-0OnJ.js";import"./Tag-CUNQyer4.js";import"./index-Djkzc3Do.js";import{C as l}from"./ControlsWithNote-LjA8IyZm.js";import{D as p}from"./DocsHeader-C4jbJpbo.js";import{F as d}from"./CommandsAndQueries-C6QEnHzv.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-D9IMm9e_.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D9qzbrES.js";import"./sys-enter-2-OOuZrUt0.js";import"./alert-CJYb_vFX.js";import"./index-CFNq6guK.js";import"./index-B-UdOs74.js";import"./Link-DxcQOJp8.js";import"./copy-VLDSUZi6.js";import"./copy-DCgRf4_C.js";import"./GitHub-Mark-DUHXOOxz.js";import"./TableOfContent-CxLlyFVO.js";import"./index-BWSzAzRH.js";import"./index-Wmnu1H8C.js";import"./index-DTzFsIn0.js";import"./index-fsr9wgfs.js";import"./index-DRX5KInn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CIUIYMM9.js";import"./addCustomCSSWithScoping-C7i1P6L4.js";import"./Gregorian-H-341lXH.js";import"./query-CzSBusdE.js";import"./Input-BuKdEYP0.js";import"./ResponsivePopoverCommon.css-XSDUyRKt.js";import"./ValueStateMessage.css-BTsNvEj6.js";import"./Suggestions.css-BwrSUtIe.js";import"./appointment-2-DRnxOJvO.js";import"./ListItemStandard-C8MaLOVV.js";import"./slim-arrow-left-KUz-Ies3.js";import"./Calendar-Bx5idQG-.js";import"./InvisibleMessage-Bb-Qg8L3.js";import"./index-D7K1j5fc.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
