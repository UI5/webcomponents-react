import{j as e,E as s}from"./iframe-CEsx9pS5.js";import{useMDXComponents as f}from"./index-gmjnJOv_.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-8Wtp1Sju.js";import"./Tag-HQWMt5YG.js";import"./index-CTv8OR9t.js";import{C as u}from"./ControlsWithNote-YYMR15zM.js";import{D as S}from"./DocsHeader-DfeeVf-S.js";import{F as v}from"./Footer-BzqBC082.js";import"./CommandsAndQueries-KRiBOwvQ.js";import"./PageNotFound-Dm-lShwt.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{b as l,S as p,c as m,a as c}from"./sys-help-BU4vW6A2.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-DhmK0ymB.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BsgOGoHr.js";import"./sys-enter-2-QXPkX9VX.js";import"./alert-C6xGNNq6.js";import"./index-CYl2KpDn.js";import"./index-C3LB4ZIk.js";import"./Link-Op-ol6Yv.js";import"./copy-Dtv2ACv8.js";import"./copy-BKv99Y3s.js";import"./GitHub-Mark-CjM5Qo24.js";import"./TableOfContent-BT3myzbQ.js";import"./index-D0QmD1oJ.js";import"./index-BUd2Yp1O.js";import"./index-LEy71z39.js";import"./index-C0Wj8jmE.js";import"./index-CNLVL7wa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-dF5rg7Pk.js";import"./addCustomCSSWithScoping-C93rkw8E.js";import"./Illustrations-B8Nne3o3.js";import"./i18n-defaults-CFWtSmu6.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CDvCG3eO.js";import"./query-CzSBusdE.js";import"./ButtonBadge-DgUgFhPm.js";import"./ListItemStandard-COM3Y617.js";import"./search-CC3ScZx4.js";import"./overflow-An3HIARQ.js";import"./Search-B-7XGWI2.js";import"./Option-kRDMIGPk.js";import"./ListItemBaseTemplate-DUd-IfCf.js";import"./Select-CXP-jLKH.js";import"./InvisibleMessage-B3PoH58P.js";import"./ResponsivePopoverCommon.css-C3wjaSr6.js";import"./ValueStateMessage.css-CpYwQkVy.js";import"./Input-AKSpFtND.js";import"./Suggestions.css-BxYCrzla.js";import"./SuggestionItem-BI3gNhRI.js";import"./Person-Bk5r7PMP.js";import"./index-C0ZNn2ww.js";import"./less-DZRRGc_Y.js";const k=`## Design-Compliant Examples

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
