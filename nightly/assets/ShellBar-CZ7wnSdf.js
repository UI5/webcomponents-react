import{j as e,E as s}from"./iframe-CIERqdmv.js";import{useMDXComponents as f}from"./index-DuJS4dN9.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-CwsgKOP_.js";import"./Tag-0874imNl.js";import"./index-CMev4Q36.js";import{C as u}from"./ControlsWithNote-CSnduUsc.js";import{D as S}from"./DocsHeader-_r8mBImb.js";import{F as v}from"./Footer-DeuiB6kc.js";import"./CommandsAndQueries-CnFEaRrZ.js";import"./PageNotFound-C7dSWVQh.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{b as l,S as p,c as m,a as c}from"./sys-help-CeizldZO.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-B5H1Q6ZH.js";import"./preload-helper-PPVm8Dsz.js";import"./information-90fB5V4h.js";import"./sys-enter-2-BkL_leH3.js";import"./alert-B9azflx9.js";import"./index-DmgJDP0k.js";import"./index-BEXhXSTj.js";import"./Link-B7T_f79Y.js";import"./copy-ofXuvq9E.js";import"./copy-Dk2sduK9.js";import"./GitHub-Mark-RGHHd1bg.js";import"./TableOfContent-BXcIi_qC.js";import"./index-CJA8M3b4.js";import"./index-CeFrwZtC.js";import"./index-Dub9x5-i.js";import"./index-DQGCwtV8.js";import"./index-C9od4SKd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DkSzocmg.js";import"./addCustomCSSWithScoping-B8m6lHZs.js";import"./Illustrations-CMsXyloe.js";import"./i18n-defaults-CFWtSmu6.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BUrHhnx4.js";import"./query-CzSBusdE.js";import"./ButtonBadge-D2Uv3jkz.js";import"./ListItemStandard-juxLC4N0.js";import"./search-BddZ0rUL.js";import"./overflow-C6YkdztS.js";import"./Search-IXOw9e0B.js";import"./Option-wGoV8nGP.js";import"./ListItemBaseTemplate-EsFxfCNV.js";import"./Select-BLvJx2xD.js";import"./InvisibleMessage-CprUuJ-2.js";import"./ResponsivePopoverCommon.css-BAyfAe_C.js";import"./ValueStateMessage.css-yAScMgnT.js";import"./Input-BEziv0q_.js";import"./Suggestions.css-aGpylhML.js";import"./SuggestionItem-BuU8W2FN.js";import"./Person-Bk5r7PMP.js";import"./index-BXsMvzsh.js";import"./less-BWtd1z_C.js";const k=`## Design-Compliant Examples

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
