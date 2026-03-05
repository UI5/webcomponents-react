import{j as e}from"./iframe-Dp_0Yhmg.js";import{useMDXComponents as s}from"./index-BMV3GZRz.js";import{M as m,C as o}from"./blocks-CKlkgOe3.js";import"./Tag-CNZu_-1j.js";import"./index-nFX3Pl_S.js";import{C as p}from"./ControlsWithNote-D6Km52lx.js";import{D as l}from"./DocsHeader-Be3330dq.js";import{F as d}from"./Footer-Pq4yDBwS.js";import"./CommandsAndQueries-DDLi5yBU.js";import"./PageNotFound-BsRlbC58.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-h9nCj44i.js";import"./preload-helper-PPVm8Dsz.js";import"./information-gl9SwVgW.js";import"./sys-enter-2-0WtHGlhQ.js";import"./alert-Bcw4Fg6E.js";import"./index-DjJhZI7Y.js";import"./index-Cu_XsrMy.js";import"./Link-DcMDvp4G.js";import"./copy-D_yWWCiw.js";import"./copy-BMHKKbyO.js";import"./GitHub-Mark-CsyT0Cam.js";import"./TableOfContent-aahjcOKG.js";import"./index-DpBR8FGa.js";import"./index-DXry597q.js";import"./index-DzgaNcC5.js";import"./index-C5vcogVt.js";import"./index-T5J1jf5G.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCqFx9Uj.js";import"./addCustomCSSWithScoping-CZYJlNXb.js";import"./Illustrations-bZxTgUi1.js";import"./i18n-defaults-C7ICj5-E.js";import"./Gregorian-C44R9-kc.js";import"./getCachedLocaleDataInstance-Nfc5hH9F.js";import"./query-CzSBusdE.js";import"./Input-CRrnYeQZ.js";import"./ResponsivePopoverCommon.css-h1W8s5fZ.js";import"./ValueStateMessage.css-Bf7fXuVn.js";import"./Suggestions.css-nwnFE4qJ.js";import"./appointment-2-DtdRkvRs.js";import"./ListItemStandard-B-TzNdgp.js";import"./slim-arrow-left-CTK7XE9r.js";import"./Calendar-B8mnIuJC.js";import"./InvisibleMessage-B2w_5M6j.js";import"./index-Bql-qSdh.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
