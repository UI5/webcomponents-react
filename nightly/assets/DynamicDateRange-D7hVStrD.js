import{j as e}from"./iframe-d6kFjKmB.js";import{useMDXComponents as s}from"./index-C_GtGqSz.js";import{M as m,C as o}from"./blocks-cydmgMgt.js";import"./Tag-pDj71kKq.js";import"./index-Df2R9LIn.js";import{C as l}from"./ControlsWithNote-akDrH3MV.js";import{D as p}from"./DocsHeader-BylOnSY4.js";import{F as d}from"./CommandsAndQueries-CN1OL-NC.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DZVwZYgd.js";import"./preload-helper-PPVm8Dsz.js";import"./information-U09OVfZR.js";import"./sys-enter-2-Iyx_uxbM.js";import"./alert-BF6Rf2Y5.js";import"./index-ByGA7EJm.js";import"./index-CPMalJUe.js";import"./Link-sWUxxSV7.js";import"./copy-CargNeW6.js";import"./copy-10s1L_tU.js";import"./GitHub-Mark-DoOcp9P3.js";import"./TableOfContent-D6ljph8i.js";import"./index-C-SdRuQi.js";import"./index-Ct6Sh5v4.js";import"./index-CYwfFviQ.js";import"./index-Bn3tqYuU.js";import"./index-Cmh3YBGn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cp8_wMdK.js";import"./addCustomCSSWithScoping-CykojlcF.js";import"./Gregorian-zazkjotK.js";import"./query-CzSBusdE.js";import"./Input-dxqpd5U9.js";import"./ResponsivePopoverCommon.css-DcJ2hMwV.js";import"./ValueStateMessage.css-CyfOZFgE.js";import"./Suggestions.css-CUYXbb3W.js";import"./appointment-2-AXoNGZbr.js";import"./ListItemStandard-CC3AoL1h.js";import"./slim-arrow-left-Dx6t4IcT.js";import"./Calendar-B7HxjZU3.js";import"./InvisibleMessage-D-ICaE5n.js";import"./index-BVWxMnE0.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
