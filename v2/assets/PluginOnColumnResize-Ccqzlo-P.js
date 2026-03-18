import{j as o}from"./iframe-CFWpN4R7.js";import{useMDXComponents as r}from"./index-dB03iz0B.js";import{I as n}from"./CommandsAndQueries-CCwXwUid.js";import{M as m,C as p}from"./blocks-Aj9mLxPA.js";import"./Tag-B06DXZI6.js";import"./index-BhKFh4UU.js";import"./copy-DSqUQhHe.js";import{F as s}from"./Footer-DJewOY_X.js";import"./PageNotFound-CLSfRNnq.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-AwnbcJJV.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-RyF9dh8t.js";import"./index-D83xFEsI.js";import"./index-4-t9AGVk.js";import"./index-DnsyYKyj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_Q3wyl1.js";import"./addCustomCSSWithScoping-CJGgSOK2.js";import"./index-lnQyu4TM.js";import"./index-CeR8RWqv.js";import"./index-nHUwJst8.js";import"./information-CkAnn-lR.js";import"./sys-enter-2-D36-WSJV.js";import"./alert-CoDmVWPa.js";import"./index-B803YP9c.js";import"./Illustrations-dv6stKlC.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CJYrTbxl.js";import"./delete-oYHX6VFJ.js";import"./settings-BtBp-qQy.js";import"./NoData-C4imxIub.js";import"./NoFilterResults-Bz2MhsDC.js";import"./index-04ZJmerE.js";import"./IllustratedMessage-Bc8Qdoe-.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CUlUYk0a.js";import"./Input-C-H0NyPN.js";import"./ResponsivePopoverCommon.css-gi_-nTdf.js";import"./ValueStateMessage.css-BXLDmzuy.js";import"./Suggestions.css-DHcwzhot.js";import"./ListBoxItemGroupTemplate-CAS_Tv3n.js";import"./ComboBoxItemGroup-DaaAJODI.js";import"./ListItemBaseTemplate-YeqUv09f.js";import"./Token-BsUCyecE.js";import"./ScrollEnablement-CctUY57C.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-R5Hu6p8-.js";import"./ToggleButton-DAqs2wKA.js";import"./multiselect-all-BoxtuGn8.js";import"./SuggestionItem-CemVcQIM.js";import"./index-CSrNgzI2.js";import"./Option-DnxME5E6.js";import"./index-ZLzfsPTb.js";import"./SegmentedButton-S5xAWCiq.js";import"./index-C017xkvz.js";import"./Select-Ck1JeGEi.js";import"./InvisibleMessage-Be8DiyGj.js";import"./index-B1fSu1UB.js";import"./index-Km-Z_irJ.js";import"./index-Bj-bvpZw.js";import"./index-DBJSqui-.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CK6IqeE4.js";import"./group-2-DzMEyvAW.js";import"./sort-descending-C0_8q9F0.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-xOdXlKkx.js";import"./utils-BncuNKD7.js";import"./index-Gpnmba2H.js";import"./index-DOMLuM49.js";import"./index-DZN-dGo_.js";import"./navigation-down-arrow-CrgxLPHm.js";import"./navigation-right-arrow-B7tVG0rj.js";import"./navigation-right-arrow-BAsSc-Qi.js";import"./useCurrentTheme-kT0-U9p_.js";import"./index-DSCaE3Mt.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CXZT-kLk.js";import"./paper-plane-CC1wCXgi.js";import"./index-BM3hZRzv.js";import"./less-BZ4m5AVI.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
