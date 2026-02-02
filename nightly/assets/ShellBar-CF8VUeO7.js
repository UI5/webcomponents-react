import{j as e,B as s}from"./iframe-D9fHiNXF.js";import{useMDXComponents as f}from"./index-DRx499Oz.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-BHC48FnS.js";import"./Tag-D1pdGQFQ.js";import"./index-CsAQ2Eng.js";import{C as u}from"./ControlsWithNote-_PgGUMw2.js";import{D as S}from"./DocsHeader-fdSKAoIc.js";import{F as v}from"./CommandsAndQueries-CDyFXIce.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-BXKv50O7.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-D_CT70l8.js";import"./preload-helper-PPVm8Dsz.js";import"./information-wNu5DDkV.js";import"./sys-enter-2-NNUjaus9.js";import"./alert-DnsJPzcv.js";import"./index-BVc7ik8a.js";import"./index-79vX-IjV.js";import"./Link-UWQK2ZBb.js";import"./copy-ClYjzaDz.js";import"./copy-FG9bHXhV.js";import"./GitHub-Mark-BVG-IHke.js";import"./TableOfContent-BNFLd8cv.js";import"./index-CJoLxfl_.js";import"./index-BYfLRpIA.js";import"./index-D9W7JLGJ.js";import"./index-C7nfqaAP.js";import"./index-DN7QVpUQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOEmcw1X.js";import"./addCustomCSSWithScoping-QhFRL0Bb.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./Search-BUmHrqny.js";import"./Option-55orDd_d.js";import"./ListItemBaseTemplate-BhNv4eWh.js";import"./Select-CF4_xxsY.js";import"./InvisibleMessage-sWP7KXqk.js";import"./slim-arrow-down-CGx4RFlV.js";import"./slim-arrow-down-COoxlr3U.js";import"./ResponsivePopoverCommon.css-B2qfRnNF.js";import"./ValueStateMessage.css-DyMGuFCu.js";import"./search-WtpPm5xu.js";import"./Input-CCJrpN8k.js";import"./Suggestions.css-s007qcu9.js";import"./SuggestionItem-BbBOeYnY.js";import"./i18n-defaults-Begitp65.js";import"./Person-Bk5r7PMP.js";import"./index-Bxyp0YjT.js";import"./less-QRjFxrUk.js";import"./index-BrMlub4J.js";import"./ListItemStandard-BBXUErcD.js";import"./ButtonBadge-C9PR3DxJ.js";import"./overflow-8IUCJLIR.js";const k=`## Design-Compliant Examples

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
