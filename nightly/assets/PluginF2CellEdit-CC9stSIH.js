import{j as e}from"./iframe-Dx8AIwnl.js";import{useMDXComponents as o}from"./index-dcVclcbT.js";import{I as l,F as r}from"./CommandsAndQueries-DUfglqKp.js";import{M as a,C as c}from"./blocks-p2QhlYpp.js";import"./Tag-CzwecjZk.js";import"./index-CNQX-dlK.js";import"./copy-BI62_cw9.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-s17Movl1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bp4XYY8b.js";import"./index-BaN1UK0U.js";import"./index-BVmKbVfO.js";import"./Link-Br-d-ePU.js";import"./index-CPYahFg1.js";import"./index-DByobapb.js";import"./index-BwRqY3Cv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B0yp5HV-.js";import"./addCustomCSSWithScoping-Bxh4uOHa.js";import"./index-C0W6hmhl.js";import"./information-0cXHjBj8.js";import"./sys-enter-2-Gb3kXppf.js";import"./alert-aIxIGm79.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DLxqbR-j.js";import"./delete-C69cbyF3.js";import"./settings-BWzqlj0G.js";import"./NoData-D5fncAkO.js";import"./IllustratedMessage-BzTSJxO9.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-YgmQ2tQR.js";import"./index-Ci7qfekx.js";import"./index-DNsUAKiX.js";import"./slim-arrow-down-CyGdej7d.js";import"./Input-z0U91vlG.js";import"./ResponsivePopoverCommon.css-3lkFUcOY.js";import"./ValueStateMessage.css-DF0Hyzh1.js";import"./Suggestions.css-wt4aZj0f.js";import"./ListBoxItemGroupTemplate-Q-KeUcY6.js";import"./ComboBoxItemGroup-BSGTLThu.js";import"./ListItemBaseTemplate-DqtKzpsG.js";import"./Token-vLDA2-Jp.js";import"./ScrollEnablement-Bp2iL1fb.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-hNMIOZMd.js";import"./ToggleButton-7eyAjys6.js";import"./SuggestionItem-Qf_7uMPc.js";import"./index-7cA-ux1h.js";import"./Option-DZeZ5p_t.js";import"./index-B7ZIHFQx.js";import"./SegmentedButton-BmWRNH_m.js";import"./index-Dff-sv4X.js";import"./Select-DhzR4NaB.js";import"./InvisibleMessage-DisTLAk4.js";import"./slim-arrow-down-Dqq2dwC4.js";import"./index-DVvxtB8e.js";import"./index-DCksASwl.js";import"./index-OEGwklO3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cix59-jT.js";import"./group-2-Bhc8bd2M.js";import"./sort-descending-DgOmEU3h.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BHOGLY_P.js";import"./utils-DUcBANkt.js";import"./index-C3qN_Aew.js";import"./index-CBCSR7an.js";import"./index-CVsRwsda.js";import"./navigation-down-arrow-_9IZkA0g.js";import"./navigation-right-arrow-p28ybD6y.js";import"./navigation-right-arrow-Bm5goftX.js";import"./useCurrentTheme-f2z_yH-b.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DXZ8CjJT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-zeVN43iZ.js";import"./paper-plane-7o4eJ6hV.js";import"./index-BYRBgKjV.js";import"./less-hBB1SYwL.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
