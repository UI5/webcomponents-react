import{j as e}from"./iframe-BHL3KP3B.js";import{useMDXComponents as o}from"./index-CV9KcB1M.js";import{I as l,F as r}from"./CommandsAndQueries-D7saeET0.js";import{M as a,C as c}from"./blocks-CBYdh6wr.js";import"./Tag-RhCig6AF.js";import"./index-JS1GcHzF.js";import"./copy-Cx_IXaYw.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BrfvRfms.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BgzyxERN.js";import"./index-Dx-FLQII.js";import"./index-Dsg6DYtH.js";import"./Link-ea-shbEJ.js";import"./index-lfVzLD84.js";import"./index-Dbs5lixu.js";import"./index-DToQg2Hs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Co81iMbm.js";import"./addCustomCSSWithScoping-DQk-eQ1n.js";import"./index-JDEJOPjW.js";import"./information-DJM95Ys0.js";import"./sys-enter-2-XSR4RGqi.js";import"./alert-D5dcqe2K.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CojRdeJq.js";import"./delete-DQMuq08Z.js";import"./settings-DrCR5OyI.js";import"./NoData-AhmlI4en.js";import"./IllustratedMessage-DSSeRQPL.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-gLj6jJ_l.js";import"./index-CEQhLUHx.js";import"./index-Ccc7p32P.js";import"./slim-arrow-down-DJurD9QK.js";import"./Input-BbifX6GM.js";import"./ResponsivePopoverCommon.css-qV0tN2P6.js";import"./ValueStateMessage.css-BeeYtMkq.js";import"./Suggestions.css-DRhiS2Sl.js";import"./ListBoxItemGroupTemplate-Csghie_Z.js";import"./ComboBoxItemGroup-CNXniF9s.js";import"./ListItemBaseTemplate-CXls01q_.js";import"./Token-Bt8xyw-t.js";import"./ScrollEnablement-CuhBmX-D.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CWGtaCZo.js";import"./ToggleButton-G063PX5t.js";import"./SuggestionItem-BdZmVO4W.js";import"./index-DvuvrS2e.js";import"./Option-Bj-jZedt.js";import"./index-BDmA0N-r.js";import"./SegmentedButton-tZwV5m8H.js";import"./index-DFD0Bxod.js";import"./Select-B47H5g2r.js";import"./InvisibleMessage-C_y6XL_X.js";import"./slim-arrow-down-6hMlGarM.js";import"./index-CnHmjf1H.js";import"./index-BxtwwsD_.js";import"./index-BF8LBvPs.js";import"./index-Dvhp9tec.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DLs9MXxX.js";import"./group-2-C9nYhH-K.js";import"./sort-descending-B_h7sVML.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cf8R0xRs.js";import"./utils-DvyWIthn.js";import"./index-BvVS_2DG.js";import"./index-Bnk6-Kur.js";import"./index-BGVW-O6b.js";import"./navigation-down-arrow-B5ni_-5b.js";import"./navigation-right-arrow-D9N8Vo-q.js";import"./navigation-right-arrow-fl9ibqyt.js";import"./useCurrentTheme-B4bYUvCO.js";import"./index-DD7xwy8l.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CbHzpQG_.js";import"./paper-plane-C9J4P2OV.js";import"./index-D6_mBUAF.js";import"./less-BlsOk5YZ.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
