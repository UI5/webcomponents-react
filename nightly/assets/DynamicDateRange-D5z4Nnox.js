import{j as e}from"./iframe-BB4qEXD6.js";import{useMDXComponents as s}from"./index-Du8_Rn8P.js";import{M as m,C as o}from"./blocks-CR8KOJrJ.js";import"./Tag-Da7QnCDv.js";import"./index-DdTPxxL_.js";import{C as l}from"./ControlsWithNote-DYMuD7l3.js";import{D as p}from"./DocsHeader-BS7EOXT_.js";import{F as d}from"./CommandsAndQueries-DRsaMJRB.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories--EdiZvgA.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Y0x5W-OX.js";import"./sys-enter-2-BJKr7qQ1.js";import"./alert-BQZZbhbR.js";import"./index-Dpli1QB-.js";import"./index-CsmFqYDM.js";import"./Link-BYUEfY7R.js";import"./copy-6zx3_vtS.js";import"./copy-BVMnHcDg.js";import"./GitHub-Mark-BhVT2185.js";import"./TableOfContent-WiDutKKz.js";import"./index-x2cXHq8y.js";import"./index-9Py2403r.js";import"./index-Dt_2dhRA.js";import"./index-DMHUWYeC.js";import"./index-CztWxO-c.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bzv1Zaa7.js";import"./addCustomCSSWithScoping-Cbj-6aXb.js";import"./Gregorian-J6qaL3Zp.js";import"./query-CzSBusdE.js";import"./Input-DkXdapB6.js";import"./ResponsivePopoverCommon.css-Dw9E0nMz.js";import"./ValueStateMessage.css-BkhABoMh.js";import"./Suggestions.css-BC1EOLh5.js";import"./appointment-2-BDuRXRJt.js";import"./ListItemStandard-CI0I5uqQ.js";import"./slim-arrow-left-7nAok_38.js";import"./Calendar-DS0T8Zb4.js";import"./InvisibleMessage-DyYsNy9h.js";import"./index-1qNsr_an.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
