import{j as t}from"./iframe-D6Dqvaj7.js";import{useMDXComponents as i}from"./index-p5hUqO5S.js";import{I as n}from"./CommandsAndQueries-CY2cNdhF.js";import{M as m,C as p}from"./blocks-mit6uJ90.js";import"./Tag-DSi4ilvu.js";import"./index-jRfJh9Ly.js";import"./copy-COwmxVeQ.js";import{F as s}from"./Footer-CnbRw8mY.js";import"./PageNotFound-Dkn1r8pk.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Dbcrbwec.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BHPCDbiV.js";import"./index-BMaKwz0y.js";import"./index-XWn6EBIn.js";import"./index-BHa3uoaJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-MTFFpMQj.js";import"./addCustomCSSWithScoping-BENu44jJ.js";import"./index-CZdI0ebk.js";import"./index-C9RG4ln6.js";import"./index-kq9zSbaq.js";import"./information-C52MW-zn.js";import"./sys-enter-2-DfVfUeVZ.js";import"./alert-DmTYLDqH.js";import"./index-DOs5kzts.js";import"./Illustrations-C58IHd-I.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BDcWf_Dk.js";import"./delete-Dy8TW_jf.js";import"./settings-CTDgJi7-.js";import"./NoData-ChgUFnhW.js";import"./NoFilterResults-Ti2WSWk7.js";import"./index-D1-WSJuG.js";import"./IllustratedMessage-sxhaShVk.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Ce-x5iIp.js";import"./Input-BwdyLf-s.js";import"./ResponsivePopoverCommon.css-BB8NXUcU.js";import"./ValueStateMessage.css-BuevPY9h.js";import"./Suggestions.css-D3ddXDeO.js";import"./ListBoxItemGroupTemplate-DENNZn8k.js";import"./ComboBoxItemGroup-AlgVKKtk.js";import"./ListItemBaseTemplate-BnBz7YKK.js";import"./Token-Dy6xV80q.js";import"./ScrollEnablement-geO1o17m.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C6QBtN6x.js";import"./ToggleButton-B-QFrS5f.js";import"./multiselect-all-N4HaTKEt.js";import"./SuggestionItem-CxmDW4WJ.js";import"./index-BiLxpb9V.js";import"./Option-UA4r9OEN.js";import"./index-BZTFBXyH.js";import"./SegmentedButton-CFFdkNmV.js";import"./index-CyrFd1-2.js";import"./Select-4EhfYWf2.js";import"./InvisibleMessage-Bc2H5qZ0.js";import"./index-CuSCF_fM.js";import"./index-BFItwByU.js";import"./index-DCsPrgaQ.js";import"./index-Cp7SAe62.js";import"./IconDesign-DXd8PPVF.js";import"./filter-os8ZpS83.js";import"./group-2-YJ2lTcge.js";import"./sort-descending-Dse1md5D.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CvXqra-k.js";import"./utils-Dm1Xt3ii.js";import"./index-BuVPQ4y7.js";import"./index-Cf1IHbj9.js";import"./index-DPPca9iV.js";import"./navigation-down-arrow-CACI7wDg.js";import"./navigation-right-arrow-CNG3xMAM.js";import"./navigation-right-arrow-ya-aDXCF.js";import"./useCurrentTheme-DFXbScZb.js";import"./index-BGM9-IM9.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BdqZbY6W.js";import"./paper-plane-BP_sElBh.js";import"./index-EM9DFt2Q.js";import"./less-CnrtmDHy.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
