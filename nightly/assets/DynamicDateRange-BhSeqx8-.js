import{j as e}from"./iframe-DMN4M7xk.js";import{useMDXComponents as s}from"./index-CILjehOn.js";import{M as m,C as o}from"./blocks-D_B3P_L6.js";import"./Tag-ClYMjcis.js";import"./index-fsDm6-dx.js";import{C as l}from"./ControlsWithNote-tXM9Snha.js";import{D as p}from"./DocsHeader-MRAxGgEE.js";import{F as d}from"./CommandsAndQueries-WBNIPpbv.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-Qg1XW7io.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BhNJA5fs.js";import"./sys-enter-2-D_7r5iCR.js";import"./alert-B4Ie2dEw.js";import"./index-DC1f3cIv.js";import"./index-Bm615TpC.js";import"./Link-USYy1Qgl.js";import"./copy-B73e9Yog.js";import"./copy-DfWrS8Wl.js";import"./GitHub-Mark-Yj5YdLl8.js";import"./TableOfContent-B_sZsaRY.js";import"./index-XJcxBhVz.js";import"./index-CZCgHbbj.js";import"./index-Bppq7NLw.js";import"./index-DPueH0sU.js";import"./index-W50AkbAB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-IlXAI9zt.js";import"./addCustomCSSWithScoping-dib_Xrvh.js";import"./Gregorian-D7MPEVQU.js";import"./query-CzSBusdE.js";import"./Input-kyaMbtwm.js";import"./ResponsivePopoverCommon.css-DoVie0vW.js";import"./ValueStateMessage.css-C3TIUP8t.js";import"./Suggestions.css-CBNkZ6eC.js";import"./appointment-2-B4ySUnhq.js";import"./ListItemStandard-t6-iH22V.js";import"./slim-arrow-left-D_NcfYdv.js";import"./Calendar-DgosWNY-.js";import"./InvisibleMessage-CgRkoQY3.js";import"./index-BI8mE9zy.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
