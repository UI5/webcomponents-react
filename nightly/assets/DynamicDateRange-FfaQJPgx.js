import{j as e}from"./iframe-B1ai2N1H.js";import{useMDXComponents as s}from"./index-QfN2DAp7.js";import{M as m,C as o}from"./blocks-B9fqlxEZ.js";import"./Tag-EPgIaOhk.js";import"./index-BtwVlylG.js";import{C as l}from"./ControlsWithNote-l4CFIpst.js";import{D as p}from"./DocsHeader-v6j4i6Qs.js";import{F as d}from"./CommandsAndQueries-DatNYL2t.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DU6OiNIN.js";import"./preload-helper-PPVm8Dsz.js";import"./information-qjJpsO9c.js";import"./sys-enter-2-DLuIUMMQ.js";import"./alert-DxSQeXz_.js";import"./index-BZxParGj.js";import"./index-B8JztijY.js";import"./Link-DxXALuG4.js";import"./copy-DK9bNb8P.js";import"./copy-BJY5YA9D.js";import"./GitHub-Mark-BccOfZ-s.js";import"./TableOfContent-BuogqNJV.js";import"./index-DIMi93Lv.js";import"./index-BqK1QrYY.js";import"./index-BD5BVNKc.js";import"./index-Dq21p-7K.js";import"./index-BL80uiBy.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C3b7w9-j.js";import"./addCustomCSSWithScoping-BigzftYf.js";import"./Gregorian-CJ785mS0.js";import"./query-CzSBusdE.js";import"./Input-CCHdc6OX.js";import"./ResponsivePopoverCommon.css-_wb5Prd4.js";import"./ValueStateMessage.css-QQOrZXwg.js";import"./Suggestions.css-ya0SvWRa.js";import"./appointment-2-CQWU2PPh.js";import"./ListItemStandard-1Y3dmb5L.js";import"./slim-arrow-left-CpuH8JPy.js";import"./Calendar-DkHAPUy3.js";import"./InvisibleMessage-B9fg8eZE.js";import"./index-Bs-IgX_t.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
