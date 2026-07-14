import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./jsx-runtime-CFwixLRt.js";import{C as n,D as r,E as i,O as a,S as o,T as s,w as c,x as l}from"./webComponents-C4mP-G3u.js";import{n as u,r as d}from"./iframe-CC_5aWpT.js";import{i as f}from"./react-DnC3AmCq.js";import{E as p,b as m,f as h,t as g,u as _}from"./components-DU6ju2ns.js";import{_ as v,d as y,n as b,o as x,r as S,u as C}from"./blocks-w5xcIKMW.js";import{n as w,t as T}from"./SubcomponentsSection-NAzYiQqQ.js";import{AllFeatures as E,Default as D,EmbeddedBackNavigation as O,NonProductiveInstances as k,ProductiveInstances as A,ShellBarBrandingStory as j,TrialExample as M,n as N,t as P}from"./ShellBar.stories-BdZ-e7AT.js";var F,I=e((()=>{F=`## Design-Compliant Examples

These examples demonstrate the implementation of design specifications. They primarily illustrate design concepts and mostly do not provide additional functionality. You can reference them to select the appropriate design patterns.
`}));function L(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...f(),...e.components};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(y,{of:P}),`
`,(0,z.jsx)(h,{of:P,since:`0.4.0`}),`
`,(0,z.jsx)(`br`,{}),`
`,(0,z.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,z.jsx)(S,{of:D}),`
`,(0,z.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,z.jsx)(m,{of:D}),`
`,(0,z.jsx)(C,{children:F}),`
`,(0,z.jsx)(t.h3,{id:`all-features`,children:`All Features`}),`
`,(0,z.jsx)(t.p,{children:`A comprehensive ShellBar demonstrating all available features including notifications, search, content items, and profile.`}),`
`,(0,z.jsx)(S,{of:E}),`
`,(0,z.jsx)(t.h3,{id:`embedded-back-navigation`,children:`Embedded Back Navigation`}),`
`,(0,z.jsx)(t.p,{children:`ShellBar with embedded back navigation button in the start area.`}),`
`,(0,z.jsx)(S,{of:O}),`
`,(0,z.jsx)(t.h3,{id:`trial-example`,children:`Trial Example`}),`
`,(0,z.jsx)(t.p,{children:`ShellBar configured for trial environments with trial tags and remaining days indicator.`}),`
`,(0,z.jsx)(S,{of:M}),`
`,(0,z.jsx)(t.h3,{id:`multiple-productive-instances`,children:`Multiple Productive Instances`}),`
`,(0,z.jsx)(t.p,{children:`ShellBar setup for multiple productive system instances with region indicators.`}),`
`,(0,z.jsx)(S,{of:A}),`
`,(0,z.jsx)(t.h3,{id:`multiple-non-productive-instances`,children:`Multiple Non-Productive Instances`}),`
`,(0,z.jsx)(t.p,{children:`ShellBar setup for multiple non-productive system instances with system and region tags.`}),`
`,(0,z.jsx)(S,{of:k}),`
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
`,(0,z.jsx)(S,{of:j}),`
`,(0,z.jsx)(C,{children:T}),`
`,(0,z.jsx)(t.h2,{id:`shellbaritem`,children:`ShellBarItem`}),`
`,(0,z.jsx)(x,{of:s}),`
`,(0,z.jsx)(b,{hideHTMLPropsNote:!0,exclude:u,of:s}),`
`,(0,z.jsx)(t.h2,{id:`shellbarspacer`,children:`ShellBarSpacer`}),`
`,(0,z.jsx)(x,{of:l}),`
`,(0,z.jsx)(b,{hideHTMLPropsNote:!0,exclude:u,of:l}),`
`,(0,z.jsx)(t.h2,{id:`shellbarsearch-experimental`,children:`ShellBarSearch (experimental)`}),`
`,(0,z.jsx)(x,{of:n}),`
`,(0,z.jsx)(b,{hideHTMLPropsNote:!0,of:n}),`
`,(0,z.jsx)(t.h2,{id:`shellbarbranding-experimental`,children:`ShellBarBranding (experimental)`}),`
`,(0,z.jsx)(x,{of:r}),`
`,(0,z.jsx)(b,{hideHTMLPropsNote:!0,of:r}),`
`,(0,z.jsx)(_,{})]})}function R(e={}){let{wrapper:t}={...f(),...e.components};return t?(0,z.jsx)(t,{...e,children:(0,z.jsx)(L,{...e})}):L(e)}var z;e((()=>{z=t(),p(),g(),w(),I(),v(),i(),o(),c(),a(),N(),d()}))();export{R as default};