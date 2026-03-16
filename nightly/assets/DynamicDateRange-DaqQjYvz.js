import{j as e}from"./iframe-CH-Q08Pv.js";import{useMDXComponents as s}from"./index-JegEFivd.js";import{M as m,C as o}from"./blocks-DoFVSa5q.js";import"./Tag-C3CTuin_.js";import"./index-_SHIyctb.js";import{C as p}from"./ControlsWithNote-BP9lHm3C.js";import{D as l}from"./DocsHeader-CD39QVXA.js";import{F as d}from"./Footer-Cg75ltPq.js";import"./CommandsAndQueries-Dlnf61eM.js";import"./PageNotFound-BZ_kgysZ.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CzYQni4A.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DMZ4xbkz.js";import"./sys-enter-2-Cl66mT1N.js";import"./alert-BQx8EBHB.js";import"./index-ByjlU9SJ.js";import"./index-BIHxokcD.js";import"./Link-BR4DnOSS.js";import"./copy-Dye7Zr7r.js";import"./copy-BJgUS9X2.js";import"./GitHub-Mark-Bbgzio7S.js";import"./TableOfContent--cHXPcXI.js";import"./index-CiSOiezA.js";import"./index-nLMQvitA.js";import"./index-DTltU74W.js";import"./index-DZ9Ckgsr.js";import"./index-BLeRJ1tU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYciNjaj.js";import"./addCustomCSSWithScoping-D4FzfPo7.js";import"./Illustrations-DAJG5DXY.js";import"./i18n-defaults-CFWtSmu6.js";import"./Gregorian-EKQ3bNRB.js";import"./getCachedLocaleDataInstance-CblskCTh.js";import"./query-CzSBusdE.js";import"./Input-DZGNZFMo.js";import"./ResponsivePopoverCommon.css-OnbBnNDn.js";import"./ValueStateMessage.css-qBo68dDY.js";import"./Suggestions.css-36Zlw39T.js";import"./appointment-2-CIeexwFZ.js";import"./ListItemStandard-CuB6Oo--.js";import"./slim-arrow-left-Bae-HaNt.js";import"./Calendar-DKydGLBJ.js";import"./InvisibleMessage-B4ZA0kt1.js";import"./index-DMTuLZOk.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
