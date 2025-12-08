import{j as e}from"./iframe-C7GsLKpM.js";import{useMDXComponents as s}from"./index-fgJud-zp.js";import{M as m,C as o}from"./blocks-D2ryVNuM.js";import"./Tag-CvCDhGeJ.js";import"./index-CDhisaU5.js";import{C as l}from"./ControlsWithNote-DGuGAwo2.js";import{D as p}from"./DocsHeader-C2A8ryh7.js";import{F as d}from"./CommandsAndQueries-zRxhXSXv.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DNkLjMvL.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CeT29ukt.js";import"./sys-enter-2-DX9sWARu.js";import"./alert-CEtziYy3.js";import"./index-Bitbggm1.js";import"./index-hUX7abRI.js";import"./Link-Bb3LeyVe.js";import"./copy-CeS9CC6e.js";import"./copy-DEZSjQMA.js";import"./GitHub-Mark-3LNYjKsL.js";import"./TableOfContent-CFUfa1cA.js";import"./index-CW2WjDDi.js";import"./index-B72Of-bP.js";import"./index-Dyv0UGKb.js";import"./index-m_3CNkhb.js";import"./index-DoyP2rLL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-M6aw6fal.js";import"./addCustomCSSWithScoping-DxMrCFWH.js";import"./Gregorian-A5YXHFKi.js";import"./query-CzSBusdE.js";import"./Input-9fOmwmcP.js";import"./ResponsivePopoverCommon.css-BAvtZMMP.js";import"./ValueStateMessage.css-DNVmRxxJ.js";import"./Suggestions.css-UxMCDVF9.js";import"./appointment-2-TYKacLTe.js";import"./ListItemStandard-BvfqPVMA.js";import"./slim-arrow-left-D2TB7V-c.js";import"./Calendar-DKSvuOc-.js";import"./InvisibleMessage-pKkBY45z.js";import"./index-eDA8HHQT.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
