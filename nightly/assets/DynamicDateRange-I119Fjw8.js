import{j as e}from"./iframe-ouw07lhn.js";import{useMDXComponents as s}from"./index-Cip0-ov6.js";import{M as m,C as o}from"./blocks-Bw5GcbeR.js";import"./Tag-DRYfjFpo.js";import"./index-CiN9pZLU.js";import{C as l}from"./ControlsWithNote-DX3Cg25w.js";import{D as p}from"./DocsHeader-BjK80ax0.js";import{F as d}from"./CommandsAndQueries-vCNbGeur.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DqpchGPw.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bs_aR9DP.js";import"./sys-enter-2-C-Nxg2w-.js";import"./alert-D5Y3hKT1.js";import"./index-BPh4j9eE.js";import"./index-COqVCE1o.js";import"./Link-DkIKsy6A.js";import"./copy-B_nVgV11.js";import"./copy-B_ty4mVH.js";import"./GitHub-Mark-BxeebIXL.js";import"./TableOfContent-CGKwH133.js";import"./index-DKdSXnqp.js";import"./index-ByxVEtyu.js";import"./index-C2ZF5Jpp.js";import"./index-CrUz0E6u.js";import"./index-COELAX_g.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzV-vkfR.js";import"./addCustomCSSWithScoping-vWKRTHDz.js";import"./Gregorian-6C8MS6hq.js";import"./getCachedLocaleDataInstance-CU_7QQR6.js";import"./query-CzSBusdE.js";import"./Input-CI1OROWq.js";import"./ResponsivePopoverCommon.css-DcoHmoxx.js";import"./ValueStateMessage.css-XdpxvNbf.js";import"./Suggestions.css-mbx7WJoo.js";import"./appointment-2-C8uw50_k.js";import"./ListItemStandard-CMrSakoj.js";import"./slim-arrow-left-B4F7JxrS.js";import"./Calendar-D20WKcgu.js";import"./InvisibleMessage-DuwvrpMq.js";import"./index-BV2HEYnD.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
