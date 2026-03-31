import{j as o}from"./iframe-D2WvPMQO.js";import{u as x,M as j,C as p,a as b,D as n}from"./blocks-Cy8tSwuN.js";import{A as i}from"./ArgTypesWithNote-BbKu0TXg.js";import{C as u}from"./ControlsWithNote-W2MnsLWm.js";import{D as v}from"./DocsHeader-Dn8n_uow.js";import{F as T}from"./Footer-CcjLnWXZ.js";import"./CommandsAndQueries-GHyhdZ5z.js";import"./PageNotFound--xUWQamC.js";import{S as g}from"./SubcomponentsSection-BVy4lpQe.js";import{C as r,D as s,W as w,O,T as a,a as l,b as m,c,d}from"./Toolbar.stories-DRardxgr.js";import{T as h}from"./index-BTfVUIwn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-iukRSAfG.js";import"./information-C8cZAxRB.js";import"./sys-enter-2-dY36Ay86.js";import"./alert-C9lTQ0KQ.js";import"./Tag-77Zcvr-C.js";import"./index-35M5Bral.js";import"./index-itXLTY8o.js";import"./Link-B9O6M9m0.js";import"./copy-DMwbApOt.js";import"./copy-DEDrq7eG.js";import"./GitHub-Mark-DoIHarqw.js";import"./TableOfContent-BVPApRYH.js";import"./index-CEhSDieG.js";import"./index-CNWb7VVG.js";import"./index-D85ZyHtS.js";import"./index-BHdhu-GL.js";import"./index-PtvYek1_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BEnkyBc2.js";import"./addCustomCSSWithScoping-qrEX4tTM.js";import"./Illustrations-T5lVOB-y.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-DVsa72aS.js";import"./index-DDxQ987y.js";import"./InvisibleMessage-D8P6qZ5N.js";import"./Input-I49paX0T.js";import"./ResponsivePopoverCommon.css-CjUTP20I.js";import"./ValueStateMessage.css-CmhOpOlf.js";import"./Suggestions.css-rpucalpY.js";import"./SuggestionItem-CyF605C0.js";import"./ListItemBaseTemplate-CRHkGA3i.js";import"./ComboBoxItemGroup-3MLa-49H.js";import"./ListBoxItemGroupTemplate-ULzBGJs1.js";import"./index-CCh2e56-.js";import"./DatePicker-Cpbfw03r.js";import"./query-CzSBusdE.js";import"./Calendar-CA0VTzYR.js";import"./Gregorian-5byUlWjd.js";import"./FormatUtils-6C1LZvpy.js";import"./slim-arrow-left-DZTJCEFz.js";import"./appointment-2-9OKhKYYJ.js";import"./DateTimeInput-gs_AY-7y.js";import"./index-D5IIiW0k.js";import"./index-D_rtv69N.js";import"./Token-BzwGSfjy.js";import"./ScrollEnablement-D_-WU9eX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D9P5PrOT.js";import"./ToggleButton-BDLqiRP1.js";import"./multiselect-all-VBbz0rEV.js";import"./index-CgkTO2HD.js";import"./index-C3vgjiRI.js";import"./less-INLBlfmn.js";import"./ToolbarSpacer-DtTcRsD2.js";import"./ToolbarButton-Cwrk-Xr2.js";import"./overflow-BX662gpb.js";import"./Select-mzrKDd_j.js";import"./Option-95rllHQV.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...x(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(j,{of:r}),`
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
