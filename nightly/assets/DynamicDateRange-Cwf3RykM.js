import{j as e}from"./iframe-DJVbwX9i.js";import{useMDXComponents as s}from"./index-BFT6aOv2.js";import{M as m,C as o}from"./blocks-Cc72oRCz.js";import"./Tag-BNmglB2v.js";import"./index-hobvar2O.js";import{C as p}from"./ControlsWithNote-BtK6o2uw.js";import{D as l}from"./DocsHeader-CNOctM-k.js";import{F as d}from"./Footer-DBSBdmEP.js";import"./CommandsAndQueries-B-krYIfz.js";import"./PageNotFound-BtEXsBVj.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BiVzdALx.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DINAeq89.js";import"./sys-enter-2-CB2kIbje.js";import"./alert-CG9JhWyD.js";import"./index-B61X8BMU.js";import"./index-BWAGkxsQ.js";import"./Link-Dg00UQRP.js";import"./copy-5-DY8dSb.js";import"./copy-CPWU3JMS.js";import"./GitHub-Mark-BUzo07Xq.js";import"./TableOfContent-CCRGkolO.js";import"./index-CRrLaMaU.js";import"./index-CZorzsLp.js";import"./index-JKJcUc-Y.js";import"./index-BYdF4q6P.js";import"./index-D08ymWvo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CeatdApf.js";import"./addCustomCSSWithScoping-UxNP_GOA.js";import"./Illustrations-DPWSckqd.js";import"./i18n-defaults-CFWtSmu6.js";import"./Gregorian-C7JuSS-X.js";import"./getCachedLocaleDataInstance-CJClUqeC.js";import"./query-CzSBusdE.js";import"./Input-C6tRsMHY.js";import"./ResponsivePopoverCommon.css-DMESD_7X.js";import"./ValueStateMessage.css-B32Fgepl.js";import"./Suggestions.css-DPjsY_xJ.js";import"./appointment-2-DQLh1Qbe.js";import"./ListItemStandard-Nks0FEPD.js";import"./slim-arrow-left-BzpKHUxK.js";import"./Calendar-K7l_qwws.js";import"./InvisibleMessage-CqYmaIC8.js";import"./index-DyE6LhaQ.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
`,e.jsx(d,{})]})}function re(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{re as default};
