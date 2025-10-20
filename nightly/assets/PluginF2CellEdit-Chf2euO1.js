import{j as e}from"./iframe-CSbQr9Kh.js";import{useMDXComponents as o}from"./index-Bm__WzDY.js";import{I as l,F as r}from"./CommandsAndQueries-BBfDJted.js";import{M as a,C as c}from"./blocks-TfJF1wSB.js";import"./Tag-A7CWsIQR.js";import"./index-cCDc2RK7.js";import"./copy-CIEB0M7W.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DSsuzZnr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CqhcpXS6.js";import"./index-HYYwxuYt.js";import"./index-DOzwAkgD.js";import"./Link-Cjj3vJ0R.js";import"./index-B6cEeVTY.js";import"./index-CnvIjGJy.js";import"./index-BC5Egg9m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbQfKOeW.js";import"./addCustomCSSWithScoping-D9vmwUKM.js";import"./index-D2CGZc8Q.js";import"./information-DqQUPKzo.js";import"./sys-enter-2-BXqUXr7U.js";import"./alert-CG5QiRAo.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-nDPSzVIl.js";import"./delete-BJacbrPT.js";import"./settings-AWsPUNGG.js";import"./NoData-Be4XzJOz.js";import"./IllustratedMessage-DYcCQrXb.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-oFDVAAPo.js";import"./index-DBsJuuDB.js";import"./index-gLPF6SWi.js";import"./slim-arrow-down-DxVwfy5r.js";import"./Input-CDRJXkCD.js";import"./ResponsivePopoverCommon.css-CX_5uYsf.js";import"./ValueStateMessage.css--pnBJkXc.js";import"./Suggestions.css-BU_P2C6y.js";import"./ListBoxItemGroupTemplate-DSBmxLfg.js";import"./ComboBoxItemGroup-DXvJ7bIP.js";import"./ListItemBaseTemplate-DsQq_j4Z.js";import"./Token-CJJk4a0-.js";import"./ScrollEnablement-DpkPz9em.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ck6WotIf.js";import"./ToggleButton-DHGAaV5Z.js";import"./SuggestionItem-EYr04vfH.js";import"./index-DsWUYnd2.js";import"./Option-SezZz24A.js";import"./index-DqXpBA3m.js";import"./SegmentedButton-B1ja-BgV.js";import"./index-XxV9_aNw.js";import"./Select-CyU6KfcW.js";import"./InvisibleMessage-DEubzVGS.js";import"./slim-arrow-down-D9grr6Uu.js";import"./index-SNU-XIU1.js";import"./index-lwm1gao-.js";import"./index-CNy7gkcO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-VA_uH9v7.js";import"./group-2-YpekFQLH.js";import"./sort-descending-DFI-P2gY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DQ6xEtJo.js";import"./utils-CH7XdL15.js";import"./index-DJxbqdeK.js";import"./index-Chl98GIc.js";import"./index-CWMloBdV.js";import"./navigation-down-arrow-BshNj7dt.js";import"./navigation-right-arrow-CyYVo4V2.js";import"./navigation-right-arrow-B-U5Q9E4.js";import"./useCurrentTheme-Bhk6HLgU.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Dayvn7j6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C53Cl9QB.js";import"./paper-plane-CnJUsrSx.js";import"./index-COarheIH.js";import"./less-CD0L_VR0.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
