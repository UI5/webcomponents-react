import{j as t}from"./iframe-CmCInUUM.js";import{useMDXComponents as n}from"./index-NXwP46VZ.js";import{I as i,F as m}from"./CommandsAndQueries-5W0lVTAB.js";import{M as p,C as s}from"./blocks-Cl0pXsJo.js";import"./Tag-CGuAaCB9.js";import"./index-dx9tkoNT.js";import"./copy-DcIDD3Wq.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-B998ocgs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B5gdlwKM.js";import"./index-Booqb8sh.js";import"./index-DMcZQwaV.js";import"./Link-7Zm1Qi1d.js";import"./index-DXLeTiXI.js";import"./index-CVcma5Dd.js";import"./index-BKQYdjqz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BwmvQWIh.js";import"./addCustomCSSWithScoping-CwKscpVm.js";import"./index-DUfO3zu2.js";import"./information-CRsOZ4kf.js";import"./sys-enter-2-CasWdLF0.js";import"./alert-BeT31Ncd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CWSnjBxa.js";import"./delete-ByaVoT0C.js";import"./settings-2tepRQZU.js";import"./NoData-D9vcDpv1.js";import"./IllustratedMessage-xrcgtvwK.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DeEwKae1.js";import"./index-C2-u_t4E.js";import"./index-B3GkoGRb.js";import"./slim-arrow-down-CMV2GNC8.js";import"./Input-BGKIH-Ic.js";import"./ResponsivePopoverCommon.css-CbiWaSFv.js";import"./ValueStateMessage.css-CnRjV3lN.js";import"./Suggestions.css-C2VGKGgK.js";import"./ListBoxItemGroupTemplate-k-S-fkpm.js";import"./ComboBoxItemGroup-BP14axHQ.js";import"./ListItemBaseTemplate-Qr8U-I-g.js";import"./Token-DPa-8Kib.js";import"./ScrollEnablement-D5S2g6lr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-1o7Rq9a2.js";import"./ToggleButton-BXsjca7D.js";import"./SuggestionItem-B2pt1HBo.js";import"./index-B1jimoj1.js";import"./Option-CFasqXc0.js";import"./index-3jN65nsN.js";import"./SegmentedButton-BKbX-QXu.js";import"./index-EW1SbgQq.js";import"./Select-55Dn_LDE.js";import"./InvisibleMessage-UG9NOdi8.js";import"./slim-arrow-down-DzHwR3gT.js";import"./index-bfIcPC0t.js";import"./index-BcE1ulij.js";import"./index-BqyE9dt2.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CeCfP_kP.js";import"./group-2-oswyoZGa.js";import"./sort-descending-CGLEskGp.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CQOE7bFF.js";import"./utils-CKWqgB9c.js";import"./index-lw26byMY.js";import"./index-Dfo16rW6.js";import"./index-C7mwynkt.js";import"./navigation-down-arrow-DGAK0MlQ.js";import"./navigation-right-arrow-BNormXIu.js";import"./navigation-right-arrow-BskILAgl.js";import"./useCurrentTheme-Dnx3Zrry.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CWEnIavS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DQYLjazp.js";import"./paper-plane-CcL3Dpnl.js";import"./index-Dru_zBSF.js";import"./less-CMdTuNim.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
