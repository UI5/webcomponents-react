import{j as e}from"./iframe-DVGWhCAE.js";import{useMDXComponents as o}from"./index-B9xkaSV0.js";import{I as l,F as r}from"./CommandsAndQueries-dho9FID6.js";import{M as a,C as c}from"./blocks-BJbIBXfd.js";import"./Tag-BSVrbtw1.js";import"./index-8G75QKe0.js";import"./copy-BlV96bJM.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CnZuDPXD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRrKr04f.js";import"./index-Q2-fVCzE.js";import"./index-BHsujjCW.js";import"./Link-Dgw-_ZOU.js";import"./index-Nk5G6RU7.js";import"./index-DGKs15kB.js";import"./index-NT87e1sK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DANVMAHb.js";import"./addCustomCSSWithScoping-5Jg_uRZD.js";import"./index-BJLS4IRc.js";import"./information-omXjQTPD.js";import"./sys-enter-2-C04ebACG.js";import"./alert-BHqxLN4g.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CFnPtJkv.js";import"./delete-DY6bdwXU.js";import"./settings-XslWUyya.js";import"./NoData-BUZ7abMj.js";import"./IllustratedMessage-B9_mT8nH.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DjDOG6yR.js";import"./index-8hC-ZwrJ.js";import"./index-BChoSltx.js";import"./slim-arrow-down-DeYpmmvX.js";import"./Input-DpyJgAt0.js";import"./ResponsivePopoverCommon.css-CePgJsY4.js";import"./ValueStateMessage.css-3BAQCChx.js";import"./Suggestions.css-BOKDeXtO.js";import"./ListBoxItemGroupTemplate-UD1IHiMI.js";import"./ComboBoxItemGroup-BpjYhnfH.js";import"./ListItemBaseTemplate-mkFVGvTh.js";import"./Token-C-dIs8ow.js";import"./ScrollEnablement-B1V-xmtX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DYsOVdkk.js";import"./ToggleButton-DtBu71V4.js";import"./SuggestionItem-35Bufm1r.js";import"./index-DlkYfY-D.js";import"./Option-12YZDcJD.js";import"./index-TKCi4qTc.js";import"./SegmentedButton-B7a2Ohdn.js";import"./index-Cloa_gEs.js";import"./Select-DbAXZ3Uf.js";import"./InvisibleMessage-D0fNoamP.js";import"./slim-arrow-down-DhfOJ1tg.js";import"./index-CAmvDfBQ.js";import"./index-CI4CkUvi.js";import"./index-C8msanHQ.js";import"./index-D2OD1CJk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BQHd5LOE.js";import"./group-2-CxeVZpJt.js";import"./sort-descending-6N_LscE5.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-64D78cvD.js";import"./utils-KP_8elyX.js";import"./index-BMkoMDMN.js";import"./index-BAbz02Gg.js";import"./index-B3L4E0qW.js";import"./navigation-down-arrow-HldHMJHt.js";import"./navigation-right-arrow-BAW-_M57.js";import"./navigation-right-arrow-RFBEU6p5.js";import"./useCurrentTheme-CamodcP9.js";import"./index-C-rI4uKO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BrbgBhCS.js";import"./paper-plane-EP68wguC.js";import"./index-KTYaWInB.js";import"./less-CBpVNcsL.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
