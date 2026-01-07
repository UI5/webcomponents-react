import{j as e}from"./iframe-Lvl9yzry.js";import{useMDXComponents as s}from"./index-DtnS30Y7.js";import{M as m,C as o}from"./blocks-DE-pS5pt.js";import"./Tag-Ntj2WoJZ.js";import"./index-Z8W5RiOf.js";import{C as l}from"./ControlsWithNote-DJfCLSui.js";import{D as p}from"./DocsHeader-IVRgw8H5.js";import{F as d}from"./CommandsAndQueries-r8pG5JEL.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CIL_hoyJ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BnCFwrSd.js";import"./sys-enter-2-Ct5ni-AG.js";import"./alert-1cuYh9Xz.js";import"./index-ilzt6YAk.js";import"./index-BVP3-7sd.js";import"./Link-BJMT4XUv.js";import"./copy-D13JUBkt.js";import"./copy-BqWuakZq.js";import"./GitHub-Mark-BAeP05c2.js";import"./TableOfContent-DTkppLuE.js";import"./index-XWeRb-Rp.js";import"./index-NhuzyApy.js";import"./index-CtS6x3f8.js";import"./index-CNh112J7.js";import"./index-BNlSxjfl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-VTbkLDop.js";import"./addCustomCSSWithScoping-aRHntRG4.js";import"./Gregorian-BM5HQL1u.js";import"./query-CzSBusdE.js";import"./Input-DulPzTQS.js";import"./ResponsivePopoverCommon.css-BPkzc8tz.js";import"./ValueStateMessage.css-DkT9mXdo.js";import"./Suggestions.css-D2giGZP3.js";import"./appointment-2-BvOMtvq8.js";import"./ListItemStandard-Cugb1xkB.js";import"./slim-arrow-left-jcX3KJfC.js";import"./Calendar-CC-VAZzs.js";import"./InvisibleMessage-CMJ7wXZy.js";import"./index-CH4WmmUP.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
