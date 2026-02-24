import{j as o}from"./iframe-DT5KgGlD.js";import{useMDXComponents as n}from"./index-2sr9OpVj.js";import{I as r,F as m}from"./CommandsAndQueries-DUx0SL0h.js";import{M as p,C as s}from"./blocks-AEZCJTmh.js";import"./Tag-CrMaDk-2.js";import"./index-Il5MAk-V.js";import"./copy-Cn_--9_F.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CsveTDJU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BtfaCgXN.js";import"./index-BKh4jaT0.js";import"./index-lGK2xfSC.js";import"./Link-BOLH3Y-N.js";import"./index-COS65dGe.js";import"./index-DCWap5Ti.js";import"./index-CSwD_ZHb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-gNg07s8V.js";import"./addCustomCSSWithScoping-DrxYXnwA.js";import"./index-DyR_rB-Y.js";import"./information-CjpvzeET.js";import"./sys-enter-2-CcCsly0B.js";import"./alert-Dhl1tRDJ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CWKoSmBW.js";import"./delete-CohcJEgP.js";import"./settings-BewuPKdX.js";import"./NoData-DltE47q7.js";import"./IllustratedMessage-BawN7Wqr.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DgTqDT0D.js";import"./index-BJ6ykXKR.js";import"./index-B8f0YgKC.js";import"./slim-arrow-down-BCtN8SJB.js";import"./Input-I-AKHfs1.js";import"./ResponsivePopoverCommon.css-BPBhFUbf.js";import"./ValueStateMessage.css-BGYmnVw2.js";import"./Suggestions.css-DA2UVS5X.js";import"./ListBoxItemGroupTemplate-Cd3zTBbN.js";import"./ComboBoxItemGroup-BpsJm26p.js";import"./ListItemBaseTemplate-C16Cppj1.js";import"./Token-DlKQA3E2.js";import"./ScrollEnablement-CAbtfiLJ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-pC6bfYbG.js";import"./ToggleButton-BsvGKjKP.js";import"./SuggestionItem-Be5m2pdi.js";import"./index-BxTPhBvm.js";import"./Option-D0YYNVbE.js";import"./index-CK2Bq9ni.js";import"./SegmentedButton-CSjW8EsR.js";import"./index-JEQwvvE3.js";import"./Select-BWRVl5xO.js";import"./InvisibleMessage-Bxlb59Q-.js";import"./slim-arrow-down-CJxt2IBk.js";import"./index-BZK44fn8.js";import"./index-Cvxmvmd5.js";import"./index-1OsylIRz.js";import"./index-CyPn5paG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DqCcIIbC.js";import"./group-2-k0-NGrpU.js";import"./sort-descending-CGv5TfNy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DIGppw86.js";import"./utils-D33GDmvH.js";import"./index-Cod7H4Q4.js";import"./index-DuzRGPxi.js";import"./index-CdxdX8AI.js";import"./navigation-down-arrow-CfkoPZ7s.js";import"./navigation-right-arrow-qrJ8C8QD.js";import"./navigation-right-arrow-D4lDQVr2.js";import"./useCurrentTheme-DaZyrile.js";import"./index-z1-YLvBX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ngYbJf9G.js";import"./paper-plane-K2_yiYx7.js";import"./index-_z6JI7Dv.js";import"./less-BJWr5WMr.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
