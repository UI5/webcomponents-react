import{j as e}from"./iframe-l0Gg6LLs.js";import{useMDXComponents as o}from"./index-Cae9Voso.js";import{I as l,F as r}from"./CommandsAndQueries-Clw2dQJN.js";import{M as a,C as c}from"./blocks-C2P3yVo4.js";import"./Tag-CjLUfCmJ.js";import"./index-DCqXNXQw.js";import"./copy-B13EJS-v.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-ls20Jl9_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-FAekmb_7.js";import"./index-I7Wz355y.js";import"./index-C2QpZOLo.js";import"./Link-BXQMs19K.js";import"./index-CihYjerb.js";import"./index-lxp-HdMJ.js";import"./index-hvU57qSB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DhC4Vn3X.js";import"./addCustomCSSWithScoping-DDpmsdIj.js";import"./index-Bwbvp4Wo.js";import"./information-BcS3rXju.js";import"./sys-enter-2-BSmamrdx.js";import"./alert-B368tBUy.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dc7jR-KD.js";import"./delete-CYGBhC6b.js";import"./settings-BfR_EbIn.js";import"./NoData-BJEIeC_Z.js";import"./IllustratedMessage-UAYFerO5.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-I-0GEqqm.js";import"./index-DjiXt-x0.js";import"./index-55nh7KaD.js";import"./slim-arrow-down-ZtlK-zaq.js";import"./Input-0cqUaW6-.js";import"./ResponsivePopoverCommon.css-DGJU_sLh.js";import"./ValueStateMessage.css-DCpV9L59.js";import"./Suggestions.css-BIrO0gc4.js";import"./ListBoxItemGroupTemplate-oKbzZNII.js";import"./ComboBoxItemGroup-Bci5GWY6.js";import"./ListItemBaseTemplate-BzqS2Fl5.js";import"./Token-DbjQuNPp.js";import"./ScrollEnablement-CuGe7Q3J.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-1yh_JDGs.js";import"./ToggleButton-BvTjNdfc.js";import"./SuggestionItem-gIvgc1mY.js";import"./index-CBicJKGb.js";import"./Option-MqiGXaOA.js";import"./index-CLXzz8MM.js";import"./SegmentedButton-BnAh5N-e.js";import"./index-B9BehsdP.js";import"./Select-D1jaw_ad.js";import"./InvisibleMessage-DkkMM-lY.js";import"./slim-arrow-down-mLEC8bQM.js";import"./index-wmdfvP4Q.js";import"./index-Cfof4SU3.js";import"./index-CXYWUxgw.js";import"./index-Cad5KvVd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DwZ3A5h1.js";import"./group-2-j3759jZ3.js";import"./sort-descending-BxAlrwUx.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CHHNw0uv.js";import"./utils-egnNt3B-.js";import"./index-DPc2cZ4_.js";import"./index-CzPfd54r.js";import"./index-fo8z4Qvq.js";import"./navigation-down-arrow-Bp3L9AX_.js";import"./navigation-right-arrow-DgSJmfeF.js";import"./navigation-right-arrow-DHp8bcl8.js";import"./useCurrentTheme-B_bh5PZa.js";import"./index-DrAUXulF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CdRMpk74.js";import"./paper-plane-Db0yyKlT.js";import"./index-crTpvm9q.js";import"./less-_a0dbQtg.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
