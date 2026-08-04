import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./ToolbarButton-DlQFk8FQ.js";import{n as i,t as a}from"./ToolbarItem-CM2uCC9W.js";import{i as o,r as s}from"./react-qN2cStNd.js";import{_ as c,d as l,o as u,r as d,u as f}from"./blocks-BfW7DiPJ.js";import{S as p,b as m,f as h,t as g,u as _}from"./components-B4vCkQFi.js";import{n as v,t as y}from"./SubcomponentsSection-Kv79Q7K7.js";import{a as b,c as x,d as S,f as C,i as w,l as T,n as E,o as D,p as O,r as k,s as A,t as j,u as M}from"./Toolbar.stories-DCrgqxbc.js";function N(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...o(),...e.components};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(l,{of:k}),`
`,(0,F.jsx)(h,{of:k,since:`1.19.0`}),`
`,(0,F.jsx)(`br`,{}),`
`,(0,F.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,F.jsx)(d,{of:j}),`
`,(0,F.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,F.jsx)(m,{of:j}),`
`,(0,F.jsx)(t.h2,{id:`toolbaritem`,children:`ToolbarItem`}),`
`,(0,F.jsx)(t.p,{children:`ToolbarItem wrapper used to add any component to Toolbar.`}),`
`,(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.strong,{children:`Note:`}),` To display the radio buttons and checkboxes in a column in the overflow popover, the `,(0,F.jsx)(t.code,{children:`toolbar-item-group`}),` CSS class is used:`]}),`
`,(0,F.jsx)(t.pre,{children:(0,F.jsx)(t.code,{className:`language-css`,children:`/* Use :state(overflowed) to style items differently when in overflow popover */
[ui5-toolbar-item]:state(overflowed) .toolbar-item-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
`})}),`
`,(0,F.jsx)(d,{of:w}),`
`,(0,F.jsx)(t.h2,{id:`opening-popovers-via-toolbarbutton`,children:`Opening Popovers via ToolbarButton`}),`
`,(0,F.jsxs)(t.p,{children:[`Since the `,(0,F.jsx)(t.code,{children:`ToolbarButton`}),` is an `,(0,F.jsx)(t.a,{href:`?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components`,children:`abstract UI5 web component`}),`, the opener of the `,(0,F.jsx)(t.code,{children:`Popover`}),` needs the DOM reference of the actual element to position the popover correctly.
Starting with v2.5.0 of `,(0,F.jsx)(t.code,{children:`@ui5/webcomponents(-react)`}),`, the `,(0,F.jsx)(t.code,{children:`detail`}),` property of the `,(0,F.jsx)(t.code,{children:`ToolbarButton`}),`'s click handler now includes a `,(0,F.jsx)(t.code,{children:`targetRef`}),` property, which can be used as the opener.`]}),`
`,(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.strong,{children:`Note:`}),` To prevent the overflow popover from closing when the opener `,(0,F.jsx)(t.code,{children:`ToolbarButton`}),` of the Popover is clicked, you can call `,(0,F.jsx)(t.code,{children:`event.preventDefault()`}),` in the `,(0,F.jsx)(t.code,{children:`onClick`}),` event handler.`]}),`
`,(0,F.jsx)(d,{of:E}),`
`,(0,F.jsx)(t.h3,{id:`example-code`,children:`Example Code`}),`
`,(0,F.jsx)(t.pre,{children:(0,F.jsx)(t.code,{className:`language-tsx`,children:`function ToolbarWithPopover() {
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
`,(0,F.jsx)(f,{children:y}),`
`,(0,F.jsx)(t.h2,{id:`toolbaritem-1`,children:`ToolbarItem`}),`
`,(0,F.jsxs)(t.p,{children:[(0,F.jsx)(u,{of:a}),`"`]}),`
`,(0,F.jsx)(p,{metaOf:k,of:a}),`
`,(0,F.jsx)(t.h2,{id:`toolbarbutton`,children:`ToolbarButton`}),`
`,(0,F.jsx)(u,{of:r}),`
`,(0,F.jsx)(p,{metaOf:k,of:r}),`
`,(0,F.jsx)(t.h2,{id:`toolbarselect`,children:`ToolbarSelect`}),`
`,(0,F.jsx)(u,{of:C}),`
`,(0,F.jsx)(p,{metaOf:k,of:C}),`
`,(0,F.jsx)(t.h2,{id:`toolbarselectoption`,children:`ToolbarSelectOption`}),`
`,(0,F.jsx)(u,{of:M}),`
`,(0,F.jsx)(p,{metaOf:k,of:M}),`
`,(0,F.jsx)(t.h2,{id:`toolbarseparator`,children:`ToolbarSeparator`}),`
`,(0,F.jsx)(u,{of:x}),`
`,(0,F.jsx)(p,{metaOf:k,of:x}),`
`,(0,F.jsx)(t.h2,{id:`toolbarspacer`,children:`ToolbarSpacer`}),`
`,(0,F.jsx)(u,{of:D}),`
`,(0,F.jsx)(p,{metaOf:k,of:D}),`
`,(0,F.jsx)(_,{})]})}function P(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,F.jsx)(t,{...e,children:(0,F.jsx)(N,{...e})}):N(e)}var F;function I(){return(I=e((()=>{F=t(),s(),g(),v(),c(),n(),i(),O(),S(),T(),A(),b()})))()}I();export{P as default};