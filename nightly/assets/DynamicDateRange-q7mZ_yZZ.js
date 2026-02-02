import{j as e}from"./iframe-D6FNTQkK.js";import{useMDXComponents as s}from"./index-B6bRqhkI.js";import{M as m,C as o}from"./blocks-CncoMbCj.js";import"./Tag-BgsP26gD.js";import"./index-TUX9UWDf.js";import{C as l}from"./ControlsWithNote-CNMsE99D.js";import{D as p}from"./DocsHeader-BE8561TB.js";import{F as d}from"./CommandsAndQueries-BXb9AdOB.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CiQBUuZU.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DX0Ia3Tr.js";import"./sys-enter-2-BXq7hn_D.js";import"./alert-Dc1BRwci.js";import"./index-C8Bzh-c-.js";import"./index-C01hHOib.js";import"./Link-ECkeIbxq.js";import"./copy-B-xyKazw.js";import"./copy-CV5IiNGP.js";import"./GitHub-Mark-BP1lV9_Z.js";import"./TableOfContent-BUkQ1Gls.js";import"./index-CTSo6gsw.js";import"./index-Cn0-2HTO.js";import"./index-i5JoI6q6.js";import"./index-CEtC1hdv.js";import"./index-_w6613cy.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-COKdY-da.js";import"./addCustomCSSWithScoping-BKP4itiy.js";import"./Gregorian-Bfzg3GP-.js";import"./query-CzSBusdE.js";import"./Input-CWaYFEE0.js";import"./ResponsivePopoverCommon.css-DwSQpbCL.js";import"./ValueStateMessage.css-B-79kasT.js";import"./Suggestions.css-BX_6fSbp.js";import"./appointment-2-jqYtjKoq.js";import"./ListItemStandard-khyxx9eu.js";import"./slim-arrow-left-BmYBuHfA.js";import"./Calendar-Cd9GJmTX.js";import"./InvisibleMessage-CuNZ9Vpq.js";import"./index-XmEHG45R.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
