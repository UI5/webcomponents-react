import{j as e,e as s}from"./iframe-Cig4nsrF.js";import{useMDXComponents as f}from"./index-rt57_u-y.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-DAEBkYYF.js";import"./Tag-Bs_1btou.js";import"./index-FKwq6U9j.js";import{C as u}from"./ControlsWithNote-BEmXSTpX.js";import{D as S}from"./DocsHeader-DsziQCYn.js";import{F as v}from"./CommandsAndQueries-D3xhwJA5.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-DRdj7xNS.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-CNVf16qC.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B6HgxZBq.js";import"./sys-enter-2-BRRws0JK.js";import"./alert-Cb5ARKKh.js";import"./index-BL2sJT6Z.js";import"./index-5C4HFP5l.js";import"./Link-Br9IVr1w.js";import"./copy-Y9mZrYG3.js";import"./copy-C7r52zpO.js";import"./GitHub-Mark-lRZYtsJv.js";import"./TableOfContent-CFzYaydv.js";import"./index-B2RnTjWc.js";import"./index-BB06tsQb.js";import"./index-BrrdpEgt.js";import"./index-ftQeoy-6.js";import"./index-BmqXmyDH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DsK0-Mz_.js";import"./addCustomCSSWithScoping-BWNNT1nj.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./Search-703B8dM4.js";import"./Option-DWIrDKUO.js";import"./ListItemBaseTemplate-nSbjmalX.js";import"./Select-CK2fiiVZ.js";import"./InvisibleMessage-DOTQpYl4.js";import"./slim-arrow-down-227TRo9_.js";import"./slim-arrow-down-Cde-9O_z.js";import"./ResponsivePopoverCommon.css-CMdAayek.js";import"./ValueStateMessage.css-DVzvrXAG.js";import"./search-Cw4rxSst.js";import"./Input-RuURL5K_.js";import"./Suggestions.css-orKcFsj8.js";import"./SuggestionItem-CReGhLBD.js";import"./i18n-defaults-i0ThFMss.js";import"./Person-Bk5r7PMP.js";import"./index-3yS61UMO.js";import"./less-DaTrqMft.js";import"./index-DaqBHWpJ.js";import"./ListItemStandard-DwpoAFwW.js";import"./ButtonBadge-BrEYj-XB.js";import"./overflow-BhVFb8Pq.js";const k=`## Design-Compliant Examples

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
