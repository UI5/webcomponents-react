import{j as e}from"./iframe-BZdybOkV.js";import{useMDXComponents as s}from"./index-BK2w2T2j.js";import{M as m,C as o}from"./blocks-CP8RdzkU.js";import"./Tag-BzbxKur3.js";import"./index-DK3P8KDJ.js";import{C as l}from"./ControlsWithNote-N2Edy_L7.js";import{D as p}from"./DocsHeader-BhxEfJQ0.js";import{F as d}from"./CommandsAndQueries-6n7MF1sx.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CVbn44Ev.js";import"./preload-helper-PPVm8Dsz.js";import"./information-jzJbJB_1.js";import"./sys-enter-2-DNIkITIL.js";import"./alert-CQPwWPwe.js";import"./index-BZ_ngRjy.js";import"./index-S-6P9mRF.js";import"./Link-ko8YnVxU.js";import"./copy-CNB7hovH.js";import"./copy-CIp50y-g.js";import"./GitHub-Mark-DWF2R_nS.js";import"./TableOfContent-BXnsnagM.js";import"./index-BIP_3DrI.js";import"./index-QZaRYYY3.js";import"./index-DrYECb-G.js";import"./index-Ceagbcxz.js";import"./index-DEm1B2JB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-s2glcktZ.js";import"./addCustomCSSWithScoping-DEKm0mwm.js";import"./Gregorian-BLKueX6N.js";import"./query-CzSBusdE.js";import"./Input-YhMtZ58-.js";import"./ResponsivePopoverCommon.css-C6Zy80iY.js";import"./ValueStateMessage.css-CodrIykW.js";import"./Suggestions.css-DFz-TQwT.js";import"./appointment-2-auydDGV4.js";import"./ListItemStandard-BqswipPZ.js";import"./slim-arrow-left-BwsvRF99.js";import"./Calendar-DXt2cOpI.js";import"./InvisibleMessage-DKzjYfdj.js";import"./index-Dovy5LXr.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
