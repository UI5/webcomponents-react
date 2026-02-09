import{j as e}from"./iframe-Btp5V8Z0.js";import{useMDXComponents as o}from"./index-BiuvjkCM.js";import{I as l,F as r}from"./CommandsAndQueries-ytOuH94-.js";import{M as a,C as c}from"./blocks-3iq6MjE7.js";import"./Tag-BV9BFAPZ.js";import"./index-CP5vX4Iw.js";import"./copy-BjvlOXfT.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BnbIzEo_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-MTTfL1A6.js";import"./index-DfXM2ykx.js";import"./index-dzmgvIYj.js";import"./Link-DrqLISlX.js";import"./index-jYjWydQt.js";import"./index-4wRER8Ea.js";import"./index-cFxIHlDH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOasFR1W.js";import"./addCustomCSSWithScoping-BYe08cUl.js";import"./index-Byqgf8K2.js";import"./information-D6meyH0P.js";import"./sys-enter-2-DFu1S1AE.js";import"./alert-Ble7Zr5g.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DDRO25a3.js";import"./delete-DkVxgj5N.js";import"./settings-B8j3pPLA.js";import"./NoData-Du8GcV6i.js";import"./IllustratedMessage-BCiJ057a.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-D6qm1nzI.js";import"./index-BujEWK6T.js";import"./index-DYG2Vdb4.js";import"./slim-arrow-down-j9pUzMGy.js";import"./Input-aWxLYUOH.js";import"./ResponsivePopoverCommon.css-BQy8rUfs.js";import"./ValueStateMessage.css-LOPut24L.js";import"./Suggestions.css-CYbXagSM.js";import"./ListBoxItemGroupTemplate-CAvECdcE.js";import"./ComboBoxItemGroup-BqcdpAL3.js";import"./ListItemBaseTemplate--uvy-kc0.js";import"./Token-sB_rM26o.js";import"./ScrollEnablement-B1RfGkn3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DKFwa_4E.js";import"./ToggleButton-DKEo7U1V.js";import"./SuggestionItem-zI-P11G7.js";import"./index-ogcyTCWN.js";import"./Option-DXRWtWSV.js";import"./index-C9V8CTKB.js";import"./SegmentedButton-DYA5jfhl.js";import"./index-evKF2db_.js";import"./Select-CxUvCZuJ.js";import"./InvisibleMessage-BApXsmDb.js";import"./slim-arrow-down-DVukQiW-.js";import"./index-CmIpi4Rb.js";import"./index-Bp86dvN4.js";import"./index-Pmf_BpVu.js";import"./index-B5ZwNjp_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-l9YCafK6.js";import"./group-2-znhZwlOC.js";import"./sort-descending-BcNVNZRA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DZS5vz4t.js";import"./utils-KxVQ4L7v.js";import"./index-DDKkq_Id.js";import"./index-DR-CaoyZ.js";import"./index-BOghOFF-.js";import"./navigation-down-arrow-BVesL-Rd.js";import"./navigation-right-arrow-CoaCyhr_.js";import"./navigation-right-arrow-CG1gauat.js";import"./useCurrentTheme-B6Ee2Jvq.js";import"./index-Do2i3zOr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-H0EZaAzq.js";import"./paper-plane-DuZ0ORth.js";import"./index-XGPworLT.js";import"./less-Cbt4luUN.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
