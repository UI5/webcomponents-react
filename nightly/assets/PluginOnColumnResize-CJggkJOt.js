import{j as o}from"./iframe-DwhXZ5O1.js";import{useMDXComponents as n}from"./index-Dr45Q_rW.js";import{I as r,F as m}from"./CommandsAndQueries-CZ-0KT78.js";import{M as p,C as s}from"./blocks-EKNE_kOu.js";import"./Tag-CK1DTCaY.js";import"./index-C0PXwN3M.js";import"./copy-CMcdSlV7.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BPXE2sY9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5LjiSCx.js";import"./index-DsUvOdfw.js";import"./index-BwctDZ8k.js";import"./Link-jbv8jxOr.js";import"./index-D0dcM15D.js";import"./index-EBvmFTXF.js";import"./index-CczjdlqU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CjLi0LGT.js";import"./addCustomCSSWithScoping-BuPMXfqj.js";import"./index-DzVbmGXs.js";import"./information-BtytWan6.js";import"./sys-enter-2-PzhKRuDm.js";import"./alert-Ul17j7cb.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BQaPuMj9.js";import"./delete-CZFi7vv1.js";import"./settings-DaEPRpNY.js";import"./NoData-KA-UEncs.js";import"./IllustratedMessage-BNojrsJJ.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DzljgzTe.js";import"./index-DZZVdq38.js";import"./index-5cjhwMF8.js";import"./slim-arrow-down-D11Ifl1b.js";import"./Input-BVBpS4hN.js";import"./ResponsivePopoverCommon.css-D9EhSfWF.js";import"./ValueStateMessage.css-DKKJr_ad.js";import"./Suggestions.css-5lOsSJat.js";import"./ListBoxItemGroupTemplate-4sKEf2MS.js";import"./ComboBoxItemGroup-BPeqzv7K.js";import"./ListItemBaseTemplate-AqdYmEyg.js";import"./Token-Cj9wPA0C.js";import"./ScrollEnablement-DJUo6QFq.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-F-hxCo2t.js";import"./ToggleButton-CrmFwEL9.js";import"./SuggestionItem-3xgWZymy.js";import"./index-B_utt3Vf.js";import"./Option-daf91KbS.js";import"./index-BphwTy74.js";import"./SegmentedButton-9GqZ-CP5.js";import"./index-Du47Xxv-.js";import"./Select-9aXmxiVY.js";import"./InvisibleMessage-CpREcibi.js";import"./slim-arrow-down-DdhS0vfb.js";import"./index-xZ2ygxdI.js";import"./index-Jg-2yZX5.js";import"./index-xu1m-Uev.js";import"./index-DIEkdcjg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CQFrmHwe.js";import"./group-2-DNdQ0Z2B.js";import"./sort-descending-Dzm0Tdo-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-hE-oQ1Oe.js";import"./utils-DY6mkGAC.js";import"./index-D4zxb5Y9.js";import"./index-D9fLrxBi.js";import"./index-BJZJ7I5D.js";import"./navigation-down-arrow-D_-UgM8Y.js";import"./navigation-right-arrow-6VwOC1wR.js";import"./navigation-right-arrow-CCnD2Vrj.js";import"./useCurrentTheme-fCt6jlcj.js";import"./index-BpYcsL8v.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-961lF1Cj.js";import"./paper-plane-f20_J01s.js";import"./index-BsTf-Gaj.js";import"./less-Ceh_NYtF.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
