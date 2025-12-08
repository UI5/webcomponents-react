import{j as e}from"./iframe-CISvTVNI.js";import{useMDXComponents as s}from"./index-bSkbOjqc.js";import{M as m,C as o}from"./blocks-B14xai8l.js";import"./Tag-C1M5Bqsq.js";import"./index-DomH80TU.js";import{C as l}from"./ControlsWithNote-DYexAoru.js";import{D as p}from"./DocsHeader-CX-pVqlb.js";import{F as d}from"./CommandsAndQueries-CBtnfpxG.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DWgQZZ26.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B2fXauVA.js";import"./sys-enter-2-BkEj79Au.js";import"./alert-Cia20ulM.js";import"./index-CE7xV3os.js";import"./index-DqP6b12u.js";import"./Link-B3c0gcH0.js";import"./copy-cY1exCnP.js";import"./copy-DUVHDUg7.js";import"./GitHub-Mark-DafCxuoq.js";import"./TableOfContent-DqGQszUP.js";import"./index-B3k5G3FE.js";import"./index-CTfs7RBW.js";import"./index-BNjAQDaE.js";import"./index-BZLJStFD.js";import"./index-4s-xol72.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D02o7Sag.js";import"./addCustomCSSWithScoping-B4qcl2al.js";import"./Gregorian-DrRveb4j.js";import"./query-CzSBusdE.js";import"./Input-BXkax4Ai.js";import"./ResponsivePopoverCommon.css-DLVAVBHO.js";import"./ValueStateMessage.css-MWCPl9eb.js";import"./Suggestions.css-mYcKBr3o.js";import"./appointment-2-DaHFjAWi.js";import"./ListItemStandard-Dtqu1SWh.js";import"./slim-arrow-left-DavniAhv.js";import"./Calendar-BONSTeqH.js";import"./InvisibleMessage-D74Q5wYE.js";import"./index-DwAWNqSH.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
