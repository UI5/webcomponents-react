import{j as e,e as s}from"./iframe-BO0jLSss.js";import{useMDXComponents as f}from"./index-DKYRdGJC.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-B4u3eIrx.js";import"./Tag-GPe-hxqe.js";import"./index-CblgVrgk.js";import{C as u}from"./ControlsWithNote-2-KFiyR7.js";import{D as S}from"./DocsHeader-DfVL_kuq.js";import{F as v}from"./CommandsAndQueries-CgQBaZ0f.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-PKMocCTz.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-CNbd7CPB.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D3uCnnkd.js";import"./sys-enter-2-wxpj1ZiR.js";import"./alert-BevRZGbf.js";import"./index-Cxn0-wv1.js";import"./index-CpvGRbxq.js";import"./Link-C1ayfMxn.js";import"./copy-C0cKcgNP.js";import"./copy-D8dGmaRo.js";import"./GitHub-Mark-CDemERz7.js";import"./TableOfContent-BGsE7-dd.js";import"./index-DelbaEfh.js";import"./index-ZGr5TJVA.js";import"./index-CEuImug1.js";import"./index-MgaH4Bh7.js";import"./index-CQJ8H28h.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-3DyNz5yK.js";import"./addCustomCSSWithScoping-tlJvF9vw.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./Search-Dm7ZBcr4.js";import"./Option-CNIcjJ6X.js";import"./ListItemBaseTemplate-KzzU4Rx3.js";import"./Select-tyOKBt9U.js";import"./InvisibleMessage-Ckou_TOv.js";import"./slim-arrow-down-BpthopxW.js";import"./slim-arrow-down-BTwGuTkB.js";import"./ResponsivePopoverCommon.css-JDR8aaaw.js";import"./ValueStateMessage.css-DX9Ekmj2.js";import"./search-m-hv9Mu0.js";import"./Input-BW36Az8s.js";import"./Suggestions.css-BcCiMvmK.js";import"./SuggestionItem-BfhP-dC0.js";import"./i18n-defaults-uALom2Bu.js";import"./Person-Bk5r7PMP.js";import"./index-Buj-2QJo.js";import"./less-BZcQvZ5K.js";import"./index-t2hC8GnP.js";import"./ListItemStandard-Dn6AUPyj.js";import"./ButtonBadge-CWh7JEjd.js";import"./overflow-1XdbunpB.js";const k=`## Design-Compliant Examples

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
