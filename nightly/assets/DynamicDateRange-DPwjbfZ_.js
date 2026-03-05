import{j as e}from"./iframe-JepDsySv.js";import{useMDXComponents as s}from"./index-BGpK8Gfn.js";import{M as m,C as o}from"./blocks-BbBU6U9u.js";import"./Tag-B5HHC3_D.js";import"./index-CgzvULcW.js";import{C as p}from"./ControlsWithNote-CirU9jF3.js";import{D as l}from"./DocsHeader-DU5w_HiK.js";import{F as d}from"./Footer-DkGRGaaK.js";import"./CommandsAndQueries-BpbXUgFJ.js";import"./PageNotFound-BYj9CuoF.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DKu1UUmk.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DXY6cLV_.js";import"./sys-enter-2-e1zqJEbk.js";import"./alert-BXOPntd7.js";import"./index-CIXtBD0J.js";import"./index-Bd6WgbUi.js";import"./Link-BLuv4AbX.js";import"./copy-Bmpb5kaN.js";import"./copy-D2Pke32f.js";import"./GitHub-Mark-CxBZqW50.js";import"./TableOfContent-DzhvbQtx.js";import"./index-8tSJZtFG.js";import"./index-0BxTwmFy.js";import"./index-BKoJ8bur.js";import"./index-C220bubu.js";import"./index-CcxcRSha.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzfOud-0.js";import"./addCustomCSSWithScoping-f93Oozyz.js";import"./Illustrations-sShT8n29.js";import"./i18n-defaults-C7ICj5-E.js";import"./Gregorian-DDu3ru7N.js";import"./getCachedLocaleDataInstance-CuWCbN_n.js";import"./query-CzSBusdE.js";import"./Input-f39H6uy6.js";import"./ResponsivePopoverCommon.css-BKF0yN8r.js";import"./ValueStateMessage.css-C0leCwz7.js";import"./Suggestions.css-DPwYa0Rw.js";import"./appointment-2-BcEXw5eZ.js";import"./ListItemStandard-DaU3lC3b.js";import"./slim-arrow-left-RioVVEPh.js";import"./Calendar-Dx4tRycW.js";import"./InvisibleMessage-DglvjQpx.js";import"./index-l64aeKU4.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
