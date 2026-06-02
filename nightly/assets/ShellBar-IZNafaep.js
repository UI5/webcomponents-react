import{i as e}from"./preload-helper-usAeo7Bx.js";import{Gr as t,Hr as n,Jr as r,Kr as i,Ur as a,Wr as o,Yr as s,lh as c,n as l,qr as u,r as d}from"./iframe-DiigtMRw.js";import{J as f,_ as p,d as m,n as h,o as g,r as _,u as v}from"./blocks-BmtuZiSu.js";import{E as y,b,f as x,t as S,u as C}from"./components-BIrR1ySG.js";import{n as w,t as T}from"./SubcomponentsSection-Da9yr5rF.js";import{AllFeatures as E,Default as D,EmbeddedBackNavigation as O,NonProductiveInstances as k,ProductiveInstances as A,ShellBarBrandingStory as j,TrialExample as M,n as N,t as P}from"./ShellBar.stories-wGBtBsVn.js";var F,I=e((()=>{F=`## Design-Compliant Examples

These examples demonstrate the implementation of design specifications. They primarily illustrate design concepts and mostly do not provide additional functionality. You can reference them to select the appropriate design patterns.
`}));function L(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...f(),...e.components};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(m,{of:P}),`
`,(0,z.jsx)(x,{of:P,since:`0.4.0`}),`
`,(0,z.jsx)(`br`,{}),`
`,(0,z.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,z.jsx)(_,{of:D}),`
`,(0,z.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,z.jsx)(b,{of:D}),`
`,(0,z.jsx)(v,{children:F}),`
`,(0,z.jsx)(t.h3,{id:`all-features`,children:`All Features`}),`
`,(0,z.jsx)(t.p,{children:`A comprehensive ShellBar demonstrating all available features including notifications, search, content items, and profile.`}),`
`,(0,z.jsx)(_,{of:E}),`
`,(0,z.jsx)(t.h3,{id:`embedded-back-navigation`,children:`Embedded Back Navigation`}),`
`,(0,z.jsx)(t.p,{children:`ShellBar with embedded back navigation button in the start area.`}),`
`,(0,z.jsx)(_,{of:O}),`
`,(0,z.jsx)(t.h3,{id:`trial-example`,children:`Trial Example`}),`
`,(0,z.jsx)(t.p,{children:`ShellBar configured for trial environments with trial tags and remaining days indicator.`}),`
`,(0,z.jsx)(_,{of:M}),`
`,(0,z.jsx)(t.h3,{id:`multiple-productive-instances`,children:`Multiple Productive Instances`}),`
`,(0,z.jsx)(t.p,{children:`ShellBar setup for multiple productive system instances with region indicators.`}),`
`,(0,z.jsx)(_,{of:A}),`
`,(0,z.jsx)(t.h3,{id:`multiple-non-productive-instances`,children:`Multiple Non-Productive Instances`}),`
`,(0,z.jsx)(t.p,{children:`ShellBar setup for multiple non-productive system instances with system and region tags.`}),`
`,(0,z.jsx)(_,{of:k}),`
`,(0,z.jsx)(t.h2,{id:`more-examples`,children:`More examples`}),`
`,(0,z.jsx)(t.h3,{id:`open-a-popover-on-shellbaritem-click`,children:`Open a Popover on ShellBarItem click`}),`
`,(0,z.jsxs)(t.p,{children:[`To open a popover with the `,(0,z.jsx)(t.code,{children:`ShellBarItem`}),` you can use the `,(0,z.jsx)(t.code,{children:`detail.targetRef`}),` property of the `,(0,z.jsx)(t.code,{children:`onClick`}),` event.`]}),`
`,(0,z.jsx)(t.pre,{children:(0,z.jsx)(t.code,{className:`language-tsx`,children:`const ShellBarComponent = () => {
  const popoverRef = useRef<PopoverDomRef>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const handleShellBarItemClick: ShellBarItemPropTypes['onClick'] = (e) => {
    popoverRef.current!.opener = e.detail.targetRef;
    setPopoverOpen(true);
  };
  return (
    <>
      <ShellBar>
        <ShellBarItem onClick={handleShellBarItemClick} icon="add" text="add" />
      </ShellBar>
      <Popover
        ref={popoverRef}
        open={popoverOpen}
        onClose={() => {
          setPopoverOpen(false);
        }}
      >
        Hello there!
      </Popover>
    </>
  );
};
`})}),`
`,(0,z.jsx)(t.h3,{id:`shellbar-with-shellbarbranding-slot`,children:`ShellBar with ShellBarBranding slot`}),`
`,(0,z.jsx)(_,{of:j}),`
`,(0,z.jsx)(v,{children:T}),`
`,(0,z.jsx)(t.h2,{id:`shellbaritem`,children:`ShellBarItem`}),`
`,(0,z.jsx)(g,{of:i}),`
`,(0,z.jsx)(h,{hideHTMLPropsNote:!0,exclude:l,of:i}),`
`,(0,z.jsx)(t.h2,{id:`shellbarspacer`,children:`ShellBarSpacer`}),`
`,(0,z.jsx)(g,{of:n}),`
`,(0,z.jsx)(h,{hideHTMLPropsNote:!0,exclude:l,of:n}),`
`,(0,z.jsx)(t.h2,{id:`shellbarsearch-experimental`,children:`ShellBarSearch (experimental)`}),`
`,(0,z.jsx)(g,{of:o}),`
`,(0,z.jsx)(h,{hideHTMLPropsNote:!0,of:o}),`
`,(0,z.jsx)(t.h2,{id:`shellbarbranding-experimental`,children:`ShellBarBranding (experimental)`}),`
`,(0,z.jsx)(g,{of:r}),`
`,(0,z.jsx)(h,{hideHTMLPropsNote:!0,of:r}),`
`,(0,z.jsx)(C,{})]})}function R(e={}){let{wrapper:t}={...f(),...e.components};return t?(0,z.jsx)(t,{...e,children:(0,z.jsx)(L,{...e})}):L(e)}var z;e((()=>{z=c(),y(),S(),w(),I(),p(),u(),a(),t(),s(),N(),d()}))();export{R as default};