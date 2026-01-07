import{j as e}from"./iframe-datodc_T.js";import{useMDXComponents as s}from"./index-c_OJYfdv.js";import{M as m,C as o}from"./blocks-C83taKT5.js";import"./Tag-aYNaIA2f.js";import"./index-BxYLcFT1.js";import{C as l}from"./ControlsWithNote-robc0igz.js";import{D as p}from"./DocsHeader-CoIEvMOx.js";import{F as d}from"./CommandsAndQueries-9K4be_0B.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DpHLqoSF.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BVFOZm1x.js";import"./sys-enter-2-D-jHJs9Q.js";import"./alert-Bayru5wq.js";import"./index-CjE0y9ul.js";import"./index-DHA5QYCq.js";import"./Link-CguLCm0R.js";import"./copy-CcixpzPp.js";import"./copy-fv_X0Lju.js";import"./GitHub-Mark-DdJzrJIo.js";import"./TableOfContent-C9390aIY.js";import"./index-CaqpJvlq.js";import"./index-D2t_qzWG.js";import"./index-Dsm5uoLy.js";import"./index-Be6r5cNn.js";import"./index-D6USDY88.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpNALNgF.js";import"./addCustomCSSWithScoping-DKvV4UVz.js";import"./Gregorian-o0vZ9_c_.js";import"./query-CzSBusdE.js";import"./Input-CDJ2DRSv.js";import"./ResponsivePopoverCommon.css-DAKPNunD.js";import"./ValueStateMessage.css-CEIz9T_f.js";import"./Suggestions.css-ChFuC62o.js";import"./appointment-2-BaAhe5ou.js";import"./ListItemStandard-D6D8woMn.js";import"./slim-arrow-left-85O7Qm_g.js";import"./Calendar-CkJ8UFpo.js";import"./InvisibleMessage-DefiGhym.js";import"./index-FSQedhzd.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
