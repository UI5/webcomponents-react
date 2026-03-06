import{j as o}from"./iframe-geaynzT-.js";import{useMDXComponents as x}from"./index-Dy0P-MTk.js";import{A as n}from"./ArgTypesWithNote-D3mgv25j.js";import{C as j}from"./ControlsWithNote-dZmWZicR.js";import{D as b}from"./DocsHeader-C1feTuJ3.js";import{F as u}from"./Footer-BsbiOiC7.js";import"./CommandsAndQueries-B6i0zlBz.js";import"./PageNotFound-BfSR_Vk2.js";import{S as v}from"./SubcomponentsSection-BVy4lpQe.js";import{M as T,C as p,a as g,D as i}from"./blocks-DvwiWHqk.js";import{C as r,D as s,W as w,O,T as a,a as l,b as m,c,d}from"./Toolbar.stories-Dvr5dN1d.js";import{T as h}from"./index-BRjeaFV0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D-nFJC4E.js";import"./information-BPLaT9Ap.js";import"./sys-enter-2-BM-hyHpl.js";import"./alert-BbpVY6El.js";import"./Tag-B3QRrnQ_.js";import"./index-sZJqmiwE.js";import"./index-Bp_EOu-Q.js";import"./Link-nEWS4oVx.js";import"./copy-Mj689c8X.js";import"./copy-ww3KL2rX.js";import"./GitHub-Mark-BG_xGhbo.js";import"./TableOfContent-p5b2KUMj.js";import"./index-_qPK30Mb.js";import"./index-CTwiS7Jw.js";import"./index-D5uUZfuG.js";import"./index-CG-HWMDU.js";import"./index-CKM0CrDr.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-HivzyS7T.js";import"./addCustomCSSWithScoping-xbUSRjKw.js";import"./Illustrations-Da51eylt.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-DrHoGjWG.js";import"./index-DhTLBvFZ.js";import"./InvisibleMessage-CbKTPW6d.js";import"./Input-D718yOxL.js";import"./ResponsivePopoverCommon.css-BNVSGncI.js";import"./ValueStateMessage.css-BCq31M5q.js";import"./Suggestions.css-B2NS7aEt.js";import"./SuggestionItem-C_3zoX6X.js";import"./ListItemBaseTemplate-B-UBUhMu.js";import"./ComboBoxItemGroup-Cc09CfZv.js";import"./ListBoxItemGroupTemplate-CaN9gZpp.js";import"./index-lwtCj6YL.js";import"./DatePicker-BXgVVfBy.js";import"./query-CzSBusdE.js";import"./Calendar-Ciq8MndE.js";import"./Gregorian-cFyuy2Dh.js";import"./getCachedLocaleDataInstance-nT_bcXMQ.js";import"./slim-arrow-left-CSnitg4h.js";import"./appointment-2-BTNt15MM.js";import"./DateTimeInput-9YHUMjDr.js";import"./index-B3_V7TUA.js";import"./index-ClFOA2Te.js";import"./Token-B-DIQD6O.js";import"./ScrollEnablement-DPeWyNUe.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CrjdizTB.js";import"./ToggleButton-CXmo7_Af.js";import"./multiselect-all-BOi-ndht.js";import"./index-CUrQjyME.js";import"./index-CfLv6iWt.js";import"./less-DLnKLgv5.js";import"./ToolbarSpacer-k4kbhQPB.js";import"./ToolbarButton-D7vFe33Z.js";import"./overflow-BuCPfofg.js";import"./Select--P873eyr.js";import"./Option-BZsuWY7l.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...x(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(T,{of:r}),`
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
