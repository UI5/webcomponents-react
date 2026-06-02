import{i as e}from"./preload-helper-usAeo7Bx.js";import{$i as t,Zi as n,ea as r,lh as i,u as a}from"./iframe-BgQuTEUI.js";import{J as o,_ as s,d as c}from"./blocks-BGyy4Svq.js";import{E as l,m as u,t as d,u as f}from"./components-PGlaAJ6j.js";function p(e){let r={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,img:`img`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...o(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c,{title:`Internationalization`}),`
`,(0,h.jsx)(u,{}),`
`,(0,h.jsx)(r.h1,{id:`setup-internationalization-i18n`,children:`Setup Internationalization (i18n)`}),`
`,(0,h.jsxs)(r.p,{children:[`UI5 Web Components (for React) aim to be feature rich and with a minimal code footprint at the same time.
In order to achieve this, most UI5 Web Components packages ship their assets as `,(0,h.jsx)(r.code,{children:`.json`}),` files while also providing a public module import for them.`]}),`
`,(0,h.jsx)(r.p,{children:(0,h.jsxs)(r.strong,{children:[`Prerequisite: This guide requires `,(0,h.jsx)(r.code,{children:`@ui5/webcomponents-react@^0.14.0`}),` and `,(0,h.jsx)(r.code,{children:`@ui5/webcomponents@^1.0.0-rc.12`}),` or newer.`]})}),`
`,(0,h.jsx)(r.h2,{id:`make-your-app-translatable`,children:`Make your App translatable`}),`
`,(0,h.jsx)(r.p,{children:`In order to make your app translatable into various languages, you need to import the following asset:`}),`
`,(0,h.jsx)(r.pre,{children:(0,h.jsx)(r.code,{className:`language-js`,children:`import '@ui5/webcomponents-react/dist/Assets';
`})}),`
`,(0,h.jsxs)(r.p,{children:[`That's it! You can now test whether the translations work correctly by adding e.g. `,(0,h.jsx)(r.code,{children:`?sap-ui-language=de`}),` to your URL for German translations.`]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(r.h2,{id:`how-to-add-custom-translations`,children:`How to add custom translations`}),`
`,(0,h.jsx)(r.p,{children:(0,h.jsxs)(r.em,{children:[`Please also read the `,(0,h.jsx)(r.a,{href:`https://ui5.github.io/webcomponents/docs/advanced/configuration/`,rel:`nofollow`,children:`general configuration`}),` and `,(0,h.jsx)(r.a,{href:`https://ui5.github.io/webcomponents/docs/advanced/using-i18n-for-apps/`,rel:`nofollow`,children:`i18n documentation`}),` of UI5 Web Components.`]})}),`
`,(0,h.jsx)(n,{design:t.Information,hideCloseButton:!0,children:(0,h.jsxs)(h.Fragment,{children:[`When using custom translations, you have to enable the `,(0,h.jsx)(r.code,{children:`fetchDefaultLanguage`}),` option for UI5 Web Components. If it is not set, your default language translations (english) will be missing. Learn more about it`,` `,(0,h.jsx)(r.a,{href:`https://ui5.github.io/webcomponents/docs/advanced/configuration/#fetchDefaultLanguage`,target:`_blank`,children:`here`}),`.`]})}),`
`,(0,h.jsx)(r.p,{children:(0,h.jsxs)(r.strong,{children:[`1. Start by creating some `,(0,h.jsx)(r.code,{children:`i18n`}),` resources in a directory that can be served, for example:`]})}),`
`,(0,h.jsxs)(r.table,{children:[(0,h.jsx)(r.thead,{children:(0,h.jsxs)(r.tr,{children:[(0,h.jsx)(r.th,{children:`File`}),(0,h.jsx)(r.th,{children:`Content`})]})}),(0,h.jsxs)(r.tbody,{children:[(0,h.jsxs)(r.tr,{children:[(0,h.jsx)(r.td,{children:(0,h.jsx)(r.code,{children:`assets/messagebundle_de.properties`})}),(0,h.jsx)(r.td,{children:(0,h.jsx)(r.code,{children:`PLEASE_WAIT=Bitte warten`})})]}),(0,h.jsxs)(r.tr,{children:[(0,h.jsx)(r.td,{children:(0,h.jsx)(r.code,{children:`assets/messagebundle_fr.properties`})}),(0,h.jsx)(r.td,{children:(0,h.jsx)(r.code,{children:`PLEASE_WAIT=Patientez`})})]}),(0,h.jsxs)(r.tr,{children:[(0,h.jsx)(r.td,{children:(0,h.jsx)(r.code,{children:`assets/messagebundle_es.properties`})}),(0,h.jsx)(r.td,{children:(0,h.jsx)(r.code,{children:`PLEASE_WAIT=Espere`})})]}),(0,h.jsxs)(r.tr,{children:[(0,h.jsx)(r.td,{children:(0,h.jsx)(r.code,{children:`assets/messagebundle_en.properties`})}),(0,h.jsx)(r.td,{children:(0,h.jsx)(r.code,{children:`PLEASE_WAIT=Please wait`})})]})]})]}),`
`,(0,h.jsx)(n,{design:t.Information,hideCloseButton:!0,children:(0,h.jsxs)(h.Fragment,{children:[`If you used `,(0,h.jsx)(r.code,{children:`create-react-app`}),` to create your React application, you can use the `,(0,h.jsx)(r.code,{children:`public`}),` `,`folder to store your resource files.`]})}),`
`,(0,h.jsx)(r.p,{children:(0,h.jsxs)(r.strong,{children:[`2. Register the `,(0,h.jsx)(r.code,{children:`i18n`}),` assets`]})}),`
`,(0,h.jsx)(r.p,{children:(0,h.jsxs)(r.strong,{children:[`For `,(0,h.jsx)(r.code,{children:`.properties`}),` files:`]})}),`
`,(0,h.jsx)(r.pre,{children:(0,h.jsx)(r.code,{className:`language-js`,children:`import { registerI18nLoader } from '@ui5/webcomponents-base/dist/asset-registries/i18n.js';
import parse from '@ui5/webcomponents-base/dist/PropertiesFileFormat.js';

registerI18nLoader('myApp', 'de', async () => {
  const props = await (await fetch('./assets/messagebundle_de.properties')).text();
  return parse(props); // this call is required for parsing the properties text
});
`})}),`
`,(0,h.jsx)(r.p,{children:(0,h.jsxs)(r.strong,{children:[`For `,(0,h.jsx)(r.code,{children:`.json`}),` files:`]})}),`
`,(0,h.jsx)(r.pre,{children:(0,h.jsx)(r.code,{className:`language-js`,children:`import { registerI18nLoader } from '@ui5/webcomponents-base/dist/asset-registries/i18n.js';

registerI18nLoader('myApp', 'de', async () => {
  return await (await fetch('./assets/messagebundle_de.json')).json();
});
`})}),`
`,(0,h.jsx)(n,{design:t.Information,hideCloseButton:!0,children:`This is just asset registration, no data will be fetched at that point.`}),`
`,(0,h.jsx)(r.p,{children:(0,h.jsx)(r.strong,{children:`3. Use your translated texts in your components`})}),`
`,(0,h.jsx)(r.p,{children:`Add the following import statement to the component where you want to use translated texts:`}),`
`,(0,h.jsx)(r.pre,{children:(0,h.jsx)(r.code,{className:`language-ts`,children:`import { useI18nBundle } from '@ui5/webcomponents-react-base/hooks';
`})}),`
`,(0,h.jsxs)(r.p,{children:[`Now, you can use the `,(0,h.jsx)(r.code,{children:`useI18nBundle`}),` hook in your functional components in order to access the i18nBundle and get your
translated texts from there.`]}),`
`,(0,h.jsx)(r.p,{children:`The hook has the following signature:`}),`
`,(0,h.jsx)(r.pre,{children:(0,h.jsx)(r.code,{className:`language-ts`,children:`const i18nBundle = useI18nBundle(messageBundleId: string): I18nBundle;
`})}),`
`,(0,h.jsxs)(r.p,{children:[`The `,(0,h.jsx)(r.code,{children:`i18nBundle`}),` is offering one public method `,(0,h.jsx)(r.code,{children:`getText`}),` which accepts a string as first parameter, followed by optional replacement parameters for your translation.`]}),`
`,(0,h.jsx)(r.p,{children:(0,h.jsx)(r.strong,{children:`Example:`})}),`
`,(0,h.jsx)(r.pre,{children:(0,h.jsx)(r.code,{className:`language-jsx`,children:`const MyTranslatedTextComponent = () => {
  const i18nBundle = useI18nBundle('myApp');

  return (
    <div>
      <span>{i18nBundle.getText('PLEASE_WAIT')}</span>
      <p>{i18nBundle.getText('ANOTHER_TEXT_TO_TRANSLATE')}</p>
    </div>
  );
};
`})}),`
`,(0,h.jsx)(r.p,{children:(0,h.jsx)(r.strong,{children:`4. Use texts with placeholder values`})}),`
`,(0,h.jsxs)(r.p,{children:[`You can pass multiple additional values to `,(0,h.jsx)(r.code,{children:`getText`}),` for texts with placeholders.
In this case, the first parameter is the translation key, followed by an arbitrary number of parameters which should be inserted into the translation.`]}),`
`,(0,h.jsx)(r.p,{children:(0,h.jsx)(r.strong,{children:`Example:`})}),`
`,(0,h.jsx)(r.p,{children:`You have this text in your message bundle:`}),`
`,(0,h.jsx)(r.pre,{children:(0,h.jsx)(r.code,{className:`language-properties`,children:`CAROUSEL_DOT_TEXT=Item {0} of {1} displayed
`})}),`
`,(0,h.jsx)(r.p,{children:`Your hook call would now look like this:`}),`
`,(0,h.jsx)(r.pre,{children:(0,h.jsx)(r.code,{className:`language-js`,children:`const i18nBundle = useI18nBundle('myApp');
const carouselText = i18nBundle.getText('CAROUSEL_DOT_TEXT', 5, 20);
`})}),`
`,(0,h.jsxs)(r.p,{children:[`This would resolve to this text:`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(r.code,{children:`Item 5 of 20 displayed`})]}),`
`,(0,h.jsx)(r.h2,{id:`codesandbox-example`,children:`CodeSandbox example`}),`
`,(0,h.jsx)(r.p,{children:`Here you can find a basic example that uses the internal translations and also implements custom translations:`}),`
`,(0,h.jsx)(r.p,{children:(0,h.jsx)(r.a,{href:`https://codesandbox.io/s/wcr-i18n-example-74fgbm?fontsize=14&hidenavigation=1&theme=dark`,rel:`nofollow`,children:(0,h.jsx)(r.img,{src:`https://codesandbox.io/static/img/play-codesandbox.svg`,alt:`Edit wcr-i18n-example`})})}),`
`,(0,h.jsx)(f,{})]})}function m(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=i(),l(),s(),r(),a(),d()}))();export{m as default};