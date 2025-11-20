import{j as e}from"./iframe-CwFVqG2B.js";import{useMDXComponents as s}from"./index-DLCucreN.js";import{M as m,C as o}from"./blocks-BPmtq9pk.js";import"./Tag-BAaIxfbN.js";import"./index-Dun977o4.js";import{C as l}from"./ControlsWithNote-BOame1rn.js";import{D as p}from"./DocsHeader-BLFXiIJM.js";import{F as d}from"./CommandsAndQueries-CPEglOxS.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-Dl14QSQp.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BBSRrLZV.js";import"./sys-enter-2-D4JTR3Iq.js";import"./alert-vk5CGtWZ.js";import"./index-CCtj0faG.js";import"./index-BdiKbL49.js";import"./Link-LJw1ucv9.js";import"./copy-DFplFJsA.js";import"./copy-BGYvKTCJ.js";import"./GitHub-Mark-CX4tnN_g.js";import"./TableOfContent-890WGvsJ.js";import"./index-graRZSxK.js";import"./index-B1OrttLk.js";import"./index-CMU9Wk5L.js";import"./index-Cs50Favg.js";import"./index-DS4oeWmb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BQrnNeIO.js";import"./addCustomCSSWithScoping-C4aLMSRb.js";import"./Gregorian-CvhKwQ9s.js";import"./query-CzSBusdE.js";import"./Input-BRFISGyi.js";import"./ResponsivePopoverCommon.css-55yd8Lsl.js";import"./ValueStateMessage.css-BXXM_drL.js";import"./Suggestions.css-D3s2RFDk.js";import"./appointment-2-B6n9Ytny.js";import"./ListItemStandard-DP9SjAAJ.js";import"./slim-arrow-left-FOzM5xl_.js";import"./Calendar-BDarw4q4.js";import"./InvisibleMessage-LF_vPXeD.js";import"./index-BjIQh5tS.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
