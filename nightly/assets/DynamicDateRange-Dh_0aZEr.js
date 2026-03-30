import{j as e}from"./iframe-Dr24b1_2.js";import{u as s,M as m,C as o}from"./blocks-DOkdIKLK.js";import"./Tag-BIxdINB7.js";import"./index-CL-oiXYR.js";import{C as p}from"./ControlsWithNote-BXcQcfnL.js";import{D as l}from"./DocsHeader-9y2YWA-s.js";import{F as d}from"./Footer-B2LKGocf.js";import"./CommandsAndQueries-D2RSxAeU.js";import"./PageNotFound-t4KH-Yk6.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BXAdkd_S.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C20uFQS0.js";import"./sys-enter-2-CQd_0MF7.js";import"./alert-B9PmGrag.js";import"./index-DrqpZzSV.js";import"./index-VF4msgJe.js";import"./Link-CG4ImuUx.js";import"./copy-zEtP8ZOb.js";import"./copy-D1SgAW06.js";import"./GitHub-Mark-BVwUWF2c.js";import"./TableOfContent-CTShD90n.js";import"./index-DcUuq1aq.js";import"./index-CjU6u75C.js";import"./index-_maGeclj.js";import"./index-aTzn3I1m.js";import"./index-B_PGO6aF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dh4aGlp7.js";import"./addCustomCSSWithScoping-BCzlWLsZ.js";import"./Illustrations-Dt9P8lxH.js";import"./i18n-defaults-CFWtSmu6.js";import"./Gregorian-DW7EnLop.js";import"./FormatUtils-DCOCtcHf.js";import"./query-CzSBusdE.js";import"./Input-irtd9wft.js";import"./ResponsivePopoverCommon.css-YJ26BxS_.js";import"./ValueStateMessage.css-BS498yF4.js";import"./Suggestions.css-DByIneIP.js";import"./appointment-2-P9eOkuPI.js";import"./ListItemStandard-B4U2FtO3.js";import"./slim-arrow-left-D7QJRdkl.js";import"./Calendar-DaVqoSJJ.js";import"./InvisibleMessage-gZ-HYpyf.js";import"./index-BY-GjMmR.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
`,e.jsx(l,{of:r}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(p,{of:a}),`
`,e.jsx(t.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(t.h3,{id:"value-change",children:"Value Change"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(t.h4,{id:"code",children:"Code"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`function DynamicDateRangeComponent() {
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
`,e.jsx(d,{})]})}function oe(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{oe as default};
