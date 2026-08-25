import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{_ as t,d as n,f as r,g as i}from"./jsx-runtime-BpKzXHRO.js";import{n as a,t as o}from"./withWebComponent-RGzXMq_m.js";import{t as s}from"./jsx-runtime-BdxMnOeJ.js";import{c,d as l,s as u,u as d}from"./MenuItem-BIk63gGJ.js";import{i as f,n as p,r as m,t as h}from"./UserMenuItem-CkDv6QWr.js";import{i as g,r as _}from"./react-qN2cStNd.js";import{_ as v,d as y,n as b,o as x,r as S,u as C}from"./blocks-D4DMZ6pY.js";import{b as w,f as T,t as E,u as D}from"./components-BQJQDRmp.js";import{n as O,t as k}from"./SubcomponentsSection-Kv79Q7K7.js";import{n as A,r as j,t as M}from"./UserMenu.stories-DZc0dj8h.js";function N(){return[d.call(this)]}function P(){return(P=e((()=>{l()})))()}var F,I;function L(){return(L=e((()=>{n(),c(),P(),i(),F=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},I=class extends u{},I=F([r({tag:`ui5-user-menu-item-group`,template:N})],I),I.define(),t(`isGroup`)})))()}var R;function z(){return(z=e((()=>{L(),o(),R=a(`ui5-user-menu-item-group`,[`checkMode`],[],[],[]),R.displayName=`UserMenuItemGroup`;try{R.displayName=`UserMenuItemGroup`,R.__docgenInfo={description:`The \`UserMenuItemGroup\` component represents a group of items designed for use inside a \`UserMenu\`.
Items belonging to the same group should be wrapped by a \`UserMenuItemGroup\`.
Each group can have an \`itemCheckMode\` property, which defines the check mode for the items within the group.
The possible values for \`itemCheckMode\` are:
- 'None' (default) - no items can be checked
- 'Single' - Only one item can be checked at a time
- 'Multiple' - Multiple items can be checked simultaneously

**Note:** If the \`itemCheckMode\` property is set to 'Single', only one item can remain checked at any given time.
If multiple items are marked as checked, the last checked item will take precedence.

### Usage

\`UserMenuItemGroup\` represents a collection of \`UserMenuItem\` components that can have the same check mode.
The items are addeed to the group's \`items\` slot.



__Note:__ This is a UI5 Web Component! [UserMenuItemGroup UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/UserMenuItemGroup) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`UserMenuItemGroup`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/UserMenuItemGroup/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserMenuItemGroup/index.d.ts`,name:`UserMenuItemGroupPropTypes`}],description:"Defines the items of this component.\n**Note:** The slot can hold any combination of components of type `ui5-menu-item` or `ui5-menu-separator` or both.\n\n__Supported Node Type/s:__ `Array<IMenuItem>`",name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserMenuItemGroup/index.d.ts`,name:`UserMenuItemGroupPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},checkMode:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserMenuItemGroup/index.d.ts`,name:`UserMenuItemGroupAttributes`}],description:`Defines the component's check mode.`,name:`checkMode`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserMenuItemGroup/index.d.ts`,name:`UserMenuItemGroupAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | MenuItemGroupCheckMode | "Single" | "Multiple"`,value:[{value:`"None"`},{value:`"None"`,description:`default type (items in a group cannot be checked)`,fullComment:`default type (items in a group cannot be checked)
@public`,tags:{public:``}},{value:`"Single"`,description:`Single item check mode (only one item in a group can be checked at a time)`,fullComment:`Single item check mode (only one item in a group can be checked at a time)
@public`,tags:{public:``}},{value:`"Multiple"`,description:`Multiple items check mode (multiple items in a group can be checked at a time)`,fullComment:`Multiple items check mode (multiple items in a group can be checked at a time)
@public`,tags:{public:``}},{value:`"Single"`},{value:`"Multiple"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.12.0](https://github.com/UI5/webcomponents/releases/tag/v2.12.0) of __@ui5/webcomponents-fiori__.`}}}catch{}})))()}function B(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...g(),...e.components};return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(y,{of:A}),`
`,(0,H.jsx)(T,{of:A}),`
`,(0,H.jsx)(`br`,{}),`
`,(0,H.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,H.jsx)(S,{of:M}),`
`,(0,H.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,H.jsx)(w,{of:M}),`
`,(0,H.jsx)(t.h2,{id:`open-usermenu`,children:`Open UserMenu`}),`
`,(0,H.jsxs)(t.p,{children:[`The `,(0,H.jsx)(t.code,{children:`UserMenu`}),` requires an `,(0,H.jsx)(t.code,{children:`opener`}),` so it knows where to anchor itself when opened.
To provide this, you can either:`]}),`
`,(0,H.jsxs)(t.ul,{children:[`
`,(0,H.jsxs)(t.li,{children:[`Assign an `,(0,H.jsx)(t.code,{children:`id`}),` to the element rendered in the `,(0,H.jsx)(t.code,{children:`profile`}),` slot.`]}),`
`,(0,H.jsxs)(t.li,{children:[`Use the `,(0,H.jsx)(t.code,{children:`targetRef`}),` provided in the `,(0,H.jsx)(t.code,{children:`detail`}),` of the `,(0,H.jsx)(t.code,{children:`onProfileClick`}),` event properties.`]}),`
`]}),`
`,(0,H.jsxs)(t.h3,{id:`via-targetref`,children:[`Via `,(0,H.jsx)(t.code,{children:`targetRef`})]}),`
`,(0,H.jsx)(t.pre,{children:(0,H.jsx)(t.code,{className:`language-tsx`,children:`function RefOpener() {
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
`,(0,H.jsxs)(t.h3,{id:`via-id`,children:[`Via `,(0,H.jsx)(t.code,{children:`id`})]}),`
`,(0,H.jsx)(t.pre,{children:(0,H.jsx)(t.code,{className:`language-tsx`,children:`function IdOpener() {
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
`,(0,H.jsx)(C,{children:k}),`
`,(0,H.jsx)(t.h2,{id:`usermenuaccount`,children:`UserMenuAccount`}),`
`,(0,H.jsx)(x,{of:m}),`
`,(0,H.jsx)(b,{of:m}),`
`,(0,H.jsx)(t.h2,{id:`usermenuitem`,children:`UserMenuItem`}),`
`,(0,H.jsx)(x,{of:h}),`
`,(0,H.jsx)(b,{of:h}),`
`,(0,H.jsx)(t.h2,{id:`usermenuitemgroup`,children:`UserMenuItemGroup`}),`
`,(0,H.jsx)(x,{of:R}),`
`,(0,H.jsx)(b,{of:R}),`
`,(0,H.jsx)(D,{})]})}function V(e={}){let{wrapper:t}={...g(),...e.components};return t?(0,H.jsx)(t,{...e,children:(0,H.jsx)(B,{...e})}):B(e)}var H;function U(){return(U=e((()=>{H=s(),_(),E(),v(),O(),f(),p(),z(),j()})))()}U();export{V as default};