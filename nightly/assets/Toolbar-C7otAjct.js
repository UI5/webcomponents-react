import{j as o}from"./iframe-BsLeblbZ.js";import{useMDXComponents as x}from"./index-SmDsT-ZV.js";import{A as n}from"./ArgTypesWithNote-sxb38S7n.js";import{C as j}from"./ControlsWithNote-D-FuG2tP.js";import{D as b}from"./DocsHeader-op1-hUGh.js";import{F as u}from"./Footer-Bbw4uFwB.js";import"./CommandsAndQueries-BIrmUykn.js";import"./PageNotFound-DD-eOCZR.js";import{S as v}from"./SubcomponentsSection-BVy4lpQe.js";import{M as T,C as p,a as g,D as i}from"./blocks-MuC3nZ17.js";import{C as r,D as s,W as w,O,T as a,a as l,b as m,c,d}from"./Toolbar.stories-DCE7u01m.js";import{T as h}from"./index-msZJj7ly.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RHsqj3O6.js";import"./information-CyWeW3Ip.js";import"./sys-enter-2-0MhMJNjS.js";import"./alert-CqXBa80-.js";import"./Tag-YXcZfnM7.js";import"./index-B-umVgsK.js";import"./index-Xah-ddNA.js";import"./Link-CBQ0neVT.js";import"./copy-C_968UhI.js";import"./copy-D-f_NdBO.js";import"./GitHub-Mark-CQCKzyKN.js";import"./TableOfContent-B8KE4qVO.js";import"./index-DOfJ-lzX.js";import"./index-BxpRwQAU.js";import"./index-B-MH-ZOH.js";import"./index-B9PkCo2j.js";import"./index-Hl67y25M.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DtKzQDtt.js";import"./addCustomCSSWithScoping-BnenMixx.js";import"./Illustrations-BpmOpW1L.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-D0RBnp-L.js";import"./index-D24XhG-l.js";import"./InvisibleMessage-BLe6-QWs.js";import"./Input-DlcD5Uyx.js";import"./ResponsivePopoverCommon.css-BnR9PF5c.js";import"./ValueStateMessage.css-DaaMCoGD.js";import"./Suggestions.css-B26HkXef.js";import"./SuggestionItem-vuP3MGZZ.js";import"./ListItemBaseTemplate-BujdvxYW.js";import"./ComboBoxItemGroup-CuM1vEgu.js";import"./ListBoxItemGroupTemplate-sBYZNQZ5.js";import"./index-DwZR8-W_.js";import"./DatePicker-BEr-uUYy.js";import"./query-CzSBusdE.js";import"./Calendar-Bh5wZUm_.js";import"./Gregorian-DS9evTDj.js";import"./getCachedLocaleDataInstance--ydeGkBs.js";import"./slim-arrow-left-CFKy4vAa.js";import"./appointment-2-DzBIjmVg.js";import"./DateTimeInput-CPvuYYPX.js";import"./index-B918Q3Uk.js";import"./index-NHMxkGm6.js";import"./Token-BR8sMvH4.js";import"./ScrollEnablement-B2JTzChl.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BbebGmy4.js";import"./ToggleButton-Bl3lFzoi.js";import"./multiselect-all-BD4wic1E.js";import"./index-BC7QE9G2.js";import"./index-CIjtFDg8.js";import"./less-e75wAmAF.js";import"./ToolbarSpacer-BFkAFTbi.js";import"./ToolbarButton-BZWkYzNh.js";import"./overflow-DY3pLwFR.js";import"./Select-ogMEAbmp.js";import"./Option-DZ9JQFne.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...x(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(T,{of:r}),`
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
