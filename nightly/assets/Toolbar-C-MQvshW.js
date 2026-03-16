import{j as o}from"./iframe-BIP38Qmu.js";import{useMDXComponents as x}from"./index-CCzfQ4AK.js";import{A as n}from"./ArgTypesWithNote-H7KWc-px.js";import{C as j}from"./ControlsWithNote-DlY6D4bI.js";import{D as b}from"./DocsHeader-D4aiXO6T.js";import{F as u}from"./Footer-DAbghHc6.js";import"./CommandsAndQueries-BAg-w2Ve.js";import"./PageNotFound-z2fC1f6d.js";import{S as v}from"./SubcomponentsSection-BVy4lpQe.js";import{M as T,C as p,a as g,D as i}from"./blocks-69-jnurL.js";import{C as r,D as s,W as w,O,T as a,a as l,b as m,c,d}from"./Toolbar.stories-9Br-gjPn.js";import{T as h}from"./index-CPObalJj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_7tcSj3.js";import"./information-Cf_JR6Aw.js";import"./sys-enter-2-D5AeNUHf.js";import"./alert-CMm7pEpj.js";import"./Tag-D0zcjL-3.js";import"./index-BEp_fWNn.js";import"./index-BlYNx0T3.js";import"./Link-B13MM4G6.js";import"./copy-q2hIMu45.js";import"./copy-nvOf1vVL.js";import"./GitHub-Mark-vHfAubj_.js";import"./TableOfContent-CAcSs8TN.js";import"./index-pu7JlX44.js";import"./index-C0fOqYC4.js";import"./index-Du9D3QZW.js";import"./index-DXmoRv88.js";import"./index-ZEQXSIQn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BrBZ3oM5.js";import"./addCustomCSSWithScoping-3IpFFLGa.js";import"./Illustrations-BEksg9v0.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-_Oe3u67s.js";import"./index-BSBBvSsN.js";import"./InvisibleMessage-CSZZfWPC.js";import"./Input-Vh2SZ5wm.js";import"./ResponsivePopoverCommon.css-BkF_hMva.js";import"./ValueStateMessage.css-CUWnXMd3.js";import"./Suggestions.css-B5HWK93E.js";import"./SuggestionItem-BKrlsw9a.js";import"./ListItemBaseTemplate-C-sRh5WR.js";import"./ComboBoxItemGroup-D5nL8mXK.js";import"./ListBoxItemGroupTemplate-DSD3qJlV.js";import"./index-8HbfSV8_.js";import"./DatePicker-BKOaT-oF.js";import"./query-CzSBusdE.js";import"./Calendar-B8SY0mME.js";import"./Gregorian-ClYFHJl1.js";import"./getCachedLocaleDataInstance-B1FOcPn7.js";import"./slim-arrow-left-CZejjuux.js";import"./appointment-2-KzHpZyvf.js";import"./DateTimeInput-CCK_UmDY.js";import"./index-B-FlYCK5.js";import"./index-DE6oriP5.js";import"./Token-DrBChGXT.js";import"./ScrollEnablement-CtvtwLeU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BzHjrys2.js";import"./ToggleButton-BNbivUIh.js";import"./multiselect-all-UIxR7RvH.js";import"./index-DG5mTvYI.js";import"./index-BfK4ShoC.js";import"./less-BSDtBstK.js";import"./ToolbarSpacer-D_FpCPdV.js";import"./ToolbarButton-UppJZZRZ.js";import"./overflow-D0Q8iiex.js";import"./Select-WWVP6knv.js";import"./Option-CHiJn1LV.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...x(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(T,{of:r}),`
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
