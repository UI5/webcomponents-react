import{j as e}from"./iframe-C9GC-4U4.js";import{useMDXComponents as s}from"./index-vmj4hVH3.js";import{M as m,C as o}from"./blocks-B1Qu1Zwa.js";import"./Tag-C_vOYGvY.js";import"./index-NAfB8FFO.js";import{C as l}from"./ControlsWithNote-ATU_orzz.js";import{D as p}from"./DocsHeader-DFLUJaSB.js";import{F as d}from"./CommandsAndQueries-DYyMzrOI.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CyDo44Zp.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cj8yu0bT.js";import"./sys-enter-2-pae_51W8.js";import"./alert-CNeVkGHK.js";import"./index-Bas8y3YG.js";import"./index-BNt_KmI_.js";import"./Link-DZICkDEv.js";import"./copy-DPSz1a-s.js";import"./copy-Bj7tGZK9.js";import"./GitHub-Mark-CUNy3k7i.js";import"./TableOfContent-CiwDTzv8.js";import"./index-f0Iqf0o1.js";import"./index-B091rt76.js";import"./index--mOIC-D9.js";import"./index-BpGBt1Ec.js";import"./index-CN9xEViq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CrDmJKcm.js";import"./addCustomCSSWithScoping-C3bBYzrj.js";import"./Gregorian-Cehxb6Wc.js";import"./query-CzSBusdE.js";import"./Input-D8yfvMY_.js";import"./ResponsivePopoverCommon.css-Dfo8GNgL.js";import"./ValueStateMessage.css-C33VG2yg.js";import"./Suggestions.css-BQ5GC3G8.js";import"./appointment-2-DOhnc0Ya.js";import"./ListItemStandard-CKJzwN5g.js";import"./slim-arrow-left-QYdi-qQ7.js";import"./Calendar-C5am6277.js";import"./InvisibleMessage-CG4h93_f.js";import"./index-7V7-Zld3.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
