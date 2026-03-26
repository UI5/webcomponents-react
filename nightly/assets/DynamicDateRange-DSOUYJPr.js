import{j as e}from"./iframe-CN9FvYjd.js";import{useMDXComponents as s}from"./index-CHfbFhXP.js";import{M as m,C as o}from"./blocks-BRVkHd00.js";import"./Tag-B_RTkJ1G.js";import"./index-CjC-3bum.js";import{C as p}from"./ControlsWithNote-BnC8IQEn.js";import{D as l}from"./DocsHeader-DBc1pcw5.js";import{F as d}from"./Footer-Dl9losBY.js";import"./CommandsAndQueries-BOIWtnt6.js";import"./PageNotFound-YEpHz0H_.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-D7kScf9A.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DYxN2cHX.js";import"./sys-enter-2-Cmiit89U.js";import"./alert-DCHWGnHk.js";import"./index-DHHIsfuO.js";import"./index-BFwC892N.js";import"./Link-Wi8OmUZE.js";import"./copy-DAuylYSV.js";import"./copy-CqLNgdQ9.js";import"./GitHub-Mark-DjfXo-cB.js";import"./TableOfContent-DIcVYEHe.js";import"./index-ZHKOt3Ry.js";import"./index-BbQq-ZOq.js";import"./index-LGty0-Ee.js";import"./index-qceCjzn0.js";import"./index-CdwqdKec.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-tlJUacgC.js";import"./addCustomCSSWithScoping-DzgJsuLH.js";import"./Illustrations-SwtMVqU-.js";import"./i18n-defaults-CFWtSmu6.js";import"./Gregorian-CrqBno4L.js";import"./FormatUtils-C6id-YY_.js";import"./query-CzSBusdE.js";import"./Input--XH3wXXZ.js";import"./ResponsivePopoverCommon.css-DFlXT8Yt.js";import"./ValueStateMessage.css-DaIbDu_s.js";import"./Suggestions.css-C1rlY3G7.js";import"./appointment-2-BNZldfVY.js";import"./ListItemStandard-Bpw8kHSv.js";import"./slim-arrow-left-BQ7JOa5D.js";import"./Calendar-DKc-4N81.js";import"./InvisibleMessage-U36VH6c8.js";import"./index-C9G9oavp.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
