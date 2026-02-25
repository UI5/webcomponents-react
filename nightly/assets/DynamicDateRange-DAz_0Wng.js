import{j as e}from"./iframe-CtC7gYmF.js";import{useMDXComponents as s}from"./index-Di_URU-1.js";import{M as m,C as o}from"./blocks-mn43RK2l.js";import"./Tag-DL1jc8MZ.js";import"./index-BQgIK84O.js";import{C as l}from"./ControlsWithNote-VDJmcR8g.js";import{D as p}from"./DocsHeader-Bz17cmNN.js";import{F as d}from"./CommandsAndQueries-DJ8rBoed.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-R76zOLfe.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CFH6-U84.js";import"./sys-enter-2-DcKU3U88.js";import"./alert-BgZS6-Ve.js";import"./index-B89psySH.js";import"./index-C6r9Z_qm.js";import"./Link-DC3Ks00x.js";import"./copy-Bc4RlbqC.js";import"./copy-qYhvVcV8.js";import"./GitHub-Mark-BaXje0NN.js";import"./TableOfContent-FJaxAP6D.js";import"./index-Bc0i7q2T.js";import"./index-BjvlOMJE.js";import"./index-D2-G6hnA.js";import"./index-DbYbEtFi.js";import"./index-BCFTf5Mq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVmORIKm.js";import"./addCustomCSSWithScoping-u1_Fcso4.js";import"./Gregorian-DfvatDl5.js";import"./getCachedLocaleDataInstance-gBsk9cw7.js";import"./query-CzSBusdE.js";import"./Input-BzurqpwY.js";import"./ResponsivePopoverCommon.css-CWluabdp.js";import"./ValueStateMessage.css-DobtBfbj.js";import"./Suggestions.css-C-jhG9YF.js";import"./appointment-2-Dys19V_S.js";import"./ListItemStandard-x5B2lMAL.js";import"./slim-arrow-left-BPYZvRbs.js";import"./Calendar-BXx1pNev.js";import"./InvisibleMessage-DuKRASmz.js";import"./index-CCsq8n3w.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
