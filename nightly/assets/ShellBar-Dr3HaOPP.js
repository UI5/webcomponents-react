import{j as e,e as s}from"./iframe-CXDBwaXf.js";import{useMDXComponents as f}from"./index-Dq-vd5Ev.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-BAIBAw_h.js";import"./Tag-BGtFiUzo.js";import"./index-CdM50YVo.js";import{C as u}from"./ControlsWithNote-D9v8NJR6.js";import{D as S}from"./DocsHeader-CgBwQAL4.js";import{F as v}from"./CommandsAndQueries-EFbMjjAa.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-iF5ghmpT.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-CDWDarSp.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BIroKfax.js";import"./sys-enter-2-a30AyDBZ.js";import"./alert-Bp9zzpf6.js";import"./index-74IMF4Fu.js";import"./index-CNRdJAzz.js";import"./Link-Cn9jKhUL.js";import"./copy-CeafGCkU.js";import"./copy-tKRdoNaC.js";import"./GitHub-Mark-H1zA7MT_.js";import"./TableOfContent-Beyzx59M.js";import"./index-CdFEqecu.js";import"./index-Dkyq4U7I.js";import"./index-Ekr32cnm.js";import"./index-BZ8xLssE.js";import"./index-C2VBEgX9.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BhiljY7Y.js";import"./addCustomCSSWithScoping-DOTw8Y7k.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./Search-BC_VMDCA.js";import"./Option-ChH-SgHF.js";import"./ListItemBaseTemplate-Jxaz0vER.js";import"./Select-Brcl3j_5.js";import"./InvisibleMessage-DHYzFVaN.js";import"./slim-arrow-down-B9i1iNEL.js";import"./slim-arrow-down-ziHFyrxY.js";import"./ResponsivePopoverCommon.css-DzYVdD7o.js";import"./ValueStateMessage.css-DY78SEwL.js";import"./search-DBS0cIKA.js";import"./Input-D9M-oH0b.js";import"./Suggestions.css-D9onRGXn.js";import"./SuggestionItem-A-OV44pz.js";import"./i18n-defaults-uALom2Bu.js";import"./Person-Bk5r7PMP.js";import"./index-B5ACz2H-.js";import"./less-CUrM5DQy.js";import"./index-DwkGIcsv.js";import"./ListItemStandard-BcjimPYv.js";import"./ButtonBadge-CUGdPmv9.js";import"./overflow-B1wHJTbZ.js";const k=`## Design-Compliant Examples

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
