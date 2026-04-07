import{n as e}from"./chunk-zsgVPwQN.js";import{Br as t,Fr as n,Ir as r,Jm as i,Lr as a,Pr as o,Rr as s,Vr as c,n as l,r as u,zr as d}from"./iframe-DurzO16q.js";import{r as f}from"./react-C0no7Igm.js";import{_ as p,o as m,p as h,s as g,t as _}from"./components-BQLTg4BW.js";import{_ as v,d as y,n as b,o as x,r as S,u as C}from"./blocks-BNthmqCv.js";import{n as w,t as T}from"./SubcomponentsSection-B85wrRHJ.js";import{AllFeatures as E,Default as D,EmbeddedBackNavigation as O,NonProductiveInstances as k,ProductiveInstances as A,ShellBarBrandingStory as j,TrialExample as M,n as N,t as P}from"./ShellBar.stories-h7gsnoKq.js";var F,I=e((()=>{F=`## Design-Compliant Examples

These examples demonstrate the implementation of design specifications. They primarily illustrate design concepts and mostly do not provide additional functionality. You can reference them to select the appropriate design patterns.
`}));function L(e){let n={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...f(),...e.components};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(y,{of:P}),`
`,(0,z.jsx)(g,{of:P,since:`0.4.0`}),`
`,(0,z.jsx)(`br`,{}),`
`,(0,z.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,z.jsx)(S,{of:D}),`
`,(0,z.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,z.jsx)(h,{of:D}),`
`,(0,z.jsx)(C,{children:F}),`
`,(0,z.jsx)(n.h3,{id:`all-features`,children:`All Features`}),`
`,(0,z.jsx)(n.p,{children:`A comprehensive ShellBar demonstrating all available features including notifications, search, content items, and profile.`}),`
`,(0,z.jsx)(S,{of:E}),`
`,(0,z.jsx)(n.h3,{id:`embedded-back-navigation`,children:`Embedded Back Navigation`}),`
`,(0,z.jsx)(n.p,{children:`ShellBar with embedded back navigation button in the start area.`}),`
`,(0,z.jsx)(S,{of:O}),`
`,(0,z.jsx)(n.h3,{id:`trial-example`,children:`Trial Example`}),`
`,(0,z.jsx)(n.p,{children:`ShellBar configured for trial environments with trial tags and remaining days indicator.`}),`
`,(0,z.jsx)(S,{of:M}),`
`,(0,z.jsx)(n.h3,{id:`multiple-productive-instances`,children:`Multiple Productive Instances`}),`
`,(0,z.jsx)(n.p,{children:`ShellBar setup for multiple productive system instances with region indicators.`}),`
`,(0,z.jsx)(S,{of:A}),`
`,(0,z.jsx)(n.h3,{id:`multiple-non-productive-instances`,children:`Multiple Non-Productive Instances`}),`
`,(0,z.jsx)(n.p,{children:`ShellBar setup for multiple non-productive system instances with system and region tags.`}),`
`,(0,z.jsx)(S,{of:k}),`
`,(0,z.jsx)(n.h2,{id:`more-examples`,children:`More examples`}),`
`,(0,z.jsx)(n.h3,{id:`open-a-popover-on-shellbaritem-click`,children:`Open a Popover on ShellBarItem click`}),`
`,(0,z.jsxs)(n.p,{children:[`To open a popover with the `,(0,z.jsx)(n.code,{children:`ShellBarItem`}),` you can use the `,(0,z.jsx)(n.code,{children:`detail.targetRef`}),` property of the `,(0,z.jsx)(n.code,{children:`onClick`}),` event.`]}),`
`,(0,z.jsx)(n.pre,{children:(0,z.jsx)(n.code,{className:`language-tsx`,children:`const ShellBarComponent = () => {
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
`,(0,z.jsx)(n.h3,{id:`shellbar-with-shellbarbranding-slot`,children:`ShellBar with ShellBarBranding slot`}),`
`,(0,z.jsx)(S,{of:j}),`
`,(0,z.jsx)(C,{children:T}),`
`,(0,z.jsx)(n.h2,{id:`shellbaritem`,children:`ShellBarItem`}),`
`,(0,z.jsx)(x,{of:s}),`
`,(0,z.jsx)(b,{hideHTMLPropsNote:!0,exclude:l,of:s}),`
`,(0,z.jsx)(n.h2,{id:`shellbarspacer`,children:`ShellBarSpacer`}),`
`,(0,z.jsx)(x,{of:o}),`
`,(0,z.jsx)(b,{hideHTMLPropsNote:!0,exclude:l,of:o}),`
`,(0,z.jsx)(n.h2,{id:`shellbarsearch-experimental`,children:`ShellBarSearch (experimental)`}),`
`,(0,z.jsx)(x,{of:r}),`
`,(0,z.jsx)(b,{hideHTMLPropsNote:!0,of:r}),`
`,(0,z.jsx)(n.h2,{id:`shellbarbranding-experimental`,children:`ShellBarBranding (experimental)`}),`
`,(0,z.jsx)(x,{of:t}),`
`,(0,z.jsx)(b,{hideHTMLPropsNote:!0,of:t}),`
`,(0,z.jsx)(m,{})]})}function R(e={}){let{wrapper:t}={...f(),...e.components};return t?(0,z.jsx)(t,{...e,children:(0,z.jsx)(L,{...e})}):L(e)}var z;e((()=>{z=i(),p(),_(),w(),I(),v(),d(),n(),a(),c(),N(),u()}))();export{R as default};