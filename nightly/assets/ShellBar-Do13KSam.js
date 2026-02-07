import{j as e,B as s}from"./iframe-CoAi7Ttt.js";import{useMDXComponents as f}from"./index-CTifqAle.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-Ybxx5XcU.js";import"./Tag-DogcFDWn.js";import"./index-zKgtSNJj.js";import{C as u}from"./ControlsWithNote-CBZw3-Gn.js";import{D as S}from"./DocsHeader-BN-VJVFD.js";import{F as v}from"./CommandsAndQueries-Bmwjvcx6.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-DFKpesEn.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-BlyP1L7X.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BEJpmRSo.js";import"./sys-enter-2-A-vrRu2-.js";import"./alert-Bip-otgE.js";import"./index-DbUh3jFl.js";import"./index-CnlNXdqG.js";import"./Link-BYcIvZzO.js";import"./copy-Cx3Ez9qo.js";import"./copy-CDQOzwpW.js";import"./GitHub-Mark-Ix8rNDGw.js";import"./TableOfContent-BvKarlsr.js";import"./index-CO1YKgmB.js";import"./index-Cq0wf6-J.js";import"./index-CDFqh5IR.js";import"./index-B6Wc4p5_.js";import"./index-Cq2phxGV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Z6K6IIMy.js";import"./addCustomCSSWithScoping-BPStdEW-.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./Search-BsYKYdz1.js";import"./Option-yTMBTxoW.js";import"./ListItemBaseTemplate-4zjGS_SN.js";import"./Select-BplUcK6s.js";import"./InvisibleMessage-DMo6sLGx.js";import"./slim-arrow-down-BeH-Dgqc.js";import"./slim-arrow-down-C4Zv-sp4.js";import"./ResponsivePopoverCommon.css-DEHIK5w4.js";import"./ValueStateMessage.css-taduqeY7.js";import"./search-CCXREfzr.js";import"./Input-B6TJfZNr.js";import"./Suggestions.css-B-HnuI29.js";import"./SuggestionItem-CiNaD7wa.js";import"./i18n-defaults-Ca0KLLzw.js";import"./Person-Bk5r7PMP.js";import"./index-CKkhBjhg.js";import"./less-BsWMeBSw.js";import"./index-cP2k6L6d.js";import"./ListItemStandard-DwmvV3ez.js";import"./ButtonBadge-DlMnPrfi.js";import"./overflow-EZ3pk_KE.js";const k=`## Design-Compliant Examples

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
