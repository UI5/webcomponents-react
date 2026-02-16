import{j as e,B as s}from"./iframe-COmYM7FM.js";import{useMDXComponents as f}from"./index-nJK3ZT8W.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-DAY1TuCU.js";import"./Tag-C7vo2194.js";import"./index-8dZG1YHw.js";import{C as u}from"./ControlsWithNote-D0uv15nF.js";import{D as S}from"./DocsHeader-CST8qEMS.js";import{F as v}from"./CommandsAndQueries-BOWLtTE6.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{b as l,S as p,c as m,a as c}from"./sys-help-Ctar474M.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-DysNPFQM.js";import"./preload-helper-PPVm8Dsz.js";import"./information-le6myuh6.js";import"./sys-enter-2-CL75I8bf.js";import"./alert-lhOUxaTm.js";import"./index-DFr8Hmr1.js";import"./index-YGBVCLbI.js";import"./Link-CcuckqWN.js";import"./copy-Dq2e23NG.js";import"./copy-CXZAgH3a.js";import"./GitHub-Mark-qFlD-nLv.js";import"./TableOfContent-tjnC9ti3.js";import"./index-Bf48pKls.js";import"./index-Baj766Uq.js";import"./index-C84ZyqAr.js";import"./index-WRRg6L2_.js";import"./index-CGzRflPR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CJJkccm1.js";import"./addCustomCSSWithScoping-CPOeZ7S_.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./Search-DlA94UuX.js";import"./Option-CKR1byVj.js";import"./ListItemBaseTemplate-B6EaFX9g.js";import"./Select-B6eJ5Vgx.js";import"./InvisibleMessage-B-FhaSLI.js";import"./slim-arrow-down-LiCVxuMd.js";import"./slim-arrow-down-jGOJjhpo.js";import"./ResponsivePopoverCommon.css-C4KWqDDR.js";import"./ValueStateMessage.css-DI3W06n_.js";import"./search-BC6mTFPW.js";import"./Input-Bu6vC63z.js";import"./Suggestions.css-CPV1YgiF.js";import"./SuggestionItem-Dd6fqolr.js";import"./i18n-defaults-Ca0KLLzw.js";import"./Person-Bk5r7PMP.js";import"./index-DX2-QTbN.js";import"./less-BCKthjss.js";import"./index-DtQgI1LJ.js";import"./ListItemStandard-BflPf8Ge.js";import"./ButtonBadge-McXbr7Li.js";import"./overflow-DYUd4qgm.js";const k=`## Design-Compliant Examples

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
