import{j as e}from"./iframe-Cv4sgl-6.js";import{useMDXComponents as o}from"./index-CBIpMKi2.js";import{I as l,F as r}from"./CommandsAndQueries-DF8E8wiu.js";import{M as a,C as c}from"./blocks-DPiPd9tl.js";import"./Tag-BCHKI4FR.js";import"./index-DcbEzSTS.js";import"./copy-Bby_UTo9.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-INQp-hT_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BbeCayQT.js";import"./index-CtOMiTIA.js";import"./index-CeG26Jn9.js";import"./Link-BXe55YD0.js";import"./index-AkExkdLb.js";import"./index-CP4yHlqi.js";import"./index-C5UblPZZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CEw8P-vI.js";import"./addCustomCSSWithScoping-ChLo0vcI.js";import"./index-BdK0aYpg.js";import"./information-D12ZJp7Z.js";import"./sys-enter-2-B0uzD6GZ.js";import"./alert-BQ9eRDhW.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C2ITYkkp.js";import"./delete-DQtRiTSG.js";import"./settings-Dk0A1K4B.js";import"./NoData-BOAn2TmF.js";import"./IllustratedMessage-BAzjlPuO.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DADu6Yhz.js";import"./index-CAs4bF1N.js";import"./index-rA2Tcjvx.js";import"./slim-arrow-down-Bf6Fui7_.js";import"./Input-xGZQJYeP.js";import"./ResponsivePopoverCommon.css-Cw4xn9Xp.js";import"./ValueStateMessage.css-DE-funzq.js";import"./Suggestions.css-C80GUOWK.js";import"./ListBoxItemGroupTemplate-CQWOTPZ7.js";import"./ComboBoxItemGroup-BLdB-iSO.js";import"./ListItemBaseTemplate--vPa8nag.js";import"./Token-CwYpSxuy.js";import"./ScrollEnablement-v-_rsCFF.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CTpk5hQL.js";import"./ToggleButton-B-VaW9fv.js";import"./SuggestionItem-C0Y5SJOc.js";import"./index-C5Q4zcFL.js";import"./Option-CSv6aS-H.js";import"./index-mZlz45Id.js";import"./SegmentedButton-pcsF7Uy5.js";import"./index-Drcf0CjP.js";import"./Select-ChvSMp55.js";import"./InvisibleMessage-BiO2cmNz.js";import"./slim-arrow-down-DDixet6I.js";import"./index-fR1ydeI4.js";import"./index-t4ibtP2x.js";import"./index-Frn2CwUI.js";import"./index-C00ZbNBs.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CMHUA17f.js";import"./group-2-DKFJVXPV.js";import"./sort-descending-BZ_eceG8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CONmEwPQ.js";import"./utils-ClsJZxE7.js";import"./index-CKCMkb7R.js";import"./index-DF3mQroB.js";import"./index-rBbRsWS-.js";import"./navigation-down-arrow-rnyvA5q9.js";import"./navigation-right-arrow-Cg2lGj65.js";import"./navigation-right-arrow-DfDNI7Vj.js";import"./useCurrentTheme-Dq6DmLkr.js";import"./index-D6CCWCEn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-mQ6_8rLF.js";import"./paper-plane-Dda63Mdm.js";import"./index-DYNvOxul.js";import"./less-mQVhCLsg.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
