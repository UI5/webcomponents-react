import{j as e}from"./iframe-utVLPk6_.js";import{useMDXComponents as o}from"./index-_7Ivp6Lr.js";import{I as l,F as r}from"./CommandsAndQueries-BVodeffY.js";import{M as a,C as c}from"./blocks-CRxaTikh.js";import"./Tag-LOOaBowr.js";import"./index-CJmgWra1.js";import"./copy-lkIY5Hce.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BDsnXMC6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5CeUqLr.js";import"./index-vwTPEa24.js";import"./index-w9tOLOey.js";import"./Link-BwFR1FvL.js";import"./index-CQTFiQOO.js";import"./index-BNJRxg3C.js";import"./index-Bt2MbZdo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BP35uBwA.js";import"./addCustomCSSWithScoping-ByL_YC7i.js";import"./index-B4YNNEZt.js";import"./information-D-kuCoWP.js";import"./sys-enter-2-ClJM_7Cf.js";import"./alert-CrgSVEE-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D9p4z9Ic.js";import"./delete-DU934BZr.js";import"./settings-DNYW2Yi4.js";import"./NoData-DnrO3Jwz.js";import"./IllustratedMessage-DRvKcE8V.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DuJYHUBv.js";import"./index-DR6xJv6H.js";import"./index-C1CQn4Ke.js";import"./slim-arrow-down-CGFNdOyS.js";import"./Input-tiP9VWUa.js";import"./ResponsivePopoverCommon.css-B57nbVdH.js";import"./ValueStateMessage.css-JwjTw4R6.js";import"./Suggestions.css-CCPLE5i3.js";import"./ListBoxItemGroupTemplate-Ck1u2roF.js";import"./ComboBoxItemGroup-C0T7EKNO.js";import"./ListItemBaseTemplate-C2vXW6Ud.js";import"./Token-DQU0dq_y.js";import"./ScrollEnablement-CN5L_Azg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BjnDf0fW.js";import"./ToggleButton-C4-LaA2x.js";import"./SuggestionItem-DboqQoqi.js";import"./index-F4xTZLhy.js";import"./Option-sIfC3W_q.js";import"./index-BtNFNoxA.js";import"./SegmentedButton-vHAZ21UT.js";import"./index-SO2G2vA7.js";import"./Select-DZIQ9ThU.js";import"./InvisibleMessage-CxrOCkfz.js";import"./slim-arrow-down-BfxVVO5J.js";import"./index-B6DVqkRr.js";import"./index-DqzlYh_H.js";import"./index-DGUOU9Dg.js";import"./index-BIVITqPd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B_SeQI6p.js";import"./group-2-DwYUID86.js";import"./sort-descending-s-9kbj_2.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CReDoCO5.js";import"./utils-CKyuyf9p.js";import"./index-DIwmFcHk.js";import"./index-Bs3vKR02.js";import"./index-zHNwrOOb.js";import"./navigation-down-arrow-CSxEN5wN.js";import"./navigation-right-arrow-CElFKq2C.js";import"./navigation-right-arrow-Dfc9Wtwu.js";import"./useCurrentTheme-DctUO6zQ.js";import"./index-EZDuqYef.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DR6ovS2D.js";import"./paper-plane-BTVeyq21.js";import"./index-B60t1jRe.js";import"./less-Bc9CIIDh.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
`,e.jsx(n.h1,{id:"analyticaltable-plugin-usef2celledit",children:"AnalyticalTable Plugin: useF2CellEdit"}),`
`,e.jsx(l,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Since: v2.14.0"})}),`
`,e.jsx(n.p,{children:"A plugin hook that enables F2-based cell editing for interactive elements inside a cell."}),`
`,e.jsxs(n.p,{children:["To ",e.jsx(n.strong,{children:"ensure the hook works correctly"}),", make sure that:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Each column containing interactive elements has the ",e.jsx(n.code,{children:"interactiveElementName"})," property set. ",e.jsx(n.strong,{children:"Note:"})," This property is also used to describe the cell's content for screen readers."]}),`
`,e.jsxs(n.li,{children:["The callback Ref returned by ",e.jsx(n.code,{children:"useF2CellEdit.useCallbackRef"})," is attached to every interactive element within the cell."]}),`
`]}),`
`,e.jsxs(n.p,{children:["The hook manages focus, keyboard navigation, and ",e.jsx(n.code,{children:"tabindex"})," for cells with interactive content:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(n.code,{children:"F2"})," moves focus between the cell container and its first interactive element."]}),`
`,e.jsxs(n.li,{children:["Updates the cell's ",e.jsx(n.code,{children:"aria-label"})," with the interactive element's name for accessibility."]}),`
`,e.jsx(n.li,{children:"Prevents standard navigation keys from interfering when editing a cell."}),`
`]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(c,{of:s,sourceState:"none"}),`
`,e.jsx(n.h3,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import type {
  AnalyticalTableCellInstance,
  AnalyticalTableColumnDefinition,
  InputDomRef,
  AnalyticalTablePropTypes,
} from '@ui5/webcomponents-react';
import { AnalyticalTableHooks, AnalyticalTable, Button, CheckBox, Input, Switch, Tag } from '@ui5/webcomponents-react';
import paperPlaneIcon from '@ui5/webcomponents-icons/dist/paper-plane';

const { useF2CellEdit } = AnalyticalTableHooks;

const columns: AnalyticalTableColumnDefinition[] = [
  {
    Header: 'Input',
    id: 'input',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<InputDomRef>(props);
      return <Input ref={callbackRef} />;
    },
    interactiveElementName: 'Input',
  },
  {
    Header: 'Input & Button',
    id: 'input_btn',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef(props);
      return (
        <>
          <Input ref={callbackRef} />
          <Button ref={callbackRef} icon={paperPlaneIcon} tooltip="Submit" accessibleName="Submit" />
        </>
      );
    },
    interactiveElementName: 'Input and Button',
  },
  {
    Header: 'Text',
    accessor: 'name',
  },
  {
    Header: 'Button',
    id: 'btn',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef(props);
      return <Button ref={callbackRef}>Button</Button>;
    },
    interactiveElementName: () => 'Button',
  },
  {
    Header: 'Non-interactive custom content',
    accessor: 'friend.name',
    Cell: (props: AnalyticalTableCellInstance) => {
      return <Tag>{props.value}</Tag>;
    },
  },
  {
    Header: 'Switch or CheckBox',
    id: 'switch_checkbox',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef(props);
      if (props.row.index % 2) {
        return <CheckBox ref={callbackRef} accessibleName="Dummy CheckBox" />;
      }
      return <Switch ref={callbackRef} accessibleName="Dummy Switch" />;
    },
    interactiveElementName: (props: AnalyticalTableCellInstance) => {
      if (props.row.index % 2) {
        return 'CheckBox';
      }
      return 'Switch';
    },
  },
];

const tableHooks: AnalyticalTablePropTypes['tableHooks'] = [useF2CellEdit];

function TableWithInputs({ data }) {
  return <AnalyticalTable data={data} columns={columns} tableHooks={tableHooks} visibleRows={5} />;
}
`})}),`
`,e.jsx(r,{})]})}function Me(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Me as default};
