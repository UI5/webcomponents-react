import{j as e}from"./iframe-43wlDzrj.js";import{useMDXComponents as s}from"./index-XbeLC3PN.js";import{M as m,C as o}from"./blocks-VCr_TDgJ.js";import"./Tag-DvuRdu_J.js";import"./index-D_51MvSW.js";import{C as l}from"./ControlsWithNote-CMh36h4f.js";import{D as p}from"./DocsHeader-wJeFr09N.js";import{F as d}from"./CommandsAndQueries-BVePbTmS.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-rAKb8Ltk.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CaFqdV1q.js";import"./sys-enter-2-C8G6jLKW.js";import"./alert-Id5Wcp3M.js";import"./index-CNoVY_XQ.js";import"./index-CYHyRuCO.js";import"./Link-N85W-l5g.js";import"./copy-B5dMONtI.js";import"./copy-CHCJaVsW.js";import"./GitHub-Mark-Cm9hw13I.js";import"./TableOfContent-9wBzeoHq.js";import"./index-CeIthXDN.js";import"./index-NATKJxhC.js";import"./addCustomCSSWithScoping-iHDWQtL_.js";import"./index-DHTRveDi.js";import"./index-C_V3uMP5.js";import"./index-Cx3qav0q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D888T4vP.js";import"./Gregorian-C7nckrse.js";import"./query-CzSBusdE.js";import"./Input-BgaYHg51.js";import"./ResponsivePopoverCommon.css-CvwmGqLs.js";import"./ValueStateMessage.css-BHLQ2DbP.js";import"./Suggestions.css-BTUxUlaU.js";import"./appointment-2-BVGlMUlw.js";import"./ListItemStandard-C1ufjNVS.js";import"./slim-arrow-left-Ddv_lJ80.js";import"./Calendar-DC5zyVDk.js";import"./InvisibleMessage-CWwBH76X.js";import"./index-Ds45T-GS.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
