import{j as o}from"./iframe-CBE50DlQ.js";import{useMDXComponents as n}from"./index-DIj01nj4.js";import{I as r,F as m}from"./CommandsAndQueries-DPkme0CW.js";import{M as p,C as s}from"./blocks-BkRbeitU.js";import"./Tag-DnRfIk3Q.js";import"./index-CionDnrU.js";import"./copy-C6dVkXZR.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-FgUTgZpP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cx0GhjWW.js";import"./index-DQcdvvTg.js";import"./index-Cl_RTgXn.js";import"./Link-Dh4rUjfX.js";import"./index-hRqo2aEC.js";import"./index-9M1Uc6lA.js";import"./index-DZWAayED.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-OxleBysO.js";import"./addCustomCSSWithScoping-DkZRGLQs.js";import"./index-DOpTxqMF.js";import"./information-C3Q_Sey8.js";import"./sys-enter-2-B4dHqFQY.js";import"./alert-CvpF86nf.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-kIWSEh9O.js";import"./delete-DTo7ncZM.js";import"./settings-LIhtBrtR.js";import"./NoData-Qqj6cL7o.js";import"./IllustratedMessage-CI4t13HS.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-W46K1qhG.js";import"./index-f3rDsnt3.js";import"./index-CIlulLEa.js";import"./slim-arrow-down-BM67JTAP.js";import"./Input-D1ohtzY1.js";import"./ResponsivePopoverCommon.css-KhWag-i4.js";import"./ValueStateMessage.css-Bx58RCyv.js";import"./Suggestions.css-aqqCyRM-.js";import"./ListBoxItemGroupTemplate-DDLQAbKD.js";import"./ComboBoxItemGroup-lQF3DiBn.js";import"./ListItemBaseTemplate-_7gwwsSz.js";import"./Token-as1yPBTS.js";import"./ScrollEnablement-UFzoiRFM.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B_Jgd157.js";import"./ToggleButton-D1Yki3TB.js";import"./SuggestionItem-CnQ5JsmF.js";import"./index-Ccs2LERk.js";import"./Option-DexHpC4I.js";import"./index-BZn1P1jY.js";import"./SegmentedButton-DlVMykln.js";import"./index-BzGPsnLs.js";import"./Select-DTKYpMmC.js";import"./InvisibleMessage-t9FWfsM5.js";import"./slim-arrow-down-DODVm5XL.js";import"./index-C1EH5X69.js";import"./index-1dVMYy5E.js";import"./index-CIKHOMmi.js";import"./index-BPTFgRZw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Jk4sUQSq.js";import"./group-2-BnahuUAi.js";import"./sort-descending-9pdtb9Tw.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DqNWVbah.js";import"./utils-DifCn2wZ.js";import"./index-DDCnksk0.js";import"./index-CufLTtjf.js";import"./index-ByEfa-fL.js";import"./navigation-down-arrow-RDpX36vF.js";import"./navigation-right-arrow-4cWWH7fB.js";import"./navigation-right-arrow-iIetXOiI.js";import"./useCurrentTheme-Ch5yw61T.js";import"./index-aRC-rjwD.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DcxS7luH.js";import"./paper-plane-BWaZHKXF.js";import"./index-Cs_vIsdp.js";import"./less-Wc_6A1Tc.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
