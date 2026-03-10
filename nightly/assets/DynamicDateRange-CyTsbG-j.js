import{j as e}from"./iframe-xWXly7Ei.js";import{useMDXComponents as s}from"./index-BkV3w5d0.js";import{M as m,C as o}from"./blocks-BK-gEy5G.js";import"./Tag-C8IzARdb.js";import"./index-BakXc7t8.js";import{C as p}from"./ControlsWithNote-D5Ju2oVJ.js";import{D as l}from"./DocsHeader-DDBJHyRy.js";import{F as d}from"./Footer-CjsfyNRg.js";import"./CommandsAndQueries-cQGlKyLD.js";import"./PageNotFound-BQRcUr7m.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-C9sMnTKp.js";import"./preload-helper-PPVm8Dsz.js";import"./information-3IM7ZiM-.js";import"./sys-enter-2-Cbpg-U0q.js";import"./alert-gk5TVJR_.js";import"./index-CbssaC5W.js";import"./index-BcAVbI4W.js";import"./Link-Dpfp2JXt.js";import"./copy-BwKzjgzz.js";import"./copy-DY9Bhohc.js";import"./GitHub-Mark-DQ9JT-4s.js";import"./TableOfContent-DhSfDnTc.js";import"./index-D8yJKpQG.js";import"./index-P_dJFF81.js";import"./index-BTgCG8OL.js";import"./index-B5aWf-WN.js";import"./index-1-wUIWqO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B64w7jYZ.js";import"./addCustomCSSWithScoping-Dr_4npAd.js";import"./Illustrations-VX2U6euS.js";import"./i18n-defaults-CFWtSmu6.js";import"./Gregorian-T4WCp3Sf.js";import"./getCachedLocaleDataInstance-DSEHnUxs.js";import"./query-CzSBusdE.js";import"./Input-CDjEum2n.js";import"./ResponsivePopoverCommon.css-8bAtFiUD.js";import"./ValueStateMessage.css-BYQRLYZ0.js";import"./Suggestions.css-CNN403-Y.js";import"./appointment-2-D7OqZOK_.js";import"./ListItemStandard-iey8o9JN.js";import"./slim-arrow-left-CkjWDUi6.js";import"./Calendar-QyKZDD0O.js";import"./InvisibleMessage-CC4MNG7R.js";import"./index-Dk8WJ0QW.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
