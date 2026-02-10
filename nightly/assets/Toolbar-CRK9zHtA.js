import{j as o}from"./iframe-DHpTrIAy.js";import{useMDXComponents as h}from"./index-BNdd_DZc.js";import{A as n}from"./ArgTypesWithNote-e28SN47c.js";import{C as x}from"./ControlsWithNote-LbhmqWjz.js";import{D as j}from"./DocsHeader-B1pwe7gb.js";import{F as b}from"./CommandsAndQueries-D5kPRnn1.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-81TV0E2-.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-gSLPjq4I.js";import{T as d}from"./index-UA6g1Otx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-o6k9VRwd.js";import"./information-D34aykIE.js";import"./sys-enter-2-ELzebk4o.js";import"./alert-8s8s7RYv.js";import"./Tag-BMggxcvS.js";import"./index-rxRuTrVR.js";import"./index-DbNixw4c.js";import"./Link-DUpBHPtC.js";import"./copy-CHTf76DI.js";import"./copy-CUNi2x4z.js";import"./GitHub-Mark-BuG8aMwB.js";import"./TableOfContent-BwEuKDvH.js";import"./index-w0GUVkMu.js";import"./index-DA4wHaXp.js";import"./index-DpF6uZ0K.js";import"./index-C40hnbsn.js";import"./index-CAXkJF_S.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DrKfdXs7.js";import"./addCustomCSSWithScoping-CHvNzWcZ.js";import"./Select-DB28s_OD.js";import"./InvisibleMessage-C3z5CeG6.js";import"./slim-arrow-down-dKp6dqzM.js";import"./slim-arrow-down-BGJA9V4H.js";import"./ResponsivePopoverCommon.css-niQ49B26.js";import"./ValueStateMessage.css-DwB1W3lZ.js";import"./Option-Dj2PGXAN.js";import"./ListItemBaseTemplate-BXWM3mr4.js";import"./ToolbarButton-DAeZc6SX.js";import"./overflow-DLfR1HQP.js";import"./ToolbarSpacer-CkPamtFx.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
`,o.jsx(j,{of:r,since:"1.19.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{of:i}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(x,{of:i}),`
`,o.jsx(e.h2,{id:"opening-popovers-via-toolbarbutton",children:"Opening Popovers via ToolbarButton"}),`
`,o.jsxs(e.p,{children:["Since the ",o.jsx(e.code,{children:"ToolbarButton"})," is an ",o.jsx(e.a,{href:"?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components",children:"abstract UI5 web component"}),", the opener of the ",o.jsx(e.code,{children:"Popover"}),` needs the DOM reference of the actual element to position the popover correctly.
Starting with v2.5.0 of `,o.jsx(e.code,{children:"@ui5/webcomponents(-react)"}),", the ",o.jsx(e.code,{children:"detail"})," property of the ",o.jsx(e.code,{children:"ToolbarButton"}),"'s click handler now includes a ",o.jsx(e.code,{children:"targetRef"})," property, which can be used as the opener."]}),`
`,o.jsx(s,{of:O}),`
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
`,o.jsx(T,{children:u}),`
`,o.jsx(e.h2,{id:"toolbarbutton",children:"ToolbarButton"}),`
`,o.jsx(p,{of:d}),`
`,o.jsx(n,{metaOf:r,of:d}),`
`,o.jsx(e.h2,{id:"toolbarselect",children:"ToolbarSelect"}),`
`,o.jsx(p,{of:a}),`
`,o.jsx(n,{metaOf:r,of:a}),`
`,o.jsx(e.h2,{id:"toolbarselectoption",children:"ToolbarSelectOption"}),`
`,o.jsx(p,{of:c}),`
`,o.jsx(n,{metaOf:r,of:c}),`
`,o.jsx(e.h2,{id:"toolbarseparator",children:"ToolbarSeparator"}),`
`,o.jsx(p,{of:l}),`
`,o.jsx(n,{metaOf:r,of:l}),`
`,o.jsx(e.h2,{id:"toolbarspacer",children:"ToolbarSpacer"}),`
`,o.jsx(p,{of:m}),`
`,o.jsx(n,{metaOf:r,of:m}),`
`,o.jsx(b,{})]})}function lo(t={}){const{wrapper:e}={...h(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(f,{...t})}):f(t)}export{lo as default};
