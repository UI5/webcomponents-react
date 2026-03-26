import{j as o}from"./iframe-CN9FvYjd.js";import{useMDXComponents as s}from"./index-CHfbFhXP.js";import{M as i,C as m}from"./blocks-BRVkHd00.js";import"./Tag-B_RTkJ1G.js";import"./index-CjC-3bum.js";import{C as c}from"./ControlsWithNote-BnC8IQEn.js";import{D as a}from"./DocsHeader-DBc1pcw5.js";import{F as d}from"./Footer-Dl9losBY.js";import"./CommandsAndQueries-BOIWtnt6.js";import"./PageNotFound-YEpHz0H_.js";import{C as r,D as t}from"./ResponsivePopover.stories-Cxrn19IF.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DYxN2cHX.js";import"./sys-enter-2-Cmiit89U.js";import"./alert-DCHWGnHk.js";import"./index-DHHIsfuO.js";import"./index-BFwC892N.js";import"./Link-Wi8OmUZE.js";import"./copy-DAuylYSV.js";import"./copy-CqLNgdQ9.js";import"./GitHub-Mark-DjfXo-cB.js";import"./TableOfContent-DIcVYEHe.js";import"./index-ZHKOt3Ry.js";import"./index-BbQq-ZOq.js";import"./index-LGty0-Ee.js";import"./index-qceCjzn0.js";import"./index-CdwqdKec.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-tlJUacgC.js";import"./addCustomCSSWithScoping-DzgJsuLH.js";import"./Illustrations-SwtMVqU-.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-Dfrdccyw.js";import"./index-xq182KXJ.js";import"./ListItemStandard-Bpw8kHSv.js";import"./settings-CoLrjw8E.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
`,o.jsx(a,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:t}),`
`,o.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(c,{of:t}),`
`,o.jsx(n.h2,{id:"opening-responsivepopovers",children:"Opening ResponsivePopovers"}),`
`,o.jsxs(n.p,{children:["You can open and close the ",o.jsx(n.code,{children:"ResponsivePopover"})," component in a declarative way using the ",o.jsx(n.code,{children:"open"})," and ",o.jsx(n.code,{children:"opener"})," prop."]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-jsx",children:`const MyComponentWithPopover = () => {
  const btnRef = useRef(null);
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  return (
    <>
      <Button
        ref={btnRef}
        onClick={() => {
          setPopoverIsOpen(true);
        }}
      >
        Open Popover
      </Button>
      <ResponsivePopover
        opener={btnRef.current}
        open={popoverIsOpen}
        onClose={() => {
          setPopoverIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,o.jsx(d,{})]})}function Q(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(p,{...e})}):p(e)}export{Q as default};
