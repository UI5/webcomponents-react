import{j as e}from"./iframe-BH1OFp8w.js";import{useMDXComponents as o}from"./index-clbF6OIG.js";import{I as r,F as l}from"./CommandsAndQueries-DhtC5bjI.js";import{M as a,C as c}from"./blocks-DYnbeidp.js";import"./Tag-21FIv1do.js";import"./index-4Vj58SYs.js";import"./copy-DLKkxH-i.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-bFb8I2oP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-85PSu2U7.js";import"./index-C1e9PFDr.js";import"./index-DWfP0uFj.js";import"./Link-CVh0krje.js";import"./index-DIrfyEUY.js";import"./index-D4MGenX5.js";import"./index-scCH-mdd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-vxfHPu95.js";import"./addCustomCSSWithScoping-CO8v9lg_.js";import"./index-Bi6BF3Uk.js";import"./information-IaTUuI6Q.js";import"./sys-enter-2-CEI4onME.js";import"./alert-BmWcWx5H.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CXrLIm28.js";import"./delete-BQOwqvtQ.js";import"./settings-CLTeFM-0.js";import"./NoData-BP_iQedv.js";import"./IllustratedMessage-BMqDKwh-.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-6H51KJbV.js";import"./index-rpiOj1sz.js";import"./slim-arrow-down-CzpD64FA.js";import"./Input-BSfjzvfl.js";import"./ResponsivePopoverCommon.css-DllK01Rq.js";import"./ValueStateMessage.css-BrYTvo9q.js";import"./Suggestions.css-CcMxM2i5.js";import"./ListBoxItemGroupTemplate-DPC15YRC.js";import"./ComboBoxItemGroup-CfJ5zYWu.js";import"./ListItemBaseTemplate-CCRCazqr.js";import"./Token-CZjiX32Z.js";import"./ScrollEnablement-CFyU8Uno.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DJmcQ_PK.js";import"./ToggleButton-BMXza2Jq.js";import"./SuggestionItem-DxWrHJGI.js";import"./index-zIfHFTcK.js";import"./Option-CukHBpnA.js";import"./index-D3scHIfq.js";import"./SegmentedButton-CqReU-2R.js";import"./index-B0M_ZK7f.js";import"./Select-DW8ta__u.js";import"./InvisibleMessage-DBYtbN9V.js";import"./slim-arrow-down-m7FIYFg0.js";import"./index-DTehykCe.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DpfHhzM9.js";import"./group-2-_-FJm1cs.js";import"./sort-descending-Dy8Q8QRn.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C5udeEHl.js";import"./utils-C9tRDhAa.js";import"./index-yk44xtLD.js";import"./index-n4NheVd0.js";import"./index-Bj3494xK.js";import"./navigation-down-arrow-L8ihvSR8.js";import"./navigation-right-arrow-B27p-tiy.js";import"./navigation-right-arrow-B9F4Om5K.js";import"./useCurrentTheme-CtmysqKg.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C-vusZiK.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BfFzk8Md.js";import"./paper-plane-D1WmgMA8.js";import"./index-CFSl9CuC.js";import"./less-BYrF-EPS.js";import"./index-BA3PbQUJ.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
`,e.jsx(l,{})]})}function Xe(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};
