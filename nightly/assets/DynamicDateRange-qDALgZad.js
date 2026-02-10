import{j as e}from"./iframe-DHpTrIAy.js";import{useMDXComponents as s}from"./index-BNdd_DZc.js";import{M as m,C as o}from"./blocks-81TV0E2-.js";import"./Tag-BMggxcvS.js";import"./index-o6k9VRwd.js";import{C as l}from"./ControlsWithNote-LbhmqWjz.js";import{D as p}from"./DocsHeader-B1pwe7gb.js";import{F as d}from"./CommandsAndQueries-D5kPRnn1.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-AajKm3ZK.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D34aykIE.js";import"./sys-enter-2-ELzebk4o.js";import"./alert-8s8s7RYv.js";import"./index-rxRuTrVR.js";import"./index-DbNixw4c.js";import"./Link-DUpBHPtC.js";import"./copy-CHTf76DI.js";import"./copy-CUNi2x4z.js";import"./GitHub-Mark-BuG8aMwB.js";import"./TableOfContent-BwEuKDvH.js";import"./index-w0GUVkMu.js";import"./index-DA4wHaXp.js";import"./index-DpF6uZ0K.js";import"./index-C40hnbsn.js";import"./index-CAXkJF_S.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DrKfdXs7.js";import"./addCustomCSSWithScoping-CHvNzWcZ.js";import"./Gregorian-CuwO9eh1.js";import"./getCachedLocaleDataInstance-8YW4x9FV.js";import"./query-CzSBusdE.js";import"./Input-DwdQCY2u.js";import"./ResponsivePopoverCommon.css-niQ49B26.js";import"./ValueStateMessage.css-DwB1W3lZ.js";import"./Suggestions.css-BOrRXcWN.js";import"./appointment-2-CYo8NN3V.js";import"./ListItemStandard-BerdkBu5.js";import"./slim-arrow-left-Dk30MC2O.js";import"./Calendar-CMt2Zi7v.js";import"./InvisibleMessage-C3z5CeG6.js";import"./index-BswnqQsD.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
