import{j as e}from"./iframe-BDg7FSoj.js";import{useMDXComponents as s}from"./index-CfS6z3MT.js";import{M as m,C as o}from"./blocks-D274WTCA.js";import"./Tag-D7GKpW6g.js";import"./index-BfRGPCU-.js";import{C as p}from"./ControlsWithNote-hta_rmOq.js";import{D as l}from"./DocsHeader-Br2gHYWL.js";import{F as d}from"./Footer-DcSScdvn.js";import"./CommandsAndQueries-BgLg0c2t.js";import"./PageNotFound-Cz7A_GPz.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CBiYE9vf.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DD__sQ7N.js";import"./sys-enter-2-Dp2sy9f7.js";import"./alert-C6BvEboW.js";import"./index-DKaIOimk.js";import"./index-CtXj8tW6.js";import"./Link-DweKFefr.js";import"./copy-Dwmjmk6r.js";import"./copy-LtMPx_h3.js";import"./GitHub-Mark-BXWTi3jp.js";import"./TableOfContent-LJE63-X7.js";import"./index-ClFnafIK.js";import"./index-Ca5wJMxN.js";import"./index-YYn2-nAM.js";import"./index-Cr06KJoh.js";import"./index-Cs36UH1Y.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CX4riDWF.js";import"./addCustomCSSWithScoping-DjKpxhL9.js";import"./Illustrations-BhEYUAiS.js";import"./i18n-defaults-CFWtSmu6.js";import"./Gregorian-Yc43erKo.js";import"./getCachedLocaleDataInstance-BGAo40Yk.js";import"./query-CzSBusdE.js";import"./Input-DPh2xJTy.js";import"./ResponsivePopoverCommon.css-YN2yb077.js";import"./ValueStateMessage.css-CZSQW4Xi.js";import"./Suggestions.css-CoI0xqid.js";import"./appointment-2-DVtTJ16J.js";import"./ListItemStandard-C9BXoiP3.js";import"./slim-arrow-left-Dibcwihs.js";import"./Calendar-E6B72Uaj.js";import"./InvisibleMessage-DTrhxE2q.js";import"./index-BYaJ9Gcz.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
