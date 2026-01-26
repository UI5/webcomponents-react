import{w as x,p as S,d as D,m as M,B as U,c as C,s as A,aH as G,az as R,bj as V,av as E,bp as H,bq as j,j as r,r as q}from"./iframe-D_U86qCv.js";import"./globe-UjLvatRk.js";import{h as f}from"./history-DJIKR0LA.js";import{s as N}from"./search-CIYcrfl_.js";import{b as O,S as c,a as y}from"./index-Djm9WGjw.js";import{d as W}from"./parameters-bundle.css-BZkrnAIc.js";import{L as F}from"./ListBoxItemGroupTemplate-5NLZSPWt.js";import{as as z,at as B}from"./i18n-defaults-i0ThFMss.js";import"./Search-D_58WnHw.js";const p=x("ui5-search",["accessibleDescription","accessibleName","placeholder","scopeValue","value"],["loading","noTypeahead","open","showClearIcon"],["action","filterButton","illustration","messageArea","scopes"],["close","input","open","scope-change","search"]);p.displayName="Search";try{p.displayName="Search",p.__docgenInfo={description:`A \`Search\` is an input with suggestions, used for user search.

The \`Search\` consists of several elements parts:
- Scope - displays a select in the beggining of the component, used for filtering results by their scope.
- Input field - for user input value
- Clear button - gives the possibility for deleting the entered value
- Search button - a primary button for performing search, when the user has entered a search term
- Suggestions - a list with available search suggestions



__Note:__ This is a UI5 Web Component! [Search UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/Search) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"Search",props:{action:{defaultValue:null,description:`Defines the popup footer action button.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="action"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<Button>\``,name:"action",required:!1,type:{name:"UI5WCSlotsNode"}},children:{defaultValue:null,description:"Defines the Search suggestion items.\n\n__Supported Node Type/s:__ `Array<SearchItem | SearchItemGroup>`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},filterButton:{defaultValue:null,description:`Defines the filter button slot, used to display an additional filtering button.
This slot is intended for passing a \`ui5-button\` with a filter icon to provide extended filtering options.

**Note:** Scope button and Filter button are mutually exclusive.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="filterButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.11.0](https://github.com/UI5/webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents-fiori**.

__Supported Node Type/s:__ \`Array<Button>\``,name:"filterButton",required:!1,type:{name:"UI5WCSlotsNode"}},illustration:{defaultValue:null,description:`Defines the illustrated message to be shown in the popup.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="illustration"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<IllustratedMessage>\``,name:"illustration",required:!1,type:{name:"UI5WCSlotsNode"}},messageArea:{defaultValue:null,description:`Defines the illustrated message to be shown in the popup.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="messageArea"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<SearchMessageArea>\``,name:"messageArea",required:!1,type:{name:"UI5WCSlotsNode"}},scopes:{defaultValue:null,description:`Defines the component scope options.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="scopes"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<ISearchScope>\``,name:"scopes",required:!1,type:{name:"UI5WCSlotsNode"}},onClose:{defaultValue:null,description:`Fired when the popup is closed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<SearchDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when typing in input or clear icon is pressed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<SearchDomRef, never>) => void"}},onOpen:{defaultValue:null,description:`Fired when the popup is opened.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<SearchDomRef, never>) => void"}},onScopeChange:{defaultValue:null,description:`Fired when the scope has changed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onScopeChange",required:!1,type:{name:"(event: Ui5CustomEvent<SearchDomRef, SearchFieldScopeSelectionChangeDetails>) => void"}},onSearch:{defaultValue:null,description:`Fired when the user has triggered search with Enter key or Search Button press.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onSearch",required:!1,type:{name:"(event: Ui5CustomEvent<SearchDomRef, never>) => void"}},accessibleDescription:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA description of the field.",name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"false"},description:"Indicates whether a loading indicator should be shown in the popup.",name:"loading",required:!1,type:{name:"boolean"}},noTypeahead:{defaultValue:{value:"false"},description:"Defines whether the value will be autcompleted to match an item.",name:"noTypeahead",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"false"},description:"Indicates whether the items picker is open.",name:"open",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"undefined"},description:`Defines a short hint intended to aid the user with data entry when the
component has no value.`,name:"placeholder",required:!1,type:{name:"string"}},scopeValue:{defaultValue:null,description:`Defines the value of the component:

Applications are responsible for setting the correct scope value.

**Note:** If the given value does not match any existing scopes,
no scope will be selected and the SearchField scope component will be displayed as empty.

**Note:** Available since [v2.18.0](https://github.com/UI5/webcomponents/releases/tag/v2.18.0) of **@ui5/webcomponents-fiori**.`,name:"scopeValue",required:!1,type:{name:"string"}},showClearIcon:{defaultValue:{value:"false"},description:"Defines whether the clear icon of the search will be shown.",name:"showClearIcon",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`Defines the value of the component.

**Note:** The property is updated upon typing.`,name:"value",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}S("@ui5/webcomponents-theming","sap_horizon",async()=>D);S("@ui5/webcomponents-fiori","sap_horizon",async()=>W);const P=`:host{height:2.75rem;background:var(--sapList_GroupHeaderBackground);color:var(--sapList_TableGroupHeaderTextColor)}.ui5-group-li-root{width:100%;height:100%;position:relative;box-sizing:border-box;padding:0;margin:0;list-style-type:none}[ui5-li-group-header]{border-bottom:var(--sapList_BorderWidth) solid var(--sapList_GroupHeaderBorderColor)}
`;var $=function(a,e,n,o){var s=arguments.length,t=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,n,o);else for(var l=a.length-1;l>=0;l--)(i=a[l])&&(t=(s<3?i(t):s>3?i(e,n,t):i(e,n))||t);return s>3&&t&&Object.defineProperty(e,n,t),t};let I=class extends U{get isGroupItem(){return!0}};I=$([M({tag:"ui5-search-item-group",styles:[U.styles,P],template:F})],I);I.define();const b=x("ui5-search-item-group",["headerAccessibleName","headerText","wrappingType"],[],["header"],["move-over","move"]);b.displayName="SearchItemGroup";try{b.displayName="SearchItemGroup",b.__docgenInfo={description:"The `SearchItemGroup` is type of suggestion item,\nthat can be used to split the `SearchItem` suggestions into groups.\n\n__Note:__ This is a UI5 Web Component! [SearchItemGroup UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/SearchItemGroup) | [Repository](https://github.com/UI5/webcomponents)",displayName:"SearchItemGroup",props:{children:{defaultValue:null,description:"Defines the items of the <code>ui5-li-group</code>.\n\n__Supported Node Type/s:__ `Array<ListItemBase>`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the header of the component.

**Note:** Using this slot, the default header text of group and the value of \`headerText\` property will be overwritten.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<ListItemBase>\``,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},onMove:{defaultValue:null,description:`Fired when a movable list item is dropped onto a drop target.

**Note:** \`move\` event is fired only if there was a preceding \`move-over\` with prevented default action.

**Note:** Available since [v2.1.0](https://github.com/UI5/webcomponents/releases/tag/v2.1.0) of **@ui5/webcomponents-fiori**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onMove",required:!1,type:{name:"(event: Ui5CustomEvent<SearchItemGroupDomRef, ListItemGroupMoveEventDetail>) => void"}},onMoveOver:{defaultValue:null,description:`Fired when a movable list item is moved over a potential drop target during a dragging operation.

If the new position is valid, prevent the default action of the event using \`preventDefault()\`.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v2.1.0](https://github.com/UI5/webcomponents/releases/tag/v2.1.0) of **@ui5/webcomponents-fiori**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onMoveOver",required:!1,type:{name:"(event: Ui5CustomEvent<SearchItemGroupDomRef, ListItemGroupMoveEventDetail>) => void"}},headerAccessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the header.",name:"headerAccessibleName",required:!1,type:{name:"string"}},headerText:{defaultValue:{value:"undefined"},description:"Defines the header text of the <code>ui5-li-group</code>.",name:"headerText",required:!1,type:{name:"string"}},wrappingType:{defaultValue:{value:'"None"'},description:`Defines if the text of the component should wrap when it's too long.
When set to "Normal", the content (title, description) will be wrapped
using the \`ui5-expandable-text\` component.<br/>

The text can wrap up to 100 characters on small screens (size S) and
up to 300 characters on larger screens (size M and above). When text exceeds
these limits, it truncates with an ellipsis followed by a text expansion trigger.

Available options are:
- \`None\` (default) - The text will truncate with an ellipsis.
- \`Normal\` - The text will wrap (without truncation).

**Note:** Available since [v2.15.0](https://github.com/UI5/webcomponents/releases/tag/v2.15.0) of **@ui5/webcomponents-fiori**.`,name:"wrappingType",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Normal"'},{value:'"Normal"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function K(){return C("li",{class:"ui5-li-root ui5-li--focusable ui5-search-item-show-more",role:"option",tabindex:this._effectiveTabIndex,"aria-selected":this.selected,onFocusIn:this._onfocusin,onFocusOut:this._onfocusout,onClick:this._onclick,onKeyDown:this._onkeydown,onKeyUp:this._onkeyup,children:C("span",{class:"ui5-search-item-show-more-text",children:this.showMoreTextCount})})}S("@ui5/webcomponents-theming","sap_horizon",async()=>D);S("@ui5/webcomponents-fiori","sap_horizon",async()=>W);const J=`.ui5-search-item-show-more-text{color:var(--sapLinkColor)}.ui5-search-item-show-more-text:active{color:var(--sapList_Active_TextColor)}
`;var v=function(a,e,n,o){var s=arguments.length,t=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,n,o);else for(var l=a.length-1;l>=0;l--)(i=a[l])&&(t=(s<3?i(t):s>3?i(e,n,t):i(e,n))||t);return s>3&&t&&Object.defineProperty(e,n,t),t},g;let h=g=class extends V{constructor(){super(...arguments),this.selected=!1}get showMoreTextCount(){return this.itemsToShowCount?g.i18nBundle.getText(z,this.itemsToShowCount):g.i18nBundle.getText(B)}_onfocusin(e){super._onfocusin(e),this.selected=!0}_onfocusout(){this.selected=!1}_onclick(e,n=!1){e.stopImmediatePropagation(),this.fireDecoratorEvent("click",{fromKeyboard:n})}_onkeydown(e){H(e)&&(this._onclick(e,!0),e.preventDefault())}_onkeyup(e){j(e)&&(this._onclick(e,!0),e.preventDefault())}};v([A()],h.prototype,"itemsToShowCount",void 0);v([A({type:Boolean})],h.prototype,"selected",void 0);v([G("@ui5/webcomponents-fiori")],h,"i18nBundle",void 0);h=g=v([M({tag:"ui5-search-item-show-more",languageAware:!0,renderer:E,template:K,styles:[V.styles,O,J]}),R("click",{bubbles:!0,cancelable:!0})],h);h.define();const w=x("ui5-search-item-show-more",["itemsToShowCount"],["selected"],[],["click"]);w.displayName="SearchItemShowMore";try{w.displayName="SearchItemShowMore",w.__docgenInfo={description:`A \`SearchItemShowMore\` is a special type of ui5-li that acts as a button to progressively reveal additional (overflow) items within a group.



__Note:__ This is a UI5 Web Component! [SearchItemShowMore UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/SearchItemShowMore) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"SearchItemShowMore",props:{onClick:{defaultValue:null,description:`Fired when the component is activated, either with a mouse/tap
or by pressing the Enter or Space keys.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<SearchItemShowMoreDomRef, ShowMoreItemClickEventDetail>) => void"}},itemsToShowCount:{defaultValue:{value:"undefined"},description:`Specifies the number of additional items available to show.
If no value is defined, the control shows "Show more" (without any counter).
If a number is provided, it displays "Show more (N)", where N is that number.`,name:"itemsToShowCount",required:!1,type:{name:"number"}},selected:{defaultValue:{value:"false"},description:"Defines whether the show more item is selected.",name:"selected",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const k="globe",Q={title:"Inputs / Search",component:p,argTypes:{children:{control:{disable:!0}},illustration:{control:{disable:!0}},scopes:{control:{disable:!0}},messageArea:{control:{disable:!0}},action:{control:{disable:!0}}},tags:["package:@ui5/webcomponents-fiori","experimental"]},u={},_=[{name:"Laptop",scope:"products"},{name:"Leave Requests",scope:"apps"},{name:"Log work",scope:"apps"},{name:"Manage Products",scope:"apps"},{name:"Mobile Phones",scope:"products"},{name:"Tablet",scope:"products"}],d={args:{showClearIcon:!0,placeholder:"Search Apps, Products",scopeValue:"all",scopes:r.jsxs(r.Fragment,{children:[r.jsx(y,{text:"All",value:"all"}),r.jsx(y,{text:"Apps",value:"apps"}),r.jsx(y,{text:"Products",value:"products"})]})},render(a){const[e,n]=q.useState(_),o=s=>{a.onScopeChange(s);const{scope:t}=s.detail;t.text==="All"?n(_):n(_.filter(i=>i.scope===t.text.toLowerCase()))};return r.jsx(p,{...a,onScopeChange:o,children:e.map(s=>r.jsx(c,{text:s.name,scopeName:s.scope},s.name))})}},L=[{text:"Search Item 1",icon:f},{text:"Search Item 2",icon:N},{text:"Search Item 3",icon:f},{text:"Search Item 4",icon:f},{text:"Search Item 5",icon:N},{text:"Search Item 6",icon:k}],X=L.slice(0,3),T=L.slice(3),m={args:{showClearIcon:!0,placeholder:"Placeholder"},render(a){const[e,n]=q.useState(!1);return r.jsxs(p,{...a,children:[r.jsxs(b,{headerText:"Group Header 1",children:[X.map(o=>r.jsx(c,{text:o.text,icon:o.icon},o.text)),!e&&r.jsx(w,{itemsToShowCount:T.length,onClick:()=>{n(!0)}}),e&&T.map(o=>r.jsx(c,{text:o.text,icon:o.icon},o.text))]}),r.jsxs(b,{headerText:"Group Header 2",children:[r.jsx(c,{text:"Search Item 1",icon:f}),r.jsx(c,{text:"Search Item 2",icon:f}),r.jsx(c,{text:"Search Item 3",icon:k})]})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    showClearIcon: true,
    placeholder: 'Search Apps, Products',
    scopeValue: 'all',
    scopes: <>
        <SearchScope text="All" value="all" />
        <SearchScope text="Apps" value="apps" />
        <SearchScope text="Products" value="products" />
      </>
  },
  render(args) {
    const [filterData, setFilterData] = useState(scopeData);
    const handleScopeChange: SearchPropTypes['onScopeChange'] = e => {
      args.onScopeChange(e);
      const {
        scope
      } = e.detail;
      if (scope.text === 'All') {
        setFilterData(scopeData);
      } else {
        setFilterData(scopeData.filter(item => {
          return item.scope === scope.text.toLowerCase();
        }));
      }
    };
    return <Search {...args} onScopeChange={handleScopeChange}>
        {filterData.map(item => {
        return <SearchItem key={item.name} text={item.name} scopeName={item.scope} />;
      })}
      </Search>;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    showClearIcon: true,
    placeholder: 'Placeholder'
  },
  render(args) {
    const [showHiddenItems, setShowHiddenItems] = useState(false);
    return <Search {...args}>
        <SearchItemGroup headerText="Group Header 1">
          {visibleItems.map(item => {
          return <SearchItem key={item.text} text={item.text} icon={item.icon} />;
        })}
          {!showHiddenItems && <SearchItemShowMore itemsToShowCount={hiddenItems.length} onClick={() => {
          setShowHiddenItems(true);
        }} />}
          {showHiddenItems && hiddenItems.map(item => {
          return <SearchItem key={item.text} text={item.text} icon={item.icon} />;
        })}
        </SearchItemGroup>
        <SearchItemGroup headerText="Group Header 2">
          <SearchItem text="Search Item 1" icon={historyIcon} />
          <SearchItem text="Search Item 2" icon={historyIcon} />
          <SearchItem text="Search Item 3" icon={globeIcon} />
        </SearchItemGroup>
      </Search>;
  }
}`,...m.parameters?.docs?.source}}};const Y=["Default","WithScopeAndItems","ShowMoreItem"],pe=Object.freeze(Object.defineProperty({__proto__:null,Default:u,ShowMoreItem:m,WithScopeAndItems:d,__namedExportsOrder:Y,default:Q},Symbol.toStringTag,{value:"Module"}));export{pe as C,u as D,m as S,d as W,b as a,w as b};
