import{j as t}from"./iframe-C_hHAafN.js";import{useMDXComponents as i}from"./index-D3HSzI5H.js";import{I as n}from"./CommandsAndQueries-9eolN_GD.js";import{M as m,C as p}from"./blocks-DkbtP44I.js";import"./Tag-eVGHGbIg.js";import"./index-3QVLAy4g.js";import"./copy-RggualJu.js";import{F as s}from"./Footer-Cs4jbAjg.js";import"./PageNotFound-C7jxbIgP.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-C48bkaSe.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-SYOek4pb.js";import"./index-nRsHzHP6.js";import"./index-DqhVaTSX.js";import"./index-C7mqYyTc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DmUXk235.js";import"./addCustomCSSWithScoping-D9hLtcaz.js";import"./index-BKTg9IVY.js";import"./index-DaMaB5I7.js";import"./index-BmCCqQCC.js";import"./information-BzxR6BB4.js";import"./sys-enter-2-Bb8fTRXf.js";import"./alert-CfcbMAjf.js";import"./index-DDQ0aIRQ.js";import"./Illustrations-CNZ22cEs.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DmgeFgDX.js";import"./delete-DFd25d7l.js";import"./settings-cOi7tZPQ.js";import"./NoData-B51Lesm7.js";import"./NoFilterResults-BaQF3ps6.js";import"./index-DrtJcy0D.js";import"./IllustratedMessage-DlYnWnAs.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-D_6jRAhR.js";import"./Input-TGnF-6Wb.js";import"./ResponsivePopoverCommon.css-B3G2eYk9.js";import"./ValueStateMessage.css-CV4qc19-.js";import"./Suggestions.css-CHwCFLC2.js";import"./ListBoxItemGroupTemplate-fDCpM485.js";import"./ComboBoxItemGroup-DZXo9e3J.js";import"./ListItemBaseTemplate-C7WwsRHS.js";import"./Token-CKEQ5_aJ.js";import"./ScrollEnablement-ByLKUiOa.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-66Kfx1Tu.js";import"./ToggleButton-DluNCSvv.js";import"./multiselect-all-n3CqmeKN.js";import"./SuggestionItem-CH8aQQQp.js";import"./index-64fyeXzu.js";import"./Option-D1DIcTfk.js";import"./index-BXd3-qZ5.js";import"./SegmentedButton-BO3FBYdW.js";import"./index-B4v4iYJ_.js";import"./Select-DdLVb8sx.js";import"./InvisibleMessage-ufPFqwzr.js";import"./index-DJtMuU1R.js";import"./index-CX-inHpd.js";import"./index-CkLRuFFu.js";import"./index-CXkptAkK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CCfaaozy.js";import"./group-2-C3mGXi1j.js";import"./sort-descending-CRMBh3aI.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BF3n00U0.js";import"./utils-DU5s3vrI.js";import"./index-BizsnkQy.js";import"./index-BBMO4pXI.js";import"./index-BPfQuIuB.js";import"./navigation-down-arrow-BVBBSui6.js";import"./navigation-right-arrow-BLUaI-J0.js";import"./navigation-right-arrow-BKXb3Jei.js";import"./useCurrentTheme-qRko6oTp.js";import"./index-BLeQ0x08.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B_cTxHD6.js";import"./paper-plane-E-0ZKy0h.js";import"./index-D5ir6q6t.js";import"./less-BYsoatbg.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
