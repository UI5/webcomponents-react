import{j as e,B as s}from"./iframe-CBE50DlQ.js";import{useMDXComponents as f}from"./index-DIj01nj4.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-BkRbeitU.js";import"./Tag-DnRfIk3Q.js";import"./index-CionDnrU.js";import{C as u}from"./ControlsWithNote-B8qA-jVK.js";import{D as S}from"./DocsHeader-BfqXB3BN.js";import{F as v}from"./CommandsAndQueries-DPkme0CW.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-DGPg9-qb.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-Xls0ceck.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C3Q_Sey8.js";import"./sys-enter-2-B4dHqFQY.js";import"./alert-CvpF86nf.js";import"./index-DOpTxqMF.js";import"./index-Cl_RTgXn.js";import"./Link-Dh4rUjfX.js";import"./copy-hwAEZCZV.js";import"./copy-C6dVkXZR.js";import"./GitHub-Mark-BRB5yyvw.js";import"./TableOfContent-CnAnNSxW.js";import"./index-Cx0GhjWW.js";import"./index-DQcdvvTg.js";import"./index-hRqo2aEC.js";import"./index-9M1Uc6lA.js";import"./index-DZWAayED.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-OxleBysO.js";import"./addCustomCSSWithScoping-DkZRGLQs.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./Search-Du4uZHWT.js";import"./Option-DexHpC4I.js";import"./ListItemBaseTemplate-_7gwwsSz.js";import"./Select-DTKYpMmC.js";import"./InvisibleMessage-t9FWfsM5.js";import"./slim-arrow-down-DODVm5XL.js";import"./slim-arrow-down-BM67JTAP.js";import"./ResponsivePopoverCommon.css-KhWag-i4.js";import"./ValueStateMessage.css-Bx58RCyv.js";import"./search-BOVBARoP.js";import"./Input-D1ohtzY1.js";import"./Suggestions.css-aqqCyRM-.js";import"./SuggestionItem-CnQ5JsmF.js";import"./i18n-defaults-Begitp65.js";import"./Person-Bk5r7PMP.js";import"./index-Cs_vIsdp.js";import"./less-Wc_6A1Tc.js";import"./index-mqU0d0YS.js";import"./ListItemStandard-B_Jgd157.js";import"./ButtonBadge-B10whS2W.js";import"./overflow-9qRuZlh6.js";const k=`## Design-Compliant Examples

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
