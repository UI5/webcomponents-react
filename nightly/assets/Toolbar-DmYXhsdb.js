import{i as e}from"./preload-helper-usAeo7Bx.js";import{_n as t,hn as n,it as r,lh as i,ln as a,pn as o,wu as s,yn as c}from"./iframe-k3VOpMSv.js";import{J as l,_ as u,d,o as f,r as p,u as m}from"./blocks-B7N1S-RB.js";import{E as h,S as g,b as _,f as v,t as y,u as b}from"./components-Chyde1jT.js";import{n as x,t as S}from"./SubcomponentsSection-Da9yr5rF.js";import{Default as C,OpenPopover as w,WithToolbarItem as T,n as E,t as D}from"./Toolbar.stories-DYu7WyNQ.js";function O(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...l(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(d,{of:D}),`
`,(0,A.jsx)(v,{of:D,since:`1.19.0`}),`
`,(0,A.jsx)(`br`,{}),`
`,(0,A.jsx)(r.h2,{id:`example`,children:`Example`}),`
`,(0,A.jsx)(p,{of:C}),`
`,(0,A.jsx)(r.h2,{id:`properties`,children:`Properties`}),`
`,(0,A.jsx)(_,{of:C}),`
`,(0,A.jsx)(r.h2,{id:`toolbaritem`,children:`ToolbarItem`}),`
`,(0,A.jsx)(r.p,{children:`ToolbarItem wrapper used to add any component to Toolbar.`}),`
`,(0,A.jsxs)(r.p,{children:[(0,A.jsx)(r.strong,{children:`Note:`}),` To display the radio buttons and checkboxes in a column in the overflow popover, the `,(0,A.jsx)(r.code,{children:`toolbar-item-group`}),` CSS class is used:`]}),`
`,(0,A.jsx)(r.pre,{children:(0,A.jsx)(r.code,{className:`language-css`,children:`/* Use :state(overflowed) to style items differently when in overflow popover */
[ui5-toolbar-item]:state(overflowed) .toolbar-item-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
`})}),`
`,(0,A.jsx)(p,{of:T}),`
`,(0,A.jsx)(r.h2,{id:`opening-popovers-via-toolbarbutton`,children:`Opening Popovers via ToolbarButton`}),`
`,(0,A.jsxs)(r.p,{children:[`Since the `,(0,A.jsx)(r.code,{children:`ToolbarButton`}),` is an `,(0,A.jsx)(r.a,{href:`?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components`,children:`abstract UI5 web component`}),`, the opener of the `,(0,A.jsx)(r.code,{children:`Popover`}),` needs the DOM reference of the actual element to position the popover correctly.
Starting with v2.5.0 of `,(0,A.jsx)(r.code,{children:`@ui5/webcomponents(-react)`}),`, the `,(0,A.jsx)(r.code,{children:`detail`}),` property of the `,(0,A.jsx)(r.code,{children:`ToolbarButton`}),`'s click handler now includes a `,(0,A.jsx)(r.code,{children:`targetRef`}),` property, which can be used as the opener.`]}),`
`,(0,A.jsxs)(r.p,{children:[(0,A.jsx)(r.strong,{children:`Note:`}),` To prevent the overflow popover from closing when the opener `,(0,A.jsx)(r.code,{children:`ToolbarButton`}),` of the Popover is clicked, you can call `,(0,A.jsx)(r.code,{children:`event.preventDefault()`}),` in the `,(0,A.jsx)(r.code,{children:`onClick`}),` event handler.`]}),`
`,(0,A.jsx)(p,{of:w}),`
`,(0,A.jsx)(r.h3,{id:`example-code`,children:`Example Code`}),`
`,(0,A.jsx)(r.pre,{children:(0,A.jsx)(r.code,{className:`language-tsx`,children:`function ToolbarWithPopover() {
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
`,(0,A.jsx)(m,{children:S}),`
`,(0,A.jsx)(r.h2,{id:`toolbaritem-1`,children:`ToolbarItem`}),`
`,(0,A.jsxs)(r.p,{children:[(0,A.jsx)(f,{of:c}),`"`]}),`
`,(0,A.jsx)(g,{metaOf:D,of:c}),`
`,(0,A.jsx)(r.h2,{id:`toolbarbutton`,children:`ToolbarButton`}),`
`,(0,A.jsx)(f,{of:s}),`
`,(0,A.jsx)(g,{metaOf:D,of:s}),`
`,(0,A.jsx)(r.h2,{id:`toolbarselect`,children:`ToolbarSelect`}),`
`,(0,A.jsx)(f,{of:t}),`
`,(0,A.jsx)(g,{metaOf:D,of:t}),`
`,(0,A.jsx)(r.h2,{id:`toolbarselectoption`,children:`ToolbarSelectOption`}),`
`,(0,A.jsx)(f,{of:n}),`
`,(0,A.jsx)(g,{metaOf:D,of:n}),`
`,(0,A.jsx)(r.h2,{id:`toolbarseparator`,children:`ToolbarSeparator`}),`
`,(0,A.jsx)(f,{of:o}),`
`,(0,A.jsx)(g,{metaOf:D,of:o}),`
`,(0,A.jsx)(r.h2,{id:`toolbarspacer`,children:`ToolbarSpacer`}),`
`,(0,A.jsx)(f,{of:a}),`
`,(0,A.jsx)(g,{metaOf:D,of:a}),`
`,(0,A.jsx)(b,{})]})}function k(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,A.jsx)(t,{...e,children:(0,A.jsx)(O,{...e})}):O(e)}var A;e((()=>{A=i(),h(),y(),x(),u(),r(),E()}))();export{k as default};