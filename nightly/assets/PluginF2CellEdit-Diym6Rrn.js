import{j as e}from"./iframe-BiMlSvB5.js";import{useMDXComponents as o}from"./index-zjeO5ftS.js";import{I as l,F as r}from"./CommandsAndQueries-Ihy_vY5j.js";import{M as a,C as c}from"./blocks-JfRoz7Bu.js";import"./Tag-DcGxJxNj.js";import"./index-DdnnKwEp.js";import"./copy-CpLwtFwa.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CrJDfv5d.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DJoGcUHO.js";import"./index-CjwASx83.js";import"./index-COwkRR6t.js";import"./Link-hDp19ErW.js";import"./index-BN_7wmc1.js";import"./index-BTBLl-af.js";import"./index-CvgLLP4J.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-g_QfzUS9.js";import"./addCustomCSSWithScoping-Dxx39OMa.js";import"./index-CJR1a3iJ.js";import"./information-B40Y1iPW.js";import"./sys-enter-2-CkPUHPx-.js";import"./alert-BwKvOFsR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-lkroZnbL.js";import"./delete-FMGJKKZJ.js";import"./settings-C3vBunPl.js";import"./NoData-BDVuJ86f.js";import"./IllustratedMessage-CdkkLDXG.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CyCSkyGX.js";import"./index-CzIuiFxY.js";import"./index-uzhwBdxV.js";import"./slim-arrow-down-DhQmyJSw.js";import"./Input-5MKIWbcv.js";import"./ResponsivePopoverCommon.css-Gn55K0IR.js";import"./ValueStateMessage.css-C63o8ajt.js";import"./Suggestions.css-bWFEPpLk.js";import"./ListBoxItemGroupTemplate-P2pMYzMz.js";import"./ComboBoxItemGroup-DGvjryay.js";import"./ListItemBaseTemplate-DFyALYeN.js";import"./Token-DP7V52GY.js";import"./ScrollEnablement-DKyX1hlv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CteCbUEH.js";import"./ToggleButton-CnxXmbLH.js";import"./SuggestionItem-BdwWLvfq.js";import"./index-CyQT3WP0.js";import"./Option-C9Uo7sgL.js";import"./index-D_l_aaej.js";import"./SegmentedButton-CmS3epsf.js";import"./index-TyCpnseE.js";import"./Select-DV8FGlWC.js";import"./InvisibleMessage-CdGbv0CP.js";import"./slim-arrow-down-CVQHENDk.js";import"./index-B-Yh5T4c.js";import"./index-CIW_ic5S.js";import"./index-GmFx-3lk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BS_XAjEs.js";import"./group-2-BQ8I3Xw3.js";import"./sort-descending-Dn3aviOX.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-_j2qh61z.js";import"./utils-CE3pjW5h.js";import"./index-BgWRU9Z5.js";import"./index-CjF_Wh_0.js";import"./index-C0ceKoHV.js";import"./navigation-down-arrow-m9enBW2g.js";import"./navigation-right-arrow-C4IxskPN.js";import"./navigation-right-arrow-CeFlz50Q.js";import"./useCurrentTheme-CdJ3Wj-s.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D9Agz_AG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B8WBSrx9.js";import"./paper-plane-CJosRD6f.js";import"./index-BonsQVcP.js";import"./less-lHySVG5z.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
