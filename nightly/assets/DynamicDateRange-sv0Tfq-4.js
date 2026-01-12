import{j as e}from"./iframe-B3T0Oj7B.js";import{useMDXComponents as s}from"./index-D3UxDze4.js";import{M as m,C as o}from"./blocks-CyPgi3fl.js";import"./Tag-BebiXErc.js";import"./index-dJAxIfZY.js";import{C as l}from"./ControlsWithNote-C1V9eZ5n.js";import{D as p}from"./DocsHeader-QqmuRAQk.js";import{F as d}from"./CommandsAndQueries-DvsDK9ZB.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DsIW91Zv.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CDiFrRjk.js";import"./sys-enter-2-CspjHMoa.js";import"./alert-BsEVUmBp.js";import"./index-BywqBC1y.js";import"./index-BctJwJOg.js";import"./Link-Bk4EX_BP.js";import"./copy-DfWvHyjG.js";import"./copy-_Qj_KEfj.js";import"./GitHub-Mark-Jk8JGZzB.js";import"./TableOfContent-zwMPdMlr.js";import"./index-D37akpKi.js";import"./index-B8hvCU9O.js";import"./index-Bik-cKeX.js";import"./index-D_qT_Ogl.js";import"./index-CpVd5OAx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CVuzLNiB.js";import"./addCustomCSSWithScoping-BR9GACjU.js";import"./Gregorian-Ct-A76zb.js";import"./query-CzSBusdE.js";import"./Input-B0UijuIu.js";import"./ResponsivePopoverCommon.css-Dq6Kf127.js";import"./ValueStateMessage.css-BCQWXayY.js";import"./Suggestions.css-Dh9vGknx.js";import"./appointment-2-Dz3xZ9UB.js";import"./ListItemStandard-CFRLr_io.js";import"./slim-arrow-left-95__r814.js";import"./Calendar-BeXxx9Mh.js";import"./InvisibleMessage-CAuS8-0Y.js";import"./index-Cddj7KtI.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
