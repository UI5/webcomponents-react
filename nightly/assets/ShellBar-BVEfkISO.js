import{j as e,e as s}from"./iframe-m9jt2Gb4.js";import{useMDXComponents as f}from"./index-RGZEkUe7.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-87CpIPmc.js";import"./Tag-CiALl0Be.js";import"./index-COrcBOeY.js";import{C as u}from"./ControlsWithNote-DfWkOMCN.js";import{D as S}from"./DocsHeader-NzDta9sq.js";import{F as v}from"./CommandsAndQueries-edZwg3xm.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-RtXpPGqJ.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-DD82ipPw.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B-8ilFG0.js";import"./sys-enter-2-DoymHnQS.js";import"./alert-BEZ6iJPu.js";import"./index-DK4LsWgA.js";import"./index-B5E0DaZi.js";import"./Link-BmbvCigV.js";import"./copy-CoAnf7XZ.js";import"./copy-ym3aYCLk.js";import"./GitHub-Mark-BzfYU4Nc.js";import"./TableOfContent-BrLJGmQ4.js";import"./index-YlQxkFIi.js";import"./index-U8bfBs9H.js";import"./index-BRPp-7oG.js";import"./index-B8eg2o8m.js";import"./index-D_3xpPA0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C3bZPHjv.js";import"./addCustomCSSWithScoping-B_aL8aFh.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./Search-DZXUFLdj.js";import"./Option-BCCKGeE5.js";import"./ListItemBaseTemplate-DtBXQ5ov.js";import"./Select-CWRM89JB.js";import"./InvisibleMessage-Y-gpMwBW.js";import"./slim-arrow-down-BYuclwN8.js";import"./slim-arrow-down-BBb3V39I.js";import"./ResponsivePopoverCommon.css-njDvm-N2.js";import"./ValueStateMessage.css-DOeSeMsA.js";import"./search-C1-n2wrz.js";import"./Input-e95l3hLj.js";import"./Suggestions.css-WQshat4v.js";import"./SuggestionItem-f7mMQ8dV.js";import"./i18n-defaults-uALom2Bu.js";import"./Person-Bk5r7PMP.js";import"./index-CO2hZTyW.js";import"./less-DBuv2uLm.js";import"./index-UM851_2c.js";import"./ListItemStandard-BI0Ll8pv.js";import"./ButtonBadge-PTRAG0_n.js";import"./overflow-V2D3PY46.js";const k=`## Design-Compliant Examples

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
