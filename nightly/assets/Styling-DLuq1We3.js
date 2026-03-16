import{d2 as p,d3 as h,d4 as m,q as u,j as e,ah as x}from"./iframe-CIERqdmv.js";import{useMDXComponents as l}from"./index-DuJS4dN9.js";import{M as y}from"./blocks-CwsgKOP_.js";import"./Tag-0874imNl.js";import{M as g,a as j}from"./index-CMev4Q36.js";import"./CommandsAndQueries-CnFEaRrZ.js";import"./copy-Dk2sduK9.js";import{T as f}from"./TableOfContent-BXcIi_qC.js";import{F as b}from"./Footer-DeuiB6kc.js";import"./PageNotFound-C7dSWVQh.js";import{C as S}from"./Card.stories-6pLbphGY.js";import{T as r}from"./ThemingParameters-pyhX3s39.js";import"./preload-helper-PPVm8Dsz.js";import"./information-90fB5V4h.js";import"./sys-enter-2-BkL_leH3.js";import"./alert-B9azflx9.js";import"./Link-B7T_f79Y.js";import"./index-Dub9x5-i.js";import"./index-DQGCwtV8.js";import"./index-C9od4SKd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DkSzocmg.js";import"./addCustomCSSWithScoping-B8m6lHZs.js";import"./index-BEXhXSTj.js";import"./index-CeFrwZtC.js";import"./index-DmgJDP0k.js";import"./index-CJA8M3b4.js";import"./Illustrations-CMsXyloe.js";import"./i18n-defaults-CFWtSmu6.js";import"./person-placeholder-BDOtVnCI.js";import"./person-placeholder-CPElhD_T.js";import"./index-Fli8PU-1.js";import"./YAxisTicks-CKc-crGj.js";import"./ChartContainer-DlwyRWvn.js";import"./index-CP7c8g3L.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DPFRgAx1.js";import"./staticProps-CH5iz18q.js";import"./ChartDataLabel-D-__kNoG.js";import"./useLongestYAxisLabel-sIXnB8_3.js";import"./react-content-loader.es-DtC6mpLt.js";import"./Line-Dd9PqzWz.js";import"./useIsRTL-CMxRGrvK.js";import"./index-B5Gd85r1.js";import"./utils-CkYBlNbD.js";import"./index-DfKuTje3.js";import"./index-DZRTP0Ol.js";import"./ListItemStandard-juxLC4N0.js";const{global:w}=__STORYBOOK_MODULE_GLOBAL__;var{window:i}=w;i&&(i.STORYBOOK_ENV="react");const{composeConfigs:C,composeStories:v,composeStory:T,setProjectAnnotations:_e,setDefaultProjectAnnotations:Pe}=__STORYBOOK_MODULE_PREVIEW_API__;var _=C([p,h,{renderToCanvas:async(o,t)=>{if(o.storyContext.testingLibraryRender==null)return m(o,t);let{storyContext:{context:n,unboundStoryFn:s,testingLibraryRender:c}}=o,{unmount:d}=c(u.createElement(s,{...n}),{container:n.canvasElement});return d}}]);function P(o,t,n,s){return T(o,t,n,globalThis.globalProjectAnnotations??_,s)}function E(o,t){return v(o,t,P)}const{Default:M}=E(S),O=()=>e.jsx("div",{children:e.jsx(M,{className:"card"})}),I=()=>e.jsx("div",{className:"containerCustomElement",children:e.jsx("span",{style:{color:r.sapNegativeColor,fontSize:r.sapFontLargeSize},children:"My Text"})});function a(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Styling"}),`
`,e.jsx(t.h1,{id:"styling",children:"Styling"}),`
`,e.jsx(f,{}),`
`,e.jsx(t.h2,{id:"styling-ui5-web-components-for-react-components",children:"Styling UI5 Web Components (for React) components"}),`
`,e.jsxs(t.p,{children:["UI5 Web Components for React follows the same styling approach as the core ",e.jsx(t.a,{href:"https://ui5.github.io/webcomponents/docs/advanced/styles/",rel:"nofollow",children:"UI5 Web Components"}),`.
You can apply CSS variables, use the `,e.jsx(t.code,{children:"::part"})," pseudo-element selectors, or apply styles directly on selected components (e.g. ",e.jsx(t.code,{children:"Button"}),", ",e.jsx(t.code,{children:"Title"}),", ",e.jsx(t.code,{children:"Input"}),", etc. ) as described in the linked ",e.jsx(t.a,{href:"https://ui5.github.io/webcomponents/docs/advanced/styles/",rel:"nofollow",children:"documentation"}),"."]}),`
`,e.jsxs(t.p,{children:["Components currently only available in the ",e.jsx(t.code,{children:"ui5/webcomponents-react"})," repo, are not necessarily web components. For these kind of components you can follow the standard styling approach of React."]}),`
`,e.jsx(g,{design:j.Critical,hideCloseButton:!0,children:"While it's easily possible targeting DOM elements and CSS classes of components without a shadow root, modifying internal structures or styles is not officially supported and may break with future updates. Use such changes carefully."}),`
`,e.jsx(t.h2,{id:"scrollbars",children:"Scrollbars"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"@ui5/webcomponents"}),` components come with globally applied scrollbar styles.
If you want to opt-out of this behavior, you can add the `,e.jsx(t.code,{children:".ui5-content-native-scrollbars"})," class to the ",e.jsx(t.code,{children:"body"})," of the page. You can find out more about this in the ",e.jsx(t.a,{href:"https://ui5.github.io/webcomponents/docs/advanced/scrollbars-customization/",rel:"nofollow",children:"ui5/webcomponents documentation"}),"."]}),`
`,e.jsx(t.h2,{id:"style-your-own-components",children:"Style your own components"}),`
`,e.jsxs(t.p,{children:[`It's quite likely you have to create some custom components when you are building an app.
In order to reuse our central styling approach, you can import the `,e.jsx(t.code,{children:"ThemingParameters"})," that contain the various CSS variables used in our theming, or use the CSS variables directly."]}),`
`,e.jsxs(t.p,{children:["A full list of all supported CSS Variables can be found ",e.jsx(t.a,{href:"https://github.com/UI5/webcomponents-react/blob/main/packages/base/src/styling/ThemingParameters.ts",rel:"nofollow",children:"here"}),`
or in the `,e.jsx(t.a,{href:"https://github.com/SAP/theming-base-content/tree/master/content/Base/baseLib",rel:"nofollow",children:"theming-base-content"})," repo."]}),`
`,e.jsx(t.p,{children:"You can then create a custom component by following this recipe:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { ThemingParameters } from '@ui5/webcomponents-react-base/ThemingParameters';
import './MyCustomElement.css';

export const MyCustomElement = () => {
  return (
    <div className="containerCustomElement">
      <span style={{ color: ThemingParameters.sapNegativeColor, fontSize: ThemingParameters.sapFontLargeSize }}>
        My Text
      </span>
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
`,e.jsx(t.p,{children:"This would then be the result:"}),`
`,e.jsx(x,{children:e.jsx(I,{})}),`
`,e.jsxs(t.h2,{id:"applying-styling-via-classname-or-style",children:["Applying styling via ",e.jsx(t.code,{children:"className"})," or ",e.jsx(t.code,{children:"style"})]}),`
`,e.jsxs(t.p,{children:["Almost all components allow setting ",e.jsx(t.code,{children:"className"})," or ",e.jsx(t.code,{children:"style"})," for custom styling. For standard elements like ",e.jsx(t.code,{children:"div"}),", ",e.jsx(t.code,{children:"span"}),", etc., you can easily override internal CSS properties and values, as our styles are encapsulated in a ",e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@layer",rel:"nofollow",children:"CSS layer"}),`.
For web components, this does `,e.jsx(t.strong,{children:"not"}),` mean that styles are inherited by shadow root elements per default.
Only `,e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance#inherited_properties",rel:"nofollow",children:"inherited CSS properties"}),` that are not set inside the shadow root or internally passed properties will change the styles of the internal elements.
Another special case are abstract components like the `,e.jsx(t.code,{children:"SuggestionItem"}),". The ",e.jsx(t.code,{children:"ui5-suggestion-item"})," element is mainly there to pass props to the actual component inside the shadow root and is therefore not stylable."]}),`
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
`,e.jsx(O,{}),`
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
`,e.jsx(t.h2,{id:"common-css",children:"Common CSS"}),`
`,e.jsxs(t.p,{children:["For applying common styling blocks based on SAP Fiori Design Guidelines, we recommend using the ",e.jsx(t.a,{href:"https://www.npmjs.com/package/@sap-ui/common-css",rel:"nofollow",children:"@sap-ui/common-css"})," package. You can find out more about this ",e.jsx(t.a,{href:"?path=/docs/knowledge-base-common-css--docs",children:"here"}),"."]}),`
`,e.jsx(b,{})]})}function Ee(o={}){const{wrapper:t}={...l(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(a,{...o})}):a(o)}export{Ee as default};
