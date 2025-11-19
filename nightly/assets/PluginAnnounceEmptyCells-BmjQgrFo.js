import{j as t}from"./iframe-5N9GXz7D.js";import{useMDXComponents as n}from"./index-DlTuiQlt.js";import{I as i,F as m}from"./CommandsAndQueries-CMJc_Han.js";import{M as p,C as s}from"./blocks-CPyIL7dB.js";import"./Tag-B4RC7Xxt.js";import"./index-D8q95YVM.js";import"./copy-BLtz8zcP.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CU1Fc6AT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CJR2SGfI.js";import"./index-DDb99OCc.js";import"./index-DZUtpbBW.js";import"./Link-oEEjXqRZ.js";import"./index-D5QSQPRG.js";import"./index-l_lQT3oU.js";import"./index-DHTSiNH5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ieHBSwsk.js";import"./addCustomCSSWithScoping-B8HVYEKl.js";import"./index-FxCKqbN1.js";import"./information-B48tg30u.js";import"./sys-enter-2-CQaZAGEJ.js";import"./alert-Ct7A8pBg.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Qomii_Eh.js";import"./delete-vylZh7WJ.js";import"./settings-B5-c07yK.js";import"./NoData-DbeTv8bI.js";import"./IllustratedMessage-yyhJb6H7.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CguSYJb-.js";import"./index-B6JLNmTG.js";import"./index-gVbw8hdV.js";import"./slim-arrow-down-uEmCnSpu.js";import"./Input-Cf74aOvg.js";import"./ResponsivePopoverCommon.css-D2vKXyuQ.js";import"./ValueStateMessage.css-Ctm1_1I-.js";import"./Suggestions.css-CDFdvq-I.js";import"./ListBoxItemGroupTemplate-BTEoBIel.js";import"./ComboBoxItemGroup-BndPAf-K.js";import"./ListItemBaseTemplate-BbinvfmZ.js";import"./Token-CSu3FrWS.js";import"./ScrollEnablement-DVuWUxs9.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BFNu6wL7.js";import"./ToggleButton-CADuKzo9.js";import"./SuggestionItem-Bt1iO1MT.js";import"./index-9ZgsG56h.js";import"./Option-B0lfretA.js";import"./index-DKrFf-VR.js";import"./SegmentedButton-CwtS4mbi.js";import"./index-CDEUh1Wr.js";import"./Select-BKsCZrgq.js";import"./InvisibleMessage-BNNpwXEU.js";import"./slim-arrow-down-CLJYmPnb.js";import"./index-BDZcqiPr.js";import"./index-DmwwIOgD.js";import"./index-CP2quE6c.js";import"./IconDesign-DXd8PPVF.js";import"./filter-yps-Eqqd.js";import"./group-2-6NDEVnRF.js";import"./sort-descending-BzVGktfr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-3H5h1FPb.js";import"./utils-CdxZF0UW.js";import"./index-CTYujQq0.js";import"./index-Bk28eBp1.js";import"./index-cm94_KBC.js";import"./navigation-down-arrow-DBn42RCI.js";import"./navigation-right-arrow-BrFq4Pkn.js";import"./navigation-right-arrow-Cdp8Azj2.js";import"./useCurrentTheme-EgfIVG70.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BLiIhR8s.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-v4UuOtzV.js";import"./paper-plane-DplzoTA4.js";import"./index-CSswLuPM.js";import"./less-D9G0zBob.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
