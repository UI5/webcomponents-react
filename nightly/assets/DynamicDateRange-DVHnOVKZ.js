import{j as e}from"./iframe-DJeYw3_T.js";import{useMDXComponents as s}from"./index-CAoJF-Ee.js";import{M as m,C as o}from"./blocks-CX606tiu.js";import"./Tag-CCm379UD.js";import"./index-D_iy8XUE.js";import{C as l}from"./ControlsWithNote-Cd4-1WaE.js";import{D as p}from"./DocsHeader-Cu-Z-sJO.js";import{F as d}from"./CommandsAndQueries-BpKCXtjf.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CoXT2MCL.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CWuwvd7P.js";import"./sys-enter-2-CLYEOYwG.js";import"./alert-CTnjMkAD.js";import"./index-ChAuXbDX.js";import"./index-ZZUuVpkh.js";import"./Link-D6M-iLai.js";import"./copy-CbTRvlP6.js";import"./copy-DmlYE796.js";import"./GitHub-Mark-CwfSp5YR.js";import"./TableOfContent-CFuMbk9T.js";import"./index-tnzxKSW0.js";import"./index-US2STizv.js";import"./index-xs7bXSrN.js";import"./index-BldmH6cg.js";import"./index-BfDuZshB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bv4hvB9u.js";import"./addCustomCSSWithScoping-DdjgQkne.js";import"./Gregorian-De00P3AD.js";import"./getCachedLocaleDataInstance-ChJFOW9i.js";import"./query-CzSBusdE.js";import"./Input-aC5IARbR.js";import"./ResponsivePopoverCommon.css-CZVnt3kp.js";import"./ValueStateMessage.css-CB2SJNwM.js";import"./Suggestions.css-CcYLfhHI.js";import"./appointment-2-Ca4poP3p.js";import"./ListItemStandard-Cn9vQdt7.js";import"./slim-arrow-left-CG9kD9v_.js";import"./Calendar-D3aXjj0g.js";import"./InvisibleMessage-deXIs-B1.js";import"./index-CtFadE48.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
