import{j as o}from"./iframe-DoasxszC.js";import{u as x,M as j,C as p,a as b,D as n}from"./blocks-DBX_G92C.js";import{A as i}from"./ArgTypesWithNote-C6YZamB9.js";import{C as u}from"./ControlsWithNote-B6cTbFDY.js";import{D as v}from"./DocsHeader-BFtvyrC2.js";import{F as T}from"./Footer-BMRkHXkr.js";import"./CommandsAndQueries-Bg5oLjv_.js";import"./PageNotFound-DlCPYtCu.js";import{S as g}from"./SubcomponentsSection-BVy4lpQe.js";import{C as r,D as s,W as w,O,T as a,a as l,b as m,c,d}from"./Toolbar.stories-h_8bWeNF.js";import{T as h}from"./index-EO6bJZyu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bkq6_nAR.js";import"./information-C1mBwnJc.js";import"./sys-enter-2-D2TESZyh.js";import"./alert-CWEkUWZv.js";import"./Tag-DCvAsOsB.js";import"./index-DUsiHM8W.js";import"./index-CY9OUOeY.js";import"./Link-CvHgBQZc.js";import"./copy-DxyiXEXB.js";import"./copy-Bp1X0rrX.js";import"./GitHub-Mark-B2tTDOGy.js";import"./TableOfContent-BL-dDNDX.js";import"./index-BuSM4uik.js";import"./index-C3bV2_l1.js";import"./index-Dl7LQ4u1.js";import"./index-BxFkVED5.js";import"./index-UQi-W-Cc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CwB0h3WK.js";import"./addCustomCSSWithScoping-D15HIh5y.js";import"./Illustrations-B4E_SvFf.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-D8ci1hZC.js";import"./index-C-kHmLkB.js";import"./InvisibleMessage-CpFdH-Af.js";import"./Input-xqXXZk7V.js";import"./ResponsivePopoverCommon.css-ClOyFMHE.js";import"./ValueStateMessage.css-CQfpuydp.js";import"./Suggestions.css-DgSzBLOP.js";import"./SuggestionItem-BUm69vbz.js";import"./ListItemBaseTemplate-56RYrvsT.js";import"./ComboBoxItemGroup-C6J1oEbB.js";import"./ListBoxItemGroupTemplate-CnyFVUQh.js";import"./index-D2iLmq8b.js";import"./DatePicker-DcKor0Ba.js";import"./query-CzSBusdE.js";import"./Calendar-CeKngJi7.js";import"./Gregorian-BNLS09gM.js";import"./FormatUtils-CQoypt7J.js";import"./slim-arrow-left-BIWg94tb.js";import"./appointment-2-BrW3Wqv7.js";import"./DateTimeInput-QgAemoiV.js";import"./index-BLz5gwPO.js";import"./index-B7aSEDJ1.js";import"./Token-Cy2nK-8H.js";import"./ScrollEnablement-Ct30bxH4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-f5cQaHwh.js";import"./ToggleButton-4lEDIg8i.js";import"./multiselect-all-CrwvgfDL.js";import"./index-FgjrccCt.js";import"./index-KS5Bmaht.js";import"./less-CflKdUlr.js";import"./ToolbarSpacer-CAuDerMw.js";import"./ToolbarButton-BH6m9Rk0.js";import"./overflow-D9tdpA1J.js";import"./Select-DyTpHhQN.js";import"./Option-qr-0CuEo.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...x(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(j,{of:r}),`
`,o.jsx(v,{of:r,since:"1.19.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(p,{of:s}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(u,{of:s}),`
`,o.jsx(e.h2,{id:"toolbaritem",children:"ToolbarItem"}),`
`,o.jsx(e.p,{children:"ToolbarItem wrapper used to add any component to Toolbar."}),`
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Note:"})," To display the radio buttons and checkboxes in a column in the overflow popover, the ",o.jsx(e.code,{children:"toolbar-item-group"})," CSS class is used:"]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-css",children:`/* Use :state(overflowed) to style items differently when in overflow popover */
[ui5-toolbar-item]:state(overflowed) .toolbar-item-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
`})}),`
`,o.jsx(p,{of:w}),`
`,o.jsx(e.h2,{id:"opening-popovers-via-toolbarbutton",children:"Opening Popovers via ToolbarButton"}),`
`,o.jsxs(e.p,{children:["Since the ",o.jsx(e.code,{children:"ToolbarButton"})," is an ",o.jsx(e.a,{href:"?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components",children:"abstract UI5 web component"}),", the opener of the ",o.jsx(e.code,{children:"Popover"}),` needs the DOM reference of the actual element to position the popover correctly.
Starting with v2.5.0 of `,o.jsx(e.code,{children:"@ui5/webcomponents(-react)"}),", the ",o.jsx(e.code,{children:"detail"})," property of the ",o.jsx(e.code,{children:"ToolbarButton"}),"'s click handler now includes a ",o.jsx(e.code,{children:"targetRef"})," property, which can be used as the opener."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Note:"})," To prevent the overflow popover from closing when the opener ",o.jsx(e.code,{children:"ToolbarButton"})," of the Popover is clicked, you can call ",o.jsx(e.code,{children:"event.preventDefault()"})," in the ",o.jsx(e.code,{children:"onClick"})," event handler."]}),`
`,o.jsx(p,{of:O}),`
`,o.jsx(e.h3,{id:"example-code",children:"Example Code"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`function ToolbarWithPopover() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const popoverRef = useRef<PopoverDomRef>(null);
  return (
    <>
      <Toolbar>
        <ToolbarButton
          onClick={(e) => {
            const { targetRef } = e.detail;
            e.preventDefault();
            if (popoverRef.current) {
              popoverRef.current.opener = targetRef;
              setPopoverOpen(true);
            }
          }}
          text="Open Popover"
        />
      </Toolbar>
      <Popover
        open={popoverOpen}
        ref={popoverRef}
        onClose={() => {
          setPopoverOpen(false);
        }}
      >
        Content
      </Popover>
    </>
  );
}
`})}),`
`,o.jsx(b,{children:g}),`
`,o.jsx(e.h2,{id:"toolbaritem-1",children:"ToolbarItem"}),`
`,o.jsxs(e.p,{children:[o.jsx(n,{of:a}),'"']}),`
`,o.jsx(i,{metaOf:r,of:a}),`
`,o.jsx(e.h2,{id:"toolbarbutton",children:"ToolbarButton"}),`
`,o.jsx(n,{of:h}),`
`,o.jsx(i,{metaOf:r,of:h}),`
`,o.jsx(e.h2,{id:"toolbarselect",children:"ToolbarSelect"}),`
`,o.jsx(n,{of:l}),`
`,o.jsx(i,{metaOf:r,of:l}),`
`,o.jsx(e.h2,{id:"toolbarselectoption",children:"ToolbarSelectOption"}),`
`,o.jsx(n,{of:m}),`
`,o.jsx(i,{metaOf:r,of:m}),`
`,o.jsx(e.h2,{id:"toolbarseparator",children:"ToolbarSeparator"}),`
`,o.jsx(n,{of:c}),`
`,o.jsx(i,{metaOf:r,of:c}),`
`,o.jsx(e.h2,{id:"toolbarspacer",children:"ToolbarSpacer"}),`
`,o.jsx(n,{of:d}),`
`,o.jsx(i,{metaOf:r,of:d}),`
`,o.jsx(T,{})]})}function _o(t={}){const{wrapper:e}={...x(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(f,{...t})}):f(t)}export{_o as default};
