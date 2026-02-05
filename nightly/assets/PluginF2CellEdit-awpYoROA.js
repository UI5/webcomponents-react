import{j as e}from"./iframe-DVaoJynC.js";import{useMDXComponents as o}from"./index-D8trWAUj.js";import{I as l,F as r}from"./CommandsAndQueries-DmxPE0MZ.js";import{M as a,C as c}from"./blocks-CrqJ-Z31.js";import"./Tag--1vn2ouf.js";import"./index-CpBbNRGM.js";import"./copy-DE_2j5FQ.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DOBjcAeS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CrdrDGzw.js";import"./index-xNxGNywP.js";import"./index-1ngZk4Q4.js";import"./Link-Q_Ld2CqF.js";import"./index-qrdXuh6V.js";import"./index-DDgoCywP.js";import"./index-dYIL-oMO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-V3cCpaGB.js";import"./addCustomCSSWithScoping-CedcLW5T.js";import"./index-DW_Y2aM_.js";import"./information-BslaWIIc.js";import"./sys-enter-2-iJEMuBvO.js";import"./alert-DlPbm_nn.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ByjmV8TX.js";import"./delete-C5YMqpOL.js";import"./settings-d6RTuHxS.js";import"./NoData-BrDVqhYl.js";import"./IllustratedMessage-DSeDOabw.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-B1sGl9VQ.js";import"./index-DIUkg0Bi.js";import"./index-DlYrVi7e.js";import"./slim-arrow-down-DblcDTH-.js";import"./Input-DJnlitcX.js";import"./ResponsivePopoverCommon.css-a0LTy8oR.js";import"./ValueStateMessage.css-CxQEDxip.js";import"./Suggestions.css-gCSTg-U6.js";import"./ListBoxItemGroupTemplate-DjbBkz5B.js";import"./ComboBoxItemGroup-BgJNW9a2.js";import"./ListItemBaseTemplate-COydBmQa.js";import"./Token-BSwTugba.js";import"./ScrollEnablement-D-0-sBKz.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-dJtbJvai.js";import"./ToggleButton-DtAyHkvM.js";import"./SuggestionItem-VJ7PiMQr.js";import"./index-Dv6upnSV.js";import"./Option-CxhLxOlt.js";import"./index-DXNRk6WZ.js";import"./SegmentedButton-CwKnK_Zk.js";import"./index-DUJ3en-c.js";import"./Select-DWMoFafZ.js";import"./InvisibleMessage-6n9UFl41.js";import"./slim-arrow-down-Bug18Bzw.js";import"./index-CF3T_Rux.js";import"./index-BO8JvDII.js";import"./index-A1tOTDKa.js";import"./index-D0XhROSl.js";import"./IconDesign-DXd8PPVF.js";import"./filter-v-o7NIgL.js";import"./group-2-DFNtb2FF.js";import"./sort-descending-D8RrH-Tr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dyt-PFJH.js";import"./utils-Bi-_D6jF.js";import"./index-flUwuEIb.js";import"./index-BPU2VOiy.js";import"./index-CeHR8ypK.js";import"./navigation-down-arrow-CwSnvoD7.js";import"./navigation-right-arrow-DqGIwB48.js";import"./navigation-right-arrow-DGKZ_ZhO.js";import"./useCurrentTheme-DsBFWJ7L.js";import"./index-B3rGDK-q.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BYo7ps0s.js";import"./paper-plane-Dn8GiRfM.js";import"./index-DpV1kB7w.js";import"./less-J5QHLwwU.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
