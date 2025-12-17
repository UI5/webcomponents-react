import{j as e}from"./iframe-CGBVIl7z.js";import{useMDXComponents as s}from"./index-BD_J3XGh.js";import{M as m,C as o}from"./blocks-amwX2WGZ.js";import"./Tag-CKuoT6Wf.js";import"./index-Bflw6F-3.js";import{C as l}from"./ControlsWithNote-CuenDjBy.js";import{D as p}from"./DocsHeader-CWGcUf5V.js";import{F as d}from"./CommandsAndQueries-C4N9Si-I.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-C-8TsJFy.js";import"./preload-helper-PPVm8Dsz.js";import"./information-RMMgKPqE.js";import"./sys-enter-2-CjQpGHgC.js";import"./alert-B45RxjKS.js";import"./index-DBko667H.js";import"./index-CohLls_f.js";import"./Link-7Pc42Mkn.js";import"./copy-Dt0cHpgH.js";import"./copy-C7UfB3Pq.js";import"./GitHub-Mark-D39pXWIu.js";import"./TableOfContent-DbzcSDOZ.js";import"./index-BpPbjuIA.js";import"./index-BSuCMsLZ.js";import"./index-DdaBmZIy.js";import"./index-739hgjkB.js";import"./index-DSjZIl8t.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bhku-quN.js";import"./addCustomCSSWithScoping-BVpL9dRN.js";import"./Gregorian-MWCcbHy_.js";import"./query-CzSBusdE.js";import"./Input-Cur_CxV7.js";import"./ResponsivePopoverCommon.css-CCcFdLcp.js";import"./ValueStateMessage.css-ZMC4oIfX.js";import"./Suggestions.css-Dz1M5Owd.js";import"./appointment-2-Bpfj50Rq.js";import"./ListItemStandard-DiNPNXGG.js";import"./slim-arrow-left-yxxrA9Ux.js";import"./Calendar-CUri6kZW.js";import"./InvisibleMessage-DctrIzSe.js";import"./index-lmEdkW8S.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
