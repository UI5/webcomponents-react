import{j as e}from"./iframe-CmEyKRpD.js";import{useMDXComponents as o}from"./index-BFnFrbBZ.js";import{I as l,F as r}from"./CommandsAndQueries-D0beJAEb.js";import{M as a,C as c}from"./blocks-DsGvGcEm.js";import"./Tag-mVH7vrSv.js";import"./index-DfQFYAIc.js";import"./copy-BKqOupip.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BSx5T4bO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BzwroZCy.js";import"./index-Cd1X9zdd.js";import"./index-CSRfU7vi.js";import"./Link-D1koUNpv.js";import"./index-BlD9QPif.js";import"./index-DbVfD_Wp.js";import"./index-dQ_ejieb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-eGz8eTqY.js";import"./addCustomCSSWithScoping-DZlJgGLS.js";import"./index-DEFXD6K8.js";import"./information-Dw0vaUoh.js";import"./sys-enter-2-BCiCiomL.js";import"./alert-ClWdEWiH.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DbUs2q01.js";import"./delete-DexdWHOY.js";import"./settings-dxNIuobx.js";import"./NoData-DHeZKmI-.js";import"./IllustratedMessage-DIvmjW9o.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-c_u-lq4s.js";import"./index-BEdraa6m.js";import"./index-Cw5hOkPV.js";import"./slim-arrow-down-CMqb9FrJ.js";import"./Input-DMTE7PtB.js";import"./ResponsivePopoverCommon.css-B_kZ82Sf.js";import"./ValueStateMessage.css-COIj3-dB.js";import"./Suggestions.css-CwH8bkW-.js";import"./ListBoxItemGroupTemplate-CchY9zri.js";import"./ComboBoxItemGroup-DimkAvqf.js";import"./ListItemBaseTemplate-Bf84ufvG.js";import"./Token-fKVOhfRR.js";import"./ScrollEnablement-Dl5z94x_.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BYXnPIWK.js";import"./ToggleButton-vu-v_zb-.js";import"./SuggestionItem-kn7KkTa3.js";import"./index-DPbvCSic.js";import"./Option-u5uukDin.js";import"./index-C8R_luuu.js";import"./SegmentedButton-DfxDwv4I.js";import"./index-DNR34NeK.js";import"./Select-CYW5D9dk.js";import"./InvisibleMessage-M1dcHXit.js";import"./slim-arrow-down-BpHB4IY-.js";import"./index-C7nbRL6c.js";import"./index-DPUGy-pI.js";import"./index-3FRmO7q0.js";import"./index-DAcFrEXC.js";import"./IconDesign-DXd8PPVF.js";import"./filter-0df1VpJF.js";import"./group-2-CKdKXQLe.js";import"./sort-descending-BbZ-eh8i.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B3OH53ZN.js";import"./utils-D3SQYmnk.js";import"./index-Yr1YxSHs.js";import"./index-B8bHJfxT.js";import"./index-BrVac6Qe.js";import"./navigation-down-arrow-DtKKxhJy.js";import"./navigation-right-arrow-CFkOAqoT.js";import"./navigation-right-arrow-DjfApRUX.js";import"./useCurrentTheme-Drz3YU3H.js";import"./index-ClmEnud9.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-wTt9rp2-.js";import"./paper-plane-CjzWL9e1.js";import"./index-C6sQNauJ.js";import"./less-CDzfA6tR.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
