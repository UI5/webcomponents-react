import{j as e}from"./iframe-CTc_pUME.js";import{useMDXComponents as s}from"./index-CbFOQhGC.js";import{M as m,C as o}from"./blocks-Bdab0qOx.js";import"./Tag-BJVcJF8V.js";import"./index-BmIFgcgy.js";import{C as l}from"./ControlsWithNote-Dwnr6XG-.js";import{D as p}from"./DocsHeader-DrJBvJ91.js";import{F as d}from"./CommandsAndQueries-BKl-Lehx.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CBWZZpx0.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BUnhqMn4.js";import"./sys-enter-2-DOV5JEOM.js";import"./alert-DylNOMF0.js";import"./index-6ELyezq3.js";import"./index-cPYEFV1s.js";import"./Link-CIXpUy3N.js";import"./copy-yveJai7r.js";import"./copy-CX-UstQv.js";import"./GitHub-Mark--cVCoHEO.js";import"./TableOfContent-sQi4Lj9M.js";import"./index-Z8jBBqBa.js";import"./index-C61H3I4w.js";import"./index-dZVrSoBW.js";import"./index-MjXDOENA.js";import"./index-CHi_LEvO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B7yiJaHj.js";import"./addCustomCSSWithScoping-Dc_j6Yzk.js";import"./Gregorian-DfbvSErB.js";import"./query-CzSBusdE.js";import"./Input-DwKwevQu.js";import"./ResponsivePopoverCommon.css-DVODeCs6.js";import"./ValueStateMessage.css-CEEhjmep.js";import"./Suggestions.css-D-Gi3AK0.js";import"./appointment-2-Di-Op4x4.js";import"./ListItemStandard-C3YrrMZt.js";import"./slim-arrow-left-RYhrTrFs.js";import"./Calendar-CoPp0nKz.js";import"./InvisibleMessage-sw3UNfwB.js";import"./index-BgNFH_bM.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
