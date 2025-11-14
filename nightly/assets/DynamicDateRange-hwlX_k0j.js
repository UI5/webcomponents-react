import{j as e}from"./iframe-C7IxwDmR.js";import{useMDXComponents as s}from"./index-CbSg1oVF.js";import{M as m,C as o}from"./blocks-3mjErVLE.js";import"./Tag-C9e9pWXA.js";import"./index-BN5pmzGS.js";import{C as l}from"./ControlsWithNote-C41TO-UY.js";import{D as p}from"./DocsHeader-DhPkElVc.js";import{F as d}from"./CommandsAndQueries-D3KUBOYC.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DkG0PYXr.js";import"./preload-helper-PPVm8Dsz.js";import"./information-wiA8vfAE.js";import"./sys-enter-2-j2JxX-0l.js";import"./alert-Cm08TFjk.js";import"./index-Btmndd9w.js";import"./index-BiORqeCW.js";import"./Link-CCpfCikN.js";import"./copy-DGGR9tPZ.js";import"./copy-D-VhlFxG.js";import"./GitHub-Mark-B8gHwPzX.js";import"./TableOfContent-BnKOdT6F.js";import"./index-CfKFL4Pe.js";import"./index-DScPik_c.js";import"./index-CHmX3iCn.js";import"./index-DifvSs4M.js";import"./index-C1RQfiDX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-me-lZqyi.js";import"./addCustomCSSWithScoping-Ddb1r2sC.js";import"./Gregorian-DG8VyLG0.js";import"./query-CzSBusdE.js";import"./Input-zvxkPfUn.js";import"./ResponsivePopoverCommon.css-CswkUY4O.js";import"./ValueStateMessage.css--jDZnzoj.js";import"./Suggestions.css-CWsApbdF.js";import"./appointment-2-Cm-QDoAE.js";import"./ListItemStandard-BQaqKR0d.js";import"./slim-arrow-left-BTlSWt5G.js";import"./Calendar-BpFkryu7.js";import"./InvisibleMessage-3o-oW7oq.js";import"./index-CJRUeV6T.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
