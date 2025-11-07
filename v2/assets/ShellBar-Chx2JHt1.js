import{j as e,e as s}from"./iframe-Dt3EMGkV.js";import{useMDXComponents as f}from"./index-B20WHrxF.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-BHc609zj.js";import"./Tag-BlFr4TrL.js";import"./index-4o5lIxTZ.js";import{C as u}from"./ControlsWithNote-C8ZAtGvJ.js";import{D as S}from"./DocsHeader-BFCSvIjI.js";import{F as v}from"./CommandsAndQueries-B8G4x6Z0.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-mPJowSmx.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-C6MgS36Z.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CdIvcuNT.js";import"./sys-enter-2-DUO5Ca52.js";import"./alert-AiSO8uTO.js";import"./index-BTxuEF3n.js";import"./index-B13Eko7E.js";import"./Link-BFnbyO9N.js";import"./copy-CKK4O4gq.js";import"./copy-CTtd4S6z.js";import"./GitHub-Mark-lQb1Kumq.js";import"./TableOfContent-BrPxZHd0.js";import"./index-DwsDjCru.js";import"./index-DYPFLkL0.js";import"./index-3ZVLHlpm.js";import"./index-ChSomlCw.js";import"./index-CGnaTP2m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DIflbpx1.js";import"./addCustomCSSWithScoping--L6xjApc.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./Search-CN8g7O0i.js";import"./Option-C4-0WVuO.js";import"./ListItemBaseTemplate-BkUkk_X3.js";import"./Select-mMA7a--l.js";import"./InvisibleMessage-IeyuxUiP.js";import"./slim-arrow-down-BCpPF8dH.js";import"./slim-arrow-down-pu6c9dFU.js";import"./ResponsivePopoverCommon.css-aexR0yTU.js";import"./ValueStateMessage.css-yur_ejCi.js";import"./search-DudVPIQm.js";import"./Input-B3RJG3gm.js";import"./Suggestions.css-CLQcfKgH.js";import"./SuggestionItem-4j5PUDIr.js";import"./i18n-defaults-k5o3Svb4.js";import"./Person-Bk5r7PMP.js";import"./index-BKPK1xED.js";import"./less-DwozNvkG.js";import"./index-DSDMr218.js";import"./ListItemStandard-Dag2Pm4v.js";import"./ButtonBadge-JsSxiW7u.js";import"./overflow-CVxNQYOa.js";const k=`## Design-Compliant Examples

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
