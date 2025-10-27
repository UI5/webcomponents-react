import{j as e}from"./iframe-B7JRtnJ_.js";import{useMDXComponents as s}from"./index-BPvgxWCZ.js";import{M as m,C as o}from"./blocks-De_aBrmo.js";import"./Tag-BKx3QN9f.js";import"./index-D4cnUaLM.js";import{C as l}from"./ControlsWithNote-DgPjGzi5.js";import{D as p}from"./DocsHeader-G7O3GL-a.js";import{F as d}from"./CommandsAndQueries-Q6uRMqWv.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-yUu9_cO6.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CsJaoifg.js";import"./sys-enter-2-ZCQT486r.js";import"./alert-B325SdK2.js";import"./index-VZQHlfm7.js";import"./index-DoEzIHzx.js";import"./Link-CTrIksmS.js";import"./copy-D7cIngW2.js";import"./copy-C1tv-pSG.js";import"./GitHub-Mark-JTvzvp0g.js";import"./TableOfContent-CnHAVL07.js";import"./index-Bxt1rtVG.js";import"./index-DptOKZBu.js";import"./index-Ch21QDGf.js";import"./index-B10alG5K.js";import"./index-DCbqd4CK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CpyU0bSl.js";import"./addCustomCSSWithScoping-COHCvbrD.js";import"./Gregorian-BxZr2V59.js";import"./query-CzSBusdE.js";import"./Input-BYPwe2OS.js";import"./ResponsivePopoverCommon.css-D4L-fz7S.js";import"./ValueStateMessage.css-Da6bxDPp.js";import"./Suggestions.css-D7e9g6wi.js";import"./appointment-2-MWb8A8gQ.js";import"./ListItemStandard-DOEa2jCy.js";import"./slim-arrow-left-CenJwN5v.js";import"./Calendar-DYb-fPW-.js";import"./InvisibleMessage-BnecaueW.js";import"./index-e_OfuZeF.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
