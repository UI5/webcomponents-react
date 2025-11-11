import{j as e,e as s}from"./iframe-dcfOuKvt.js";import{useMDXComponents as f}from"./index-s6pmBJrF.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-CuD-56fD.js";import"./Tag-wpbJw-fJ.js";import"./index-DKVFb7ln.js";import{C as u}from"./ControlsWithNote-K-6vc354.js";import{D as S}from"./DocsHeader-B-3cymCk.js";import{F as v}from"./CommandsAndQueries-XLh3rfRK.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-Ba67LJNO.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-B1T9UfFB.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CU_5ogqg.js";import"./sys-enter-2-Ws311tut.js";import"./alert-BjY8k0mz.js";import"./index-BFv8_OJi.js";import"./index-CvN_j3lV.js";import"./Link-Bb4iXCLh.js";import"./copy-CDxaMxVB.js";import"./copy-CjQxEWgu.js";import"./GitHub-Mark-CH9yC0yP.js";import"./TableOfContent-Ci6yIg8W.js";import"./index-DPsFL1rE.js";import"./index-ZW_BnH9T.js";import"./index-DOoV4d9M.js";import"./index-CLyQ0iFn.js";import"./index-fw2ccDa-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyhaBlGc.js";import"./addCustomCSSWithScoping-CSOIgEcY.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./Search-DTrxDRZS.js";import"./Option-DN_OxtE5.js";import"./ListItemBaseTemplate-DNtdtyka.js";import"./Select-1hbOCPXG.js";import"./InvisibleMessage-yVfs4fqn.js";import"./slim-arrow-down-C5wzux3l.js";import"./slim-arrow-down-7ZYbfLfd.js";import"./ResponsivePopoverCommon.css-OTtjABRB.js";import"./ValueStateMessage.css-CKThLhvq.js";import"./search-BCLm--SG.js";import"./Input-DZep6tUc.js";import"./Suggestions.css-DvjeYE6w.js";import"./SuggestionItem-DwMAv3Y5.js";import"./i18n-defaults-k5o3Svb4.js";import"./Person-Bk5r7PMP.js";import"./index-ZliIzRiZ.js";import"./less-BB1GhJj9.js";import"./index-BMFjqRUO.js";import"./ListItemStandard-B3mcYXoD.js";import"./ButtonBadge-CKPEfok-.js";import"./overflow-Dztz2udb.js";const k=`## Design-Compliant Examples

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
