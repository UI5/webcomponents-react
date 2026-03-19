import{j as e}from"./iframe-D9XQThMB.js";import{useMDXComponents as o}from"./index-BFkPJIs4.js";import{I as r}from"./CommandsAndQueries-BBuqlp9J.js";import{M as l,C as a}from"./blocks-CsZckq-p.js";import"./Tag-NpQQnYo4.js";import"./index-BWcAyF8h.js";import"./copy-CyvuSNR_.js";import{F as c}from"./Footer-8Yr8m1IV.js";import"./PageNotFound-DktVNoBl.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-B7SriO4F.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CJ7-xxSX.js";import"./index-BDim0UZ8.js";import"./index-C40uNmLM.js";import"./index-9BnKq7JY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DrummEDM.js";import"./addCustomCSSWithScoping-BEVVchOt.js";import"./index-CjxO355V.js";import"./index-CxgWM8Dp.js";import"./index-BlKrBUMf.js";import"./information-Bvi0jW5b.js";import"./sys-enter-2-Bex-whDb.js";import"./alert-CKQIr3Jj.js";import"./index-BtpxSXz8.js";import"./Illustrations-DGm-82Ik.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C6l-lvwE.js";import"./delete-SLkYfI9p.js";import"./settings-By34T56u.js";import"./NoData-sY8uzsrT.js";import"./NoFilterResults-VWGA7F_B.js";import"./index-4RD7ReOC.js";import"./IllustratedMessage-B9-pF2sP.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-yyA8QoJL.js";import"./Input-Dd8V6pYN.js";import"./ResponsivePopoverCommon.css-AccouXMm.js";import"./ValueStateMessage.css-C61ZdvXC.js";import"./Suggestions.css-DNN4WTtE.js";import"./ListBoxItemGroupTemplate-UMOtcqUV.js";import"./ComboBoxItemGroup-DyN_O1AM.js";import"./ListItemBaseTemplate-XMqPEKMa.js";import"./Token-CQTdwpxJ.js";import"./ScrollEnablement-D_xuZieI.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B-WRJ_4D.js";import"./ToggleButton-Cr7hkNto.js";import"./multiselect-all-BVy6T6bO.js";import"./SuggestionItem-Br9jPSr7.js";import"./index-BVuuRkkJ.js";import"./Option-EaORebIw.js";import"./index-B3m-2CpX.js";import"./SegmentedButton-DiE2PIs7.js";import"./index-K3c-KgVe.js";import"./Select-Ddna0J1l.js";import"./InvisibleMessage-tD1-WheS.js";import"./index-DdNzr3cY.js";import"./index-Ciqs7IaJ.js";import"./index-_tEk2Ep5.js";import"./index-B3U-GzKE.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B_937pQu.js";import"./group-2-Bnl5n-o-.js";import"./sort-descending-B6wckQ-f.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-i_OA1AiM.js";import"./utils-Bacr1bLf.js";import"./index-BMvMDeNG.js";import"./index-LL-cJ3gy.js";import"./index-DkfMYjPP.js";import"./navigation-down-arrow-CkUpvPU_.js";import"./navigation-right-arrow-BaP6uFWY.js";import"./navigation-right-arrow-BF8po_8E.js";import"./useCurrentTheme-DdIh3E30.js";import"./index-DzSim1oI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BRqaQsDk.js";import"./paper-plane-nkcuGxCV.js";import"./index-gSABYD5Y.js";import"./less-Dq6KoCJo.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
`,e.jsx(a,{of:s,sourceState:"none"}),`
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
`,e.jsx(c,{})]})}function Xe(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};
