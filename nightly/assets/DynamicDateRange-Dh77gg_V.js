import{j as e}from"./iframe-Caxtdkba.js";import{useMDXComponents as s}from"./index-DHHkTN_-.js";import{M as m,C as o}from"./blocks-DEPL7JMW.js";import"./Tag-Dd11nsEW.js";import"./index-DhW1lu1C.js";import{C as l}from"./ControlsWithNote-mHYe6I8P.js";import{D as p}from"./DocsHeader-CAGkcvoR.js";import{F as d}from"./CommandsAndQueries-BOspo6oR.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-B0VCdMTv.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DxEPh37b.js";import"./sys-enter-2-DZWaIs6H.js";import"./alert-CkjRTT5V.js";import"./index-BqfFpMrh.js";import"./index-Cqh1dpEf.js";import"./Link-Chm6Epcv.js";import"./copy-PBhQp6J5.js";import"./copy-Cm-UF3e8.js";import"./GitHub-Mark-CPWqcK3P.js";import"./TableOfContent-COyFmIK8.js";import"./index-CKnt97hC.js";import"./index-BxIjhTnW.js";import"./index-tXGb4skN.js";import"./index-IuLzHbpC.js";import"./index-BgaBDTu4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-n5f_MbqF.js";import"./addCustomCSSWithScoping-kZmGLgIL.js";import"./Gregorian-D_qvd-_i.js";import"./query-CzSBusdE.js";import"./Input-CcsLtqg3.js";import"./ResponsivePopoverCommon.css-DeZjCLek.js";import"./ValueStateMessage.css-YrUrMqHL.js";import"./Suggestions.css-CoXO6GCu.js";import"./appointment-2-CBNDf-ii.js";import"./ListItemStandard-DqNCSywV.js";import"./slim-arrow-left-c3Zwq_qK.js";import"./Calendar-tPwESfQW.js";import"./InvisibleMessage-cd3uS02O.js";import"./index-BeI_-Pkx.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
