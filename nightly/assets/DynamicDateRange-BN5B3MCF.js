import{j as e}from"./iframe-DbW3_KqJ.js";import{useMDXComponents as s}from"./index-BOUZeiU3.js";import{M as m,C as o}from"./blocks-DqJAVTfM.js";import"./Tag-CrC0d5GD.js";import"./index-ImYws479.js";import{C as l}from"./ControlsWithNote-sP9I0HR5.js";import{D as p}from"./DocsHeader-CqTzeOns.js";import{F as d}from"./CommandsAndQueries-CJXOedaX.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-Dx_jamtr.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cagswqpw.js";import"./sys-enter-2-DbM4lnFg.js";import"./alert-CAARFYG8.js";import"./index-D2hl9olI.js";import"./index-WvKt5Tsy.js";import"./Link-C0NTxSly.js";import"./copy-D6MG3lVg.js";import"./copy-D0b8WOcv.js";import"./GitHub-Mark-BjeYWFE_.js";import"./TableOfContent-Wm2jpON0.js";import"./index-Cbn-jnZC.js";import"./index-Dzqums5N.js";import"./index-xs8VNv2y.js";import"./index-1dv7YKpz.js";import"./index-CoALISWz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-3tP5nwl9.js";import"./addCustomCSSWithScoping-U-EEhqSi.js";import"./Gregorian-Bfamw4LX.js";import"./query-CzSBusdE.js";import"./Input-B594VYIN.js";import"./ResponsivePopoverCommon.css-wzLcNDkL.js";import"./ValueStateMessage.css-Cspg1vkt.js";import"./Suggestions.css-BJhE_NNC.js";import"./appointment-2-ISD1ntfk.js";import"./ListItemStandard-Dh3kIvJd.js";import"./slim-arrow-left-H9sNaA6e.js";import"./Calendar-DZrlYq4l.js";import"./InvisibleMessage-Dqs72f3d.js";import"./index-DcIo-1Oj.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
