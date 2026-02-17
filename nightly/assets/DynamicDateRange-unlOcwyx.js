import{j as e}from"./iframe-XvyKyqpc.js";import{useMDXComponents as s}from"./index-CE_ul58K.js";import{M as m,C as o}from"./blocks-hAblz1ET.js";import"./Tag-BEblEGCN.js";import"./index-CXUKZsMC.js";import{C as l}from"./ControlsWithNote-Clas6Dv3.js";import{D as p}from"./DocsHeader-CED_bmbF.js";import{F as d}from"./CommandsAndQueries-D-JkQMzp.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-Cj7A6KhL.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CNwM68I2.js";import"./sys-enter-2-QkDyn9HM.js";import"./alert-DG7Yrkg6.js";import"./index-Du72Y0zD.js";import"./index-BkdKA5kQ.js";import"./Link-DWmr0_tI.js";import"./copy-Dg-JJVOo.js";import"./copy-CAC71KE2.js";import"./GitHub-Mark-sAxlGc2v.js";import"./TableOfContent-CaC-efIA.js";import"./index--us6wF-5.js";import"./index-CP30tsdj.js";import"./index-DQ79lCi8.js";import"./index-BFysEZU1.js";import"./index-dfRDbF4B.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-m1ntkPM9.js";import"./addCustomCSSWithScoping-B_TWNpIo.js";import"./Gregorian-NbgJkJLI.js";import"./getCachedLocaleDataInstance-Baovnnp9.js";import"./query-CzSBusdE.js";import"./Input-CXTsJDH8.js";import"./ResponsivePopoverCommon.css-DpCrglir.js";import"./ValueStateMessage.css-XAEG8ST6.js";import"./Suggestions.css-CIiHbc7N.js";import"./appointment-2-nmv_Jiz3.js";import"./ListItemStandard-B7uEHLD7.js";import"./slim-arrow-left-B-nsrsXs.js";import"./Calendar-_92vHToT.js";import"./InvisibleMessage-frxXXEWO.js";import"./index-BXZXJSvV.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
