import{j as o}from"./iframe-CFFJFWfd.js";import{useMDXComponents as x}from"./index-C3RjxUM6.js";import{A as n}from"./ArgTypesWithNote-DipX3IX6.js";import{C as j}from"./ControlsWithNote-mcrWbiHr.js";import{D as b}from"./DocsHeader-BlV4Wsq_.js";import{F as u}from"./Footer-DnJjuNkf.js";import"./CommandsAndQueries-F7dXP8Ck.js";import"./PageNotFound-fKWlSVqv.js";import{S as v}from"./SubcomponentsSection-BVy4lpQe.js";import{M as T,C as p,a as g,D as i}from"./blocks-DNe1XYus.js";import{C as r,D as s,W as w,O,T as a,a as l,b as m,c,d}from"./Toolbar.stories-sIjzboAl.js";import{T as h}from"./index-D3JHBjEU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-nJISZmsL.js";import"./information-WOvhwCn0.js";import"./sys-enter-2-CCYEhAsr.js";import"./alert-DdBL9zU_.js";import"./Tag-Dq-_fpcq.js";import"./index-Czxe8PfH.js";import"./index-CQKrmUSc.js";import"./Link-DBWxZpb0.js";import"./copy-BdHXZL_d.js";import"./copy-BWzo1FZ0.js";import"./GitHub-Mark-DHk_4lFg.js";import"./TableOfContent-Dk3B5lEt.js";import"./index-ElIMq8Rj.js";import"./index-IkzBWQiA.js";import"./index-BC7P3Gk3.js";import"./index-B7FuneXO.js";import"./index-CLuk8Jv1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-peyxdL93.js";import"./addCustomCSSWithScoping-VUX5a_xd.js";import"./Illustrations-DDY2i5oH.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-ONUC9f2y.js";import"./index-D1XRV3Xj.js";import"./InvisibleMessage-Cy7aSRbc.js";import"./Input-BHKuVU6t.js";import"./ResponsivePopoverCommon.css-Cveld8fW.js";import"./ValueStateMessage.css-DXT8WQZS.js";import"./Suggestions.css-Dm2tVJec.js";import"./SuggestionItem-DCktFcTr.js";import"./ListItemBaseTemplate-9ZhEBgKt.js";import"./ComboBoxItemGroup-Bku5VfH-.js";import"./ListBoxItemGroupTemplate-DxqqjI46.js";import"./index-DZ1-05nq.js";import"./DatePicker-D0Ya_lc2.js";import"./query-CzSBusdE.js";import"./Calendar-CkJQo52j.js";import"./Gregorian-E9Qrg6tj.js";import"./getCachedLocaleDataInstance-CTxqYYo0.js";import"./slim-arrow-left-BxdANi72.js";import"./appointment-2-BC5-jM6f.js";import"./DateTimeInput-DidzXa6A.js";import"./index-Cf1nMP5r.js";import"./index-CuHMS1RV.js";import"./Token-DcXtyL6g.js";import"./ScrollEnablement-BLsPTkqE.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-qwVkMKWU.js";import"./ToggleButton-D_tJ2vbW.js";import"./multiselect-all-CyxbEiBJ.js";import"./index-9xXdAgRr.js";import"./index-c3HFKggR.js";import"./less-CKyJRnW1.js";import"./ToolbarSpacer-CgwuFj7Q.js";import"./ToolbarButton-C5OVNd7T.js";import"./overflow-Dtzw9-cN.js";import"./Select-Bes44jLo.js";import"./Option-BDyuoaZO.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...x(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(T,{of:r}),`
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
