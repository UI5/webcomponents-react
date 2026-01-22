import{j as e}from"./iframe-BBfeQq2L.js";import{useMDXComponents as o}from"./index-D1XkxxyM.js";import{I as l,F as r}from"./CommandsAndQueries-Buygq3eA.js";import{M as a,C as c}from"./blocks-CxdXAZue.js";import"./Tag-4fcKG2ic.js";import"./index-C57-wRZv.js";import"./copy-2iUWozfp.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BWy92f_G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B5Wcj6ld.js";import"./index-BY7hZSSK.js";import"./index-Dh6gCloB.js";import"./Link-DOA2fpa3.js";import"./index-ChSH85IQ.js";import"./index-CB8857Gd.js";import"./index-C4_hmu2m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CDXTaCTd.js";import"./addCustomCSSWithScoping-_H14R7FJ.js";import"./index-H1CGp5_C.js";import"./information-BnGyGqAy.js";import"./sys-enter-2-B5N_dLso.js";import"./alert-DOI_-LG9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Du-GvtWn.js";import"./delete-Bvqg6jRy.js";import"./settings-CoYY_8Uh.js";import"./NoData-Bx94Sh8i.js";import"./IllustratedMessage-D9IVoDdQ.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-CkIkTlkv.js";import"./index-DJJ3Mees.js";import"./index-BxeXPALZ.js";import"./slim-arrow-down-CZafjPQk.js";import"./Input-CXTPtpQ2.js";import"./ResponsivePopoverCommon.css-DWkfvrPv.js";import"./ValueStateMessage.css-tsSH4zXZ.js";import"./Suggestions.css-DDtKdDf5.js";import"./ListBoxItemGroupTemplate-BpOyUqn0.js";import"./ComboBoxItemGroup-CIzD3AVu.js";import"./ListItemBaseTemplate-TueecYK6.js";import"./Token-D2mMU1OG.js";import"./ScrollEnablement-abBNx1nX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DyAEHiEu.js";import"./ToggleButton-D1DyhgK8.js";import"./SuggestionItem-BSBNfTEA.js";import"./index-Dj7DMCO5.js";import"./Option-CxAkegRU.js";import"./index-CWaD9nCK.js";import"./SegmentedButton--qutgauv.js";import"./index-Br3gWTFO.js";import"./Select-sqbuPb4m.js";import"./InvisibleMessage-CbEE0DqC.js";import"./slim-arrow-down-CZnzPpuX.js";import"./index-BEyFh1jo.js";import"./index-WkSHIfIf.js";import"./index-CU_KTR9v.js";import"./index-BHxHZDh8.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D3ZbZrr0.js";import"./group-2-D8MWVKUe.js";import"./sort-descending-No_uql7a.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BPqEcmGG.js";import"./utils-CH402oqk.js";import"./index-e3s8xMkM.js";import"./index-DVRLVrIq.js";import"./index-C6Czb7vs.js";import"./navigation-down-arrow-DVtVCKgG.js";import"./navigation-right-arrow-BMpAHwE7.js";import"./navigation-right-arrow-BdeAmP2r.js";import"./useCurrentTheme-UAcQ55vR.js";import"./index-Cvb15Oog.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-T4YkLvpZ.js";import"./paper-plane-CuWPWZ2a.js";import"./index-BsfHMYWW.js";import"./less-Y04PrZ-G.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
