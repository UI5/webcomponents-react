import{j as e}from"./iframe-CfR5iN1B.js";import{useMDXComponents as s}from"./index-WDvIe_cH.js";import{M as m,C as o}from"./blocks-CfXjvcLO.js";import"./Tag-BTK-zFQw.js";import"./index-DekWkQZr.js";import{C as l}from"./ControlsWithNote-fyp4mFm_.js";import{D as p}from"./DocsHeader-2XMWKy1o.js";import{F as d}from"./CommandsAndQueries-Cn01gt7T.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-Z83h56MO.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DTEN63Fk.js";import"./sys-enter-2-DpY8LIaY.js";import"./alert-C8yZ5BF8.js";import"./index-DImzYd9b.js";import"./index-Dow-CDJC.js";import"./Link-DJBSV0Mu.js";import"./copy-Yrnd-QKj.js";import"./copy-CaX7ddbO.js";import"./GitHub-Mark-spj1qVKo.js";import"./TableOfContent-WJhDVAFL.js";import"./index-DqPScGjh.js";import"./index-s45nBPnw.js";import"./index-3b3tgeGr.js";import"./index-BlanoaUa.js";import"./index-B5r1lcgY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BSc69HNM.js";import"./addCustomCSSWithScoping-Bvh6JLqq.js";import"./Gregorian-C8freH7T.js";import"./query-CzSBusdE.js";import"./Input-He0T25IE.js";import"./ResponsivePopoverCommon.css-BviY2BN2.js";import"./ValueStateMessage.css-CnczpN40.js";import"./Suggestions.css-CQmh9058.js";import"./appointment-2-DjswESz7.js";import"./ListItemStandard-T7lCWKjJ.js";import"./slim-arrow-left-FXp1mFSs.js";import"./Calendar-ChZZcfPx.js";import"./InvisibleMessage-DezLmlSH.js";import"./index-BgyEmt0S.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
