import{j as e}from"./iframe-BF6vIVo6.js";import{useMDXComponents as s}from"./index-LfmOxbs8.js";import{M as m,C as o}from"./blocks-BEVYxzM4.js";import"./Tag-Bbrw4Mg6.js";import"./index-COzDMtK9.js";import{C as l}from"./ControlsWithNote-CW6StnRt.js";import{D as p}from"./DocsHeader-C_w2jjky.js";import{F as d}from"./CommandsAndQueries-BZWG0qBB.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DVSP9u5O.js";import"./preload-helper-PPVm8Dsz.js";import"./information-v6F873AP.js";import"./sys-enter-2-WuXn7rus.js";import"./alert-C89y0cfE.js";import"./index-Do8jjW18.js";import"./index-DdICQhrF.js";import"./Link-C3nR6kZV.js";import"./copy-CtLEypSk.js";import"./copy-BsYfEWuv.js";import"./GitHub-Mark-JjRId1WV.js";import"./TableOfContent-D6SS1QPi.js";import"./index-DdhWaCX8.js";import"./index-CTIQkpgO.js";import"./index-DoBDF59y.js";import"./index-B5sOe_-e.js";import"./index-CKX87Paa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BsUQb2cX.js";import"./addCustomCSSWithScoping-B22aBF7H.js";import"./Gregorian-CwgHF_pE.js";import"./query-CzSBusdE.js";import"./Input-DRowSby-.js";import"./ResponsivePopoverCommon.css-B-2GlP7R.js";import"./ValueStateMessage.css-BEO0_Z3X.js";import"./Suggestions.css-C2b5Aeiw.js";import"./appointment-2-T1zYbDcx.js";import"./ListItemStandard-6d4If0Ew.js";import"./slim-arrow-left-BiwJJPt_.js";import"./Calendar-434lefA5.js";import"./InvisibleMessage-Dk7GG3Kc.js";import"./index-CeiuQBAD.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
