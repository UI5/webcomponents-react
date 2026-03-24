import{j as t}from"./iframe-BB6QsCcm.js";import{useMDXComponents as i}from"./index-CpyLbSYP.js";import{I as n}from"./CommandsAndQueries-BiWITRaD.js";import{M as m,C as p}from"./blocks-DGH8wLVm.js";import"./Tag-DYnAL2vL.js";import"./index-DEibJBdY.js";import"./copy-CCxPB9Eo.js";import{F as s}from"./Footer-BhEsQKJ6.js";import"./PageNotFound-CzkzQoiL.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-C2ZNW2s5.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-nh3gGr7J.js";import"./index-BeoN8qxu.js";import"./index-BFKJbbqY.js";import"./index-CMF9IKMM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ctz7lcER.js";import"./addCustomCSSWithScoping-D3Qs4mB8.js";import"./index-ZlEQADjM.js";import"./index-BiTQ1Tdz.js";import"./index-Cg4sRA-Y.js";import"./information-b186mgfr.js";import"./sys-enter-2-BIQ3YVMq.js";import"./alert-BqQjVqfR.js";import"./index-DsUvzGkS.js";import"./Illustrations-ChLBGWr7.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-jMOYBYRN.js";import"./delete-C8ILg1tk.js";import"./settings-Dr6LJqAx.js";import"./NoData-BDy79agX.js";import"./NoFilterResults-BmBQ0hmP.js";import"./index-CWuD9QeE.js";import"./IllustratedMessage-BWy_xvBP.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-HSHxMqNr.js";import"./Input-JioLFYJJ.js";import"./ResponsivePopoverCommon.css-6GP8Lm0R.js";import"./ValueStateMessage.css-l1uIo9PL.js";import"./Suggestions.css-D2YmrWJk.js";import"./ListBoxItemGroupTemplate-CRgv91LV.js";import"./ComboBoxItemGroup-CRHjR_uc.js";import"./ListItemBaseTemplate-LKNuMPHR.js";import"./Token-CGH1x_5F.js";import"./ScrollEnablement-C9jw74Ub.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B4b6lCaO.js";import"./ToggleButton-YqJTBHCJ.js";import"./multiselect-all-DVOpmePw.js";import"./SuggestionItem-BPY8t2Ca.js";import"./index-CxKbBauK.js";import"./Option-CLM8LjbY.js";import"./index-CG3ETCdV.js";import"./SegmentedButton-ZShhsJ6z.js";import"./index-Dunx1SzC.js";import"./Select-D3_73qVV.js";import"./InvisibleMessage-B_1ltxKh.js";import"./index-CRTb_SI_.js";import"./index-cQQL1sta.js";import"./index-E6gjuC88.js";import"./index-Du-fLjuZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DuyIDAv5.js";import"./group-2-B5iSe4vK.js";import"./sort-descending-3s865Vlf.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BdS8cG8s.js";import"./utils-DBM40PGg.js";import"./index-Dz7ZRshb.js";import"./index-GaSTmw-Y.js";import"./index-CV533GXR.js";import"./navigation-down-arrow-DNSZQduQ.js";import"./navigation-right-arrow-D15FSzk1.js";import"./navigation-right-arrow-D6fBPfwP.js";import"./useCurrentTheme-DxOa0FRn.js";import"./index-EkHUYTPl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-zpMPSAkb.js";import"./paper-plane-BQP8ObaP.js";import"./index-C9U4bo4t.js";import"./less-b7RFHQTo.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
