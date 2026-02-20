import{j as o}from"./iframe-BxNMYsVp.js";import{useMDXComponents as n}from"./index-CEL_Mrqn.js";import{I as r,F as m}from"./CommandsAndQueries-CKT9ys9T.js";import{M as p,C as s}from"./blocks-CLtQlidJ.js";import"./Tag-CYWTluzA.js";import"./index-22bYdtLv.js";import"./copy-DFdPinc0.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DgsES7Vt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-lYnXb9lV.js";import"./index-jhZZ-U6H.js";import"./index-DKLNqf9R.js";import"./Link-DZt8_sp9.js";import"./index-CKGFui_U.js";import"./index-BQbr2ZNY.js";import"./index-7hnHpQRn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CG_dGq_W.js";import"./addCustomCSSWithScoping-CJX4iiEH.js";import"./index-CVOVci2N.js";import"./information-BR3I6cVC.js";import"./sys-enter-2-CKo5vDlS.js";import"./alert-BEt7QhXe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Mk_FwvON.js";import"./delete-BG6noefH.js";import"./settings-B8uhe1cq.js";import"./NoData-DyBdjVCa.js";import"./IllustratedMessage-BCVYMt7I.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CmHtBxQ-.js";import"./index-BXTa98ES.js";import"./index-C3SOSiwl.js";import"./slim-arrow-down-fmy_UgsE.js";import"./Input-D2CSF-Y6.js";import"./ResponsivePopoverCommon.css-C7cuV_Jj.js";import"./ValueStateMessage.css-BFQUPHA9.js";import"./Suggestions.css-BBJox0-v.js";import"./ListBoxItemGroupTemplate-ljBV9_8W.js";import"./ComboBoxItemGroup-B4zUN52_.js";import"./ListItemBaseTemplate-MCAv2HBJ.js";import"./Token-hZnudgFO.js";import"./ScrollEnablement-B37cnfhn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-8uRqoZkS.js";import"./ToggleButton-BEj9YhjN.js";import"./SuggestionItem-DhpzZzQQ.js";import"./index-BsfCkzxM.js";import"./Option-B_e0EohB.js";import"./index-DsxxZJWV.js";import"./SegmentedButton-BJNUnkCe.js";import"./index-BLL6NYB0.js";import"./Select-DxwToxka.js";import"./InvisibleMessage-DndzKolo.js";import"./slim-arrow-down-BiHEY_tE.js";import"./index-D5uxsXuK.js";import"./index-BHQlFxm4.js";import"./index-C7Pim6U6.js";import"./index-BjHRCZNh.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B-zNJNVF.js";import"./group-2-Czd2Kvpz.js";import"./sort-descending-B4uKFBaf.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-oNcz4-fo.js";import"./utils-D-9tMIQC.js";import"./index-BZ4YpJ1F.js";import"./index-Dng98DSh.js";import"./index-BIHQwIAz.js";import"./navigation-down-arrow-C20RWoi5.js";import"./navigation-right-arrow-6hXpmCnZ.js";import"./navigation-right-arrow-Bwqs0FG1.js";import"./useCurrentTheme-g-TpF6b6.js";import"./index-B4GSm2eh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BDi3O9wb.js";import"./paper-plane-BF_TfTm4.js";import"./index-aX4YBE-N.js";import"./less--mI6seH2.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
