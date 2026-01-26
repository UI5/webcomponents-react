import{j as e,e as s}from"./iframe-THm39tdL.js";import{useMDXComponents as f}from"./index-B4tiZj28.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-exNB_fpK.js";import"./Tag-DAVE_HUz.js";import"./index-GpdeEFTa.js";import{C as u}from"./ControlsWithNote-VMJauc9Q.js";import{D as S}from"./DocsHeader-DVVTlue-.js";import{F as v}from"./CommandsAndQueries-CM3XC2Lj.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-D0Phvm3B.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-DGeBrfcc.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cma2Q91K.js";import"./sys-enter-2-iw8Fxy6e.js";import"./alert-Buz1y0R3.js";import"./index-BQ6gEIJW.js";import"./index-DLy3fIdu.js";import"./Link-CGyr18oq.js";import"./copy-DKTSvVxt.js";import"./copy-BpRW8fgI.js";import"./GitHub-Mark-XuzE5-bu.js";import"./TableOfContent-k5L_S4AO.js";import"./index-DPta9qsd.js";import"./index-Dg0TKbRC.js";import"./index-BziYS9gD.js";import"./index-Dfp6johM.js";import"./index-KiDRbvAF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BGXn0jIO.js";import"./addCustomCSSWithScoping-msj5utEH.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./Search-BeFLibHH.js";import"./Option-BV6lO7dz.js";import"./ListItemBaseTemplate-M2eQiRWW.js";import"./Select-BdWwnW7P.js";import"./InvisibleMessage-Ce4CN5Vg.js";import"./slim-arrow-down-B5JPuMYZ.js";import"./slim-arrow-down-F0Pm_4oK.js";import"./ResponsivePopoverCommon.css-BUxGZes4.js";import"./ValueStateMessage.css-Bbj2XpR4.js";import"./search-CdPxeQrZ.js";import"./Input-BhtW4_5c.js";import"./Suggestions.css-tt1nfuuG.js";import"./SuggestionItem-DkeJr8Uj.js";import"./i18n-defaults-i0ThFMss.js";import"./Person-Bk5r7PMP.js";import"./index-BPR-maoO.js";import"./less-Dxs7OAKQ.js";import"./index-BRRkFauC.js";import"./ListItemStandard-BfdqbOJt.js";import"./ButtonBadge-cN0rzXbu.js";import"./overflow-ByJEr4W5.js";const k=`## Design-Compliant Examples

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
