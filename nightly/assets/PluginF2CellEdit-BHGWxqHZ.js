import{j as e}from"./iframe-CEsx9pS5.js";import{useMDXComponents as o}from"./index-gmjnJOv_.js";import{I as r}from"./CommandsAndQueries-KRiBOwvQ.js";import{M as l,C as a}from"./blocks-8Wtp1Sju.js";import"./Tag-HQWMt5YG.js";import"./index-CTv8OR9t.js";import"./copy-BKv99Y3s.js";import{F as c}from"./Footer-BzqBC082.js";import"./PageNotFound-Dm-lShwt.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DCsN8t5K.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Op-ol6Yv.js";import"./index-LEy71z39.js";import"./index-C0Wj8jmE.js";import"./index-CNLVL7wa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-dF5rg7Pk.js";import"./addCustomCSSWithScoping-C93rkw8E.js";import"./index-C3LB4ZIk.js";import"./index-BUd2Yp1O.js";import"./index-CYl2KpDn.js";import"./information-BsgOGoHr.js";import"./sys-enter-2-QXPkX9VX.js";import"./alert-C6xGNNq6.js";import"./index-D0QmD1oJ.js";import"./Illustrations-B8Nne3o3.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-3jM9F0nS.js";import"./delete-DoaTIgC3.js";import"./settings-Bs-jHTmN.js";import"./NoData-DT708HZj.js";import"./NoFilterResults-DVvHy-ZN.js";import"./index-iiUTeecg.js";import"./IllustratedMessage-iOV8hNFv.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Cs69J_Tc.js";import"./Input-AKSpFtND.js";import"./ResponsivePopoverCommon.css-C3wjaSr6.js";import"./ValueStateMessage.css-CpYwQkVy.js";import"./Suggestions.css-BxYCrzla.js";import"./ListBoxItemGroupTemplate-BK_1e7Jd.js";import"./ComboBoxItemGroup-jFQBitjk.js";import"./ListItemBaseTemplate-DUd-IfCf.js";import"./Token-ClXNXVqt.js";import"./ScrollEnablement-BgQUKBhv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-COM3Y617.js";import"./ToggleButton-FTZXlhur.js";import"./multiselect-all-CFU46Wod.js";import"./SuggestionItem-BI3gNhRI.js";import"./index-BgUx6RnF.js";import"./Option-kRDMIGPk.js";import"./index-4d8vZKF5.js";import"./SegmentedButton-MdHLGjvd.js";import"./index-ZrD11qG8.js";import"./Select-CXP-jLKH.js";import"./InvisibleMessage-B3PoH58P.js";import"./index-Bdb_o1Y4.js";import"./index-DCEtf4WG.js";import"./index-ZvwKpapI.js";import"./index-BWmFDyId.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DgexCQUt.js";import"./group-2-Co1xUlm9.js";import"./sort-descending-B9xjh0QK.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BVUjzMgE.js";import"./utils-DzwVL_EM.js";import"./index-CzmVoBXe.js";import"./index-h2yx8uA3.js";import"./index-BCC9jZwA.js";import"./navigation-down-arrow-voDMe6Oa.js";import"./navigation-right-arrow-ByPMDe9M.js";import"./navigation-right-arrow-BtIFfnR5.js";import"./useCurrentTheme-vsaSH-Ug.js";import"./index-CIdADm8S.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dq-8_1ru.js";import"./paper-plane-BZoVtF7s.js";import"./index-C0ZNn2ww.js";import"./less-DZRRGc_Y.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
