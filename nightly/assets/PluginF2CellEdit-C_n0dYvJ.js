import{j as e}from"./iframe-CH-Q08Pv.js";import{useMDXComponents as o}from"./index-JegEFivd.js";import{I as r}from"./CommandsAndQueries-Dlnf61eM.js";import{M as l,C as a}from"./blocks-DoFVSa5q.js";import"./Tag-C3CTuin_.js";import"./index-_SHIyctb.js";import"./copy-BJgUS9X2.js";import{F as c}from"./Footer-Cg75ltPq.js";import"./PageNotFound-BZ_kgysZ.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DzyMuTxi.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BR4DnOSS.js";import"./index-DTltU74W.js";import"./index-DZ9Ckgsr.js";import"./index-BLeRJ1tU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYciNjaj.js";import"./addCustomCSSWithScoping-D4FzfPo7.js";import"./index-BIHxokcD.js";import"./index-nLMQvitA.js";import"./index-ByjlU9SJ.js";import"./information-DMZ4xbkz.js";import"./sys-enter-2-Cl66mT1N.js";import"./alert-BQx8EBHB.js";import"./index-CiSOiezA.js";import"./Illustrations-DAJG5DXY.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-LiTd2ZkW.js";import"./delete-vdzKKBmV.js";import"./settings--DDZpuL8.js";import"./NoData-TCBac7YU.js";import"./NoFilterResults-B3hOZ6oG.js";import"./index-CvHyOWlh.js";import"./IllustratedMessage-B04gsQS3.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CfSfO62w.js";import"./Input-DZGNZFMo.js";import"./ResponsivePopoverCommon.css-OnbBnNDn.js";import"./ValueStateMessage.css-qBo68dDY.js";import"./Suggestions.css-36Zlw39T.js";import"./ListBoxItemGroupTemplate-DyAZxjIB.js";import"./ComboBoxItemGroup-C63t9shF.js";import"./ListItemBaseTemplate-B29kwNxf.js";import"./Token-soz4pdus.js";import"./ScrollEnablement-DLVPowNZ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CuB6Oo--.js";import"./ToggleButton-DH6mKo-3.js";import"./multiselect-all-DIzH_Hk6.js";import"./SuggestionItem-Dl3jHrkd.js";import"./index-CIELwkqh.js";import"./Option-D29MaorT.js";import"./index-DZKWJZME.js";import"./SegmentedButton-8BN62iuX.js";import"./index-ByoHBp1X.js";import"./Select-hgDES0e0.js";import"./InvisibleMessage-B4ZA0kt1.js";import"./index-DaUsDwqK.js";import"./index-CM5OjaUQ.js";import"./index-B3oxdAYp.js";import"./index-BmFCipXX.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BJdwb7Qq.js";import"./group-2-rmw-5_bM.js";import"./sort-descending-Cu_tgfiW.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DMTuLZOk.js";import"./utils-ClbH9utX.js";import"./index-BRxQsxgX.js";import"./index-DDzMGmJZ.js";import"./index-C49P15Ym.js";import"./navigation-down-arrow-Cg13Qxbd.js";import"./navigation-right-arrow-B2SMAGBd.js";import"./navigation-right-arrow-DuWEFp8z.js";import"./useCurrentTheme-BYLoQCcm.js";import"./index-vyUcFgUm.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-O1z4-Zn4.js";import"./paper-plane-C6QryPVC.js";import"./index-BmIER3z7.js";import"./less-BrJUhvMx.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
