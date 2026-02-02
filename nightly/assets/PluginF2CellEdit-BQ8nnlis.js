import{j as e}from"./iframe-DW8uOQp0.js";import{useMDXComponents as o}from"./index-DjfSR8mu.js";import{I as l,F as r}from"./CommandsAndQueries-CfxeF-Et.js";import{M as a,C as c}from"./blocks-B-FDorPY.js";import"./Tag-DZD94rKb.js";import"./index-B6OSuhq3.js";import"./copy-BPjUZJw9.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Cjfv9lZ_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-wMLjz3fG.js";import"./index-BIXJrD8M.js";import"./index-DHspvyEH.js";import"./Link-DBMfTmkv.js";import"./index-DCmHXknG.js";import"./index-B1HFxIWl.js";import"./index-BlVT_NLP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BqxCMWvb.js";import"./addCustomCSSWithScoping-InFg9UZ2.js";import"./index-BettgKsC.js";import"./information-Dh4y9R_M.js";import"./sys-enter-2-DblypcwG.js";import"./alert-CwT2Bhtr.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Ccy1h0ZZ.js";import"./delete-CAh52cIa.js";import"./settings-Bq4r6lp7.js";import"./NoData-Wb2Eh2l8.js";import"./IllustratedMessage-59yIC32s.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BanPL-9P.js";import"./index-BM97U_Id.js";import"./index-95RptXAb.js";import"./slim-arrow-down-DUDQ1G7d.js";import"./Input-BtplTNuz.js";import"./ResponsivePopoverCommon.css-BwZTAXmn.js";import"./ValueStateMessage.css-2teNoYXT.js";import"./Suggestions.css-GVLxyP7E.js";import"./ListBoxItemGroupTemplate-xi9Dai9-.js";import"./ComboBoxItemGroup-CYvZfMur.js";import"./ListItemBaseTemplate-jJed8ANY.js";import"./Token-CXlJ8X_s.js";import"./ScrollEnablement-BuIEarCH.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BakyJ71F.js";import"./ToggleButton-Dmg-mtR4.js";import"./SuggestionItem-JYWpCC6O.js";import"./index-O4brpd7h.js";import"./Option-lTsEHPaz.js";import"./index-DM3wbu2J.js";import"./SegmentedButton-dnl0_LO7.js";import"./index-BW8wCqLg.js";import"./Select-B-GQjth7.js";import"./InvisibleMessage-BCjehSQX.js";import"./slim-arrow-down-Nj2WlNU_.js";import"./index-DA7mVkNb.js";import"./index-CUWHnjz1.js";import"./index-2WqQUSOe.js";import"./index-7R16Plue.js";import"./IconDesign-DXd8PPVF.js";import"./filter-xApDoQhv.js";import"./group-2-D9KCRiYo.js";import"./sort-descending-sPt6c51s.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BS_N9hv6.js";import"./utils-DCPEwa5n.js";import"./index-CX98XYz1.js";import"./index-Ci1baq6U.js";import"./index-BKui1p5j.js";import"./navigation-down-arrow-kptVdaed.js";import"./navigation-right-arrow-CDK-kpp0.js";import"./navigation-right-arrow-BRtJ_VL9.js";import"./useCurrentTheme-CXTKA9u6.js";import"./index-D4VjyumX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL--X6IcLkp.js";import"./paper-plane-a-F37SE4.js";import"./index-CSdQr0-4.js";import"./less-C3jyfe8r.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
