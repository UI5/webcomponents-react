import{j as o}from"./iframe-DMsBkhV6.js";import{useMDXComponents as r}from"./index-DRmP5vAG.js";import{I as n}from"./CommandsAndQueries-DpukJ1Hp.js";import{M as m,C as p}from"./blocks-DLa5hkYX.js";import"./Tag-BmcB_JoS.js";import"./index-DCIOC28Z.js";import"./copy-CD95AZM0.js";import{F as s}from"./Footer-BOw4Z5DY.js";import"./PageNotFound-DjLaegFZ.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-D2IcS3ZP.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CSEVwGcN.js";import"./index-Bz_iFKqi.js";import"./index-bqOHt3_F.js";import"./index-Ct0KsXWt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CSKWwKcd.js";import"./addCustomCSSWithScoping-BbL9ROxJ.js";import"./index-DsnyfM-a.js";import"./index-D8IUoaKA.js";import"./index-CsdED7a8.js";import"./information-B9kPmlYt.js";import"./sys-enter-2-DFXWrXkU.js";import"./alert-BM02Ke2L.js";import"./index-BzYJTbyT.js";import"./Illustrations-BuKaE0Lu.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ueS9H92b.js";import"./delete-CHTfP-Kt.js";import"./settings-BLF4w1HS.js";import"./NoData-DlSNP7WF.js";import"./NoFilterResults-Cjyj15R0.js";import"./index-2yg_p-0e.js";import"./IllustratedMessage-etYmXr5W.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BJqBraCz.js";import"./Input-Uf7jhdsj.js";import"./ResponsivePopoverCommon.css-BkDEP9by.js";import"./ValueStateMessage.css-BOfdrSqA.js";import"./Suggestions.css-CGPwNADp.js";import"./ListBoxItemGroupTemplate-_0Dwsw5E.js";import"./ComboBoxItemGroup-DaTElG3f.js";import"./ListItemBaseTemplate-YIQ1K6S5.js";import"./Token-ZdRf4EiI.js";import"./ScrollEnablement-COba7ibi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DrpX4RCW.js";import"./ToggleButton-CrhejzgI.js";import"./multiselect-all-D_WUNEQL.js";import"./SuggestionItem-CAv3FUFe.js";import"./index-ohvCQnZa.js";import"./Option-CaNyZKGp.js";import"./index-C3f11o7B.js";import"./SegmentedButton-B1wjIz-p.js";import"./index-B5ufxdTz.js";import"./Select-CbPjmsG8.js";import"./InvisibleMessage-DRj0d5Uv.js";import"./index-9vqhJGXS.js";import"./index-DLUlNmzM.js";import"./index-BNhRrdmr.js";import"./index-BYW_tyTv.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CM4efI86.js";import"./group-2-BPP57I-Z.js";import"./sort-descending-DmVlxwNX.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BAZhX22Y.js";import"./utils-DLVR_ZqH.js";import"./index-BhKQSOJa.js";import"./index-DLPYNRsQ.js";import"./index-BVEb-vDJ.js";import"./navigation-down-arrow-B5mwPXMM.js";import"./navigation-right-arrow-DD2gNJ11.js";import"./navigation-right-arrow-X6oG7L7N.js";import"./useCurrentTheme-BVLXkGO3.js";import"./index-I52ieGsq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D_v8Eyxn.js";import"./paper-plane-DZMdtTIa.js";import"./index-D8XrUqKf.js";import"./less-mQfVbBaX.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(n,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(p,{sourceState:"none",of:l}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const TableComponent = (props) => {
  const handleColumResize = useCallback((e) => {
    console.log(e.columnWidth, e.header);
  }, []);

  const tableHooks = useMemo(
    () => [
      useOnColumnResize(handleColumResize, {
        liveUpdate: false,
        wait: 100,
      }),
    ],
    [handleColumResize],
  );

  return (
    <AnalyticalTable
      data={props.data}
      columns={props.columns}
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,o.jsx(s,{})]})}function So(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{So as default};
