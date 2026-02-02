import{j as e}from"./iframe-0eQE2YFm.js";import{useMDXComponents as o}from"./index-CrzDrume.js";import{I as l,F as r}from"./CommandsAndQueries-vs4Uf2fG.js";import{M as a,C as c}from"./blocks-DA7tG1fG.js";import"./Tag-D9KB_OaV.js";import"./index-CO0N_mR_.js";import"./copy-BusSvtxV.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BFUnxggX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CAidMbCx.js";import"./index-nxBbAPWP.js";import"./index-DXkWzVKM.js";import"./Link-CbRTBueg.js";import"./index-CX4m4aKj.js";import"./index-DIoC19fn.js";import"./index-DCkfYqwc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CwbZNxPW.js";import"./addCustomCSSWithScoping-CEa4HZHN.js";import"./index-Cl7aYaAj.js";import"./information-DHaKlJ23.js";import"./sys-enter-2-CjOjN1qK.js";import"./alert-D98VDEUp.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DYg0i2eY.js";import"./delete-CoYQXplb.js";import"./settings-VZnwFT1a.js";import"./NoData-BQniyW5-.js";import"./IllustratedMessage-B0A1-0ks.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-teAEBMAS.js";import"./index-DB3CcisP.js";import"./index-D-LeeP8b.js";import"./slim-arrow-down-CkX7thXh.js";import"./Input-BaZHhr9A.js";import"./ResponsivePopoverCommon.css-B4yMTcW1.js";import"./ValueStateMessage.css-CDY6pP0f.js";import"./Suggestions.css-Dmp7acZ3.js";import"./ListBoxItemGroupTemplate-H0m4nnsY.js";import"./ComboBoxItemGroup-rbI26ojW.js";import"./ListItemBaseTemplate-CXUx-zU1.js";import"./Token-CIFLWQCf.js";import"./ScrollEnablement-BrxI8ufh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D9gf_cfX.js";import"./ToggleButton-CRw4HV0q.js";import"./SuggestionItem-CGZYm_I2.js";import"./index-DYuYdSg5.js";import"./Option-CJ-Q9Osb.js";import"./index-DbU22zDM.js";import"./SegmentedButton-C0dzqyrm.js";import"./index-BuNlLbX6.js";import"./Select-Dkvc-1du.js";import"./InvisibleMessage-BLfENYQH.js";import"./slim-arrow-down-BPzYFF0q.js";import"./index-CjCjG_de.js";import"./index-B6adVHqs.js";import"./index-CCMgeDTf.js";import"./index-YR2Vv4g_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BYqc3-cj.js";import"./group-2-LwVDXe1y.js";import"./sort-descending-DLo-C6x1.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DBbdY5LP.js";import"./utils-kn_XFzdZ.js";import"./index-BynfEZ9N.js";import"./index-IPEBGIZt.js";import"./index-Drp4RYe3.js";import"./navigation-down-arrow-BlUbHMqy.js";import"./navigation-right-arrow-BiBjVNSK.js";import"./navigation-right-arrow-BWLrQnKx.js";import"./useCurrentTheme-EU1exHdB.js";import"./index-CgfgYE9g.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bhd782rf.js";import"./paper-plane-DxvI1Ia-.js";import"./index-xSCZdNeR.js";import"./less-COfx4Qkm.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
