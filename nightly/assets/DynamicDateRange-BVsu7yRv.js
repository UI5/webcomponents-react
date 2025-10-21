import{j as e}from"./iframe-pfqRYewB.js";import{useMDXComponents as s}from"./index-DxYcUkXM.js";import{M as m,C as o}from"./blocks-CN6sML6r.js";import"./Tag-DOr7yVDv.js";import"./index-TMKVCirT.js";import{C as l}from"./ControlsWithNote-1jH7cerp.js";import{D as p}from"./DocsHeader-C02JYCTh.js";import{F as d}from"./CommandsAndQueries-CBK4GytM.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-C2eSj8Za.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BrehxxGu.js";import"./sys-enter-2-CTsRx7VM.js";import"./alert-qaqpTU-O.js";import"./index-DQUabOTm.js";import"./index-DQ0pLIsd.js";import"./Link-C4McI5Wx.js";import"./copy-C6T5m5t-.js";import"./copy-0Cu3Y4If.js";import"./GitHub-Mark-DJ5zcdzH.js";import"./TableOfContent-C20Gax9P.js";import"./index-BOCv1nQg.js";import"./index-C87hBs3b.js";import"./index-D05B83RK.js";import"./index-5KySo-3G.js";import"./index-BkIEU9nM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BJxPXkiU.js";import"./addCustomCSSWithScoping-D2yzvGyj.js";import"./Gregorian-DzMI6BxL.js";import"./query-CzSBusdE.js";import"./Input-DFBmllhy.js";import"./ResponsivePopoverCommon.css-DZHwRQHx.js";import"./ValueStateMessage.css-CidmTEJw.js";import"./Suggestions.css-DAu3JF_J.js";import"./appointment-2-Au0CLCTf.js";import"./ListItemStandard-Cohus5KX.js";import"./slim-arrow-left-CJyeX0Iq.js";import"./Calendar-DcSdnOcr.js";import"./InvisibleMessage-DwveyP79.js";import"./index-BWkHdUbT.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
