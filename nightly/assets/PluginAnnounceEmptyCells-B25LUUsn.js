import{j as t}from"./iframe-BIP38Qmu.js";import{useMDXComponents as i}from"./index-CCzfQ4AK.js";import{I as n}from"./CommandsAndQueries-BAg-w2Ve.js";import{M as m,C as p}from"./blocks-69-jnurL.js";import"./Tag-D0zcjL-3.js";import"./index-C_7tcSj3.js";import"./copy-nvOf1vVL.js";import{F as s}from"./Footer-DAbghHc6.js";import"./PageNotFound-z2fC1f6d.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-D-G1sdpB.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B13MM4G6.js";import"./index-Du9D3QZW.js";import"./index-DXmoRv88.js";import"./index-ZEQXSIQn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BrBZ3oM5.js";import"./addCustomCSSWithScoping-3IpFFLGa.js";import"./index-BlYNx0T3.js";import"./index-C0fOqYC4.js";import"./index-BEp_fWNn.js";import"./information-Cf_JR6Aw.js";import"./sys-enter-2-D5AeNUHf.js";import"./alert-CMm7pEpj.js";import"./index-pu7JlX44.js";import"./Illustrations-BEksg9v0.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dz4xcjRe.js";import"./delete-Dur4E_xL.js";import"./settings-De85Y9Vl.js";import"./NoData-CvrvV3LA.js";import"./NoFilterResults-CDQjvK-k.js";import"./index-IvByI7by.js";import"./IllustratedMessage-DykZSGsY.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DE6oriP5.js";import"./Input-Vh2SZ5wm.js";import"./ResponsivePopoverCommon.css-BkF_hMva.js";import"./ValueStateMessage.css-CUWnXMd3.js";import"./Suggestions.css-B5HWK93E.js";import"./ListBoxItemGroupTemplate-DSD3qJlV.js";import"./ComboBoxItemGroup-D5nL8mXK.js";import"./ListItemBaseTemplate-C-sRh5WR.js";import"./Token-DrBChGXT.js";import"./ScrollEnablement-CtvtwLeU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BzHjrys2.js";import"./ToggleButton-BNbivUIh.js";import"./multiselect-all-UIxR7RvH.js";import"./SuggestionItem-BKrlsw9a.js";import"./index-CvzhRPgo.js";import"./Option-CHiJn1LV.js";import"./index-BPqgJU8W.js";import"./SegmentedButton-C8xvUBR3.js";import"./index-DcOjdeVc.js";import"./Select-WWVP6knv.js";import"./InvisibleMessage-CSZZfWPC.js";import"./index-C-XA25zK.js";import"./index-Ci5YREF7.js";import"./index-DSZlMzTu.js";import"./index-Bt4sAh6G.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CzEBxE2M.js";import"./group-2-J7qnivyy.js";import"./sort-descending-D059dpAr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B-FlYCK5.js";import"./utils-Cuf4pSoq.js";import"./index-CF1gGx4H.js";import"./index-Dk6p7GrR.js";import"./index-BIvl_-WU.js";import"./navigation-down-arrow-D-lJHCSC.js";import"./navigation-right-arrow-BBJGgKV7.js";import"./navigation-right-arrow-8O47gqPc.js";import"./useCurrentTheme-CMhG7RYX.js";import"./index-_Oe3u67s.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-yBtQpEip.js";import"./paper-plane-4-sb9eyj.js";import"./index-BfK4ShoC.js";import"./less-BSDtBstK.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(n,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(p,{sourceState:"none",of:l}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const tableHooks = [useAnnounceEmptyCells] // this array should be memoized

<AnalyticalTable
  data={data}
  columns={columns}
  visibleRows={5}
  tableHooks={tableHooks}
/>
`})}),`
`,t.jsx(o.p,{children:t.jsx(o.strong,{children:"First data entry with empty values or undefined fields:"})}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-js",children:`{
  age: undefined,
  friend: {
    name: '',
    age: 0
  },
  status: 'Error'
}
`})}),`
`,t.jsx(s,{})]})}function zt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{zt as default};
