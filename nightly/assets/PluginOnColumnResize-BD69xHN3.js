import{j as o}from"./iframe-C125K5pw.js";import{useMDXComponents as n}from"./index-Bjpa6FGV.js";import{I as r,F as m}from"./CommandsAndQueries-ldqvUWJl.js";import{M as p,C as s}from"./blocks-BXnHeSiR.js";import"./Tag-gRLBJrjs.js";import"./index-Dr1L9sIB.js";import"./copy-CAIaKhcd.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-B5V7Jgia.js";import"./preload-helper-PPVm8Dsz.js";import"./index-sMZVCCfo.js";import"./index-HJtrmXU5.js";import"./index-DAOynge-.js";import"./Link-CLfWc0rF.js";import"./index-BIOgtrFW.js";import"./index-CTal1c8_.js";import"./index-BwMWTiPK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CKkpAdHR.js";import"./addCustomCSSWithScoping-cidmMbR-.js";import"./index-DSCACoUK.js";import"./information-DY8EV-7L.js";import"./sys-enter-2-DLPshmQC.js";import"./alert-DGx7QxWd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DRi7r004.js";import"./delete-VcR_hMk7.js";import"./settings-CWzRvdF8.js";import"./NoData-KB6el7H0.js";import"./IllustratedMessage-CXh3bWR-.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DU_FutSt.js";import"./index-DjvH2VLk.js";import"./index-qC8gqSc4.js";import"./slim-arrow-down-DjzmFdkh.js";import"./Input-DjEzLRgz.js";import"./ResponsivePopoverCommon.css-CBDbaQoK.js";import"./ValueStateMessage.css-HbxeHEGm.js";import"./Suggestions.css-Ip_-2ncf.js";import"./ListBoxItemGroupTemplate-CrA4icN9.js";import"./ComboBoxItemGroup-CqfU9sll.js";import"./ListItemBaseTemplate-DDC3KDiX.js";import"./Token-DqIEO0pH.js";import"./ScrollEnablement-CHcdrCpT.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DYRsCa9G.js";import"./ToggleButton-Civ_g9Ey.js";import"./SuggestionItem-HWID_xuJ.js";import"./index-mutglJDe.js";import"./Option-C4a1sy2E.js";import"./index-D-2SIQ7j.js";import"./SegmentedButton-CBAEd1y_.js";import"./index-Ddxh1zbZ.js";import"./Select-3j4-u7qz.js";import"./InvisibleMessage-ZuAMUP0A.js";import"./slim-arrow-down-DWd9421G.js";import"./index-DDVJF59Y.js";import"./index-BpfByow1.js";import"./index-DYXHSW4J.js";import"./index-CeMB97VO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BslYw4vv.js";import"./group-2-xdb4cINx.js";import"./sort-descending-CbDESvm8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CymctnkS.js";import"./utils-BP0nLIbG.js";import"./index-UdJktvhD.js";import"./index-DZ6xLZXa.js";import"./index-Bapg1jlH.js";import"./navigation-down-arrow-DdfI5AYL.js";import"./navigation-right-arrow-CIultdti.js";import"./navigation-right-arrow-jfn-V-8v.js";import"./useCurrentTheme-D0ZROOM1.js";import"./index-DJvLtzE7.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-071s-nZz.js";import"./paper-plane-CGcqiSQu.js";import"./index-DlizPG_T.js";import"./less-BvWBky-G.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
