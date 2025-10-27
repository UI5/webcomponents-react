import{j as e}from"./iframe-ByiiILXu.js";import{useMDXComponents as s}from"./index-DYpmG0kU.js";import{M as m,C as o}from"./blocks-DrNhXH8Y.js";import"./Tag-WBOqYu0X.js";import"./index-B20WCXLG.js";import{C as l}from"./ControlsWithNote-AjBaHx3q.js";import{D as p}from"./DocsHeader-6lb3uMew.js";import{F as d}from"./CommandsAndQueries-ByQHAThU.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BLvzl8bY.js";import"./preload-helper-PPVm8Dsz.js";import"./information-tN-lRIsU.js";import"./sys-enter-2-eFq8QnH9.js";import"./alert-DCLbzn71.js";import"./index-COPBcnoz.js";import"./index-C2Yky6-6.js";import"./Link-DX54TCdQ.js";import"./copy-DxuTh0d6.js";import"./copy-08ilKZ0c.js";import"./GitHub-Mark-D9ZH9lDK.js";import"./TableOfContent-ojyBFHoB.js";import"./index-8yUpcOxv.js";import"./index-y2DJOFuG.js";import"./index-C0jaTjnN.js";import"./index-BkgEbRU4.js";import"./index-DJ81LlKI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-7LYDV0x0.js";import"./addCustomCSSWithScoping-DIYkZsvP.js";import"./Gregorian-BNPRe0kQ.js";import"./query-CzSBusdE.js";import"./Input-n_T7UVDU.js";import"./ResponsivePopoverCommon.css-C1nFDre3.js";import"./ValueStateMessage.css-DknAZyiZ.js";import"./Suggestions.css-CltqZkwX.js";import"./appointment-2-wGyQqbAx.js";import"./ListItemStandard-Cju6LXlU.js";import"./slim-arrow-left-B7SLyOfW.js";import"./Calendar-BIpZhil2.js";import"./InvisibleMessage-1Hg6cN3L.js";import"./index-COGP4GHg.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
