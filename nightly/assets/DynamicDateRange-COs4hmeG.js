import{j as e}from"./iframe-DwhXZ5O1.js";import{useMDXComponents as s}from"./index-Dr45Q_rW.js";import{M as m,C as o}from"./blocks-EKNE_kOu.js";import"./Tag-CK1DTCaY.js";import"./index-C0PXwN3M.js";import{C as l}from"./ControlsWithNote-CSn4DPAH.js";import{D as p}from"./DocsHeader-BRx7RPE6.js";import{F as d}from"./CommandsAndQueries-CZ-0KT78.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-O9G7FY2G.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BtytWan6.js";import"./sys-enter-2-PzhKRuDm.js";import"./alert-Ul17j7cb.js";import"./index-DzVbmGXs.js";import"./index-BwctDZ8k.js";import"./Link-jbv8jxOr.js";import"./copy-CZT2prev.js";import"./copy-CMcdSlV7.js";import"./GitHub-Mark-vT3R4NCR.js";import"./TableOfContent-VIGMqgxX.js";import"./index-C5LjiSCx.js";import"./index-DsUvOdfw.js";import"./index-D0dcM15D.js";import"./index-EBvmFTXF.js";import"./index-CczjdlqU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CjLi0LGT.js";import"./addCustomCSSWithScoping-BuPMXfqj.js";import"./Gregorian-BygFLbli.js";import"./query-CzSBusdE.js";import"./Input-BVBpS4hN.js";import"./ResponsivePopoverCommon.css-D9EhSfWF.js";import"./ValueStateMessage.css-DKKJr_ad.js";import"./Suggestions.css-5lOsSJat.js";import"./appointment-2-BGD1epHp.js";import"./ListItemStandard-F-hxCo2t.js";import"./slim-arrow-left-CQwgfFZ0.js";import"./Calendar-BfqbsGm4.js";import"./InvisibleMessage-CpREcibi.js";import"./index-hE-oQ1Oe.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
