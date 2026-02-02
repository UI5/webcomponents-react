import{j as e}from"./iframe-D9fHiNXF.js";import{useMDXComponents as o}from"./index-DRx499Oz.js";import{I as l,F as r}from"./CommandsAndQueries-CDyFXIce.js";import{M as a,C as c}from"./blocks-BHC48FnS.js";import"./Tag-D1pdGQFQ.js";import"./index-CsAQ2Eng.js";import"./copy-FG9bHXhV.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Qm_vQfsf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CJoLxfl_.js";import"./index-BYfLRpIA.js";import"./index-79vX-IjV.js";import"./Link-UWQK2ZBb.js";import"./index-D9W7JLGJ.js";import"./index-C7nfqaAP.js";import"./index-DN7QVpUQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOEmcw1X.js";import"./addCustomCSSWithScoping-QhFRL0Bb.js";import"./index-BVc7ik8a.js";import"./information-wNu5DDkV.js";import"./sys-enter-2-NNUjaus9.js";import"./alert-DnsJPzcv.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BPAjTpyE.js";import"./delete-kRoeeufp.js";import"./settings-BjOnEk3Y.js";import"./NoData-DS929yuO.js";import"./IllustratedMessage-D7rcrpEV.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-By9GXzdr.js";import"./index-BIpQKVrj.js";import"./index-uvfEns-9.js";import"./slim-arrow-down-COoxlr3U.js";import"./Input-CCJrpN8k.js";import"./ResponsivePopoverCommon.css-B2qfRnNF.js";import"./ValueStateMessage.css-DyMGuFCu.js";import"./Suggestions.css-s007qcu9.js";import"./ListBoxItemGroupTemplate-fS2c8S8u.js";import"./ComboBoxItemGroup-w20Oyw65.js";import"./ListItemBaseTemplate-BhNv4eWh.js";import"./Token-CvyNfotg.js";import"./ScrollEnablement-COS0Rc-8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BBXUErcD.js";import"./ToggleButton-CVAyR1od.js";import"./SuggestionItem-BbBOeYnY.js";import"./index-BvApMHkq.js";import"./Option-55orDd_d.js";import"./index-D-dRLaQQ.js";import"./SegmentedButton-Dtg_OeYG.js";import"./index-Cw3jzX1x.js";import"./Select-CF4_xxsY.js";import"./InvisibleMessage-sWP7KXqk.js";import"./slim-arrow-down-CGx4RFlV.js";import"./index-Bnwbq-C5.js";import"./index-56WZLY9b.js";import"./index-BrYCVZew.js";import"./index-C-gG0abr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DTaVzY2z.js";import"./group-2-ByHTkrwd.js";import"./sort-descending-CnESAHVK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DK0_Jxfh.js";import"./utils-4XJByc2K.js";import"./index-Mf30Azwl.js";import"./index-DWP_RQMm.js";import"./index-PLRKK6I8.js";import"./navigation-down-arrow-UUvc_8Lg.js";import"./navigation-right-arrow-Uxxzktt1.js";import"./navigation-right-arrow-bK8_sR2Z.js";import"./useCurrentTheme-DlC_INVQ.js";import"./index-uBbepzyZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ByZPFV9T.js";import"./paper-plane-oz9CuSrg.js";import"./index-Bxyp0YjT.js";import"./less-QRjFxrUk.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
