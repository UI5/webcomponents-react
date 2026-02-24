import{j as e}from"./iframe-CSs3GcCz.js";import{useMDXComponents as s}from"./index-1VYUEsB4.js";import{M as m,C as o}from"./blocks-DlOiJG9w.js";import"./Tag-tq7bvH7x.js";import"./index-Bv5UQAtB.js";import{C as l}from"./ControlsWithNote-Cd98Jtki.js";import{D as p}from"./DocsHeader-uVl9v1iI.js";import{F as d}from"./CommandsAndQueries-Dzepq0rT.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DoKepmOY.js";import"./preload-helper-PPVm8Dsz.js";import"./information-AyutgqL-.js";import"./sys-enter-2-Cfi5ZTIT.js";import"./alert-CpO7ww38.js";import"./index-IS643aT1.js";import"./index-kEy_zqDf.js";import"./Link-Bs0GSE9o.js";import"./copy-QZM6pPxE.js";import"./copy-A0b4Giju.js";import"./GitHub-Mark-C9p6OhuO.js";import"./TableOfContent-D_6sZ66R.js";import"./index-jfbseB2e.js";import"./index-C2PP5dg7.js";import"./index-CNpYG1J4.js";import"./index-C-kYIaXe.js";import"./index-BXC6vCLS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DoJGLxs9.js";import"./addCustomCSSWithScoping-DvKIlldN.js";import"./Gregorian-BSX6wRDo.js";import"./getCachedLocaleDataInstance-Bm7F1_Z3.js";import"./query-CzSBusdE.js";import"./Input-DdGahQ8p.js";import"./ResponsivePopoverCommon.css-B6aP4EWz.js";import"./ValueStateMessage.css-rStVzh3o.js";import"./Suggestions.css-DVjfbfM-.js";import"./appointment-2-D-gk5_w3.js";import"./ListItemStandard-0uLaXWUR.js";import"./slim-arrow-left-DEcl3EQB.js";import"./Calendar-CrjB5eFp.js";import"./InvisibleMessage-BcP-U2lm.js";import"./index-C6Gtit63.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
