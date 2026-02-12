import{j as e}from"./iframe-CeYK60h5.js";import{useMDXComponents as s}from"./index-CyuETzTv.js";import{M as m,C as o}from"./blocks-BIKTnw0B.js";import"./Tag-C54M4ldZ.js";import"./index-CT0V1rC-.js";import{C as l}from"./ControlsWithNote-BC1HLgT2.js";import{D as p}from"./DocsHeader-CLOsrio_.js";import{F as d}from"./CommandsAndQueries-CFbtJHwM.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-1m1w5bjw.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BkZW1INs.js";import"./sys-enter-2-Bag4B31-.js";import"./alert-q5zKag_b.js";import"./index-C9AaKYqF.js";import"./index-BQVvVbng.js";import"./Link-B2AcL4ks.js";import"./copy-Ow-aeN6u.js";import"./copy-CiRkqTCy.js";import"./GitHub-Mark-DqVF3KiZ.js";import"./TableOfContent-CmoLNGGQ.js";import"./index-CHuebsjW.js";import"./index-DCNRybmK.js";import"./index-C-Yn0AU-.js";import"./index-CaQyDWQ7.js";import"./index-DBl_V_lR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CkPy33bc.js";import"./addCustomCSSWithScoping-BSnYfvCe.js";import"./Gregorian-3juxsym-.js";import"./getCachedLocaleDataInstance-CeUtrsGC.js";import"./query-CzSBusdE.js";import"./Input-Cpc3WDAD.js";import"./ResponsivePopoverCommon.css-D2Os4vPx.js";import"./ValueStateMessage.css-DygseWPv.js";import"./Suggestions.css-uPHlQ0zI.js";import"./appointment-2-BWSBwhli.js";import"./ListItemStandard-DChf4TnK.js";import"./slim-arrow-left-CcKTXBkk.js";import"./Calendar-BQ8gfjcI.js";import"./InvisibleMessage-BjsU8t7h.js";import"./index-CxmDL6TA.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
