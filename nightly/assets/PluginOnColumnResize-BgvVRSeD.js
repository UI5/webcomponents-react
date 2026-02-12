import{j as o}from"./iframe-DK_3t7HQ.js";import{useMDXComponents as n}from"./index-Bn4DIwe1.js";import{I as r,F as m}from"./CommandsAndQueries-8GqG6vck.js";import{M as p,C as s}from"./blocks-BYCX_D4a.js";import"./Tag-CMm3ArFn.js";import"./index-DM6dIB46.js";import"./copy-Cen_7za9.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BICa3YPY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DcvukCsl.js";import"./index-W3t_MBGP.js";import"./index-BD65A0G0.js";import"./Link-s9SylKhD.js";import"./index-BLsgqlPC.js";import"./index-Bw6wQW8K.js";import"./index-BlpaDNQk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyNtnc-C.js";import"./addCustomCSSWithScoping-BS7bnaiL.js";import"./index-DGhVTpl9.js";import"./information-MEtG0nZR.js";import"./sys-enter-2-DcwCthWV.js";import"./alert-CP9vtKnc.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CJcJ6ZNX.js";import"./delete-DXy6M3OZ.js";import"./settings-D0VrA07N.js";import"./NoData-BtEwvsbO.js";import"./IllustratedMessage-BWCPoFmo.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-yIv6d63o.js";import"./index-B9cf1Eyl.js";import"./index-DrhPB-8t.js";import"./slim-arrow-down-DAUAvb4X.js";import"./Input-CXY88w1C.js";import"./ResponsivePopoverCommon.css-Dlh5fqps.js";import"./ValueStateMessage.css-Chn8tD08.js";import"./Suggestions.css-C4SxCV0j.js";import"./ListBoxItemGroupTemplate-PD87gjmk.js";import"./ComboBoxItemGroup-CQlIYlQD.js";import"./ListItemBaseTemplate-C02QBSHL.js";import"./Token-Ke8CvjjM.js";import"./ScrollEnablement-MqyRN0-M.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BmjJqapy.js";import"./ToggleButton-BfrGkVWL.js";import"./SuggestionItem-CKzN3sv2.js";import"./index-tPIwOH9T.js";import"./Option-DXM5mccC.js";import"./index-C8nz_Rgb.js";import"./SegmentedButton-BGBZy06V.js";import"./index-ur1oRU8x.js";import"./Select-w2IGnN0_.js";import"./InvisibleMessage-D9sFbW1z.js";import"./slim-arrow-down-BB5WzEh_.js";import"./index-DsUOJVIL.js";import"./index-BeyM_sLD.js";import"./index--WGzy90A.js";import"./index-CjVM0U5d.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BCY9qfzQ.js";import"./group-2-DozQO3w7.js";import"./sort-descending-Doamk57x.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BUnfVL6W.js";import"./utils-BzsJoZkQ.js";import"./index-kf_FyfXD.js";import"./index-MtnL4A_g.js";import"./index-CiQBsJ4r.js";import"./navigation-down-arrow-B8-P8g3_.js";import"./navigation-right-arrow-FMnV_NeM.js";import"./navigation-right-arrow-fibED6EI.js";import"./useCurrentTheme-BFuyjl0R.js";import"./index-BWXdaK_T.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-9GnEdIyA.js";import"./paper-plane-CyMFIh-J.js";import"./index-Ce-FX6Nz.js";import"./less-C_g1y2f6.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
