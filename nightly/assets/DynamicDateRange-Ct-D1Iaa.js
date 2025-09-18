import{j as e}from"./iframe-DTHPT7iA.js";import{useMDXComponents as s}from"./index-74UlZZJj.js";import{M as m,C as o}from"./blocks-BEm3tjb6.js";import"./Tag-CJADm4_M.js";import"./index-C3HgU9VG.js";import{C as l}from"./ControlsWithNote-BGcGZ2Tw.js";import{D as p}from"./DocsHeader-DrsGZt_2.js";import{F as d}from"./CommandsAndQueries-BD3jeLaK.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-C0e4DJtZ.js";import"./preload-helper-D9Z9MdNV.js";import"./information-DoW4IMVD.js";import"./sys-enter-2-ByI7nkKd.js";import"./alert-COIhFOls.js";import"./index-t5gVEC_D.js";import"./index-C6-xBNa3.js";import"./Link-BbcZTKOL.js";import"./copy-B5eacD66.js";import"./copy-mCNoL2s6.js";import"./GitHub-Mark-BX4sI9ta.js";import"./TableOfContent-DcI8r7Mg.js";import"./index-DwOvcXXK.js";import"./index-Cj0CYz_p.js";import"./addCustomCSSWithScoping-DApCUjf-.js";import"./index-D_aw5Z2j.js";import"./index-dqQUzE09.js";import"./index-ig2sn1RW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BENd75qS.js";import"./Gregorian-CG5V6xSZ.js";import"./query-CzSBusdE.js";import"./Input-D-TFuZ-3.js";import"./ResponsivePopoverCommon.css-D92Yx7wX.js";import"./ValueStateMessage.css-CYayy6u-.js";import"./Suggestions.css-BicA_aUI.js";import"./appointment-2-Bq-g3tjv.js";import"./ListItemStandard-CIUna04V.js";import"./slim-arrow-left-Bx99pQYK.js";import"./Calendar-Br2ZbrYZ.js";import"./InvisibleMessage-CQmpcPbi.js";import"./index-QG1Rc5Hm.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
