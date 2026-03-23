import{j as e}from"./iframe-Cg-RuwYg.js";import{useMDXComponents as s}from"./index-CqVZQP5J.js";import{M as m,C as o}from"./blocks-De0pSozH.js";import"./Tag-V3n4GJl9.js";import"./index-BHGbu9W7.js";import{C as p}from"./ControlsWithNote-D20obapr.js";import{D as l}from"./DocsHeader-BmD4JGAv.js";import{F as d}from"./Footer-CTf-mOt6.js";import"./CommandsAndQueries-CCNeSOJY.js";import"./PageNotFound-DwqRWqRN.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CD_yvyW-.js";import"./preload-helper-PPVm8Dsz.js";import"./information-qBgjFYpj.js";import"./sys-enter-2-DSPEUkAA.js";import"./alert-DJst6O04.js";import"./index-B6oJNk8s.js";import"./index-BxFP3rc9.js";import"./Link-C3bBlraS.js";import"./copy-BDnVOvFT.js";import"./copy-BXGKGRUx.js";import"./GitHub-Mark-qv8abqQW.js";import"./TableOfContent-Da-rTDoa.js";import"./index-CY8SZPoP.js";import"./index-nSwdNT12.js";import"./index-DVELchH2.js";import"./index-YSls2zGx.js";import"./index-DGDw3Svj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DgpxYdce.js";import"./addCustomCSSWithScoping-Bd0YAyTr.js";import"./Illustrations-v3WzxnkA.js";import"./i18n-defaults-CFWtSmu6.js";import"./Gregorian-_iAAvars.js";import"./FormatUtils-DEZ0VPMK.js";import"./query-CzSBusdE.js";import"./Input-C-2HhvGM.js";import"./ResponsivePopoverCommon.css-D2lSx7rm.js";import"./ValueStateMessage.css-DkN6FOwk.js";import"./Suggestions.css-BDGZmoU-.js";import"./appointment-2-UFmR7raU.js";import"./ListItemStandard-C1sqpTZP.js";import"./slim-arrow-left-DhsBQ86f.js";import"./Calendar-w-iPxn3G.js";import"./InvisibleMessage-CoET6IX3.js";import"./index-fpUgSqmh.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
