import{j as e}from"./iframe-CmCInUUM.js";import{useMDXComponents as s}from"./index-NXwP46VZ.js";import{M as m,C as o}from"./blocks-Cl0pXsJo.js";import"./Tag-CGuAaCB9.js";import"./index-dx9tkoNT.js";import{C as l}from"./ControlsWithNote-CE-dBef4.js";import{D as p}from"./DocsHeader-BdspJgB_.js";import{F as d}from"./CommandsAndQueries-5W0lVTAB.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BLB95ScE.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CRsOZ4kf.js";import"./sys-enter-2-CasWdLF0.js";import"./alert-BeT31Ncd.js";import"./index-DUfO3zu2.js";import"./index-DMcZQwaV.js";import"./Link-7Zm1Qi1d.js";import"./copy-D-eKEu_q.js";import"./copy-DcIDD3Wq.js";import"./GitHub-Mark-DRJliJiv.js";import"./TableOfContent-Fd1ozcTL.js";import"./index-B5gdlwKM.js";import"./index-Booqb8sh.js";import"./index-DXLeTiXI.js";import"./index-CVcma5Dd.js";import"./index-BKQYdjqz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BwmvQWIh.js";import"./addCustomCSSWithScoping-CwKscpVm.js";import"./Gregorian-LGWZuY4L.js";import"./query-CzSBusdE.js";import"./Input-BGKIH-Ic.js";import"./ResponsivePopoverCommon.css-CbiWaSFv.js";import"./ValueStateMessage.css-CnRjV3lN.js";import"./Suggestions.css-C2VGKGgK.js";import"./appointment-2-Csizx-FI.js";import"./ListItemStandard-1o7Rq9a2.js";import"./slim-arrow-left-D4XS7Kkx.js";import"./Calendar-DD70B1Qc.js";import"./InvisibleMessage-UG9NOdi8.js";import"./index-CQOE7bFF.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
