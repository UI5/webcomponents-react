import{j as t}from"./iframe-C125K5pw.js";import{useMDXComponents as n}from"./index-Bjpa6FGV.js";import{I as i,F as m}from"./CommandsAndQueries-ldqvUWJl.js";import{M as p,C as s}from"./blocks-BXnHeSiR.js";import"./Tag-gRLBJrjs.js";import"./index-Dr1L9sIB.js";import"./copy-CAIaKhcd.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-B5V7Jgia.js";import"./preload-helper-PPVm8Dsz.js";import"./index-sMZVCCfo.js";import"./index-HJtrmXU5.js";import"./index-DAOynge-.js";import"./Link-CLfWc0rF.js";import"./index-BIOgtrFW.js";import"./index-CTal1c8_.js";import"./index-BwMWTiPK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CKkpAdHR.js";import"./addCustomCSSWithScoping-cidmMbR-.js";import"./index-DSCACoUK.js";import"./information-DY8EV-7L.js";import"./sys-enter-2-DLPshmQC.js";import"./alert-DGx7QxWd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DRi7r004.js";import"./delete-VcR_hMk7.js";import"./settings-CWzRvdF8.js";import"./NoData-KB6el7H0.js";import"./IllustratedMessage-CXh3bWR-.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DU_FutSt.js";import"./index-DjvH2VLk.js";import"./index-qC8gqSc4.js";import"./slim-arrow-down-DjzmFdkh.js";import"./Input-DjEzLRgz.js";import"./ResponsivePopoverCommon.css-CBDbaQoK.js";import"./ValueStateMessage.css-HbxeHEGm.js";import"./Suggestions.css-Ip_-2ncf.js";import"./ListBoxItemGroupTemplate-CrA4icN9.js";import"./ComboBoxItemGroup-CqfU9sll.js";import"./ListItemBaseTemplate-DDC3KDiX.js";import"./Token-DqIEO0pH.js";import"./ScrollEnablement-CHcdrCpT.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DYRsCa9G.js";import"./ToggleButton-Civ_g9Ey.js";import"./SuggestionItem-HWID_xuJ.js";import"./index-mutglJDe.js";import"./Option-C4a1sy2E.js";import"./index-D-2SIQ7j.js";import"./SegmentedButton-CBAEd1y_.js";import"./index-Ddxh1zbZ.js";import"./Select-3j4-u7qz.js";import"./InvisibleMessage-ZuAMUP0A.js";import"./slim-arrow-down-DWd9421G.js";import"./index-DDVJF59Y.js";import"./index-BpfByow1.js";import"./index-DYXHSW4J.js";import"./index-CeMB97VO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BslYw4vv.js";import"./group-2-xdb4cINx.js";import"./sort-descending-CbDESvm8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CymctnkS.js";import"./utils-BP0nLIbG.js";import"./index-UdJktvhD.js";import"./index-DZ6xLZXa.js";import"./index-Bapg1jlH.js";import"./navigation-down-arrow-DdfI5AYL.js";import"./navigation-right-arrow-CIultdti.js";import"./navigation-right-arrow-jfn-V-8v.js";import"./useCurrentTheme-D0ZROOM1.js";import"./index-DJvLtzE7.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-071s-nZz.js";import"./paper-plane-CGcqiSQu.js";import"./index-DlizPG_T.js";import"./less-BvWBky-G.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
