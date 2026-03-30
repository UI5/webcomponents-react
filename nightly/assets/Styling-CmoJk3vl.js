import{d1 as m,d2 as u,d3 as x,n as g,j as e,ae as j}from"./iframe-Dr24b1_2.js";import{u as d,M as y}from"./blocks-DOkdIKLK.js";import"./Tag-BIxdINB7.js";import{M as r,a as i}from"./index-CL-oiXYR.js";import"./CommandsAndQueries-D2RSxAeU.js";import"./copy-D1SgAW06.js";import{T as S}from"./TableOfContent-CTShD90n.js";import{F as f}from"./Footer-B2LKGocf.js";import"./PageNotFound-t4KH-Yk6.js";import{C as b}from"./Card.stories-DfrPGO4U.js";import{T as a}from"./ThemingParameters-BvhwmbYD.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C20uFQS0.js";import"./sys-enter-2-CQd_0MF7.js";import"./alert-B9PmGrag.js";import"./Link-CG4ImuUx.js";import"./index-_maGeclj.js";import"./index-aTzn3I1m.js";import"./index-B_PGO6aF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dh4aGlp7.js";import"./addCustomCSSWithScoping-BCzlWLsZ.js";import"./index-VF4msgJe.js";import"./index-CjU6u75C.js";import"./index-DrqpZzSV.js";import"./index-DcUuq1aq.js";import"./Illustrations-Dt9P8lxH.js";import"./i18n-defaults-CFWtSmu6.js";import"./person-placeholder-qhwwkTu0.js";import"./person-placeholder-DrASQTu1.js";import"./index-qdfYSK8X.js";import"./YAxisTicks-BYVCXC1t.js";import"./ChartContainer-C-1o_phy.js";import"./index-CJOj_130.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-D8TxQYcM.js";import"./staticProps-l9IXS5uI.js";import"./ChartDataLabel-DaRX_8SC.js";import"./useLongestYAxisLabel-CKr_oxOA.js";import"./react-content-loader.es-B7RQtwj4.js";import"./Line-mc0M3XmI.js";import"./useIsRTL-BcSpX-QV.js";import"./index-De4PUciJ.js";import"./utils-BXYFGvnm.js";import"./index-BiTc-6U3.js";import"./index-CvsFmqac.js";import"./ListItemStandard-B4U2FtO3.js";const{global:w}=__STORYBOOK_MODULE_GLOBAL__;var{window:l}=w;l&&(l.STORYBOOK_ENV="react");const{composeConfigs:C,composeStories:v,composeStory:T,setProjectAnnotations:Te,setDefaultProjectAnnotations:_e}=__STORYBOOK_MODULE_PREVIEW_API__;var _=C([m,u,{renderToCanvas:async(n,t)=>{if(n.storyContext.testingLibraryRender==null)return x(n,t);let{storyContext:{context:o,unboundStoryFn:s,testingLibraryRender:h}}=n,{unmount:p}=h(g.createElement(s,{...o}),{container:o.canvasElement});return p}}]);function P(n,t,o,s){return T(n,t,o,globalThis.globalProjectAnnotations??_,s)}function E(n,t){return v(n,t,P)}const{Default:M}=E(b),N=()=>e.jsx("div",{children:e.jsx(M,{className:"card"})}),A=()=>e.jsx("div",{className:"containerCustomElement",children:e.jsx("span",{style:{color:a.sapNegativeColor,fontSize:a.sapFontLargeSize},children:"My Text"})});function c(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Styling"}),`
`,e.jsx(t.h1,{id:"styling",children:"Styling"}),`
`,e.jsx(S,{}),`
`,e.jsx(t.h2,{id:"styling-ui5-web-components-for-react-components",children:"Styling UI5 Web Components (for React) components"}),`
`,e.jsxs(t.p,{children:["UI5 Web Components for React follows the same styling approach as the core ",e.jsx(t.a,{href:"https://ui5.github.io/webcomponents/docs/advanced/styles/",rel:"nofollow",children:"UI5 Web Components"}),`.
You can apply CSS variables, use the `,e.jsx(t.code,{children:"::part"})," pseudo-element selectors, or apply styles directly on selected components (e.g. ",e.jsx(t.code,{children:"Button"}),", ",e.jsx(t.code,{children:"Title"}),", ",e.jsx(t.code,{children:"Input"}),", etc. ) as described in the linked ",e.jsx(t.a,{href:"https://ui5.github.io/webcomponents/docs/advanced/styles/",rel:"nofollow",children:"documentation"}),"."]}),`
`,e.jsxs(t.p,{children:["Components currently only available in the ",e.jsx(t.code,{children:"ui5/webcomponents-react"})," repo, are not necessarily web components. For these kind of components you can follow the standard styling approach of React."]}),`
`,e.jsx(r,{design:i.Critical,hideCloseButton:!0,children:"While it's easily possible targeting DOM elements and CSS classes of components without a shadow root, modifying internal structures or styles is not officially supported and may break with future updates. Use such changes carefully."}),`
`,e.jsx(t.h2,{id:"scrollbars",children:"Scrollbars"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"@ui5/webcomponents"}),` components come with globally applied scrollbar styles.
If you want to opt-out of this behavior, you can add the `,e.jsx(t.code,{children:".ui5-content-native-scrollbars"})," class to the ",e.jsx(t.code,{children:"body"})," of the page. You can find out more about this in the ",e.jsx(t.a,{href:"https://ui5.github.io/webcomponents/docs/advanced/scrollbars-customization/",rel:"nofollow",children:"ui5/webcomponents documentation"}),"."]}),`
`,e.jsx(t.h2,{id:"changing-css-variables",children:"Changing CSS Variables"}),`
`,e.jsx(t.p,{children:"You can override SAP theming CSS variables on specific web component selectors to customize their appearance:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`[ui5-button] {
  --sapButton_TextColor: purple;
}
`})}),`
`,e.jsx(r,{design:i.Information,hideCloseButton:!0,children:"Whenever possible, override CSS variables through the SAP UI Theme Designer for consistent updates across all components."}),`
`,e.jsx(t.h2,{id:"style-your-own-components",children:"Style your own components"}),`
`,e.jsxs(t.p,{children:[`When building custom components, use SAP CSS variables directly to stay consistent with the Fiori design system.
A full list of all supported CSS variables can be found in the `,e.jsx(t.a,{href:"https://github.com/SAP/theming-base-content/tree/master/content/Base/baseLib",rel:"nofollow",children:"theming-base-content"})," repo."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import './MyCustomElement.css';

export const MyCustomElement = () => {
  return (
    <div className="containerCustomElement">
      <span style={{ color: 'var(--sapNegativeColor)', fontSize: 'var(--sapFontLargeSize)' }}>My Text</span>
    </div>
  );
};
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`.containerCustomElement {
  background-color: var(--sapBackgroundColor);
  font-family: var(--sapFontFamily);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
`})}),`
`,e.jsxs(t.p,{children:["If you need to access CSS variable values in JavaScript, you can use ",e.jsx(t.a,{href:"https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-public-utils--docs#theming-parameters",rel:"nofollow",children:"ThemingParameters"})," as well:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<span style={{ color: ThemingParameters.sapNegativeColor, fontSize: ThemingParameters.sapFontLargeSize }}>My Text</span>
`})}),`
`,e.jsx(t.p,{children:"This would then be the result:"}),`
`,e.jsx(j,{children:e.jsx(A,{})}),`
`,e.jsxs(t.h2,{id:"applying-styling-via-classname-or-style",children:["Applying styling via ",e.jsx(t.code,{children:"className"})," or ",e.jsx(t.code,{children:"style"})]}),`
`,e.jsxs(t.p,{children:["Almost all components allow setting ",e.jsx(t.code,{children:"className"})," or ",e.jsx(t.code,{children:"style"})," for custom styling. For standard elements like ",e.jsx(t.code,{children:"div"}),", ",e.jsx(t.code,{children:"span"}),", etc., you can easily override internal CSS properties and values, as our styles are encapsulated in a ",e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@layer",rel:"nofollow",children:"CSS layer"}),`.
For web components, this does `,e.jsx(t.strong,{children:"not"}),` mean that styles are inherited by shadow root elements per default.
Only `,e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance#inherited_properties",rel:"nofollow",children:"inherited CSS properties"}),` that are not set inside the shadow root or internally passed properties will change the styles of the internal elements.
Another special case are `,e.jsx(t.a,{href:"http://localhost:6007/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components",rel:"nofollow",children:"abstract"})," components like the ",e.jsx(t.code,{children:"SuggestionItem"}),". The ",e.jsx(t.code,{children:"ui5-suggestion-item"})," element is mainly there to pass props to the actual component inside the shadow root and is therefore not stylable."]}),`
`,e.jsx(t.h2,{id:"explicitly-import-css-bundles",children:"Explicitly import CSS bundles"}),`
`,e.jsxs(t.p,{children:["By default, the ",e.jsx(t.code,{children:"ThemeProvider"})," injects the CSS of the components during runtime. If you want to import the CSS bundles explicitly, you can set the ",e.jsx(t.code,{children:"staticCssInjected"})," prop to ",e.jsx(t.code,{children:"true"}),`.
This approach provides you with control over the order in which CSS files are injected, making it easier to override styles.`]}),`
`,e.jsxs(t.p,{children:["Please note that the static CSS is not wrapped inside a ",e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@layer",rel:"nofollow",children:"CSS layer"}),". You can use the ",e.jsxs(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@import",rel:"nofollow",children:[e.jsx(t.code,{children:"@import"})," CSS at-rule"]})," to achieve that."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"main"})," package import: ",e.jsx(t.code,{children:"import '@ui5/webcomponents-react/styles.css'"})]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"charts"})," package import: ",e.jsx(t.code,{children:"import '@ui5/webcomponents-react-charts/styles.css'"})]}),`
`]}),`
`,e.jsx(t.h2,{id:"css-shadow-parts",children:"CSS Shadow Parts"}),`
`,e.jsxs(t.p,{children:["When using web components like the ",e.jsx(t.a,{href:"?path=/docs/data-display-card--docs#css-shadow-parts",children:"Card"}),`, you will sometimes see a "CSS Shadow Parts" section.
One of the main advantages of the shadow root is encapsulation of parts of the DOM and styles, but since it could still be necessary for some elements to be adjusted even though they're inside the shadow root, the ui5-webcomponents offer a way to customize CSS of selected elements by attaching the `,e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#part",rel:"nofollow",children:"part"}),` attribute.
With the help of this attribute it's possible styling the respective element, by using the `,e.jsxs(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/::part",rel:"nofollow",children:[e.jsx(t.code,{children:"::part"})," pseudo-element"]}),"."]}),`
`,e.jsx(t.h3,{id:"example",children:"Example"}),`
`,e.jsx(N,{}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsxs("details",{children:[" ",e.jsx("summary",{children:"Show Code"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`.card::part(root) {
  background-color: lightgreen;
}
.card::part(content) {
  transform: rotate(180deg);
}
`})}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`function MyComponent() {
  return (
    <Card
      header={
        <CardHeader
          additionalText="3 of 5"
          avatar={<Icon name="person-placeholder" />}
          subtitleText="Direct Reports"
          titleText="TeamSpace"
        />
      }
      className="card"
    >
      <List>
        <ListItemStandard description="Software Architect" text="Richard Wilson" />
        <ListItemStandard description="Visual Designer" text="Elena Petrova" />
        <ListItemStandard description="Quality Specialist" text="John Miller" />
      </List>
    </Card>
  );
}
`})})]}),`
`,e.jsx(t.h2,{id:"css-custom-states",children:"CSS Custom States"}),`
`,e.jsxs(t.p,{children:["Some components expose custom states that you can target with the ",e.jsx(t.code,{children:":state()"})," pseudo-class for conditional styling:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`[ui5-toolbar-item]:state(overflowed) {
  flex-direction: column;
}
`})}),`
`,e.jsx(t.h2,{id:"common-css",children:"Common CSS"}),`
`,e.jsxs(t.p,{children:["For applying common styling blocks based on SAP Fiori Design Guidelines, we recommend using the ",e.jsx(t.a,{href:"https://www.npmjs.com/package/@sap-ui/common-css",rel:"nofollow",children:"@sap-ui/common-css"})," package. You can find out more about this ",e.jsx(t.a,{href:"?path=/docs/knowledge-base-common-css--docs",children:"here"}),"."]}),`
`,e.jsx(f,{})]})}function Pe(n={}){const{wrapper:t}={...d(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(c,{...n})}):c(n)}export{Pe as default};
