import{j as o}from"./iframe-CLKwUGEX.js";import{useMDXComponents as n}from"./index-DCuwspND.js";import{I as r,F as m}from"./CommandsAndQueries-dz6NHoyr.js";import{M as p,C as s}from"./blocks-Dh7hbfcJ.js";import"./Tag-CfLVXJVc.js";import"./index-h52TWGHx.js";import"./copy-BrK10eH_.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DdSElbyf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Veg9_1qu.js";import"./index-ZH4BIl7e.js";import"./index-CkL1gWNe.js";import"./Link-Bqvbz9lT.js";import"./index-CL8a7czm.js";import"./index-CRtbNwl1.js";import"./index-BIRKClWd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYpAqTMA.js";import"./addCustomCSSWithScoping-Ckj5BS6-.js";import"./index-CuwqMzEM.js";import"./information-D0EfmlkL.js";import"./sys-enter-2-CbYR1yRQ.js";import"./alert-B6Esz0N1.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cq8bkL-u.js";import"./delete-zgSUoyOg.js";import"./settings-CBLLXz6N.js";import"./NoData-DSW01fss.js";import"./IllustratedMessage-DAmuZ2UN.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BA9ELEvi.js";import"./index-ka-ToCm_.js";import"./index-BHjhclkw.js";import"./slim-arrow-down-fLJI98pt.js";import"./Input-gdpdxYMJ.js";import"./ResponsivePopoverCommon.css-DtENZeG8.js";import"./ValueStateMessage.css-B4kKha1P.js";import"./Suggestions.css-BCv_xKxV.js";import"./ListBoxItemGroupTemplate-9TRbrDJ2.js";import"./ComboBoxItemGroup-P9iDEYGv.js";import"./ListItemBaseTemplate-CXA-fGl_.js";import"./Token-BM0X9bQT.js";import"./ScrollEnablement-DHvtGpUc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CYUOfpyN.js";import"./ToggleButton-rcmCnfHw.js";import"./SuggestionItem-IrwYDQ3Z.js";import"./index--P7kWLvm.js";import"./Option-CAO0eJwC.js";import"./index-BgqJi3Py.js";import"./SegmentedButton-Du7zSbut.js";import"./index-DcGyQm7o.js";import"./Select-Cy1yC1om.js";import"./InvisibleMessage-DsuuJ4si.js";import"./slim-arrow-down-NfxAXgq9.js";import"./index-7v9TUzFY.js";import"./index-u6yZ5lZT.js";import"./index-D_cyz0Cs.js";import"./index-FsTUQbBQ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BcOrZlNJ.js";import"./group-2-Cx0jhwyi.js";import"./sort-descending-BL8Dl8a2.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D85Rx8La.js";import"./utils-Bfz42nTV.js";import"./index-Z-BdczqP.js";import"./index-Dq44XCib.js";import"./index-B31IT1af.js";import"./navigation-down-arrow-Dx9epi_Y.js";import"./navigation-right-arrow-Dk1AH9Ft.js";import"./navigation-right-arrow-BcI6851b.js";import"./useCurrentTheme-BkslSs8D.js";import"./index-BvhjsuIG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-YHsws3VW.js";import"./paper-plane-C2yCzXa-.js";import"./index-CPp6j0v_.js";import"./less-BUl18ff9.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(r,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{sourceState:"none",of:l}),`
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
`,o.jsx(m,{})]})}function Xo(i={}){const{wrapper:e}={...n(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Xo as default};
