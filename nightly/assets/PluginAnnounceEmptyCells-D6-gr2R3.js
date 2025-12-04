import{j as t}from"./iframe-DMN4M7xk.js";import{useMDXComponents as n}from"./index-CILjehOn.js";import{I as i,F as m}from"./CommandsAndQueries-WBNIPpbv.js";import{M as p,C as s}from"./blocks-D_B3P_L6.js";import"./Tag-ClYMjcis.js";import"./index-fsDm6-dx.js";import"./copy-DfWrS8Wl.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Bwh82CG4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-XJcxBhVz.js";import"./index-CZCgHbbj.js";import"./index-Bm615TpC.js";import"./Link-USYy1Qgl.js";import"./index-Bppq7NLw.js";import"./index-DPueH0sU.js";import"./index-W50AkbAB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-IlXAI9zt.js";import"./addCustomCSSWithScoping-dib_Xrvh.js";import"./index-DC1f3cIv.js";import"./information-BhNJA5fs.js";import"./sys-enter-2-D_7r5iCR.js";import"./alert-B4Ie2dEw.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-72B-FfI5.js";import"./delete-BXcfeAkW.js";import"./settings-BMDPPYXO.js";import"./NoData-DpL9B_tB.js";import"./IllustratedMessage-mQG8NQdQ.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DfpnzG1x.js";import"./index-DEnaRZHs.js";import"./index-DdLV16yZ.js";import"./slim-arrow-down-BMYaUctI.js";import"./Input-kyaMbtwm.js";import"./ResponsivePopoverCommon.css-DoVie0vW.js";import"./ValueStateMessage.css-C3TIUP8t.js";import"./Suggestions.css-CBNkZ6eC.js";import"./ListBoxItemGroupTemplate-DCFa39XX.js";import"./ComboBoxItemGroup-B-BVlY4D.js";import"./ListItemBaseTemplate-Daft9BoV.js";import"./Token-Z8h45JU6.js";import"./ScrollEnablement-DdRp-vrJ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-t6-iH22V.js";import"./ToggleButton--FmypGgi.js";import"./SuggestionItem-Bl1gf1ZL.js";import"./index-D9Z4d1ny.js";import"./Option-C1p55_wy.js";import"./index-DnVGk-28.js";import"./SegmentedButton-DSbC53rX.js";import"./index-BpVvcCHt.js";import"./Select-DvRwS8Np.js";import"./InvisibleMessage-CgRkoQY3.js";import"./slim-arrow-down-Blx7Bq27.js";import"./index-C1jqhprP.js";import"./index-hWsfyVsS.js";import"./index-DRqK0cBV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DbXkmi4n.js";import"./group-2-DsWqo2_5.js";import"./sort-descending-CTHBPK2U.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BI8mE9zy.js";import"./utils-BB4PbXwM.js";import"./index-ouNpfsue.js";import"./index-DdbWS-FF.js";import"./index-CpkaOZjF.js";import"./navigation-down-arrow-CcMgeJLo.js";import"./navigation-right-arrow-g9yG16Y1.js";import"./navigation-right-arrow-CpLRbIv1.js";import"./useCurrentTheme-CGUqiswm.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CCQV-_Jh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DYrYoRZ6.js";import"./paper-plane-B0PE-HLg.js";import"./index-E42MgdkT.js";import"./less-Bk9ZhphN.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(i,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(s,{sourceState:"none",of:l}),`
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
`,t.jsx(m,{})]})}function Rt(r={}){const{wrapper:o}={...n(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{Rt as default};
