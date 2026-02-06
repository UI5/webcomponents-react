import{j as e,B as s}from"./iframe-CptD6jcI.js";import{useMDXComponents as f}from"./index-fCXI9bYA.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-BIcH59f6.js";import"./Tag-BGUo9GB2.js";import"./index-iKMFJQaw.js";import{C as u}from"./ControlsWithNote-e4fYtvzI.js";import{D as S}from"./DocsHeader-DDhS7rer.js";import{F as v}from"./CommandsAndQueries-DdKyoCdZ.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-Bd-K2j9Z.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-B_PpX9ug.js";import"./preload-helper-PPVm8Dsz.js";import"./information-_8TOion-.js";import"./sys-enter-2-etHRmL56.js";import"./alert-DCc-ugqC.js";import"./index-DF7XtlGw.js";import"./index-Bhv4kUG7.js";import"./Link-BtaWbEJj.js";import"./copy-D4qvgl1G.js";import"./copy-B9_rc4hl.js";import"./GitHub-Mark-DukNVPVs.js";import"./TableOfContent-BtRD7nAW.js";import"./index-CEYNy4qZ.js";import"./index-CBzPckl1.js";import"./index-CDMlRbU-.js";import"./index-B4fjS4Ci.js";import"./index-DUbGwyGv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BbqdlCgb.js";import"./addCustomCSSWithScoping-CNZcQBPm.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./Search-BLHty8wZ.js";import"./Option-B6yV-Jjr.js";import"./ListItemBaseTemplate-BppEr7SM.js";import"./Select-Ctxh64Gj.js";import"./InvisibleMessage-F5htpLuT.js";import"./slim-arrow-down-BhV5Za_4.js";import"./slim-arrow-down-CjyrJWSM.js";import"./ResponsivePopoverCommon.css-rLzLw65f.js";import"./ValueStateMessage.css-DacNSHpQ.js";import"./search-Bj4u08M3.js";import"./Input-uZgu1ujO.js";import"./Suggestions.css-B1EVfhUM.js";import"./SuggestionItem-C3L5PqbA.js";import"./i18n-defaults-Begitp65.js";import"./Person-Bk5r7PMP.js";import"./index-O4n5RQLI.js";import"./less-C9e-TmeG.js";import"./index-Cnll0ew3.js";import"./ListItemStandard-DYou9xin.js";import"./ButtonBadge-PtpVFlK4.js";import"./overflow-CzhoadNP.js";const k=`## Design-Compliant Examples

These examples demonstrate the implementation of design specifications. They primarily illustrate design concepts and mostly do not provide additional functionality. You can reference them to select the appropriate design patterns.
`;function x(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...f(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:d}),`
`,e.jsx(S,{of:d,since:"0.4.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(u,{of:h}),`
`,e.jsx(a,{children:k}),`
`,e.jsx(n.h3,{id:"all-features",children:"All Features"}),`
`,e.jsx(n.p,{children:"A comprehensive ShellBar demonstrating all available features including notifications, search, content items, and profile."}),`
`,e.jsx(r,{of:g}),`
`,e.jsx(n.h3,{id:"embedded-back-navigation",children:"Embedded Back Navigation"}),`
`,e.jsx(n.p,{children:"ShellBar with embedded back navigation button in the start area."}),`
`,e.jsx(r,{of:b}),`
`,e.jsx(n.h3,{id:"trial-example",children:"Trial Example"}),`
`,e.jsx(n.p,{children:"ShellBar configured for trial environments with trial tags and remaining days indicator."}),`
`,e.jsx(r,{of:P}),`
`,e.jsx(n.h3,{id:"multiple-productive-instances",children:"Multiple Productive Instances"}),`
`,e.jsx(n.p,{children:"ShellBar setup for multiple productive system instances with region indicators."}),`
`,e.jsx(r,{of:C}),`
`,e.jsx(n.h3,{id:"multiple-non-productive-instances",children:"Multiple Non-Productive Instances"}),`
`,e.jsx(n.p,{children:"ShellBar setup for multiple non-productive system instances with system and region tags."}),`
`,e.jsx(r,{of:y}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(n.h3,{id:"open-a-popover-on-shellbaritem-click",children:"Open a Popover on ShellBarItem click"}),`
`,e.jsxs(n.p,{children:["To open a popover with the ",e.jsx(n.code,{children:"ShellBarItem"})," you can use the ",e.jsx(n.code,{children:"detail.targetRef"})," property of the ",e.jsx(n.code,{children:"onClick"})," event."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const ShellBarComponent = () => {
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
`,e.jsx(n.h3,{id:"shellbar-with-shellbarbranding-slot",children:"ShellBar with ShellBarBranding slot"}),`
`,e.jsx(r,{of:M}),`
`,e.jsx(a,{children:B}),`
`,e.jsx(n.h2,{id:"shellbaritem",children:"ShellBarItem"}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,exclude:s,of:l}),`
`,e.jsx(n.h2,{id:"shellbarspacer",children:"ShellBarSpacer"}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,exclude:s,of:p}),`
`,e.jsx(n.h2,{id:"shellbarsearch-experimental",children:"ShellBarSearch (experimental)"}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,of:m}),`
`,e.jsx(n.h2,{id:"shellbarbranding-experimental",children:"ShellBarBranding (experimental)"}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,of:c}),`
`,e.jsx(v,{})]})}function Me(o={}){const{wrapper:n}={...f(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(x,{...o})}):x(o)}export{Me as default};
