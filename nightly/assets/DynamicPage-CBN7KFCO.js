import{j as e}from"./iframe-l0Gg6LLs.js";import{useMDXComponents as m}from"./index-Cae9Voso.js";import{A as i}from"./ArgTypesWithNote-D1k1D1kl.js";import{C as p}from"./ControlsWithNote-BPBkFbxc.js";import{D as l}from"./DocsHeader-BIjaJ0Nr.js";import{F as g}from"./CommandsAndQueries-Clw2dQJN.js";import{M as u,C as r,a as f,D as s}from"./blocks-C2P3yVo4.js";import{C as o,D as a,S as x}from"./DynamicPage.stories-DSYDp4JC.js";import{S as y}from"./SubcomponentsSection-BVy4lpQe.js";import{a as d,b as c}from"./index-CznddS_1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DCqXNXQw.js";import"./information-BcS3rXju.js";import"./sys-enter-2-BSmamrdx.js";import"./alert-B368tBUy.js";import"./Tag-CjLUfCmJ.js";import"./index-Bwbvp4Wo.js";import"./index-C2QpZOLo.js";import"./Link-BXQMs19K.js";import"./copy-VS6NZnYU.js";import"./copy-B13EJS-v.js";import"./GitHub-Mark-BXPdSfrH.js";import"./TableOfContent-BdkB29Mz.js";import"./index-FAekmb_7.js";import"./index-I7Wz355y.js";import"./index-CihYjerb.js";import"./index-lxp-HdMJ.js";import"./index-hvU57qSB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DhC4Vn3X.js";import"./addCustomCSSWithScoping-DDpmsdIj.js";import"./index-B0YEyE12.js";import"./query-CzSBusdE.js";import"./overflow-C2FJ-3pI.js";import"./sort-descending-BxAlrwUx.js";import"./IconDesign-DXd8PPVF.js";import"./BarDesign-0UK-o0dt.js";import"./ThemingParameters-pyhX3s39.js";import"./index-Cfof4SU3.js";import"./index-24RKws5I.js";import"./Bar-D1lZm4Sf.js";import"./index-nCzjpF6h.js";import"./ListItemStandard-1yh_JDGs.js";import"./slim-arrow-down-mLEC8bQM.js";import"./slim-arrow-down-ZtlK-zaq.js";import"./index-DT_dZWXo.js";import"./ToolbarButton-C_uxLePn.js";import"./InvisibleMessage-DkkMM-lY.js";import"./slim-arrow-up-B3NBs2Ve.js";import"./pushpin-on-B-cghYQm.js";import"./ToggleButton-BvTjNdfc.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./i18n-defaults-uALom2Bu.js";function h(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...m(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:o}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(p,{of:a}),`
`,e.jsx(n.h2,{id:"dynamicpage-with-sticky-subheaders",children:"DynamicPage with sticky subheaders"}),`
`,e.jsxs(n.p,{children:[`The DynamicPage currently doesn't support sticky subheaders out of the box.
This example shows how you could achieve this behavior by applying custom CSS and using a `,e.jsx(n.code,{children:"ResizeObserver"})," for measuring the header height."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," We only recommend applying custom CSS if the ",e.jsx(n.code,{children:"DynamicPage"})," is scrollable."]}),`
`,e.jsx(r,{of:x,sourceState:"none"}),`
`,e.jsx(n.p,{children:"These are the key points of this implementation:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Using the ",e.jsx(n.code,{children:"part"})," pseudo-element selector to set the ",e.jsx(n.code,{children:"fit-content"})," part to use ",e.jsx(n.code,{children:"position: static;"}),"."]}),`
`,e.jsxs(n.li,{children:["Adding a ",e.jsx(n.code,{children:"ResizeObserver"})," to measure the ",e.jsx(n.code,{children:"header"})," element inside the shadow root of the component."]}),`
`,e.jsxs(n.li,{children:["Waiting for the custom element to be defined and for the ",e.jsx(n.code,{children:"shadowRoot"})," to be populated."]}),`
`]}),`
`,e.jsx(n.h3,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.dynamicPageStickyContent::part(fit-content) {
  position: static;
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const useGetHeaderHeight = (dynamicPageRef: RefObject<DynamicPageDomRef & { shadowRoot: ShadowRoot }>) => {
  const [headerHeight, setHeaderHeight] = useState<undefined | number>(undefined);
  useEffect(() => {
    const headerObserver = new ResizeObserver(([header]) => {
      setHeaderHeight(header.contentRect.height);
    });
    if (dynamicPageRef.current) {
      // wait for the custom element to be defined (adjust the tag-name if you're using the scoping feature)
      void customElements.whenDefined('ui5-dynamic-page').then(() => {
        const { shadowRoot } = dynamicPageRef.current;

        // wait for the shadowRoot to be populated
        const shadowRootObserver = new MutationObserver(() => {
          const header = shadowRoot.querySelector('header');
          if (header) {
            shadowRootObserver.disconnect();
            headerObserver.observe(header);
          }
        });

        if (shadowRoot && shadowRoot.childElementCount) {
          headerObserver.observe(shadowRoot.querySelector('header'));
        } else {
          shadowRootObserver.observe(shadowRoot, { childList: true });
        }
      });
    }
    return () => {
      headerObserver.disconnect();
    };
  }, []);
  return headerHeight;
};

function DynamicPageWithStickyContent(props) {
  const dynamicPageRef = useRef<DynamicPageDomRef & { shadowRoot: ShadowRoot }>(null);
  const headerHeight = useGetHeaderHeight(dynamicPageRef);

  return (
    <DynamicPage {...props} ref={dynamicPageRef} className="dynamicPageStickyContent">
      <>
        <div
          style={{
            position: 'sticky',
            width: '100%',
            height: '4rem',
            background: 'lightgreen',
            insetBlockStart: \`\${headerHeight}px\`
          }}
        >
          Sticky Header
        </div>
        <div style={{ width: '100%', background: 'orange', height: '10rem' }}>Content</div>
        <div
          style={{
            position: 'sticky',
            width: '100%',
            height: '8rem',
            background: 'lightgreen',
            insetBlockStart: \`calc(\${headerHeight}px + 4rem)\`
          }}
        >
          Sticky Header 2
        </div>
        <div style={{ background: 'lightblue', height: '2000px', width: '100%' }}>Content</div>
      </>
    </DynamicPage>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"opening-popover-components-by-pressing-an-action",children:"Opening popover components by pressing an action"}),`
`,e.jsxs(n.p,{children:["Please see the ",e.jsx(n.a,{href:"?path=/docs/layouts-floorplans-toolbar--docs#open-popovers-with-toolbarbutton",children:"Docs"})," of the ",e.jsx(n.code,{children:"Toolbar"})," component."]}),`
`,e.jsx(f,{children:y}),`
`,e.jsx(n.h2,{id:"dynamicpageheader",children:"DynamicPageHeader"}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(i,{metaOf:o,of:d}),`
`,e.jsx(n.h2,{id:"dynamicpagetitle",children:"DynamicPageTitle"}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(i,{metaOf:o,of:c}),`
`,e.jsx(g,{})]})}function ye(t={}){const{wrapper:n}={...m(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(h,{...t})}):h(t)}export{ye as default};
