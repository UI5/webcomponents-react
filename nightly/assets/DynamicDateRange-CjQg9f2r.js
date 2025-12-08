import{j as e}from"./iframe-pGkg1yhx.js";import{useMDXComponents as s}from"./index-zZGraQiW.js";import{M as m,C as o}from"./blocks-h-E2EZ8G.js";import"./Tag-au1p2NGj.js";import"./index-Dhkbob0y.js";import{C as l}from"./ControlsWithNote-B93C_YVi.js";import{D as p}from"./DocsHeader-D3Z603yd.js";import{F as d}from"./CommandsAndQueries-0d0cMNfY.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DuhrG9Iv.js";import"./preload-helper-PPVm8Dsz.js";import"./information-cXVVKah4.js";import"./sys-enter-2-hj8-ImHG.js";import"./alert-B1o_Hsr7.js";import"./index-Bw9Ab4ZS.js";import"./index-DdsduAWA.js";import"./Link-D-i4oyZF.js";import"./copy-CYAZ_Ukm.js";import"./copy-DnSu0Tnk.js";import"./GitHub-Mark-I5I5hI39.js";import"./TableOfContent-DvuGEVlp.js";import"./index-2g5O9IIc.js";import"./index-CfRPSEYz.js";import"./index-BwnLifZ4.js";import"./index-Wi1PYVS4.js";import"./index-D6ltds-N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Do_htNQl.js";import"./addCustomCSSWithScoping-BX6PI_rc.js";import"./Gregorian-CRp6VC64.js";import"./query-CzSBusdE.js";import"./Input-CyCFJ6Vu.js";import"./ResponsivePopoverCommon.css-B50dxgEH.js";import"./ValueStateMessage.css-DMDkPBvl.js";import"./Suggestions.css-CtaaBT2N.js";import"./appointment-2-C7u-JLzo.js";import"./ListItemStandard-BdpPPBzO.js";import"./slim-arrow-left-D1WJ2gO0.js";import"./Calendar-DINWv4BM.js";import"./InvisibleMessage-C46p7Cuq.js";import"./index-BOGeczJA.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
