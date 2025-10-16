import{j as e,e as s}from"./iframe-CXQAdbiu.js";import{useMDXComponents as f}from"./index-B53u5pzW.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-CqzuTWcZ.js";import"./Tag-BVaaDNuO.js";import"./index-B7B2Licm.js";import{C as u}from"./ControlsWithNote-CiJ6qJGs.js";import{D as S}from"./DocsHeader-C3UG7KGm.js";import{F as v}from"./CommandsAndQueries-aoDJK_rZ.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-CAE_BDDA.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-StKsc57W.js";import"./preload-helper-PPVm8Dsz.js";import"./information-ATIM8RIH.js";import"./sys-enter-2-4FUXKSMu.js";import"./alert-DgUa0xxC.js";import"./index-t0QN6j1g.js";import"./index-ULIsdIj2.js";import"./Link-BM2g4e1S.js";import"./copy-B2gThB3h.js";import"./copy-DcVZp789.js";import"./GitHub-Mark-yv6eP1EB.js";import"./TableOfContent-Cd8MlPFk.js";import"./index-529wBAr6.js";import"./index-f6kmMniG.js";import"./index-BdQ3exsp.js";import"./index-DaUVwWua.js";import"./index-BjLlWCaV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cah1_bVk.js";import"./addCustomCSSWithScoping-CF9FJk9W.js";import"./parameters-bundle.css-DHbieIhm.js";import"./Search-B4wMiKW8.js";import"./Option-giAR4PyV.js";import"./ListItemBaseTemplate-BonfCIkK.js";import"./Select-CP65qCm6.js";import"./InvisibleMessage-YSIBfych.js";import"./slim-arrow-down-DaR9tdKT.js";import"./slim-arrow-down-hLmi3DGr.js";import"./ResponsivePopoverCommon.css-WfYGUFrq.js";import"./ValueStateMessage.css-CgsW_nz6.js";import"./search-BozChR29.js";import"./Input-CYD0qtkC.js";import"./Suggestions.css-BBvTA_r8.js";import"./SuggestionItem-gfvdLHYr.js";import"./i18n-defaults-DGnw9SAb.js";import"./Person-Bk5r7PMP.js";import"./index-CeFcuoyl.js";import"./less-DYN9Hj3m.js";import"./index-CJEYNK5R.js";import"./ListItemStandard-CfwHGGPG.js";import"./ButtonBadge-D26J_GXR.js";import"./overflow-BWv8kESE.js";const k=`## Design-Compliant Examples

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
