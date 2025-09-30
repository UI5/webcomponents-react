import{j as e,e as s}from"./iframe-B4y_-iU1.js";import{useMDXComponents as f}from"./index-Dmi6nQVe.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-sxqAtQzk.js";import"./Tag-DlHRwvSs.js";import"./index-Dllizol6.js";import{C as u}from"./ControlsWithNote-CGhODPqQ.js";import{D as S}from"./DocsHeader-DWE4KR2K.js";import{F as v}from"./CommandsAndQueries-CcSeU6ue.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-C7LEvoq5.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-o9BCtJUq.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D0sGyRbR.js";import"./sys-enter-2-C9g_SRcG.js";import"./alert-D-igEgv7.js";import"./index-BM-ZpZwJ.js";import"./index-C7p9xCdn.js";import"./Link-DqVeu_cc.js";import"./copy-BUckGUfs.js";import"./copy-DoYKp7vI.js";import"./GitHub-Mark-CCg6DNKR.js";import"./TableOfContent-CCxVzqLR.js";import"./index-CUhg4Pue.js";import"./index-D9CWAfTz.js";import"./index-BBdeIQ4g.js";import"./index-Bfg65B6s.js";import"./index-DGhRlPcl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DY4dR896.js";import"./addCustomCSSWithScoping-B0N-pOai.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./Search-BFicZYoM.js";import"./Option-PNrPnZNL.js";import"./ListItemBaseTemplate-BejSvRNG.js";import"./Select-B0cOOa_z.js";import"./InvisibleMessage-Cys8KAyT.js";import"./slim-arrow-down-DfvaHgtM.js";import"./slim-arrow-down-Cic8v9YB.js";import"./ResponsivePopoverCommon.css-p5LIoyU4.js";import"./ValueStateMessage.css-C6qx3eDB.js";import"./search-QxBDjVmS.js";import"./Input-XpSBxwxq.js";import"./Suggestions.css-BVl5WNmq.js";import"./SuggestionItem-M84D7oJF.js";import"./i18n-defaults-BS8OTJAB.js";import"./Person-Bk5r7PMP.js";import"./index-D43uRIcM.js";import"./less-DeoJiXSy.js";import"./index-Bh3zj7Sd.js";import"./ListItemStandard-C_E-KHlV.js";import"./ButtonBadge-CB0aAMBg.js";import"./overflow-DL3P7z3e.js";import"./overflow-DfuRjYPN.js";const k=`## Design-Compliant Examples

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
