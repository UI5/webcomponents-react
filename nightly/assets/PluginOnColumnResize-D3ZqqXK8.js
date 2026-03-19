import{j as o}from"./iframe-CyQHbHxC.js";import{useMDXComponents as r}from"./index-CAqjzf3-.js";import{I as n}from"./CommandsAndQueries-CQRKG-No.js";import{M as m,C as p}from"./blocks-B1BKQjJv.js";import"./Tag-CpzoOvR8.js";import"./index-DVtJUpci.js";import"./copy-DaAXI0wh.js";import{F as s}from"./Footer-B6F6QaBp.js";import"./PageNotFound-BwogsJtD.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BOB587tv.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-8vAV1o0p.js";import"./index-DdcJcuqo.js";import"./index-Dk8Vx9PA.js";import"./index-CyzsrkYQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BPaLVEvo.js";import"./addCustomCSSWithScoping-iqlifjV6.js";import"./index-DUAJQglC.js";import"./index-hCRaM0Y7.js";import"./index-1GAsnXVc.js";import"./information-DjNNiNHU.js";import"./sys-enter-2-BgUfXyT0.js";import"./alert-CTY_LxCJ.js";import"./index-DMBzjcEO.js";import"./Illustrations-BxTCLiS4.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-e6BftqbE.js";import"./delete-BjTdR4Ty.js";import"./settings-D2RjwYQ8.js";import"./NoData-BxMVlIJh.js";import"./NoFilterResults-CGR-i73d.js";import"./index-D2c0HKwX.js";import"./IllustratedMessage-ClHsMmcC.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BcsJzzXU.js";import"./Input-8PEEDwad.js";import"./ResponsivePopoverCommon.css-Dux865Zo.js";import"./ValueStateMessage.css-BbLW-Isn.js";import"./Suggestions.css-X5qr8kqi.js";import"./ListBoxItemGroupTemplate-DZZUqyjU.js";import"./ComboBoxItemGroup-B5Dfu7er.js";import"./ListItemBaseTemplate-CY7v2Dt_.js";import"./Token-BqJ4Ofoo.js";import"./ScrollEnablement-CKBCWM_a.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BxKg-XHx.js";import"./ToggleButton-DiXt1YNE.js";import"./multiselect-all-CSlIa136.js";import"./SuggestionItem-CYqlhEgV.js";import"./index-DE35mJsn.js";import"./Option-BnsFtoau.js";import"./index-BURccoye.js";import"./SegmentedButton-_wFpY2kD.js";import"./index-D9IGU32c.js";import"./Select-BOhjnWh_.js";import"./InvisibleMessage-e12K6vz3.js";import"./index-BzKsasZn.js";import"./index-6l_fJSoT.js";import"./index-D-OPlSdD.js";import"./index-Djt9ygMg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BRt9GZkB.js";import"./group-2-CBrMg8eI.js";import"./sort-descending-B92RCWEy.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DCN3pIQM.js";import"./utils-ClisyTNb.js";import"./index-1FZuTEGH.js";import"./index-CFObLbas.js";import"./index-B1gaarcs.js";import"./navigation-down-arrow-C41QBZNm.js";import"./navigation-right-arrow-C25QyYoj.js";import"./navigation-right-arrow-BuVWa6AZ.js";import"./useCurrentTheme-DKlMhPlO.js";import"./index-DbdcXDnh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-RbxVKpGb.js";import"./paper-plane-9huZnMp4.js";import"./index-DUi-XTBZ.js";import"./less-CcGC0Ea6.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
