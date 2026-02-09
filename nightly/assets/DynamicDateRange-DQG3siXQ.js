import{j as e}from"./iframe-gZNO6M5z.js";import{useMDXComponents as s}from"./index-C9S1zRdY.js";import{M as m,C as o}from"./blocks-bGe4ZsEp.js";import"./Tag-B4G2Y0SL.js";import"./index-27nnQHPg.js";import{C as l}from"./ControlsWithNote-BnfP3qpY.js";import{D as p}from"./DocsHeader-qCHWE_r0.js";import{F as d}from"./CommandsAndQueries-B3SYrvAS.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-D7gTUQX_.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DLCOf7nz.js";import"./sys-enter-2-BCk8zcst.js";import"./alert-Dzej_rV2.js";import"./index-CDlXZiAa.js";import"./index-CaC9RK_F.js";import"./Link-Vq1QqGjH.js";import"./copy--H7pV52z.js";import"./copy-BVrBwFXj.js";import"./GitHub-Mark-Wnu7OIOt.js";import"./TableOfContent-5--z1odT.js";import"./index-BF59Vd9o.js";import"./index-B0r-mBm2.js";import"./index-DGMrxJej.js";import"./index-Cp6HJT54.js";import"./index-BefwTBAQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CU06ey2h.js";import"./addCustomCSSWithScoping-BZ00kVb8.js";import"./Gregorian-OzTdowaP.js";import"./getCachedLocaleDataInstance-DbmXZ6xG.js";import"./query-CzSBusdE.js";import"./Input-H67wDs5U.js";import"./ResponsivePopoverCommon.css-CdbcNfyO.js";import"./ValueStateMessage.css-Df8ATcbI.js";import"./Suggestions.css-C1kePIyx.js";import"./appointment-2-BNw4l5iF.js";import"./ListItemStandard-Cy6aCxAY.js";import"./slim-arrow-left-C652zVsp.js";import"./Calendar-BEJ7E-uc.js";import"./InvisibleMessage-Bl5nX4CD.js";import"./index-BbtWKEmY.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
