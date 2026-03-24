import{j as t}from"./iframe-D9xLC1tL.js";import{useMDXComponents as i}from"./index-DbpRZxa8.js";import{I as n}from"./CommandsAndQueries-Bb-ZfGVO.js";import{M as m,C as p}from"./blocks-BGODLmXA.js";import"./Tag-CzLAQHXA.js";import"./index-OpsV8Rzk.js";import"./copy-D8VIdABk.js";import{F as s}from"./Footer-C6v4bY5-.js";import"./PageNotFound-DoCPcVkS.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CcH9eEq-.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-nPbeq8Ca.js";import"./index-D1uvdQ6M.js";import"./index-_EZjG3sX.js";import"./index-1koIOrPL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_OCG7dF.js";import"./addCustomCSSWithScoping-BP0mkxfq.js";import"./index-DNd0s4Kc.js";import"./index-DAKihXgB.js";import"./index-BDQMqb7U.js";import"./information-BC9P8f_O.js";import"./sys-enter-2-B7xp7QZ9.js";import"./alert-BEKLDx3c.js";import"./index-Dursa8QF.js";import"./Illustrations-VmVh_pyg.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CjlhRgZm.js";import"./delete-z9tfxYsM.js";import"./settings-u6G-xS72.js";import"./NoData-iFn0kwSC.js";import"./NoFilterResults-C-Tq5PPM.js";import"./index-DCBWbYTm.js";import"./IllustratedMessage-Duwn4FcJ.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BttjqPRx.js";import"./Input-DxzMz-_-.js";import"./ResponsivePopoverCommon.css-PL-SXD-8.js";import"./ValueStateMessage.css-DPUcso-C.js";import"./Suggestions.css-Cy8FStCL.js";import"./ListBoxItemGroupTemplate-DNpwMoIM.js";import"./ComboBoxItemGroup-TUxg8lm8.js";import"./ListItemBaseTemplate-DByAGMN-.js";import"./Token-BdgPQmcu.js";import"./ScrollEnablement-CzOU9q0b.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DeipcKCC.js";import"./ToggleButton-CvMZWFKF.js";import"./multiselect-all-CE46sock.js";import"./SuggestionItem-DNt3kuCB.js";import"./index-DPec4j3o.js";import"./Option-be2q_1d1.js";import"./index-B7vuJ-iL.js";import"./SegmentedButton-CTkUtfOS.js";import"./index-CEBN14-L.js";import"./Select-C_MyYDPb.js";import"./InvisibleMessage-uL2Nn7st.js";import"./index-DvoCoNJi.js";import"./index-BbcqIyzm.js";import"./index-CSp88prM.js";import"./index-C5uwD5iK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-bKIjhF8F.js";import"./group-2-EWjgYNtS.js";import"./sort-descending-C_0FMKzH.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CpIPK8sg.js";import"./utils-DOCuh_Xw.js";import"./index-BFZOBrHJ.js";import"./index-CN1sWRh8.js";import"./index-CzQc_Cim.js";import"./navigation-down-arrow-C-xgZR_F.js";import"./navigation-right-arrow-ChyfPkbT.js";import"./navigation-right-arrow-DBwa9qHY.js";import"./useCurrentTheme-BGs9iYKG.js";import"./index-BnsjrB_W.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cjl0qmS-.js";import"./paper-plane-PLOUunSl.js";import"./index-D1mCxT3B.js";import"./less-S94TrLny.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
