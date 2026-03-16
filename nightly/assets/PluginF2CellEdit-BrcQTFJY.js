import{j as e}from"./iframe-CLRwe_KU.js";import{useMDXComponents as o}from"./index-zMDfw_hp.js";import{I as r}from"./CommandsAndQueries-Qa8JAgCb.js";import{M as l,C as a}from"./blocks-B36l4j9a.js";import"./Tag-DLCMnG64.js";import"./index-Di2mC61N.js";import"./copy-C_QN3LWn.js";import{F as c}from"./Footer-CY1WkGvT.js";import"./PageNotFound-Et84DOUJ.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CImvmFCc.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CQgjpXoE.js";import"./index-BFFCZnKZ.js";import"./index-CZmIgKIQ.js";import"./index-B905PbE4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B5LoBpt5.js";import"./addCustomCSSWithScoping-BmaQonB-.js";import"./index-DhQiji0Y.js";import"./index-9xLRD1c-.js";import"./index-rGV23ifs.js";import"./information-BHtbew5c.js";import"./sys-enter-2-CeQJ4tH7.js";import"./alert-DGiHprsp.js";import"./index-BqJblJml.js";import"./Illustrations-BsZAm-cT.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CjlTtlId.js";import"./delete-CzIaiG6f.js";import"./settings-DNWeAtuY.js";import"./NoData-y3OBi2YA.js";import"./NoFilterResults-DMybirIN.js";import"./index-e0pSm-iu.js";import"./IllustratedMessage-CfFP86At.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BFRB3vNn.js";import"./Input-CmThYNOy.js";import"./ResponsivePopoverCommon.css-BHdjseh5.js";import"./ValueStateMessage.css-CUkX0r6k.js";import"./Suggestions.css-DG50lbLq.js";import"./ListBoxItemGroupTemplate-RwrRGF0Y.js";import"./ComboBoxItemGroup-Bd5_N2YI.js";import"./ListItemBaseTemplate-D5tvkBEy.js";import"./Token-BfX6rrBK.js";import"./ScrollEnablement-Bh4ROjF7.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BeeWpw49.js";import"./ToggleButton-C0X3Nukc.js";import"./multiselect-all-DNY9iLOO.js";import"./SuggestionItem-CCS96mKL.js";import"./index-CNxxt-Ya.js";import"./Option-rvwi6Sh1.js";import"./index-BVppQ-lw.js";import"./SegmentedButton-CR_FICCj.js";import"./index-a2MjnGAR.js";import"./Select-BRr99ja4.js";import"./InvisibleMessage-D7m3pcV6.js";import"./index-BHYssSYC.js";import"./index-kcaVuine.js";import"./index-BU1oNBi0.js";import"./index-CWV1r8Rz.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Lon8PjAF.js";import"./group-2-BZgi4TVU.js";import"./sort-descending-QJbOskyY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D-5oCNyE.js";import"./utils-DGnkkiyK.js";import"./index-DML8dj0q.js";import"./index-lA_hjyPS.js";import"./index-FRr66Ky1.js";import"./navigation-down-arrow-jRSiZ6yO.js";import"./navigation-right-arrow-C-ZNhxUq.js";import"./navigation-right-arrow-BF4xw2D4.js";import"./useCurrentTheme-Cegr51cF.js";import"./index-C2Ec73XG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DPDPb-rh.js";import"./paper-plane-CfvaYcji.js";import"./index-DiSuVJLn.js";import"./less-DG4BSQsl.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
