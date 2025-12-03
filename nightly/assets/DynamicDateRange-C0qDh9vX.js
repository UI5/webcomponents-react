import{j as e}from"./iframe-B13aKv6v.js";import{useMDXComponents as s}from"./index-jGGDFlkx.js";import{M as m,C as o}from"./blocks-BRIltIP5.js";import"./Tag-HMLNjm9Q.js";import"./index-CFkX7Uxi.js";import{C as l}from"./ControlsWithNote-fWXazrnc.js";import{D as p}from"./DocsHeader-eEoaA6b8.js";import{F as d}from"./CommandsAndQueries-7UV00q7g.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-jd7N8OXc.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C04ctOuE.js";import"./sys-enter-2-BKiD2CPA.js";import"./alert-CBEx5R4q.js";import"./index-DGzKTrI0.js";import"./index-Ccfu3Okh.js";import"./Link-Ch0RD6vq.js";import"./copy-DrFGZKk-.js";import"./copy-Cbp2BA1I.js";import"./GitHub-Mark-Cq8kjn3y.js";import"./TableOfContent-DaHf-bNu.js";import"./index-hEU5-O_h.js";import"./index-xeEGs0j3.js";import"./index-BTTMPEs9.js";import"./index-CEC3Cwv3.js";import"./index-BNwKsAav.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DC9Otah0.js";import"./addCustomCSSWithScoping-PHSG-stG.js";import"./Gregorian-gAioNCCk.js";import"./query-CzSBusdE.js";import"./Input-CRbjoL5G.js";import"./ResponsivePopoverCommon.css-zkAUwXvS.js";import"./ValueStateMessage.css-Drc3FRo7.js";import"./Suggestions.css-CxcKjt1z.js";import"./appointment-2-wGgO7ZVv.js";import"./ListItemStandard-MiMIRncl.js";import"./slim-arrow-left-BLtklwQx.js";import"./Calendar-N2EGma7l.js";import"./InvisibleMessage-B3ODCafQ.js";import"./index-BAmsrgmU.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
