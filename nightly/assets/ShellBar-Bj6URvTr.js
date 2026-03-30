import{j as e,A as s}from"./iframe-DMCuegit.js";import{u as f,M as u,C as r,a,D as t,A as i}from"./blocks-_hT2CGz-.js";import"./Tag-DKKBiDqY.js";import"./index-eKDFsa2E.js";import{C as j}from"./ControlsWithNote-CCfPh1IT.js";import{D as S}from"./DocsHeader-BGUPBIWz.js";import{F as v}from"./Footer-0Wa-LUTc.js";import"./CommandsAndQueries-C9E2MGX7.js";import"./PageNotFound-BG19bJbD.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{b as l,S as p,c as m,a as c}from"./sys-help-tY-brgFY.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-jHls2lBD.js";import"./preload-helper-PPVm8Dsz.js";import"./information-5_fbL55R.js";import"./sys-enter-2-Dil9t1r8.js";import"./alert-D7vPLYbi.js";import"./index-D62lIz3L.js";import"./index-otx7j-A2.js";import"./Link-CmPTNs7p.js";import"./copy-B-HwLSgn.js";import"./copy-CPtUp5y0.js";import"./GitHub-Mark-DIeXcjWa.js";import"./TableOfContent-CJ3fOdBx.js";import"./index-DEoJMyHo.js";import"./index-Dzpyi8IH.js";import"./index-C9z-ZS1p.js";import"./index-C1STFZgh.js";import"./index-Di3QE5re.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B5tqyg7w.js";import"./addCustomCSSWithScoping-C0Smz55A.js";import"./Illustrations-bTO4h7is.js";import"./i18n-defaults-CFWtSmu6.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BQd5Czrl.js";import"./query-CzSBusdE.js";import"./ButtonBadge-BLtsSjwz.js";import"./ListItemStandard-DPUfNWM3.js";import"./search-MOFHbrLL.js";import"./overflow-DPtP-OTM.js";import"./Search-dVpjvHZ7.js";import"./Option-K8omM4DC.js";import"./ListItemBaseTemplate-BtXEjops.js";import"./Select-47892hrl.js";import"./InvisibleMessage-C3Ae3U1K.js";import"./ResponsivePopoverCommon.css-MXP7eeX6.js";import"./ValueStateMessage.css-D7j-2cj5.js";import"./Input-DirUDi6l.js";import"./Suggestions.css-Dvj1z-OQ.js";import"./SuggestionItem-CyvdCOt4.js";import"./Person-Bk5r7PMP.js";import"./index-GAFO2n_O.js";import"./less-BieZFKIn.js";const k=`## Design-Compliant Examples

These examples demonstrate the implementation of design specifications. They primarily illustrate design concepts and mostly do not provide additional functionality. You can reference them to select the appropriate design patterns.
`;function x(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...f(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:d}),`
`,e.jsx(S,{of:d,since:"0.4.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(j,{of:h}),`
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
`,e.jsx(v,{})]})}function ke(o={}){const{wrapper:n}={...f(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(x,{...o})}):x(o)}export{ke as default};
