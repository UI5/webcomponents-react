import{j as e}from"./iframe-CLqwDYWN.js";import{useMDXComponents as o}from"./index-cmVK5yXJ.js";import{I as l,F as r}from"./CommandsAndQueries-DltB0UQf.js";import{M as a,C as c}from"./blocks-Ua2ef061.js";import"./Tag-D4gpwYXq.js";import"./index-BLABW-V6.js";import"./copy-BFTyEUOW.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-hZOyNi4-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BAe0MMci.js";import"./index-dDRjuikd.js";import"./index-DbDqFPhM.js";import"./Link-CWlOLLsT.js";import"./index-Em70_hTG.js";import"./index-CZj6k55a.js";import"./index-Ddq0Vtwc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Clukjtst.js";import"./addCustomCSSWithScoping-CDaW4Lcf.js";import"./index-BkxNRgLP.js";import"./information-yMtkqf_-.js";import"./sys-enter-2-DLul5qw8.js";import"./alert-BH_ko6Mf.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DYcEpgcd.js";import"./delete-AfqY1m-P.js";import"./settings-DbFb6seN.js";import"./NoData-Cht9VzEL.js";import"./IllustratedMessage-CDCtcvSa.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-BMtskUoL.js";import"./index-Bg1HDO25.js";import"./index-CJ4By0nc.js";import"./slim-arrow-down-C22iVcoT.js";import"./Input-DXVKLo07.js";import"./ResponsivePopoverCommon.css-wZUp9iaM.js";import"./ValueStateMessage.css-D4s1Xohy.js";import"./Suggestions.css-DBdM4e2n.js";import"./ListBoxItemGroupTemplate-P6s8PqVr.js";import"./ComboBoxItemGroup-kZhQKBRF.js";import"./ListItemBaseTemplate-DOFjZ7UC.js";import"./Token-oKWILUju.js";import"./ScrollEnablement-BX1GdvuZ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B_pITSM2.js";import"./ToggleButton-CZWRO_uA.js";import"./SuggestionItem-CyojvZx5.js";import"./index-DwSivuZ5.js";import"./Option-BC429w4c.js";import"./index-DkRMg_n1.js";import"./SegmentedButton-DVrshPel.js";import"./index-DSXAZtDg.js";import"./Select-BR_Ti_op.js";import"./InvisibleMessage-DRB-gK4Q.js";import"./slim-arrow-down-BIHU5bm6.js";import"./index-CWDxWYIq.js";import"./index-BE3ugTFz.js";import"./index-BXY3diBI.js";import"./index-DiK104TW.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DCPxxjXq.js";import"./group-2-BJfUB2fk.js";import"./sort-descending-B2qNBOis.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BMP6kCoe.js";import"./utils-RGutoP-Y.js";import"./index-BJqt4hz8.js";import"./index-CF_2Gmzg.js";import"./index-CxjQeiDR.js";import"./navigation-down-arrow-DeQyn301.js";import"./navigation-right-arrow-Dei2x-FV.js";import"./navigation-right-arrow-Dtl4aa4d.js";import"./useCurrentTheme-DFPeZZlw.js";import"./index-oS5lCLsv.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BnOr2gHb.js";import"./paper-plane-C4dG94mO.js";import"./index-DFRNsF2S.js";import"./less-DCuw3qxw.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
