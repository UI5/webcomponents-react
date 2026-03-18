import{j as o}from"./iframe-DMsBkhV6.js";import{useMDXComponents as x}from"./index-DRmP5vAG.js";import{A as n}from"./ArgTypesWithNote-YiYz8a5Z.js";import{C as j}from"./ControlsWithNote-F7SPLu7s.js";import{D as b}from"./DocsHeader-3lHDey1z.js";import{F as u}from"./Footer-BOw4Z5DY.js";import"./CommandsAndQueries-DpukJ1Hp.js";import"./PageNotFound-DjLaegFZ.js";import{S as v}from"./SubcomponentsSection-BVy4lpQe.js";import{M as T,C as p,a as g,D as i}from"./blocks-DLa5hkYX.js";import{C as r,D as s,W as w,O,T as a,a as l,b as m,c,d}from"./Toolbar.stories-B_qw8RbN.js";import{T as h}from"./index-CSuCdwrW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DCIOC28Z.js";import"./information-B9kPmlYt.js";import"./sys-enter-2-DFXWrXkU.js";import"./alert-BM02Ke2L.js";import"./Tag-BmcB_JoS.js";import"./index-CsdED7a8.js";import"./index-DsnyfM-a.js";import"./Link-CSEVwGcN.js";import"./copy-DzHuePNf.js";import"./copy-CD95AZM0.js";import"./GitHub-Mark-CtaoVdU6.js";import"./TableOfContent-YryckjTo.js";import"./index-BzYJTbyT.js";import"./index-D8IUoaKA.js";import"./index-Bz_iFKqi.js";import"./index-bqOHt3_F.js";import"./index-Ct0KsXWt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CSKWwKcd.js";import"./addCustomCSSWithScoping-BbL9ROxJ.js";import"./Illustrations-BuKaE0Lu.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-I52ieGsq.js";import"./index-V057hh2t.js";import"./InvisibleMessage-DRj0d5Uv.js";import"./Input-Uf7jhdsj.js";import"./ResponsivePopoverCommon.css-BkDEP9by.js";import"./ValueStateMessage.css-BOfdrSqA.js";import"./Suggestions.css-CGPwNADp.js";import"./SuggestionItem-CAv3FUFe.js";import"./ListItemBaseTemplate-YIQ1K6S5.js";import"./ComboBoxItemGroup-DaTElG3f.js";import"./ListBoxItemGroupTemplate-_0Dwsw5E.js";import"./index-DBOo4gyY.js";import"./DatePicker-NZ4NWfiV.js";import"./query-CzSBusdE.js";import"./Calendar-Bu6KaTiy.js";import"./Gregorian-wFqB2tWj.js";import"./getCachedLocaleDataInstance-xHlae6_2.js";import"./slim-arrow-left-C3g7dE-e.js";import"./appointment-2-DWIe1SLW.js";import"./DateTimeInput-BiOWZHpf.js";import"./index-BAZhX22Y.js";import"./index-BJqBraCz.js";import"./Token-ZdRf4EiI.js";import"./ScrollEnablement-COba7ibi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DrpX4RCW.js";import"./ToggleButton-CrhejzgI.js";import"./multiselect-all-D_WUNEQL.js";import"./index-C_y9TSAn.js";import"./index-D8XrUqKf.js";import"./less-mQfVbBaX.js";import"./ToolbarSpacer-COKu3mof.js";import"./ToolbarButton-CCTqeyW9.js";import"./overflow-tEp_b04-.js";import"./Select-CbPjmsG8.js";import"./Option-CaNyZKGp.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...x(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(T,{of:r}),`
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
