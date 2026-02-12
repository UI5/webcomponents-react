import{j as e}from"./iframe-DK_3t7HQ.js";import{useMDXComponents as o}from"./index-Bn4DIwe1.js";import{I as l,F as r}from"./CommandsAndQueries-8GqG6vck.js";import{M as a,C as c}from"./blocks-BYCX_D4a.js";import"./Tag-CMm3ArFn.js";import"./index-DM6dIB46.js";import"./copy-Cen_7za9.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BICa3YPY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DcvukCsl.js";import"./index-W3t_MBGP.js";import"./index-BD65A0G0.js";import"./Link-s9SylKhD.js";import"./index-BLsgqlPC.js";import"./index-Bw6wQW8K.js";import"./index-BlpaDNQk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyNtnc-C.js";import"./addCustomCSSWithScoping-BS7bnaiL.js";import"./index-DGhVTpl9.js";import"./information-MEtG0nZR.js";import"./sys-enter-2-DcwCthWV.js";import"./alert-CP9vtKnc.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CJcJ6ZNX.js";import"./delete-DXy6M3OZ.js";import"./settings-D0VrA07N.js";import"./NoData-BtEwvsbO.js";import"./IllustratedMessage-BWCPoFmo.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-yIv6d63o.js";import"./index-B9cf1Eyl.js";import"./index-DrhPB-8t.js";import"./slim-arrow-down-DAUAvb4X.js";import"./Input-CXY88w1C.js";import"./ResponsivePopoverCommon.css-Dlh5fqps.js";import"./ValueStateMessage.css-Chn8tD08.js";import"./Suggestions.css-C4SxCV0j.js";import"./ListBoxItemGroupTemplate-PD87gjmk.js";import"./ComboBoxItemGroup-CQlIYlQD.js";import"./ListItemBaseTemplate-C02QBSHL.js";import"./Token-Ke8CvjjM.js";import"./ScrollEnablement-MqyRN0-M.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BmjJqapy.js";import"./ToggleButton-BfrGkVWL.js";import"./SuggestionItem-CKzN3sv2.js";import"./index-tPIwOH9T.js";import"./Option-DXM5mccC.js";import"./index-C8nz_Rgb.js";import"./SegmentedButton-BGBZy06V.js";import"./index-ur1oRU8x.js";import"./Select-w2IGnN0_.js";import"./InvisibleMessage-D9sFbW1z.js";import"./slim-arrow-down-BB5WzEh_.js";import"./index-DsUOJVIL.js";import"./index-BeyM_sLD.js";import"./index--WGzy90A.js";import"./index-CjVM0U5d.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BCY9qfzQ.js";import"./group-2-DozQO3w7.js";import"./sort-descending-Doamk57x.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BUnfVL6W.js";import"./utils-BzsJoZkQ.js";import"./index-kf_FyfXD.js";import"./index-MtnL4A_g.js";import"./index-CiQBsJ4r.js";import"./navigation-down-arrow-B8-P8g3_.js";import"./navigation-right-arrow-FMnV_NeM.js";import"./navigation-right-arrow-fibED6EI.js";import"./useCurrentTheme-BFuyjl0R.js";import"./index-BWXdaK_T.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-9GnEdIyA.js";import"./paper-plane-CyMFIh-J.js";import"./index-Ce-FX6Nz.js";import"./less-C_g1y2f6.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
