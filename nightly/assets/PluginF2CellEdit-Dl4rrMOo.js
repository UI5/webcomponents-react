import{j as e}from"./iframe-BpIV0mIG.js";import{useMDXComponents as o}from"./index-R-0b2Q-0.js";import{I as l,F as r}from"./CommandsAndQueries-Cg1r-kOH.js";import{M as a,C as c}from"./blocks-DoVp3o8V.js";import"./Tag-PaDhhp3x.js";import"./index-ihq2izus.js";import"./copy-ByeAxUWO.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-B5Jh-DUM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-qBYywHNO.js";import"./index-CTTxG0ct.js";import"./index-CIjFLNbK.js";import"./Link-BYY56m65.js";import"./index-BED2olIo.js";import"./index-fu097dPl.js";import"./index-BLHX1u79.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DqFGSoTQ.js";import"./addCustomCSSWithScoping-B4Uic3jc.js";import"./index-DtbW9kAL.js";import"./information-CehFepv7.js";import"./sys-enter-2-D_Yhxrfh.js";import"./alert-Dc_mbBlI.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D2I-ZSY3.js";import"./delete-CsEea83P.js";import"./settings-BPkB95Pr.js";import"./NoData-BeGHl6Z_.js";import"./IllustratedMessage-DOyI0ZCV.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-8la9vE-n.js";import"./index-CwpdFEXU.js";import"./index-D_eQoiLu.js";import"./slim-arrow-down-Clv0qByx.js";import"./Input-CxCbVe7-.js";import"./ResponsivePopoverCommon.css-D2Obw4p0.js";import"./ValueStateMessage.css-DMpvlVEo.js";import"./Suggestions.css-DaCrsdkh.js";import"./ListBoxItemGroupTemplate-BWzZzAr7.js";import"./ComboBoxItemGroup-D6sYMIxD.js";import"./ListItemBaseTemplate-koeEWE6r.js";import"./Token-D8bP-ldU.js";import"./ScrollEnablement-C71FmZua.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cc_o9oaM.js";import"./ToggleButton-2rgNDr7d.js";import"./SuggestionItem-l3Pd-DGO.js";import"./index-BmJTPsAz.js";import"./Option-BMHYCgFj.js";import"./index-Bj0jkexU.js";import"./SegmentedButton-DEEjtarU.js";import"./index-Di2uBEgf.js";import"./Select-CtSXIsWd.js";import"./InvisibleMessage-CsmHimDL.js";import"./slim-arrow-down-1QdqWgX2.js";import"./index-D0rvSxtS.js";import"./index-DwvqlB2m.js";import"./index-Bs-Icwyw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DDsrk5Iv.js";import"./group-2-CUHYq2Ym.js";import"./sort-descending-C35hFge8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C8VSrFeR.js";import"./utils-DxABz-pG.js";import"./index-jEyBc5qw.js";import"./index-C_lKlUk7.js";import"./index-BJ6HlI_O.js";import"./navigation-down-arrow-B015Jf2F.js";import"./navigation-right-arrow-DmngP1AQ.js";import"./navigation-right-arrow-BHUDGKpX.js";import"./useCurrentTheme-BE_eD6jJ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DNIWpImI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-COaeyO-1.js";import"./paper-plane-DKcTwT40.js";import"./index-Bkq_sts_.js";import"./less-BRYhBxfc.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
