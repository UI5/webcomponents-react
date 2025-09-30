import{j as e}from"./iframe-B4y_-iU1.js";import{useMDXComponents as s}from"./index-Dmi6nQVe.js";import{M as m,C as o}from"./blocks-sxqAtQzk.js";import"./Tag-DlHRwvSs.js";import"./index-Dllizol6.js";import{C as l}from"./ControlsWithNote-CGhODPqQ.js";import{D as p}from"./DocsHeader-DWE4KR2K.js";import{F as d}from"./CommandsAndQueries-CcSeU6ue.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-Csw9C5Yi.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D0sGyRbR.js";import"./sys-enter-2-C9g_SRcG.js";import"./alert-D-igEgv7.js";import"./index-BM-ZpZwJ.js";import"./index-C7p9xCdn.js";import"./Link-DqVeu_cc.js";import"./copy-BUckGUfs.js";import"./copy-DoYKp7vI.js";import"./GitHub-Mark-CCg6DNKR.js";import"./TableOfContent-CCxVzqLR.js";import"./index-CUhg4Pue.js";import"./index-D9CWAfTz.js";import"./index-BBdeIQ4g.js";import"./index-Bfg65B6s.js";import"./index-DGhRlPcl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DY4dR896.js";import"./addCustomCSSWithScoping-B0N-pOai.js";import"./Gregorian-i_Ka3KUq.js";import"./query-CzSBusdE.js";import"./Input-XpSBxwxq.js";import"./ResponsivePopoverCommon.css-p5LIoyU4.js";import"./ValueStateMessage.css-C6qx3eDB.js";import"./Suggestions.css-BVl5WNmq.js";import"./appointment-2-CRGthqnH.js";import"./ListItemStandard-C_E-KHlV.js";import"./slim-arrow-left-FmrwZgDG.js";import"./Calendar-iTmw3grx.js";import"./InvisibleMessage-Cys8KAyT.js";import"./index-CEnt0uUY.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
