import{j as e}from"./iframe-DoasxszC.js";import{u as o,M as l,C as r}from"./blocks-DBX_G92C.js";import{I as a}from"./CommandsAndQueries-Bg5oLjv_.js";import"./Tag-DCvAsOsB.js";import"./index-Bkq6_nAR.js";import"./copy-Bp1X0rrX.js";import{F as c}from"./Footer-BMRkHXkr.js";import"./PageNotFound-DlCPYtCu.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CwBfsyPl.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CvHgBQZc.js";import"./index-Dl7LQ4u1.js";import"./index-BxFkVED5.js";import"./index-UQi-W-Cc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CwB0h3WK.js";import"./addCustomCSSWithScoping-D15HIh5y.js";import"./index-CY9OUOeY.js";import"./index-C3bV2_l1.js";import"./index-DUsiHM8W.js";import"./information-C1mBwnJc.js";import"./sys-enter-2-D2TESZyh.js";import"./alert-CWEkUWZv.js";import"./index-BuSM4uik.js";import"./Illustrations-B4E_SvFf.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-FUb71t84.js";import"./delete-BNsJIylK.js";import"./settings-DIZQIGHO.js";import"./NoData-CPifF9dk.js";import"./NoFilterResults-pjvoSbdT.js";import"./index-CS1yMP3E.js";import"./IllustratedMessage-D0QVBew0.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-B7aSEDJ1.js";import"./Input-xqXXZk7V.js";import"./ResponsivePopoverCommon.css-ClOyFMHE.js";import"./ValueStateMessage.css-CQfpuydp.js";import"./Suggestions.css-DgSzBLOP.js";import"./ListBoxItemGroupTemplate-CnyFVUQh.js";import"./ComboBoxItemGroup-C6J1oEbB.js";import"./ListItemBaseTemplate-56RYrvsT.js";import"./Token-Cy2nK-8H.js";import"./ScrollEnablement-Ct30bxH4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-f5cQaHwh.js";import"./ToggleButton-4lEDIg8i.js";import"./multiselect-all-CrwvgfDL.js";import"./SuggestionItem-BUm69vbz.js";import"./index-DujjVqPC.js";import"./Option-qr-0CuEo.js";import"./index-DKO_VCMs.js";import"./SegmentedButton-C_BxO-nh.js";import"./index-Bfc0n9xu.js";import"./Select-DyTpHhQN.js";import"./InvisibleMessage-CpFdH-Af.js";import"./index-Dodkzra4.js";import"./index-B5xDE1PM.js";import"./index-B3gSZvjn.js";import"./index-DXinWdIe.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CXOaaD8X.js";import"./group-2-DOt9casX.js";import"./sort-descending-CSa9QeUi.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BLz5gwPO.js";import"./utils-CI2Ukgk8.js";import"./index-CpTTgPof.js";import"./index-C7-ObCq_.js";import"./index-DfjuUSBw.js";import"./navigation-down-arrow-BAtAokVf.js";import"./navigation-right-arrow-BiRIP0c6.js";import"./navigation-right-arrow-CIOXuOhx.js";import"./useCurrentTheme-CsrucE5U.js";import"./index-D8ci1hZC.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BFJsr9kq.js";import"./paper-plane-CktOgF6u.js";import"./index-KS5Bmaht.js";import"./less-CflKdUlr.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
`,e.jsx(n.h1,{id:"analyticaltable-plugin-usef2celledit",children:"AnalyticalTable Plugin: useF2CellEdit"}),`
`,e.jsx(a,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
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
`,e.jsx(r,{of:s,sourceState:"none"}),`
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
`,e.jsx(c,{})]})}function _e(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{_e as default};
