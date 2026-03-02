import{j as e}from"./iframe-CqFnJp-S.js";import{useMDXComponents as s}from"./index-CynYu3xa.js";import{M as m,C as o}from"./blocks-AhMBMxUR.js";import"./Tag-Cwi_n_M2.js";import"./index-DezDvmls.js";import{C as l}from"./ControlsWithNote-Bb4mcuQO.js";import{D as p}from"./DocsHeader-BXRJUbp3.js";import{F as d}from"./CommandsAndQueries-D_WKy8dN.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BbSs52Se.js";import"./preload-helper-PPVm8Dsz.js";import"./information-60cadcf1.js";import"./sys-enter-2-seBR9LV9.js";import"./alert-vPdDlciv.js";import"./index-CA0UVsfH.js";import"./index-CR3t_8EC.js";import"./Link-18Y5h9Ta.js";import"./copy-CFHibi2r.js";import"./copy-B3ylxRux.js";import"./GitHub-Mark-CZ2jx5rB.js";import"./TableOfContent-CMB21LG_.js";import"./index-BARlfa70.js";import"./index-lhl517Nj.js";import"./index-B8Ys29Cw.js";import"./index-CaJgjkX1.js";import"./index-B_RIKuGc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B6mfgC9Q.js";import"./addCustomCSSWithScoping-Dl0yXOSQ.js";import"./Gregorian-BKFqFEat.js";import"./getCachedLocaleDataInstance-CZXKZkRs.js";import"./query-CzSBusdE.js";import"./Input-CQNiUAP7.js";import"./ResponsivePopoverCommon.css-B_6-LLQR.js";import"./ValueStateMessage.css-BBGnGBu9.js";import"./Suggestions.css-DzKfp-Xw.js";import"./appointment-2-B_9RepDM.js";import"./ListItemStandard-C1rHJjnW.js";import"./slim-arrow-left-CuHYWEIA.js";import"./Calendar-CRpGmeC7.js";import"./InvisibleMessage-CgZaFHu8.js";import"./index-Ril5FfjQ.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
