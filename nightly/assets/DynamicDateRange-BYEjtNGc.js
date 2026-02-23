import{j as e}from"./iframe-ERwSzs3g.js";import{useMDXComponents as s}from"./index-C_Wbk-9f.js";import{M as m,C as o}from"./blocks-CPggC12N.js";import"./Tag-B-CdIpAx.js";import"./index-CaDxd8lJ.js";import{C as l}from"./ControlsWithNote-Bv8JsWe_.js";import{D as p}from"./DocsHeader-Bv58yv9U.js";import{F as d}from"./CommandsAndQueries-Dd3ZB-Zm.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DJGYcJNk.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CHdxYb5g.js";import"./sys-enter-2-CJZeFu0K.js";import"./alert-DqHHhUpv.js";import"./index-BcvsAi-y.js";import"./index-I8Rn_Xtk.js";import"./Link-BEsTVss7.js";import"./copy-CSXF2cyh.js";import"./copy-CudSiVH8.js";import"./GitHub-Mark-Bu8jRQF_.js";import"./TableOfContent-3se_hcJR.js";import"./index-D0Kgz2KY.js";import"./index-CL--3ayL.js";import"./index-RyYuggn2.js";import"./index--5AI5DCY.js";import"./index-CZ9mn71l.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BxRB-GRE.js";import"./addCustomCSSWithScoping-Clegv1AW.js";import"./Gregorian-CVH1uiPz.js";import"./getCachedLocaleDataInstance-DxbUiMXj.js";import"./query-CzSBusdE.js";import"./Input-DSupStK3.js";import"./ResponsivePopoverCommon.css-DReQi8ZR.js";import"./ValueStateMessage.css-Lf_StamT.js";import"./Suggestions.css-BIz0Zv49.js";import"./appointment-2-pEDFIn0Q.js";import"./ListItemStandard-Ck-G_e39.js";import"./slim-arrow-left-gRPtWnGH.js";import"./Calendar-C_TAjCod.js";import"./InvisibleMessage-CtK1BuKZ.js";import"./index-YnPiPISE.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
