import{cv as b,m as x,cw as j,w as U,j as e}from"./iframe-CmCInUUM.js";import{useMDXComponents as y}from"./index-NXwP46VZ.js";import{M as _,C as I,a as w,D as l,A as c}from"./blocks-Cl0pXsJo.js";import"./Tag-CGuAaCB9.js";import"./index-dx9tkoNT.js";import{C as k}from"./ControlsWithNote-CE-dBef4.js";import{D as v}from"./DocsHeader-BdspJgB_.js";import{F as N}from"./CommandsAndQueries-5W0lVTAB.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import{b as d,a as h}from"./index-BrH-5Uen.js";import{C as f,D as M}from"./UserMenu.stories-UFB4y0MC.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CRsOZ4kf.js";import"./sys-enter-2-CasWdLF0.js";import"./alert-BeT31Ncd.js";import"./index-DUfO3zu2.js";import"./index-DMcZQwaV.js";import"./Link-7Zm1Qi1d.js";import"./copy-D-eKEu_q.js";import"./copy-DcIDD3Wq.js";import"./GitHub-Mark-DRJliJiv.js";import"./TableOfContent-Fd1ozcTL.js";import"./index-B5gdlwKM.js";import"./index-Booqb8sh.js";import"./index-DXLeTiXI.js";import"./index-CVcma5Dd.js";import"./index-BKQYdjqz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BwmvQWIh.js";import"./addCustomCSSWithScoping-CwKscpVm.js";import"./query-CzSBusdE.js";import"./Panel-BNFWgsT3.js";import"./slideUp-DNFkFHG8.js";import"./animate-JylhYHXj.js";import"./AnimationMode-qTB3pSgZ.js";import"./Bar-kvucq97Z.js";import"./person-placeholder-C9e1EqwJ.js";import"./person-placeholder-Cg-oM_rJ.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./i18n-defaults-k5o3Svb4.js";import"./index-8YnTY-9Q.js";import"./ListItemStandard-1o7Rq9a2.js";import"./ButtonBadge-DzxuQOMb.js";import"./search-Ci1yCm-C.js";import"./overflow-Cd0e_Rgi.js";import"./slim-arrow-down-DzHwR3gT.js";import"./slim-arrow-down-CMV2GNC8.js";function S(){return[b.call(this)]}var D=function(t,n,i,s){var a=arguments.length,o=a<3?n:s===null?s=Object.getOwnPropertyDescriptor(n,i):s,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,n,i,s);else for(var m=t.length-1;m>=0;m--)(p=t[m])&&(o=(a<3?p(o):a>3?p(n,i,o):p(n,i))||o);return a>3&&o&&Object.defineProperty(n,i,o),o};let u=class extends j{};u=D([x({tag:"ui5-user-menu-item-group",template:S})],u);u.define();const r=U("ui5-user-menu-item-group",["checkMode"],[],[],[]);r.displayName="UserMenuItemGroup";try{r.displayName="UserMenuItemGroup",r.__docgenInfo={description:"The `UserMenuItemGroup` component represents a group of items designed for use inside a `UserMenu`.\nItems belonging to the same group should be wrapped by a `UserMenuItemGroup`.\nEach group can have an `itemCheckMode` property, which defines the check mode for the items within the group.\nThe possible values for `itemCheckMode` are:\n- 'None' (default) - no items can be checked\n- 'Single' - Only one item can be checked at a time\n- 'Multiple' - Multiple items can be checked simultaneously\n\n**Note:** If the `itemCheckMode` property is set to 'Single', only one item can remain checked at any given time.\nIf multiple items are marked as checked, the last checked item will take precedence.\n\n### Usage\n\n`UserMenuItemGroup` represents a collection of `UserMenuItem` components that can have the same check mode.\nThe items are addeed to the group's `items` slot.\n\n\n\n__Note:__ This is a UI5 Web Component! [UserMenuItemGroup UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/UserMenuItemGroup) | [Repository](https://github.com/UI5/webcomponents)",displayName:"UserMenuItemGroup",props:{children:{defaultValue:null,description:"Defines the items of this component.\n**Note:** The slot can hold any combination of components of type `ui5-menu-item` or `ui5-menu-separator` or both.\n\n__Supported Node Type/s:__ `Array<IMenuItem>`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},checkMode:{defaultValue:{value:'"None"'},description:"Defines the component's check mode.",name:"checkMode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"Single"'},{value:'"Multiple"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{r.displayName="UserMenuItemGroup",r.__docgenInfo={description:"The `UserMenuItemGroup` component represents a group of items designed for use inside a `UserMenu`.\nItems belonging to the same group should be wrapped by a `UserMenuItemGroup`.\nEach group can have an `itemCheckMode` property, which defines the check mode for the items within the group.\nThe possible values for `itemCheckMode` are:\n- 'None' (default) - no items can be checked\n- 'Single' - Only one item can be checked at a time\n- 'Multiple' - Multiple items can be checked simultaneously\n\n**Note:** If the `itemCheckMode` property is set to 'Single', only one item can remain checked at any given time.\nIf multiple items are marked as checked, the last checked item will take precedence.\n\n### Usage\n\n`UserMenuItemGroup` represents a collection of `UserMenuItem` components that can have the same check mode.\nThe items are addeed to the group's `items` slot.\n\n\n\n__Note:__ This is a UI5 Web Component! [UserMenuItemGroup UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/UserMenuItemGroup) | [Repository](https://github.com/UI5/webcomponents)",displayName:"UserMenuItemGroup",props:{children:{defaultValue:null,description:"Defines the items of this component.\n**Note:** The slot can hold any combination of components of type `ui5-menu-item` or `ui5-menu-separator` or both.\n\n__Supported Node Type/s:__ `Array<IMenuItem>`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},checkMode:{defaultValue:{value:'"None"'},description:"Defines the component's check mode.",name:"checkMode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"Single"'},{value:'"Multiple"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function g(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...y(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(_,{of:f}),`
`,e.jsx(v,{of:f,experimental:!0}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(I,{of:M}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(k,{of:M}),`
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
`,e.jsx(w,{children:C}),`
`,e.jsx(n.h2,{id:"usermenuaccount",children:"UserMenuAccount"}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(c,{of:d}),`
`,e.jsx(n.h2,{id:"usermenuitem",children:"UserMenuItem"}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(c,{of:h}),`
`,e.jsx(n.h2,{id:"usermenuitemgroup",children:"UserMenuItemGroup"}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(c,{of:r}),`
`,e.jsx(N,{})]})}function ke(t={}){const{wrapper:n}={...y(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(g,{...t})}):g(t)}export{ke as default};
