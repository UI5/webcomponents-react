import{j as o}from"./iframe-D9XQThMB.js";import{useMDXComponents as x}from"./index-BFkPJIs4.js";import{A as n}from"./ArgTypesWithNote-Br7Ujb6P.js";import{C as j}from"./ControlsWithNote-DzDU2bOP.js";import{D as b}from"./DocsHeader-C1IeQFXK.js";import{F as u}from"./Footer-8Yr8m1IV.js";import"./CommandsAndQueries-BBuqlp9J.js";import"./PageNotFound-DktVNoBl.js";import{S as v}from"./SubcomponentsSection-BVy4lpQe.js";import{M as T,C as p,a as g,D as i}from"./blocks-CsZckq-p.js";import{C as r,D as s,W as w,O,T as a,a as l,b as m,c,d}from"./Toolbar.stories-DmwxnmUj.js";import{T as h}from"./index--eKvg6La.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWcAyF8h.js";import"./information-Bvi0jW5b.js";import"./sys-enter-2-Bex-whDb.js";import"./alert-CKQIr3Jj.js";import"./Tag-NpQQnYo4.js";import"./index-BlKrBUMf.js";import"./index-CjxO355V.js";import"./Link-CJ7-xxSX.js";import"./copy-8S9Iqf0z.js";import"./copy-CyvuSNR_.js";import"./GitHub-Mark-DKAgjLDu.js";import"./TableOfContent-Bpyqe4Fu.js";import"./index-BtpxSXz8.js";import"./index-CxgWM8Dp.js";import"./index-BDim0UZ8.js";import"./index-C40uNmLM.js";import"./index-9BnKq7JY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DrummEDM.js";import"./addCustomCSSWithScoping-BEVVchOt.js";import"./Illustrations-DGm-82Ik.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-DzSim1oI.js";import"./index-DzZQAt3O.js";import"./InvisibleMessage-tD1-WheS.js";import"./Input-Dd8V6pYN.js";import"./ResponsivePopoverCommon.css-AccouXMm.js";import"./ValueStateMessage.css-C61ZdvXC.js";import"./Suggestions.css-DNN4WTtE.js";import"./SuggestionItem-Br9jPSr7.js";import"./ListItemBaseTemplate-XMqPEKMa.js";import"./ComboBoxItemGroup-DyN_O1AM.js";import"./ListBoxItemGroupTemplate-UMOtcqUV.js";import"./index-C2VvcRFJ.js";import"./DatePicker-D55XLbR2.js";import"./query-CzSBusdE.js";import"./Calendar-C3gBLvJh.js";import"./Gregorian-DkAgsiaV.js";import"./getCachedLocaleDataInstance-NVd4BZvX.js";import"./slim-arrow-left-BTZnTu-V.js";import"./appointment-2-C-UkkXPP.js";import"./DateTimeInput-Bjpv12Zq.js";import"./index-i_OA1AiM.js";import"./index-yyA8QoJL.js";import"./Token-CQTdwpxJ.js";import"./ScrollEnablement-D_xuZieI.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B-WRJ_4D.js";import"./ToggleButton-Cr7hkNto.js";import"./multiselect-all-BVy6T6bO.js";import"./index-jOOpr8A8.js";import"./index-gSABYD5Y.js";import"./less-Dq6KoCJo.js";import"./ToolbarSpacer-CP5Cbtou.js";import"./ToolbarButton-CBpkvnIZ.js";import"./overflow-aCQHN9pk.js";import"./Select-Ddna0J1l.js";import"./Option-EaORebIw.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...x(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(T,{of:r}),`
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
