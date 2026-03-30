import{j as e}from"./iframe-C-8CikNF.js";import{useMDXComponents as s}from"./index-Cw4SbHnF.js";import{M as m,C as o}from"./blocks-BmssVOG3.js";import"./Tag-MEJh1Ko9.js";import"./index-hi0bZbmw.js";import{C as p}from"./ControlsWithNote-G_hJZ3o1.js";import{D as l}from"./DocsHeader-BrIrx7Ua.js";import{F as d}from"./Footer-DRQAPrhO.js";import"./CommandsAndQueries-CurTw3Lj.js";import"./PageNotFound-5CESdk48.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DvGCvNZI.js";import"./preload-helper-PPVm8Dsz.js";import"./information-0aMtiy50.js";import"./sys-enter-2-grGMmfr8.js";import"./alert-sWw94Nn1.js";import"./index-CaBNGx_8.js";import"./index-DH3Cr8HB.js";import"./Link-xVMMn3oU.js";import"./copy-BNs4w004.js";import"./copy-CzzG0WN_.js";import"./GitHub-Mark-CnOOMfW3.js";import"./TableOfContent-DYiilLZq.js";import"./index-knQkJN_L.js";import"./index-C39Oe1_-.js";import"./index-H3f20a9K.js";import"./index-BGM8gXjK.js";import"./index-02sMf1JQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEjyiyGF.js";import"./addCustomCSSWithScoping-iAIUxvTa.js";import"./Illustrations-2Vhs9c3z.js";import"./i18n-defaults-CFWtSmu6.js";import"./Gregorian-BglX3RBm.js";import"./FormatUtils-CEKs0I9F.js";import"./query-CzSBusdE.js";import"./Input-CjfkHsNs.js";import"./ResponsivePopoverCommon.css-DmWEYKaX.js";import"./ValueStateMessage.css-1Br4XeI3.js";import"./Suggestions.css-C3zAGvC_.js";import"./appointment-2-SEgBL8Kb.js";import"./ListItemStandard-C3jDGq2u.js";import"./slim-arrow-left-DV1cbAjv.js";import"./Calendar-Cf9F7DFw.js";import"./InvisibleMessage-B79dV3sk.js";import"./index-BGWYkQPr.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
`,e.jsx(l,{of:r}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(p,{of:a}),`
`,e.jsx(t.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(t.h3,{id:"value-change",children:"Value Change"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(t.h4,{id:"code",children:"Code"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`function DynamicDateRangeComponent() {
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
`,e.jsx(d,{})]})}function re(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{re as default};
