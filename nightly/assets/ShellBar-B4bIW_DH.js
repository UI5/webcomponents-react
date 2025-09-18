import{j as e,e as s}from"./iframe-DTHPT7iA.js";import{useMDXComponents as f}from"./index-74UlZZJj.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-BEm3tjb6.js";import"./Tag-CJADm4_M.js";import"./index-C3HgU9VG.js";import{C as u}from"./ControlsWithNote-BGcGZ2Tw.js";import{D as S}from"./DocsHeader-DrsGZt_2.js";import{F as v}from"./CommandsAndQueries-BD3jeLaK.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-DHEsLbnd.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-C2ayxHFQ.js";import"./preload-helper-D9Z9MdNV.js";import"./information-DoW4IMVD.js";import"./sys-enter-2-ByI7nkKd.js";import"./alert-COIhFOls.js";import"./index-t5gVEC_D.js";import"./index-C6-xBNa3.js";import"./Link-BbcZTKOL.js";import"./copy-B5eacD66.js";import"./copy-mCNoL2s6.js";import"./GitHub-Mark-BX4sI9ta.js";import"./TableOfContent-DcI8r7Mg.js";import"./index-DwOvcXXK.js";import"./index-Cj0CYz_p.js";import"./addCustomCSSWithScoping-DApCUjf-.js";import"./index-D_aw5Z2j.js";import"./index-dqQUzE09.js";import"./index-ig2sn1RW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BENd75qS.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./Search-CUPdYUgM.js";import"./Option-DNJdSQ8d.js";import"./ListItemBaseTemplate-BiRHqJdx.js";import"./Select-BJhEtDeN.js";import"./InvisibleMessage-CQmpcPbi.js";import"./slim-arrow-down-DiNlSlMl.js";import"./slim-arrow-down-CgABXEzJ.js";import"./ResponsivePopoverCommon.css-D92Yx7wX.js";import"./ValueStateMessage.css-CYayy6u-.js";import"./search-DnDVBu5C.js";import"./Input-D-TFuZ-3.js";import"./Suggestions.css-BicA_aUI.js";import"./SuggestionItem-fB6YQJWQ.js";import"./i18n-defaults-BS8OTJAB.js";import"./Person-Bk5r7PMP.js";import"./index-DaHzjs3T.js";import"./less-4irJeyAV.js";import"./index-F2C6URnv.js";import"./ListItemStandard-CIUna04V.js";import"./ButtonBadge-DG2ODI5b.js";import"./overflow-CclTXkgC.js";import"./overflow-zlRMKvvr.js";const k=`## Design-Compliant Examples

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
`,e.jsx(v,{})]})}function ke(o={}){const{wrapper:n}={...f(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(x,{...o})}):x(o)}export{ke as default};
