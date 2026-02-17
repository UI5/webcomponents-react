import{j as e}from"./iframe-XvyKyqpc.js";import{useMDXComponents as m}from"./index-CE_ul58K.js";import{A as i}from"./ArgTypesWithNote-371DRQO9.js";import{C as p}from"./ControlsWithNote-Clas6Dv3.js";import{D as l}from"./DocsHeader-CED_bmbF.js";import{F as g}from"./CommandsAndQueries-D-JkQMzp.js";import{M as u,C as r,a as f,D as s}from"./blocks-hAblz1ET.js";import{C as o,D as a,S as x}from"./DynamicPage.stories-fABJxxuJ.js";import{S as y}from"./SubcomponentsSection-BVy4lpQe.js";import{D as d,a as c}from"./index-CPYjzumL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CXUKZsMC.js";import"./information-CNwM68I2.js";import"./sys-enter-2-QkDyn9HM.js";import"./alert-DG7Yrkg6.js";import"./Tag-BEblEGCN.js";import"./index-Du72Y0zD.js";import"./index-BkdKA5kQ.js";import"./Link-DWmr0_tI.js";import"./copy-Dg-JJVOo.js";import"./copy-CAC71KE2.js";import"./GitHub-Mark-sAxlGc2v.js";import"./TableOfContent-CaC-efIA.js";import"./index--us6wF-5.js";import"./index-CP30tsdj.js";import"./index-DQ79lCi8.js";import"./index-BFysEZU1.js";import"./index-dfRDbF4B.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-m1ntkPM9.js";import"./addCustomCSSWithScoping-B_TWNpIo.js";import"./index-C7Wc3_wF.js";import"./query-CzSBusdE.js";import"./overflow-DPgYmTml.js";import"./sort-descending-ByDZzzA_.js";import"./IconDesign-DXd8PPVF.js";import"./BarDesign-0UK-o0dt.js";import"./ThemingParameters-pyhX3s39.js";import"./index-ZsJCbCIz.js";import"./index-qPcTEenW.js";import"./ListItemStandard-B7uEHLD7.js";import"./slim-arrow-down-B4bsCSMm.js";import"./slim-arrow-down-DK-zw0Wg.js";import"./index-AlChgApv.js";import"./ToolbarButton-m3CmQSmH.js";import"./index-BBz_o8J6.js";import"./Bar-BacZTV6R.js";import"./InvisibleMessage-frxXXEWO.js";import"./slim-arrow-up-DRCAq7RE.js";import"./pushpin-on-B2pKkhsk.js";import"./ToggleButton-dSfF2CYI.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./i18n-defaults-Ca0KLLzw.js";function h(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...m(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:o}),`
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
