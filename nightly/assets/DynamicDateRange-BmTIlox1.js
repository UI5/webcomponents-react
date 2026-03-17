import{j as e}from"./iframe-C_hHAafN.js";import{useMDXComponents as s}from"./index-D3HSzI5H.js";import{M as m,C as o}from"./blocks-DkbtP44I.js";import"./Tag-eVGHGbIg.js";import"./index-3QVLAy4g.js";import{C as p}from"./ControlsWithNote-6SvsGtkD.js";import{D as l}from"./DocsHeader-Bk_TsqI1.js";import{F as d}from"./Footer-Cs4jbAjg.js";import"./CommandsAndQueries-9eolN_GD.js";import"./PageNotFound-C7jxbIgP.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-swbEHqi9.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BzxR6BB4.js";import"./sys-enter-2-Bb8fTRXf.js";import"./alert-CfcbMAjf.js";import"./index-BmCCqQCC.js";import"./index-BKTg9IVY.js";import"./Link-SYOek4pb.js";import"./copy-B6dl0gLT.js";import"./copy-RggualJu.js";import"./GitHub-Mark-DN84urKt.js";import"./TableOfContent--xyEPkZT.js";import"./index-DDQ0aIRQ.js";import"./index-DaMaB5I7.js";import"./index-nRsHzHP6.js";import"./index-DqhVaTSX.js";import"./index-C7mqYyTc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DmUXk235.js";import"./addCustomCSSWithScoping-D9hLtcaz.js";import"./Illustrations-CNZ22cEs.js";import"./i18n-defaults-CFWtSmu6.js";import"./Gregorian-BDMMLlZe.js";import"./getCachedLocaleDataInstance-CSDsxy7R.js";import"./query-CzSBusdE.js";import"./Input-TGnF-6Wb.js";import"./ResponsivePopoverCommon.css-B3G2eYk9.js";import"./ValueStateMessage.css-CV4qc19-.js";import"./Suggestions.css-CHwCFLC2.js";import"./appointment-2-C57uV6rk.js";import"./ListItemStandard-66Kfx1Tu.js";import"./slim-arrow-left-DN-eF9WV.js";import"./Calendar-Bn5oGmZj.js";import"./InvisibleMessage-ufPFqwzr.js";import"./index-BF3n00U0.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
