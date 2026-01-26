import{j as t}from"./iframe-BlUygxfZ.js";import{useMDXComponents as n}from"./index-CXAabkf3.js";import{I as i,F as m}from"./CommandsAndQueries-CeFRywr5.js";import{M as p,C as s}from"./blocks-C4NQ4-im.js";import"./Tag-CUR2rrlg.js";import"./index-Dh-78LPx.js";import"./copy-C0O91PIx.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-C4XrPa9Y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B0J408xz.js";import"./index-DFYqP0N6.js";import"./index-t0s0GVf0.js";import"./Link-Czimy6hK.js";import"./index-Dn8Ref-F.js";import"./index-C_DCdzmu.js";import"./index-nb0q6IbV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbJvTexr.js";import"./addCustomCSSWithScoping-DHyjDtb3.js";import"./index-B6coDb7Z.js";import"./information-zlNYGB6Q.js";import"./sys-enter-2-Ccj_DCkA.js";import"./alert-LdJbGRSH.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CgXczKDb.js";import"./delete-BZs0a-1H.js";import"./settings-BVrFU0mX.js";import"./NoData-D4bv1jPS.js";import"./IllustratedMessage-D3TBiFcy.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-9ofLVooP.js";import"./index-84lCpQlY.js";import"./index-CSl--qbo.js";import"./slim-arrow-down-CgDsJMzW.js";import"./Input-CAJFmB2Z.js";import"./ResponsivePopoverCommon.css-DwHTCDww.js";import"./ValueStateMessage.css-C3alblsY.js";import"./Suggestions.css-CLTa6LPz.js";import"./ListBoxItemGroupTemplate-CIs0oSQk.js";import"./ComboBoxItemGroup-Ceh1JxvS.js";import"./ListItemBaseTemplate-CMAdUbXU.js";import"./Token-BTUJFvLX.js";import"./ScrollEnablement-DSwNOA6D.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BqadHOpo.js";import"./ToggleButton-BG1bNuXR.js";import"./SuggestionItem-D0KUwh3K.js";import"./index-B9UBVLPX.js";import"./Option-h_6RFh1c.js";import"./index-DhgCGgHe.js";import"./SegmentedButton-DH2HX0sk.js";import"./index-CHKENjHC.js";import"./Select-CP3bsgEY.js";import"./InvisibleMessage-D6EiZ3B3.js";import"./slim-arrow-down-DNdnjurS.js";import"./index-2fqu4ZUm.js";import"./index-BbCJyiwr.js";import"./index-DUvesvaX.js";import"./index-C5uNCv6R.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CGGrEzLl.js";import"./group-2-Bzo2NSpJ.js";import"./sort-descending--Hwn5uWZ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C5Y2dYwJ.js";import"./utils-DbuWLHgd.js";import"./index-l2Om9n2s.js";import"./index-ec7XPWwz.js";import"./index-DsTqha7i.js";import"./navigation-down-arrow-DDmPzf56.js";import"./navigation-right-arrow-D1dkuTqT.js";import"./navigation-right-arrow-BQIRTW5E.js";import"./useCurrentTheme-BPj60tYc.js";import"./index-DJOUc43H.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-RZAVCFXP.js";import"./paper-plane-CKvhYw7h.js";import"./index-DF9Z0-Xx.js";import"./less-BQUCisQp.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
