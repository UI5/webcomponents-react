import{j as e}from"./iframe-BCLHYJgX.js";import{useMDXComponents as s}from"./index-6uEU24p4.js";import{M as m,C as o}from"./blocks-Bs_XR2wS.js";import"./Tag-CyCEbX-5.js";import"./index-BaEPddIL.js";import{C as l}from"./ControlsWithNote-DsJu2eyI.js";import{D as p}from"./DocsHeader-DskdD-rz.js";import{F as d}from"./CommandsAndQueries-CO5L47ah.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-ChI5rpEv.js";import"./preload-helper-PPVm8Dsz.js";import"./information-ddn69F5R.js";import"./sys-enter-2-Clp8AE05.js";import"./alert-bXCG-ij3.js";import"./index-ryNQsvjz.js";import"./index-BK_ZHavx.js";import"./Link-Bn4h5ljW.js";import"./copy-DbeI06jm.js";import"./copy-C8KGHNvK.js";import"./GitHub-Mark-Dw6a9esS.js";import"./TableOfContent-C5WsUPZq.js";import"./index-Cok_5_tC.js";import"./index-Cm3V18u1.js";import"./index-CCx-58F9.js";import"./index-Bu9oHGEl.js";import"./index-_pVZ4H5C.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DoVEwdyY.js";import"./addCustomCSSWithScoping-DNzt28js.js";import"./Gregorian-DtoD9yUR.js";import"./query-CzSBusdE.js";import"./Input-CyIlmGcA.js";import"./ResponsivePopoverCommon.css-BG6tGGqw.js";import"./ValueStateMessage.css-CXTpMNNy.js";import"./Suggestions.css-Bad721NM.js";import"./appointment-2-BMVPT5HR.js";import"./ListItemStandard-CBy1q-np.js";import"./slim-arrow-left-DBybB8g5.js";import"./Calendar-CjNJJkbf.js";import"./InvisibleMessage-DnmpScj3.js";import"./index-DlAPMqrc.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
