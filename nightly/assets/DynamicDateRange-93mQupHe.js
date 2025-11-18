import{j as e}from"./iframe-CDzsgyAV.js";import{useMDXComponents as s}from"./index-DP2UBTat.js";import{M as m,C as o}from"./blocks-CJQxsMoI.js";import"./Tag-CH-8xgRY.js";import"./index-B8A9WhwY.js";import{C as l}from"./ControlsWithNote-DlQOn3kv.js";import{D as p}from"./DocsHeader-DIz35cDg.js";import{F as d}from"./CommandsAndQueries-CpE7A47V.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-N3rjsBgT.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DHwZAzkU.js";import"./sys-enter-2-DVWP7zgo.js";import"./alert-Fp8ziM7f.js";import"./index-spzGnsRF.js";import"./index-2og1ClCO.js";import"./Link-Dp8FrNqY.js";import"./copy-BZgPaYCt.js";import"./copy-DpKoQtQP.js";import"./GitHub-Mark-BKgRr60A.js";import"./TableOfContent-DQmVPUjd.js";import"./index-CLSChxqE.js";import"./index-C2LW5088.js";import"./index-Df65psIj.js";import"./index-CiXhxUFY.js";import"./index-BToOU55N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_XXs48A.js";import"./addCustomCSSWithScoping-B27SJBwy.js";import"./Gregorian-9v_nzDU3.js";import"./query-CzSBusdE.js";import"./Input-8H7TX9aj.js";import"./ResponsivePopoverCommon.css-C3wd2k-W.js";import"./ValueStateMessage.css-By_XiJ9I.js";import"./Suggestions.css-DDpMPLES.js";import"./appointment-2-BD9VvglO.js";import"./ListItemStandard-ByK6mU7F.js";import"./slim-arrow-left-CPyNxsub.js";import"./Calendar-L-47VT7L.js";import"./InvisibleMessage-D6G5X2tZ.js";import"./index-BiSHSe0e.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
