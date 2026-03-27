import{w as S,k as F,b as T,f as N,d as W,a as M,s as h,bj as E,c as U,av as B,aA as V,gC as q,gD as P,gE as O,gF as j,O as R,az as k,dh as A,fc as $,fQ as z,ca as H,cd as G,gG as J,j as i}from"./iframe-DNoxABv1.js";import"./Gregorian-D7gms4eE.js";import"./Persian-BdghAqU4.js";import{e as K}from"./Calendar-DvxHm6p2.js";import{s as Y}from"./FormatUtils-BJ4vXoJp.js";const w=S("ui5-calendar",["calendarWeekNumbering","displayFormat","formatPattern","maxDate","minDate","primaryCalendarType","secondaryCalendarType","selectionMode","valueFormat"],["hideWeekNumbers"],["calendarLegend","disabledDates","specialDates"],["selection-change"]);w.displayName="Calendar";try{w.displayName="Calendar",w.__docgenInfo={description:`The \`Calendar\` component allows users to select one or more dates.

Currently selected dates are represented with instances of \`CalendarDate\` as
children of the \`Calendar\`. The value property of each \`CalendarDate\` must be a
date string, correctly formatted according to the \`Calendar\`'s \`formatPattern\` property.
Whenever the user changes the date selection, \`Calendar\` will automatically create/remove instances
of \`CalendarDate\` in itself, unless you prevent this behavior by calling \`preventDefault()\` for the
\`selection-change\` event. This is useful if you want to control the selected dates externally.

### Usage

The user can navigate to a particular date by:

- Pressing over a month inside the months view
- Pressing over an year inside the years view

The user can confirm a date selection by pressing over a date inside the days view.

### Keyboard Handling
The \`Calendar\` provides advanced keyboard handling.
When a picker is showed and focused the user can use the following keyboard
shortcuts in order to perform a navigation:

- Day picker:

- [F4] - Shows month picker
- [Shift] + [F4] - Shows year picker
- [Page Up] - Navigate to the previous month
- [Page Down] - Navigate to the next month
- [Shift] + [Page Up] - Navigate to the previous year
- [Shift] + [Page Down] - Navigate to the next year
- [Ctrl] + [Shift] + [Page Up] - Navigate ten years backwards
- [Ctrl] + [Shift] + [Page Down] - Navigate ten years forwards
- [Home] - Navigate to the first day of the week
- [End] - Navigate to the last day of the week
- [Ctrl] + [Home] - Navigate to the first day of the month
- [Ctrl] + [End] - Navigate to the last day of the month

- Month picker:

- [Page Up] - Navigate to the previous year
- [Page Down] - Navigate to the next year
- [Home] - Navigate to the first month of the current row
- [End] - Navigate to the last month of the current row
- [Ctrl] + [Home] - Navigate to the first month of the current year
- [Ctrl] + [End] - Navigate to the last month of the year

- Year picker:

- [Page Up] - Navigate to the previous year range
- [Page Down] - Navigate the next year range
- [Home] - Navigate to the first year of the current row
- [End] - Navigate to the last year of the current row
- [Ctrl] + [Home] - Navigate to the first year of the current year range
- [Ctrl] + [End] - Navigate to the last year of the current year range

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`

### Calendar types
The component supports several calendar types - Gregorian, Buddhist, Islamic, Japanese and Persian.
By default the Gregorian Calendar is used. In order to use the Buddhist, Islamic, Japanese or Persian calendar,
you need to set the \`primaryCalendarType\` property and import one or more of the following modules:

\`import "@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js";\`

\`import "@ui5/webcomponents-localization/dist/features/calendar/Islamic.js";\`

\`import "@ui5/webcomponents-localization/dist/features/calendar/Japanese.js";\`

\`import "@ui5/webcomponents-localization/dist/features/calendar/Persian.js";\`

Or, you can use the global configuration and set the \`calendarType\` key:

\`\`\`html
<script data-id="sap-ui-config" type="application/json">
	{
		"calendarType": "Japanese"
	}
<\/script>
\`\`\`



__Note:__ This is a UI5 Web Component! [Calendar UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/Calendar) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"Calendar",props:{calendarLegend:{defaultValue:null,description:`Defines the calendar legend of the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="calendarLegend"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.

__Supported Node Type/s:__ \`Array<CalendarLegend>\``,name:"calendarLegend",required:!1,type:{name:"UI5WCSlotsNode"}},children:{defaultValue:null,description:"Defines the selected date or dates (depending on the `selectionMode` property)\nfor this calendar as instances of `CalendarDate` or `CalendarDateRange`.\nUse `CalendarDate` for single or multiple selection, and `CalendarDateRange` for range selection.\n\n__Supported Node Type/s:__ `Array<ICalendarSelectedDates>`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},disabledDates:{defaultValue:null,description:`Defines the disabled date ranges that cannot be selected in the calendar.
Use \`CalendarDateRange\` elements to specify ranges of disabled dates.
Each range can define a start date, an end date, or both.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="disabledDates"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents**.

__Supported Node Type/s:__ \`Array<CalendarDateRange>\``,name:"disabledDates",required:!1,type:{name:"UI5WCSlotsNode"}},specialDates:{defaultValue:null,description:`Defines the special dates, visually emphasized in the calendar.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="specialDates"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.

__Supported Node Type/s:__ \`Array<SpecialCalendarDate>\``,name:"specialDates",required:!1,type:{name:"UI5WCSlotsNode"}},onSelectionChange:{defaultValue:null,description:`Fired when the selected dates change.

**Note:** If you call \`preventDefault()\` for this event, the component will not
create instances of \`CalendarDate\` for the newly selected dates. In that case you should do this manually.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<CalendarDomRef, CalendarSelectionChangeEventDetail>) => void"}},calendarWeekNumbering:{defaultValue:{value:'"Default"'},description:`Defines how to calculate calendar weeks and first day of the week.
If not set, the calendar will be displayed according to the currently set global configuration.

**Note:** Available since [v2.2.0](https://github.com/UI5/webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents**.`,name:"calendarWeekNumbering",required:!1,type:{name:'"Default" | CalendarWeekNumbering | "ISO_8601" | "MiddleEastern" | "WesternTraditional"'}},displayFormat:{defaultValue:{value:"undefined"},description:`Determines the format, displayed in the input field.

**Note:** Available since [v2.14.0](https://github.com/UI5/webcomponents/releases/tag/v2.14.0) of **@ui5/webcomponents**.`,name:"displayFormat",required:!1,type:{name:"string"}},formatPattern:{defaultValue:{value:"undefined"},description:`Determines the format, displayed in the input field.
@deprecated Use displayFormat and valueFormat instead`,name:"formatPattern",required:!1,type:{name:"string"}},hideWeekNumbers:{defaultValue:{value:"false"},description:`Defines the visibility of the week numbers column.

**Note:** For calendars other than Gregorian,
the week numbers are not displayed regardless of what is set.`,name:"hideWeekNumbers",required:!1,type:{name:"boolean"}},maxDate:{defaultValue:null,description:`Determines the maximum date available for selection.

**Note:** If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (yyyy-MM-dd).`,name:"maxDate",required:!1,type:{name:"string"}},minDate:{defaultValue:null,description:`Determines the minimum date available for selection.

**Note:** If the formatPattern property is not set, the minDate value must be provided in the ISO date format (yyyy-MM-dd).`,name:"minDate",required:!1,type:{name:"string"}},primaryCalendarType:{defaultValue:{value:"undefined"},description:`Sets a calendar type used for display.
If not set, the calendar type of the global configuration is used.`,name:"primaryCalendarType",required:!1,type:{name:'CalendarType | "Gregorian" | "Islamic" | "Japanese" | "Buddhist" | "Persian"'}},secondaryCalendarType:{defaultValue:{value:"undefined"},description:`Defines the secondary calendar type.
If not set, the calendar will only show the primary calendar type.`,name:"secondaryCalendarType",required:!1,type:{name:'CalendarType | "Gregorian" | "Islamic" | "Japanese" | "Buddhist" | "Persian"'}},selectionMode:{defaultValue:{value:'"Single"'},description:"Defines the type of selection used in the calendar component.\nAccepted property values are:\n\n- `CalendarSelectionMode.Single` - enables a single date selection.(default value)\n- `CalendarSelectionMode.Range` - enables selection of a date range.\n- `CalendarSelectionMode.Multiple` - enables selection of multiple dates.",name:"selectionMode",required:!1,type:{name:'"Single" | "Multiple" | CalendarSelectionMode | "Range"'}},valueFormat:{defaultValue:{value:"undefined"},description:`Determines the format, used for the value attribute.

**Note:** Available since [v2.14.0](https://github.com/UI5/webcomponents/releases/tag/v2.14.0) of **@ui5/webcomponents**.`,name:"valueFormat",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var o;(function(e){e.Today="Today",e.Selected="Selected",e.None="None",e.Working="Working",e.NonWorking="NonWorking",e.Type01="Type01",e.Type02="Type02",e.Type03="Type03",e.Type04="Type04",e.Type05="Type05",e.Type06="Type06",e.Type07="Type07",e.Type08="Type08",e.Type09="Type09",e.Type10="Type10",e.Type11="Type11",e.Type12="Type12",e.Type13="Type13",e.Type14="Type14",e.Type15="Type15",e.Type16="Type16",e.Type17="Type17",e.Type18="Type18",e.Type19="Type19",e.Type20="Type20"})(o||(o={}));function X(){return F("div",{class:"ui5-calendar-legend-item-root",tabindex:parseInt(this.forcedTabIndex),role:"listitem",children:[T("div",{class:"ui5-calendar-legend-item-box"}),T("div",{class:"ui5-calendar-legend-item-text",children:this.effectiveText})]})}N("@ui5/webcomponents-theming","sap_horizon",async()=>W);N("@ui5/webcomponents","sap_horizon",async()=>M,"host");const Q=`.ui5-calendar-legend-item-root{display:flex;flex-direction:row;flex-wrap:wrap;width:var(--_ui5-calendar-legend-item-root-width);white-space:pre-line;text-overflow:ellipsis;overflow:hidden;cursor:pointer;margin:.0625rem 0}.ui5-calendar-legend-item-box{display:inline-block;box-sizing:border-box;height:1rem;width:1rem;margin:var(--_ui5-calendar-legend-item-box-margin);margin-inline-end:var(--_ui5-calendar-legend-item-box-inner-margin);background:var(--sapLegend_WorkingBackground);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}.ui5-calendar-legend-item-text{display:flex;align-items:center;font-size:.875rem;line-height:1.25rem;color:var(--sapContent_LabelColor);font-weight:400;font-family:var(--sapFontFamily);font-size:var(--sapFontSmallSize);white-space:pre-line;text-overflow:ellipsis;overflow:hidden}:host([type="Today"]) .ui5-calendar-legend-item-box{border-color:var(--sapLegend_CurrentDateTime);border:.125rem solid var(--sapLegend_CurrentDateTime)}:host([type="Selected"]) .ui5-calendar-legend-item-box{background:var(--sapContent_Selected_Background);border:.0625rem solid var(--sapList_SelectionBorderColor)}:host([type="Selected"]) .ui5-calendar-legend-item-box:after{content:"";display:var(--_ui5-calendar-legend-item-box-dot-display);width:.25rem;height:.25rem;background:var(--sapContent_Selected_TextColor);border-radius:50%;position:relative;inset-block-start:.3125rem;inset-inline-end:-.3125rem}:host([type="NonWorking"]) .ui5-calendar-legend-item-box{background:var(--sapLegend_NonWorkingBackground);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type01"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor1);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type02"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor2);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type03"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor3);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type04"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor4);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type05"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor5);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type06"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor6);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type07"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor7);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type08"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor8);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type09"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor9);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type10"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor10);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type11"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor11);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type12"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor12);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type13"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor13);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type14"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor14);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type15"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor15);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type16"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor16);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type17"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor17);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type18"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor18);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type19"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor19);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type20"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor20);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}.ui5-calendar-legend-item-root:focus{outline:var(--_ui5-calendar-legend-item-root-focus-border);outline-offset:var(--_ui5-calendar-legend-item-root-focus-offset);border-radius:var(--_ui5-calendar-legend-item-root-focus-border-radius);margin:.0625rem 0}
`;var _=function(e,t,n,s){var l=arguments.length,a=l<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,n):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,s);else for(var m=e.length-1;m>=0;m--)(r=e[m])&&(a=(l<3?r(a):l>3?r(t,n,a):r(t,n))||a);return l>3&&a&&Object.defineProperty(t,n,a),a},y;let u=y=class extends V{constructor(){super(...arguments),this.type="None",this.forcedTabIndex="-1"}get effectiveText(){const t=y.i18nBundle.getText(q),n=y.i18nBundle.getText(P),s=y.i18nBundle.getText(O),l=y.i18nBundle.getText(j);return{[o.Today]:t,[o.Selected]:n,[o.NonWorking]:l,[o.Working]:s}[this.type]||this.text||this.type}};_([h()],u.prototype,"text",void 0);_([h()],u.prototype,"type",void 0);_([h({noAttribute:!0})],u.prototype,"forcedTabIndex",void 0);_([E("@ui5/webcomponents")],u,"i18nBundle",void 0);u=y=_([U({tag:"ui5-calendar-legend-item",renderer:B,styles:Q,template:X})],u);u.define();const Z=u;function ee(){return F("div",{class:"ui5-calendar-legend-root",onFocusOut:this._onFocusOut,onFocusIn:this._onFocusIn,onKeyDown:this._onItemKeyDown,onMouseDown:this._onMouseDown,role:"list","aria-roledescription":this._roleDescription,children:[this.defaultItemsMapping.filter(e=>!e.hide).map(e=>T(Z,{type:e.type})),this.legendItems.map(e=>T("slot",{name:e._individualSlot}))]})}N("@ui5/webcomponents-theming","sap_horizon",async()=>W);N("@ui5/webcomponents","sap_horizon",async()=>M,"host");const te=`.ui5-calendar-legend-root{column-width:7.5rem;gap:.5rem;padding:var(--_ui5-calendar-legend-root-padding);margin:1rem 0;width:var(--_ui5-calendar-legend-root-width);background-color:var(--sapList_Background)}
`;var g=function(e,t,n,s){var l=arguments.length,a=l<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,n):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,s);else for(var m=e.length-1;m>=0;m--)(r=e[m])&&(a=(l<3?r(a):l>3?r(t,n,a):r(t,n))||a);return l>3&&a&&Object.defineProperty(t,n,a),a},x;let p=x=class extends V{constructor(){super(),this.hideToday=!1,this.hideSelectedDay=!1,this.hideNonWorkingDay=!1,this.hideWorkingDay=!1,this._lastFocusedItemIndex=null}onAfterRendering(){if(!this._itemNavigation){this._itemNavigation=new A(this,{navigationMode:z.Horizontal,behavior:$.Static,getItemsCallback:()=>this.focusableElements});const t=this._lastFocusedItemIndex!==null?this._lastFocusedItemIndex:0;this._itemNavigation.setCurrentItem(this.focusableElements[t])}}getFocusDomRef(){return this._itemNavigation._getCurrentItem()}_onMouseDown(t){t.stopPropagation();const n=t.target;this._itemNavigation.setCurrentItem(n),this._itemNavigation._focusCurrentItem(),this._lastFocusedItemIndex=this.focusableElements.indexOf(n)}_onFocusIn(t){const n=t.target;this.fireDecoratorEvent("calendar-legend-selection-change",{item:n}),this._lastFocusedItemIndex=this.focusableElements.indexOf(n)}_onFocusOut(){this.fireDecoratorEvent("calendar-legend-focus-out")}_onItemKeyDown(t){const n=this.focusableElements,s=n.length,l=t.target,a=n.indexOf(l);if(H(t)){t.preventDefault();const r=a+1;r<s&&(this._itemNavigation.setCurrentItem(n[r]),this._itemNavigation._focusCurrentItem(),this._lastFocusedItemIndex=r)}if(G(t)){t.preventDefault();const r=a-1;r>=0&&(this._itemNavigation.setCurrentItem(n[r]),this._itemNavigation._focusCurrentItem(),this._lastFocusedItemIndex=r)}}get focusableElements(){return[...this.shadowRoot.querySelectorAll("[ui5-calendar-legend-item]"),...this.legendItems]}get legendItems(){return this.getSlottedNodes("items").filter(n=>n.hasAttribute("ui5-calendar-legend-item"))}get defaultItemsMapping(){return[{type:o.Today,hide:this.hideToday},{type:o.Selected,hide:this.hideSelectedDay},{type:o.Working,hide:this.hideWorkingDay},{type:o.NonWorking,hide:this.hideNonWorkingDay}]}get _roleDescription(){return x.i18nBundle.getText(J)}};g([h({type:Boolean})],p.prototype,"hideToday",void 0);g([h({type:Boolean})],p.prototype,"hideSelectedDay",void 0);g([h({type:Boolean})],p.prototype,"hideNonWorkingDay",void 0);g([h({type:Boolean})],p.prototype,"hideWorkingDay",void 0);g([R({type:HTMLElement,invalidateOnChildChange:!0,individualSlots:!0,default:!0})],p.prototype,"items",void 0);g([E("@ui5/webcomponents")],p,"i18nBundle",void 0);p=x=g([U({tag:"ui5-calendar-legend",renderer:B,styles:te,template:ee}),k("calendar-legend-selection-change",{bubbles:!0}),k("calendar-legend-focus-out",{bubbles:!0})],p);p.define();const D=S("ui5-calendar-legend",[],["hideNonWorkingDay","hideSelectedDay","hideToday","hideWorkingDay"],[],[]);D.displayName="CalendarLegend";try{D.displayName="CalendarLegend",D.__docgenInfo={description:"The `CalendarLegend` component is designed for use within the `Calendar` to display a legend.\nEach `CalendarLegendItem` represents a unique date type, specifying its visual style\nand a corresponding textual label.\n\n\n\n__Note:__ This is a UI5 Web Component! [CalendarLegend UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/CalendarLegend) | [Repository](https://github.com/UI5/webcomponents)",displayName:"CalendarLegend",props:{children:{defaultValue:null,description:"Defines the items of the component.\n\n__Supported Node Type/s:__ `Array<CalendarLegendItem>`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},hideNonWorkingDay:{defaultValue:{value:"false"},description:"Hides the Non-Working day item in the legend.",name:"hideNonWorkingDay",required:!1,type:{name:"boolean"}},hideSelectedDay:{defaultValue:{value:"false"},description:"Hides the Selected day item in the legend.",name:"hideSelectedDay",required:!1,type:{name:"boolean"}},hideToday:{defaultValue:{value:"false"},description:"Hides the Today item in the legend.",name:"hideToday",required:!1,type:{name:"boolean"}},hideWorkingDay:{defaultValue:{value:"false"},description:"Hides the Working day item in the legend.",name:"hideWorkingDay",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const f=S("ui5-calendar-legend-item",["text","type"],[],[],[]);f.displayName="CalendarLegendItem";try{f.displayName="CalendarLegendItem",f.__docgenInfo={description:"Each `CalendarLegendItem` represents a legend item, displaying a color with a label.\nThe color is determined by the `type` property and the label by the `text` property.\nIf a `SpecialCalendarDate` is used within the `Calendar` and a type is set, clicking on a `CalendarLegendItem`\nwith the same type will emphasize the respective date(s) in the calendar.\n\n### Usage\nThe `CalendarLegendItem` is intended to be used within the `CalendarLegend` component.\n\n\n\n__Note:__ This is a UI5 Web Component! [CalendarLegendItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/CalendarLegendItem) | [Repository](https://github.com/UI5/webcomponents)",displayName:"CalendarLegendItem",props:{text:{defaultValue:{value:"undefined"},description:"Defines the text content of the Calendar Legend Item.",name:"text",required:!1,type:{name:"string"}},type:{defaultValue:{value:'"None"'},description:"Defines the type of the Calendar Legend Item.",name:"type",required:!1,type:{name:'"None" | CalendarLegendItemType | "Today" | "Selected" | "Working" | "NonWorking" | "Type01" | "Type02" | "Type03" | "Type04" | "Type05" | "Type06" | ... 13 more ... | "Type20"'}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const d=S("ui5-special-date",["type","value"],[],[],[]);d.displayName="SpecialCalendarDate";try{d.displayName="SpecialCalendarDate",d.__docgenInfo={description:"The `SpecialCalendarDate` component defines a special calendar date to be used inside `Calendar`,\nwhich is visually distinguished from the rest of the dates.\n\n__Note:__ This is a UI5 Web Component! [SpecialCalendarDate UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/SpecialCalendarDate) | [Repository](https://github.com/UI5/webcomponents)",displayName:"SpecialCalendarDate",props:{type:{defaultValue:{value:'"None"'},description:"Defines the type of the special date.",name:"type",required:!1,type:{name:'"None" | CalendarLegendItemType | "Today" | "Selected" | "Working" | "NonWorking" | "Type01" | "Type02" | "Type03" | "Type04" | "Type05" | "Type06" | ... 13 more ... | "Type20"'}},value:{defaultValue:null,description:"The date formatted according to the `formatPattern` property\nof the `Calendar` that hosts the component.",name:"value",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const ne={title:"Inputs / Calendar",component:w,argTypes:{children:{control:{disable:!0}},specialDates:{control:{disable:!0}}},args:{primaryCalendarType:Y.Gregorian,selectionMode:K.Single},tags:["package:@ui5/webcomponents"]},b={},L=new Date,I=new Date(L.getFullYear(),L.getMonth(),1),c=`${I.getFullYear()}-${(I.getMonth()+1).toString().padStart(2,"0")}-`,ae=`${c}${I.getDate()}`,v={args:{specialDates:i.jsx(d,{type:o.Type01,value:ae})}},C={name:"CalendarLegend",args:{calendarLegend:i.jsxs(D,{children:[i.jsx(f,{text:"Vacation",type:o.Type05}),i.jsx(f,{text:"School Vacation",type:o.Type07}),i.jsx(f,{text:"Wedding",type:o.Type13})]}),specialDates:i.jsxs(i.Fragment,{children:[i.jsx(d,{type:o.Type05,value:`${c}01`}),i.jsx(d,{type:o.Type05,value:`${c}02`}),i.jsx(d,{type:o.Type05,value:`${c}03`}),i.jsx(d,{type:o.Type07,value:`${c}11`}),i.jsx(d,{type:o.Type07,value:`${c}12`}),i.jsx(d,{type:o.Type07,value:`${c}13`}),i.jsx(d,{type:o.Type13,value:`${c}26`})]})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"{}",...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    specialDates: <SpecialCalendarDate type={CalendarLegendItemType.Type01} value={firstDateOfMonthString} />
  }
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:'{\n  name: \'CalendarLegend\',\n  args: {\n    calendarLegend: <CalendarLegend>\n        <CalendarLegendItem text="Vacation" type={CalendarLegendItemType.Type05} />\n        <CalendarLegendItem text="School Vacation" type={CalendarLegendItemType.Type07} />\n        <CalendarLegendItem text="Wedding" type={CalendarLegendItemType.Type13} />\n      </CalendarLegend>,\n    specialDates: <>\n        <SpecialCalendarDate type={CalendarLegendItemType.Type05} value={`${yearMonthString}01`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type05} value={`${yearMonthString}02`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type05} value={`${yearMonthString}03`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type07} value={`${yearMonthString}11`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type07} value={`${yearMonthString}12`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type07} value={`${yearMonthString}13`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type13} value={`${yearMonthString}26`} />\n      </>\n  }\n}',...C.parameters?.docs?.source}}};const oe=["Default","SpecialDate","CalendarLegendStory"],ue=Object.freeze(Object.defineProperty({__proto__:null,CalendarLegendStory:C,Default:b,SpecialDate:v,__namedExportsOrder:oe,default:ne},Symbol.toStringTag,{value:"Module"}));export{ue as C,b as D,d as S,D as a,C as b,f as c,v as d};
