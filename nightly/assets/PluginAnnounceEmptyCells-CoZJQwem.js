import{j as t}from"./iframe-B9oS8Tdw.js";import{useMDXComponents as i}from"./index-DBcwplNT.js";import{I as n}from"./CommandsAndQueries-NcZGCQIw.js";import{M as m,C as p}from"./blocks-n99WgqUD.js";import"./Tag-C4hdjWJC.js";import"./index-Bpds4hIG.js";import"./copy-Bqdwh9J4.js";import{F as s}from"./Footer-B2MFyv0P.js";import"./PageNotFound-CdK5m3jv.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-ACHSCLCF.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BttQiJAm.js";import"./index-MP9MDZQa.js";import"./index-CIPzfYgd.js";import"./index-XdY2VQGh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CKo2xI1N.js";import"./addCustomCSSWithScoping-BjXuQDKZ.js";import"./index-0NZf9e3S.js";import"./index-DzuQRrNG.js";import"./index-BYYicg2U.js";import"./information-BlcYwQMc.js";import"./sys-enter-2-DdkiI-3L.js";import"./alert-D212h0_R.js";import"./index-C2K37CCg.js";import"./Illustrations-Hb5RsbMM.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DEL9cqdT.js";import"./delete-CJPlzdTi.js";import"./settings-DIaK4Die.js";import"./NoData-BLMnzqZy.js";import"./NoFilterResults-B3AMdlwG.js";import"./index-DrzOvK-B.js";import"./IllustratedMessage-Bzd2QQXi.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CJKsBNXM.js";import"./Input-DExRg9sG.js";import"./ResponsivePopoverCommon.css-B86z_YN9.js";import"./ValueStateMessage.css-ByKDah8f.js";import"./Suggestions.css-D-ufL02N.js";import"./ListBoxItemGroupTemplate-CUcRZ2hr.js";import"./ComboBoxItemGroup-Ds7WcOQy.js";import"./ListItemBaseTemplate-B2uVgI-9.js";import"./Token-DszrdDTr.js";import"./ScrollEnablement-CuPUrrc1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BgNSnN8f.js";import"./ToggleButton-BdDdHpsO.js";import"./multiselect-all-DmsV51Ol.js";import"./SuggestionItem-B-E1hpPG.js";import"./index-D7G1scwG.js";import"./Option-DUDaACIO.js";import"./index-CEPZX_2s.js";import"./SegmentedButton-DiQhUt-z.js";import"./index-Cu04vq_4.js";import"./Select-C05RCBvi.js";import"./InvisibleMessage-CNfLarpT.js";import"./index-DjTsxyWe.js";import"./index-D0JLt7iu.js";import"./index-CfX-8Mbr.js";import"./index-BkXXTU95.js";import"./IconDesign-DXd8PPVF.js";import"./filter-QnSLKOqd.js";import"./group-2-B9WZnXpk.js";import"./sort-descending-CW-hMbFE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-De1v9t9O.js";import"./utils-X5jSZNtf.js";import"./index-GvbFIdTy.js";import"./index-CApXjfIA.js";import"./index-B7hwJ3qq.js";import"./navigation-down-arrow-UCtr-grF.js";import"./navigation-right-arrow-CDleWG9x.js";import"./navigation-right-arrow-mgw419ia.js";import"./useCurrentTheme-BVrPrfNf.js";import"./index-DjGZ1z05.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C-tn0cQ7.js";import"./paper-plane-BOkiy_Zr.js";import"./index-Dz5AYLKf.js";import"./less-B6hTD78n.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
