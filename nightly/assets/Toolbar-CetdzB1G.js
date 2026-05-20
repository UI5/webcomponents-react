import{i as e}from"./preload-helper-DbRxMUml.js";import{$ as t,Fm as n,cn as r,fn as i,mu as a,nn as o,on as s,un as c}from"./iframe-Ber2Q5IB.js";import{J as l,_ as u,d,o as f,r as p,u as m}from"./blocks-BatZQ7lu.js";import{_ as h,m as g,o as _,p as v,s as y,t as b}from"./components-CqT1y0bs.js";import{n as x,t as S}from"./SubcomponentsSection-B_Fcxgn5.js";import{Default as C,OpenPopover as w,WithToolbarItem as T,n as E,t as D}from"./Toolbar.stories-vzETvNZ4.js";function O(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...l(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(d,{of:D}),`
`,(0,A.jsx)(y,{of:D,since:`1.19.0`}),`
`,(0,A.jsx)(`br`,{}),`
`,(0,A.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,A.jsx)(p,{of:C}),`
`,(0,A.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,A.jsx)(v,{of:C}),`
`,(0,A.jsx)(t.h2,{id:`toolbaritem`,children:`ToolbarItem`}),`
`,(0,A.jsx)(t.p,{children:`ToolbarItem wrapper used to add any component to Toolbar.`}),`
`,(0,A.jsxs)(t.p,{children:[(0,A.jsx)(t.strong,{children:`Note:`}),` To display the radio buttons and checkboxes in a column in the overflow popover, the `,(0,A.jsx)(t.code,{children:`toolbar-item-group`}),` CSS class is used:`]}),`
`,(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{className:`language-css`,children:`/* Use :state(overflowed) to style items differently when in overflow popover */
[ui5-toolbar-item]:state(overflowed) .toolbar-item-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
`})}),`
`,(0,A.jsx)(p,{of:T}),`
`,(0,A.jsx)(t.h2,{id:`opening-popovers-via-toolbarbutton`,children:`Opening Popovers via ToolbarButton`}),`
`,(0,A.jsxs)(t.p,{children:[`Since the `,(0,A.jsx)(t.code,{children:`ToolbarButton`}),` is an `,(0,A.jsx)(t.a,{href:`?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components`,children:`abstract UI5 web component`}),`, the opener of the `,(0,A.jsx)(t.code,{children:`Popover`}),` needs the DOM reference of the actual element to position the popover correctly.
Starting with v2.5.0 of `,(0,A.jsx)(t.code,{children:`@ui5/webcomponents(-react)`}),`, the `,(0,A.jsx)(t.code,{children:`detail`}),` property of the `,(0,A.jsx)(t.code,{children:`ToolbarButton`}),`'s click handler now includes a `,(0,A.jsx)(t.code,{children:`targetRef`}),` property, which can be used as the opener.`]}),`
`,(0,A.jsxs)(t.p,{children:[(0,A.jsx)(t.strong,{children:`Note:`}),` To prevent the overflow popover from closing when the opener `,(0,A.jsx)(t.code,{children:`ToolbarButton`}),` of the Popover is clicked, you can call `,(0,A.jsx)(t.code,{children:`event.preventDefault()`}),` in the `,(0,A.jsx)(t.code,{children:`onClick`}),` event handler.`]}),`
`,(0,A.jsx)(p,{of:w}),`
`,(0,A.jsx)(t.h3,{id:`example-code`,children:`Example Code`}),`
`,(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{className:`language-tsx`,children:`function ToolbarWithPopover() {
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
`,(0,A.jsx)(t.h2,{id:`toolbaritem-1`,children:`ToolbarItem`}),`
`,(0,A.jsxs)(t.p,{children:[(0,A.jsx)(f,{of:i}),`"`]}),`
`,(0,A.jsx)(g,{metaOf:D,of:i}),`
`,(0,A.jsx)(t.h2,{id:`toolbarbutton`,children:`ToolbarButton`}),`
`,(0,A.jsx)(f,{of:a}),`
`,(0,A.jsx)(g,{metaOf:D,of:a}),`
`,(0,A.jsx)(t.h2,{id:`toolbarselect`,children:`ToolbarSelect`}),`
`,(0,A.jsx)(f,{of:c}),`
`,(0,A.jsx)(g,{metaOf:D,of:c}),`
`,(0,A.jsx)(t.h2,{id:`toolbarselectoption`,children:`ToolbarSelectOption`}),`
`,(0,A.jsx)(f,{of:r}),`
`,(0,A.jsx)(g,{metaOf:D,of:r}),`
`,(0,A.jsx)(t.h2,{id:`toolbarseparator`,children:`ToolbarSeparator`}),`
`,(0,A.jsx)(f,{of:s}),`
`,(0,A.jsx)(g,{metaOf:D,of:s}),`
`,(0,A.jsx)(t.h2,{id:`toolbarspacer`,children:`ToolbarSpacer`}),`
`,(0,A.jsx)(f,{of:o}),`
`,(0,A.jsx)(g,{metaOf:D,of:o}),`
`,(0,A.jsx)(_,{})]})}function k(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,A.jsx)(t,{...e,children:(0,A.jsx)(O,{...e})}):O(e)}var A;e((()=>{A=n(),h(),b(),x(),u(),t(),E()}))();export{k as default};