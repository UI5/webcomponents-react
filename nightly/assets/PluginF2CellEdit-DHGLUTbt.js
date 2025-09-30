import{j as e}from"./iframe-B4y_-iU1.js";import{useMDXComponents as o}from"./index-Dmi6nQVe.js";import{I as r,F as l}from"./CommandsAndQueries-CcSeU6ue.js";import{M as a,C as c}from"./blocks-sxqAtQzk.js";import"./Tag-DlHRwvSs.js";import"./index-Dllizol6.js";import"./copy-DoYKp7vI.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DU8_U4hv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CUhg4Pue.js";import"./index-D9CWAfTz.js";import"./index-C7p9xCdn.js";import"./Link-DqVeu_cc.js";import"./index-BBdeIQ4g.js";import"./index-Bfg65B6s.js";import"./index-DGhRlPcl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DY4dR896.js";import"./addCustomCSSWithScoping-B0N-pOai.js";import"./index-BM-ZpZwJ.js";import"./information-D0sGyRbR.js";import"./sys-enter-2-C9g_SRcG.js";import"./alert-D-igEgv7.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CFl00F28.js";import"./delete-BdgAa7IT.js";import"./settings-ltoOfpnx.js";import"./NoData-BJ8H7p15.js";import"./IllustratedMessage-CRi5X6Hl.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-WsY88i2i.js";import"./index-Bsvhu9YC.js";import"./slim-arrow-down-Cic8v9YB.js";import"./Input-XpSBxwxq.js";import"./ResponsivePopoverCommon.css-p5LIoyU4.js";import"./ValueStateMessage.css-C6qx3eDB.js";import"./Suggestions.css-BVl5WNmq.js";import"./ListBoxItemGroupTemplate-CZlYWtN3.js";import"./ComboBoxItemGroup-dSVK-GrP.js";import"./ListItemBaseTemplate-BejSvRNG.js";import"./Token-Cw5uKiHz.js";import"./ScrollEnablement-D-ijl2E6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C_E-KHlV.js";import"./ToggleButton-5M-n5tkv.js";import"./SuggestionItem-M84D7oJF.js";import"./index-Bg7lGMvz.js";import"./Option-PNrPnZNL.js";import"./index-6pImetbD.js";import"./SegmentedButton-2LOsQkf5.js";import"./index-DvcI1fSE.js";import"./Select-B0cOOa_z.js";import"./InvisibleMessage-Cys8KAyT.js";import"./slim-arrow-down-DfvaHgtM.js";import"./index-BJc6WN0K.js";import"./index-CVLYvjV6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Buk7-JyN.js";import"./group-2-Dw1BqplP.js";import"./sort-descending-CyAGymLL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CEnt0uUY.js";import"./utils-C87OY1Pr.js";import"./index-D9yVLeiz.js";import"./index-W0AxIMnu.js";import"./index-DWX4uZHR.js";import"./navigation-down-arrow-BRrWGW8j.js";import"./navigation-right-arrow-C4VgjZ90.js";import"./navigation-right-arrow-DfdYJymZ.js";import"./useCurrentTheme-Cd3Dd4gq.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Doi2sOOu.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-lEOPI8BW.js";import"./paper-plane-Bd-SY9K2.js";import"./index-D43uRIcM.js";import"./less-DeoJiXSy.js";import"./index-DPmqrGlx.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
`,e.jsx(n.h1,{id:"analyticaltable-plugin-usef2celledit",children:"AnalyticalTable Plugin: useF2CellEdit"}),`
`,e.jsx(r,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
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
`,e.jsx(l,{})]})}function Le(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Le as default};
