import{j as e}from"./iframe-ERwSzs3g.js";import{useMDXComponents as o}from"./index-C_Wbk-9f.js";import{I as l,F as r}from"./CommandsAndQueries-Dd3ZB-Zm.js";import{M as a,C as c}from"./blocks-CPggC12N.js";import"./Tag-B-CdIpAx.js";import"./index-CaDxd8lJ.js";import"./copy-CudSiVH8.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Dzpuhj_j.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D0Kgz2KY.js";import"./index-CL--3ayL.js";import"./index-I8Rn_Xtk.js";import"./Link-BEsTVss7.js";import"./index-RyYuggn2.js";import"./index--5AI5DCY.js";import"./index-CZ9mn71l.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BxRB-GRE.js";import"./addCustomCSSWithScoping-Clegv1AW.js";import"./index-BcvsAi-y.js";import"./information-CHdxYb5g.js";import"./sys-enter-2-CJZeFu0K.js";import"./alert-DqHHhUpv.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dqn-jABc.js";import"./delete-Bu7VmTYp.js";import"./settings-CQ_5VNNI.js";import"./NoData-D2Tt32Od.js";import"./IllustratedMessage-B_rNMhob.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-7XsDJsR0.js";import"./index-CKj1ghFb.js";import"./index-VEHANs_d.js";import"./slim-arrow-down-2J31Ucf0.js";import"./Input-DSupStK3.js";import"./ResponsivePopoverCommon.css-DReQi8ZR.js";import"./ValueStateMessage.css-Lf_StamT.js";import"./Suggestions.css-BIz0Zv49.js";import"./ListBoxItemGroupTemplate-DUimE2BY.js";import"./ComboBoxItemGroup-B_cfzOqG.js";import"./ListItemBaseTemplate-BQH3JJKy.js";import"./Token-DX8SqOz4.js";import"./ScrollEnablement-BD4VIdDp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ck-G_e39.js";import"./ToggleButton-6e7zC1X-.js";import"./SuggestionItem-BmiMZKr8.js";import"./index-BIALcVNb.js";import"./Option-Br2Csiuj.js";import"./index-BJrpf7k8.js";import"./SegmentedButton-BjzAZg81.js";import"./index-CqF2GYF8.js";import"./Select-Uz-gzee2.js";import"./InvisibleMessage-CtK1BuKZ.js";import"./slim-arrow-down-BdCansBN.js";import"./index-CA_zt6zs.js";import"./index-DvXXaKIh.js";import"./index-f2S0or9y.js";import"./index-HN2JJ6Qh.js";import"./IconDesign-DXd8PPVF.js";import"./filter-wg2A7PH5.js";import"./group-2-t0uZVGoA.js";import"./sort-descending-DTK9LhKi.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-YnPiPISE.js";import"./utils-DWJXL1ej.js";import"./index-BrPS-6K1.js";import"./index-BYHL4ln3.js";import"./index-Dq6Fu5U-.js";import"./navigation-down-arrow-vpfptFd4.js";import"./navigation-right-arrow-DiQFcMBc.js";import"./navigation-right-arrow-CzKfQRKc.js";import"./useCurrentTheme-DRl35Uzu.js";import"./index-BDQR7c08.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BDBjPcau.js";import"./paper-plane-D1nv_q0M.js";import"./index-CaV8_vUx.js";import"./less-Dmpu7iye.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
