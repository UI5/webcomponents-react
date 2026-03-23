import{j as e}from"./iframe-a0uMhM0K.js";import{useMDXComponents as s}from"./index-BsqnGYZV.js";import{M as m,C as o}from"./blocks-GWXZJNmq.js";import"./Tag-BaNCkHdE.js";import"./index-BfgNdjah.js";import{C as p}from"./ControlsWithNote-BEMOWWen.js";import{D as l}from"./DocsHeader-DMGbHFDw.js";import{F as d}from"./Footer-UprvpWI8.js";import"./CommandsAndQueries-Daj0tnDY.js";import"./PageNotFound-C4t5kuHt.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DOVGu5Ba.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DnAoFJ5t.js";import"./sys-enter-2-DG20pJAR.js";import"./alert-CaXXBJy4.js";import"./index-C3E6FzVb.js";import"./index-BsmCDa7r.js";import"./Link-C9XRs14a.js";import"./copy-CkZlrlAS.js";import"./copy-Ba79n2H6.js";import"./GitHub-Mark-Cu6FwiBG.js";import"./TableOfContent-D-FWXZzb.js";import"./index-Dk4guAK8.js";import"./index-CqObD5eZ.js";import"./index-BwlpwmJL.js";import"./index-1tRSjVgF.js";import"./index-CSZ4nu-Y.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-F25ehqhC.js";import"./addCustomCSSWithScoping-DssrUnNY.js";import"./Illustrations-Do7SV7fL.js";import"./i18n-defaults-CFWtSmu6.js";import"./Gregorian-CBayk3I-.js";import"./FormatUtils-CFjZERPN.js";import"./query-CzSBusdE.js";import"./Input-cpApaPQM.js";import"./ResponsivePopoverCommon.css-CmTsDlHw.js";import"./ValueStateMessage.css-BRKXcIHj.js";import"./Suggestions.css-COVTnGJE.js";import"./appointment-2-iB0nTCJe.js";import"./ListItemStandard-B1cxGoSI.js";import"./slim-arrow-left-DC2bAjBe.js";import"./Calendar-B7wle_hr.js";import"./InvisibleMessage-izuFC8Iy.js";import"./index-DsvBCAhC.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
