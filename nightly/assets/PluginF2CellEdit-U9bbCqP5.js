import{j as e}from"./iframe-BYgl1e3t.js";import{useMDXComponents as o}from"./index-CQiAxnj4.js";import{I as l,F as r}from"./CommandsAndQueries-C7-dfPl9.js";import{M as a,C as c}from"./blocks-DJ2faYOs.js";import"./Tag-WgH8NYoz.js";import"./index-CTjTm5cU.js";import"./copy-IUlUEvra.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-D1INNVPG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CoTJrZqp.js";import"./index-DOySy9e2.js";import"./index-BDYs8WoM.js";import"./Link-DcQGtcs6.js";import"./index-B_dT7zj1.js";import"./index-CgZTDeh6.js";import"./index-B7ISCohd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DoRR59AB.js";import"./addCustomCSSWithScoping-_jk3dAup.js";import"./index-6Qy6VRAh.js";import"./information-B-QMEMgn.js";import"./sys-enter-2-Bd_kwfmJ.js";import"./alert-zegR4G--.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B1SsSrBU.js";import"./delete-C5OnkOZe.js";import"./settings-B5ioReqo.js";import"./NoData-BiKwYAUE.js";import"./IllustratedMessage-DOGZ92R6.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-CGSn29D0.js";import"./index-Es7U-HC0.js";import"./index-CXvLuVUG.js";import"./slim-arrow-down-Dp2ciCQr.js";import"./Input-v1S2StmY.js";import"./ResponsivePopoverCommon.css-Dmb9XfkM.js";import"./ValueStateMessage.css-Y1GqQ7JE.js";import"./Suggestions.css-CUC1ZqxX.js";import"./ListBoxItemGroupTemplate-Dr-udWWW.js";import"./ComboBoxItemGroup-BqJbVdEf.js";import"./ListItemBaseTemplate-BWtuxBSD.js";import"./Token-BEPjAjq5.js";import"./ScrollEnablement-CMlQv5Ns.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DJEaviTe.js";import"./ToggleButton-D2vaCr4G.js";import"./SuggestionItem-DgwBMgIM.js";import"./index-081kxF9g.js";import"./Option-BFY-_C_3.js";import"./index-BCKaAXVJ.js";import"./SegmentedButton-DU2vMA6Y.js";import"./index-BOpxZokY.js";import"./Select-CKEJiYgR.js";import"./InvisibleMessage-zdr3PQOC.js";import"./slim-arrow-down-Ck49N193.js";import"./index-B6cxdJA0.js";import"./index-D3nZrnGX.js";import"./index-y0wRkLFD.js";import"./index-CH5XfXng.js";import"./IconDesign-DXd8PPVF.js";import"./filter-JNJ08E3e.js";import"./group-2-NOFZdPEz.js";import"./sort-descending-dB16txzl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CamwnZjH.js";import"./utils-vU-5DtFT.js";import"./index-DLZVurc2.js";import"./index-Ciih49Gh.js";import"./index-8TbROqqH.js";import"./navigation-down-arrow-By8vG3CK.js";import"./navigation-right-arrow-DTYTg7DL.js";import"./navigation-right-arrow-DjjDogmX.js";import"./useCurrentTheme-Cdnt_qcN.js";import"./index-BVTS8CP-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CWrTCVtk.js";import"./paper-plane-x6srakyu.js";import"./index-ClEI62f3.js";import"./less-DVoR9ng7.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
