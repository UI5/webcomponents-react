import{j as e}from"./iframe-DfTuu2Qs.js";import{useMDXComponents as s}from"./index-tu9Knfll.js";import{M as m,C as o}from"./blocks-DwvFSYgT.js";import"./Tag-a-ykqmZl.js";import"./index-D59W5J0R.js";import{C as l}from"./ControlsWithNote-w7aNvimh.js";import{D as p}from"./DocsHeader-COdzN9GK.js";import{F as d}from"./CommandsAndQueries-CbObYkDi.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-Dg3o_m1z.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DFuUDpiC.js";import"./sys-enter-2-B3GhyP7w.js";import"./alert-CmUExS0E.js";import"./index-D-5EknuX.js";import"./index-upgMd0Ps.js";import"./Link-DQEzecZX.js";import"./copy-Bd7XhTys.js";import"./copy-CAppfZ8d.js";import"./GitHub-Mark-D0XkxXbP.js";import"./TableOfContent-DgWjSnAE.js";import"./index-CEqB_Mrf.js";import"./index-4cmdIwXv.js";import"./index-DV0Q9niH.js";import"./index-CHJ4eeD3.js";import"./index-B1cc6DOE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BlYlCK6x.js";import"./addCustomCSSWithScoping-l0p7E_oS.js";import"./Gregorian-BACOHNfz.js";import"./query-CzSBusdE.js";import"./Input-B76lxtdv.js";import"./ResponsivePopoverCommon.css-BP9K7x6e.js";import"./ValueStateMessage.css-TCHVXLEw.js";import"./Suggestions.css-Pfvf1GJg.js";import"./appointment-2-BVJRXj-9.js";import"./ListItemStandard-CshbuJzo.js";import"./slim-arrow-left-BV02_GL3.js";import"./Calendar-BE7pkZbS.js";import"./InvisibleMessage-CNnUIwgG.js";import"./index-BSnTmES7.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
