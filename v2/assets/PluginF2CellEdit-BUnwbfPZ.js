import{j as e}from"./iframe-Cx-m_Nf0.js";import{useMDXComponents as o}from"./index-Danm_hzB.js";import{I as l,F as r}from"./CommandsAndQueries-wiGvioaD.js";import{M as a,C as c}from"./blocks-BeOH24VU.js";import"./Tag-CULcfvQz.js";import"./index-JZ9249rN.js";import"./copy-saj_hA78.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CQ1Q9bJG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BkCtcCNV.js";import"./index-BRPuZYCF.js";import"./index-D-dAoXo8.js";import"./Link-CR1SnY-5.js";import"./index-D0XJTq9Q.js";import"./index-B10MFmnl.js";import"./index-bcKxXY3o.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Hev4WvRm.js";import"./addCustomCSSWithScoping-CdsdDkDi.js";import"./index-DROJnCko.js";import"./information-CEQNZlPN.js";import"./sys-enter-2-AhkD0MnF.js";import"./alert-Bji-b9H2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D1-JQb3f.js";import"./delete-Bl2x4rU1.js";import"./settings-Bv6hFb-P.js";import"./NoData-CSJ_na3c.js";import"./IllustratedMessage-CPrK3i7_.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-bu6kmgxW.js";import"./index-BSHVbo6V.js";import"./index-eSExnXlh.js";import"./slim-arrow-down-DKAHurNq.js";import"./Input-BGkNvg04.js";import"./ResponsivePopoverCommon.css-BuTMFQw1.js";import"./ValueStateMessage.css-DkCm038q.js";import"./Suggestions.css-C3EK_z35.js";import"./ListBoxItemGroupTemplate-BFkq-NXI.js";import"./ComboBoxItemGroup-BKPCcMXX.js";import"./ListItemBaseTemplate-2sNFKkfz.js";import"./Token-BqrAbKWZ.js";import"./ScrollEnablement-BylCXS9j.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bo_f_yy9.js";import"./ToggleButton-9pjROLTu.js";import"./SuggestionItem-6D6ujuPl.js";import"./index-CKUsXBNu.js";import"./Option-DzMmQowO.js";import"./index-BWv5ujwm.js";import"./SegmentedButton-Cj4yij2C.js";import"./index-BLOeq_DJ.js";import"./Select-FmZbtvvG.js";import"./InvisibleMessage-D-MV8Msz.js";import"./slim-arrow-down-DMPgem2M.js";import"./index-BKf9Irue.js";import"./index-D3zHQWzc.js";import"./index-Cp-3_oQg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-3mU9MEPJ.js";import"./group-2-Bro4NNr1.js";import"./sort-descending-DjJ8E8sw.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DF9ssoyr.js";import"./utils-BNoG9b0S.js";import"./index-dmgo9yxd.js";import"./index-CLBMOU_H.js";import"./index-TIjwWRgv.js";import"./navigation-down-arrow-BGKJSbuE.js";import"./navigation-right-arrow-DxbKKfUO.js";import"./navigation-right-arrow-BTVVtZ0b.js";import"./useCurrentTheme-Dm6R4j9A.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CF38bavx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BF52L7PE.js";import"./paper-plane-CbELQrqU.js";import"./index-B-qCzqdY.js";import"./less-DMl7Bxfb.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
