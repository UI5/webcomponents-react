import{j as t}from"./iframe-DjyPEesV.js";import{useMDXComponents as n}from"./index-Pyz_59sj.js";import{I as i,F as m}from"./CommandsAndQueries-CflBmGXr.js";import{M as p,C as s}from"./blocks-BJpyRAuR.js";import"./Tag-BDoCQY53.js";import"./index-R19sOJmE.js";import"./copy-E37vjZto.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-5g3jIKu6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ctou3RkN.js";import"./index-D4GABIF8.js";import"./index-JsLIkweC.js";import"./Link-nHS21YG4.js";import"./index-DIAyR9_V.js";import"./index-BBJM4hPn.js";import"./index-u05KfZkG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BW1MFNTm.js";import"./addCustomCSSWithScoping-fFr9nqx3.js";import"./index-CGGAhfVP.js";import"./information-DUvIlTxn.js";import"./sys-enter-2-BNMMIV_0.js";import"./alert-BdGD6eLJ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-PtrV3Mx2.js";import"./delete-DZYRig-7.js";import"./settings-DC1EpgcZ.js";import"./NoData-DdiSsGzY.js";import"./IllustratedMessage-CKlnOgb7.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-U4i8XfCe.js";import"./index-CNsBuXgW.js";import"./index-DY2Rai9n.js";import"./slim-arrow-down-CaFw53zN.js";import"./Input-BZdy6LBO.js";import"./ResponsivePopoverCommon.css-DXeOzHMx.js";import"./ValueStateMessage.css-BmKDb-GX.js";import"./Suggestions.css-C5GlUmJa.js";import"./ListBoxItemGroupTemplate-B_X2fUlx.js";import"./ComboBoxItemGroup-BfNx4b9Y.js";import"./ListItemBaseTemplate-CGBpHG4N.js";import"./Token-CERKwtWD.js";import"./ScrollEnablement-80w6Waas.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CqBB8H1C.js";import"./ToggleButton-sq5iQT6D.js";import"./SuggestionItem-BjJ5fzBJ.js";import"./index-DKn-wdwl.js";import"./Option-BQ6ou2d_.js";import"./index-D4m9Bgxm.js";import"./SegmentedButton-D2TYrx6h.js";import"./index-DPf5ZEwJ.js";import"./Select-CwPYCNeP.js";import"./InvisibleMessage-BV-YL2wk.js";import"./slim-arrow-down-CxX1-7RK.js";import"./index--b5YbzYZ.js";import"./index-BUOYq7SN.js";import"./index-CrmY2ZO8.js";import"./index-Bgg2l2DV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ClODWfE8.js";import"./group-2-DPcrYzkY.js";import"./sort-descending-CTRvyWvg.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-VEN8hAU2.js";import"./utils-D-4bFYd0.js";import"./index-DuTvknKW.js";import"./index-BCddFEwR.js";import"./index-Kss5k088.js";import"./navigation-down-arrow--9pMM64P.js";import"./navigation-right-arrow-B4wTEztn.js";import"./navigation-right-arrow-DNYuNDO1.js";import"./useCurrentTheme-BSBgMXT1.js";import"./index-lcNTjYV-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-_YfBcCD_.js";import"./paper-plane-CUdav5bq.js";import"./index-7fWe1uut.js";import"./less-B9Odq6DG.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
