import{j as e}from"./iframe-oB-4R5Rt.js";import{useMDXComponents as s}from"./index-CPM_KuJ1.js";import{M as m,C as o}from"./blocks-BSJ2p1aB.js";import"./Tag-D-nP8Atk.js";import"./index-D9a9y2w1.js";import{C as l}from"./ControlsWithNote-DQKRLg5F.js";import{D as p}from"./DocsHeader-CXHuRQ0y.js";import{F as d}from"./CommandsAndQueries-V7DYmci2.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BjQ46Hj4.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BRyOdl2D.js";import"./sys-enter-2-DyCH1cMA.js";import"./alert-BVT2hG_8.js";import"./index-BRbXVYQh.js";import"./index-QtLlbt_o.js";import"./Link-DOQS5UBs.js";import"./copy-CIgI9Top.js";import"./copy-BEsfMMdz.js";import"./GitHub-Mark-52o2qqFV.js";import"./TableOfContent-BkN1VTUA.js";import"./index-BgFkqkoM.js";import"./index-ByTtsog6.js";import"./index-CTKLJSsf.js";import"./index-DzeBy8FO.js";import"./index-CQQbQqNg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D1pBRLIk.js";import"./addCustomCSSWithScoping-Bfd00zUa.js";import"./Gregorian-COydmmOA.js";import"./getCachedLocaleDataInstance-DkdJLr1L.js";import"./query-CzSBusdE.js";import"./Input-CmhKXc0K.js";import"./ResponsivePopoverCommon.css-BI55EcO7.js";import"./ValueStateMessage.css-BBVlRBqU.js";import"./Suggestions.css-hXMoKZOy.js";import"./appointment-2-DVregyO4.js";import"./ListItemStandard-IaHLS1HF.js";import"./slim-arrow-left-DDNh0Lee.js";import"./Calendar-BKRhFBO1.js";import"./InvisibleMessage-MKUVNUZM.js";import"./index-Z4g25ytt.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
