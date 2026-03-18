import{j as e}from"./iframe-DxjY9BFy.js";import{useMDXComponents as s}from"./index-Bk5eT7re.js";import{M as m,C as o}from"./blocks-CATAEJ_X.js";import"./Tag-DnkuMosg.js";import"./index-B4O__Lt2.js";import{C as p}from"./ControlsWithNote-Bi0XUiG8.js";import{D as l}from"./DocsHeader-GdewomhS.js";import{F as d}from"./Footer-CWL8JIjr.js";import"./CommandsAndQueries-GjRh9gzH.js";import"./PageNotFound-CM4Hmt0N.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DyQ_tjjG.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BTY6GktZ.js";import"./sys-enter-2-DcEz2THL.js";import"./alert-CFzS8fE9.js";import"./index-BwDYaeY0.js";import"./index-qULy9Htf.js";import"./Link-B0lBzBIQ.js";import"./copy-MJuo07Gq.js";import"./copy-B5NkvAEv.js";import"./GitHub-Mark-C6lCEuPt.js";import"./TableOfContent-DS5LpAQ6.js";import"./index-CzEttlwi.js";import"./index-DimdoC19.js";import"./index-Cr_g29EW.js";import"./index-ssnDYxvl.js";import"./index-D8DdOlBI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CjvVRPhX.js";import"./addCustomCSSWithScoping-C4xqV3rh.js";import"./Illustrations-_-Ip7Vxq.js";import"./i18n-defaults-CFWtSmu6.js";import"./Gregorian-CXPdF6PD.js";import"./getCachedLocaleDataInstance-BJFzCaxs.js";import"./query-CzSBusdE.js";import"./Input-BIIEETsw.js";import"./ResponsivePopoverCommon.css-BiuITAHl.js";import"./ValueStateMessage.css-DdvZKdw2.js";import"./Suggestions.css-CHxoHGWG.js";import"./appointment-2-Dk6ta7yf.js";import"./ListItemStandard-PNi6yEzS.js";import"./slim-arrow-left-VfrjhDyZ.js";import"./Calendar-B_Qxx-94.js";import"./InvisibleMessage-DGUog9ZJ.js";import"./index-DHVwRm4g.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
`,e.jsx(l,{of:r}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(p,{of:a}),`
`,e.jsx(t.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(t.h3,{id:"value-change",children:"Value Change"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(t.h4,{id:"code",children:"Code"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`function DynamicDateRangeComponent() {
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
`,e.jsx(d,{})]})}function re(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{re as default};
