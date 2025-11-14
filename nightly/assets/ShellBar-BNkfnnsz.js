import{j as e,e as s}from"./iframe-4qrVzB25.js";import{useMDXComponents as f}from"./index-C23NGFAV.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-CyApLjCn.js";import"./Tag-DxNYrBt-.js";import"./index-BHBPbkXo.js";import{C as u}from"./ControlsWithNote-BYEE2MCW.js";import{D as S}from"./DocsHeader-DT0KhBwl.js";import{F as v}from"./CommandsAndQueries-C8f_O47Z.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-C_XrCYjI.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-D2zwQSfE.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DyICkYh-.js";import"./sys-enter-2-I-7Y6xsp.js";import"./alert-DbMRFtnZ.js";import"./index-CU3hZFou.js";import"./index-MWca-2b0.js";import"./Link-Cc0E88FG.js";import"./copy-B-DhHHC8.js";import"./copy-BwZFHKgv.js";import"./GitHub-Mark-CEvF6Ciw.js";import"./TableOfContent-CvIukNHP.js";import"./index-Cj8ZVdQX.js";import"./index-bsQInf2g.js";import"./index-CMfGGfhU.js";import"./index-Cvq3zOuj.js";import"./index-Cjln1VVF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BbqnCkxg.js";import"./addCustomCSSWithScoping-DQAaXiXr.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./Search-a0w54ciF.js";import"./Option-C10NqIPh.js";import"./ListItemBaseTemplate-KBembrXH.js";import"./Select-DOxg7abA.js";import"./InvisibleMessage-CEq_zNWh.js";import"./slim-arrow-down-HR07Gity.js";import"./slim-arrow-down-CXefVYMG.js";import"./ResponsivePopoverCommon.css-C7ocu6v6.js";import"./ValueStateMessage.css-BkV0tb0J.js";import"./search-BhPyiXLu.js";import"./Input-DCZqkJuY.js";import"./Suggestions.css-DkwtHK1N.js";import"./SuggestionItem-CjsbBv9j.js";import"./i18n-defaults-k5o3Svb4.js";import"./Person-Bk5r7PMP.js";import"./index-BGEN4a8i.js";import"./less-BmzQiuIj.js";import"./index-BZM5f7AU.js";import"./ListItemStandard-CjlAH9Fu.js";import"./ButtonBadge-B34TW16V.js";import"./overflow-Du07VkXr.js";const k=`## Design-Compliant Examples

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
