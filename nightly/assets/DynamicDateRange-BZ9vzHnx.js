import{j as e}from"./iframe-vPuL6nrR.js";import{useMDXComponents as s}from"./index-SqnB7SsH.js";import{M as m,C as o}from"./blocks-CGVrLY5L.js";import"./Tag-Bv6LdF2m.js";import"./index-CrDwtJBU.js";import{C as l}from"./ControlsWithNote-a1UinLEk.js";import{D as p}from"./DocsHeader-CSCF6kAf.js";import{F as d}from"./CommandsAndQueries-BhV0DcZ1.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BrVkNioX.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D9zj9sOE.js";import"./sys-enter-2-D6w_QQfA.js";import"./alert-C_Ss2xwM.js";import"./index-CfldzWz8.js";import"./index-BrWx5AOh.js";import"./Link-eKxzOHxo.js";import"./copy-QG4ReKgs.js";import"./copy-DGJagZ4x.js";import"./GitHub-Mark-BYVMr9TD.js";import"./TableOfContent-Tu4xnnoI.js";import"./index-MOLGybyv.js";import"./index-D8Laxk3p.js";import"./index-C6iociGO.js";import"./index-DeGdMjr2.js";import"./index-D5bO2WHW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DQtnDDkb.js";import"./addCustomCSSWithScoping-Ddp0ymp7.js";import"./Gregorian-DhcGq9jJ.js";import"./query-CzSBusdE.js";import"./Input-CChiahoF.js";import"./ResponsivePopoverCommon.css-C2d2sUac.js";import"./ValueStateMessage.css-BuG0YrNm.js";import"./Suggestions.css-J9EImHe6.js";import"./appointment-2-CDL_XkXu.js";import"./ListItemStandard-CImLKtWb.js";import"./slim-arrow-left-CgfodWWe.js";import"./Calendar-BN6dKadO.js";import"./InvisibleMessage-CuC6Puks.js";import"./index-UEPJgIKA.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
