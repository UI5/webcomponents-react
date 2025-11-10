import{j as e}from"./iframe-hWo-wO7u.js";import{useMDXComponents as s}from"./index-B2u3atBN.js";import{M as m,C as o}from"./blocks-D665FCej.js";import"./Tag-DiHaMBCj.js";import"./index-D5mqC0e8.js";import{C as l}from"./ControlsWithNote-BBUwaR31.js";import{D as p}from"./DocsHeader-QdazEtsa.js";import{F as d}from"./CommandsAndQueries-BtJ9G9OP.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CqO8wKWU.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C8DEl_tH.js";import"./sys-enter-2-LL0qt2nK.js";import"./alert-DeTqeiYU.js";import"./index-qccq9h_o.js";import"./index-BDgRL0Nh.js";import"./Link-BA7dioNH.js";import"./copy-CGSuE3q9.js";import"./copy-BPT19kup.js";import"./GitHub-Mark-o0GLD-Xz.js";import"./TableOfContent-gKRQ1rDy.js";import"./index-Wfnu6Ku2.js";import"./index-D7ZeaZZe.js";import"./index-CSzf7Z-Y.js";import"./index-DISMqvl7.js";import"./index-C_OvF3EV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CfqGlQv7.js";import"./addCustomCSSWithScoping-wCTK5FK_.js";import"./Gregorian-BsuvidqN.js";import"./query-CzSBusdE.js";import"./Input-Bj15_VWu.js";import"./ResponsivePopoverCommon.css-CUXmBlOY.js";import"./ValueStateMessage.css-BGhJCY9Z.js";import"./Suggestions.css-lQlw-tAk.js";import"./appointment-2-gXVl0xQn.js";import"./ListItemStandard-BRaWu8L3.js";import"./slim-arrow-left-Bj8Jml0P.js";import"./Calendar-DvI0LipN.js";import"./InvisibleMessage-D08-nSQa.js";import"./index-Dcm44O05.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
