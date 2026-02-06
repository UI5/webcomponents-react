import{j as t}from"./iframe-BHRyWWCK.js";import{useMDXComponents as n}from"./index-vmzMr3GX.js";import{I as i,F as m}from"./CommandsAndQueries-BrUcvXA7.js";import{M as p,C as s}from"./blocks-DoCMQEa0.js";import"./Tag-R17NMrYt.js";import"./index-CZEJadic.js";import"./copy-rEHIQTke.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Dn7VAWka.js";import"./preload-helper-PPVm8Dsz.js";import"./index-UnB73Rnf.js";import"./index-DibDZuef.js";import"./index-BKKHGvr5.js";import"./Link-v8HZQWxp.js";import"./index-Cm33Vcx3.js";import"./index-DCtea6ve.js";import"./index-CJXqjvvM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEXhzcrM.js";import"./addCustomCSSWithScoping-W1ZwlwrN.js";import"./index-CBZ8EfYd.js";import"./information-Nr6PmwbG.js";import"./sys-enter-2--GTeHKCC.js";import"./alert-CaNIaeyx.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-1M8nkNX0.js";import"./delete-CTFibazR.js";import"./settings-pDITWEjw.js";import"./NoData-JLZTrtOP.js";import"./IllustratedMessage-Cu6GWfHR.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DwQvGPpm.js";import"./index-DJiwBl3_.js";import"./index-DgAZ2xF_.js";import"./slim-arrow-down-CRkJhUFV.js";import"./Input-BhCBHTib.js";import"./ResponsivePopoverCommon.css-BUbUes1r.js";import"./ValueStateMessage.css-BKyDhgmA.js";import"./Suggestions.css-C7i9nEw7.js";import"./ListBoxItemGroupTemplate-DjmSj5Ii.js";import"./ComboBoxItemGroup-BvHhbI-q.js";import"./ListItemBaseTemplate-CS4PXitH.js";import"./Token-BTLeMA0R.js";import"./ScrollEnablement-DFn_AcWU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-8svZRnYC.js";import"./ToggleButton-Dbbqw8NC.js";import"./SuggestionItem-Dl2JpPy1.js";import"./index-DCuRMYTu.js";import"./Option-D23nggyx.js";import"./index-kofx5hev.js";import"./SegmentedButton-CgEID4bj.js";import"./index-BZ0xl2ay.js";import"./Select-BbotqLf_.js";import"./InvisibleMessage-Coe0Io3Y.js";import"./slim-arrow-down-4vXxtfSR.js";import"./index-DyS5aeY8.js";import"./index-8j0U0p6k.js";import"./index-CgNK1KA-.js";import"./index-BDlnLxSo.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DDR77_RK.js";import"./group-2-X3Rnt8GU.js";import"./sort-descending-mIkhhQAV.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BYPEZsB4.js";import"./utils-CkDRuQDp.js";import"./index-B2U7uG2L.js";import"./index-DD47so0i.js";import"./index-CAq1dCAC.js";import"./navigation-down-arrow-Ct6f73lC.js";import"./navigation-right-arrow-gjH-5iV-.js";import"./navigation-right-arrow-Da29Og35.js";import"./useCurrentTheme-B-94HWui.js";import"./index-CiAXoTzx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BTNxBqyX.js";import"./paper-plane-Dw8DE4LY.js";import"./index-BrVWHGQ1.js";import"./less-Cida6587.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
