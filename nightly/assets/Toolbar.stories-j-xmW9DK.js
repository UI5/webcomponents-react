import{aj as _,fb as j,r as p,j as e,Q as o,aO as U,x as E,J as c,_ as t,I as D,X as R,fc as h}from"./iframe-BMswfRdZ.js";import{f as b}from"./favorite-Dwm7YmM8.js";import{s as A}from"./settings-DAM65CkQ.js";import{D as L}from"./index-DdyKxBIZ.js";import{I as k}from"./index-DlkbPsyK.js";import{M as O}from"./index-CfdcM8Wn.js";import{S as M}from"./index-CLHUyLON.js";import{S as F}from"./index-93LkejVJ.js";import{S as q}from"./index-Fa-JpXF4.js";import{T as I}from"./index-Cs0GPsK7.js";import{u as C,a as W,b as H,c as i,T as S}from"./index-C7PyzjU0.js";const z="download",$="M480 448q13 0 22.5 9.5T512 480q0 14-9.5 23t-22.5 9H32q-14 0-23-9t-9-23q0-13 9-22.5t23-9.5h448zm-200-74q-10 10-22.5 9.5T235 374L133 273q-12-12 0-23 11-11 22 0l85 85V16q0-16 16-16t16 16v321l87-87q11-11 23 0 12 12 0 23z",G=!1,K=j,J="SAP-icons-v4",Q="@ui5/webcomponents-icons";_(z,{pathData:$,ltr:G,accData:K,collection:J,packageName:Q});const X="download",Y="M123 261q-8-8-8-18 0-11 7.5-18t18.5-7 18 7l71 72V26q0-11 7.5-18.5T256 0t18.5 7.5T282 26v271l71-72q7-7 18-7t18.5 7 7.5 18q0 10-8 18L274 376q-8 8-18 8t-18-8zm363 200q11 0 18.5 7t7.5 18-7.5 18.5T486 512H26q-11 0-18.5-7.5T0 486t7.5-18 18.5-7h460z",Z=!1,ee=j,te="SAP-icons-v5",ne="@ui5/webcomponents-icons";_(X,{pathData:Y,ltr:Z,accData:ee,collection:te,packageName:ne});const V="download",d=p.forwardRef((n,a)=>{const{children:s,...r}=n,{inPopover:l}=C();return e.jsx(o,{...r,ref:a,children:l?s:""})});d.displayName="OverflowToolbarButton";try{d.displayName="OverflowToolbarButton",d.__docgenInfo={description:"The `OverflowToolbarButton` represents a push button that shows its text only when in the overflow area of a `Toolbar`.\n\n__Note:__ This component is only compatible with the `Toolbar` component from the `@ui5/webcomponents-react-compat` package.",displayName:"OverflowToolbarButton",props:{children:{defaultValue:null,description:"Defines the text of the component which is only visible in the overflow area of a `Toolbar`.\n\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,name:"icon",required:!0,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:`Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.

**Note:** The event will not be fired if the \`disabled\` property is set to \`true\`.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v2.10.0](https://github.com/UI5/webcomponents/releases/tag/v2.10.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ButtonDomRef, ButtonClickEventDetail>) => void"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the tooltip of the component.

**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.

**Note:** Available since [v1.2.0](https://github.com/UI5/webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/UI5/webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleDescription:{defaultValue:{value:"undefined"},description:`Defines the accessible description of the component.

**Note:** Available since [v2.5.0](https://github.com/UI5/webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.`,name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Button"'},description:`Describes the accessibility role of the button.

**Note:** Use <code>ButtonAccessibleRole.Link</code> role only with a press handler, which performs a navigation. In all other scenarios the default button semantics are recommended.

**Note:** Available since [v1.23](https://github.com/UI5/webcomponents/releases/tag/v1.23) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Link"'},{value:'"Button"'},{value:'"Link"'}]}},type:{defaultValue:{value:'"Button"'},description:`Defines whether the button has special form-related functionality.

**Note:** This property is only applicable within the context of an HTML Form element.

**Note:** Available since [v1.15.0](https://github.com/UI5/webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Button"'},{value:'"Submit"'},{value:'"Reset"'},{value:'"Submit"'},{value:'"Reset"'}]}},loading:{defaultValue:{value:"false"},description:`Defines whether the button shows a loading indicator.

**Note:** If set to \`true\`, a busy indicator component will be displayed on the related button.

**Note:** Available since [v2.13.0](https://github.com/UI5/webcomponents/releases/tag/v2.13.0) of **@ui5/webcomponents**.`,name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:`Specifies the delay in milliseconds before the loading indicator appears within the associated button.

**Note:** Available since [v2.13.0](https://github.com/UI5/webcomponents/releases/tag/v2.13.0) of **@ui5/webcomponents**.`,name:"loadingDelay",required:!1,type:{name:"number"}},design:{defaultValue:{value:'"Default"'},description:"Defines the component design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},submits:{defaultValue:{value:"false"},description:'When set to `true`, the component will\nautomatically submit the nearest HTML form element on `press`.\n\n**Note:** This property is only applicable within the context of an HTML Form element.`\n@deprecated Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".',name:"submits",required:!1,type:{name:"boolean"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:`Defines the additional accessibility attributes that will be applied to the component.
The following fields are supported:

- **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.
Accepts the following string values: \`true\` or \`false\`

- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
Accepts the following string values: \`dialog\`, \`grid\`, \`listbox\`, \`menu\` or \`tree\`.

- **ariaLabel**: Defines the accessible ARIA name of the component.
Accepts any string value.

 - **ariaKeyShortcuts**: Defines keyboard shortcuts that activate or give focus to the button.

- **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.
Accepts a lowercase string value.

**Note:** Available since [v1.2.0](https://github.com/UI5/webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"accessibilityAttributes",required:!1,type:{name:"ButtonAccessibilityAttributes"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:{value:"undefined"},description:"Defines the icon, displayed as graphical element within the component after the button text.\n\n**Note:** It is highly recommended to use `endIcon` property only together with `icon` and/or `text` properties.\nUsage of `endIcon` only should be avoided.\n\nThe SAP-icons font provides numerous options.\n\nExample:\nSee all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).",name:"endIcon",required:!1,type:{name:"string"}},badge:{defaultValue:null,description:`Adds a badge to the button.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="badge"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.7.0](https://github.com/UI5/webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents**.

__Supported Node Type/s:__ \`Array<ButtonBadge>\``,name:"badge",required:!1,type:{name:"UI5WCSlotsNode"}}}}}catch{}const m=p.forwardRef((n,a)=>{const{children:s,...r}=n,{inPopover:l}=C();return e.jsx(I,{...r,ref:a,children:l?s:""})});m.displayName="OverflowToolbarToggleButton";try{m.displayName="OverflowToolbarToggleButton",m.__docgenInfo={description:"The `OverflowToolbarToggleButton` represents a toggle button that shows its text only when in the overflow area of a `Toolbar`.\n\n__Note:__ This component is only compatible with the `Toolbar` component from the `@ui5/webcomponents-react-compat` package.",displayName:"OverflowToolbarToggleButton",props:{children:{defaultValue:null,description:"Defines the text of the component which is only visible in the overflow area of a `Toolbar`.\n\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,name:"icon",required:!0,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:`Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.

**Note:** The event will not be fired if the \`disabled\` property is set to \`true\`.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v2.10.0](https://github.com/UI5/webcomponents/releases/tag/v2.10.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ToggleButtonDomRef, ButtonClickEventDetail>) => void"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the tooltip of the component.

**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.

**Note:** Available since [v1.2.0](https://github.com/UI5/webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/UI5/webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleDescription:{defaultValue:{value:"undefined"},description:`Defines the accessible description of the component.

**Note:** Available since [v2.5.0](https://github.com/UI5/webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.`,name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Button"'},description:`Describes the accessibility role of the button.

**Note:** Use <code>ButtonAccessibleRole.Link</code> role only with a press handler, which performs a navigation. In all other scenarios the default button semantics are recommended.

**Note:** Available since [v1.23](https://github.com/UI5/webcomponents/releases/tag/v1.23) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Link"'},{value:'"Button"'},{value:'"Link"'}]}},type:{defaultValue:{value:'"Button"'},description:`Defines whether the button has special form-related functionality.

**Note:** This property is only applicable within the context of an HTML Form element.

**Note:** Available since [v1.15.0](https://github.com/UI5/webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Button"'},{value:'"Submit"'},{value:'"Reset"'},{value:'"Submit"'},{value:'"Reset"'}]}},loading:{defaultValue:{value:"false"},description:`Defines whether the button shows a loading indicator.

**Note:** If set to \`true\`, a busy indicator component will be displayed on the related button.

**Note:** Available since [v2.13.0](https://github.com/UI5/webcomponents/releases/tag/v2.13.0) of **@ui5/webcomponents**.`,name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:`Specifies the delay in milliseconds before the loading indicator appears within the associated button.

**Note:** Available since [v2.13.0](https://github.com/UI5/webcomponents/releases/tag/v2.13.0) of **@ui5/webcomponents**.`,name:"loadingDelay",required:!1,type:{name:"number"}},design:{defaultValue:{value:'"Default"'},description:"Defines the component design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},submits:{defaultValue:{value:"false"},description:'When set to `true`, the component will\nautomatically submit the nearest HTML form element on `press`.\n\n**Note:** This property is only applicable within the context of an HTML Form element.`\n@deprecated Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".',name:"submits",required:!1,type:{name:"boolean"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:`Defines the additional accessibility attributes that will be applied to the component.
The following fields are supported:

- **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.
Accepts the following string values: \`true\` or \`false\`

- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
Accepts the following string values: \`dialog\`, \`grid\`, \`listbox\`, \`menu\` or \`tree\`.

- **ariaLabel**: Defines the accessible ARIA name of the component.
Accepts any string value.

 - **ariaKeyShortcuts**: Defines keyboard shortcuts that activate or give focus to the button.

- **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.
Accepts a lowercase string value.

**Note:** Available since [v1.2.0](https://github.com/UI5/webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"accessibilityAttributes",required:!1,type:{name:"ButtonAccessibilityAttributes"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:{value:"undefined"},description:"Defines the icon, displayed as graphical element within the component after the button text.\n\n**Note:** It is highly recommended to use `endIcon` property only together with `icon` and/or `text` properties.\nUsage of `endIcon` only should be avoided.\n\nThe SAP-icons font provides numerous options.\n\nExample:\nSee all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).",name:"endIcon",required:!1,type:{name:"string"}},badge:{defaultValue:null,description:`Adds a badge to the button.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="badge"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.7.0](https://github.com/UI5/webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents**.

__Supported Node Type/s:__ \`Array<ButtonBadge>\``,name:"badge",required:!1,type:{name:"UI5WCSlotsNode"}},pressed:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as pressed.",name:"pressed",required:!1,type:{name:"boolean"}}}}}catch{}const oe="@layer ui5-webcomponents-react{._separator_1lvhp_1{background:var(--sapToolbar_SeparatorColor);height:var(--_ui5wcr-ToolbarSeparatorHeight);width:.0625rem}}",ae={separator:"_separator_1lvhp_1"},u=p.forwardRef((n,a)=>{const{style:s,className:r,...l}=n;U(oe,u.displayName);const N=E(ae.separator,r);return e.jsx("div",{ref:a,style:s,className:N,role:"separator",...l})});u.displayName="ToolbarSeparator";try{u.displayName="ToolbarSeparator",u.__docgenInfo={description:"Creates a visual separator between the preceding and succeeding `Toolbar` item.\n\n__Note:__ This component is only compatible with the `Toolbar` component from the `@ui5/webcomponents-react-compat` package.",displayName:"ToolbarSeparator",props:{style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const se={title:"Toolbar",component:i,argTypes:{children:{control:{disable:!0}},as:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},args:{design:H.Auto,toolbarStyle:W.Standard},parameters:{chromatic:{delay:1e3}},tags:["package:@ui5/webcomponents-react-compat","deprecated"]},g={render(n){return e.jsxs(i,{...n,children:[e.jsx(c,{children:"Toolbar"}),e.jsx(o,{"data-accessible-name":!0,design:t.Transparent,children:"Button One"}),e.jsx(o,{"data-accessible-name":!0,design:t.Transparent,children:"Button Two"}),e.jsx(k,{"data-accessible-name":!0}),e.jsx(L,{"data-accessible-name":!0}),e.jsx(q,{"data-accessible-name":!0})]})}},v={name:"right aligned items",render(n){return e.jsxs(i,{...n,children:[e.jsx(S,{}),e.jsx(o,{"data-accessible-name":!0,design:t.Transparent,children:"Button"}),e.jsx(D,{"data-accessible-name":!0,accessibleName:"Settings",name:A}),e.jsx(D,{"data-accessible-name":!0,accessibleName:"Download",name:V})]})}},f={name:"evenly aligned items",render(n){return e.jsxs(i,{...n,children:[e.jsx(c,{children:"Left"}),e.jsx(S,{}),e.jsx(o,{"data-accessible-name":!0,design:t.Transparent,children:"Center"}),e.jsx(S,{}),e.jsx(c,{children:"Right"}),e.jsx(D,{"data-accessible-name":!0,accessibleName:"Settings",name:A}),e.jsx(D,{"data-accessible-name":!0,accessibleName:"Download",name:V})]})}},T={name:"with separator",render(n){return e.jsxs(i,{...n,children:[e.jsx(o,{"data-accessible-name":!0,design:t.Transparent,children:"Item1"}),e.jsx(o,{"data-accessible-name":!0,design:t.Transparent,children:"Item2"}),e.jsx(o,{"data-accessible-name":!0,design:t.Transparent,children:"Item3"}),e.jsx(u,{}),e.jsx(o,{"data-accessible-name":!0,design:t.Transparent,children:"Item4"}),e.jsx(o,{"data-accessible-name":!0,design:t.Transparent,children:"Item5"}),e.jsx(u,{}),e.jsx(o,{"data-accessible-name":!0,design:t.Transparent,children:"Item6"}),e.jsx(u,{}),e.jsx(o,{"data-accessible-name":!0,design:t.Transparent,children:"Item7"})]})}},w={name:"Popover in Overflow Popover",render(n){const[a,s]=p.useState(!1),[r,l]=p.useState("openMenuBtn"),N=P=>{l(P.target.id),s(!0)};return e.jsxs(e.Fragment,{children:[e.jsxs(i,{...n,style:{width:"400px"},children:[e.jsx(c,{children:"Toolbar"}),e.jsx(o,{"data-accessible-name":!0,design:t.Transparent,children:"Button One"}),e.jsx(o,{"data-accessible-name":!0,design:t.Transparent,children:"Button Two"}),e.jsx(o,{"data-accessible-name":!0,design:t.Transparent,id:"openMenuBtn",onClick:N,children:"Open Popover (Menu)"})]}),e.jsxs(R,{opener:r,open:a,onClose:()=>{s(!1)},children:[e.jsx(O,{text:"New File"}),e.jsx(O,{text:"New Folder"})]})]})}},y={name:"with overflow button",render(n){const[a,s]=p.useState(100),r=l=>{s(l.target.value)};return e.jsxs(e.Fragment,{children:[e.jsx(F,{onInput:r,value:a}),e.jsxs(i,{...n,style:{width:`calc(100% * ${a/100})`},children:[e.jsx(c,{children:"Toolbar"}),e.jsx(o,{"data-accessible-name":!0,design:t.Transparent,children:"Button One"}),e.jsx(o,{"data-accessible-name":!0,design:t.Transparent,icon:"accept"}),e.jsx(o,{"data-accessible-name":!0,design:t.Transparent,children:"Button Two"}),e.jsx(M,{"data-accessible-name":!0,style:{width:"auto"}}),e.jsx(q,{"data-accessible-name":!0}),e.jsx(o,{"data-accessible-name":!0,design:t.Transparent,children:"Button Three"}),e.jsx(o,{"data-accessible-name":!0,design:t.Transparent,children:"Button Four"}),e.jsx(d,{"data-accessible-name":!0,icon:h,children:"Edit"}),e.jsx(m,{"data-accessible-name":!0,design:t.Transparent,icon:b,children:"Favorite"})]})]})}},B={name:"OverflowToolbarButton & OverflowToolbarToggleButton",render(n){return e.jsxs(i,{...n,style:{width:"500px",...n.style},children:[e.jsx(o,{"data-accessible-name":!0,design:t.Transparent,icon:h,tooltip:"Text always visible",children:"Default Button"}),e.jsx(d,{"data-accessible-name":!0,design:t.Transparent,icon:h,tooltip:"Text only visible in popover",children:"OverflowToolbarButton (only visible in popover)"}),e.jsx(I,{"data-accessible-name":!0,design:t.Transparent,icon:b,tooltip:"Text always visible",children:"Default ToggleButton"}),e.jsx(m,{"data-accessible-name":!0,design:t.Transparent,icon:b,tooltip:"Text only visible in popover",children:"OverflowToolbarToggleButton (only visible in popover)"}),e.jsx(o,{"data-accessible-name":!0,design:t.Transparent,icon:h,tooltip:"Text always visible",children:"Default Button"}),e.jsx(d,{"data-accessible-name":!0,design:t.Transparent,icon:h,tooltip:"Text only visible in popover",children:"OverflowToolbarButton (only visible in popover)"}),e.jsx(I,{"data-accessible-name":!0,design:t.Transparent,icon:b,tooltip:"Text always visible",children:"Default ToggleButton"}),e.jsx(m,{"data-accessible-name":!0,design:t.Transparent,icon:b,tooltip:"Text only visible in popover",children:"OverflowToolbarToggleButton (only visible in popover)"})]})}},x={name:"with custom overflow button",render(n){return e.jsxs(e.Fragment,{children:[e.jsxs(i,{...n,style:{width:"300px",...n.style},overflowButton:e.jsx(I,{icon:"menu2",design:t.Transparent,onClick:()=>{alert("Custom action")}}),children:[e.jsx(k,{}),e.jsx(c,{maxLines:1,children:"Overflow Content"})]}),e.jsxs(i,{...n,style:{width:"300px",...n.style},overflowButton:e.jsx(I,{icon:"menu2",design:t.Transparent,onClick:a=>{a.preventDefault(),alert("Custom action")}}),children:[e.jsx(c,{maxLines:1,children:"Opening the popover is prevented"}),e.jsx(c,{maxLines:1,children:"Overflow Content"})]})]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Toolbar {...args}>
        <Text>Toolbar</Text>
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Button One
        </Button>
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Button Two
        </Button>
        <Input data-accessible-name />
        <DatePicker data-accessible-name />
        <Switch data-accessible-name />
      </Toolbar>;
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'right aligned items',
  render(args) {
    return <Toolbar {...args}>
        <ToolbarSpacer />
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Button
        </Button>
        <Icon data-accessible-name accessibleName="Settings" name={settingsIcon} />
        <Icon data-accessible-name accessibleName="Download" name={downloadIcon} />
      </Toolbar>;
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'evenly aligned items',
  render(args) {
    return <Toolbar {...args}>
        <Text>Left</Text>
        <ToolbarSpacer />
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Center
        </Button>
        <ToolbarSpacer />
        <Text>Right</Text>
        <Icon data-accessible-name accessibleName="Settings" name={settingsIcon} />
        <Icon data-accessible-name accessibleName="Download" name={downloadIcon} />
      </Toolbar>;
  }
}`,...f.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'with separator',
  render(args) {
    return <Toolbar {...args}>
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item1
        </Button>
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item2
        </Button>
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item3
        </Button>
        <ToolbarSeparator />
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item4
        </Button>
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item5
        </Button>
        <ToolbarSeparator />
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item6
        </Button>
        <ToolbarSeparator />
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item7
        </Button>
      </Toolbar>;
  }
}`,...T.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Popover in Overflow Popover',
  render(args) {
    const [popoverIsOpen, setPopoverIsOpen] = useState(false);
    const [opener, setOpener] = useState('openMenuBtn');
    const handlePopoverOpenerClick = e => {
      setOpener(e.target.id);
      setPopoverIsOpen(true);
    };
    return <>
        <Toolbar {...args} style={{
        width: '400px'
      }}>
          <Text>Toolbar</Text>
          <Button data-accessible-name design={ButtonDesign.Transparent}>
            Button One
          </Button>
          <Button data-accessible-name design={ButtonDesign.Transparent}>
            Button Two
          </Button>
          <Button data-accessible-name design={ButtonDesign.Transparent} id="openMenuBtn" onClick={handlePopoverOpenerClick}>
            Open Popover (Menu)
          </Button>
        </Toolbar>
        <Menu opener={opener} open={popoverIsOpen} onClose={() => {
        setPopoverIsOpen(false);
      }}>
          <MenuItem text="New File" />
          <MenuItem text="New Folder" />
        </Menu>
      </>;
  }
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'with overflow button',
  render(args) {
    const [value, setValue] = useState(100);
    const handleInput = e => {
      setValue(e.target.value);
    };
    return <>
        <Slider onInput={handleInput} value={value} />
        <Toolbar {...args} style={{
        width: \`calc(100% * \${value / 100})\`
      }}>
          <Text>Toolbar</Text>
          <Button data-accessible-name design={ButtonDesign.Transparent}>
            Button One
          </Button>
          <Button data-accessible-name design={ButtonDesign.Transparent} icon="accept" />
          <Button data-accessible-name design={ButtonDesign.Transparent}>
            Button Two
          </Button>
          <Select data-accessible-name style={{
          width: 'auto'
        }} />
          <Switch data-accessible-name />
          <Button data-accessible-name design={ButtonDesign.Transparent}>
            Button Three
          </Button>
          <Button data-accessible-name design={ButtonDesign.Transparent}>
            Button Four
          </Button>
          <OverflowToolbarButton data-accessible-name icon={editIcon}>
            Edit
          </OverflowToolbarButton>
          <OverflowToolbarToggleButton data-accessible-name design={ButtonDesign.Transparent} icon={favoriteIcon}>
            Favorite
          </OverflowToolbarToggleButton>
        </Toolbar>
      </>;
  }
}`,...y.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'OverflowToolbarButton & OverflowToolbarToggleButton',
  render(args) {
    return <Toolbar {...args} style={{
      width: '500px',
      ...args.style
    }}>
        <Button data-accessible-name design={ButtonDesign.Transparent} icon={editIcon} tooltip="Text always visible">
          Default Button
        </Button>
        <OverflowToolbarButton data-accessible-name design={ButtonDesign.Transparent} icon={editIcon} tooltip="Text only visible in popover">
          OverflowToolbarButton (only visible in popover)
        </OverflowToolbarButton>
        <ToggleButton data-accessible-name design={ButtonDesign.Transparent} icon={favoriteIcon} tooltip="Text always visible">
          Default ToggleButton
        </ToggleButton>
        <OverflowToolbarToggleButton data-accessible-name design={ButtonDesign.Transparent} icon={favoriteIcon} tooltip="Text only visible in popover">
          OverflowToolbarToggleButton (only visible in popover)
        </OverflowToolbarToggleButton>
        <Button data-accessible-name design={ButtonDesign.Transparent} icon={editIcon} tooltip="Text always visible">
          Default Button
        </Button>
        <OverflowToolbarButton data-accessible-name design={ButtonDesign.Transparent} icon={editIcon} tooltip="Text only visible in popover">
          OverflowToolbarButton (only visible in popover)
        </OverflowToolbarButton>
        <ToggleButton data-accessible-name design={ButtonDesign.Transparent} icon={favoriteIcon} tooltip="Text always visible">
          Default ToggleButton
        </ToggleButton>
        <OverflowToolbarToggleButton data-accessible-name design={ButtonDesign.Transparent} icon={favoriteIcon} tooltip="Text only visible in popover">
          OverflowToolbarToggleButton (only visible in popover)
        </OverflowToolbarToggleButton>
      </Toolbar>;
  }
}`,...B.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'with custom overflow button',
  render(args) {
    return <>
        <Toolbar {...args} style={{
        width: '300px',
        ...args.style
      }} overflowButton={<ToggleButton icon="menu2" design={ButtonDesign.Transparent} onClick={() => {
        alert('Custom action');
      }} />}>
          <Input />
          <Text maxLines={1}>Overflow Content</Text>
        </Toolbar>
        <Toolbar {...args} style={{
        width: '300px',
        ...args.style
      }} overflowButton={<ToggleButton icon="menu2" design={ButtonDesign.Transparent} onClick={e => {
        e.preventDefault();
        alert('Custom action');
      }} />}>
          <Text maxLines={1}>Opening the popover is prevented</Text>
          <Text maxLines={1}>Overflow Content</Text>
        </Toolbar>
      </>;
  }
}`,...x.parameters?.docs?.source}}};const ie=["Default","RightAlignedItems","EvenlyAlignedItems","WithSeparator","PopoverInOverflowPopover","WithOverflowButton","OverflowBtns","CustomOverflowButton"],fe=Object.freeze(Object.defineProperty({__proto__:null,CustomOverflowButton:x,Default:g,EvenlyAlignedItems:f,OverflowBtns:B,PopoverInOverflowPopover:w,RightAlignedItems:v,WithOverflowButton:y,WithSeparator:T,__namedExportsOrder:ie,default:se},Symbol.toStringTag,{value:"Module"}));export{fe as C,g as D,f as E,B as O,w as P,v as R,u as T,T as W,y as a,x as b,d as c,m as d};
