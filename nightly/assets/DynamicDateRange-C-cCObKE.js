import{j as e}from"./iframe-utVLPk6_.js";import{useMDXComponents as s}from"./index-_7Ivp6Lr.js";import{M as m,C as o}from"./blocks-CRxaTikh.js";import"./Tag-LOOaBowr.js";import"./index-CJmgWra1.js";import{C as l}from"./ControlsWithNote-CFk9VQAH.js";import{D as p}from"./DocsHeader-DRXDpR5s.js";import{F as d}from"./CommandsAndQueries-BVodeffY.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DfNrMDGo.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D-kuCoWP.js";import"./sys-enter-2-ClJM_7Cf.js";import"./alert-CrgSVEE-.js";import"./index-B4YNNEZt.js";import"./index-w9tOLOey.js";import"./Link-BwFR1FvL.js";import"./copy-DBgY1S6V.js";import"./copy-lkIY5Hce.js";import"./GitHub-Mark-Bu1IhQYF.js";import"./TableOfContent-Ca9dsvZH.js";import"./index-C5CeUqLr.js";import"./index-vwTPEa24.js";import"./index-CQTFiQOO.js";import"./index-BNJRxg3C.js";import"./index-Bt2MbZdo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BP35uBwA.js";import"./addCustomCSSWithScoping-ByL_YC7i.js";import"./Gregorian-CdVkmQNY.js";import"./getCachedLocaleDataInstance-CMG3dMSe.js";import"./query-CzSBusdE.js";import"./Input-tiP9VWUa.js";import"./ResponsivePopoverCommon.css-B57nbVdH.js";import"./ValueStateMessage.css-JwjTw4R6.js";import"./Suggestions.css-CCPLE5i3.js";import"./appointment-2-_hxlH8mb.js";import"./ListItemStandard-BjnDf0fW.js";import"./slim-arrow-left-HvfVXFiC.js";import"./Calendar-C4QUy54F.js";import"./InvisibleMessage-CxrOCkfz.js";import"./index-CReDoCO5.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
