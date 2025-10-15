import{j as e}from"./iframe-BV6MX4jP.js";import{useMDXComponents as s}from"./index-BBPLoQd2.js";import{M as m,C as o}from"./blocks-ButdG5ct.js";import"./Tag-DqTS_NIk.js";import"./index-D61UH3oK.js";import{C as l}from"./ControlsWithNote-Br1yzSE3.js";import{D as p}from"./DocsHeader-BXtvUvPW.js";import{F as d}from"./CommandsAndQueries-B_NVK97H.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DPkqOq4x.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D4lwDDvQ.js";import"./sys-enter-2-CNNlkaec.js";import"./alert-D9QVBDgC.js";import"./index-B6xBDYCv.js";import"./index-5lJ63Ggw.js";import"./Link-CQBQGD-K.js";import"./copy-D55H2zfJ.js";import"./copy-BuKjNY_z.js";import"./GitHub-Mark-DWFs6LTX.js";import"./TableOfContent-CJu7MjuI.js";import"./index-Bn23lh4B.js";import"./index-BIn6vsDV.js";import"./index-BeBg5nKE.js";import"./index-BAeh9ZRA.js";import"./index-pEzZy3XJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJJJ49N9.js";import"./addCustomCSSWithScoping-BAR7O9dV.js";import"./Gregorian-Cy40X8eZ.js";import"./query-CzSBusdE.js";import"./Input-ChW7yv3W.js";import"./ResponsivePopoverCommon.css-ClpZBCpz.js";import"./ValueStateMessage.css-C_M3aJzp.js";import"./Suggestions.css-CSkW4QfO.js";import"./appointment-2-DLQYRlf0.js";import"./ListItemStandard-C95WGA7x.js";import"./slim-arrow-left-BbkEW54U.js";import"./Calendar-BUKeL2Ew.js";import"./InvisibleMessage-DDCSdyz6.js";import"./index-bAeuC6z7.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
