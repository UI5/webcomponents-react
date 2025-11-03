import{j as e}from"./iframe-DLeMGAs6.js";import{useMDXComponents as s}from"./index-BeTNnGed.js";import{M as m,C as o}from"./blocks-CVdnQ-m5.js";import"./Tag-fuIv2r1-.js";import"./index-CAID728Y.js";import{C as l}from"./ControlsWithNote-QYSrl-UI.js";import{D as p}from"./DocsHeader-DY6tY_U8.js";import{F as d}from"./CommandsAndQueries-Do6MeMuW.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BafUrmUR.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BttnUTpt.js";import"./sys-enter-2-DQSYULXQ.js";import"./alert-Braz2hWt.js";import"./index-BelAbkZz.js";import"./index-Xs0i3Hhr.js";import"./Link-D_uo4UVb.js";import"./copy-CSTZlAKH.js";import"./copy-ClThfN15.js";import"./GitHub-Mark-CIH3fdoh.js";import"./TableOfContent-sSbZlFDL.js";import"./index-ChbJtMA8.js";import"./index-D_-Zm7gh.js";import"./index-CetP1T2M.js";import"./index-DQmJ5ecl.js";import"./index-DGDr800L.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C13TjiIP.js";import"./addCustomCSSWithScoping-Cj5ZxzDT.js";import"./Gregorian-EMxVcFCm.js";import"./query-CzSBusdE.js";import"./Input-BvEbFIGf.js";import"./ResponsivePopoverCommon.css-Cwu8TVSn.js";import"./ValueStateMessage.css-CYGxQFIT.js";import"./Suggestions.css-CnL5XvB_.js";import"./appointment-2-DQxiB8nl.js";import"./ListItemStandard-CVpJPqGn.js";import"./slim-arrow-left-CMdpz2-B.js";import"./Calendar-Br_XdMRm.js";import"./InvisibleMessage-CjnlHtO4.js";import"./index-BDs2ZQJs.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
