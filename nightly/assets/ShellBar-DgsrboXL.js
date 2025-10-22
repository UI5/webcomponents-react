import{j as e,e as s}from"./iframe-BgUChC8z.js";import{useMDXComponents as f}from"./index-Bt3QSaL1.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-xGQg2Vw5.js";import"./Tag-C_OAQHPO.js";import"./index-Wo45_tYZ.js";import{C as u}from"./ControlsWithNote-C0BpeSlm.js";import{D as S}from"./DocsHeader-DpC7xko2.js";import{F as v}from"./CommandsAndQueries-BiCzXToa.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-CnMNETlD.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-BljEANRT.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B5F-s1Wz.js";import"./sys-enter-2-pPHl1vwI.js";import"./alert-C-NbCkDs.js";import"./index-DUpxdMFd.js";import"./index-D4lpRvQf.js";import"./Link-BaaJYg0_.js";import"./copy-BA9m2lze.js";import"./copy-BTfIxGSH.js";import"./GitHub-Mark-BLzFnLXs.js";import"./TableOfContent-zmIy0jA9.js";import"./index-BQfpsC01.js";import"./index-BNFZf5J7.js";import"./index-EZPmIbpG.js";import"./index-I7ioAdFJ.js";import"./index-C5F4agy_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNw7RwQP.js";import"./addCustomCSSWithScoping-CSlMgmu5.js";import"./parameters-bundle.css-DHbieIhm.js";import"./Search-CNU5E2n8.js";import"./Option-Bz2fFbd9.js";import"./ListItemBaseTemplate-Di7slU74.js";import"./Select-DKO0kXu8.js";import"./InvisibleMessage-DzjrKdqv.js";import"./slim-arrow-down-CAVMB9Lc.js";import"./slim-arrow-down-BZSodC91.js";import"./ResponsivePopoverCommon.css-DQy2mY97.js";import"./ValueStateMessage.css-BQqInwWq.js";import"./search-CvsGh2Yr.js";import"./Input-BqX4tKYi.js";import"./Suggestions.css-CgWQiOZG.js";import"./SuggestionItem-DWN4Mbly.js";import"./i18n-defaults-DGnw9SAb.js";import"./Person-Bk5r7PMP.js";import"./index-DMT0rPiM.js";import"./less-DhsR2zRd.js";import"./index-BKPRjc__.js";import"./ListItemStandard-J4gk5GHC.js";import"./ButtonBadge-B4ZEf1X3.js";import"./overflow-CBpSibwX.js";const k=`## Design-Compliant Examples

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
