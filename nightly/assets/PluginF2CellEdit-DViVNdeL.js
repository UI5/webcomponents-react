import{j as e}from"./iframe-D_OBvCft.js";import{useMDXComponents as o}from"./index-B_S0g7ME.js";import{I as l,F as r}from"./CommandsAndQueries-BZ-3zH0-.js";import{M as a,C as c}from"./blocks-DYLPI3Ra.js";import"./Tag-DR4TT7Tz.js";import"./index-DHlu5N_c.js";import"./copy-DQgNVeWA.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-zK04HXJH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BKEI8mWg.js";import"./index-S0He3U_1.js";import"./index-CTJhmHbW.js";import"./Link-ubTR8kdT.js";import"./index-CgmBhunw.js";import"./index-CT9F8jkM.js";import"./index-BxzyntYh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CYQDt8WV.js";import"./addCustomCSSWithScoping-DGwiZ6Qr.js";import"./index-Dss8LBVA.js";import"./information-PDp2XxR-.js";import"./sys-enter-2-CTjcKc0d.js";import"./alert-BulXizwQ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BqurhSOy.js";import"./delete-Ctn0kSBL.js";import"./settings-z7-rjv9j.js";import"./NoData-C5ntZU5O.js";import"./IllustratedMessage-id6nb7wX.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-BKoG-d3a.js";import"./index-B_K9wBMY.js";import"./index-DP-FcseT.js";import"./slim-arrow-down-CHulNvxE.js";import"./Input-i8SqafG1.js";import"./ResponsivePopoverCommon.css-0qhZ8h5z.js";import"./ValueStateMessage.css-LMTZLgJb.js";import"./Suggestions.css-C2T_AAKW.js";import"./ListBoxItemGroupTemplate-CcplzrLE.js";import"./ComboBoxItemGroup-3PYa3s30.js";import"./ListItemBaseTemplate-BHxGfkuD.js";import"./Token-a1Z2dlMc.js";import"./ScrollEnablement-BPZ45FDB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B_4_wWWa.js";import"./ToggleButton-BqO_3v_4.js";import"./SuggestionItem-CG8vQS4D.js";import"./index--Gn4VUxm.js";import"./Option-D0b-vRt9.js";import"./index-cCJWZwrT.js";import"./SegmentedButton-Dhi24GCC.js";import"./index-BR4X8nJj.js";import"./Select-BLV-PVqf.js";import"./InvisibleMessage-C_0GSe_o.js";import"./slim-arrow-down-CAFzZJk4.js";import"./index-Dk3pumqB.js";import"./index-xeY4HnPc.js";import"./index-CAb0cCCw.js";import"./index-DtrCS052.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BdUi0j8b.js";import"./group-2-B-T-Csy_.js";import"./sort-descending-DEst_JzS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DMORGjeP.js";import"./utils-GHixDqEj.js";import"./index-BYrxTP19.js";import"./index-CqnoKVS3.js";import"./index-BqnBaVKU.js";import"./navigation-down-arrow-DTEGx91w.js";import"./navigation-right-arrow-D2dYA2Ao.js";import"./navigation-right-arrow-cH8Y4Elf.js";import"./useCurrentTheme-CxGXlk1H.js";import"./index-Clf9WQAr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C-113p4z.js";import"./paper-plane-78D-pvJG.js";import"./index-xk-p1hJ3.js";import"./less-oocybHBg.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
