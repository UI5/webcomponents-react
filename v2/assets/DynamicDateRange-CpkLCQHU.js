import{j as e}from"./iframe-CLqwDYWN.js";import{useMDXComponents as s}from"./index-cmVK5yXJ.js";import{M as m,C as o}from"./blocks-Ua2ef061.js";import"./Tag-D4gpwYXq.js";import"./index-BLABW-V6.js";import{C as l}from"./ControlsWithNote-CD5RfhBx.js";import{D as p}from"./DocsHeader-CpZWvGRz.js";import{F as d}from"./CommandsAndQueries-DltB0UQf.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DqiIspbR.js";import"./preload-helper-PPVm8Dsz.js";import"./information-yMtkqf_-.js";import"./sys-enter-2-DLul5qw8.js";import"./alert-BH_ko6Mf.js";import"./index-BkxNRgLP.js";import"./index-DbDqFPhM.js";import"./Link-CWlOLLsT.js";import"./copy-DKUSmBEK.js";import"./copy-BFTyEUOW.js";import"./GitHub-Mark-CwoZ_4KO.js";import"./TableOfContent-DbOdkbJI.js";import"./index-BAe0MMci.js";import"./index-dDRjuikd.js";import"./index-Em70_hTG.js";import"./index-CZj6k55a.js";import"./index-Ddq0Vtwc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Clukjtst.js";import"./addCustomCSSWithScoping-CDaW4Lcf.js";import"./Gregorian-BiM75c1s.js";import"./query-CzSBusdE.js";import"./Input-DXVKLo07.js";import"./ResponsivePopoverCommon.css-wZUp9iaM.js";import"./ValueStateMessage.css-D4s1Xohy.js";import"./Suggestions.css-DBdM4e2n.js";import"./appointment-2-voQqLdpw.js";import"./ListItemStandard-B_pITSM2.js";import"./slim-arrow-left-DDjHlfpa.js";import"./Calendar-9lWhn5fi.js";import"./InvisibleMessage-DRB-gK4Q.js";import"./index-BMP6kCoe.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
