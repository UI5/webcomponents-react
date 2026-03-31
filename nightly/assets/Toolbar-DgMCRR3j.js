import{j as o}from"./iframe-GXp7lrSQ.js";import{u as x,M as j,C as p,a as b,D as n}from"./blocks-XkJ722q3.js";import{A as i}from"./ArgTypesWithNote-TC6KofCQ.js";import{C as u}from"./ControlsWithNote-CAVQlFWx.js";import{D as v}from"./DocsHeader-DIvhQild.js";import{F as T}from"./Footer-uVHBRSQb.js";import"./CommandsAndQueries-CVcJVi5r.js";import"./PageNotFound-VnOdSsgo.js";import{S as g}from"./SubcomponentsSection-BVy4lpQe.js";import{C as r,D as s,W as w,O,T as a,a as l,b as m,c,d}from"./Toolbar.stories-7l4ZvK1L.js";import{T as h}from"./index-C62XwvsZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D9hIm448.js";import"./information-CwevoeOo.js";import"./sys-enter-2-BSdQUe02.js";import"./alert-Ds801M6U.js";import"./Tag-CUfffkkD.js";import"./index-BXKqqHdE.js";import"./index-CMKcbagv.js";import"./Link-B8HUwSLv.js";import"./copy-ColcidlA.js";import"./copy-_WAqiJ1e.js";import"./GitHub-Mark-CdpM-LE3.js";import"./TableOfContent-BLO4MxbM.js";import"./index-TceWecEs.js";import"./index-CmMI2aTL.js";import"./index-BLkFX4jD.js";import"./index-C-99lkBL.js";import"./index-CrV5gfjE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHLtduuY.js";import"./addCustomCSSWithScoping-lRpYguTz.js";import"./Illustrations-C-7wSXd8.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-B9tnRND4.js";import"./index-ZQIw1ang.js";import"./InvisibleMessage-B-Rt2GQk.js";import"./Input-KO3l8Brk.js";import"./ResponsivePopoverCommon.css-Bc1a9KNA.js";import"./ValueStateMessage.css-D80lJWSa.js";import"./Suggestions.css-Ahw1quaz.js";import"./SuggestionItem-DQ4y2WD-.js";import"./ListItemBaseTemplate-XA1LRcK1.js";import"./ComboBoxItemGroup-ChKegmig.js";import"./ListBoxItemGroupTemplate-DZFQ85cg.js";import"./index-D24iatB3.js";import"./DatePicker-BAeX4ewx.js";import"./query-CzSBusdE.js";import"./Calendar-C8OTo_T7.js";import"./Gregorian-D9dLlqYH.js";import"./FormatUtils-Cy9ZlGEn.js";import"./slim-arrow-left-BgtEjWal.js";import"./appointment-2-3PwR0uQy.js";import"./DateTimeInput-DABtEy-O.js";import"./index-mb2VS-jK.js";import"./index-CNbkdYFu.js";import"./Token-DR2_YNLL.js";import"./ScrollEnablement-BbZ7dfG4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B3m1DJEV.js";import"./ToggleButton-DwOQOQFC.js";import"./multiselect-all-TGdLhybc.js";import"./index-Bk4RQIyK.js";import"./index-Btq87WCk.js";import"./less-DUrSicmG.js";import"./ToolbarSpacer-B4rroP2L.js";import"./ToolbarButton-CzpZC7KX.js";import"./overflow-BzRqXK8Z.js";import"./Select-CBTMV-I6.js";import"./Option-Dny_IhR6.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...x(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(j,{of:r}),`
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
