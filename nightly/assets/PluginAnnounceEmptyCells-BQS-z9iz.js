import{j as t}from"./iframe-DbW3_KqJ.js";import{useMDXComponents as n}from"./index-BOUZeiU3.js";import{I as i,F as m}from"./CommandsAndQueries-CJXOedaX.js";import{M as p,C as s}from"./blocks-DqJAVTfM.js";import"./Tag-CrC0d5GD.js";import"./index-ImYws479.js";import"./copy-D0b8WOcv.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-C3j7y0Ft.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cbn-jnZC.js";import"./index-Dzqums5N.js";import"./index-WvKt5Tsy.js";import"./Link-C0NTxSly.js";import"./index-xs8VNv2y.js";import"./index-1dv7YKpz.js";import"./index-CoALISWz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-3tP5nwl9.js";import"./addCustomCSSWithScoping-U-EEhqSi.js";import"./index-D2hl9olI.js";import"./information-Cagswqpw.js";import"./sys-enter-2-DbM4lnFg.js";import"./alert-CAARFYG8.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Kyr9bwxl.js";import"./delete-7kEH9zFU.js";import"./settings-CPOuKNF_.js";import"./NoData-D8FNeakc.js";import"./IllustratedMessage-B77VIY0P.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DbJPpgwn.js";import"./index-CsMoMDOx.js";import"./index-DPXPqi6L.js";import"./slim-arrow-down-DZTc9bRP.js";import"./Input-B594VYIN.js";import"./ResponsivePopoverCommon.css-wzLcNDkL.js";import"./ValueStateMessage.css-Cspg1vkt.js";import"./Suggestions.css-BJhE_NNC.js";import"./ListBoxItemGroupTemplate-DMGEwk8N.js";import"./ComboBoxItemGroup-CGtI3Meb.js";import"./ListItemBaseTemplate-DgHiFsEB.js";import"./Token-7NJT_TyT.js";import"./ScrollEnablement-DHqnHvnh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dh3kIvJd.js";import"./ToggleButton-BULIjCh6.js";import"./SuggestionItem-D54ydvSC.js";import"./index-CEivT01K.js";import"./Option-CB3qwa7U.js";import"./index-8Oxx1U00.js";import"./SegmentedButton-Djmbus1g.js";import"./index-Bo8mGM12.js";import"./Select-DFkj0A5Y.js";import"./InvisibleMessage-Dqs72f3d.js";import"./slim-arrow-down-BHhWiK1Y.js";import"./index-DGkRDeyQ.js";import"./index-D_wk7CKO.js";import"./index-CEyjDTxm.js";import"./IconDesign-DXd8PPVF.js";import"./filter-kor-VHIc.js";import"./group-2-Dv1jTfz7.js";import"./sort-descending-BEY_9WPQ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DcIo-1Oj.js";import"./utils-Z_eUiVi_.js";import"./index-CGCQMYH4.js";import"./index-C_WCWx9F.js";import"./index-BAurpHKw.js";import"./navigation-down-arrow-BCDTP6Pm.js";import"./navigation-right-arrow-B1u1SCxi.js";import"./navigation-right-arrow-DvU1W2Rx.js";import"./useCurrentTheme-BytYqbwR.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D0rSGhJQ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BhPu4d3o.js";import"./paper-plane-BX09Tgvg.js";import"./index-6ykrLfuk.js";import"./less-CsWhpeDW.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
