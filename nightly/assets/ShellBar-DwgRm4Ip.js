import{j as e,E as s}from"./iframe-BDg7FSoj.js";import{useMDXComponents as f}from"./index-CfS6z3MT.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-D274WTCA.js";import"./Tag-D7GKpW6g.js";import"./index-BfRGPCU-.js";import{C as u}from"./ControlsWithNote-hta_rmOq.js";import{D as S}from"./DocsHeader-Br2gHYWL.js";import{F as v}from"./Footer-DcSScdvn.js";import"./CommandsAndQueries-BgLg0c2t.js";import"./PageNotFound-Cz7A_GPz.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{b as l,S as p,c as m,a as c}from"./sys-help-BXJx-KHc.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-BziDx-MC.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DD__sQ7N.js";import"./sys-enter-2-Dp2sy9f7.js";import"./alert-C6BvEboW.js";import"./index-DKaIOimk.js";import"./index-CtXj8tW6.js";import"./Link-DweKFefr.js";import"./copy-Dwmjmk6r.js";import"./copy-LtMPx_h3.js";import"./GitHub-Mark-BXWTi3jp.js";import"./TableOfContent-LJE63-X7.js";import"./index-ClFnafIK.js";import"./index-Ca5wJMxN.js";import"./index-YYn2-nAM.js";import"./index-Cr06KJoh.js";import"./index-Cs36UH1Y.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CX4riDWF.js";import"./addCustomCSSWithScoping-DjKpxhL9.js";import"./Illustrations-BhEYUAiS.js";import"./i18n-defaults-CFWtSmu6.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DOu113Aq.js";import"./query-CzSBusdE.js";import"./ButtonBadge-C8bDm6GC.js";import"./ListItemStandard-C9BXoiP3.js";import"./search-Dnaft9nb.js";import"./overflow-DYE-l-h9.js";import"./Search-CpfgWzT2.js";import"./Option-Dz3WWHcz.js";import"./ListItemBaseTemplate-COnbdXmo.js";import"./Select-Br85qeyo.js";import"./InvisibleMessage-DTrhxE2q.js";import"./ResponsivePopoverCommon.css-YN2yb077.js";import"./ValueStateMessage.css-CZSQW4Xi.js";import"./Input-DPh2xJTy.js";import"./Suggestions.css-CoI0xqid.js";import"./SuggestionItem-DeimWAUM.js";import"./Person-Bk5r7PMP.js";import"./index-DPqF1ogR.js";import"./less-MXFQYBDW.js";const k=`## Design-Compliant Examples

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
`,e.jsx(v,{})]})}function De(o={}){const{wrapper:n}={...f(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(x,{...o})}):x(o)}export{De as default};
