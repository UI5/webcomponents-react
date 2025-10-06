import{j as e}from"./iframe-DFBm-DSq.js";import{useMDXComponents as s}from"./index-DN1lWEds.js";import{M as m,C as o}from"./blocks-B7zGvzyh.js";import"./Tag-CMC3yhYK.js";import"./index-i9Tuo-S4.js";import{C as l}from"./ControlsWithNote-BG5NIfsF.js";import{D as p}from"./DocsHeader-CUlKQN5C.js";import{F as d}from"./CommandsAndQueries-Dwesrog0.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-Cxcv5fhg.js";import"./preload-helper-PPVm8Dsz.js";import"./information-z2AwmlNQ.js";import"./sys-enter-2-DSpMbDS0.js";import"./alert-BRFe_Sc9.js";import"./index-BYzkCeld.js";import"./index-CEGh04ma.js";import"./Link-BlxVb8ea.js";import"./copy-BIsDO3Vh.js";import"./copy-BOgwG0pC.js";import"./GitHub-Mark-_RDBEP1q.js";import"./TableOfContent-BNkcj7N-.js";import"./index-CDCsv2ep.js";import"./index-DRIF-U0p.js";import"./index-s9mPNrYF.js";import"./index-B0ajYEze.js";import"./index-D-vZdY3z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqvN-tZt.js";import"./addCustomCSSWithScoping-DzzI1i6g.js";import"./Gregorian-DOt2wiZc.js";import"./query-CzSBusdE.js";import"./Input-DSVZUACP.js";import"./ResponsivePopoverCommon.css-CnMcrjsQ.js";import"./ValueStateMessage.css-BbtbR7Of.js";import"./Suggestions.css-DijJF9RT.js";import"./appointment-2-7j5_9Qi0.js";import"./ListItemStandard-DGWJdbo7.js";import"./slim-arrow-left-DzHn2R-j.js";import"./Calendar-B3Qf-8Dg.js";import"./InvisibleMessage-CWFUnfEF.js";import"./index-DEepbVcE.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
