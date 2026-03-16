import{j as e}from"./iframe-CIERqdmv.js";import{useMDXComponents as o}from"./index-DuJS4dN9.js";import{I as r}from"./CommandsAndQueries-CnFEaRrZ.js";import{M as l,C as a}from"./blocks-CwsgKOP_.js";import"./Tag-0874imNl.js";import"./index-CMev4Q36.js";import"./copy-Dk2sduK9.js";import{F as c}from"./Footer-DeuiB6kc.js";import"./PageNotFound-C7dSWVQh.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DKVlHvWS.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B7T_f79Y.js";import"./index-Dub9x5-i.js";import"./index-DQGCwtV8.js";import"./index-C9od4SKd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DkSzocmg.js";import"./addCustomCSSWithScoping-B8m6lHZs.js";import"./index-BEXhXSTj.js";import"./index-CeFrwZtC.js";import"./index-DmgJDP0k.js";import"./information-90fB5V4h.js";import"./sys-enter-2-BkL_leH3.js";import"./alert-B9azflx9.js";import"./index-CJA8M3b4.js";import"./Illustrations-CMsXyloe.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DVTI43Ur.js";import"./delete-DS3AkE5n.js";import"./settings-CUozKHOg.js";import"./NoData-DR-S45IK.js";import"./NoFilterResults-BsHrvPun.js";import"./index-CFrarqVC.js";import"./IllustratedMessage-DgRlwHiL.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DpgFhjh1.js";import"./Input-BEziv0q_.js";import"./ResponsivePopoverCommon.css-BAyfAe_C.js";import"./ValueStateMessage.css-yAScMgnT.js";import"./Suggestions.css-aGpylhML.js";import"./ListBoxItemGroupTemplate-D6At1Qlv.js";import"./ComboBoxItemGroup-BOPZ01sA.js";import"./ListItemBaseTemplate-EsFxfCNV.js";import"./Token-5e6MV0bo.js";import"./ScrollEnablement-DGfUBP2Y.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-juxLC4N0.js";import"./ToggleButton-fSM9au_p.js";import"./multiselect-all-Dp7x2lXO.js";import"./SuggestionItem-BuU8W2FN.js";import"./index-DdmvzFYG.js";import"./Option-wGoV8nGP.js";import"./index-BWY8E_GB.js";import"./SegmentedButton-Bcf7ihNT.js";import"./index-DvKp6AoT.js";import"./Select-BLvJx2xD.js";import"./InvisibleMessage-CprUuJ-2.js";import"./index-D1QESHgx.js";import"./index-0nUQUElL.js";import"./index-C_lZ2DQU.js";import"./index-CP7c8g3L.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dax1sHJA.js";import"./group-2-DM-9Ml2s.js";import"./sort-descending-Dp80WCwu.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CqgLWTBh.js";import"./utils-CkYBlNbD.js";import"./index-DfKuTje3.js";import"./index-DI2AAvjl.js";import"./index-DZRTP0Ol.js";import"./navigation-down-arrow-DlMyh96r.js";import"./navigation-right-arrow-DZXBCa0X.js";import"./navigation-right-arrow-z1aD-Ww1.js";import"./useCurrentTheme-m6a_-5M8.js";import"./index-y1z-NlC1.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CMxRGrvK.js";import"./paper-plane-C5cHYIfV.js";import"./index-BXsMvzsh.js";import"./less-BWtd1z_C.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
