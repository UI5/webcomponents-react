import{j as e}from"./iframe-DZSv2zZb.js";import{useMDXComponents as o}from"./index-BqdSmNlq.js";import{I as l,F as r}from"./CommandsAndQueries-CZUib4pD.js";import{M as a,C as c}from"./blocks-BSnZQBrX.js";import"./Tag-BEM_u6FU.js";import"./index-BBEh2DsQ.js";import"./copy-23w1fGpY.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-C4VBB38l.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C2hiyRQA.js";import"./index-CCnKvqA0.js";import"./index-DrF5gpEw.js";import"./Link-CCplhiXF.js";import"./index-EGktcBQb.js";import"./index-DRWzqH2N.js";import"./index-CYgXuNom.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Z5sB9nBC.js";import"./addCustomCSSWithScoping-DXOZ95so.js";import"./index-lD82309j.js";import"./information-COD7Swxj.js";import"./sys-enter-2-CFC1gFhb.js";import"./alert-CTmlBOXX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-1sxQtFsG.js";import"./delete-DI6RV7tq.js";import"./settings-l6CcnnHP.js";import"./NoData-DLhCBRaq.js";import"./IllustratedMessage-D8pCRgjf.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BDEpL-v7.js";import"./index-CLQJqlCs.js";import"./index-CnzAFXhm.js";import"./slim-arrow-down-CyuMg1At.js";import"./Input-DNMPeMSb.js";import"./ResponsivePopoverCommon.css-KtD9lY_C.js";import"./ValueStateMessage.css-s-LD16Ms.js";import"./Suggestions.css-rNWcSnI_.js";import"./ListBoxItemGroupTemplate-DCfYj4zl.js";import"./ComboBoxItemGroup-BKdcP3-8.js";import"./ListItemBaseTemplate-BxdUV-4d.js";import"./Token-C-7Kub3Q.js";import"./ScrollEnablement-B-_jXnOO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BumMf1lq.js";import"./ToggleButton-zAP43mrP.js";import"./SuggestionItem-C071nU1p.js";import"./index-CyyzdwPX.js";import"./Option-CFccuGHw.js";import"./index-DTcOlFUA.js";import"./SegmentedButton-DFozwT5-.js";import"./index-BK-Z6osY.js";import"./Select-DTXWeNTs.js";import"./InvisibleMessage-DQakaRnz.js";import"./slim-arrow-down-D7c7A5lb.js";import"./index-BzE-wgMg.js";import"./index-EA0cjcxp.js";import"./index-BvFjW66u.js";import"./index-Dqc9eXJK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BdNFGMUl.js";import"./group-2-Cdsp5Lj1.js";import"./sort-descending-CYgNNlsg.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B3f_41XS.js";import"./utils-7Hi63yvZ.js";import"./index-DbLzE552.js";import"./index-CLU12hYv.js";import"./index-CIpEOGpc.js";import"./navigation-down-arrow-CEqrsa8y.js";import"./navigation-right-arrow-D-lQ_y8p.js";import"./navigation-right-arrow-DseGevTb.js";import"./useCurrentTheme-DF-c7hmf.js";import"./index-DciiPa4I.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BzVE9glM.js";import"./paper-plane-BHeSZ19x.js";import"./index-DPhTd4XE.js";import"./less-D29QdeXg.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
