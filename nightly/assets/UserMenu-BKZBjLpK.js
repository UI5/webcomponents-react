import{ck as g,c as y,cl as U,w as b,j as e}from"./iframe-DoasxszC.js";import{u as j,M as I,C as _,a as w,D as c,A as l}from"./blocks-DBX_G92C.js";import"./Tag-DCvAsOsB.js";import"./index-Bkq6_nAR.js";import{C}from"./ControlsWithNote-B6cTbFDY.js";import{D as k}from"./DocsHeader-BFtvyrC2.js";import{F as D}from"./Footer-BMRkHXkr.js";import"./CommandsAndQueries-Bg5oLjv_.js";import"./PageNotFound-DlCPYtCu.js";import{S as N}from"./SubcomponentsSection-BVy4lpQe.js";import{b as d,a as h}from"./index-z9f7gJOm.js";import{C as f,D as x}from"./UserMenu.stories-1N5w9QnP.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C1mBwnJc.js";import"./sys-enter-2-D2TESZyh.js";import"./alert-CWEkUWZv.js";import"./index-DUsiHM8W.js";import"./index-CY9OUOeY.js";import"./Link-CvHgBQZc.js";import"./copy-DxyiXEXB.js";import"./copy-Bp1X0rrX.js";import"./GitHub-Mark-B2tTDOGy.js";import"./TableOfContent-BL-dDNDX.js";import"./index-BuSM4uik.js";import"./index-C3bV2_l1.js";import"./index-Dl7LQ4u1.js";import"./index-BxFkVED5.js";import"./index-UQi-W-Cc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CwB0h3WK.js";import"./addCustomCSSWithScoping-D15HIh5y.js";import"./Illustrations-B4E_SvFf.js";import"./i18n-defaults-CFWtSmu6.js";import"./query-CzSBusdE.js";import"./Panel-dZHoxg4-.js";import"./slideUp-DNFkFHG8.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DV6UQMQM.js";import"./Bar-YRJmisVv.js";import"./person-placeholder-dtA0fTVZ.js";import"./person-placeholder-CK7A9txj.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DmREwb7q.js";import"./ButtonBadge-JjsWY6Ed.js";import"./ListItemStandard-f5cQaHwh.js";import"./search-Cbg8cjTd.js";import"./overflow-D9tdpA1J.js";function S(){return[g.call(this)]}var v=function(t,n,r,s){var p=arguments.length,o=p<3?n:s===null?s=Object.getOwnPropertyDescriptor(n,r):s,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,n,r,s);else for(var a=t.length-1;a>=0;a--)(m=t[a])&&(o=(p<3?m(o):p>3?m(n,r,o):m(n,r))||o);return p>3&&o&&Object.defineProperty(n,r,o),o};let u=class extends U{};u=v([y({tag:"ui5-user-menu-item-group",template:S})],u);u.define();const i=b("ui5-user-menu-item-group",["checkMode"],[],[],[]);i.displayName="UserMenuItemGroup";try{i.displayName="UserMenuItemGroup",i.__docgenInfo={description:"The `UserMenuItemGroup` component represents a group of items designed for use inside a `UserMenu`.\nItems belonging to the same group should be wrapped by a `UserMenuItemGroup`.\nEach group can have an `itemCheckMode` property, which defines the check mode for the items within the group.\nThe possible values for `itemCheckMode` are:\n- 'None' (default) - no items can be checked\n- 'Single' - Only one item can be checked at a time\n- 'Multiple' - Multiple items can be checked simultaneously\n\n**Note:** If the `itemCheckMode` property is set to 'Single', only one item can remain checked at any given time.\nIf multiple items are marked as checked, the last checked item will take precedence.\n\n### Usage\n\n`UserMenuItemGroup` represents a collection of `UserMenuItem` components that can have the same check mode.\nThe items are addeed to the group's `items` slot.\n\n\n\n__Note:__ This is a UI5 Web Component! [UserMenuItemGroup UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/UserMenuItemGroup) | [Repository](https://github.com/UI5/webcomponents)",displayName:"UserMenuItemGroup",props:{children:{defaultValue:null,description:"Defines the items of this component.\n**Note:** The slot can hold any combination of components of type `ui5-menu-item` or `ui5-menu-separator` or both.\n\n__Supported Node Type/s:__ `Array<IMenuItem>`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},checkMode:{defaultValue:{value:'"None"'},description:"Defines the component's check mode.",name:"checkMode",required:!1,type:{name:'"None" | "Single" | "Multiple" | MenuItemGroupCheckMode'}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function M(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...j(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(I,{of:f}),`
`,e.jsx(k,{of:f}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(_,{of:x}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(C,{of:x}),`
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
`,e.jsx(w,{children:N}),`
`,e.jsx(n.h2,{id:"usermenuaccount",children:"UserMenuAccount"}),`
`,e.jsx(c,{of:d}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(n.h2,{id:"usermenuitem",children:"UserMenuItem"}),`
`,e.jsx(c,{of:h}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(n.h2,{id:"usermenuitemgroup",children:"UserMenuItemGroup"}),`
`,e.jsx(c,{of:i}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(D,{})]})}function Ce(t={}){const{wrapper:n}={...j(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(M,{...t})}):M(t)}export{Ce as default};
