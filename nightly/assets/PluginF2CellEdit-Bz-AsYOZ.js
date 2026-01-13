import{j as e}from"./iframe-DjyPEesV.js";import{useMDXComponents as o}from"./index-Pyz_59sj.js";import{I as l,F as r}from"./CommandsAndQueries-CflBmGXr.js";import{M as a,C as c}from"./blocks-BJpyRAuR.js";import"./Tag-BDoCQY53.js";import"./index-R19sOJmE.js";import"./copy-E37vjZto.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-5g3jIKu6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ctou3RkN.js";import"./index-D4GABIF8.js";import"./index-JsLIkweC.js";import"./Link-nHS21YG4.js";import"./index-DIAyR9_V.js";import"./index-BBJM4hPn.js";import"./index-u05KfZkG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BW1MFNTm.js";import"./addCustomCSSWithScoping-fFr9nqx3.js";import"./index-CGGAhfVP.js";import"./information-DUvIlTxn.js";import"./sys-enter-2-BNMMIV_0.js";import"./alert-BdGD6eLJ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-PtrV3Mx2.js";import"./delete-DZYRig-7.js";import"./settings-DC1EpgcZ.js";import"./NoData-DdiSsGzY.js";import"./IllustratedMessage-CKlnOgb7.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-U4i8XfCe.js";import"./index-CNsBuXgW.js";import"./index-DY2Rai9n.js";import"./slim-arrow-down-CaFw53zN.js";import"./Input-BZdy6LBO.js";import"./ResponsivePopoverCommon.css-DXeOzHMx.js";import"./ValueStateMessage.css-BmKDb-GX.js";import"./Suggestions.css-C5GlUmJa.js";import"./ListBoxItemGroupTemplate-B_X2fUlx.js";import"./ComboBoxItemGroup-BfNx4b9Y.js";import"./ListItemBaseTemplate-CGBpHG4N.js";import"./Token-CERKwtWD.js";import"./ScrollEnablement-80w6Waas.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CqBB8H1C.js";import"./ToggleButton-sq5iQT6D.js";import"./SuggestionItem-BjJ5fzBJ.js";import"./index-DKn-wdwl.js";import"./Option-BQ6ou2d_.js";import"./index-D4m9Bgxm.js";import"./SegmentedButton-D2TYrx6h.js";import"./index-DPf5ZEwJ.js";import"./Select-CwPYCNeP.js";import"./InvisibleMessage-BV-YL2wk.js";import"./slim-arrow-down-CxX1-7RK.js";import"./index--b5YbzYZ.js";import"./index-BUOYq7SN.js";import"./index-CrmY2ZO8.js";import"./index-Bgg2l2DV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ClODWfE8.js";import"./group-2-DPcrYzkY.js";import"./sort-descending-CTRvyWvg.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-VEN8hAU2.js";import"./utils-D-4bFYd0.js";import"./index-DuTvknKW.js";import"./index-BCddFEwR.js";import"./index-Kss5k088.js";import"./navigation-down-arrow--9pMM64P.js";import"./navigation-right-arrow-B4wTEztn.js";import"./navigation-right-arrow-DNYuNDO1.js";import"./useCurrentTheme-BSBgMXT1.js";import"./index-lcNTjYV-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-_YfBcCD_.js";import"./paper-plane-CUdav5bq.js";import"./index-7fWe1uut.js";import"./less-B9Odq6DG.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
