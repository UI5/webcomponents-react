import{j as o}from"./iframe-BDg7FSoj.js";import{useMDXComponents as x}from"./index-CfS6z3MT.js";import{A as n}from"./ArgTypesWithNote-DROTufkB.js";import{C as j}from"./ControlsWithNote-hta_rmOq.js";import{D as b}from"./DocsHeader-Br2gHYWL.js";import{F as u}from"./Footer-DcSScdvn.js";import"./CommandsAndQueries-BgLg0c2t.js";import"./PageNotFound-Cz7A_GPz.js";import{S as v}from"./SubcomponentsSection-BVy4lpQe.js";import{M as T,C as p,a as g,D as i}from"./blocks-D274WTCA.js";import{C as r,D as s,W as w,O,T as a,a as l,b as m,c,d}from"./Toolbar.stories-CBiw6G9a.js";import{T as h}from"./index-CwJZ0v5G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BfRGPCU-.js";import"./information-DD__sQ7N.js";import"./sys-enter-2-Dp2sy9f7.js";import"./alert-C6BvEboW.js";import"./Tag-D7GKpW6g.js";import"./index-DKaIOimk.js";import"./index-CtXj8tW6.js";import"./Link-DweKFefr.js";import"./copy-Dwmjmk6r.js";import"./copy-LtMPx_h3.js";import"./GitHub-Mark-BXWTi3jp.js";import"./TableOfContent-LJE63-X7.js";import"./index-ClFnafIK.js";import"./index-Ca5wJMxN.js";import"./index-YYn2-nAM.js";import"./index-Cr06KJoh.js";import"./index-Cs36UH1Y.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CX4riDWF.js";import"./addCustomCSSWithScoping-DjKpxhL9.js";import"./Illustrations-BhEYUAiS.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-B7uqwTBo.js";import"./index-42JHi8di.js";import"./InvisibleMessage-DTrhxE2q.js";import"./Input-DPh2xJTy.js";import"./ResponsivePopoverCommon.css-YN2yb077.js";import"./ValueStateMessage.css-CZSQW4Xi.js";import"./Suggestions.css-CoI0xqid.js";import"./SuggestionItem-DeimWAUM.js";import"./ListItemBaseTemplate-COnbdXmo.js";import"./ComboBoxItemGroup-B7lumk6S.js";import"./ListBoxItemGroupTemplate-DVkdxE4m.js";import"./index-BItU8Mjn.js";import"./DatePicker-C_Kl85EC.js";import"./query-CzSBusdE.js";import"./Calendar-E6B72Uaj.js";import"./Gregorian-Yc43erKo.js";import"./getCachedLocaleDataInstance-BGAo40Yk.js";import"./slim-arrow-left-Dibcwihs.js";import"./appointment-2-DVtTJ16J.js";import"./DateTimeInput-CKWur0uS.js";import"./index-BYaJ9Gcz.js";import"./index-CavH8dni.js";import"./Token-CyYhzpuK.js";import"./ScrollEnablement-CJNzrglF.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C9BXoiP3.js";import"./ToggleButton-C756d9Qn.js";import"./multiselect-all-B_axlRDi.js";import"./index-DlFMOayY.js";import"./index-DPqF1ogR.js";import"./less-MXFQYBDW.js";import"./ToolbarSpacer-CIkUdw70.js";import"./ToolbarButton-Bb3VxnfN.js";import"./overflow-DYE-l-h9.js";import"./Select-Br85qeyo.js";import"./Option-Dz3WWHcz.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...x(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(T,{of:r}),`
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
