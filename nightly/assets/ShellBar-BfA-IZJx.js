import{j as e,E as s}from"./iframe-rmPOfAEk.js";import{useMDXComponents as f}from"./index-OsAdl3Cq.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-v63_T-Iu.js";import"./Tag-OMAKRCyN.js";import"./index-D5lEazYO.js";import{C as u}from"./ControlsWithNote-D_cpWhLk.js";import{D as S}from"./DocsHeader-DAYxAS3q.js";import{F as v}from"./Footer-CYSIA4uy.js";import"./CommandsAndQueries-DjjDgYFy.js";import"./PageNotFound-DRbJUQ3U.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{b as l,S as p,c as m,a as c}from"./sys-help-3_NJuaqk.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-n7SwifD_.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cw3g4evs.js";import"./sys-enter-2-DOLwXwFm.js";import"./alert-Bcs9t0my.js";import"./index-NT5PBuFY.js";import"./index-B-iV9gR7.js";import"./Link-CL9BwqUh.js";import"./copy-Cu1XAvBt.js";import"./copy-DYpkXBzp.js";import"./GitHub-Mark-CukNb3-C.js";import"./TableOfContent-BjAe7E2K.js";import"./index-Xi7qAWgh.js";import"./index-CE8iCloJ.js";import"./index-g6c80OWk.js";import"./index-DUTk5K7T.js";import"./index-DTuZFVSS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BJhSo9M3.js";import"./addCustomCSSWithScoping-CZ8_VPk_.js";import"./Illustrations-DRh478fB.js";import"./i18n-defaults-C7ICj5-E.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./Search-C1lbSTKJ.js";import"./Option-Bad0_Io9.js";import"./ListItemBaseTemplate-p1mZhZvu.js";import"./Select-DdViIcLL.js";import"./InvisibleMessage-ETmXadbm.js";import"./slim-arrow-down-oHn4D4RL.js";import"./slim-arrow-down-Bl1bEFWF.js";import"./ResponsivePopoverCommon.css-GT00HLHH.js";import"./ValueStateMessage.css-RtBMBlvI.js";import"./search-BXzUuWeO.js";import"./Input-glL1F1kj.js";import"./Suggestions.css-CgnqqM6E.js";import"./SuggestionItem-CQNiXwiQ.js";import"./Person-Bk5r7PMP.js";import"./index-CttNC8Pp.js";import"./less-CW7kPXDQ.js";import"./index-Bk9eNrm3.js";import"./ListItemStandard-CRLY1leJ.js";import"./ButtonBadge-OW0-zyTy.js";import"./overflow-CG-MGXYw.js";const k=`## Design-Compliant Examples

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
`,e.jsx(v,{})]})}function Ie(o={}){const{wrapper:n}={...f(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(x,{...o})}):x(o)}export{Ie as default};
