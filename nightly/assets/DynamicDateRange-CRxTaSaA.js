import{j as e}from"./iframe-FqLIb5aJ.js";import{useMDXComponents as s}from"./index-BMlaAUsm.js";import{M as m,C as o}from"./blocks-2y9I1Ee8.js";import"./Tag-8E3ttw9X.js";import"./index-B7xi-wqa.js";import{C as l}from"./ControlsWithNote-NdmfawKk.js";import{D as p}from"./DocsHeader-lKa0J31y.js";import{F as d}from"./CommandsAndQueries-C8KzZZ_g.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BQOkaLsx.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CWEUh2Nv.js";import"./sys-enter-2-D8dKPdhT.js";import"./alert-Dzhc-2EW.js";import"./index-PGt_tfZb.js";import"./index-CunGGXs0.js";import"./Link-D_zVjdUt.js";import"./copy-BAU6whic.js";import"./copy-DHQOADmz.js";import"./GitHub-Mark-fELMhB6e.js";import"./TableOfContent-Bn39sA4u.js";import"./index-DrxJ3_v0.js";import"./index-CJCUd_sD.js";import"./index-ByRLHl7W.js";import"./index-DHR1LOgw.js";import"./index-DfAJ7eEY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DlZw9a5e.js";import"./addCustomCSSWithScoping-BziWOAoD.js";import"./Gregorian-RYBRKSDW.js";import"./query-CzSBusdE.js";import"./Input-D70gHpU4.js";import"./ResponsivePopoverCommon.css-CFYKUvZL.js";import"./ValueStateMessage.css-GEYmLDX1.js";import"./Suggestions.css-Xa6Cgh36.js";import"./appointment-2-ByDOTFsL.js";import"./ListItemStandard-CciZFj9F.js";import"./slim-arrow-left-BOjX9LRv.js";import"./Calendar-B43aC3QE.js";import"./InvisibleMessage-Dqr9IMJW.js";import"./index-CuNNSqVd.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
