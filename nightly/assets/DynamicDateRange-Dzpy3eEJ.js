import{j as e}from"./iframe-CBE50DlQ.js";import{useMDXComponents as s}from"./index-DIj01nj4.js";import{M as m,C as o}from"./blocks-BkRbeitU.js";import"./Tag-DnRfIk3Q.js";import"./index-CionDnrU.js";import{C as l}from"./ControlsWithNote-B8qA-jVK.js";import{D as p}from"./DocsHeader-BfqXB3BN.js";import{F as d}from"./CommandsAndQueries-DPkme0CW.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CoG3VvdI.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C3Q_Sey8.js";import"./sys-enter-2-B4dHqFQY.js";import"./alert-CvpF86nf.js";import"./index-DOpTxqMF.js";import"./index-Cl_RTgXn.js";import"./Link-Dh4rUjfX.js";import"./copy-hwAEZCZV.js";import"./copy-C6dVkXZR.js";import"./GitHub-Mark-BRB5yyvw.js";import"./TableOfContent-CnAnNSxW.js";import"./index-Cx0GhjWW.js";import"./index-DQcdvvTg.js";import"./index-hRqo2aEC.js";import"./index-9M1Uc6lA.js";import"./index-DZWAayED.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-OxleBysO.js";import"./addCustomCSSWithScoping-DkZRGLQs.js";import"./Gregorian-BwMsgnl1.js";import"./query-CzSBusdE.js";import"./Input-D1ohtzY1.js";import"./ResponsivePopoverCommon.css-KhWag-i4.js";import"./ValueStateMessage.css-Bx58RCyv.js";import"./Suggestions.css-aqqCyRM-.js";import"./appointment-2-Ce6dDxPd.js";import"./ListItemStandard-B_Jgd157.js";import"./slim-arrow-left-DL9rsaAj.js";import"./Calendar-TdQeGRYR.js";import"./InvisibleMessage-t9FWfsM5.js";import"./index-DqNWVbah.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
