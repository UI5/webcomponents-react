import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{X as n,Y as r}from"./CustomElementsScopeUtils-CeUpht4U.js";import{c as i,n as a,o,s,t as c}from"./Icon-D1bUSmAg.js";import{A as l,a as u,c as d,d as f,f as p,j as m,l as h,m as g,n as ee,o as te,p as ne,r as _,s as v,t as y,u as b}from"./jsx-runtime-BpKzXHRO.js";import{n as x,t as S}from"./withWebComponent-RGzXMq_m.js";import{t as re}from"./jsx-runtime-BdxMnOeJ.js";import{n as ie,t as ae}from"./ValueState-Cz7u0abQ.js";import{n as oe,t as C}from"./parameters-bundle.css-CXl3cTl0.js";import{a as w,i as T,n as E,o as D,r as O,t as k}from"./sys-enter-2-CI4Y83mB.js";import{n as A,t as j}from"./edit-CglehSzs.js";import{n as M,t as N}from"./Avatar-pYkZki3P.js";import{n as P}from"./employee-BwHSgNZK.js";function F(){return _(y,{children:!this.invalid&&_(c,{name:this.icon,class:`ui5-avatar-badge-icon`,title:this.effectiveTooltip,mode:`Image`})})}function I(){return(I=e((()=>{ee(),a()})))()}var L;function R(){return(R=e((()=>{n(),u(),C(),r(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>te),r(`@ui5/webcomponents`,`sap_horizon`,async()=>oe,`host`),L=`:host{display:flex;align-items:center;justify-content:center;box-sizing:border-box;outline:none;border:.0625rem solid;background:var(--sapButton_Emphasized_Background);border-color:var(--sapButton_Emphasized_BorderColor);color:var(--sapButton_Emphasized_TextColor)}:host([invalid]){display:none}:host([state="Positive"]){background:var(--sapSuccessBackground);border-color:var(--sapSuccessBorderColor);color:var(--sapPositiveTextColor)}:host([state="Critical"]){background:var(--sapWarningBackground);border-color:var(--sapWarningBorderColor);color:var(--sapCriticalTextColor)}:host([state="Negative"]){background:var(--sapErrorBackground);border-color:var(--sapErrorBorderColor);color:var(--sapNegativeTextColor)}:host([state="Information"]){background:var(--sapInformationBackground);border-color:var(--sapInformationBorderColor);color:var(--sapInformativeTextColor)}.ui5-avatar-badge-icon{width:var(--_ui5-avatar-badge-icon-size);height:var(--_ui5-avatar-badge-icon-size);color:inherit}
`})))()}var z,B,V;function H(){return(H=e((()=>{g(),f(),h(),v(),s(),m(),I(),R(),ae(),z=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},B=`ICON_NOT_FOUND`,V=class extends ne{constructor(){super(...arguments),this.state=ie.None,this.invalid=!1}async onBeforeRendering(){let e=this.icon;if(!e){this.invalid=!0,this.effectiveTooltip=void 0;return}let t=o(e)||await i(e);if(this.invalid=!t||t===B,this.invalid)this.effectiveTooltip=void 0;else if(this.tooltip)this.effectiveTooltip=this.tooltip;else if(t&&t!==B&&t.accData){if(t.packageName){let e=await l(t.packageName);this.effectiveTooltip=e.getText(t.accData)||void 0}else this.effectiveTooltip=t.accData.defaultText||void 0}else this.effectiveTooltip=e.charAt(0).toUpperCase()+e.slice(1)}},z([b()],V.prototype,`icon`,void 0),z([b()],V.prototype,`tooltip`,void 0),z([b()],V.prototype,`state`,void 0),z([b({type:Boolean})],V.prototype,`invalid`,void 0),z([b({noAttribute:!0})],V.prototype,`effectiveTooltip`,void 0),V=z([p({tag:`ui5-avatar-badge`,languageAware:!0,renderer:d,styles:L,template:F})],V),V.define()})))()}var U;function W(){return(W=e((()=>{H(),S(),U=x(`ui5-avatar-badge`,[`icon`,`state`,`tooltip`],[],[],[]),U.displayName=`AvatarBadge`;try{U.displayName=`AvatarBadge`,U.__docgenInfo={description:`The \`AvatarBadge\` component is used to display a badge on top of \`Avatar\` component.
The badge can display an icon and supports different states for visual affordance.

### Usage

The badge should be used as a child element of \`Avatar\` in the \`badge\` slot.

\`\`\`html
<Avatar>
  <AvatarBadge icon="edit" slot="badge"></AvatarBadge>
</Avatar>
\`\`\`

### Keyboard Handling

The badge does not receive keyboard focus.



__Note:__ This is a UI5 Web Component! [AvatarBadge UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/AvatarBadge) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`AvatarBadge`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/AvatarBadge/index.d.ts`,methods:[],props:{icon:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/AvatarBadge/index.d.ts`,name:`AvatarBadgeAttributes`}],description:`Defines the icon name to be displayed inside the badge.

**Note:** You should import the desired icon first, then use its name as "icon".

\`import "@ui5/webcomponents-icons/dist/{icon_name}.js"\``,name:`icon`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/AvatarBadge/index.d.ts`,name:`AvatarBadgeAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},state:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/AvatarBadge/index.d.ts`,name:`AvatarBadgeAttributes`}],description:"Defines the state of the badge, which determines its styling.\n\nAvailable options:\n- `None` (default) - Standard appearance\n- `Positive` - Green, used for success/approved states\n- `Critical` - Orange, used for warning states\n- `Negative` - Red, used for error/rejected states\n- `Information` - Blue, used for informational states",name:`state`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/AvatarBadge/index.d.ts`,name:`AvatarBadgeAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"Information" | "Positive" | "Negative" | "Critical" | ValueState | "None"`,value:[{value:`"Information"`},{value:`"Positive"`},{value:`"Negative"`},{value:`"Critical"`},{value:`"None"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Critical"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Negative"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Information"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"None"`}]}},tooltip:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/AvatarBadge/index.d.ts`,name:`AvatarBadgeAttributes`}],description:`Defines the tooltip text of the badge icon.

**Note:** If not provided, the badge uses the icon accessible name.
If no icon accessible name is available, a generic fallback text is used.

**Note:** Available since [v2.22.0](https://github.com/UI5/webcomponents/releases/tag/v2.22.0) of **@ui5/webcomponents**.`,name:`tooltip`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/AvatarBadge/index.d.ts`,name:`AvatarBadgeAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.19.0](https://github.com/UI5/webcomponents/releases/tag/v2.19.0) of __@ui5/webcomponents__.`}}}catch{}})))()}var G=t({CustomStyling:()=>Z,Default:()=>J,WithBadge:()=>X,WithImage:()=>Y,__namedExportsOrder:()=>Q,default:()=>q}),K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{P(),T(),A(),D(),k(),W(),M(),K=re(),q={title:`Data Display / Avatar`,component:N,argTypes:{children:{control:{disable:!0}},badge:{control:{disable:!0}}},args:{icon:`employee`},tags:[`package:@ui5/webcomponents`]},J={},Y={args:{fallbackIcon:`employee`,icon:void 0},render:e=>(0,K.jsx)(N,{...e,children:(0,K.jsx)(`img`,{alt:`Person`,src:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_1.png`})})},X={render:e=>(0,K.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,columnGap:`0.5rem`},children:[(0,K.jsx)(N,{...e,initials:`JD`,colorScheme:`Accent5`,badge:(0,K.jsx)(U,{icon:j,state:`None`})}),(0,K.jsx)(N,{...e,icon:`employee`,colorScheme:`Accent10`,badge:(0,K.jsx)(U,{icon:O,state:`Critical`})}),(0,K.jsx)(N,{...e,badge:(0,K.jsx)(U,{icon:E,state:`Positive`}),children:(0,K.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/avatars/man_avatar_1.png`,alt:`Person`})}),(0,K.jsx)(N,{...e,shape:`Square`,badge:(0,K.jsx)(U,{icon:w,state:`Negative`}),children:(0,K.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_5.png`,alt:`Person`})})]})},Z={args:{style:{width:`250px`,height:`250px`,border:`1px solid var(--sapField_BorderColor)`}},render:e=>(0,K.jsx)(N,{...e,children:(0,K.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/avatars/Lamp_avatar_01.jpg`,alt:`Lamp`,style:{objectFit:`contain`}})})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    fallbackIcon: 'employee',
    icon: undefined
  },
  render: args => <Avatar {...args}>
      <img alt="Person" src="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_1.png" />
    </Avatar>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    columnGap: '0.5rem'
  }}>
      <Avatar {...args} initials="JD" colorScheme="Accent5" badge={<AvatarBadge icon={editIcon} state="None" />} />
      <Avatar {...args} icon="employee" colorScheme="Accent10" badge={<AvatarBadge icon={alertIcon} state="Critical" />} />
      <Avatar {...args} badge={<AvatarBadge icon={sysEnter2Icon} state="Positive" />}>
        <img src="https://ui5.github.io/webcomponents/images/avatars/man_avatar_1.png" alt="Person" />
      </Avatar>
      <Avatar {...args} shape="Square" badge={<AvatarBadge icon={errorIcon} state="Negative" />}>
        <img src="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_5.png" alt="Person" />
      </Avatar>
    </div>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    style: {
      width: '250px',
      height: '250px',
      border: '1px solid var(--sapField_BorderColor)'
    }
  },
  render: args => <Avatar {...args}>
      <img src="https://ui5.github.io/webcomponents/images/avatars/Lamp_avatar_01.jpg" alt="Lamp" style={{
      objectFit: 'contain'
    }} />
    </Avatar>
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`WithImage`,`WithBadge`,`CustomStyling`]})))()}export{Y as a,X as i,Z as n,$ as o,J as r,G as t};