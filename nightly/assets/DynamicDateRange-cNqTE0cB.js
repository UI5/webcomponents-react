import{j as e}from"./iframe-QfBB5oxv.js";import{u as s,M as m,C as o}from"./blocks-BNoxk89Z.js";import"./Tag-jV4rQ7he.js";import"./index-CXwzMtEr.js";import{C as p}from"./ControlsWithNote-CpNK55OJ.js";import{D as l}from"./DocsHeader-CobLgORO.js";import{F as d}from"./Footer-Djb8KmT2.js";import"./CommandsAndQueries-CHXq-8GX.js";import"./PageNotFound-BF3CKwDf.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DeJJT-SS.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DnhNkDB3.js";import"./sys-enter-2-BMzcK94M.js";import"./alert-Djbx4OhD.js";import"./index-C23APlHe.js";import"./index-BP6rOJzd.js";import"./Link-CjKrRSzJ.js";import"./copy-B-tqVZcU.js";import"./copy-Ddev0qyd.js";import"./GitHub-Mark-C9In8ohp.js";import"./TableOfContent-F4sRBeye.js";import"./index-B0PZpUdZ.js";import"./index-CMW9Znni.js";import"./index-CKPcWxBG.js";import"./index-qK3ZRsrU.js";import"./index-mR2WMj9r.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4b8nEvCn.js";import"./addCustomCSSWithScoping-BzEIPtCm.js";import"./Illustrations-B1Eex0pq.js";import"./i18n-defaults-CFWtSmu6.js";import"./Gregorian-B23OPxoq.js";import"./FormatUtils-DX-77zkK.js";import"./query-CzSBusdE.js";import"./Input-Dq7YMe08.js";import"./ResponsivePopoverCommon.css-CNHfRjyj.js";import"./ValueStateMessage.css-D6MJ9XHs.js";import"./Suggestions.css-DuOxNvnL.js";import"./appointment-2-BYVYVl0_.js";import"./ListItemStandard-CYJdKcUD.js";import"./slim-arrow-left-BbHd42yF.js";import"./Calendar-BDzBsiM-.js";import"./InvisibleMessage-B3q_stCZ.js";import"./index-Cpx9pvDO.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
`,e.jsx(d,{})]})}function oe(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{oe as default};
