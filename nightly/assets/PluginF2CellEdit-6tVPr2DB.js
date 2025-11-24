import{j as e}from"./iframe-ChLklOsd.js";import{useMDXComponents as o}from"./index-C8O_9vrB.js";import{I as l,F as r}from"./CommandsAndQueries-BJfqhrRX.js";import{M as a,C as c}from"./blocks-DJtWS-rM.js";import"./Tag-DfUNsarH.js";import"./index-D3GBtHew.js";import"./copy-e7lZwdk_.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Cni3-C_u.js";import"./preload-helper-PPVm8Dsz.js";import"./index-zPNCu5nO.js";import"./index-CZdKIXPg.js";import"./index-BapOo3Yq.js";import"./Link-8xYNNbnA.js";import"./index-CLorPZ9t.js";import"./index-DapyP3wm.js";import"./index-C6Hr8eB_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxJjekgT.js";import"./addCustomCSSWithScoping-CUADiRCd.js";import"./index-k8fk5wba.js";import"./information-Cwgz9DFQ.js";import"./sys-enter-2-CCtRtPlT.js";import"./alert-B2sdUTAu.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-qH1qKYII.js";import"./delete-h7eVr2Vw.js";import"./settings-BKcM-wPp.js";import"./NoData-J1K7Ymhn.js";import"./IllustratedMessage-CtqAhvd3.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-XMbTNtDO.js";import"./index-TSkw3SF1.js";import"./index-BzOBut2T.js";import"./slim-arrow-down-C0sKTfFd.js";import"./Input-Bw80AfuH.js";import"./ResponsivePopoverCommon.css-rK6RDwp7.js";import"./ValueStateMessage.css-BUi7Lug0.js";import"./Suggestions.css-60iPjMbi.js";import"./ListBoxItemGroupTemplate-CzUkEy5V.js";import"./ComboBoxItemGroup-DjZHBMDi.js";import"./ListItemBaseTemplate-fY_VN0oy.js";import"./Token-BNT6ZbqA.js";import"./ScrollEnablement-ZwyKnO_p.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D2j6MVzc.js";import"./ToggleButton-Cg7Ob5xf.js";import"./SuggestionItem-0lQp_3Fi.js";import"./index-AGwizfQV.js";import"./Option-Fwlb6Z4G.js";import"./index-B9caYodE.js";import"./SegmentedButton-BbW03Ci4.js";import"./index-Ogz2SBUe.js";import"./Select-DOXy8bYp.js";import"./InvisibleMessage-BNlluPzS.js";import"./slim-arrow-down-3G2_d1HL.js";import"./index-B1ESy-y5.js";import"./index-B0rGjn3A.js";import"./index-r7SyDcBw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CkATdhv-.js";import"./group-2-DsXa8NWz.js";import"./sort-descending-Dp-Q-OnD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-ANjhBQcR.js";import"./utils-DUOn4GqP.js";import"./index--7ojLxPu.js";import"./index-YOMQ5zOo.js";import"./index-BqvABamv.js";import"./navigation-down-arrow-KDgf9JO_.js";import"./navigation-right-arrow-GRefa7J7.js";import"./navigation-right-arrow-CvUkn4up.js";import"./useCurrentTheme-BJro2kG-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-y2jErdQp.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-RlsHBs8r.js";import"./paper-plane-C-4qo-fh.js";import"./index-BXWtnQNN.js";import"./less-CCt5DJvB.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
