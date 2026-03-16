import{j as e}from"./iframe-B-JB9Mrg.js";import{useMDXComponents as s}from"./index-C6ab_87c.js";import{M as m,C as o}from"./blocks-gUSy1z8f.js";import"./Tag-rJaILc04.js";import"./index-BUD8Dloj.js";import{C as p}from"./ControlsWithNote-QgGQUsr2.js";import{D as l}from"./DocsHeader-o-VKCo2B.js";import{F as d}from"./Footer-BoXWBFNs.js";import"./CommandsAndQueries-BMpPCtQI.js";import"./PageNotFound-DwjQIJMb.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CmwPfFEN.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bvi5gDZ4.js";import"./sys-enter-2-CDMo7mQ9.js";import"./alert-B5324jWv.js";import"./index-C_JAtQ1_.js";import"./index-BNovRndr.js";import"./Link-CUeYoLvN.js";import"./copy-xM69dy-U.js";import"./copy-B23uPwnI.js";import"./GitHub-Mark-CuXBZfmU.js";import"./TableOfContent-DfATZyjw.js";import"./index-COHIvdEC.js";import"./index-CxXKp92D.js";import"./index-UGbMf_4Y.js";import"./index-4LdkJtv9.js";import"./index-BmSIhnsV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_QxycfjS.js";import"./addCustomCSSWithScoping-DBFLD3Dt.js";import"./Illustrations-BGg5U59s.js";import"./i18n-defaults-CFWtSmu6.js";import"./Gregorian-DiMOmuhW.js";import"./getCachedLocaleDataInstance-BkceR76R.js";import"./query-CzSBusdE.js";import"./Input-DVI6zxdj.js";import"./ResponsivePopoverCommon.css-BukAVbLV.js";import"./ValueStateMessage.css-BGkMAg00.js";import"./Suggestions.css-BOQhUGDm.js";import"./appointment-2-XWNMTSoo.js";import"./ListItemStandard-Mn8j4CUx.js";import"./slim-arrow-left-GBXAg914.js";import"./Calendar-DMO1Vynn.js";import"./InvisibleMessage-DXutdx3u.js";import"./index-DrTPER5S.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
