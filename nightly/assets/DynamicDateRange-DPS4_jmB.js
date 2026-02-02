import{j as e}from"./iframe-Cv4sgl-6.js";import{useMDXComponents as s}from"./index-CBIpMKi2.js";import{M as m,C as o}from"./blocks-DPiPd9tl.js";import"./Tag-BCHKI4FR.js";import"./index-DcbEzSTS.js";import{C as l}from"./ControlsWithNote-BDU2GaF-.js";import{D as p}from"./DocsHeader-BrY58g2d.js";import{F as d}from"./CommandsAndQueries-DF8E8wiu.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BPgTpSjp.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D12ZJp7Z.js";import"./sys-enter-2-B0uzD6GZ.js";import"./alert-BQ9eRDhW.js";import"./index-BdK0aYpg.js";import"./index-CeG26Jn9.js";import"./Link-BXe55YD0.js";import"./copy-Buz7yFy9.js";import"./copy-Bby_UTo9.js";import"./GitHub-Mark-CKxe69xP.js";import"./TableOfContent-Bh8N9yMW.js";import"./index-BbeCayQT.js";import"./index-CtOMiTIA.js";import"./index-AkExkdLb.js";import"./index-CP4yHlqi.js";import"./index-C5UblPZZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CEw8P-vI.js";import"./addCustomCSSWithScoping-ChLo0vcI.js";import"./Gregorian-BeD9uPJ0.js";import"./query-CzSBusdE.js";import"./Input-xGZQJYeP.js";import"./ResponsivePopoverCommon.css-Cw4xn9Xp.js";import"./ValueStateMessage.css-DE-funzq.js";import"./Suggestions.css-C80GUOWK.js";import"./appointment-2-C_xsKauR.js";import"./ListItemStandard-CTpk5hQL.js";import"./slim-arrow-left-oxrvIr7m.js";import"./Calendar-BW-qauiz.js";import"./InvisibleMessage-BiO2cmNz.js";import"./index-CONmEwPQ.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
