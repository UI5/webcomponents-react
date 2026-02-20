import{j as t}from"./iframe-BxNMYsVp.js";import{useMDXComponents as n}from"./index-CEL_Mrqn.js";import{I as i,F as m}from"./CommandsAndQueries-CKT9ys9T.js";import{M as p,C as s}from"./blocks-CLtQlidJ.js";import"./Tag-CYWTluzA.js";import"./index-22bYdtLv.js";import"./copy-DFdPinc0.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DgsES7Vt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-lYnXb9lV.js";import"./index-jhZZ-U6H.js";import"./index-DKLNqf9R.js";import"./Link-DZt8_sp9.js";import"./index-CKGFui_U.js";import"./index-BQbr2ZNY.js";import"./index-7hnHpQRn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CG_dGq_W.js";import"./addCustomCSSWithScoping-CJX4iiEH.js";import"./index-CVOVci2N.js";import"./information-BR3I6cVC.js";import"./sys-enter-2-CKo5vDlS.js";import"./alert-BEt7QhXe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Mk_FwvON.js";import"./delete-BG6noefH.js";import"./settings-B8uhe1cq.js";import"./NoData-DyBdjVCa.js";import"./IllustratedMessage-BCVYMt7I.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CmHtBxQ-.js";import"./index-BXTa98ES.js";import"./index-C3SOSiwl.js";import"./slim-arrow-down-fmy_UgsE.js";import"./Input-D2CSF-Y6.js";import"./ResponsivePopoverCommon.css-C7cuV_Jj.js";import"./ValueStateMessage.css-BFQUPHA9.js";import"./Suggestions.css-BBJox0-v.js";import"./ListBoxItemGroupTemplate-ljBV9_8W.js";import"./ComboBoxItemGroup-B4zUN52_.js";import"./ListItemBaseTemplate-MCAv2HBJ.js";import"./Token-hZnudgFO.js";import"./ScrollEnablement-B37cnfhn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-8uRqoZkS.js";import"./ToggleButton-BEj9YhjN.js";import"./SuggestionItem-DhpzZzQQ.js";import"./index-BsfCkzxM.js";import"./Option-B_e0EohB.js";import"./index-DsxxZJWV.js";import"./SegmentedButton-BJNUnkCe.js";import"./index-BLL6NYB0.js";import"./Select-DxwToxka.js";import"./InvisibleMessage-DndzKolo.js";import"./slim-arrow-down-BiHEY_tE.js";import"./index-D5uxsXuK.js";import"./index-BHQlFxm4.js";import"./index-C7Pim6U6.js";import"./index-BjHRCZNh.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B-zNJNVF.js";import"./group-2-Czd2Kvpz.js";import"./sort-descending-B4uKFBaf.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-oNcz4-fo.js";import"./utils-D-9tMIQC.js";import"./index-BZ4YpJ1F.js";import"./index-Dng98DSh.js";import"./index-BIHQwIAz.js";import"./navigation-down-arrow-C20RWoi5.js";import"./navigation-right-arrow-6hXpmCnZ.js";import"./navigation-right-arrow-Bwqs0FG1.js";import"./useCurrentTheme-g-TpF6b6.js";import"./index-B4GSm2eh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BDi3O9wb.js";import"./paper-plane-BF_TfTm4.js";import"./index-aX4YBE-N.js";import"./less--mI6seH2.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
