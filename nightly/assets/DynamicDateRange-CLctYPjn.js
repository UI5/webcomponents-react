import{j as e}from"./iframe-DvHwewhR.js";import{useMDXComponents as s}from"./index-CLaogw5S.js";import{M as m,C as o}from"./blocks-CB2I7-76.js";import"./Tag-CbT4PDaW.js";import"./index-Bt09l3yh.js";import{C as l}from"./ControlsWithNote-B6M_GQJb.js";import{D as p}from"./DocsHeader-BH0B3pCH.js";import{F as d}from"./CommandsAndQueries-BNdncSiU.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-wN_JiuzJ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CIIJNTCs.js";import"./sys-enter-2-CzO95d9X.js";import"./alert-Dwvb1Up2.js";import"./index-Dxi3lBUy.js";import"./index-CdEjZa35.js";import"./Link-BbkEIv5w.js";import"./copy-CLgzmG1F.js";import"./copy-CCEG4Gow.js";import"./GitHub-Mark-BD4VRPkp.js";import"./TableOfContent-CqehIVhz.js";import"./index-KqEBtHRf.js";import"./index-BPXy8zzT.js";import"./index-Dm8v7iX1.js";import"./index-BcAV-ghG.js";import"./index-BpY-7uI8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CoI2TKPf.js";import"./addCustomCSSWithScoping-B6Lor8tu.js";import"./Gregorian-CEhMr9iX.js";import"./query-CzSBusdE.js";import"./Input-5FKrcxfj.js";import"./ResponsivePopoverCommon.css-CyL8R70X.js";import"./ValueStateMessage.css-BKuLTXW_.js";import"./Suggestions.css-Bkx-OrvG.js";import"./appointment-2-COHjjlkA.js";import"./ListItemStandard-BRn_nQZN.js";import"./slim-arrow-left-D2qOzph7.js";import"./Calendar-B4ML5laI.js";import"./InvisibleMessage-zD0IVsFW.js";import"./index-D_C7dAq5.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
