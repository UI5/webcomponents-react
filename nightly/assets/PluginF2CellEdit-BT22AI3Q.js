import{j as e}from"./iframe-DD7p555z.js";import{useMDXComponents as o}from"./index-DKhj08U7.js";import{I as l,F as r}from"./CommandsAndQueries-CKwguJVF.js";import{M as a,C as c}from"./blocks-BAWH2K4k.js";import"./Tag-YiwRoJC6.js";import"./index-iP_JBMT4.js";import"./copy-BvS2jijZ.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-C5pOz0ZJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dl6MCkfr.js";import"./index-DNGDxbjZ.js";import"./index-CjiVltgT.js";import"./Link-CERJMGdw.js";import"./index-4YigTS5a.js";import"./index-D_31Usqf.js";import"./index-k0OzfFck.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-buNhKImf.js";import"./addCustomCSSWithScoping-rp5A8jrF.js";import"./index-Dnnz-gOR.js";import"./information-C853I-0E.js";import"./sys-enter-2-DMe79a_K.js";import"./alert-Dl3EzObX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bny1qvAq.js";import"./delete-BtGPjnXV.js";import"./settings-BhzLKQVu.js";import"./NoData-_2lOlioJ.js";import"./IllustratedMessage-Db4dYMTY.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-C3tYIcQs.js";import"./index-B_lzyoDe.js";import"./index-DYHzkt2a.js";import"./slim-arrow-down-ORtmHOmj.js";import"./Input-Ei-pBwN-.js";import"./ResponsivePopoverCommon.css-B_lrtiGe.js";import"./ValueStateMessage.css-BYebuE_v.js";import"./Suggestions.css--XkU6wI1.js";import"./ListBoxItemGroupTemplate-BA8CQI5_.js";import"./ComboBoxItemGroup-amfpDGl-.js";import"./ListItemBaseTemplate-BhLhD8bb.js";import"./Token-CT7ftEMU.js";import"./ScrollEnablement-DFuXjWdf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CoZosRcD.js";import"./ToggleButton-DY3Om3L7.js";import"./SuggestionItem-K95onNiN.js";import"./index-kHhCuAsg.js";import"./Option-CnNxmnPy.js";import"./index-62qOKVOB.js";import"./SegmentedButton-DFPoBTLB.js";import"./index-BBg6UU0Y.js";import"./Select-BQbmMxfV.js";import"./InvisibleMessage-CBGNW5FA.js";import"./slim-arrow-down-Bwk9f88K.js";import"./index-BzdnDtMC.js";import"./index-Cio2hU6W.js";import"./index-DAJ5VVgK.js";import"./index-KjntBnT6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DH5ZMpfp.js";import"./group-2-Y-L0oUMk.js";import"./sort-descending-YsDgqG23.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DHyUerlm.js";import"./utils-Bfnw6Lvc.js";import"./index-CPJBiYbU.js";import"./index-hyvu0X_I.js";import"./index-BtsWC2q8.js";import"./navigation-down-arrow-B6X7QWDX.js";import"./navigation-right-arrow-BJP2JOaP.js";import"./navigation-right-arrow-DgwpS7dp.js";import"./useCurrentTheme-DUXYJBGz.js";import"./index-CxpEwIF3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-O-Qg-Ti_.js";import"./paper-plane-g37kvv4L.js";import"./index-Dwp_loUQ.js";import"./less-BN_J84Q7.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
