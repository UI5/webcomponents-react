import{j as e}from"./iframe-DrPmn2Fl.js";import{useMDXComponents as s}from"./index-D0JiuHQ4.js";import{M as m,C as o}from"./blocks-BjYhsAle.js";import"./Tag-DTGJG_3A.js";import"./index-D7exUdgR.js";import{C as l}from"./ControlsWithNote-AZb4CeHf.js";import{D as p}from"./DocsHeader-Ck2be5Yc.js";import{F as d}from"./CommandsAndQueries-DJtqUE3T.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CwNrM0Hq.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B3e_XIJr.js";import"./sys-enter-2-BzGI5wIC.js";import"./alert-k9YiTQ21.js";import"./index-BryeGZHH.js";import"./index-pqPyLDtB.js";import"./Link-DpbM7hv-.js";import"./copy-65kpRtEk.js";import"./copy-BYLHU9Z4.js";import"./GitHub-Mark-DKAUGK9x.js";import"./TableOfContent-DpdaqcN6.js";import"./index-BcboqTLf.js";import"./index-7KEOFJG9.js";import"./index-CSSeCaDH.js";import"./index-BDgABtQ5.js";import"./index-CsBAZiQX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D8f6CQWY.js";import"./addCustomCSSWithScoping-Dp7JQ0AP.js";import"./Gregorian-Dd4i_-7I.js";import"./query-CzSBusdE.js";import"./Input-CpYyucC6.js";import"./ResponsivePopoverCommon.css-aFKlRj1z.js";import"./ValueStateMessage.css-B2kFKHCy.js";import"./Suggestions.css-BixA8_8b.js";import"./appointment-2-Dcu8F0ye.js";import"./ListItemStandard-BlHk0Rap.js";import"./slim-arrow-left-D3-iNxro.js";import"./Calendar-Cv3fOWux.js";import"./InvisibleMessage-CRnN6wGW.js";import"./index-C2pRBdY7.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
