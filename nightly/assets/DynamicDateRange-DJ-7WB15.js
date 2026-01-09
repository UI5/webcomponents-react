import{j as e}from"./iframe-Cofg3NYG.js";import{useMDXComponents as s}from"./index-IvWpiXeJ.js";import{M as m,C as o}from"./blocks-2ghgTj-P.js";import"./Tag-BxZYpQJm.js";import"./index-DSsCdZng.js";import{C as l}from"./ControlsWithNote-CBnXwzaw.js";import{D as p}from"./DocsHeader-uOegTBxM.js";import{F as d}from"./CommandsAndQueries-84NNvrTK.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-Bjg83ZPs.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BJciHBvQ.js";import"./sys-enter-2-BCByF-gd.js";import"./alert-bPEScLdE.js";import"./index-DsO0qxxT.js";import"./index-CBua_waR.js";import"./Link-CQPXWWzt.js";import"./copy-D8x3RVfP.js";import"./copy-CvrT2nje.js";import"./GitHub-Mark-Dxo1t29W.js";import"./TableOfContent-Critm5DJ.js";import"./index-CzRl8rAY.js";import"./index-CuRMS7av.js";import"./index-DF1YQmtO.js";import"./index-BRqSe85k.js";import"./index-BLGq_g5y.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BCAV-AOe.js";import"./addCustomCSSWithScoping-BkkC1l0R.js";import"./Gregorian-B0_7YNz9.js";import"./query-CzSBusdE.js";import"./Input-B-vnnKWa.js";import"./ResponsivePopoverCommon.css-9aKfGdr3.js";import"./ValueStateMessage.css-BoHhoqcx.js";import"./Suggestions.css-D5uqg1qj.js";import"./appointment-2-Cy9RGU_S.js";import"./ListItemStandard-DMSXl_i-.js";import"./slim-arrow-left-C_ji_1zJ.js";import"./Calendar-2CPiPT-x.js";import"./InvisibleMessage-DjTJM9Zt.js";import"./index-CW-WMzJS.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
