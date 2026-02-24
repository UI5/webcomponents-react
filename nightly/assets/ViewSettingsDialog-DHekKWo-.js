import{s as D,m as I,aA as b,w as _,j as e,B as l}from"./iframe-B9-Lkkb_.js";import{useMDXComponents as y}from"./index-BHB6dH51.js";import{M as C,C as V,a as v,D as c,A as d}from"./blocks-DiSlIEhk.js";import"./Tag-CCKiiuhz.js";import"./index-Bp8duZh7.js";import{C as F}from"./ControlsWithNote-PyqqQ_Jp.js";import{D as G}from"./DocsHeader-DZYYDVx7.js";import{F as N}from"./CommandsAndQueries-DLAu90uX.js";import{S as M}from"./SubcomponentsSection-BVy4lpQe.js";import{C as f,D as g,S as x,F as j,a as S}from"./ViewSettingsDialog.stories-DwotIeGy.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D0Z0JvqI.js";import"./sys-enter-2-CI12jhXR.js";import"./alert-BH05V2Qa.js";import"./index-GyCUx3PS.js";import"./index-Uzak41NI.js";import"./Link-C6rFWX_2.js";import"./copy-BJcno2nj.js";import"./copy-Cr6zYfEo.js";import"./GitHub-Mark-B_QQB5Xp.js";import"./TableOfContent-SR1Jk1Pe.js";import"./index-B__WJxOt.js";import"./index-B3mrOTgf.js";import"./index-Cw3xsh9-.js";import"./index-DkC2gP8p.js";import"./index-BetvcNL1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee--tlCK9Sx.js";import"./addCustomCSSWithScoping-dvkvBHTK.js";import"./query-CzSBusdE.js";import"./InvisibleMessage-B56PPVnA.js";import"./sort-DidFm33K.js";import"./filter-BkCieJa7.js";import"./group-2-Bh4r1QBU.js";import"./i18n-defaults-Ca0KLLzw.js";import"./SegmentedButton-wSNeJPjb.js";import"./ListItemStandard-bYgjbEr1.js";import"./parameters-bundle.css-Ck1Ftt8r.js";var h=function(o,t,i,p){var a=arguments.length,n=a<3?t:p===null?p=Object.getOwnPropertyDescriptor(t,i):p,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,i,p);else for(var u=o.length-1;u>=0;u--)(m=o[u])&&(n=(a<3?m(n):a>3?m(t,i,n):m(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let r=class extends b{constructor(){super(...arguments),this.selected=!1}};h([D()],r.prototype,"text",void 0);h([D({type:Boolean})],r.prototype,"selected",void 0);r=h([I("ui5-group-item")],r);r.define();const s=_("ui5-group-item",["text"],["selected"],[],[]);s.displayName="GroupItem";try{s.displayName="GroupItem",s.__docgenInfo={description:`The \`GroupItem\` component defines the grouping criteria for data in \`ViewSettingsDialog\`.
It represents a single group option that users can select to organize data into logical groups.

### Usage

The \`GroupItem\` is used within the \`ViewSettingsDialog\` to provide grouping options.
Each group item represents a column or field by which data can be grouped.



__Note:__ This is a UI5 Web Component! [GroupItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/GroupItem) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"GroupItem",props:{selected:{defaultValue:{value:"false"},description:"Defines if the group item is selected.",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:{value:"undefined"},description:"Defines the text of the group item.",name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function w(o){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...y(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(C,{of:f}),`
`,e.jsx(G,{of:f,since:"0.20.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(V,{of:g}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(F,{of:g}),`
`,e.jsx(t.h2,{id:"opening-viewsettingsdialog",children:"Opening ViewSettingsDialog"}),`
`,e.jsxs(t.p,{children:["You can open and close the ",e.jsx(t.code,{children:"ViewSettingsDialog"})," component in a declarative way using the ",e.jsx(t.code,{children:"open"})," prop."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const ViewSettingsDialogComponent = () => {
  const [showVSD, setShowVSD] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setShowVSD(true);
        }}
      >
        Open ViewSettingsDialog
      </Button>
      <ViewSettingsDialog
        open={showVSD}
        onClose={() => {
          setShowVSD(false);
        }}
        sortItems={
          <>
            <SortItem text="Name" />
            <SortItem text="Position" />
            <SortItem text="Company" />
            <SortItem text="Department" />
          </>
        }
      />
    </>
  );
};
`})}),`
`,e.jsx(v,{children:M}),`
`,e.jsx(t.h2,{id:"sortitem",children:"SortItem"}),`
`,e.jsx(c,{of:x}),`
`,e.jsx(d,{exclude:l,of:x}),`
`,e.jsx(t.h2,{id:"filteritem",children:"FilterItem"}),`
`,e.jsx(c,{of:j}),`
`,e.jsx(d,{exclude:l,of:j}),`
`,e.jsx(t.h2,{id:"filteritemoption",children:"FilterItemOption"}),`
`,e.jsx(c,{of:S}),`
`,e.jsx(d,{exclude:l,of:S}),`
`,e.jsx(t.h2,{id:"groupitem",children:"GroupItem"}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Since v2.15.0"})}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(d,{exclude:l,of:s}),`
`,e.jsx(N,{})]})}function je(o={}){const{wrapper:t}={...y(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(w,{...o})}):w(o)}export{je as default};
