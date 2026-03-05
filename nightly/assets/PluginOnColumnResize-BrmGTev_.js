import{j as o}from"./iframe-Dp_0Yhmg.js";import{useMDXComponents as r}from"./index-BMV3GZRz.js";import{I as n}from"./CommandsAndQueries-DDLi5yBU.js";import{M as m,C as p}from"./blocks-CKlkgOe3.js";import"./Tag-CNZu_-1j.js";import"./index-nFX3Pl_S.js";import"./copy-BMHKKbyO.js";import{F as s}from"./Footer-Pq4yDBwS.js";import"./PageNotFound-BsRlbC58.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-V88yIYjm.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DcMDvp4G.js";import"./index-DzgaNcC5.js";import"./index-C5vcogVt.js";import"./index-T5J1jf5G.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCqFx9Uj.js";import"./addCustomCSSWithScoping-CZYJlNXb.js";import"./index-Cu_XsrMy.js";import"./index-DXry597q.js";import"./index-DjJhZI7Y.js";import"./information-gl9SwVgW.js";import"./sys-enter-2-0WtHGlhQ.js";import"./alert-Bcw4Fg6E.js";import"./index-DpBR8FGa.js";import"./Illustrations-bZxTgUi1.js";import"./i18n-defaults-C7ICj5-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DZlU0_nw.js";import"./delete-DqKBQPKu.js";import"./settings-O9lrexvt.js";import"./NoData-Dg0Hqj8X.js";import"./NoFilterResults-BPGK8QO_.js";import"./index-K5CBibs9.js";import"./IllustratedMessage-BMmkB-iU.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./index-tFfwrzuZ.js";import"./slim-arrow-down-BC4mtdbv.js";import"./Input-CRrnYeQZ.js";import"./ResponsivePopoverCommon.css-h1W8s5fZ.js";import"./ValueStateMessage.css-Bf7fXuVn.js";import"./Suggestions.css-nwnFE4qJ.js";import"./ListBoxItemGroupTemplate-BKRsXqLf.js";import"./ComboBoxItemGroup-D-EcnRF3.js";import"./ListItemBaseTemplate-BZikYPsL.js";import"./Token-BlNZY41K.js";import"./ScrollEnablement-DIUnalZp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B-TzNdgp.js";import"./ToggleButton-BjDcT3J0.js";import"./SuggestionItem-BE-Ftq-K.js";import"./index-Cfr2EVXu.js";import"./Option-DPpzprMH.js";import"./index-DrO4gkBj.js";import"./SegmentedButton-7Tky5Pfm.js";import"./index-DrYCygiX.js";import"./Select-CURJ6tOv.js";import"./InvisibleMessage-B2w_5M6j.js";import"./slim-arrow-down-CDgGjVrM.js";import"./index-CFOVWAzR.js";import"./index-DMoBwtGT.js";import"./index-CHwuhYIq.js";import"./index-cGopohf8.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Da6TJjGQ.js";import"./group-2-CLfZKXSW.js";import"./sort-descending-CRkRUk04.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bql-qSdh.js";import"./utils-CxnTFJIb.js";import"./index-D8f-xZlT.js";import"./index-DovYOhn7.js";import"./index-BmzNDvvc.js";import"./navigation-down-arrow-DZaQ3Z_i.js";import"./navigation-right-arrow-CbfpzaeK.js";import"./navigation-right-arrow-CH2tup3m.js";import"./useCurrentTheme-DddtRzkQ.js";import"./index-CjzqcDm-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-anVy-FXS.js";import"./paper-plane-FPbukG19.js";import"./index-BPv30PhM.js";import"./less-CaYfSCWa.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(s,{})]})}function Wo(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Wo as default};
