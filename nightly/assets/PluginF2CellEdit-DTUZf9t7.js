import{j as e}from"./iframe-CZUFstmy.js";import{useMDXComponents as o}from"./index-CNbwg358.js";import{I as r}from"./CommandsAndQueries-BhlCA6ZS.js";import{M as l,C as a}from"./blocks-DX4VSw2u.js";import"./Tag-CX2RPQC9.js";import"./index-Dh_fZ_AU.js";import"./copy-DtLjTz9V.js";import{F as c}from"./Footer-DYeNln-j.js";import"./PageNotFound-BJZaFG9t.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DylN3bUZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-htzAGpr-.js";import"./index-BTnDvpxF.js";import"./index-BpjPalsU.js";import"./index-DrW2JSp2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D2TR7fwJ.js";import"./addCustomCSSWithScoping-CYgyEKVM.js";import"./index-Q62qsF52.js";import"./index-gKv9WyUX.js";import"./index-6TF1-Ysc.js";import"./information-D6yKBjSF.js";import"./sys-enter-2-BfHAZzl4.js";import"./alert-CE2QesT5.js";import"./index-DQ321HEy.js";import"./Illustrations-BPYsG6-r.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-F0WSG7aT.js";import"./delete-dqJMeUOL.js";import"./settings-D3S74VcP.js";import"./NoData-Bcn1BipK.js";import"./NoFilterResults-6R3IW0n2.js";import"./index-nZLZA4-y.js";import"./IllustratedMessage-Cflf4SkZ.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Ca9d8mlW.js";import"./Input-fn8ljQGs.js";import"./ResponsivePopoverCommon.css-DPX2HjcJ.js";import"./ValueStateMessage.css-DWfde9O8.js";import"./Suggestions.css-BEQDSh_K.js";import"./ListBoxItemGroupTemplate-4gjtj37w.js";import"./ComboBoxItemGroup-yS-AI5SH.js";import"./ListItemBaseTemplate-tNf8OkU4.js";import"./Token-Be7rXUsE.js";import"./ScrollEnablement-Ba7PMo3V.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CK8F7PPv.js";import"./ToggleButton-Cy5byWvG.js";import"./multiselect-all-P9gt9VBE.js";import"./SuggestionItem-BcPflO39.js";import"./index-BlfqJAGh.js";import"./Option-CiB_yCao.js";import"./index-Vm-NXKu2.js";import"./SegmentedButton-DKORPTuZ.js";import"./index-B8K2zuZv.js";import"./Select-BGYRHDkz.js";import"./InvisibleMessage-OFemtJNl.js";import"./index-hmKZXkrM.js";import"./index-DekBuc62.js";import"./index-BMLONGhJ.js";import"./index-DR9jmOc9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ByLpSrqS.js";import"./group-2-Dx8X1MIo.js";import"./sort-descending-BMdso8Rk.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CZRh6aRn.js";import"./utils-_uQ8OeIL.js";import"./index-BM_cOc0e.js";import"./index-C3J1ZKMs.js";import"./index-BMT0hAro.js";import"./navigation-down-arrow-CuveMFus.js";import"./navigation-right-arrow-DnT0h_6w.js";import"./navigation-right-arrow-CrfinX2r.js";import"./useCurrentTheme-D-wHF_NM.js";import"./index-BlAkVjOD.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B6mPm6BW.js";import"./paper-plane-uG-YwDdB.js";import"./index-De3Wyk46.js";import"./less-CfQZGw0i.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
`,e.jsx(n.h1,{id:"analyticaltable-plugin-usef2celledit",children:"AnalyticalTable Plugin: useF2CellEdit"}),`
`,e.jsx(r,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
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
`,e.jsx(a,{of:s,sourceState:"none"}),`
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
`,e.jsx(c,{})]})}function Xe(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};
