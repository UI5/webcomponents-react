import{j as e}from"./iframe-BxNMYsVp.js";import{useMDXComponents as s}from"./index-CEL_Mrqn.js";import{M as m,C as o}from"./blocks-CLtQlidJ.js";import"./Tag-CYWTluzA.js";import"./index-22bYdtLv.js";import{C as l}from"./ControlsWithNote-Cla18jxh.js";import{D as p}from"./DocsHeader-CXbeVpwS.js";import{F as d}from"./CommandsAndQueries-CKT9ys9T.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DP9fyvrv.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BR3I6cVC.js";import"./sys-enter-2-CKo5vDlS.js";import"./alert-BEt7QhXe.js";import"./index-CVOVci2N.js";import"./index-DKLNqf9R.js";import"./Link-DZt8_sp9.js";import"./copy-DG3unAFz.js";import"./copy-DFdPinc0.js";import"./GitHub-Mark-BP_KxcKK.js";import"./TableOfContent-BSn9g2hl.js";import"./index-lYnXb9lV.js";import"./index-jhZZ-U6H.js";import"./index-CKGFui_U.js";import"./index-BQbr2ZNY.js";import"./index-7hnHpQRn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CG_dGq_W.js";import"./addCustomCSSWithScoping-CJX4iiEH.js";import"./Gregorian-l4aXaWHq.js";import"./getCachedLocaleDataInstance-DdAnpvBi.js";import"./query-CzSBusdE.js";import"./Input-D2CSF-Y6.js";import"./ResponsivePopoverCommon.css-C7cuV_Jj.js";import"./ValueStateMessage.css-BFQUPHA9.js";import"./Suggestions.css-BBJox0-v.js";import"./appointment-2-D5S4uS8R.js";import"./ListItemStandard-8uRqoZkS.js";import"./slim-arrow-left-QmXsuOG2.js";import"./Calendar-DoP5omdh.js";import"./InvisibleMessage-DndzKolo.js";import"./index-oNcz4-fo.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
