import{j as e}from"./iframe-sSOxzerW.js";import{useMDXComponents as s}from"./index-C4N772Ec.js";import{M as m,C as o}from"./blocks-DZ5JcJjQ.js";import"./Tag-Bf5UwcWO.js";import"./index-DoYi49fY.js";import{C as l}from"./ControlsWithNote-DWfqd7qS.js";import{D as p}from"./DocsHeader-B8evmEUS.js";import{F as d}from"./CommandsAndQueries-DN1a2yy9.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BI7FjbDe.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D7Jek_j9.js";import"./sys-enter-2-CJf9FrQN.js";import"./alert-BmkkzoHl.js";import"./index-KAoDxHkF.js";import"./index-CbHc7dVQ.js";import"./Link-DXd90h-X.js";import"./copy-CTTYzu71.js";import"./copy-VA4auTr6.js";import"./GitHub-Mark-BcdaJ4P0.js";import"./TableOfContent-BphLRplv.js";import"./index-PB68rHIj.js";import"./index-BcOGuNSc.js";import"./index-pczPksUh.js";import"./index-DhmKmBvV.js";import"./index-AsGnG6fc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-k9gqQhIN.js";import"./addCustomCSSWithScoping-8kQXqHvm.js";import"./Gregorian-DKohzotk.js";import"./query-CzSBusdE.js";import"./Input-CWyqJw20.js";import"./ResponsivePopoverCommon.css-ujCiRX3T.js";import"./ValueStateMessage.css-Bf_f1VXt.js";import"./Suggestions.css-CsTtHaeM.js";import"./appointment-2-Cnc0k8Dw.js";import"./ListItemStandard-CGX3xged.js";import"./slim-arrow-left-D9r4e_3E.js";import"./Calendar-DdKz_Pmz.js";import"./InvisibleMessage-DEsSOQlO.js";import"./index-By0nFfgd.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
