import{j as e}from"./iframe-BCh37-GP.js";import{useMDXComponents as s}from"./index-E1HFg4gZ.js";import{M as m,C as o}from"./blocks-CS5FlooX.js";import"./Tag-B_Qpe0TE.js";import"./index-DKQ6JIGw.js";import{C as l}from"./ControlsWithNote-VGyFb7bj.js";import{D as p}from"./DocsHeader-Oc-YoLFw.js";import{F as d}from"./CommandsAndQueries-BaHr-COi.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-Datugt5I.js";import"./preload-helper-PPVm8Dsz.js";import"./information-3OCHA3NQ.js";import"./sys-enter-2-C8D5BzD8.js";import"./alert-DXLNWSuU.js";import"./index-DTOYUFlO.js";import"./index-Bv89sSp1.js";import"./Link-BSH3TTIl.js";import"./copy-CWitJF73.js";import"./copy-7yIahvRv.js";import"./GitHub-Mark-CS_ef1g-.js";import"./TableOfContent-CDzDz3nz.js";import"./index-JFrdX4G8.js";import"./index-CTMnj1ho.js";import"./index-BonVTnTn.js";import"./index-OKdWlUZi.js";import"./index-DMXHNrMi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCrrvnNY.js";import"./addCustomCSSWithScoping-5ena9gAo.js";import"./Gregorian-B8O0R5EL.js";import"./query-CzSBusdE.js";import"./Input-BV2Kpufx.js";import"./ResponsivePopoverCommon.css-Dj0T0ryX.js";import"./ValueStateMessage.css-BPaxhl46.js";import"./Suggestions.css-d96Y8STr.js";import"./appointment-2-_87f4A8e.js";import"./ListItemStandard-Bb53oDTA.js";import"./slim-arrow-left-BE4iAr4h.js";import"./Calendar-cPGYRVwm.js";import"./InvisibleMessage-DkbocxqO.js";import"./index-Dst6fVDY.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
