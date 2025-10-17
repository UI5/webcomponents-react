import{j as e}from"./iframe-C2wpKNYo.js";import{useMDXComponents as s}from"./index-C3bwhSaM.js";import{M as m,C as o}from"./blocks-CsqgEIu9.js";import"./Tag-BJVPlcpU.js";import"./index-6FDQ4ka_.js";import{C as l}from"./ControlsWithNote-CzvwMPMy.js";import{D as p}from"./DocsHeader-DHSOjJVN.js";import{F as d}from"./CommandsAndQueries-BUx2QFuH.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CV6uabnU.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BdwahN0R.js";import"./sys-enter-2-DhtxU3CZ.js";import"./alert-DqDZXgnZ.js";import"./index-Cg3QTQNO.js";import"./index-DK30OokX.js";import"./Link-BDqeBkDX.js";import"./copy-By7w-vbr.js";import"./copy-Mn7zeVlB.js";import"./GitHub-Mark-CBa2_m2b.js";import"./TableOfContent-DAwDlNWz.js";import"./index-BPkycJ7d.js";import"./index-CTKi5gtL.js";import"./index-Dsgid9kS.js";import"./index-uvW3ZjCI.js";import"./index-Cg_u4Ogr.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN7qutFD.js";import"./addCustomCSSWithScoping-BIscafeh.js";import"./Gregorian-aYs1fZeR.js";import"./query-CzSBusdE.js";import"./Input-Bm2Fv_Nn.js";import"./ResponsivePopoverCommon.css-DTvFG0Ht.js";import"./ValueStateMessage.css-BT11hGhW.js";import"./Suggestions.css-Ce7PGErr.js";import"./appointment-2-DUR79dPq.js";import"./ListItemStandard-Bw7MGSnH.js";import"./slim-arrow-left-CCca4i8u.js";import"./Calendar-CNZB2UxP.js";import"./InvisibleMessage-CTodWVwF.js";import"./index-AKXoUFrm.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
