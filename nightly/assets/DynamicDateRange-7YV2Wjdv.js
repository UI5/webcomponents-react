import{j as e}from"./iframe-D1Ed_P25.js";import{useMDXComponents as s}from"./index-BFLewEmr.js";import{M as m,C as o}from"./blocks-D0qmmV7H.js";import"./Tag-c5FmtIVB.js";import"./index-CUd6ir2B.js";import{C as l}from"./ControlsWithNote-eCZFyRAL.js";import{D as p}from"./DocsHeader-CDw_ZpQx.js";import{F as d}from"./CommandsAndQueries-DkK8PXt_.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DANTnlaA.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CLHcsZFK.js";import"./sys-enter-2-uCDsFGT8.js";import"./alert-DcriM5I3.js";import"./index-RMrg5o5S.js";import"./index-BiKUdEyp.js";import"./Link-Bd6EkD5P.js";import"./copy-DjpKLZBZ.js";import"./copy-D1Lui3xc.js";import"./GitHub-Mark-BtJJiJAB.js";import"./TableOfContent-uQiaXp0O.js";import"./index-DyMezxCx.js";import"./index-BiMr4Loi.js";import"./index-F4shrftk.js";import"./index-RNnJdIaH.js";import"./index-ClmEJuF6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CJfOjK1K.js";import"./addCustomCSSWithScoping-DIxW6xjd.js";import"./Gregorian-CXpbWvnn.js";import"./query-CzSBusdE.js";import"./Input-5rI7b6hj.js";import"./ResponsivePopoverCommon.css-DU4YlHAZ.js";import"./ValueStateMessage.css-CpZa25G1.js";import"./Suggestions.css-3H0-Mr0d.js";import"./appointment-2-DsI3JgB5.js";import"./ListItemStandard-CNwMXV6a.js";import"./slim-arrow-left-xU1UPH-E.js";import"./Calendar-B_KRJz3o.js";import"./InvisibleMessage-p9R4CYhZ.js";import"./index-BrqVegQT.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
