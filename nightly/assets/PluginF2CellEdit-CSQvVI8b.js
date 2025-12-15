import{j as e}from"./iframe-BVsLYlhe.js";import{useMDXComponents as o}from"./index-DavU5a3Y.js";import{I as l,F as r}from"./CommandsAndQueries-Bi9b4xK_.js";import{M as a,C as c}from"./blocks-BwdcnqOn.js";import"./Tag-CNJ-l2ra.js";import"./index-Chy_S0qP.js";import"./copy-hvSX-Foh.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DCSA0DE3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BBlqkBew.js";import"./index-CppXcbvf.js";import"./index-CQv5SAoi.js";import"./Link-mimmL_0g.js";import"./index-pqTqdxQB.js";import"./index-bVRMu9zO.js";import"./index-2NXGICNv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dhuu23v1.js";import"./addCustomCSSWithScoping-CKzpaFfQ.js";import"./index-BZsG0oyU.js";import"./information-Q1gDT6BU.js";import"./sys-enter-2-CVfnD9eL.js";import"./alert-BQuV4PvU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Be_omCvA.js";import"./delete-wM7iGzUT.js";import"./settings-DUTgYsHz.js";import"./NoData-BP3lBXbm.js";import"./IllustratedMessage-DOGBzg3t.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-Dg1Tep4f.js";import"./index-C1WMOxlR.js";import"./index-CVk9SmTz.js";import"./slim-arrow-down-DhCWTPrz.js";import"./Input-B1h80Qke.js";import"./ResponsivePopoverCommon.css-uHz60RXl.js";import"./ValueStateMessage.css-BGnf7WuL.js";import"./Suggestions.css-BC296_76.js";import"./ListBoxItemGroupTemplate-C4BIIOjO.js";import"./ComboBoxItemGroup-CL94Ym8W.js";import"./ListItemBaseTemplate-DTp4ZwAc.js";import"./Token-D0KaAyb8.js";import"./ScrollEnablement-OBzjrUFw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-MnW36ayG.js";import"./ToggleButton-CfDtgg4F.js";import"./SuggestionItem-B4pYo2Xh.js";import"./index-DtvHgBUt.js";import"./Option-BmneA1aN.js";import"./index-MoN8cciG.js";import"./SegmentedButton-CZ9H8jJT.js";import"./index-CPMcUc-n.js";import"./Select-B9O7SbWK.js";import"./InvisibleMessage-COd6vRv-.js";import"./slim-arrow-down-CyFYuexk.js";import"./index-ytFospDP.js";import"./index-MqiJoXt5.js";import"./index-CeMerd7K.js";import"./index-BSHqwN58.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CpwTCgMq.js";import"./group-2-BQbBlrd5.js";import"./sort-descending-ABbRNgKt.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DHnVQWJI.js";import"./utils-DKALz9nY.js";import"./index-c_PF86vB.js";import"./index-BG1NckKa.js";import"./index-JsVdJQMp.js";import"./navigation-down-arrow-BBbnWEl3.js";import"./navigation-right-arrow-Dv-Qzlpb.js";import"./navigation-right-arrow-DLSHU6Nw.js";import"./useCurrentTheme-DSoyNXre.js";import"./index-Cufgt29f.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DzejkbSx.js";import"./paper-plane-CXb4AHwo.js";import"./index-DZtB4CEv.js";import"./less-8xYh8vLI.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
