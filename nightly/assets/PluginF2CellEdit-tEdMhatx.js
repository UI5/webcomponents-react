import{j as e}from"./iframe-CXDBwaXf.js";import{useMDXComponents as o}from"./index-Dq-vd5Ev.js";import{I as l,F as r}from"./CommandsAndQueries-EFbMjjAa.js";import{M as a,C as c}from"./blocks-BAIBAw_h.js";import"./Tag-BGtFiUzo.js";import"./index-CdM50YVo.js";import"./copy-tKRdoNaC.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-D5wWkW-F.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CdFEqecu.js";import"./index-Dkyq4U7I.js";import"./index-CNRdJAzz.js";import"./Link-Cn9jKhUL.js";import"./index-Ekr32cnm.js";import"./index-BZ8xLssE.js";import"./index-C2VBEgX9.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BhiljY7Y.js";import"./addCustomCSSWithScoping-DOTw8Y7k.js";import"./index-74IMF4Fu.js";import"./information-BIroKfax.js";import"./sys-enter-2-a30AyDBZ.js";import"./alert-Bp9zzpf6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dr9tof3Q.js";import"./delete-BRjSytiH.js";import"./settings-DpX9wVto.js";import"./NoData-B9OjNVXe.js";import"./IllustratedMessage-C03S7hoW.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-Dto9QmBi.js";import"./index-C1hX-h2_.js";import"./index-C-8V3qWU.js";import"./slim-arrow-down-ziHFyrxY.js";import"./Input-D9M-oH0b.js";import"./ResponsivePopoverCommon.css-DzYVdD7o.js";import"./ValueStateMessage.css-DY78SEwL.js";import"./Suggestions.css-D9onRGXn.js";import"./ListBoxItemGroupTemplate-BApvrnZW.js";import"./ComboBoxItemGroup-DZ-S5_KR.js";import"./ListItemBaseTemplate-Jxaz0vER.js";import"./Token-gCiCxmW0.js";import"./ScrollEnablement-CPJHMdd5.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BcjimPYv.js";import"./ToggleButton-CIC6sJxV.js";import"./SuggestionItem-A-OV44pz.js";import"./index-Bmc90nAd.js";import"./Option-ChH-SgHF.js";import"./index-BtgHHz7L.js";import"./SegmentedButton-pcYoHon6.js";import"./index-BTA6DMIo.js";import"./Select-Brcl3j_5.js";import"./InvisibleMessage-DHYzFVaN.js";import"./slim-arrow-down-B9i1iNEL.js";import"./index-B8i-bBM2.js";import"./index-B3Pl9APG.js";import"./index-CeSJC3hT.js";import"./index-sCYpguPS.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CGg0p1p3.js";import"./group-2-Dmm7arx2.js";import"./sort-descending-BdhD77Zt.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CB-rwWQs.js";import"./utils-BQINLptF.js";import"./index-XK9DUlZ3.js";import"./index-BJ0Euif2.js";import"./index-CHqwEflI.js";import"./navigation-down-arrow-sU3YCq6s.js";import"./navigation-right-arrow-DuC2PC04.js";import"./navigation-right-arrow-CglzNXCr.js";import"./useCurrentTheme-nPjRikBt.js";import"./index-FYzg_PtZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-zoi03cJM.js";import"./paper-plane-DMagDmJq.js";import"./index-B5ACz2H-.js";import"./less-CUrM5DQy.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
