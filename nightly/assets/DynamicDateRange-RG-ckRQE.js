import{j as e}from"./iframe-CJRlzZgA.js";import{useMDXComponents as s}from"./index-CbUzkcD0.js";import{M as m,C as o}from"./blocks-QclREKVQ.js";import"./Tag-D6uzQqkN.js";import"./index-B3EVM4WW.js";import{C as l}from"./ControlsWithNote-m4NXE0Lk.js";import{D as p}from"./DocsHeader-CYhP0NKu.js";import{F as d}from"./CommandsAndQueries-BJK9fmCd.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-lFdjl3oU.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CTfPsGYk.js";import"./sys-enter-2-DT64nekl.js";import"./alert-D_x5VnX_.js";import"./index-CEi9QmXA.js";import"./index-CgUHdFlG.js";import"./Link-0WAKzVuH.js";import"./copy-DJuCUsOV.js";import"./copy-Dm16cUhk.js";import"./GitHub-Mark-DrwbB2D9.js";import"./TableOfContent-CbWMIbhM.js";import"./index-DLQSfTW2.js";import"./index-CEHRPvSv.js";import"./index-DNJOtG7U.js";import"./index-B-KWFPaJ.js";import"./index-DBGTLlVz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ckhrx5tI.js";import"./addCustomCSSWithScoping-CXI5gvd5.js";import"./Gregorian-DP2SGmLe.js";import"./query-CzSBusdE.js";import"./Input-C30iTws-.js";import"./ResponsivePopoverCommon.css-C_a-qh6P.js";import"./ValueStateMessage.css-C9MjG1UC.js";import"./Suggestions.css-BN5UKDJ_.js";import"./appointment-2-Dcm-o5qC.js";import"./ListItemStandard-e2XpTMq4.js";import"./slim-arrow-left-BUAX36we.js";import"./Calendar-DRcAUUCP.js";import"./InvisibleMessage-CDDqZbGd.js";import"./index-DICMjLbX.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
