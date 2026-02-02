import{j as o}from"./iframe-DxaU3ukP.js";import{useMDXComponents as n}from"./index-Bu64E7xz.js";import{I as r,F as m}from"./CommandsAndQueries-CWzmGACf.js";import{M as p,C as s}from"./blocks-shsJXsJu.js";import"./Tag-HWB4mzIK.js";import"./index-BuSb9dlo.js";import"./copy-iAtgzS7e.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CvnNq-Rx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DCr6QTyS.js";import"./index-4KyKvZuP.js";import"./index-DJhOYGHM.js";import"./Link-B8iiEW6g.js";import"./index-wIV-Jx7Q.js";import"./index-B4KIHpYZ.js";import"./index-CCQGvtXt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-P9_4H6jZ.js";import"./addCustomCSSWithScoping-DcrmHllZ.js";import"./index-DBN874s0.js";import"./information-Y-FlrSb9.js";import"./sys-enter-2-Cl_Hs57G.js";import"./alert-xbLWAWtw.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DYhdiQD5.js";import"./delete-BS7GLbbQ.js";import"./settings-BAtFRTLl.js";import"./NoData-P0aiFWNe.js";import"./IllustratedMessage-b_ym9Hb3.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BjgjNlcX.js";import"./index-DmQ0Wp9f.js";import"./index-DQK5zeFS.js";import"./slim-arrow-down-fGj_LI5J.js";import"./Input-D_YVohIg.js";import"./ResponsivePopoverCommon.css-DNS4oV3Y.js";import"./ValueStateMessage.css-DpHhcDZf.js";import"./Suggestions.css-CaY-hH4G.js";import"./ListBoxItemGroupTemplate-BajDE4jz.js";import"./ComboBoxItemGroup-CSbTFdho.js";import"./ListItemBaseTemplate-Dhr4Rhd3.js";import"./Token-C4NZa-ox.js";import"./ScrollEnablement-DfjnlUNY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-FvkwmzYL.js";import"./ToggleButton-CzTCoMTN.js";import"./SuggestionItem-CRPTOIvP.js";import"./index-ngowydBr.js";import"./Option-C0Uvoc7q.js";import"./index-tLjFiak6.js";import"./SegmentedButton-BrZOqfR3.js";import"./index-DMRgWmpo.js";import"./Select-B8Q3fF-g.js";import"./InvisibleMessage-Vimf6Y5N.js";import"./slim-arrow-down-DRqlReJZ.js";import"./index-BVH6V1yj.js";import"./index-B8fGZl2t.js";import"./index-rAT2WEiI.js";import"./index-C3UD1Hqj.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DB4Xqkcu.js";import"./group-2-JYhBavgn.js";import"./sort-descending-BWym6GfS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-hJi7DpYf.js";import"./utils-rEWueUxT.js";import"./index-DPFDbPpv.js";import"./index-C4sy8ZPw.js";import"./index-0BAFT4SC.js";import"./navigation-down-arrow-Bb0q6ooJ.js";import"./navigation-right-arrow-agwdLGP0.js";import"./navigation-right-arrow-DxjP7dnY.js";import"./useCurrentTheme-bdMlbWTW.js";import"./index-Dd-sbQ45.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-TKZ3-owy.js";import"./paper-plane-GGpDAgH5.js";import"./index-CTUD2-bS.js";import"./less-Bd6W-74P.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
