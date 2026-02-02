import{j as e}from"./iframe-0eQE2YFm.js";import{useMDXComponents as s}from"./index-CrzDrume.js";import{M as m,C as o}from"./blocks-DA7tG1fG.js";import"./Tag-D9KB_OaV.js";import"./index-CO0N_mR_.js";import{C as l}from"./ControlsWithNote-CuCW3ws0.js";import{D as p}from"./DocsHeader-CWIHGE1q.js";import{F as d}from"./CommandsAndQueries-vs4Uf2fG.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BPpKKeQ7.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DHaKlJ23.js";import"./sys-enter-2-CjOjN1qK.js";import"./alert-D98VDEUp.js";import"./index-Cl7aYaAj.js";import"./index-DXkWzVKM.js";import"./Link-CbRTBueg.js";import"./copy-DNliRkqn.js";import"./copy-BusSvtxV.js";import"./GitHub-Mark-oLHpgb8y.js";import"./TableOfContent-CZ69pxJx.js";import"./index-CAidMbCx.js";import"./index-nxBbAPWP.js";import"./index-CX4m4aKj.js";import"./index-DIoC19fn.js";import"./index-DCkfYqwc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CwbZNxPW.js";import"./addCustomCSSWithScoping-CEa4HZHN.js";import"./Gregorian-8VHMAIoJ.js";import"./query-CzSBusdE.js";import"./Input-BaZHhr9A.js";import"./ResponsivePopoverCommon.css-B4yMTcW1.js";import"./ValueStateMessage.css-CDY6pP0f.js";import"./Suggestions.css-Dmp7acZ3.js";import"./appointment-2-DaZSaWl5.js";import"./ListItemStandard-D9gf_cfX.js";import"./slim-arrow-left-BkaI3ZE-.js";import"./Calendar-CuTujCs2.js";import"./InvisibleMessage-BLfENYQH.js";import"./index-DBbdY5LP.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
