import{j as e}from"./iframe-DDMtxVo3.js";import{useMDXComponents as o}from"./index-DJVQNbCr.js";import{I as l,F as r}from"./CommandsAndQueries-GL7iyaCL.js";import{M as a,C as c}from"./blocks-CloLtOA5.js";import"./Tag-YMrSkp2O.js";import"./index-DsF6G_NH.js";import"./copy-BTGdlJRd.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BN0Ao-_m.js";import"./preload-helper-PPVm8Dsz.js";import"./index-rp8XBFdR.js";import"./index-BHqqB-9b.js";import"./index-ayjT0mLt.js";import"./Link-D3MGth0a.js";import"./index-BbSpKNs2.js";import"./index-DIh6sAKH.js";import"./index-BeupWmR_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-IIlbXN7B.js";import"./addCustomCSSWithScoping-CwVVs2bm.js";import"./index-DtIsK-ZK.js";import"./information-CyNj2j11.js";import"./sys-enter-2-Go-dkBfP.js";import"./alert-jQ4OjDPb.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BF0Of00g.js";import"./delete-Is_zNJTb.js";import"./settings-DLZSygz9.js";import"./NoData-D2SWaRbW.js";import"./IllustratedMessage-Y2lySBW0.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-eecdh7SK.js";import"./index-n5WxUc-1.js";import"./index-CyCKI4kh.js";import"./slim-arrow-down-B9fX2pE_.js";import"./Input-DldSM5Dd.js";import"./ResponsivePopoverCommon.css-r6Yy0Fkp.js";import"./ValueStateMessage.css-CBQfZKeo.js";import"./Suggestions.css-Ce_nnZbO.js";import"./ListBoxItemGroupTemplate-jkoaDovc.js";import"./ComboBoxItemGroup-DEv9jHmD.js";import"./ListItemBaseTemplate-D5kLl8tB.js";import"./Token-CpnDDN9x.js";import"./ScrollEnablement-CHq8jwQp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CvaRS6qD.js";import"./ToggleButton-B8VJwrvR.js";import"./SuggestionItem-CkiJy6SK.js";import"./index-vS3KmlTg.js";import"./Option-Bmii2PEM.js";import"./index-cYHXc0IN.js";import"./SegmentedButton-Bch0JHMn.js";import"./index-Ce_ybWMS.js";import"./Select-nmxyrizQ.js";import"./InvisibleMessage-CxUh_0D_.js";import"./slim-arrow-down-C-tgvolj.js";import"./index-Dih0csuE.js";import"./index-C98BWsva.js";import"./index-DkqGVu91.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DDA1WG-X.js";import"./group-2-CrgQgZu8.js";import"./sort-descending-VzaHQEUN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bk6vRLMI.js";import"./utils-cWgc0sgc.js";import"./index-D-dIkc7q.js";import"./index-WTvN1xUf.js";import"./index-Boa8xecP.js";import"./navigation-down-arrow-DhowEsmp.js";import"./navigation-right-arrow-rputrWNy.js";import"./navigation-right-arrow-BdCl3OJM.js";import"./useCurrentTheme-Cvsq9vBh.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CEfFIx_c.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DfGZzaea.js";import"./paper-plane-D2Eg3sKl.js";import"./index-DJj1SKu0.js";import"./less-DAJEncVK.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
