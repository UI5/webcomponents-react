import{n as e}from"./chunk-zsgVPwQN.js";import{n as t}from"./withWebComponent-ByCkJbmU.js";import{t as n}from"./src-DuJujPsK.js";import{n as r}from"./List-WZR--Q4S.js";import{n as i}from"./ListItemStandard-ZpAyaRvz.js";var a,o=e((()=>{r(),n(),a=t(`ui5-list`,[`accessibilityAttributes`,`accessibleDescription`,`accessibleDescriptionRef`,`accessibleName`,`accessibleNameRef`,`accessibleRole`,`footerText`,`growing`,`growingButtonText`,`headerText`,`loadingDelay`,`noDataText`,`selectionMode`,`separators`],[`indent`,`loading`,`stickyHeader`],[`header`],[`item-click`,`item-close`,`item-delete`,`item-toggle`,`load-more`,`move-over`,`move`,`selection-change`]),a.displayName=`List`;try{a.displayName=`List`,a.__docgenInfo={description:`The \`List\` component allows displaying a list of items, advanced keyboard
handling support for navigating between items, and predefined modes to improve the development efficiency.

The \`List\` is a container for the available list items:

- \`ListItemStandard\`
- \`ListItemCustom\`
- \`ListItemGroup\`

To benefit from the built-in selection mechanism, you can use the available
selection modes, such as
\`Single\`, \`Multiple\` and \`Delete\`.

Additionally, the \`List\` provides header, footer, and customization for the list item separators.

### Keyboard Handling

#### Basic Navigation
The \`List\` provides advanced keyboard handling.
When a list is focused the user can use the following keyboard
shortcuts in order to perform a navigation:

- [Up] or [Down] - Navigates up and down the items
- [Home] - Navigates to first item
- [End] - Navigates to the last item

The user can use the following keyboard shortcuts to perform actions (such as select, delete),
when the \`selectionMode\` property is in use:

- [Space] - Select an item (if \`type\` is 'Active') when \`selectionMode\` is selection
- [Delete] - Delete an item if \`selectionMode\` property is \`Delete\`

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



\`import "@ui5/webcomponents/dist/ListItemStandard.js";\` (for \`ListItemStandard\`)

\`import "@ui5/webcomponents/dist/ListItemCustom.js";\` (for \`ListItemCustom\`)

\`import "@ui5/webcomponents/dist/ListItemGroup.js";\` (for \`ListItemGroup\`)

__Note:__ This is a UI5 Web Component! [List UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/List) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`List`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`}],description:"Defines the items of the component.\n\n**Note:** Use `ListItemStandard`, `ListItemCustom`, and `ListItemGroup` for the intended design.\n\n__Supported Node Type/s:__ `Array<ListItemBase | ListItemGroup>`",name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`},required:!1,tags:{},type:{name:`ReactNode | ReactNode[]`}},header:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`}],description:`Defines the component header.

**Note:** When \`header\` is set, the
\`headerText\` property is ignored.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`header`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`},required:!1,tags:{},type:{name:`UI5WCSlotsNode`}},onItemClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`}],description:`Fired when an item is activated, unless the item's \`type\` property
is set to \`Inactive\`.

**Note**: This event is not triggered by interactions with selection components such as the checkboxes and radio buttons,
associated with non-default \`selectionMode\` values, or if any other **interactive** component
(such as a button or input) within the list item is directly clicked.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onItemClick`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ListDomRef, ListItemClickEventDetail>) => void`}},onItemClose:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`}],description:`Fired when the \`Close\` button of any item is clicked

**Note:** This event is only applicable to list items that can be closed (such as notification list items),
not to be confused with \`item-delete\`.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onItemClose`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ListDomRef, ListItemCloseEventDetail>) => void`}},onItemDelete:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`}],description:`Fired when the Delete button of any item is pressed.

**Note:** A Delete button is displayed on each item,
when the component \`selectionMode\` property is set to \`Delete\`.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onItemDelete`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ListDomRef, ListItemDeleteEventDetail>) => void`}},onItemToggle:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`}],description:`Fired when the \`Toggle\` button of any item is clicked.

**Note:** This event is only applicable to list items that can be toggled (such as notification group list items).

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onItemToggle`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ListDomRef, ListItemToggleEventDetail>) => void`}},onLoadMore:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`}],description:`Fired when the user scrolls to the bottom of the list.

**Note:** The event is fired when the \`growing='Scroll'\` property is enabled.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onLoadMore`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ListDomRef, never>) => void`}},onMove:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`}],description:`Fired when a movable list item is dropped onto a drop target.

**Note:** \`move\` event is fired only if there was a preceding \`move-over\` with prevented default action.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onMove`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ListDomRef, MoveEventDetail>) => void`}},onMoveOver:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`}],description:`Fired when a movable list item is moved over a potential drop target during a dragging operation.

If the new position is valid, prevent the default action of the event using \`preventDefault()\`.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onMoveOver`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ListDomRef, MoveEventDetail>) => void`}},onSelectionChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`}],description:"Fired when selection is changed by user interaction\nin `Single`, `SingleStart`, `SingleEnd` and `Multiple` selection modes.\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.\n\n| cancelable | bubbles |\n| :--------: | :-----: |\n| ✅|✅|",name:`onSelectionChange`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ListDomRef, ListSelectionChangeEventDetail>) => void`}},accessibilityAttributes:{defaultValue:{value:`{}`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines additional accessibility attributes on different areas of the component.

The accessibilityAttributes object has the following field:

 - **growingButton**: \`growingButton.name\`, \`growingButton.description\`.

 The accessibility attributes support the following values:

- **name**: Defines the accessible ARIA name of the growing button.
Accepts any string.

- **description**: Defines the accessible ARIA description of the growing button.
Accepts any string.

 **Note:** The \`accessibilityAttributes\` property is in an experimental state and is a subject to change.

**Note:** Available since [v2.13.0](https://github.com/UI5/webcomponents/releases/tag/v2.13.0) of **@ui5/webcomponents**.`,name:`accessibilityAttributes`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`{}`},type:{name:`ListAccessibilityAttributes`}},accessibleDescription:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines the accessible description of the component.

**Note:** Available since [v2.5.0](https://github.com/UI5/webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.`,name:`accessibleDescription`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleDescriptionRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines the IDs of the elements that describe the component.

**Note:** Available since [v2.5.0](https://github.com/UI5/webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.`,name:`accessibleDescriptionRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines the accessible name of the component.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleNameRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines the IDs of the elements that label the component.`,name:`accessibleNameRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleRole:{defaultValue:{value:`"List"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines the accessible role of the component.`,name:`accessibleRole`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`"List"`},type:{name:`enum`,raw:`ListAccessibleRole | "List" | "Menu" | "Tree" | "ListBox"`,value:[{value:`"List"`,description:`Represents the ARIA role "list". (by default)`,fullComment:`Represents the ARIA role "list". (by default)
@public`,tags:{public:``}},{value:`"Menu"`,description:`Represents the ARIA role "menu".`,fullComment:`Represents the ARIA role "menu".
@public`,tags:{public:``}},{value:`"Tree"`,description:`Represents the ARIA role "tree".`,fullComment:`Represents the ARIA role "tree".
@public`,tags:{public:``}},{value:`"ListBox"`,description:`Represents the ARIA role "listbox".`,fullComment:`Represents the ARIA role "listbox".
@public`,tags:{public:``}},{value:`"List"`},{value:`"Menu"`},{value:`"Tree"`},{value:`"ListBox"`}]}},footerText:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines the footer text.`,name:`footerText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},growing:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:'Defines whether the component will have growing capability either by pressing a `More` button,\nor via user scroll. In both cases `load-more` event is fired.\n\n**Restrictions:** `growing="Scroll"` is not supported for Internet Explorer,\non IE the component will fallback to `growing="Button"`.',name:`growing`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | "Button" | ListGrowingMode | "Scroll"`,value:[{value:`"None"`},{value:`"Button"`},{value:`"Button"`,description:`Component's "load-more" is fired upon pressing a "More" button.
at the bottom.`,fullComment:`Component's "load-more" is fired upon pressing a "More" button.
at the bottom.
@public`,tags:{public:``}},{value:`"Scroll"`,description:`Component's "load-more" is fired upon scroll.`,fullComment:`Component's "load-more" is fired upon scroll.
@public`,tags:{public:``}},{value:`"None"`,description:`Component's growing is not enabled.`,fullComment:`Component's growing is not enabled.
@public`,tags:{public:``}},{value:`"Scroll"`}]}},growingButtonText:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines the text that will be displayed inside the growing button.

**Note:** If not specified a built-in text will be displayed.

**Note:** This property takes effect if the \`growing\` property is set to the \`Button\`.

**Note:** Available since [v1.24](https://github.com/UI5/webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.`,name:`growingButtonText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},headerText:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines the component header text.

**Note:** If \`header\` is set this property is ignored.`,name:`headerText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},indent:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Determines whether the component is indented.`,name:`indent`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`false`},type:{name:`boolean`}},loading:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines if the component would display a loading indicator over the list.`,name:`loading`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`false`},type:{name:`boolean`}},loadingDelay:{defaultValue:{value:`1000`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines the delay in milliseconds, after which the loading indicator will show up for this component.`,name:`loadingDelay`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`1000`},type:{name:`number`}},noDataText:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines the text that is displayed when the component contains no items.`,name:`noDataText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},selectionMode:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines the selection mode of the component.`,name:`selectionMode`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | "Single" | "Multiple" | "Delete" | ListSelectionMode | "SingleStart" | "SingleEnd" | "SingleAuto"`,value:[{value:`"None"`},{value:`"Single"`},{value:`"Multiple"`},{value:`"Delete"`},{value:`"None"`,description:`Default mode (no selection).`,fullComment:`Default mode (no selection).
@public`,tags:{public:``}},{value:`"Single"`,description:`Right-positioned single selection mode (only one list item can be selected).`,fullComment:`Right-positioned single selection mode (only one list item can be selected).
@public`,tags:{public:``}},{value:`"SingleStart"`,description:`Left-positioned single selection mode (only one list item can be selected).`,fullComment:`Left-positioned single selection mode (only one list item can be selected).
@public`,tags:{public:``}},{value:`"SingleEnd"`,description:`Selected item is highlighted but no selection element is visible
(only one list item can be selected).`,fullComment:`Selected item is highlighted but no selection element is visible
(only one list item can be selected).
@public`,tags:{public:``}},{value:`"SingleAuto"`,description:`Selected item is highlighted and selection is changed upon arrow navigation
(only one list item can be selected - this is always the focused item).`,fullComment:`Selected item is highlighted and selection is changed upon arrow navigation
(only one list item can be selected - this is always the focused item).
@public`,tags:{public:``}},{value:`"Multiple"`,description:`Multi selection mode (more than one list item can be selected).`,fullComment:`Multi selection mode (more than one list item can be selected).
@public`,tags:{public:``}},{value:`"Delete"`,description:`Delete mode (only one list item can be deleted via provided delete button)`,fullComment:`Delete mode (only one list item can be deleted via provided delete button)
@public`,tags:{public:``}},{value:`"SingleStart"`},{value:`"SingleEnd"`},{value:`"SingleAuto"`}]}},separators:{defaultValue:{value:`"All"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines the item separator style that is used.`,name:`separators`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`"All"`},type:{name:`enum`,raw:`"None" | ListSeparator | "All" | "Inner"`,value:[{value:`"None"`},{value:`"All"`,description:`Separators between the items including the last and the first one.`,fullComment:`Separators between the items including the last and the first one.
@public`,tags:{public:``}},{value:`"Inner"`,description:`Separators between the items.
Note: This enumeration depends on the theme.`,fullComment:`Separators between the items.
Note: This enumeration depends on the theme.
@public`,tags:{public:``}},{value:`"None"`,description:`No item separators.`,fullComment:`No item separators.
@public`,tags:{public:``}},{value:`"All"`},{value:`"Inner"`}]}},stickyHeader:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Indicates whether the List header is sticky or not.
If stickyHeader is set to true, then whenever you scroll the content or
the application, the header of the list will be always visible.

**Note:** Available since [v2.19.0](https://github.com/UI5/webcomponents/releases/tag/v2.19.0) of **@ui5/webcomponents**.`,name:`stickyHeader`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`false`},type:{name:`boolean`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})),s,c=e((()=>{i(),n(),s=t(`ui5-li`,[`accessibilityAttributes`,`accessibleName`,`additionalText`,`additionalTextState`,`description`,`highlight`,`icon`,`text`,`tooltip`,`type`,`wrappingType`],[`iconEnd`,`movable`,`navigated`,`selected`],[`deleteButton`,`image`],[`detail-click`]),s.displayName=`ListItemStandard`;try{s.displayName=`ListItemStandard`,s.__docgenInfo={description:"The `ListItemStandard` represents the simplest type of item for a `List`.\n\nThis is a list item,\nproviding the most common use cases such as `text`,\n`image` and `icon`.\n\n__Note:__ This is a UI5 Web Component! [ListItemStandard UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ListItemStandard) | [Repository](https://github.com/UI5/webcomponents)",displayName:`ListItemStandard`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardPropTypes`}],description:'Defines the custom formatted text of the component.\n\n**Note:** For optimal text wrapping and a consistent layout, it is strongly recommended to use the `text` property.\n\nUse the `default` slot only when custom formatting with HTML elements (e.g., `<b>`, `<i>`) is required.\nBe aware that wrapping (via `wrappingType="Normal"`) may not function correctly with custom HTML content in the `default` slot.\n\nIf both `text` and `default` slot are used, the `text` property takes precedence.\n\n__Supported Node Type/s:__ `Array<Node>`',name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardPropTypes`},required:!1,tags:{},type:{name:`ReactNode | ReactNode[]`}},deleteButton:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardPropTypes`}],description:`Defines the delete button, displayed in "Delete" mode.
**Note:** While the slot allows custom buttons, to match
design guidelines, please use the \`Button\` component.
**Note:** When the slot is not present, a built-in delete button will be displayed.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="deleteButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.9.0](https://github.com/UI5/webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.

__Supported Node Type/s:__ \`Array<IButton>\``,name:`deleteButton`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardPropTypes`},required:!1,tags:{},type:{name:`UI5WCSlotsNode`}},image:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardPropTypes`}],description:`**Note:** While the slot allows option for setting custom avatar, to match the
design guidelines, please use the \`Avatar\` with it's default size - S.

**Note:** If bigger \`Avatar\` needs to be used, then the size of the
\`ListItemStandard\` should be customized in order to fit.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="image"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`image`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardPropTypes`},required:!1,tags:{},type:{name:`UI5WCSlotsNode`}},onDetailClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardPropTypes`}],description:`Fired when the user clicks on the detail button when type is \`Detail\`.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onDetailClick`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ListItemStandardDomRef, never>) => void`}},accessibilityAttributes:{defaultValue:{value:`{}`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:`Defines the additional accessibility attributes that will be applied to the component.
The following fields are supported:

- **ariaSetsize**: Defines the number of items in the current set  when not all items in the set are present in the DOM.
**Note:** The value is an integer reflecting the number of items in the complete set. If the size of the entire set is unknown, set \`-1\`.

	- **ariaPosinset**: Defines an element's number or position in the current set when not all items are present in the DOM.
	**Note:** The value is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.

**Note:** Available since [v1.15.0](https://github.com/UI5/webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:`accessibilityAttributes`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`{}`},type:{name:`ListItemAccessibilityAttributes`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:`Defines the text alternative of the component.
Note: If not provided a default text alternative will be set, if present.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},additionalText:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:"Defines the `additionalText`, displayed in the end of the list item.",name:`additionalText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},additionalTextState:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:'Defines the state of the `additionalText`.\n\nAvailable options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.',name:`additionalTextState`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | ValueState | "Positive" | "Critical" | "Negative" | "Information"`,value:[{value:`"None"`},{value:`"None"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Critical"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Negative"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Information"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`},{value:`"Critical"`},{value:`"Negative"`},{value:`"Information"`}]}},description:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:`Defines the description displayed right under the item text, if such is present.`,name:`description`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},highlight:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:'Defines the highlight state of the list items.\nAvailable options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.\n\n**Note:** Available since [v1.24](https://github.com/UI5/webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.',name:`highlight`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | "Positive" | "Critical" | "Negative" | "Information" | Highlight`,value:[{value:`"None"`},{value:`"Positive"`},{value:`"Critical"`},{value:`"Negative"`},{value:`"Information"`},{value:`"None"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Critical"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Negative"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Information"`,description:``,fullComment:`@public`,tags:{public:``}}]}},icon:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:`Defines the \`icon\` source URI.

**Note:**
SAP-icons font provides numerous built-in icons. To find all the available icons, see the
[Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:`icon`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},iconEnd:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:"Defines whether the `icon` should be displayed in the beginning of the list item or in the end.",name:`iconEnd`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`false`},type:{name:`boolean`}},movable:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:`Defines whether the item is movable.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:`movable`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`false`},type:{name:`boolean`}},navigated:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:`The navigated state of the list item.
If set to \`true\`, a navigation indicator is displayed at the end of the list item.

**Note:** Available since [v1.10.0](https://github.com/UI5/webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:`navigated`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`false`},type:{name:`boolean`}},selected:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:`Defines the selected state of the component.`,name:`selected`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`false`},type:{name:`boolean`}},text:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:`Defines the text of the component.

**Note:** Available since [v2.10.0](https://github.com/UI5/webcomponents/releases/tag/v2.10.0) of **@ui5/webcomponents**.`,name:`text`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},tooltip:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:`Defines the text of the tooltip that would be displayed for the list item.

**Note:** Available since [v1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.`,name:`tooltip`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},type:{defaultValue:{value:`"Active"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:"Defines the visual indication and behavior of the list items.\nAvailable options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.\n\n**Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover,\nwhile with type `Inactive` and `Detail` - will not.",name:`type`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`"Active"`},type:{name:`enum`,raw:`"Navigation" | ListItemType | "Inactive" | "Active" | "Detail"`,value:[{value:`"Navigation"`},{value:`"Inactive"`,description:`Indicates the list item does not have any active feedback when item is pressed.`,fullComment:`Indicates the list item does not have any active feedback when item is pressed.
@public`,tags:{public:``}},{value:`"Active"`,description:`Indicates that the item is clickable via active feedback when item is pressed.`,fullComment:`Indicates that the item is clickable via active feedback when item is pressed.
@public`,tags:{public:``}},{value:`"Detail"`,description:`Enables detail button of the list item that fires detail-click event.`,fullComment:`Enables detail button of the list item that fires detail-click event.
@public`,tags:{public:``}},{value:`"Navigation"`,description:`Enables the type of navigation, which is specified to add an arrow at the end of the items and fires navigate-click event.`,fullComment:`Enables the type of navigation, which is specified to add an arrow at the end of the items and fires navigate-click event.
@public`,tags:{public:``}},{value:`"Inactive"`},{value:`"Active"`},{value:`"Detail"`}]}},wrappingType:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:`Defines if the text of the component should wrap when it's too long.
When set to "Normal", the content (title, description) will be wrapped
using the \`ExpandableText\` component.<br/>

The text can wrap up to 100 characters on small screens (size S) and
up to 300 characters on larger screens (size M and above). When text exceeds
these limits, it truncates with an ellipsis followed by a text expansion trigger.

Available options are:
- \`None\` (default) - The text will truncate with an ellipsis.
- \`Normal\` - The text will wrap (without truncation).

**Note:** Available since [v2.10.0](https://github.com/UI5/webcomponents/releases/tag/v2.10.0) of **@ui5/webcomponents**.`,name:`wrappingType`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | "Normal" | WrappingType`,value:[{value:`"None"`},{value:`"Normal"`},{value:`"None"`,description:`The text will be truncated with an ellipsis.`,fullComment:`The text will be truncated with an ellipsis.
@public`,tags:{public:``}},{value:`"Normal"`,description:`The text will wrap. The words will not be broken based on hyphenation.`,fullComment:`The text will wrap. The words will not be broken based on hyphenation.
@public`,tags:{public:``}}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}}));export{o as i,c as n,a as r,s as t};