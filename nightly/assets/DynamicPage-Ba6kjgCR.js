import{n as e}from"./chunk-jRWAZmH_.js";import{Gm as t,io as n,no as r,ro as i,to as a}from"./iframe-C2-neVvG.js";import{r as o}from"./react-Btx5xI2k.js";import{_ as s,m as c,o as l,p as u,s as d,t as f}from"./components-LBE5S5GV.js";import{_ as p,d as m,o as h,r as g,u as _}from"./blocks-DSu3R0_v.js";import{n as v,t as y}from"./SubcomponentsSection-DYUGiO1B.js";import{Default as b,StickyContentHeaders as x,n as S,t as C}from"./DynamicPage.stories-Ce9MlABU.js";function w(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(m,{of:C}),`
`,(0,E.jsx)(d,{of:C}),`
`,(0,E.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,E.jsx)(g,{of:b}),`
`,(0,E.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,E.jsx)(u,{of:b}),`
`,(0,E.jsx)(t.h2,{id:`dynamicpage-with-sticky-subheaders`,children:`DynamicPage with sticky subheaders`}),`
`,(0,E.jsxs)(t.p,{children:[`The DynamicPage currently doesn't support sticky subheaders out of the box.
This example shows how you could achieve this behavior by applying custom CSS and using a `,(0,E.jsx)(t.code,{children:`ResizeObserver`}),` for measuring the header height.`]}),`
`,(0,E.jsxs)(t.p,{children:[(0,E.jsx)(t.strong,{children:`Note:`}),` We only recommend applying custom CSS if the `,(0,E.jsx)(t.code,{children:`DynamicPage`}),` is scrollable.`]}),`
`,(0,E.jsx)(g,{of:x,sourceState:`none`}),`
`,(0,E.jsx)(t.p,{children:`These are the key points of this implementation:`}),`
`,(0,E.jsxs)(t.ul,{children:[`
`,(0,E.jsxs)(t.li,{children:[`Using the `,(0,E.jsx)(t.code,{children:`part`}),` pseudo-element selector to set the `,(0,E.jsx)(t.code,{children:`fit-content`}),` part to use `,(0,E.jsx)(t.code,{children:`position: static;`}),`.`]}),`
`,(0,E.jsxs)(t.li,{children:[`Adding a `,(0,E.jsx)(t.code,{children:`ResizeObserver`}),` to measure the `,(0,E.jsx)(t.code,{children:`header`}),` element inside the shadow root of the component.`]}),`
`,(0,E.jsxs)(t.li,{children:[`Waiting for the custom element to be defined and for the `,(0,E.jsx)(t.code,{children:`shadowRoot`}),` to be populated.`]}),`
`]}),`
`,(0,E.jsx)(t.h3,{id:`code`,children:`Code`}),`
`,(0,E.jsx)(t.pre,{children:(0,E.jsx)(t.code,{className:`language-css`,children:`.dynamicPageStickyContent::part(fit-content) {
  position: static;
}
`})}),`
`,(0,E.jsx)(t.pre,{children:(0,E.jsx)(t.code,{className:`language-tsx`,children:`const useGetHeaderHeight = (dynamicPageRef: RefObject<DynamicPageDomRef & { shadowRoot: ShadowRoot }>) => {
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
`,(0,E.jsx)(t.h2,{id:`opening-popover-components-by-pressing-an-action`,children:`Opening popover components by pressing an action`}),`
`,(0,E.jsxs)(t.p,{children:[`Please see the `,(0,E.jsx)(t.a,{href:`?path=/docs/layouts-floorplans-toolbar--docs#open-popovers-with-toolbarbutton`,children:`Docs`}),` of the `,(0,E.jsx)(t.code,{children:`Toolbar`}),` component.`]}),`
`,(0,E.jsx)(_,{children:y}),`
`,(0,E.jsx)(t.h2,{id:`dynamicpageheader`,children:`DynamicPageHeader`}),`
`,(0,E.jsx)(h,{of:i}),`
`,(0,E.jsx)(c,{metaOf:C,of:i}),`
`,(0,E.jsx)(t.h2,{id:`dynamicpagetitle`,children:`DynamicPageTitle`}),`
`,(0,E.jsx)(h,{of:a}),`
`,(0,E.jsx)(c,{metaOf:C,of:a}),`
`,(0,E.jsx)(l,{})]})}function T(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,E.jsx)(t,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;e((()=>{E=t(),s(),f(),p(),S(),v(),r(),n()}))();export{T as default};