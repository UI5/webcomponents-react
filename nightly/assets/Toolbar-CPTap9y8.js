import{j as o}from"./iframe-CEsx9pS5.js";import{useMDXComponents as x}from"./index-gmjnJOv_.js";import{A as n}from"./ArgTypesWithNote-CiAszRnJ.js";import{C as j}from"./ControlsWithNote-YYMR15zM.js";import{D as b}from"./DocsHeader-DfeeVf-S.js";import{F as u}from"./Footer-BzqBC082.js";import"./CommandsAndQueries-KRiBOwvQ.js";import"./PageNotFound-Dm-lShwt.js";import{S as v}from"./SubcomponentsSection-BVy4lpQe.js";import{M as T,C as p,a as g,D as i}from"./blocks-8Wtp1Sju.js";import{C as r,D as s,W as w,O,T as a,a as l,b as m,c,d}from"./Toolbar.stories-c6G5LnD6.js";import{T as h}from"./index-Bites2xH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CTv8OR9t.js";import"./information-BsgOGoHr.js";import"./sys-enter-2-QXPkX9VX.js";import"./alert-C6xGNNq6.js";import"./Tag-HQWMt5YG.js";import"./index-CYl2KpDn.js";import"./index-C3LB4ZIk.js";import"./Link-Op-ol6Yv.js";import"./copy-Dtv2ACv8.js";import"./copy-BKv99Y3s.js";import"./GitHub-Mark-CjM5Qo24.js";import"./TableOfContent-BT3myzbQ.js";import"./index-D0QmD1oJ.js";import"./index-BUd2Yp1O.js";import"./index-LEy71z39.js";import"./index-C0Wj8jmE.js";import"./index-CNLVL7wa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-dF5rg7Pk.js";import"./addCustomCSSWithScoping-C93rkw8E.js";import"./Illustrations-B8Nne3o3.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-CIdADm8S.js";import"./index-BjpX0ghY.js";import"./InvisibleMessage-B3PoH58P.js";import"./Input-AKSpFtND.js";import"./ResponsivePopoverCommon.css-C3wjaSr6.js";import"./ValueStateMessage.css-CpYwQkVy.js";import"./Suggestions.css-BxYCrzla.js";import"./SuggestionItem-BI3gNhRI.js";import"./ListItemBaseTemplate-DUd-IfCf.js";import"./ComboBoxItemGroup-jFQBitjk.js";import"./ListBoxItemGroupTemplate-BK_1e7Jd.js";import"./index-DoykavQ_.js";import"./DatePicker-CW9Z7rjS.js";import"./query-CzSBusdE.js";import"./Calendar-DBunvfJ4.js";import"./Gregorian-LbUoicUV.js";import"./getCachedLocaleDataInstance-r_uKolhq.js";import"./slim-arrow-left-B-25LsPh.js";import"./appointment-2-C4OiagUh.js";import"./DateTimeInput-CMeBMuOB.js";import"./index-BVUjzMgE.js";import"./index-Cs69J_Tc.js";import"./Token-ClXNXVqt.js";import"./ScrollEnablement-BgQUKBhv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-COM3Y617.js";import"./ToggleButton-FTZXlhur.js";import"./multiselect-all-CFU46Wod.js";import"./index-DZnR0-dd.js";import"./index-C0ZNn2ww.js";import"./less-DZRRGc_Y.js";import"./ToolbarSpacer-Di9uUNfw.js";import"./ToolbarButton-wyOo4qKg.js";import"./overflow-An3HIARQ.js";import"./Select-CXP-jLKH.js";import"./Option-kRDMIGPk.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...x(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(T,{of:r}),`
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
