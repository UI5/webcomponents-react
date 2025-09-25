import{j as e}from"./iframe-DncksSc9.js";import{useMDXComponents as s}from"./index-DHwy2cP9.js";import{M as m,C as o}from"./blocks-CrR4TToZ.js";import"./Tag-CydY6GNK.js";import"./index-Bxx2fk60.js";import{C as l}from"./ControlsWithNote-Diaxfqvl.js";import{D as p}from"./DocsHeader-BqrZT3Oi.js";import{F as d}from"./CommandsAndQueries-CDnFth_H.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CIcKghwN.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DaRpWkOX.js";import"./sys-enter-2-oWYvZ3n3.js";import"./alert-DDv07Q-F.js";import"./index-Bbgh-_Am.js";import"./index-DM-1F5s9.js";import"./Link-DA9rizI6.js";import"./copy-BCvo8Ym1.js";import"./copy-DLEpwWX6.js";import"./GitHub-Mark-D-UOdu-9.js";import"./TableOfContent-CzqOl-iG.js";import"./index--l4k2_pu.js";import"./index-LgvpS8l8.js";import"./index-DjMKVIn1.js";import"./index-9yiQ979H.js";import"./index-ozB3DgLW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D0ZXAWvt.js";import"./addCustomCSSWithScoping-CHaIArZr.js";import"./Gregorian-CA6JRjgk.js";import"./query-CzSBusdE.js";import"./Input-HjE4MzLi.js";import"./ResponsivePopoverCommon.css-D7l99RH0.js";import"./ValueStateMessage.css-CDVm0-OH.js";import"./Suggestions.css-Di4bJ4Mv.js";import"./appointment-2-B-J00Wlz.js";import"./ListItemStandard-OppmVys6.js";import"./slim-arrow-left-CL4QuHsY.js";import"./Calendar-BpA1xy4B.js";import"./InvisibleMessage-B0PSwWLP.js";import"./index-B70SChhh.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
