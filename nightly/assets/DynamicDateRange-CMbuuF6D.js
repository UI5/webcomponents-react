import{j as e}from"./iframe-BN0GWVQe.js";import{useMDXComponents as s}from"./index-BLbTpX55.js";import{M as m,C as o}from"./blocks-D3wn40tr.js";import"./Tag-CZAeCV6F.js";import"./index-Bxb5YZWP.js";import{C as l}from"./ControlsWithNote-DAjPJGUJ.js";import{D as p}from"./DocsHeader-B4gApMmD.js";import{F as d}from"./CommandsAndQueries-C4w7BIRn.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DmxflGQA.js";import"./preload-helper-PPVm8Dsz.js";import"./information-b87QwzTv.js";import"./sys-enter-2-C5oyesud.js";import"./alert-DOWzv_2H.js";import"./index-BaX--um2.js";import"./index-BtPW2b7B.js";import"./Link-Br_XV4sE.js";import"./copy-Ba0ew3nf.js";import"./copy-B0NSZ-1k.js";import"./GitHub-Mark-BEjZEFLP.js";import"./TableOfContent-BKLAU6oD.js";import"./index-BEhXLrZk.js";import"./index-Dt-X_HjL.js";import"./index-BqPBCR84.js";import"./index-BQ2VPUfC.js";import"./index-CGlofGT5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Du_vcu6e.js";import"./addCustomCSSWithScoping-D2hXBZmk.js";import"./Gregorian-C2N3KdtE.js";import"./query-CzSBusdE.js";import"./Input-BT1uTnSo.js";import"./ResponsivePopoverCommon.css-DtFcvyzi.js";import"./ValueStateMessage.css-DGbWuuCH.js";import"./Suggestions.css-BeDi0pBK.js";import"./appointment-2-wKnDGTLl.js";import"./ListItemStandard-D6-433jt.js";import"./slim-arrow-left-CY-Ut3i7.js";import"./Calendar-CapkOFxy.js";import"./InvisibleMessage-CRMlkkCP.js";import"./index-CsK0f-Ik.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
