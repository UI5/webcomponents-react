import{j as e}from"./iframe-BFGaT_FV.js";import{useMDXComponents as s}from"./index-CnhfjtvF.js";import{M as m,C as o}from"./blocks-Dayk-WJV.js";import"./Tag-B8YEukqj.js";import"./index-DAwrSR1M.js";import{C as l}from"./ControlsWithNote-DwpSieUl.js";import{D as p}from"./DocsHeader-q47HZv9b.js";import{F as d}from"./CommandsAndQueries-B8JKM3km.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-8q5GUyOE.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bz11YhFZ.js";import"./sys-enter-2-BSVZTuif.js";import"./alert-BaGtUWxL.js";import"./index-1UQ-4lhS.js";import"./index-BZnNWwSk.js";import"./Link-BBvAtJ6F.js";import"./copy-Tk-F6pRG.js";import"./copy-AGelM_Ll.js";import"./GitHub-Mark-Dgfv1FLj.js";import"./TableOfContent-CqJuG8DQ.js";import"./index-BvUgbQCZ.js";import"./index-BlQFkuHY.js";import"./index-B9hLr1Bv.js";import"./index-Bf-TRwAv.js";import"./index-CaRZdhen.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYVZjLb4.js";import"./addCustomCSSWithScoping-B8FWovV5.js";import"./Gregorian-C_ZDZFXj.js";import"./query-CzSBusdE.js";import"./Input-Bmjprhie.js";import"./ResponsivePopoverCommon.css-6c8XaA5C.js";import"./ValueStateMessage.css-Bh1E9Ghj.js";import"./Suggestions.css-BTwMp3YW.js";import"./appointment-2-D0ZvcBaK.js";import"./ListItemStandard-Ccu5KVL2.js";import"./slim-arrow-left-DMGLBuXY.js";import"./Calendar-xXeccd7f.js";import"./InvisibleMessage-CbPZDP3-.js";import"./index-DJcIUy6q.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
