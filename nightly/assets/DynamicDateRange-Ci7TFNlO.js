import{j as e}from"./iframe-dcfOuKvt.js";import{useMDXComponents as s}from"./index-s6pmBJrF.js";import{M as m,C as o}from"./blocks-CuD-56fD.js";import"./Tag-wpbJw-fJ.js";import"./index-DKVFb7ln.js";import{C as l}from"./ControlsWithNote-K-6vc354.js";import{D as p}from"./DocsHeader-B-3cymCk.js";import{F as d}from"./CommandsAndQueries-XLh3rfRK.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-D7Pudphz.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CU_5ogqg.js";import"./sys-enter-2-Ws311tut.js";import"./alert-BjY8k0mz.js";import"./index-BFv8_OJi.js";import"./index-CvN_j3lV.js";import"./Link-Bb4iXCLh.js";import"./copy-CDxaMxVB.js";import"./copy-CjQxEWgu.js";import"./GitHub-Mark-CH9yC0yP.js";import"./TableOfContent-Ci6yIg8W.js";import"./index-DPsFL1rE.js";import"./index-ZW_BnH9T.js";import"./index-DOoV4d9M.js";import"./index-CLyQ0iFn.js";import"./index-fw2ccDa-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyhaBlGc.js";import"./addCustomCSSWithScoping-CSOIgEcY.js";import"./Gregorian-zILeG0Rv.js";import"./query-CzSBusdE.js";import"./Input-DZep6tUc.js";import"./ResponsivePopoverCommon.css-OTtjABRB.js";import"./ValueStateMessage.css-CKThLhvq.js";import"./Suggestions.css-DvjeYE6w.js";import"./appointment-2-BLU94lk9.js";import"./ListItemStandard-B3mcYXoD.js";import"./slim-arrow-left-CFhhO6QL.js";import"./Calendar-CYjRIpgc.js";import"./InvisibleMessage-yVfs4fqn.js";import"./index-Bj_K8y3K.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
