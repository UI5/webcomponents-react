import{j as o}from"./iframe-CqN2ZhBf.js";import{useMDXComponents as x}from"./index-l_k7HiPu.js";import{A as n}from"./ArgTypesWithNote-DU9RjG7J.js";import{C as j}from"./ControlsWithNote-OjbHZJi_.js";import{D as b}from"./DocsHeader-DsUHlGc0.js";import{F as u}from"./Footer-DTH9quFy.js";import"./CommandsAndQueries-BzSACk84.js";import"./PageNotFound-DDb6UcXH.js";import{S as v}from"./SubcomponentsSection-BVy4lpQe.js";import{M as T,C as p,a as g,D as i}from"./blocks-D3fE08ja.js";import{C as r,D as s,W as w,O,T as a,a as l,b as m,c,d}from"./Toolbar.stories-GFI--X8i.js";import{T as h}from"./index-BRCxMPuV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BQSixcl8.js";import"./information-D6BYlg7t.js";import"./sys-enter-2-DctZJMGf.js";import"./alert-CXFO2CkX.js";import"./Tag-DaK0HZJI.js";import"./index-BZ-8NUw-.js";import"./index-ClO4sXRT.js";import"./Link-sJNkb0O1.js";import"./copy-Chk7vZLD.js";import"./copy-BMnDsiBX.js";import"./GitHub-Mark-CJdkrOJX.js";import"./TableOfContent-CCJgZXEp.js";import"./index-x-vR1nJy.js";import"./index-BLwcEe9O.js";import"./index-C_OjFqiG.js";import"./index-BmfFKSeY.js";import"./index-C6JiuDE8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-1eKis37g.js";import"./addCustomCSSWithScoping-DCGf9rRA.js";import"./Illustrations-CQ3hDVBV.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-CUOgXW1b.js";import"./index-fb-biCvH.js";import"./InvisibleMessage-BYqXJDe3.js";import"./Input-3bofm7YI.js";import"./ResponsivePopoverCommon.css-BNkBTrbu.js";import"./ValueStateMessage.css-rci_AzRX.js";import"./Suggestions.css-s0E0RINe.js";import"./SuggestionItem-uNJHrwE9.js";import"./ListItemBaseTemplate-6JC-rm6u.js";import"./ComboBoxItemGroup-B1knsw1Z.js";import"./ListBoxItemGroupTemplate-Bn09u9FB.js";import"./index-DYEK3nxd.js";import"./DatePicker-C7KU_05z.js";import"./query-CzSBusdE.js";import"./Calendar-m4BblB4P.js";import"./Gregorian-DZHVogkf.js";import"./getCachedLocaleDataInstance-DdOMTr8q.js";import"./slim-arrow-left-C8EdLZrr.js";import"./appointment-2-CzOGpPSV.js";import"./DateTimeInput-CfYeDHkt.js";import"./index-4NWRO4be.js";import"./index-CjGTJ4y2.js";import"./Token-BHS6Qknj.js";import"./ScrollEnablement-B4APcJGh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D5MRk4wr.js";import"./ToggleButton-CXDSYRUx.js";import"./multiselect-all-Bj3dWoCm.js";import"./index-D-Bujb1h.js";import"./index-0rrPHm6J.js";import"./less-BaKkSfRH.js";import"./ToolbarSpacer-CdQEuy5n.js";import"./ToolbarButton-BD3Tz30K.js";import"./overflow-_tHTiLLB.js";import"./Select-C0_CyldT.js";import"./Option-DMa1oTmd.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...x(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(T,{of:r}),`
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
