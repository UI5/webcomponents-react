import{j as o}from"./iframe-CyQHbHxC.js";import{useMDXComponents as x}from"./index-CAqjzf3-.js";import{A as n}from"./ArgTypesWithNote-BefXg7jU.js";import{C as j}from"./ControlsWithNote-BNokvIjE.js";import{D as b}from"./DocsHeader-D3sFB4u7.js";import{F as u}from"./Footer-B6F6QaBp.js";import"./CommandsAndQueries-CQRKG-No.js";import"./PageNotFound-BwogsJtD.js";import{S as v}from"./SubcomponentsSection-BVy4lpQe.js";import{M as T,C as p,a as g,D as i}from"./blocks-B1BKQjJv.js";import{C as r,D as s,W as w,O,T as a,a as l,b as m,c,d}from"./Toolbar.stories-4o9SeC5p.js";import{T as h}from"./index-CXpjRsX6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DVtJUpci.js";import"./information-DjNNiNHU.js";import"./sys-enter-2-BgUfXyT0.js";import"./alert-CTY_LxCJ.js";import"./Tag-CpzoOvR8.js";import"./index-1GAsnXVc.js";import"./index-DUAJQglC.js";import"./Link-8vAV1o0p.js";import"./copy-BMtlJq5M.js";import"./copy-DaAXI0wh.js";import"./GitHub-Mark-B7CobaJ5.js";import"./TableOfContent-5QHPn7EL.js";import"./index-DMBzjcEO.js";import"./index-hCRaM0Y7.js";import"./index-DdcJcuqo.js";import"./index-Dk8Vx9PA.js";import"./index-CyzsrkYQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BPaLVEvo.js";import"./addCustomCSSWithScoping-iqlifjV6.js";import"./Illustrations-BxTCLiS4.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-DbdcXDnh.js";import"./index-BwYgtN9h.js";import"./InvisibleMessage-e12K6vz3.js";import"./Input-8PEEDwad.js";import"./ResponsivePopoverCommon.css-Dux865Zo.js";import"./ValueStateMessage.css-BbLW-Isn.js";import"./Suggestions.css-X5qr8kqi.js";import"./SuggestionItem-CYqlhEgV.js";import"./ListItemBaseTemplate-CY7v2Dt_.js";import"./ComboBoxItemGroup-B5Dfu7er.js";import"./ListBoxItemGroupTemplate-DZZUqyjU.js";import"./index-BwED36vJ.js";import"./DatePicker-BOTsJcc7.js";import"./query-CzSBusdE.js";import"./Calendar-BA1c8u4I.js";import"./Gregorian-B2DQxMLd.js";import"./getCachedLocaleDataInstance-BLkvnIbh.js";import"./slim-arrow-left-CGyFd1Ej.js";import"./appointment-2-CC_7hJ8_.js";import"./DateTimeInput-qKlCvE7x.js";import"./index-DCN3pIQM.js";import"./index-BcsJzzXU.js";import"./Token-BqJ4Ofoo.js";import"./ScrollEnablement-CKBCWM_a.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BxKg-XHx.js";import"./ToggleButton-DiXt1YNE.js";import"./multiselect-all-CSlIa136.js";import"./index-BaSmbgTM.js";import"./index-DUi-XTBZ.js";import"./less-CcGC0Ea6.js";import"./ToolbarSpacer-D23YW3jt.js";import"./ToolbarButton-DqSQ2WWb.js";import"./overflow-C_REpbr5.js";import"./Select-BOhjnWh_.js";import"./Option-BnsFtoau.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...x(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(T,{of:r}),`
`,o.jsx(b,{of:r,since:"1.19.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(p,{of:s}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(j,{of:s}),`
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
`,o.jsx(g,{children:v}),`
`,o.jsx(e.h2,{id:"toolbaritem-1",children:"ToolbarItem"}),`
`,o.jsxs(e.p,{children:[o.jsx(i,{of:a}),'"']}),`
`,o.jsx(n,{metaOf:r,of:a}),`
`,o.jsx(e.h2,{id:"toolbarbutton",children:"ToolbarButton"}),`
`,o.jsx(i,{of:h}),`
`,o.jsx(n,{metaOf:r,of:h}),`
`,o.jsx(e.h2,{id:"toolbarselect",children:"ToolbarSelect"}),`
`,o.jsx(i,{of:l}),`
`,o.jsx(n,{metaOf:r,of:l}),`
`,o.jsx(e.h2,{id:"toolbarselectoption",children:"ToolbarSelectOption"}),`
`,o.jsx(i,{of:m}),`
`,o.jsx(n,{metaOf:r,of:m}),`
`,o.jsx(e.h2,{id:"toolbarseparator",children:"ToolbarSeparator"}),`
`,o.jsx(i,{of:c}),`
`,o.jsx(n,{metaOf:r,of:c}),`
`,o.jsx(e.h2,{id:"toolbarspacer",children:"ToolbarSpacer"}),`
`,o.jsx(i,{of:d}),`
`,o.jsx(n,{metaOf:r,of:d}),`
`,o.jsx(u,{})]})}function qo(t={}){const{wrapper:e}={...x(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(f,{...t})}):f(t)}export{qo as default};
