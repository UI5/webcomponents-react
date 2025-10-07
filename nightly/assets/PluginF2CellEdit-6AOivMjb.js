import{j as e}from"./iframe-8PJ6_3g2.js";import{useMDXComponents as o}from"./index-C0ovl4HQ.js";import{I as l,F as r}from"./CommandsAndQueries-DwoVClSd.js";import{M as a,C as c}from"./blocks-BEb05MJo.js";import"./Tag-z4B_wt0s.js";import"./index-BcmoHwde.js";import"./copy-Bfeap7lu.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Nt8WbxtB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CYfjdXMS.js";import"./index-BDwyo_3E.js";import"./index-GTIQmPyl.js";import"./Link-BhglMJXJ.js";import"./index-DOdcY3p9.js";import"./index-BGjlJLGo.js";import"./index-BysWD4q1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DsI0QAy3.js";import"./addCustomCSSWithScoping-DJAGr2gu.js";import"./index-DwEBrLAz.js";import"./information-aKABhmx8.js";import"./sys-enter-2-BFUBKj9Z.js";import"./alert-yjyGEikw.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CRLZ9Z9y.js";import"./delete-DoVGGrww.js";import"./settings-DOwCGSp-.js";import"./NoData-DX8iFU04.js";import"./IllustratedMessage-DwvnKJ-a.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Cz59M25c.js";import"./index-BT7W3yfe.js";import"./index-BdN-aXSN.js";import"./slim-arrow-down-BTsCMmyB.js";import"./Input-09R7KXgd.js";import"./ResponsivePopoverCommon.css-CrTnDQN-.js";import"./ValueStateMessage.css-BM_qG5Qq.js";import"./Suggestions.css-B1t_kolg.js";import"./ListBoxItemGroupTemplate-DuVOq56T.js";import"./ComboBoxItemGroup-CbELEeBa.js";import"./ListItemBaseTemplate-BXf-MYE4.js";import"./Token-BMJQIKb4.js";import"./ScrollEnablement-CI1lcBXS.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BZruH8lY.js";import"./ToggleButton-rRY9LxWZ.js";import"./SuggestionItem-D37ZdZha.js";import"./index-DIJMSgqG.js";import"./Option--8nGv81u.js";import"./index-B4ZMJdMK.js";import"./SegmentedButton-Sdb6Hiel.js";import"./index-D8L7g3jK.js";import"./Select-CwKKVGbl.js";import"./InvisibleMessage-Ctaws7An.js";import"./slim-arrow-down-udpyDWvM.js";import"./index-Dz-9JHfm.js";import"./index-CSgO5UkG.js";import"./index-DmBbmPAO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BCjSLsv5.js";import"./group-2-gn0AftPK.js";import"./sort-descending-UnfrwN5g.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CBj28W3w.js";import"./utils-CQzE5s8Z.js";import"./index-CKJGxDyU.js";import"./index-EqUF1F3h.js";import"./index-BVu9BMf-.js";import"./navigation-down-arrow-DQ7nYyPJ.js";import"./navigation-right-arrow-BKJTL6fn.js";import"./navigation-right-arrow-CG0KPGIo.js";import"./useCurrentTheme-B8X2i-jd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-uz7ZZ6ou.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DxBvBx4N.js";import"./paper-plane-C7vPyTzF.js";import"./index-Pz9pP2GN.js";import"./less-B8XtBTQx.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
