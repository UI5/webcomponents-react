import{j as e}from"./iframe-LwV4ThFO.js";import{useMDXComponents as s}from"./index-q5DcgXr2.js";import{M as m,C as o}from"./blocks-Dip3aHJy.js";import"./Tag-By0Vj2CL.js";import"./index-DWh2FbsL.js";import{C as l}from"./ControlsWithNote-ShB3rN3m.js";import{D as p}from"./DocsHeader-BI2tp2WK.js";import{F as d}from"./CommandsAndQueries-DPfuXfqc.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BpfUK94h.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CKI5p7Rd.js";import"./sys-enter-2-DqN3aKF8.js";import"./alert-D7vNrBhD.js";import"./index-CtGk4fFi.js";import"./index-SgnU4gKB.js";import"./Link-BYRJUWj7.js";import"./copy-D58bALps.js";import"./copy-DMZz3mt-.js";import"./GitHub-Mark-DftOlWVB.js";import"./TableOfContent-C92htYmA.js";import"./index-Dg0Ul4LB.js";import"./index-DO4DjFA6.js";import"./index-D33G3UXY.js";import"./index-wHmvTXkA.js";import"./index-BYce_ve5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4bciS0g0.js";import"./addCustomCSSWithScoping-d025F1t1.js";import"./Gregorian-Bu0-jQYz.js";import"./query-CzSBusdE.js";import"./Input-DOTZG0nG.js";import"./ResponsivePopoverCommon.css-tY7w10PH.js";import"./ValueStateMessage.css-DJKlg9Od.js";import"./Suggestions.css-DRakvl3F.js";import"./appointment-2-Cz2YtWHy.js";import"./ListItemStandard-BtDMm1v7.js";import"./slim-arrow-left-CWzS-Z2v.js";import"./Calendar-BisYAwMt.js";import"./InvisibleMessage-BYSN34jq.js";import"./index-BaXB6j-X.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
