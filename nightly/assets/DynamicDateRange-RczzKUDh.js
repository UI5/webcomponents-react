import{j as e}from"./iframe-DD3khz8t.js";import{useMDXComponents as s}from"./index-CHFjnrWX.js";import{M as m,C as o}from"./blocks-ibeWpSZJ.js";import"./Tag-Ngk_8fKi.js";import"./index-BQH8_ZBk.js";import{C as l}from"./ControlsWithNote-C2jaHriB.js";import{D as p}from"./DocsHeader-F4PydLU1.js";import{F as d}from"./CommandsAndQueries-DsVeZAZ7.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DndnH2bR.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DqXpZV5n.js";import"./sys-enter-2-BQ568DSo.js";import"./alert-CH5Zr4v2.js";import"./index-w-lQea0z.js";import"./index-BHPH6hXB.js";import"./Link-p7O4byri.js";import"./copy-JAKrQCcP.js";import"./copy-BSvcS0vC.js";import"./GitHub-Mark-DebbE9FV.js";import"./TableOfContent-Dp5_jY1c.js";import"./index-DvVzwHKX.js";import"./index-BVYBIT27.js";import"./index-DddTN1yz.js";import"./index-INxWrkzg.js";import"./index-BddI7Cdl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DgRC_ctT.js";import"./addCustomCSSWithScoping-BX6ct4xq.js";import"./Gregorian-D2SAll8b.js";import"./getCachedLocaleDataInstance-B-tVxBkm.js";import"./query-CzSBusdE.js";import"./Input-CzY57eje.js";import"./ResponsivePopoverCommon.css-DtiXOolb.js";import"./ValueStateMessage.css-BAlZcm0o.js";import"./Suggestions.css-wNpJO5EP.js";import"./appointment-2-Dk-dP8vu.js";import"./ListItemStandard-CcQmaiD_.js";import"./slim-arrow-left-nJee2-__.js";import"./Calendar-Csm1yudC.js";import"./InvisibleMessage-DD1Ev_vZ.js";import"./index-CbBNQQRY.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
