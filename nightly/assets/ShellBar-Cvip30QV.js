import{j as e,B as s}from"./iframe-ouw07lhn.js";import{useMDXComponents as f}from"./index-Cip0-ov6.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-Bw5GcbeR.js";import"./Tag-DRYfjFpo.js";import"./index-CiN9pZLU.js";import{C as u}from"./ControlsWithNote-DX3Cg25w.js";import{D as S}from"./DocsHeader-BjK80ax0.js";import{F as v}from"./CommandsAndQueries-vCNbGeur.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{b as l,S as p,c as m,a as c}from"./sys-help-DHYX0SHJ.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-fhoeDLJV.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bs_aR9DP.js";import"./sys-enter-2-C-Nxg2w-.js";import"./alert-D5Y3hKT1.js";import"./index-BPh4j9eE.js";import"./index-COqVCE1o.js";import"./Link-DkIKsy6A.js";import"./copy-B_nVgV11.js";import"./copy-B_ty4mVH.js";import"./GitHub-Mark-BxeebIXL.js";import"./TableOfContent-CGKwH133.js";import"./index-DKdSXnqp.js";import"./index-ByxVEtyu.js";import"./index-C2ZF5Jpp.js";import"./index-CrUz0E6u.js";import"./index-COELAX_g.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzV-vkfR.js";import"./addCustomCSSWithScoping-vWKRTHDz.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./Search-DKXbyxMS.js";import"./Option-CiUM31JF.js";import"./ListItemBaseTemplate-C1cC5hl7.js";import"./Select-BtMH0-7-.js";import"./InvisibleMessage-DuwvrpMq.js";import"./slim-arrow-down-YfB-XMvS.js";import"./slim-arrow-down-nnK8FJIO.js";import"./ResponsivePopoverCommon.css-DcoHmoxx.js";import"./ValueStateMessage.css-XdpxvNbf.js";import"./search-CgS-Nxdr.js";import"./Input-CI1OROWq.js";import"./Suggestions.css-mbx7WJoo.js";import"./SuggestionItem-x9ZQujZb.js";import"./i18n-defaults-Ca0KLLzw.js";import"./Person-Bk5r7PMP.js";import"./index-D4laCzAs.js";import"./less-BK4CsGlP.js";import"./index-Dhwx--zf.js";import"./ListItemStandard-CMrSakoj.js";import"./ButtonBadge-ca8E_C2K.js";import"./overflow-B4HGGpF7.js";const k=`## Design-Compliant Examples

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
