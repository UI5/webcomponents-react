import{j as e}from"./iframe-By2gmFxc.js";import{useMDXComponents as s}from"./index-gKb_GMnq.js";import{M as m,C as o}from"./blocks-D2uzjwbj.js";import"./Tag-Q4xsur8Q.js";import"./index-CIY2e3dX.js";import{C as l}from"./ControlsWithNote-J_FS3ar_.js";import{D as p}from"./DocsHeader-BQhjxotY.js";import{F as d}from"./CommandsAndQueries-MwhWu1jt.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-9L2FeK_i.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DZbn4exg.js";import"./sys-enter-2-D1EL9sqg.js";import"./alert-Dj00yiIa.js";import"./index-c5NRQxKp.js";import"./index-CYEIBPim.js";import"./Link-nWDhDuhI.js";import"./copy-BckvoikG.js";import"./copy-jhrg3Bh5.js";import"./GitHub-Mark-C0HJUWkv.js";import"./TableOfContent-DNYBmsFN.js";import"./index-DjdoJ-R-.js";import"./index-JdoT9BRG.js";import"./index-4iQpwXEW.js";import"./index-XAF-DZNA.js";import"./index-BlQvs7kx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dl2hQFWK.js";import"./addCustomCSSWithScoping-BCT2RHCk.js";import"./Gregorian-kKi5G6Ba.js";import"./query-CzSBusdE.js";import"./Input-BkjEUhdM.js";import"./ResponsivePopoverCommon.css-GYWWINRP.js";import"./ValueStateMessage.css-BgBsH41F.js";import"./Suggestions.css-DYhFblt3.js";import"./appointment-2-DkbXQfP4.js";import"./ListItemStandard-Ba2CipUt.js";import"./slim-arrow-left-DKj-xelv.js";import"./Calendar-BmPHRKPA.js";import"./InvisibleMessage-_t19LlQz.js";import"./index-Dno9Fs_e.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
