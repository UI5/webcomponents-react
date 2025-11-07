import{j as e}from"./iframe-DGnDchDQ.js";import{useMDXComponents as s}from"./index-gqhlbnnP.js";import{M as m,C as o}from"./blocks-CpnEbXW7.js";import"./Tag-Bqlxcgw6.js";import"./index-ab40gpM3.js";import{C as l}from"./ControlsWithNote-Bpt7dSeq.js";import{D as p}from"./DocsHeader-Ci4x0-Xn.js";import{F as d}from"./CommandsAndQueries-nFfK_W-O.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-C3iOwrFx.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C_x76Wro.js";import"./sys-enter-2-C7D1DjDO.js";import"./alert-Bv5R7OxS.js";import"./index-BpzOuhJc.js";import"./index-DBMKQPCi.js";import"./Link-DlCRMPDC.js";import"./copy-7k0MnJvA.js";import"./copy-DiOqbFXx.js";import"./GitHub-Mark-CiCqtIOa.js";import"./TableOfContent-C4IZUZE2.js";import"./index-D8BbDNnv.js";import"./index-C1Lkwl5k.js";import"./index--LdK-cim.js";import"./index-DwBLo3Dd.js";import"./index-CHVAkMFk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DKYdG7d4.js";import"./addCustomCSSWithScoping-loT15OrI.js";import"./Gregorian-D3A4oRij.js";import"./query-CzSBusdE.js";import"./Input-CaqdVj6e.js";import"./ResponsivePopoverCommon.css-Br3rrJZc.js";import"./ValueStateMessage.css-CHKpDORf.js";import"./Suggestions.css-DqURt6WR.js";import"./appointment-2-D7Ck1_Qc.js";import"./ListItemStandard-9i9lbvrA.js";import"./slim-arrow-left-XOcPISto.js";import"./Calendar-BGC4y6IX.js";import"./InvisibleMessage-BzbFhHWs.js";import"./index-CRICYRQq.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
