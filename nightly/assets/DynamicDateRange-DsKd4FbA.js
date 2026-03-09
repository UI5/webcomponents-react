import{j as e}from"./iframe-CzTCZe7v.js";import{useMDXComponents as s}from"./index-CDGFt6A1.js";import{M as m,C as o}from"./blocks-DeBlAQEU.js";import"./Tag-Czdm_FZb.js";import"./index-C0tHrsgM.js";import{C as p}from"./ControlsWithNote-CDLlK38r.js";import{D as l}from"./DocsHeader-BMnK1C50.js";import{F as d}from"./Footer-DxyUJb9o.js";import"./CommandsAndQueries-DvEFwabB.js";import"./PageNotFound-BAD2GAcl.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-D3i7eJ51.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bqvi10T6.js";import"./sys-enter-2-DyCO0gh_.js";import"./alert-9P0VyDJW.js";import"./index-CXe4MOnZ.js";import"./index-DIk2IhoZ.js";import"./Link-CZjSyYly.js";import"./copy-CNRutDQV.js";import"./copy-BOjVvS6l.js";import"./GitHub-Mark-BjX2VLOB.js";import"./TableOfContent-Bn2gWDi_.js";import"./index-B7_ymrud.js";import"./index-wip9afZ2.js";import"./index-DKruw7SF.js";import"./index-DzASyxpH.js";import"./index-C8dlP9nE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DPTQrRIc.js";import"./addCustomCSSWithScoping-Cq2MgCDz.js";import"./Illustrations-D7TiwfCu.js";import"./i18n-defaults-CFWtSmu6.js";import"./Gregorian-BEVgFCQA.js";import"./getCachedLocaleDataInstance-3osMxAxO.js";import"./query-CzSBusdE.js";import"./Input-uQUrQiez.js";import"./ResponsivePopoverCommon.css-DFzVVW-E.js";import"./ValueStateMessage.css-Dmls9BNj.js";import"./Suggestions.css-C-LfaUWA.js";import"./appointment-2-qYbjn5xp.js";import"./ListItemStandard-CirnuoCn.js";import"./slim-arrow-left-ZuC7LZH3.js";import"./Calendar-sQSrZTjO.js";import"./InvisibleMessage-hOloPGzW.js";import"./index-DkbCRIZN.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
