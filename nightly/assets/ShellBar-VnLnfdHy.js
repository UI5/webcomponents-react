import{j as e,e as s}from"./iframe-BMswfRdZ.js";import{useMDXComponents as f}from"./index-MaqCtoEe.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-BZVeQw2D.js";import"./Tag-BVHvhlCz.js";import"./index-B-ZVjbqr.js";import{C as u}from"./ControlsWithNote-C5w7tvs5.js";import{D as S}from"./DocsHeader-DyZhqw-W.js";import{F as v}from"./CommandsAndQueries-B0EQ2-2W.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-CvuJMg-t.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-CF-JO-NK.js";import"./preload-helper-PPVm8Dsz.js";import"./information-1i220cDO.js";import"./sys-enter-2-CawaAm0L.js";import"./alert-uwYQHS-7.js";import"./index-mp2uLi6B.js";import"./index-FIeWjkuH.js";import"./Link-BGQljDJU.js";import"./copy-B-yWQLT6.js";import"./copy-Cy5PMYPR.js";import"./GitHub-Mark-CpBusc3m.js";import"./TableOfContent-C_ApkRdL.js";import"./index-Cf0lk0Qk.js";import"./index-B-CAKhwh.js";import"./index-B7ZM6Wte.js";import"./index-E1nxDY_p.js";import"./index-Dm33NnkB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzwX1HTL.js";import"./addCustomCSSWithScoping-DQLnc9QR.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./Search-DD8haBe-.js";import"./Option-BoFss70v.js";import"./ListItemBaseTemplate-vEHYPQIG.js";import"./Select-2IbUasvX.js";import"./InvisibleMessage-DWiN-Q82.js";import"./slim-arrow-down-DVB6jdIA.js";import"./slim-arrow-down-DZiL5RY8.js";import"./ResponsivePopoverCommon.css-Cys9VWui.js";import"./ValueStateMessage.css-CqCvpxGR.js";import"./search-CWmGEe1F.js";import"./Input--pdg4UEC.js";import"./Suggestions.css-BsUzn6Ma.js";import"./SuggestionItem-C9jZ74yI.js";import"./i18n-defaults-uALom2Bu.js";import"./Person-Bk5r7PMP.js";import"./index-Fa-JpXF4.js";import"./less-B6Uo9h2u.js";import"./index-D2Q_QZwR.js";import"./ListItemStandard-BgY-3qr3.js";import"./ButtonBadge-B8jwOT4f.js";import"./overflow-B3VazURy.js";const k=`## Design-Compliant Examples

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
