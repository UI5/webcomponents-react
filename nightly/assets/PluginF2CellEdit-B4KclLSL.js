import{j as e}from"./iframe-B1ai2N1H.js";import{useMDXComponents as o}from"./index-QfN2DAp7.js";import{I as l,F as r}from"./CommandsAndQueries-DatNYL2t.js";import{M as a,C as c}from"./blocks-B9fqlxEZ.js";import"./Tag-EPgIaOhk.js";import"./index-BtwVlylG.js";import"./copy-BJY5YA9D.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BAh5Qb7e.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DIMi93Lv.js";import"./index-BqK1QrYY.js";import"./index-B8JztijY.js";import"./Link-DxXALuG4.js";import"./index-BD5BVNKc.js";import"./index-Dq21p-7K.js";import"./index-BL80uiBy.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C3b7w9-j.js";import"./addCustomCSSWithScoping-BigzftYf.js";import"./index-BZxParGj.js";import"./information-qjJpsO9c.js";import"./sys-enter-2-DLuIUMMQ.js";import"./alert-DxSQeXz_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Xy6kKlpD.js";import"./delete-CKMfo4Xk.js";import"./settings-CsC-4hiH.js";import"./NoData-BVmLwkSE.js";import"./IllustratedMessage-Nr6Didoc.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-4ep3HbjN.js";import"./index-DCqGCf08.js";import"./index-TntUiIag.js";import"./slim-arrow-down-DYHZJ5LG.js";import"./Input-CCHdc6OX.js";import"./ResponsivePopoverCommon.css-_wb5Prd4.js";import"./ValueStateMessage.css-QQOrZXwg.js";import"./Suggestions.css-ya0SvWRa.js";import"./ListBoxItemGroupTemplate-CC17eT-H.js";import"./ComboBoxItemGroup-BvdFX-vq.js";import"./ListItemBaseTemplate-GHiTWt4_.js";import"./Token-DWQMxVAt.js";import"./ScrollEnablement-CYJKPk5p.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-1Y3dmb5L.js";import"./ToggleButton-C38IUONv.js";import"./SuggestionItem-BbC6S69Q.js";import"./index-B2SJJBw5.js";import"./Option-CMzgQwF2.js";import"./index-DOw9MRWj.js";import"./SegmentedButton-DzQuajPs.js";import"./index-DxT3UJLK.js";import"./Select-CLe5Ufw3.js";import"./InvisibleMessage-B9fg8eZE.js";import"./slim-arrow-down-xtIJDA6K.js";import"./index-BKQwlKuo.js";import"./index-AEFVkwvL.js";import"./index-CIaszeCC.js";import"./index-CEbRZ6tf.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CO5NKowA.js";import"./group-2-DPXkxppB.js";import"./sort-descending-r_07bhB8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bs-IgX_t.js";import"./utils-COwwDed4.js";import"./index-sS2AOrHh.js";import"./index-D59qyDlq.js";import"./index-CyY2pIYt.js";import"./navigation-down-arrow-BVW_sj_7.js";import"./navigation-right-arrow-C1avA-LC.js";import"./navigation-right-arrow-H_C30T42.js";import"./useCurrentTheme-Ckxn_kwO.js";import"./index-DJ2gVxdV.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DlOSzz73.js";import"./paper-plane-C_dmmjbE.js";import"./index-C6bXNW4U.js";import"./less-DT3uITo0.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
