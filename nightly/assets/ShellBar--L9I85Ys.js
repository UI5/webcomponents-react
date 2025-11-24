import{j as e,e as s}from"./iframe-BsBPxA6U.js";import{useMDXComponents as f}from"./index-C_R4y4V0.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-CEOEebKO.js";import"./Tag-DSoKri1G.js";import"./index-Doky9Mkb.js";import{C as u}from"./ControlsWithNote-B9F0Q_Ut.js";import{D as S}from"./DocsHeader-Ddc9j-Y5.js";import{F as v}from"./CommandsAndQueries-DGdgKo6k.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-Cc_KUdkP.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-DgBEXJnM.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bj9U_7MQ.js";import"./sys-enter-2-C6mBZBNJ.js";import"./alert-Y2sfMbhe.js";import"./index-CNyanKq8.js";import"./index-gPsABUAK.js";import"./Link-BHFGfTB0.js";import"./copy-DwJ7RQvd.js";import"./copy-CRGjVpRv.js";import"./GitHub-Mark-BL2-Zv-6.js";import"./TableOfContent-DrNJuZzj.js";import"./index-CAH0250y.js";import"./index-Dmhochbe.js";import"./index-Cihbk1NA.js";import"./index-BLjU5XqX.js";import"./index-DNCqkTDx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dmx-BJlM.js";import"./addCustomCSSWithScoping-DbsNQuuI.js";import"./parameters-bundle.css-BaExaGb0.js";import"./Search-DpjX3qDO.js";import"./Option-MDNU8gos.js";import"./ListItemBaseTemplate-k46UOCLs.js";import"./Select-C61ga_69.js";import"./InvisibleMessage-BwHxjeMJ.js";import"./slim-arrow-down-DFzi0AoL.js";import"./slim-arrow-down-BaJTeNEG.js";import"./ResponsivePopoverCommon.css-hQ9zDC9y.js";import"./ValueStateMessage.css-BaLdzHVw.js";import"./search-XSjiQCRp.js";import"./Input-CZwakjm4.js";import"./Suggestions.css-BqCzwqUI.js";import"./SuggestionItem-DsimlpEO.js";import"./i18n-defaults-k5o3Svb4.js";import"./Person-Bk5r7PMP.js";import"./index-BFI-nP8P.js";import"./less-DicCpNe9.js";import"./index-lSV7txaC.js";import"./ListItemStandard-kYAT9Ja4.js";import"./ButtonBadge-wcb2LjZY.js";import"./overflow-CluQBSK5.js";const k=`## Design-Compliant Examples

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
