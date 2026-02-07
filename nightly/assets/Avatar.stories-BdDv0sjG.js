import{c as f,au as _,at as A,f as y,d as x,b as B,s as b,m as w,av as C,aA as j,o as I,cP as S,w as N,j as e,cQ as P}from"./iframe-CoAi7Ttt.js";import"./employee-Z6K6IIMy.js";import{a as T,e as D}from"./alert-Bip-otgE.js";import{s as k}from"./sys-enter-2-A-vrRu2-.js";import{A as o}from"./index-Cq2phxGV.js";function E(){return f(A,{children:!this.invalid&&f(_,{name:this.icon,class:"ui5-avatar-badge-icon",mode:"Decorative"})})}y("@ui5/webcomponents-theming","sap_horizon",async()=>x);y("@ui5/webcomponents","sap_horizon",async()=>B,"host");const W=`:host{display:flex;align-items:center;justify-content:center;box-sizing:border-box;outline:none;border:.0625rem solid;background:var(--sapButton_Emphasized_Background);border-color:var(--sapButton_Emphasized_BorderColor);color:var(--sapButton_Emphasized_TextColor)}:host([invalid]){display:none}:host([state="Positive"]){background:var(--sapSuccessBackground);border-color:var(--sapSuccessBorderColor);color:var(--sapPositiveTextColor)}:host([state="Critical"]){background:var(--sapWarningBackground);border-color:var(--sapWarningBorderColor);color:var(--sapCriticalTextColor)}:host([state="Negative"]){background:var(--sapErrorBackground);border-color:var(--sapErrorBorderColor);color:var(--sapNegativeTextColor)}:host([state="Information"]){background:var(--sapInformationBackground);border-color:var(--sapInformationBorderColor);color:var(--sapInformativeTextColor)}.ui5-avatar-badge-icon{width:var(--_ui5-avatar-badge-icon-size);height:var(--_ui5-avatar-badge-icon-size);color:inherit}
`;var v=function(a,n,i,m){var u=arguments.length,t=u<3?n:m===null?m=Object.getOwnPropertyDescriptor(n,i):m,g;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,n,i,m);else for(var h=a.length-1;h>=0;h--)(g=a[h])&&(t=(u<3?g(t):u>3?g(n,i,t):g(n,i))||t);return u>3&&t&&Object.defineProperty(n,i,t),t};let s=class extends j{constructor(){super(...arguments),this.state=I.None,this.invalid=!1}onBeforeRendering(){this.invalid=!this.icon||!S(this.icon)}};v([b()],s.prototype,"icon",void 0);v([b()],s.prototype,"state",void 0);v([b({type:Boolean})],s.prototype,"invalid",void 0);s=v([w({tag:"ui5-avatar-badge",renderer:C,styles:W,template:E})],s);s.define();const r=N("ui5-avatar-badge",["icon","state"],[],[],[]);r.displayName="AvatarBadge";try{r.displayName="AvatarBadge",r.__docgenInfo={description:`The \`AvatarBadge\` component is used to display a badge on top of \`Avatar\` component.
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



__Note:__ This is a UI5 Web Component! [AvatarBadge UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/AvatarBadge) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"AvatarBadge",props:{icon:{defaultValue:{value:"undefined"},description:`Defines the icon name to be displayed inside the badge.

**Note:** You should import the desired icon first, then use its name as "icon".

\`import "@ui5/webcomponents-icons/dist/{icon_name}.js"\``,name:"icon",required:!1,type:{name:"string"}},state:{defaultValue:{value:'"None"'},description:"Defines the state of the badge, which determines its styling.\n\nAvailable options:\n- `None` (default) - Standard appearance\n- `Positive` - Green, used for success/approved states\n- `Critical` - Orange, used for warning states\n- `Negative` - Red, used for error/rejected states\n- `Information` - Blue, used for informational states",name:"state",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Information"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const z={title:"Data Display / Avatar",component:o,argTypes:{children:{control:{disable:!0}},badge:{control:{disable:!0}}},args:{icon:"employee"},tags:["package:@ui5/webcomponents"]},c={},d={args:{fallbackIcon:"employee",icon:void 0},render:a=>e.jsx(o,{...a,children:e.jsx("img",{alt:"Person",src:"https://ui5.github.io/webcomponents/images/avatars/woman_avatar_1.png"})})},l={render:a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",columnGap:"0.5rem"},children:[e.jsx(o,{...a,initials:"JD",colorScheme:"Accent5",badge:e.jsx(r,{icon:P,state:"None"})}),e.jsx(o,{...a,icon:"employee",colorScheme:"Accent10",badge:e.jsx(r,{icon:T,state:"Critical"})}),e.jsx(o,{...a,badge:e.jsx(r,{icon:k,state:"Positive"}),children:e.jsx("img",{src:"https://ui5.github.io/webcomponents/images/avatars/man_avatar_1.png",alt:"Person"})}),e.jsx(o,{...a,shape:"Square",badge:e.jsx(r,{icon:D,state:"Negative"}),children:e.jsx("img",{src:"https://ui5.github.io/webcomponents/images/avatars/woman_avatar_5.png",alt:"Person"})})]})},p={args:{style:{width:"250px",height:"250px",border:"1px solid var(--sapField_BorderColor)"}},render:a=>e.jsx(o,{...a,children:e.jsx("img",{src:"https://ui5.github.io/webcomponents/images/avatars/Lamp_avatar_01.jpg",alt:"Lamp",style:{objectFit:"contain"}})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    fallbackIcon: 'employee',
    icon: undefined
  },
  render: args => <Avatar {...args}>
      <img alt="Person" src="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_1.png" />
    </Avatar>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const q=["Default","WithImage","WithBadge","CustomStyling"],G=Object.freeze(Object.defineProperty({__proto__:null,CustomStyling:p,Default:c,WithBadge:l,WithImage:d,__namedExportsOrder:q,default:z},Symbol.toStringTag,{value:"Module"}));export{G as C,c as D,d as W,l as a,p as b};
