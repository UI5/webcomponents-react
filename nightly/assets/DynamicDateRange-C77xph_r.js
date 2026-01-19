import{j as e}from"./iframe-DD7p555z.js";import{useMDXComponents as s}from"./index-DKhj08U7.js";import{M as m,C as o}from"./blocks-BAWH2K4k.js";import"./Tag-YiwRoJC6.js";import"./index-iP_JBMT4.js";import{C as l}from"./ControlsWithNote-I_wKMF9F.js";import{D as p}from"./DocsHeader-O7x7UQk2.js";import{F as d}from"./CommandsAndQueries-CKwguJVF.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-qLAZmKiR.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C853I-0E.js";import"./sys-enter-2-DMe79a_K.js";import"./alert-Dl3EzObX.js";import"./index-Dnnz-gOR.js";import"./index-CjiVltgT.js";import"./Link-CERJMGdw.js";import"./copy-DkHfcYEo.js";import"./copy-BvS2jijZ.js";import"./GitHub-Mark-CfIO9-sJ.js";import"./TableOfContent-CRlyqsx3.js";import"./index-Dl6MCkfr.js";import"./index-DNGDxbjZ.js";import"./index-4YigTS5a.js";import"./index-D_31Usqf.js";import"./index-k0OzfFck.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-buNhKImf.js";import"./addCustomCSSWithScoping-rp5A8jrF.js";import"./Gregorian-P2pN0Ze9.js";import"./query-CzSBusdE.js";import"./Input-Ei-pBwN-.js";import"./ResponsivePopoverCommon.css-B_lrtiGe.js";import"./ValueStateMessage.css-BYebuE_v.js";import"./Suggestions.css--XkU6wI1.js";import"./appointment-2-B1vXghj1.js";import"./ListItemStandard-CoZosRcD.js";import"./slim-arrow-left-Cu1xKxVs.js";import"./Calendar-CG68EJof.js";import"./InvisibleMessage-CBGNW5FA.js";import"./index-DHyUerlm.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
