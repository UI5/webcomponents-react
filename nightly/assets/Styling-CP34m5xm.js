import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./react-C184PLS3.js";import{_ as r,f as i,l as a,o,p as s,r as c,s as l,y as u}from"./chunk-CMP5DLKH-u_36b6JJ.js";import{l as d,t as f}from"./src-DYqn5UzG.js";import{t as p}from"./jsx-runtime-1ARNaUmP.js";import{n as m,t as h}from"./src-Cgo3IeY-.js";import{i as g,r as _,t as v}from"./MessageStrip-DwY-VZga.js";import{r as y}from"./react-BZibOG70.js";import{_ as b,c as x,o as S,t as C}from"./components-Da28yRWl.js";import{_ as w,d as T}from"./blocks-D9k7TVdi.js";import{a as E,t as D}from"./Card.stories-BmJ4SNPE.js";var O=e((()=>{s(),l(),c()}));function k(e,t,n,r){return I(e,t,n,globalThis.globalProjectAnnotations??z,r)}function A(e,t){return F(e,t,k)}var j,M,N,P,F,I,L,R,z,B=e((()=>{O(),s(),l(),c(),u(),a(),j=t(n(),1),{global:M}=__STORYBOOK_MODULE_GLOBAL__,{window:N}=M,N&&(N.STORYBOOK_ENV=`react`),{composeConfigs:P,composeStories:F,composeStory:I,setProjectAnnotations:L,setDefaultProjectAnnotations:R}=__STORYBOOK_MODULE_PREVIEW_API__,z=P([i,o,{renderToCanvas:async(e,t)=>{if(e.storyContext.testingLibraryRender==null)return r(e,t);let{storyContext:{context:n,unboundStoryFn:i,testingLibraryRender:a}}=e,{unmount:o}=a(j.createElement(i,{...n}),{container:n.canvasElement});return o}}])})),V=e((()=>{})),H,U,W,G=e((()=>{B(),E(),V(),H=p(),{Default:U}=A(D),W=()=>(0,H.jsx)(`div`,{children:(0,H.jsx)(U,{className:`card`})})})),K=e((()=>{})),q,J,Y=e((()=>{f(),K(),q=p(),J=()=>(0,q.jsx)(`div`,{className:`containerCustomElement`,children:(0,q.jsx)(`span`,{style:{color:d.sapNegativeColor,fontSize:d.sapFontLargeSize},children:`My Text`})})}));function X(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...y(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(T,{title:`Styling`}),`
`,(0,Q.jsx)(t.h1,{id:`styling`,children:`Styling`}),`
`,(0,Q.jsx)(x,{}),`
`,(0,Q.jsx)(t.h2,{id:`styling-ui5-web-components-for-react-components`,children:`Styling UI5 Web Components (for React) components`}),`
`,(0,Q.jsxs)(t.p,{children:[`UI5 Web Components for React follows the same styling approach as the core `,(0,Q.jsx)(t.a,{href:`https://ui5.github.io/webcomponents/docs/advanced/styles/`,rel:`nofollow`,children:`UI5 Web Components`}),`.
You can apply CSS variables, use the `,(0,Q.jsx)(t.code,{children:`::part`}),` pseudo-element selectors, or apply styles directly on selected components (e.g. `,(0,Q.jsx)(t.code,{children:`Button`}),`, `,(0,Q.jsx)(t.code,{children:`Title`}),`, `,(0,Q.jsx)(t.code,{children:`Input`}),`, etc. ) as described in the linked `,(0,Q.jsx)(t.a,{href:`https://ui5.github.io/webcomponents/docs/advanced/styles/`,rel:`nofollow`,children:`documentation`}),`.`]}),`
`,(0,Q.jsxs)(t.p,{children:[`Components currently only available in the `,(0,Q.jsx)(t.code,{children:`ui5/webcomponents-react`}),` repo, are not necessarily web components. For these kind of components you can follow the standard styling approach of React.`]}),`
`,(0,Q.jsx)(v,{design:_.Critical,hideCloseButton:!0,children:`While it's easily possible targeting DOM elements and CSS classes of components without a shadow root, modifying internal structures or styles is not officially supported and may break with future updates. Use such changes carefully.`}),`
`,(0,Q.jsx)(t.h2,{id:`scrollbars`,children:`Scrollbars`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`@ui5/webcomponents`}),` components come with globally applied scrollbar styles.
If you want to opt-out of this behavior, you can add the `,(0,Q.jsx)(t.code,{children:`.ui5-content-native-scrollbars`}),` class to the `,(0,Q.jsx)(t.code,{children:`body`}),` of the page. You can find out more about this in the `,(0,Q.jsx)(t.a,{href:`https://ui5.github.io/webcomponents/docs/advanced/scrollbars-customization/`,rel:`nofollow`,children:`ui5/webcomponents documentation`}),`.`]}),`
`,(0,Q.jsx)(t.h2,{id:`forced-colors-mode`,children:`Forced Colors Mode`}),`
`,(0,Q.jsxs)(t.p,{children:[`In `,(0,Q.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/forced-color-adjust`,rel:`nofollow`,children:`forced colors mode`}),` (e.g. Windows High Contrast), the user agent automatically overrides component colors to meet accessibility needs.
If you need to opt out of this behavior for specific elements, you can use the `,(0,Q.jsx)(t.code,{children:`forced-color-adjust`}),` CSS property:`]}),`
`,(0,Q.jsx)(t.pre,{children:(0,Q.jsx)(t.code,{className:`language-css`,children:`html {
  forced-color-adjust: none;
}
`})}),`
`,(0,Q.jsxs)(t.p,{children:[`By setting `,(0,Q.jsx)(t.code,{children:`forced-color-adjust`}),` to `,(0,Q.jsx)(t.code,{children:`none`}),`, the element's colors will not be adjusted by the user agent in forced colors mode.
You can also scope this to individual components instead of the entire page. Wrapping the rule in a `,(0,Q.jsx)(t.code,{children:`@media (forced-colors: active)`}),` query is functionally equivalent, but makes the intent more explicit in your code:`]}),`
`,(0,Q.jsx)(t.pre,{children:(0,Q.jsx)(t.code,{className:`language-css`,children:`@media (forced-colors: active) {
  .myComponent {
    forced-color-adjust: none;
  }
}
`})}),`
`,(0,Q.jsx)(t.h2,{id:`changing-css-variables`,children:`Changing CSS Variables`}),`
`,(0,Q.jsx)(t.p,{children:`You can override SAP theming CSS variables on specific web component selectors to customize their appearance:`}),`
`,(0,Q.jsx)(t.pre,{children:(0,Q.jsx)(t.code,{className:`language-css`,children:`[ui5-button] {
  --sapButton_TextColor: purple;
}
`})}),`
`,(0,Q.jsx)(v,{design:_.Information,hideCloseButton:!0,children:`Whenever possible, override CSS variables through the SAP UI Theme Designer for consistent updates across all components.`}),`
`,(0,Q.jsx)(t.h2,{id:`style-your-own-components`,children:`Style your own components`}),`
`,(0,Q.jsxs)(t.p,{children:[`When building custom components, use SAP CSS variables directly to stay consistent with the Fiori design system.
A full list of all supported CSS variables can be found in the `,(0,Q.jsx)(t.a,{href:`https://github.com/SAP/theming-base-content/tree/master/content/Base/baseLib`,rel:`nofollow`,children:`theming-base-content`}),` repo.`]}),`
`,(0,Q.jsx)(t.pre,{children:(0,Q.jsx)(t.code,{className:`language-tsx`,children:`import './MyCustomElement.css';

export const MyCustomElement = () => {
  return (
    <div className="containerCustomElement">
      <span style={{ color: 'var(--sapNegativeColor)', fontSize: 'var(--sapFontLargeSize)' }}>My Text</span>
    </div>
  );
};
`})}),`
`,(0,Q.jsx)(t.pre,{children:(0,Q.jsx)(t.code,{className:`language-css`,children:`.containerCustomElement {
  background-color: var(--sapBackgroundColor);
  font-family: var(--sapFontFamily);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
`})}),`
`,(0,Q.jsxs)(t.p,{children:[`If you need to access CSS variable values in JavaScript, you can use `,(0,Q.jsx)(t.a,{href:`https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-public-utils--docs#theming-parameters`,rel:`nofollow`,children:`ThemingParameters`}),` as well:`]}),`
`,(0,Q.jsx)(t.pre,{children:(0,Q.jsx)(t.code,{className:`language-tsx`,children:`<span style={{ color: ThemingParameters.sapNegativeColor, fontSize: ThemingParameters.sapFontLargeSize }}>My Text</span>
`})}),`
`,(0,Q.jsx)(t.p,{children:`This would then be the result:`}),`
`,(0,Q.jsx)(m,{children:(0,Q.jsx)(J,{})}),`
`,(0,Q.jsxs)(t.h2,{id:`applying-styling-via-classname-or-style`,children:[`Applying styling via `,(0,Q.jsx)(t.code,{children:`className`}),` or `,(0,Q.jsx)(t.code,{children:`style`})]}),`
`,(0,Q.jsxs)(t.p,{children:[`Almost all components allow setting `,(0,Q.jsx)(t.code,{children:`className`}),` or `,(0,Q.jsx)(t.code,{children:`style`}),` for custom styling. For standard elements like `,(0,Q.jsx)(t.code,{children:`div`}),`, `,(0,Q.jsx)(t.code,{children:`span`}),`, etc., you can easily override internal CSS properties and values, as our styles are encapsulated in a `,(0,Q.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/@layer`,rel:`nofollow`,children:`CSS layer`}),`.
For web components, this does `,(0,Q.jsx)(t.strong,{children:`not`}),` mean that styles are inherited by shadow root elements per default.
Only `,(0,Q.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance#inherited_properties`,rel:`nofollow`,children:`inherited CSS properties`}),` that are not set inside the shadow root or internally passed properties will change the styles of the internal elements.
Another special case are `,(0,Q.jsx)(t.a,{href:`http://localhost:6007/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components`,rel:`nofollow`,children:`abstract`}),` components like the `,(0,Q.jsx)(t.code,{children:`SuggestionItem`}),`. The `,(0,Q.jsx)(t.code,{children:`ui5-suggestion-item`}),` element is mainly there to pass props to the actual component inside the shadow root and is therefore not stylable.`]}),`
`,(0,Q.jsx)(t.h2,{id:`explicitly-import-css-bundles`,children:`Explicitly import CSS bundles`}),`
`,(0,Q.jsxs)(t.p,{children:[`By default, the `,(0,Q.jsx)(t.code,{children:`ThemeProvider`}),` injects the CSS of the components during runtime. If you want to import the CSS bundles explicitly, you can set the `,(0,Q.jsx)(t.code,{children:`staticCssInjected`}),` prop to `,(0,Q.jsx)(t.code,{children:`true`}),`.
This approach provides you with control over the order in which CSS files are injected, making it easier to override styles.`]}),`
`,(0,Q.jsxs)(t.p,{children:[`Please note that the static CSS is not wrapped inside a `,(0,Q.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/@layer`,rel:`nofollow`,children:`CSS layer`}),`. You can use the `,(0,Q.jsxs)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/@import`,rel:`nofollow`,children:[(0,Q.jsx)(t.code,{children:`@import`}),` CSS at-rule`]}),` to achieve that.`]}),`
`,(0,Q.jsxs)(t.ul,{children:[`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.strong,{children:`main`}),` package import: `,(0,Q.jsx)(t.code,{children:`import '@ui5/webcomponents-react/styles.css'`})]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.strong,{children:`charts`}),` package import: `,(0,Q.jsx)(t.code,{children:`import '@ui5/webcomponents-react-charts/styles.css'`})]}),`
`]}),`
`,(0,Q.jsx)(t.h2,{id:`css-shadow-parts`,children:`CSS Shadow Parts`}),`
`,(0,Q.jsxs)(t.p,{children:[`When using web components like the `,(0,Q.jsx)(t.a,{href:`?path=/docs/data-display-card--docs#css-shadow-parts`,children:`Card`}),`, you will sometimes see a "CSS Shadow Parts" section.
One of the main advantages of the shadow root is encapsulation of parts of the DOM and styles, but since it could still be necessary for some elements to be adjusted even though they're inside the shadow root, the ui5-webcomponents offer a way to customize CSS of selected elements by attaching the `,(0,Q.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#part`,rel:`nofollow`,children:`part`}),` attribute.
With the help of this attribute it's possible styling the respective element, by using the `,(0,Q.jsxs)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/::part`,rel:`nofollow`,children:[(0,Q.jsx)(t.code,{children:`::part`}),` pseudo-element`]}),`.`]}),`
`,(0,Q.jsx)(t.h3,{id:`example`,children:`Example`}),`
`,(0,Q.jsx)(W,{}),`
`,(0,Q.jsx)(`br`,{}),`
`,(0,Q.jsx)(`br`,{}),`
`,(0,Q.jsxs)(`details`,{children:[` `,(0,Q.jsx)(`summary`,{children:`Show Code`}),(0,Q.jsx)(t.pre,{children:(0,Q.jsx)(t.code,{className:`language-css`,children:`.card::part(root) {
  background-color: lightgreen;
}
.card::part(content) {
  transform: rotate(180deg);
}
`})}),(0,Q.jsx)(t.pre,{children:(0,Q.jsx)(t.code,{className:`language-jsx`,children:`function MyComponent() {
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
`,(0,Q.jsx)(t.h2,{id:`css-custom-states`,children:`CSS Custom States`}),`
`,(0,Q.jsxs)(t.p,{children:[`Some components expose custom states that you can target with the `,(0,Q.jsx)(t.code,{children:`:state()`}),` pseudo-class for conditional styling:`]}),`
`,(0,Q.jsx)(t.pre,{children:(0,Q.jsx)(t.code,{className:`language-css`,children:`[ui5-toolbar-item]:state(overflowed) {
  flex-direction: column;
}
`})}),`
`,(0,Q.jsx)(t.h2,{id:`common-css`,children:`Common CSS`}),`
`,(0,Q.jsxs)(t.p,{children:[`For applying common styling blocks based on SAP Fiori Design Guidelines, we recommend using the `,(0,Q.jsx)(t.a,{href:`https://www.npmjs.com/package/@sap-ui/common-css`,rel:`nofollow`,children:`@sap-ui/common-css`}),` package. You can find out more about this `,(0,Q.jsx)(t.a,{href:`?path=/docs/knowledge-base-common-css--docs`,children:`here`}),`.`]}),`
`,(0,Q.jsx)(S,{})]})}function Z(e={}){let{wrapper:t}={...y(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(X,{...e})}):X(e)}var Q;e((()=>{Q=p(),b(),C(),w(),h(),g(),G(),Y()}))();export{Z as default};