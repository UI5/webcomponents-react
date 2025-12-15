import{j as e}from"./iframe-BVsLYlhe.js";import{useMDXComponents as s}from"./index-DavU5a3Y.js";import{M as m,C as o}from"./blocks-BwdcnqOn.js";import"./Tag-CNJ-l2ra.js";import"./index-Chy_S0qP.js";import{C as l}from"./ControlsWithNote-CGEaDRv0.js";import{D as p}from"./DocsHeader-DoAVvyax.js";import{F as d}from"./CommandsAndQueries-Bi9b4xK_.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-Bn7fU83u.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Q1gDT6BU.js";import"./sys-enter-2-CVfnD9eL.js";import"./alert-BQuV4PvU.js";import"./index-BZsG0oyU.js";import"./index-CQv5SAoi.js";import"./Link-mimmL_0g.js";import"./copy-CTnQUdWw.js";import"./copy-hvSX-Foh.js";import"./GitHub-Mark-CEEZzxvN.js";import"./TableOfContent--O-E1U53.js";import"./index-BBlqkBew.js";import"./index-CppXcbvf.js";import"./index-pqTqdxQB.js";import"./index-bVRMu9zO.js";import"./index-2NXGICNv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dhuu23v1.js";import"./addCustomCSSWithScoping-CKzpaFfQ.js";import"./Gregorian-CUyd0tPL.js";import"./query-CzSBusdE.js";import"./Input-B1h80Qke.js";import"./ResponsivePopoverCommon.css-uHz60RXl.js";import"./ValueStateMessage.css-BGnf7WuL.js";import"./Suggestions.css-BC296_76.js";import"./appointment-2-Cd_n2B2V.js";import"./ListItemStandard-MnW36ayG.js";import"./slim-arrow-left-s0i3cPWV.js";import"./Calendar-D5A4fGKk.js";import"./InvisibleMessage-COd6vRv-.js";import"./index-DHnVQWJI.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
