import{j as o}from"./iframe-DYduXZhN.js";import{useMDXComponents as h}from"./index-Ci2-DdjO.js";import{A as n}from"./ArgTypesWithNote-DK7FwOQr.js";import{C as x}from"./ControlsWithNote-zRR9InYP.js";import{D as j}from"./DocsHeader-C05AbQAg.js";import{F as b}from"./CommandsAndQueries-B9zetcQ0.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-D9jMBEgy.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-B_mTl6Wb.js";import{T as d}from"./index-C1s1oW9G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BOwVehE_.js";import"./information-B4rZhRQI.js";import"./sys-enter-2-DdBtSqFS.js";import"./alert-Cbu3hZ-F.js";import"./Tag-DIRdIcZz.js";import"./index-DKd7eJ-2.js";import"./index-C__H6VdM.js";import"./Link-BLFGRSbE.js";import"./copy-P_NWQCS6.js";import"./copy-CkIF2sdc.js";import"./GitHub-Mark-CU_qsXHg.js";import"./TableOfContent-DYx4HAfY.js";import"./index-Cz134k4C.js";import"./index-9BFlmr8a.js";import"./index-BEkPqhUo.js";import"./index-BT55sXhr.js";import"./index-CrQhdGHw.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-tYCFSQM4.js";import"./addCustomCSSWithScoping-BvPW-C09.js";import"./Select-B59U1EMA.js";import"./InvisibleMessage-CT9yNbI0.js";import"./slim-arrow-down-BYh391LH.js";import"./slim-arrow-down-H6l6KWk5.js";import"./ResponsivePopoverCommon.css-5MnX9a2f.js";import"./ValueStateMessage.css-CRVtIysz.js";import"./Option-Bong0I0_.js";import"./ListItemBaseTemplate-CAPQp5OP.js";import"./ToolbarButton-Bz1ondrP.js";import"./overflow-CGcxIo4a.js";import"./ToolbarSpacer-evN_nOjs.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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
