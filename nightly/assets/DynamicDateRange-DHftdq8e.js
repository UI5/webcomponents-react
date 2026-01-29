import{j as e}from"./iframe-CaWUkniD.js";import{useMDXComponents as s}from"./index-DfLMUe36.js";import{M as m,C as o}from"./blocks-BMfWNTmT.js";import"./Tag-CqIFc9Gy.js";import"./index-B-q2cOJd.js";import{C as l}from"./ControlsWithNote-tn4IlKYb.js";import{D as p}from"./DocsHeader-COAJAB_S.js";import{F as d}from"./CommandsAndQueries-Bkeh__iN.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DdHmTRVt.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D2K3Dl_P.js";import"./sys-enter-2-CcH0mjP8.js";import"./alert-CyfuNqtR.js";import"./index-DN8rN30Z.js";import"./index-dFuotq6J.js";import"./Link-D_-jRuCf.js";import"./copy-RL6wI4mn.js";import"./copy-CqMAivUp.js";import"./GitHub-Mark-BFGmI5i2.js";import"./TableOfContent-BiO-A2Go.js";import"./index-tK2knsWN.js";import"./index-WiTork8k.js";import"./index-ChWdN6oy.js";import"./index-Bw4kzKrM.js";import"./index-C4konRse.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B2YWTQyV.js";import"./addCustomCSSWithScoping-DbaRAaG9.js";import"./Gregorian-C07vvE_b.js";import"./query-CzSBusdE.js";import"./Input-BN2yOYjz.js";import"./ResponsivePopoverCommon.css-4Xg56gf5.js";import"./ValueStateMessage.css-BIWamRUp.js";import"./Suggestions.css-DWWZcteF.js";import"./appointment-2-CzZqt6u6.js";import"./ListItemStandard-DKc5fhLO.js";import"./slim-arrow-left-xPkdpXW2.js";import"./Calendar-BQzpHulD.js";import"./InvisibleMessage-DosCuqjU.js";import"./index-DlLi_Ygh.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
