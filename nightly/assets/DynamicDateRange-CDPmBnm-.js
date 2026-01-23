import{j as e}from"./iframe-NmUBSsgx.js";import{useMDXComponents as s}from"./index-CRhoqEbg.js";import{M as m,C as o}from"./blocks-DTOICRIr.js";import"./Tag-CGvSEzjs.js";import"./index-_FB6i7Kc.js";import{C as l}from"./ControlsWithNote-DfWYygL2.js";import{D as p}from"./DocsHeader-B-EO8Eqs.js";import{F as d}from"./CommandsAndQueries-B283QW5b.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CwwGu8oa.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BxntQ5Ez.js";import"./sys-enter-2--B3M0XKZ.js";import"./alert-b59nRps9.js";import"./index-IPiTIICp.js";import"./index-BNsY5djp.js";import"./Link-O7CbLP92.js";import"./copy-Dcsra1dO.js";import"./copy-GTpWjg4q.js";import"./GitHub-Mark-HytzatKk.js";import"./TableOfContent-qKvmhN4-.js";import"./index-C0Tl3YXX.js";import"./index-b9onOzBF.js";import"./index-DKTuqk4i.js";import"./index-_nSLzRwo.js";import"./index-BOB0mZMq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-vtZivBS9.js";import"./addCustomCSSWithScoping-D_Idq7DT.js";import"./Gregorian-CQsJUfEn.js";import"./query-CzSBusdE.js";import"./Input-B-iDErUf.js";import"./ResponsivePopoverCommon.css-Cz3_sdnA.js";import"./ValueStateMessage.css-CFZb-9jD.js";import"./Suggestions.css-BoCoDiBj.js";import"./appointment-2-vbXArTpP.js";import"./ListItemStandard-BtmjKC48.js";import"./slim-arrow-left-CmZ1tpOy.js";import"./Calendar-C6uKKcMr.js";import"./InvisibleMessage-Bl0X301U.js";import"./index-Cszax4UQ.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
