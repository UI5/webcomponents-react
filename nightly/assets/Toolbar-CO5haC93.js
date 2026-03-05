import{j as o}from"./iframe-rmPOfAEk.js";import{useMDXComponents as f}from"./index-OsAdl3Cq.js";import{A as t}from"./ArgTypesWithNote-BB-J8bsd.js";import{C as x}from"./ControlsWithNote-D_cpWhLk.js";import{D as j}from"./DocsHeader-DAYxAS3q.js";import{F as b}from"./Footer-CYSIA4uy.js";import"./CommandsAndQueries-DjjDgYFy.js";import"./PageNotFound-DRbJUQ3U.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as i,a as T,D as p}from"./blocks-v63_T-Iu.js";import{C as r,D as s,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-9woW6Y_x.js";import{T as d}from"./index-BKsDCUMj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D5lEazYO.js";import"./information-Cw3g4evs.js";import"./sys-enter-2-DOLwXwFm.js";import"./alert-Bcs9t0my.js";import"./Tag-OMAKRCyN.js";import"./index-NT5PBuFY.js";import"./index-B-iV9gR7.js";import"./Link-CL9BwqUh.js";import"./copy-Cu1XAvBt.js";import"./copy-DYpkXBzp.js";import"./GitHub-Mark-CukNb3-C.js";import"./TableOfContent-BjAe7E2K.js";import"./index-Xi7qAWgh.js";import"./index-CE8iCloJ.js";import"./index-g6c80OWk.js";import"./index-DUTk5K7T.js";import"./index-DTuZFVSS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BJhSo9M3.js";import"./addCustomCSSWithScoping-CZ8_VPk_.js";import"./Illustrations-DRh478fB.js";import"./i18n-defaults-C7ICj5-E.js";import"./Select-DdViIcLL.js";import"./InvisibleMessage-ETmXadbm.js";import"./slim-arrow-down-oHn4D4RL.js";import"./slim-arrow-down-Bl1bEFWF.js";import"./ResponsivePopoverCommon.css-GT00HLHH.js";import"./ValueStateMessage.css-RtBMBlvI.js";import"./Option-Bad0_Io9.js";import"./ListItemBaseTemplate-p1mZhZvu.js";import"./ToolbarButton-BWmk0V37.js";import"./overflow-CG-MGXYw.js";import"./ToolbarSpacer-DkdFr9Tf.js";function h(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...f(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
`,o.jsx(j,{of:r,since:"1.19.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(i,{of:s}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(x,{of:s}),`
`,o.jsx(e.h2,{id:"opening-popovers-via-toolbarbutton",children:"Opening Popovers via ToolbarButton"}),`
`,o.jsxs(e.p,{children:["Since the ",o.jsx(e.code,{children:"ToolbarButton"})," is an ",o.jsx(e.a,{href:"?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components",children:"abstract UI5 web component"}),", the opener of the ",o.jsx(e.code,{children:"Popover"}),` needs the DOM reference of the actual element to position the popover correctly.
Starting with v2.5.0 of `,o.jsx(e.code,{children:"@ui5/webcomponents(-react)"}),", the ",o.jsx(e.code,{children:"detail"})," property of the ",o.jsx(e.code,{children:"ToolbarButton"}),"'s click handler now includes a ",o.jsx(e.code,{children:"targetRef"})," property, which can be used as the opener."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Note:"})," To prevent the overflow popover from closing when the opener ",o.jsx(e.code,{children:"ToolbarButton"})," of the Popover is clicked, you can call ",o.jsx(e.code,{children:"event.preventDefault()"})," in the ",o.jsx(e.code,{children:"onClick"})," event handler."]}),`
`,o.jsx(i,{of:O}),`
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
`,o.jsx(T,{children:u}),`
`,o.jsx(e.h2,{id:"toolbarbutton",children:"ToolbarButton"}),`
`,o.jsx(p,{of:d}),`
`,o.jsx(t,{metaOf:r,of:d}),`
`,o.jsx(e.h2,{id:"toolbarselect",children:"ToolbarSelect"}),`
`,o.jsx(p,{of:a}),`
`,o.jsx(t,{metaOf:r,of:a}),`
`,o.jsx(e.h2,{id:"toolbarselectoption",children:"ToolbarSelectOption"}),`
`,o.jsx(p,{of:c}),`
`,o.jsx(t,{metaOf:r,of:c}),`
`,o.jsx(e.h2,{id:"toolbarseparator",children:"ToolbarSeparator"}),`
`,o.jsx(p,{of:l}),`
`,o.jsx(t,{metaOf:r,of:l}),`
`,o.jsx(e.h2,{id:"toolbarspacer",children:"ToolbarSpacer"}),`
`,o.jsx(p,{of:m}),`
`,o.jsx(t,{metaOf:r,of:m}),`
`,o.jsx(b,{})]})}function xo(n={}){const{wrapper:e}={...f(),...n.components};return e?o.jsx(e,{...n,children:o.jsx(h,{...n})}):h(n)}export{xo as default};
