import{j as e}from"./iframe-DNMTfzpK.js";import{useMDXComponents as s}from"./index-BN2xRXE4.js";import{M as m,C as o}from"./blocks-D7TGtWIi.js";import"./Tag-DMQsT8Q8.js";import"./index-T3fFkT4y.js";import{C as l}from"./ControlsWithNote-Bm6pwLxQ.js";import{D as p}from"./DocsHeader-BUJ-uh18.js";import{F as d}from"./CommandsAndQueries-p_oo0qut.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BKuHl01A.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CfBdub9z.js";import"./sys-enter-2-D1yMqvha.js";import"./alert-ovSFIgO_.js";import"./index-BVaTbyf5.js";import"./index-3Dfb5Jbe.js";import"./Link-QK9m66TA.js";import"./copy-D2fSnfVl.js";import"./copy-mCRNeeck.js";import"./GitHub-Mark-Dh9D3dJo.js";import"./TableOfContent-CHa5NTHN.js";import"./index-c_AmigIx.js";import"./index-B8yoe6T_.js";import"./index-CijDEz0A.js";import"./index-BmIqw6uo.js";import"./index-BXvVq-3Z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DdXxvAEF.js";import"./addCustomCSSWithScoping-DGsOsNkK.js";import"./Gregorian-1ZvCjn-X.js";import"./query-CzSBusdE.js";import"./Input-D7FScK-r.js";import"./ResponsivePopoverCommon.css-BpovPhMy.js";import"./ValueStateMessage.css-jWH0iavP.js";import"./Suggestions.css-DVP1hS77.js";import"./appointment-2-DtjmUbsw.js";import"./ListItemStandard-CBFY19dC.js";import"./slim-arrow-left-ajictnVL.js";import"./Calendar-s1cdgxnY.js";import"./InvisibleMessage-BAVpRLuQ.js";import"./index-DrCxDrAT.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
