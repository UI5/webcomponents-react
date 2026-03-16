import{j as e}from"./iframe-B9oS8Tdw.js";import{useMDXComponents as s}from"./index-DBcwplNT.js";import{M as m,C as o}from"./blocks-n99WgqUD.js";import"./Tag-C4hdjWJC.js";import"./index-Bpds4hIG.js";import{C as p}from"./ControlsWithNote-CU7GlRfQ.js";import{D as l}from"./DocsHeader-D3xSEYm1.js";import{F as d}from"./Footer-B2MFyv0P.js";import"./CommandsAndQueries-NcZGCQIw.js";import"./PageNotFound-CdK5m3jv.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-B83KI51c.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BlcYwQMc.js";import"./sys-enter-2-DdkiI-3L.js";import"./alert-D212h0_R.js";import"./index-BYYicg2U.js";import"./index-0NZf9e3S.js";import"./Link-BttQiJAm.js";import"./copy-C9Ot4HgH.js";import"./copy-Bqdwh9J4.js";import"./GitHub-Mark-B_hr1EaH.js";import"./TableOfContent-D0gNO-3P.js";import"./index-C2K37CCg.js";import"./index-DzuQRrNG.js";import"./index-MP9MDZQa.js";import"./index-CIPzfYgd.js";import"./index-XdY2VQGh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CKo2xI1N.js";import"./addCustomCSSWithScoping-BjXuQDKZ.js";import"./Illustrations-Hb5RsbMM.js";import"./i18n-defaults-CFWtSmu6.js";import"./Gregorian-o0kEIL9D.js";import"./getCachedLocaleDataInstance-BHwE231R.js";import"./query-CzSBusdE.js";import"./Input-DExRg9sG.js";import"./ResponsivePopoverCommon.css-B86z_YN9.js";import"./ValueStateMessage.css-ByKDah8f.js";import"./Suggestions.css-D-ufL02N.js";import"./appointment-2-BDPRRtHt.js";import"./ListItemStandard-BgNSnN8f.js";import"./slim-arrow-left-BW7j3SEb.js";import"./Calendar-BBZlr6yO.js";import"./InvisibleMessage-CNfLarpT.js";import"./index-De1v9t9O.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
