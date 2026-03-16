import{s as D,e as I,aB as b,w as _,j as e,E as l}from"./iframe-CH-Q08Pv.js";import{useMDXComponents as y}from"./index-JegEFivd.js";import{M as C,C as V,a as v,D as c,A as d}from"./blocks-DoFVSa5q.js";import"./Tag-C3CTuin_.js";import"./index-_SHIyctb.js";import{C as F}from"./ControlsWithNote-BP9lHm3C.js";import{D as G}from"./DocsHeader-CD39QVXA.js";import{F as N}from"./Footer-Cg75ltPq.js";import"./CommandsAndQueries-Dlnf61eM.js";import"./PageNotFound-BZ_kgysZ.js";import{S as M}from"./SubcomponentsSection-BVy4lpQe.js";import{C as f,D as g,S as x,F as j,a as S}from"./ViewSettingsDialog.stories-19WTYiRA.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DMZ4xbkz.js";import"./sys-enter-2-Cl66mT1N.js";import"./alert-BQx8EBHB.js";import"./index-ByjlU9SJ.js";import"./index-BIHxokcD.js";import"./Link-BR4DnOSS.js";import"./copy-Dye7Zr7r.js";import"./copy-BJgUS9X2.js";import"./GitHub-Mark-Bbgzio7S.js";import"./TableOfContent--cHXPcXI.js";import"./index-CiSOiezA.js";import"./index-nLMQvitA.js";import"./index-DTltU74W.js";import"./index-DZ9Ckgsr.js";import"./index-BLeRJ1tU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYciNjaj.js";import"./addCustomCSSWithScoping-D4FzfPo7.js";import"./Illustrations-DAJG5DXY.js";import"./i18n-defaults-CFWtSmu6.js";import"./query-CzSBusdE.js";import"./InvisibleMessage-B4ZA0kt1.js";import"./sort-xk0sWrW0.js";import"./filter-BJdwb7Qq.js";import"./group-2-rmw-5_bM.js";import"./SegmentedButton-8BN62iuX.js";import"./ListItemStandard-CuB6Oo--.js";import"./parameters-bundle.css-DMPIvP1N.js";var h=function(o,t,i,p){var a=arguments.length,n=a<3?t:p===null?p=Object.getOwnPropertyDescriptor(t,i):p,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,i,p);else for(var u=o.length-1;u>=0;u--)(m=o[u])&&(n=(a<3?m(n):a>3?m(t,i,n):m(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let r=class extends b{constructor(){super(...arguments),this.selected=!1}};h([D()],r.prototype,"text",void 0);h([D({type:Boolean})],r.prototype,"selected",void 0);r=h([I("ui5-group-item")],r);r.define();const s=_("ui5-group-item",["text"],["selected"],[],[]);s.displayName="GroupItem";try{s.displayName="GroupItem",s.__docgenInfo={description:`The \`GroupItem\` component defines the grouping criteria for data in \`ViewSettingsDialog\`.
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
`,e.jsx(N,{})]})}function De(o={}){const{wrapper:t}={...y(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(w,{...o})}):w(o)}export{De as default};
