import{j as o}from"./iframe-CIERqdmv.js";import{useMDXComponents as x}from"./index-DuJS4dN9.js";import{A as n}from"./ArgTypesWithNote-Ch9bt2D6.js";import{C as j}from"./ControlsWithNote-CSnduUsc.js";import{D as b}from"./DocsHeader-_r8mBImb.js";import{F as u}from"./Footer-DeuiB6kc.js";import"./CommandsAndQueries-CnFEaRrZ.js";import"./PageNotFound-C7dSWVQh.js";import{S as v}from"./SubcomponentsSection-BVy4lpQe.js";import{M as T,C as p,a as g,D as i}from"./blocks-CwsgKOP_.js";import{C as r,D as s,W as w,O,T as a,a as l,b as m,c,d}from"./Toolbar.stories-DCqs4ELQ.js";import{T as h}from"./index-CPjMf4He.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CMev4Q36.js";import"./information-90fB5V4h.js";import"./sys-enter-2-BkL_leH3.js";import"./alert-B9azflx9.js";import"./Tag-0874imNl.js";import"./index-DmgJDP0k.js";import"./index-BEXhXSTj.js";import"./Link-B7T_f79Y.js";import"./copy-ofXuvq9E.js";import"./copy-Dk2sduK9.js";import"./GitHub-Mark-RGHHd1bg.js";import"./TableOfContent-BXcIi_qC.js";import"./index-CJA8M3b4.js";import"./index-CeFrwZtC.js";import"./index-Dub9x5-i.js";import"./index-DQGCwtV8.js";import"./index-C9od4SKd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DkSzocmg.js";import"./addCustomCSSWithScoping-B8m6lHZs.js";import"./Illustrations-CMsXyloe.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-y1z-NlC1.js";import"./index-Bdfo2OBt.js";import"./InvisibleMessage-CprUuJ-2.js";import"./Input-BEziv0q_.js";import"./ResponsivePopoverCommon.css-BAyfAe_C.js";import"./ValueStateMessage.css-yAScMgnT.js";import"./Suggestions.css-aGpylhML.js";import"./SuggestionItem-BuU8W2FN.js";import"./ListItemBaseTemplate-EsFxfCNV.js";import"./ComboBoxItemGroup-BOPZ01sA.js";import"./ListBoxItemGroupTemplate-D6At1Qlv.js";import"./index-DzLcxRob.js";import"./DatePicker-B-h21QCG.js";import"./query-CzSBusdE.js";import"./Calendar-BciWDnM-.js";import"./Gregorian-Cmw6GZmj.js";import"./getCachedLocaleDataInstance-u4mEf7Yn.js";import"./slim-arrow-left-CtdazLbO.js";import"./appointment-2-JVMfktit.js";import"./DateTimeInput-LbVPoqAr.js";import"./index-CqgLWTBh.js";import"./index-DpgFhjh1.js";import"./Token-5e6MV0bo.js";import"./ScrollEnablement-DGfUBP2Y.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-juxLC4N0.js";import"./ToggleButton-fSM9au_p.js";import"./multiselect-all-Dp7x2lXO.js";import"./index-BmMwLE_d.js";import"./index-BXsMvzsh.js";import"./less-BWtd1z_C.js";import"./ToolbarSpacer-el0XEWHB.js";import"./ToolbarButton-TgzjBqRL.js";import"./overflow-C6YkdztS.js";import"./Select-BLvJx2xD.js";import"./Option-wGoV8nGP.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...x(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(T,{of:r}),`
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
