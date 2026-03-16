import{j as e,E as s}from"./iframe-B9oS8Tdw.js";import{useMDXComponents as f}from"./index-DBcwplNT.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-n99WgqUD.js";import"./Tag-C4hdjWJC.js";import"./index-Bpds4hIG.js";import{C as u}from"./ControlsWithNote-CU7GlRfQ.js";import{D as S}from"./DocsHeader-D3xSEYm1.js";import{F as v}from"./Footer-B2MFyv0P.js";import"./CommandsAndQueries-NcZGCQIw.js";import"./PageNotFound-CdK5m3jv.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{b as l,S as p,c as m,a as c}from"./sys-help-CrZo863d.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-BjWAb5cT.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BlcYwQMc.js";import"./sys-enter-2-DdkiI-3L.js";import"./alert-D212h0_R.js";import"./index-BYYicg2U.js";import"./index-0NZf9e3S.js";import"./Link-BttQiJAm.js";import"./copy-C9Ot4HgH.js";import"./copy-Bqdwh9J4.js";import"./GitHub-Mark-B_hr1EaH.js";import"./TableOfContent-D0gNO-3P.js";import"./index-C2K37CCg.js";import"./index-DzuQRrNG.js";import"./index-MP9MDZQa.js";import"./index-CIPzfYgd.js";import"./index-XdY2VQGh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CKo2xI1N.js";import"./addCustomCSSWithScoping-BjXuQDKZ.js";import"./Illustrations-Hb5RsbMM.js";import"./i18n-defaults-CFWtSmu6.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CT11ggPv.js";import"./query-CzSBusdE.js";import"./ButtonBadge-lSdapy_J.js";import"./ListItemStandard-BgNSnN8f.js";import"./search-COpabpya.js";import"./overflow-CVXW75NX.js";import"./Search-8QFuYp6g.js";import"./Option-DUDaACIO.js";import"./ListItemBaseTemplate-B2uVgI-9.js";import"./Select-C05RCBvi.js";import"./InvisibleMessage-CNfLarpT.js";import"./ResponsivePopoverCommon.css-B86z_YN9.js";import"./ValueStateMessage.css-ByKDah8f.js";import"./Input-DExRg9sG.js";import"./Suggestions.css-D-ufL02N.js";import"./SuggestionItem-B-E1hpPG.js";import"./Person-Bk5r7PMP.js";import"./index-Dz5AYLKf.js";import"./less-B6hTD78n.js";const k=`## Design-Compliant Examples

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
`,e.jsx(v,{})]})}function De(o={}){const{wrapper:n}={...f(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(x,{...o})}):x(o)}export{De as default};
