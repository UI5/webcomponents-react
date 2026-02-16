import{j as e}from"./iframe-e2ulr1yw.js";import{useMDXComponents as s}from"./index-PtYZPZtM.js";import{M as m,C as o}from"./blocks-Cdk7qnv2.js";import"./Tag-CbLqF2IE.js";import"./index-Eon1qDJA.js";import{C as l}from"./ControlsWithNote-C1zRYBYO.js";import{D as p}from"./DocsHeader-BgtU4XVD.js";import{F as d}from"./CommandsAndQueries-Do207XX8.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-VtS4h4nw.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BWwLhz3O.js";import"./sys-enter-2-gpB0Ga9p.js";import"./alert-DlKAiOO0.js";import"./index-BSw3xQau.js";import"./index-Cqf-Pfp_.js";import"./Link-CLFq5zdq.js";import"./copy-CBKO5Y7R.js";import"./copy-CcaF1jLX.js";import"./GitHub-Mark-DD0-3nfQ.js";import"./TableOfContent-eq2ptewm.js";import"./index-svxMDckn.js";import"./index-DgxvJH02.js";import"./index-DYD2ksj7.js";import"./index-CEhzVLt4.js";import"./index-BfxPgEEU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ri6qBofk.js";import"./addCustomCSSWithScoping-I9DyZrRa.js";import"./Gregorian-DcPc_c3z.js";import"./getCachedLocaleDataInstance-Dl0a9uin.js";import"./query-CzSBusdE.js";import"./Input-BV-MxHCg.js";import"./ResponsivePopoverCommon.css-Bd-J_F0o.js";import"./ValueStateMessage.css-DtD4vioP.js";import"./Suggestions.css-CgOY0hpB.js";import"./appointment-2-BiCqpPtm.js";import"./ListItemStandard-Zbea8WPI.js";import"./slim-arrow-left-CNdGSVgz.js";import"./Calendar-CeJTYmbl.js";import"./InvisibleMessage-C7K7N7yp.js";import"./index-UzExfabf.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
