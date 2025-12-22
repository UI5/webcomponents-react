import{cB as g,m as y,cC as U,w as b,j as e}from"./iframe-CMOSZBev.js";import{useMDXComponents as j}from"./index-BTwv99x0.js";import{M as I,C,a as _,D as l,A as c}from"./blocks-C7uNs7TS.js";import"./Tag-CqfvYh1K.js";import"./index-SUBNzPDi.js";import{C as w}from"./ControlsWithNote-BpW64yfj.js";import{D as v}from"./DocsHeader-G6_xaaS-.js";import{F as k}from"./CommandsAndQueries-BBxM4nbH.js";import{S as N}from"./SubcomponentsSection-BVy4lpQe.js";import{b as d,a as h}from"./index-DxY4fnql.js";import{C as f,D as x}from"./UserMenu.stories-BELXXzU5.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D_sfcND0.js";import"./sys-enter-2-D7lHEvN4.js";import"./alert-CMJogacJ.js";import"./index-B2Bp115n.js";import"./index-CKeepgUa.js";import"./Link-D-jONPM3.js";import"./copy-C95MyXMx.js";import"./copy-CxpwRqG0.js";import"./GitHub-Mark-BaY2R9rx.js";import"./TableOfContent--rxK582K.js";import"./index-BcSeOVwt.js";import"./index-_PRo-73t.js";import"./index-kRKXYALW.js";import"./index-BG7mFBoF.js";import"./index-DnIJB1t0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DkqbRy7L.js";import"./addCustomCSSWithScoping-CCFGNXq3.js";import"./query-CzSBusdE.js";import"./Panel-CC3Txj65.js";import"./slideUp-DNFkFHG8.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DpSxPx8I.js";import"./Bar-BJQKljap.js";import"./person-placeholder-CIEqQ-AM.js";import"./person-placeholder-BT8KeNXL.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./i18n-defaults-uALom2Bu.js";import"./index-D5LsMC73.js";import"./ListItemStandard-ZzU_GhBz.js";import"./ButtonBadge-BJxbS10t.js";import"./search-IOAdgsdf.js";import"./overflow-D97zu85H.js";import"./slim-arrow-down-D_esAgSu.js";import"./slim-arrow-down-DAnkwZ8z.js";function D(){return[g.call(this)]}var S=function(t,n,r,s){var p=arguments.length,o=p<3?n:s===null?s=Object.getOwnPropertyDescriptor(n,r):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,n,r,s);else for(var m=t.length-1;m>=0;m--)(a=t[m])&&(o=(p<3?a(o):p>3?a(n,r,o):a(n,r))||o);return p>3&&o&&Object.defineProperty(n,r,o),o};let u=class extends U{};u=S([y({tag:"ui5-user-menu-item-group",template:D})],u);u.define();const i=b("ui5-user-menu-item-group",["checkMode"],[],[],[]);i.displayName="UserMenuItemGroup";try{i.displayName="UserMenuItemGroup",i.__docgenInfo={description:"The `UserMenuItemGroup` component represents a group of items designed for use inside a `UserMenu`.\nItems belonging to the same group should be wrapped by a `UserMenuItemGroup`.\nEach group can have an `itemCheckMode` property, which defines the check mode for the items within the group.\nThe possible values for `itemCheckMode` are:\n- 'None' (default) - no items can be checked\n- 'Single' - Only one item can be checked at a time\n- 'Multiple' - Multiple items can be checked simultaneously\n\n**Note:** If the `itemCheckMode` property is set to 'Single', only one item can remain checked at any given time.\nIf multiple items are marked as checked, the last checked item will take precedence.\n\n### Usage\n\n`UserMenuItemGroup` represents a collection of `UserMenuItem` components that can have the same check mode.\nThe items are addeed to the group's `items` slot.\n\n\n\n__Note:__ This is a UI5 Web Component! [UserMenuItemGroup UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/UserMenuItemGroup) | [Repository](https://github.com/UI5/webcomponents)",displayName:"UserMenuItemGroup",props:{children:{defaultValue:null,description:"Defines the items of this component.\n**Note:** The slot can hold any combination of components of type `ui5-menu-item` or `ui5-menu-separator` or both.\n\n__Supported Node Type/s:__ `Array<IMenuItem>`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},checkMode:{defaultValue:{value:'"None"'},description:"Defines the component's check mode.",name:"checkMode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"Single"'},{value:'"Multiple"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function M(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...j(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(I,{of:f}),`
`,e.jsx(v,{of:f,experimental:!0}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(C,{of:x}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(w,{of:x}),`
`,e.jsx(n.h2,{id:"open-usermenu",children:"Open UserMenu"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"UserMenu"})," requires an ",e.jsx(n.code,{children:"opener"}),` so it knows where to anchor itself when opened.
To provide this, you can either:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Assign an ",e.jsx(n.code,{children:"id"})," to the element rendered in the ",e.jsx(n.code,{children:"profile"})," slot."]}),`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.code,{children:"targetRef"})," provided in the ",e.jsx(n.code,{children:"detail"})," of the ",e.jsx(n.code,{children:"onProfileClick"})," event properties."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"via-targetref",children:["Via ",e.jsx(n.code,{children:"targetRef"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function RefOpener() {
  const [open, setOpen] = useState(false);
  const userMenuRef = useRef<UserMenuDomRef>(null);
  return (
    <>
      <ShellBar
        onProfileClick={(e) => {
          const { targetRef } = e.detail;
          userMenuRef.current.opener = targetRef;
          setOpen(true);
        }}
        profile={<Avatar initials="JD" />}
      />
      <UserMenu
        ref={userMenuRef}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
}
`})}),`
`,e.jsxs(n.h3,{id:"via-id",children:["Via ",e.jsx(n.code,{children:"id"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function IdOpener() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ShellBar
        onProfileClick={(e) => {
          setOpen(true);
        }}
        profile={<Avatar initials="JD" id="userMenuOpener" />}
      />
      <UserMenu
        open={open}
        opener="userMenuOpener"
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
}
`})}),`
`,e.jsx(_,{children:N}),`
`,e.jsx(n.h2,{id:"usermenuaccount",children:"UserMenuAccount"}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(c,{of:d}),`
`,e.jsx(n.h2,{id:"usermenuitem",children:"UserMenuItem"}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(c,{of:h}),`
`,e.jsx(n.h2,{id:"usermenuitemgroup",children:"UserMenuItemGroup"}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(c,{of:i}),`
`,e.jsx(k,{})]})}function we(t={}){const{wrapper:n}={...j(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(M,{...t})}):M(t)}export{we as default};
