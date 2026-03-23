import{j as o}from"./iframe-D6Dqvaj7.js";import{useMDXComponents as r}from"./index-p5hUqO5S.js";import{I as n}from"./CommandsAndQueries-CY2cNdhF.js";import{M as m,C as p}from"./blocks-mit6uJ90.js";import"./Tag-DSi4ilvu.js";import"./index-jRfJh9Ly.js";import"./copy-COwmxVeQ.js";import{F as s}from"./Footer-CnbRw8mY.js";import"./PageNotFound-Dkn1r8pk.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Dbcrbwec.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BHPCDbiV.js";import"./index-BMaKwz0y.js";import"./index-XWn6EBIn.js";import"./index-BHa3uoaJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-MTFFpMQj.js";import"./addCustomCSSWithScoping-BENu44jJ.js";import"./index-CZdI0ebk.js";import"./index-C9RG4ln6.js";import"./index-kq9zSbaq.js";import"./information-C52MW-zn.js";import"./sys-enter-2-DfVfUeVZ.js";import"./alert-DmTYLDqH.js";import"./index-DOs5kzts.js";import"./Illustrations-C58IHd-I.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BDcWf_Dk.js";import"./delete-Dy8TW_jf.js";import"./settings-CTDgJi7-.js";import"./NoData-ChgUFnhW.js";import"./NoFilterResults-Ti2WSWk7.js";import"./index-D1-WSJuG.js";import"./IllustratedMessage-sxhaShVk.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Ce-x5iIp.js";import"./Input-BwdyLf-s.js";import"./ResponsivePopoverCommon.css-BB8NXUcU.js";import"./ValueStateMessage.css-BuevPY9h.js";import"./Suggestions.css-D3ddXDeO.js";import"./ListBoxItemGroupTemplate-DENNZn8k.js";import"./ComboBoxItemGroup-AlgVKKtk.js";import"./ListItemBaseTemplate-BnBz7YKK.js";import"./Token-Dy6xV80q.js";import"./ScrollEnablement-geO1o17m.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C6QBtN6x.js";import"./ToggleButton-B-QFrS5f.js";import"./multiselect-all-N4HaTKEt.js";import"./SuggestionItem-CxmDW4WJ.js";import"./index-BiLxpb9V.js";import"./Option-UA4r9OEN.js";import"./index-BZTFBXyH.js";import"./SegmentedButton-CFFdkNmV.js";import"./index-CyrFd1-2.js";import"./Select-4EhfYWf2.js";import"./InvisibleMessage-Bc2H5qZ0.js";import"./index-CuSCF_fM.js";import"./index-BFItwByU.js";import"./index-DCsPrgaQ.js";import"./index-Cp7SAe62.js";import"./IconDesign-DXd8PPVF.js";import"./filter-os8ZpS83.js";import"./group-2-YJ2lTcge.js";import"./sort-descending-Dse1md5D.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CvXqra-k.js";import"./utils-Dm1Xt3ii.js";import"./index-BuVPQ4y7.js";import"./index-Cf1IHbj9.js";import"./index-DPPca9iV.js";import"./navigation-down-arrow-CACI7wDg.js";import"./navigation-right-arrow-CNG3xMAM.js";import"./navigation-right-arrow-ya-aDXCF.js";import"./useCurrentTheme-DFXbScZb.js";import"./index-BGM9-IM9.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BdqZbY6W.js";import"./paper-plane-BP_sElBh.js";import"./index-EM9DFt2Q.js";import"./less-CnrtmDHy.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
