import{j as e}from"./iframe-CTc_pUME.js";import{useMDXComponents as o}from"./index-CbFOQhGC.js";import{I as r,F as l}from"./CommandsAndQueries-BKl-Lehx.js";import{M as a,C as c}from"./blocks-Bdab0qOx.js";import"./Tag-BJVcJF8V.js";import"./index-BmIFgcgy.js";import"./copy-CX-UstQv.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-KHHhuFbE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Z8jBBqBa.js";import"./index-C61H3I4w.js";import"./index-cPYEFV1s.js";import"./Link-CIXpUy3N.js";import"./index-dZVrSoBW.js";import"./index-MjXDOENA.js";import"./index-CHi_LEvO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B7yiJaHj.js";import"./addCustomCSSWithScoping-Dc_j6Yzk.js";import"./index-6ELyezq3.js";import"./information-BUnhqMn4.js";import"./sys-enter-2-DOV5JEOM.js";import"./alert-DylNOMF0.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CIKwfdQg.js";import"./delete-kbtfU-Be.js";import"./settings-BLPPWMrz.js";import"./NoData-5paOsqOO.js";import"./IllustratedMessage-Ds6OazXP.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BcphOOS6.js";import"./index-Cz9iPqTS.js";import"./slim-arrow-down-C939bzhs.js";import"./Input-DwKwevQu.js";import"./ResponsivePopoverCommon.css-DVODeCs6.js";import"./ValueStateMessage.css-CEEhjmep.js";import"./Suggestions.css-D-Gi3AK0.js";import"./ListBoxItemGroupTemplate-DvohLQqN.js";import"./ComboBoxItemGroup-Dp8wVEki.js";import"./ListItemBaseTemplate-Flt8m4GL.js";import"./Token-B0g-cX5V.js";import"./ScrollEnablement-Dqoexmfr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C3YrrMZt.js";import"./ToggleButton-gg5kcSkt.js";import"./SuggestionItem-D0rTiphA.js";import"./index-Blj39MLR.js";import"./Option-CsGmFVxt.js";import"./index-DCTt8g0K.js";import"./SegmentedButton-BADV9MET.js";import"./index-CurbkiN8.js";import"./Select-5ZecXlmx.js";import"./InvisibleMessage-sw3UNfwB.js";import"./slim-arrow-down-B_qgXS-y.js";import"./index-CP2pU2KW.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BLV8HYZD.js";import"./group-2-CcIeK99E.js";import"./sort-descending-D80ou1nO.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BgNFH_bM.js";import"./utils-DAL9-AHg.js";import"./index-Brew3N2g.js";import"./index-9vQVNdmd.js";import"./index-6fpphJyg.js";import"./navigation-down-arrow-TIAFyztM.js";import"./navigation-right-arrow-BigkpvCQ.js";import"./navigation-right-arrow-B100tUdc.js";import"./useCurrentTheme-D2CPEB2n.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DLD--ZCq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BmQn44KR.js";import"./paper-plane-DZOaRTqB.js";import"./index-kRlvFPPJ.js";import"./less-Bbv1vYfG.js";import"./index-rhUIVPqF.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
