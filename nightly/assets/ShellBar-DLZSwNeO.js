import{j as e,E as s}from"./iframe-JepDsySv.js";import{useMDXComponents as f}from"./index-BGpK8Gfn.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-BbBU6U9u.js";import"./Tag-B5HHC3_D.js";import"./index-CgzvULcW.js";import{C as u}from"./ControlsWithNote-CirU9jF3.js";import{D as S}from"./DocsHeader-DU5w_HiK.js";import{F as v}from"./Footer-DkGRGaaK.js";import"./CommandsAndQueries-BpbXUgFJ.js";import"./PageNotFound-BYj9CuoF.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{b as l,S as p,c as m,a as c}from"./sys-help-BK6fEAYK.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-BbYLnC81.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DXY6cLV_.js";import"./sys-enter-2-e1zqJEbk.js";import"./alert-BXOPntd7.js";import"./index-CIXtBD0J.js";import"./index-Bd6WgbUi.js";import"./Link-BLuv4AbX.js";import"./copy-Bmpb5kaN.js";import"./copy-D2Pke32f.js";import"./GitHub-Mark-CxBZqW50.js";import"./TableOfContent-DzhvbQtx.js";import"./index-8tSJZtFG.js";import"./index-0BxTwmFy.js";import"./index-BKoJ8bur.js";import"./index-C220bubu.js";import"./index-CcxcRSha.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzfOud-0.js";import"./addCustomCSSWithScoping-f93Oozyz.js";import"./Illustrations-sShT8n29.js";import"./i18n-defaults-C7ICj5-E.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./Search-CbQYQd85.js";import"./Option-B-qv-w1U.js";import"./ListItemBaseTemplate-yAH3C8cG.js";import"./Select-BmEwDHzx.js";import"./InvisibleMessage-DglvjQpx.js";import"./slim-arrow-down-DOXlkwy5.js";import"./slim-arrow-down-Dt-7CG4Q.js";import"./ResponsivePopoverCommon.css-BKF0yN8r.js";import"./ValueStateMessage.css-C0leCwz7.js";import"./search-CRNA4j42.js";import"./Input-f39H6uy6.js";import"./Suggestions.css-DPwYa0Rw.js";import"./SuggestionItem-Db9ZyQ-5.js";import"./Person-Bk5r7PMP.js";import"./index-C8CCEPvY.js";import"./less-D8z_9I33.js";import"./index-DsX3Tct6.js";import"./ListItemStandard-DaU3lC3b.js";import"./ButtonBadge-DHPm0Dje.js";import"./overflow-CCXqCX8C.js";const k=`## Design-Compliant Examples

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
`,e.jsx(v,{})]})}function Ie(o={}){const{wrapper:n}={...f(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(x,{...o})}):x(o)}export{Ie as default};
