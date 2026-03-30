import{j as o}from"./iframe-DMCuegit.js";import{u as x,M as j,C as p,a as b,D as n}from"./blocks-_hT2CGz-.js";import{A as i}from"./ArgTypesWithNote-CNYrCXCJ.js";import{C as u}from"./ControlsWithNote-CCfPh1IT.js";import{D as v}from"./DocsHeader-BGUPBIWz.js";import{F as T}from"./Footer-0Wa-LUTc.js";import"./CommandsAndQueries-C9E2MGX7.js";import"./PageNotFound-BG19bJbD.js";import{S as g}from"./SubcomponentsSection-BVy4lpQe.js";import{C as r,D as s,W as w,O,T as a,a as l,b as m,c,d}from"./Toolbar.stories-C0CWvYkJ.js";import{T as h}from"./index-Bx110qJ4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-eKDFsa2E.js";import"./information-5_fbL55R.js";import"./sys-enter-2-Dil9t1r8.js";import"./alert-D7vPLYbi.js";import"./Tag-DKKBiDqY.js";import"./index-D62lIz3L.js";import"./index-otx7j-A2.js";import"./Link-CmPTNs7p.js";import"./copy-B-HwLSgn.js";import"./copy-CPtUp5y0.js";import"./GitHub-Mark-DIeXcjWa.js";import"./TableOfContent-CJ3fOdBx.js";import"./index-DEoJMyHo.js";import"./index-Dzpyi8IH.js";import"./index-C9z-ZS1p.js";import"./index-C1STFZgh.js";import"./index-Di3QE5re.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B5tqyg7w.js";import"./addCustomCSSWithScoping-C0Smz55A.js";import"./Illustrations-bTO4h7is.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-E66unuDm.js";import"./index-IhQAu6dU.js";import"./InvisibleMessage-C3Ae3U1K.js";import"./Input-DirUDi6l.js";import"./ResponsivePopoverCommon.css-MXP7eeX6.js";import"./ValueStateMessage.css-D7j-2cj5.js";import"./Suggestions.css-Dvj1z-OQ.js";import"./SuggestionItem-CyvdCOt4.js";import"./ListItemBaseTemplate-BtXEjops.js";import"./ComboBoxItemGroup-2Q_3jSBR.js";import"./ListBoxItemGroupTemplate-DOKgNhxC.js";import"./index-NkeT4sxo.js";import"./DatePicker-C9gxardA.js";import"./query-CzSBusdE.js";import"./Calendar-pwvL4A8L.js";import"./Gregorian-BiO7bJCZ.js";import"./FormatUtils-DTA_TInb.js";import"./slim-arrow-left-BNtrStT1.js";import"./appointment-2-C_WoAc7Q.js";import"./DateTimeInput-DlHr36jc.js";import"./index-DyUeQWg1.js";import"./index-D-POlRPn.js";import"./Token-Dnuzgc0h.js";import"./ScrollEnablement-CBsMaVqO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DPUfNWM3.js";import"./ToggleButton-CVG3irva.js";import"./multiselect-all-BNqAQuwc.js";import"./index-dJcGNDur.js";import"./index-GAFO2n_O.js";import"./less-BieZFKIn.js";import"./ToolbarSpacer-COnzqpGG.js";import"./ToolbarButton-DTkJdm_w.js";import"./overflow-DPtP-OTM.js";import"./Select-47892hrl.js";import"./Option-K8omM4DC.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...x(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(j,{of:r}),`
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
