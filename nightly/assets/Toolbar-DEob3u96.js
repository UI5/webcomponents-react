import{j as o}from"./iframe-CzTCZe7v.js";import{useMDXComponents as x}from"./index-CDGFt6A1.js";import{A as n}from"./ArgTypesWithNote-Cr6epKA6.js";import{C as j}from"./ControlsWithNote-CDLlK38r.js";import{D as b}from"./DocsHeader-BMnK1C50.js";import{F as u}from"./Footer-DxyUJb9o.js";import"./CommandsAndQueries-DvEFwabB.js";import"./PageNotFound-BAD2GAcl.js";import{S as v}from"./SubcomponentsSection-BVy4lpQe.js";import{M as T,C as p,a as g,D as i}from"./blocks-DeBlAQEU.js";import{C as r,D as s,W as w,O,T as a,a as l,b as m,c,d}from"./Toolbar.stories-LqVNlQCp.js";import{T as h}from"./index-C8J21-sE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C0tHrsgM.js";import"./information-Bqvi10T6.js";import"./sys-enter-2-DyCO0gh_.js";import"./alert-9P0VyDJW.js";import"./Tag-Czdm_FZb.js";import"./index-CXe4MOnZ.js";import"./index-DIk2IhoZ.js";import"./Link-CZjSyYly.js";import"./copy-CNRutDQV.js";import"./copy-BOjVvS6l.js";import"./GitHub-Mark-BjX2VLOB.js";import"./TableOfContent-Bn2gWDi_.js";import"./index-B7_ymrud.js";import"./index-wip9afZ2.js";import"./index-DKruw7SF.js";import"./index-DzASyxpH.js";import"./index-C8dlP9nE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DPTQrRIc.js";import"./addCustomCSSWithScoping-Cq2MgCDz.js";import"./Illustrations-D7TiwfCu.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-BsOmmnd6.js";import"./index-Ba3qOFch.js";import"./InvisibleMessage-hOloPGzW.js";import"./Input-uQUrQiez.js";import"./ResponsivePopoverCommon.css-DFzVVW-E.js";import"./ValueStateMessage.css-Dmls9BNj.js";import"./Suggestions.css-C-LfaUWA.js";import"./SuggestionItem-DTt93yVG.js";import"./ListItemBaseTemplate-CtxRxA0S.js";import"./ComboBoxItemGroup-DC7I2Gnu.js";import"./ListBoxItemGroupTemplate-CjbpLuh1.js";import"./index-DKqJ9n5N.js";import"./DatePicker-D_ACS5sP.js";import"./query-CzSBusdE.js";import"./Calendar-sQSrZTjO.js";import"./Gregorian-BEVgFCQA.js";import"./getCachedLocaleDataInstance-3osMxAxO.js";import"./slim-arrow-left-ZuC7LZH3.js";import"./appointment-2-qYbjn5xp.js";import"./DateTimeInput-BlyXoxXF.js";import"./index-DkbCRIZN.js";import"./index-BcDsDQKs.js";import"./Token-DyMWmvtx.js";import"./ScrollEnablement-CI2_tTC7.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CirnuoCn.js";import"./ToggleButton-AwQV3-nU.js";import"./multiselect-all-DRIYr1gF.js";import"./index-C4_LFnak.js";import"./index-FT_Ukt9o.js";import"./less-Bbajs4eq.js";import"./ToolbarSpacer-DJMjOMht.js";import"./ToolbarButton-CaujKUUb.js";import"./overflow-hb85ZRgk.js";import"./Select-i2pvVUiG.js";import"./Option-Dyof31Hh.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...x(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(T,{of:r}),`
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
