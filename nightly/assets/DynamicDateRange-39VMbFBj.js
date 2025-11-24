import{j as e}from"./iframe-ChLklOsd.js";import{useMDXComponents as s}from"./index-C8O_9vrB.js";import{M as m,C as o}from"./blocks-DJtWS-rM.js";import"./Tag-DfUNsarH.js";import"./index-D3GBtHew.js";import{C as l}from"./ControlsWithNote-BKZjeS7U.js";import{D as p}from"./DocsHeader-Bz6VW3Ao.js";import{F as d}from"./CommandsAndQueries-BJfqhrRX.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BNTyd_0-.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cwgz9DFQ.js";import"./sys-enter-2-CCtRtPlT.js";import"./alert-B2sdUTAu.js";import"./index-k8fk5wba.js";import"./index-BapOo3Yq.js";import"./Link-8xYNNbnA.js";import"./copy-CpkWUnUU.js";import"./copy-e7lZwdk_.js";import"./GitHub-Mark-B8B_KMCt.js";import"./TableOfContent-DlI8e9kq.js";import"./index-zPNCu5nO.js";import"./index-CZdKIXPg.js";import"./index-CLorPZ9t.js";import"./index-DapyP3wm.js";import"./index-C6Hr8eB_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxJjekgT.js";import"./addCustomCSSWithScoping-CUADiRCd.js";import"./Gregorian-mXg4dKl2.js";import"./query-CzSBusdE.js";import"./Input-Bw80AfuH.js";import"./ResponsivePopoverCommon.css-rK6RDwp7.js";import"./ValueStateMessage.css-BUi7Lug0.js";import"./Suggestions.css-60iPjMbi.js";import"./appointment-2-dekU2-2a.js";import"./ListItemStandard-D2j6MVzc.js";import"./slim-arrow-left-Cc7Lun7C.js";import"./Calendar-smv_PV5z.js";import"./InvisibleMessage-BNlluPzS.js";import"./index-ANjhBQcR.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
