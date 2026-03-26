import{j as e}from"./iframe-EDZrvS0_.js";import{useMDXComponents as s}from"./index-D_Zuzn6o.js";import{M as m,C as o}from"./blocks-CJ57z4uw.js";import"./Tag-Cv2B1DS4.js";import"./index-Bz0BV9YI.js";import{C as p}from"./ControlsWithNote-Jg7jsBfN.js";import{D as l}from"./DocsHeader-BlRpJkzJ.js";import{F as d}from"./Footer-BqU25DvW.js";import"./CommandsAndQueries-DeBGirNK.js";import"./PageNotFound-BnvHWpv6.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-xMk7cOTV.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CAvj8-k7.js";import"./sys-enter-2-Eez9oUbi.js";import"./alert-nmCIz_tp.js";import"./index-DezAYIwY.js";import"./index-CZdLboFr.js";import"./Link-B5fvjtF5.js";import"./copy-DNtWNSim.js";import"./copy-Duyva9GD.js";import"./GitHub-Mark-BxmMkbzC.js";import"./TableOfContent-CKHhbrGg.js";import"./index-D6CBwRDo.js";import"./index-cZywnC0F.js";import"./index-bU8se7-X.js";import"./index-C-NT2IXI.js";import"./index-dnOa7Ewn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_EBjNmUx.js";import"./addCustomCSSWithScoping-2V-LQLPO.js";import"./Illustrations-Cp5J5qhx.js";import"./i18n-defaults-CFWtSmu6.js";import"./Gregorian-CzYHryjP.js";import"./FormatUtils-BGrywTlB.js";import"./query-CzSBusdE.js";import"./Input-zEsdeYDW.js";import"./ResponsivePopoverCommon.css-DBFPees2.js";import"./ValueStateMessage.css-DuJxwYcD.js";import"./Suggestions.css-DnDRJwob.js";import"./appointment-2-CfNbbhWg.js";import"./ListItemStandard-CnWB-RIw.js";import"./slim-arrow-left-D9JeyCdI.js";import"./Calendar-DedjXS0l.js";import"./InvisibleMessage-Bzs3a3mB.js";import"./index-CUNI2Fe2.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
