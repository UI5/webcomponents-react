import{j as e,e as s}from"./iframe-BcULqSVx.js";import{useMDXComponents as f}from"./index-DimjqcOY.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-SeGv6FI8.js";import"./Tag-DE8sZ6fR.js";import"./index-CMCy2tRg.js";import{C as u}from"./ControlsWithNote-vHgKyDQ4.js";import{D as S}from"./DocsHeader-rcaw3yWJ.js";import{F as v}from"./CommandsAndQueries-Bjxahy8c.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-C1TEs3Pi.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-Ccwo4bQA.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C0qTg3A6.js";import"./sys-enter-2-hVsohqhg.js";import"./alert-CRlYmZ6n.js";import"./index-D0A2Ruup.js";import"./index-CEmXgIma.js";import"./Link-D2-7Bb71.js";import"./copy-DixMi52h.js";import"./copy-DrZjSCYt.js";import"./GitHub-Mark-CX2aPwNN.js";import"./TableOfContent-BwCnFx1q.js";import"./index-DfNAKNyC.js";import"./index-Bht3WMEt.js";import"./index-Cd7o7phm.js";import"./index-nOLHZmf_.js";import"./index-72f5Qi1p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYesK5yK.js";import"./addCustomCSSWithScoping-DZ8lcGy4.js";import"./parameters-bundle.css-DHbieIhm.js";import"./Search-CVOkEKIJ.js";import"./Option-CnCNxHHl.js";import"./ListItemBaseTemplate-C9iGViqU.js";import"./Select-Kk-2dMK4.js";import"./InvisibleMessage-DxnWWDzY.js";import"./slim-arrow-down-2dLbZhMa.js";import"./slim-arrow-down-hE2EqBiC.js";import"./ResponsivePopoverCommon.css-Cwh624CK.js";import"./ValueStateMessage.css-d2Jp-8qc.js";import"./search-DbEzhtRl.js";import"./Input-DbwFVhoi.js";import"./Suggestions.css-DvUhQ2oV.js";import"./SuggestionItem-BvM1s-Ep.js";import"./i18n-defaults-DGnw9SAb.js";import"./Person-Bk5r7PMP.js";import"./index-RdWEGO-1.js";import"./less-DFYHTHFm.js";import"./index-HTdJ8CWO.js";import"./ListItemStandard-BtQP2CZp.js";import"./ButtonBadge-B3EGQOD6.js";import"./overflow-DeJDkM9X.js";const k=`## Design-Compliant Examples

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
