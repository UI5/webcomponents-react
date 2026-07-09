import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{J as n,X as r,Y as i,q as a}from"./webComponents-BSGz9Dne.js";import{A as o,_ as s,d as c,o as l,r as u,u as d}from"./blocks-C4kqaDJT.js";import{E as f,S as p,b as m,f as h,t as g,u as _}from"./components-CCysyjjQ.js";import{n as v,t as y}from"./SubcomponentsSection-CcVV1-ds.js";import{Default as b,StickyContentHeaders as x,n as S,t as C}from"./DynamicPage.stories-BMaWIYE1.js";function w(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(c,{of:C}),`
`,(0,E.jsx)(h,{of:C}),`
`,(0,E.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,E.jsx)(u,{of:b}),`
`,(0,E.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,E.jsx)(m,{of:b}),`
`,(0,E.jsx)(t.h2,{id:`dynamicpage-with-sticky-subheaders`,children:`DynamicPage with sticky subheaders`}),`
`,(0,E.jsxs)(t.p,{children:[`The DynamicPage currently doesn't support sticky subheaders out of the box.
This example shows how you could achieve this behavior by applying custom CSS and using a `,(0,E.jsx)(t.code,{children:`ResizeObserver`}),` for measuring the header height.`]}),`
`,(0,E.jsxs)(t.p,{children:[(0,E.jsx)(t.strong,{children:`Note:`}),` We only recommend applying custom CSS if the `,(0,E.jsx)(t.code,{children:`DynamicPage`}),` is scrollable.`]}),`
`,(0,E.jsx)(u,{of:x,sourceState:`none`}),`
`,(0,E.jsx)(t.p,{children:`These are the key points of this implementation:`}),`
`,(0,E.jsxs)(t.ul,{children:[`
`,(0,E.jsxs)(t.li,{children:[`Using the `,(0,E.jsx)(t.code,{children:`part`}),` pseudo-element selector to set the `,(0,E.jsx)(t.code,{children:`fit-content`}),` part to use `,(0,E.jsx)(t.code,{children:`position: static;`}),`.`]}),`
`,(0,E.jsxs)(t.li,{children:[`Adding a `,(0,E.jsx)(t.code,{children:`ResizeObserver`}),` to measure the title/header wrapper (`,(0,E.jsx)(t.code,{children:`.ui5-dynamic-page-title-header-wrapper`}),`) inside the shadow root of the component.`]}),`
`,(0,E.jsxs)(t.li,{children:[`Waiting for the custom element to be defined and for the `,(0,E.jsx)(t.code,{children:`shadowRoot`}),` to be populated.`]}),`
`]}),`
`,(0,E.jsx)(t.h3,{id:`code`,children:`Code`}),`
`,(0,E.jsx)(t.pre,{children:(0,E.jsx)(t.code,{className:`language-css`,children:`.dynamicPageStickyContent::part(fit-content) {
  position: static;
}
`})}),`
`,(0,E.jsx)(t.pre,{children:(0,E.jsx)(t.code,{className:`language-tsx`,children:`const HEADER_SELECTOR = '.ui5-dynamic-page-title-header-wrapper';

const useGetHeaderHeight = (dynamicPageRef: RefObject<DynamicPageDomRef & { shadowRoot: ShadowRoot }>) => {
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
          const header = shadowRoot.querySelector(HEADER_SELECTOR);
          if (header) {
            shadowRootObserver.disconnect();
            headerObserver.observe(header);
          }
        });

        if (shadowRoot && shadowRoot.childElementCount) {
          headerObserver.observe(shadowRoot.querySelector(HEADER_SELECTOR));
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
`,(0,E.jsx)(t.h2,{id:`opening-popover-components-by-pressing-an-action`,children:`Opening popover components by pressing an action`}),`
`,(0,E.jsxs)(t.p,{children:[`Please see the `,(0,E.jsx)(t.a,{href:`?path=/docs/layouts-floorplans-toolbar--docs#open-popovers-with-toolbarbutton`,children:`Docs`}),` of the `,(0,E.jsx)(t.code,{children:`Toolbar`}),` component.`]}),`
`,(0,E.jsx)(d,{children:y}),`
`,(0,E.jsx)(t.h2,{id:`dynamicpageheader`,children:`DynamicPageHeader`}),`
`,(0,E.jsx)(l,{of:i}),`
`,(0,E.jsx)(p,{metaOf:C,of:i}),`
`,(0,E.jsx)(t.h2,{id:`dynamicpagetitle`,children:`DynamicPageTitle`}),`
`,(0,E.jsx)(l,{of:a}),`
`,(0,E.jsx)(p,{metaOf:C,of:a}),`
`,(0,E.jsx)(_,{})]})}function T(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,E.jsx)(t,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;e((()=>{E=t(),f(),g(),s(),S(),v(),n(),r()}))();export{T as default};