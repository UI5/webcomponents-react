import{j as e}from"./iframe-CZUFstmy.js";import{useMDXComponents as s}from"./index-CNbwg358.js";import{M as m,C as o}from"./blocks-DX4VSw2u.js";import"./Tag-CX2RPQC9.js";import"./index-Dh_fZ_AU.js";import{C as p}from"./ControlsWithNote-DFVBh2BZ.js";import{D as l}from"./DocsHeader-DDq07vb2.js";import{F as d}from"./Footer-DYeNln-j.js";import"./CommandsAndQueries-BhlCA6ZS.js";import"./PageNotFound-BJZaFG9t.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CSvqAxPg.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D6yKBjSF.js";import"./sys-enter-2-BfHAZzl4.js";import"./alert-CE2QesT5.js";import"./index-6TF1-Ysc.js";import"./index-Q62qsF52.js";import"./Link-htzAGpr-.js";import"./copy--7D1kRVJ.js";import"./copy-DtLjTz9V.js";import"./GitHub-Mark-DmtnxKJJ.js";import"./TableOfContent-BsH3eRwE.js";import"./index-DQ321HEy.js";import"./index-gKv9WyUX.js";import"./index-BTnDvpxF.js";import"./index-BpjPalsU.js";import"./index-DrW2JSp2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D2TR7fwJ.js";import"./addCustomCSSWithScoping-CYgyEKVM.js";import"./Illustrations-BPYsG6-r.js";import"./i18n-defaults-CFWtSmu6.js";import"./Gregorian-BPqd6cPJ.js";import"./getCachedLocaleDataInstance-0rD1EN5f.js";import"./query-CzSBusdE.js";import"./Input-fn8ljQGs.js";import"./ResponsivePopoverCommon.css-DPX2HjcJ.js";import"./ValueStateMessage.css-DWfde9O8.js";import"./Suggestions.css-BEQDSh_K.js";import"./appointment-2-DW9qxn1H.js";import"./ListItemStandard-CK8F7PPv.js";import"./slim-arrow-left-DzS-jevK.js";import"./Calendar-BxMH_QC3.js";import"./InvisibleMessage-OFemtJNl.js";import"./index-CZRh6aRn.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
