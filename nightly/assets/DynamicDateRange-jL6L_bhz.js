import{j as e}from"./iframe-D3h_j2y4.js";import{useMDXComponents as s}from"./index-a9MBNRjP.js";import{M as m,C as o}from"./blocks-Cp97O8Me.js";import"./Tag-Be6y1yqM.js";import"./index-B9e5YBdN.js";import{C as l}from"./ControlsWithNote-C1Q49NgS.js";import{D as p}from"./DocsHeader-C-7cMXuV.js";import{F as d}from"./CommandsAndQueries-DkEtb3C9.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BrJozBqY.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Du_n-m1U.js";import"./sys-enter-2-_5l1H-Gx.js";import"./alert-DiqJ6xxp.js";import"./index-CH7UrjOG.js";import"./index-BhBE3smf.js";import"./Link-Dali4gAe.js";import"./copy-BfLwmTPU.js";import"./copy-Dke-3UUt.js";import"./GitHub-Mark-DQssIEO6.js";import"./TableOfContent-B8qKcdwY.js";import"./index-BY-U4HhI.js";import"./index-BOt5HncK.js";import"./index-BQ-14eq3.js";import"./index-DX_7kgjZ.js";import"./index-DnWdQH32.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-llHj0RCs.js";import"./addCustomCSSWithScoping-uA_fHk2N.js";import"./Gregorian-CxSnE240.js";import"./getCachedLocaleDataInstance-BBk6mW2I.js";import"./query-CzSBusdE.js";import"./Input-DReaCICF.js";import"./ResponsivePopoverCommon.css-Cv5gi_PV.js";import"./ValueStateMessage.css-BPAV6ZTf.js";import"./Suggestions.css-B7qb-M6b.js";import"./appointment-2-USOzibU_.js";import"./ListItemStandard-CgJ8GSRa.js";import"./slim-arrow-left-BZRfwCT0.js";import"./Calendar-D1_36q_E.js";import"./InvisibleMessage-B2sYPvR_.js";import"./index-BOa2Jfi4.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
`,e.jsx(d,{})]})}function ee(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{ee as default};
