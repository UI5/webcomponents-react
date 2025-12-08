import{j as e}from"./iframe-D5yYeuyx.js";import{useMDXComponents as s}from"./index-OOr887th.js";import{M as m,C as o}from"./blocks-BwZUgw5J.js";import"./Tag-BZtJl-N7.js";import"./index-DJODyOkI.js";import{C as l}from"./ControlsWithNote-Dhu05JtX.js";import{D as p}from"./DocsHeader-sLoGcPV0.js";import{F as d}from"./CommandsAndQueries-CJKRIq4o.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-hkitJJbs.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CqfzA4ZI.js";import"./sys-enter-2-Cgd8Rk78.js";import"./alert-uMczVQtd.js";import"./index-pGOyFusy.js";import"./index-BMwlOPBB.js";import"./Link-DSfaPzX5.js";import"./copy-lqBg0hMZ.js";import"./copy-BbBddowJ.js";import"./GitHub-Mark-BlwYDJaN.js";import"./TableOfContent-CQ1XpZMC.js";import"./index-Cu6PwiO-.js";import"./index-CWkadQ1i.js";import"./index-BiamOLpW.js";import"./index-n-gjro57.js";import"./index-DFcCzRoG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-IcjKSza1.js";import"./addCustomCSSWithScoping-DupGCqhX.js";import"./Gregorian-DNBcmdd0.js";import"./query-CzSBusdE.js";import"./Input-CRG5JTiB.js";import"./ResponsivePopoverCommon.css-DosOvkrc.js";import"./ValueStateMessage.css-CmY2G9nX.js";import"./Suggestions.css-Cc7CIEcc.js";import"./appointment-2-nRanb4Ue.js";import"./ListItemStandard-CXdrrYCn.js";import"./slim-arrow-left-BoVC2IXx.js";import"./Calendar-CCQtsX4A.js";import"./InvisibleMessage-Cl3WTIpJ.js";import"./index-CdNe_oTn.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
