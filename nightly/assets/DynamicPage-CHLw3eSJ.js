import{j as e}from"./iframe-CeYK60h5.js";import{useMDXComponents as m}from"./index-CyuETzTv.js";import{A as i}from"./ArgTypesWithNote-DSM9iQ9w.js";import{C as p}from"./ControlsWithNote-BC1HLgT2.js";import{D as l}from"./DocsHeader-CLOsrio_.js";import{F as g}from"./CommandsAndQueries-CFbtJHwM.js";import{M as u,C as r,a as f,D as s}from"./blocks-BIKTnw0B.js";import{C as o,D as a,S as x}from"./DynamicPage.stories-DYgXJcX9.js";import{S as y}from"./SubcomponentsSection-BVy4lpQe.js";import{D as d,a as c}from"./index-t7roTh6z.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CT0V1rC-.js";import"./information-BkZW1INs.js";import"./sys-enter-2-Bag4B31-.js";import"./alert-q5zKag_b.js";import"./Tag-C54M4ldZ.js";import"./index-C9AaKYqF.js";import"./index-BQVvVbng.js";import"./Link-B2AcL4ks.js";import"./copy-Ow-aeN6u.js";import"./copy-CiRkqTCy.js";import"./GitHub-Mark-DqVF3KiZ.js";import"./TableOfContent-CmoLNGGQ.js";import"./index-CHuebsjW.js";import"./index-DCNRybmK.js";import"./index-C-Yn0AU-.js";import"./index-CaQyDWQ7.js";import"./index-DBl_V_lR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CkPy33bc.js";import"./addCustomCSSWithScoping-BSnYfvCe.js";import"./index-CM_MhPFC.js";import"./query-CzSBusdE.js";import"./overflow-D1o8kKQZ.js";import"./sort-descending-aDuCK_fE.js";import"./IconDesign-DXd8PPVF.js";import"./BarDesign-0UK-o0dt.js";import"./ThemingParameters-pyhX3s39.js";import"./index-ZeQWpjUk.js";import"./index-BsjGGZdl.js";import"./ListItemStandard-DChf4TnK.js";import"./slim-arrow-down-B3EB9Tld.js";import"./slim-arrow-down-CVGDx6dI.js";import"./index-BvmuGRVC.js";import"./ToolbarButton-CjRziWtm.js";import"./index-CcbEUoiT.js";import"./Bar-CJXJtys5.js";import"./InvisibleMessage-BjsU8t7h.js";import"./slim-arrow-up-D_rgx8ts.js";import"./pushpin-on-BNpmsjLw.js";import"./ToggleButton-HnifA80u.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./i18n-defaults-Ca0KLLzw.js";function h(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...m(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:o}),`
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
