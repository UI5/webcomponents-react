import{U as g,g as P,D as d,s as C}from"./Gregorian-BiM75c1s.js";import"./Persian-B2jBCZCh.js";import{ad as D,l as h,c as o,a1 as y,an as N,p as f,d as T,b as V,s as v,m as I,bg as _,fo as S,fp as M,fq as q,fr as E,fs as F,ft as U,fu as x,fv as R,fw as A,f as O,fx as L,fy as W,bS as B,w as H,o as z}from"./iframe-CLqwDYWN.js";import{d as G,a as $,m as j,b as J,e as K}from"./Calendar-9lWhn5fi.js";import{D as Y,a as Q,b as k}from"./DatePicker-cpKBrCSa.js";import{S as X,a as w}from"./SegmentedButton-DVrshPel.js";import{T as Z}from"./TimeSelectionClocks--D6LaZ1L.js";import{o as ee}from"./query-CzSBusdE.js";const te="date-time",ae="M352 192q33 0 62 12.5t51 34.5 34.5 51 12.5 62-12.5 62-34.5 51-51 34.5-62 12.5-62-12.5-51-34.5-34.5-51-12.5-62 12.5-62 34.5-51 51-34.5 62-12.5zM32 32h64V0h32v32h192V0h32v32h64q14 0 23 9t9 23v96h-32v-32H32v352h128v32H32q-14 0-23-9t-9-23V64q0-14 9-23t23-9zm192 320q0 27 10 50t27.5 40.5T302 470t50 10 50-10 40.5-27.5T470 402t10-50-10-50-27.5-40.5T402 234t-50-10-50 10-40.5 27.5T234 302t-10 50zm127-64q16 0 16 16v48h49q16 0 16 16 0 6-4.5 11t-11.5 5h-65q-7 0-11.5-5t-4.5-11v-64q0-16 16-16zm1-192V64h-32v32h32zM96 64v32h32V64H96z",ne=!0,ie="SAP-icons-v4",oe="@ui5/webcomponents-icons";D(te,{pathData:ae,ltr:ne,collection:ie,packageName:oe});const se="date-time",re="M83 243v147q0 17 11 28t28 11h4q11 0 18.5 7t7.5 18-7.5 18.5T126 480h-4q-38 0-64-26t-26-64V154q0-38 26-64t64-26h6V26q0-11 7.5-18.5T154 0t18 7.5 7 18.5v38h122V26q0-11 7-18.5T326 0t18.5 7.5T352 26v38h6q38 0 64 26t26 64v4q0 11-7.5 18.5T422 184t-18-7.5-7-18.5v-4q0-17-11-28t-28-11h-6v19q0 11-7.5 18.5T326 160t-18-7.5-7-18.5v-19H179v19q0 11-7 18.5t-18 7.5-18.5-7.5T128 134v-19h-6q-17 0-28 11t-11 28v38h51q11 0 18.5 7.5T160 218t-7.5 18-18.5 7H83zm237-51q33 0 62 12.5t51 34.5 34.5 51 12.5 62-12.5 62-34.5 51-51 34.5-62 12.5-62-12.5-51-34.5-34.5-51-12.5-62 12.5-62 34.5-51 51-34.5 62-12.5zm0 269q23 0 42.5-8.5T397 429t23.5-35 8.5-42q0-23-8.5-42.5T397 275t-34.5-23.5T320 243q-22 0-42 8.5T243 275t-23.5 34.5T211 352q0 22 8.5 42t23.5 35 35 23.5 42 8.5zm55-90q9 7 9 19 0 11-7.5 18.5T358 416q-8 0-16-6l-45-39q-9-8-9-19v-46q0-11 7.5-18.5T314 280t18 7.5 7 18.5v34z",le=!0,de="SAP-icons-v5",ue="@ui5/webcomponents-icons";D(se,{pathData:re,ltr:le,collection:de,packageName:ue});function ce(){return[Y.call(this),Q.call(this,{content:me,footer:pe})]}function me(){return h(N,{children:[this._phoneView&&o("div",{class:"ui5-dt-picker-header",children:h(X,{class:"ui5-dt-picker-toggle-button",onSelectionChange:this._dateTimeSwitchChange,children:[o(w,{"data-ui5-key":"Date",selected:this.showDateView,children:this.btnDateLabel}),o(w,{"data-ui5-key":"Time",selected:this.showTimeView,children:this.btnTimeLabel})]})}),h("div",{class:{"ui5-dt-picker-content":!0,"ui5-dt-picker-content--phone":this._phoneView},children:[o($,{class:{"ui5-dt-cal":!0,"ui5-dt-cal--hidden":this._phoneView&&this.showTimeView,"ui5-dt-time--hidden":this._phoneView&&this.showDateView},id:`${this._id}-calendar`,primaryCalendarType:this._primaryCalendarType,secondaryCalendarType:this.secondaryCalendarType,formatPattern:this._formatPattern,selectionMode:this._calendarSelectionMode,minDate:this.minDate,maxDate:this.maxDate,calendarWeekNumbering:this.calendarWeekNumbering,onSelectionChange:this.onSelectedDatesChange,onShowMonthView:this.onHeaderShowMonthPress,onShowYearView:this.onHeaderShowYearPress,hideWeekNumbers:this.hideWeekNumbers,_currentPicker:this._calendarCurrentPicker,children:this._calendarSelectedDates.map(s=>o(G,{value:s}))}),!this._phoneView&&o("span",{class:"ui5-dt-picker-separator"}),this.showTimeView&&o(Z,{id:`${this._id}-time-sel`,class:{"ui5-dt-time":!0,"ui5-dt-cal--hidden":this._phoneView&&this.showTimeView,"ui5-dt-time--hidden":this._phoneView&&this.showDateView},formatPattern:this._formatPattern,value:this._timeSelectionValue,onChange:this.onTimeSelectionChange,_calendarType:this._primaryCalendarType})]})]})}function pe(){return h("div",{slot:"footer",class:{"ui5-dt-picker-footer":!0,"ui5-dt-picker-footer-time-hidden":this._phoneView&&this.showTimeView||this._phoneView&&this.showDateView},children:[o(y,{id:"ok",class:"ui5-dt-picker-action",design:"Emphasized",disabled:this._submitDisabled,onClick:this._submitClick,children:this.btnOKLabel}),o(y,{id:"cancel",class:"ui5-dt-picker-action",design:"Transparent",onClick:this._cancelClick,children:this.btnCancelLabel})]})}f("@ui5/webcomponents-theming","sap_horizon",async()=>T);f("@ui5/webcomponents","sap_horizon",async()=>V);const he=`:host{min-width:15rem;color:var(--sapField_TextColor);background-color:var(--sapField_Background)}:host .ui5-date-picker-input{min-width:inherit;color:inherit;background-color:inherit}
`;f("@ui5/webcomponents-theming","sap_horizon",async()=>T);f("@ui5/webcomponents","sap_horizon",async()=>V);const fe=`:host .ui5-date-picker-popover{width:auto}:host .ui5-date-picker-popover:not([on-phone]) .ui5-popover-header{width:20rem}.ui5-dt-picker-content{display:flex;flex-direction:row;height:var(--_ui5-v2-17-0-rc-5_datetime_picker_height);min-width:var(--_ui5-v2-17-0-rc-5_datetime_picker_width);box-sizing:border-box;justify-content:center}.ui5-dt-picker-toggle-button{width:8rem}.ui5-dt-cal{width:auto;box-sizing:border-box}.ui5-dt-time{width:100%;min-width:var(--_ui5-v2-17-0-rc-5_datetime_timeview_width);box-sizing:border-box}.ui5-dt-cal.ui5-dt-cal--hidden,.ui5-dt-time.ui5-dt-time--hidden{display:none}.ui5-dt-picker-header{display:flex;justify-content:center;width:100%;margin-top:1rem;box-sizing:border-box}.ui5-dt-picker-separator{height:calc(100% - 2rem);width:0px;margin-top:1rem;margin-bottom:1rem;border-left:1px solid var(--sapGroup_ContentBorderColor);box-sizing:border-box}.ui5-dt-picker-footer{display:flex;justify-content:flex-end;align-items:center;height:2.75rem;width:100%}.ui5-dt-picker-footer.ui5-dt-picker-footer-time-hidden{padding:0}.ui5-dt-picker-action{margin:.25rem}#ok.ui5-dt-picker-action{width:4rem}.ui5-dt-picker-content--phone.ui5-dt-picker-content{min-width:20rem;height:calc(100% - 4rem)}.ui5-dt-picker-content--phone.ui5-dt-picker-content [ui5-time-selection-clocks]{height:var(--_ui5-v2-17-0-rc-5_datetime_timeview_phonemode_clocks_width);width:auto}.ui5-dt-picker-content--phone.ui5-dt-picker-content [ui5-calendar]{margin-bottom:var(--_ui5-v2-17-0-rc-5_datetime_dateview_phonemode_margin_bottom)}.ui5-dt-picker-content--phone .ui5-dt-cal{width:100%}.ui5-dt-picker-content--phone .ui5-dt-time{min-width:var(--_ui5-v2-17-0-rc-5_datetime_timeview_phonemode_width)}
`;var m=function(s,e,t,i){var l=arguments.length,a=l<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(s,e,t,i);else for(var b=s.length-1;b>=0;b--)(u=s[b])&&(a=(l<3?u(a):l>3?u(e,t,a):u(e,t))||a);return l>3&&a&&Object.defineProperty(e,t,a),a},n;const ve=640;let r=n=class extends k{constructor(){super(),this._showTimeView=!1,this._phoneMode=!1,this._previewValues={},this._lastValidValue="",this._handleResizeBound=this._handleResize.bind(this)}onResponsivePopoverAfterClose(){super.onResponsivePopoverAfterClose(),this._showTimeView=!1,this._previewValues={}}onEnterDOM(){_.register(document.body,this._handleResizeBound)}onExitDOM(){_.deregister(document.body,this._handleResizeBound)}_togglePicker(){if(super._togglePicker(),this.open){let e=this.value;(!e||!this.isValidValue(e))&&(e=this._lastValidValue||this.getValueFormat().format(g.getInstance())),this._previewValues={...this._previewValues,timeSelectionValue:e}}}get formValidityMessage(){const e=this.formValidity;return e.valueMissing?n.i18nBundle.getText(S,this.getFormat().oFormatOptions.pattern):e.patternMismatch?n.i18nBundle.getText(M,this.getFormat().oFormatOptions.pattern):e.rangeUnderflow?n.i18nBundle.getText(q,this.minDate):e.rangeOverflow?n.i18nBundle.getText(E,this.maxDate):""}get formValidity(){return{valueMissing:this.required&&!this.value,patternMismatch:!this.isValidValue(this.value),rangeUnderflow:!this.isValidMin(this.value),rangeOverflow:!this.isValidMax(this.value)}}get _formatPattern(){const e=!!(this.formatPattern||"").match(/H/i),t=!this.formatPattern||!e,i=P(F());return t?i.getCombinedDateTimePattern("medium","medium",this._primaryCalendarType):this.formatPattern||""}get _calendarTimestamp(){return this._previewValues.calendarTimestamp?this._previewValues.calendarTimestamp:super._calendarTimestamp}get _calendarSelectedDates(){return this._previewValues.calendarValue?[this._previewValues.calendarValue]:super._calendarSelectedDates}get _timeSelectionValue(){return this._previewValues.timeSelectionValue?this._previewValues.timeSelectionValue:this.value}get openIconName(){return"date-time"}get btnOKLabel(){return n.i18nBundle.getText(U)}get btnCancelLabel(){return n.i18nBundle.getText(x)}get btnDateLabel(){return n.i18nBundle.getText(R)}get btnTimeLabel(){return n.i18nBundle.getText(A)}get showFooter(){return!0}get showDateView(){return this._phoneView?!this._showTimeView:!0}get showTimeView(){return this._phoneView?this._showTimeView:!0}get _phoneView(){return O()||this._phoneMode}get roleDescription(){return n.i18nBundle.getText(L)}get pickerAccessibleName(){return n.i18nBundle.getText(W,this.ariaLabelText)}get _shouldHideHeader(){return!0}async onSelectedDatesChange(e){e.preventDefault();let t=this._clocks?.value||"";(!t||!this.isValidValue(t))&&(t=this._lastValidValue||this.getValueFormat().format(g.getInstance())),this._previewValues={...this._previewValues,calendarTimestamp:e.detail.timestamp,calendarValue:e.detail.selectedValues[0],timeSelectionValue:t},this._showTimeView=!0,!this.showDateView&&(await B(),this._clocks.focus())}onTimeSelectionChange(e){this._previewValues={...this._previewValues,timeSelectionValue:e.detail.value}}_handleResize(){const t=document.body.offsetWidth<=ve;(t&&!this._phoneMode||!t&&this._phoneMode)&&(this._phoneMode=t)}get _submitDisabled(){return!this._calendarSelectedDates||!this._calendarSelectedDates.length}_submitClick(){const e=this.getSelectedDateTime(),t=this.getValueFormat().format(e);this.value!==t&&this._updateValueAndFireEvents(t,!0,["change","value-changed"]),this._togglePicker()}_cancelClick(){this._togglePicker()}_dateTimeSwitchChange(e){const t=e.detail.selectedItems[0];this._showTimeView=t.getAttribute("data-ui5-key")==="Time"}_modifyDateValue(e,t,i){if(!this.dateValue)return;const a=j(J.fromLocalJSDate(this.dateValue),e,t,i,this._minDate,this._maxDate).toLocalJSDate();a.setHours(this.dateValue.getHours()),a.setMinutes(this.dateValue.getMinutes()),a.setSeconds(this.dateValue.getSeconds());const u=this.formatValue(a);this._updateValueAndFireEvents(u,!0,["change","value-changed"])}_updateValueAndFireEvents(e,t,i,l=!0){super._updateValueAndFireEvents(e,t,i,l),this.value&&this.isValidValue(this.value)&&(this._lastValidValue=this.value)}_checkValueValidity(e){return e===""?!0:this.isValidValue(e)}getSelectedDateTime(){const e=this.getValueFormat().parse(this._calendarSelectedDates[0]),t=this.getValueFormat().parse(this._timeSelectionValue);return t&&(e.setHours(t.getHours()),e.setMinutes(t.getMinutes()),e.setSeconds(t.getSeconds())),e}getFormat(){return this._isPattern?d.getDateTimeInstance({strictParsing:!0,pattern:this._formatPattern,calendarType:this._primaryCalendarType}):d.getDateTimeInstance({strictParsing:!0,style:this._formatPattern,calendarType:this._primaryCalendarType})}getDisplayFormat(){return this._isDisplayFormatPattern?d.getDateTimeInstance({strictParsing:!0,pattern:this._displayFormat,calendarType:this._primaryCalendarType}):d.getDateTimeInstance({strictParsing:!0,style:this._displayFormat,calendarType:this._primaryCalendarType})}getValueFormat(){return this._valueFormat?this._isValueFormatPattern?d.getDateTimeInstance({strictParsing:!0,pattern:this._valueFormat,calendarType:this._primaryCalendarType}):d.getDateTimeInstance({strictParsing:!0,style:this._valueFormat,calendarType:this._primaryCalendarType}):this.getISOFormat()}getISOFormat(){return this._isoFormatInstance||(this._isoFormatInstance=d.getDateTimeInstance({strictParsing:!0,pattern:"YYYY-MM-dd hh:mm:ss",calendarType:this._primaryCalendarType})),this._isoFormatInstance}get _calendarPickersMode(){return K.DAY_MONTH_YEAR}};m([v({type:Boolean,noAttribute:!0})],r.prototype,"_showTimeView",void 0);m([v({type:Boolean})],r.prototype,"_phoneMode",void 0);m([v({type:Object})],r.prototype,"_previewValues",void 0);m([v()],r.prototype,"_lastValidValue",void 0);m([ee("[ui5-time-selection-clocks]")],r.prototype,"_clocks",void 0);r=n=m([I({tag:"ui5-datetime-picker",template:ce,styles:[k.styles,he,fe]})],r);r.define();const c=H("ui5-datetime-picker",["accessibleDescription","accessibleDescriptionRef","accessibleName","accessibleNameRef","calendarWeekNumbering","displayFormat","formatPattern","maxDate","minDate","name","placeholder","primaryCalendarType","secondaryCalendarType","value","valueFormat","valueState"],["disabled","hideWeekNumbers","open","readonly","required"],["valueStateMessage"],["change","close","input","open","value-state-change"]);c.displayName="DateTimePicker";try{c.displayName="DateTimePicker",c.__docgenInfo={description:`The \`DateTimePicker\` component alows users to select both date (day, month and year) and time (hours, minutes and seconds)
and for the purpose it consists of input field and Date/Time picker.

### Usage

Use the \`DateTimePicker\` if you need a combined date and time input component.
Don't use it if you want to use either date, or time value.
In this case, use the \`DatePicker\` or the \`TimePicker\` components instead.

The user can set date/time by:

- using the calendar and the time selectors
- typing in the input field

Programmatically, to set date/time for the \`DateTimePicker\`, use the \`value\` property

### Formatting

The value entered by typing into the input field must fit to the used date/time format.

Supported format options are pattern-based on Unicode LDML Date Format notation.
For more information, see [UTS #35: Unicode Locale Data Markup Language](https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).

**Example:** the following format \`dd/MM/yyyy, hh:mm:ss aa\`
corresponds the \`13/04/2020, 03:16:16 AM\` value.

The small 'h' defines "12" hours format and the "aa" symbols - "AM/PM" time periods.

**Example:** the following format \`dd/MM/yyyy, HH:mm:ss\`
corresponds the \`13/04/2020, 15:16:16\` value.

The capital 'H' indicates "24" hours format.

**Note:** If the \`formatPattern\` does NOT include time,
the \`DateTimePicker\` will fallback to the default time format according to the locale.

**Note:** If no placeholder is set to the \`DateTimePicker\`,
the current \`formatPattern\` is displayed as a placeholder.
If another placeholder is needed, it must be set or in case no placeholder is needed - it can be set to an empty string.

**Note:** If the user input does NOT match the \`formatPattern\`,
the \`DateTimePicker\` makes an attempt to parse it based on the
locale settings.

### Responsive behavior

The \`DateTimePicker\` is responsive and fully adapts to all devices.
For larger screens, such as tablet or desktop, it is displayed as a popover, while
on phone devices, it is displayed full screen.



__Note:__ This is a UI5 Web Component! [DateTimePicker UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/DateTimePicker) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"DateTimePicker",props:{valueStateMessage:{defaultValue:null,description:`Defines the value state message that will be displayed as pop up under the component.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed,
when the component is in \`Information\`, \`Critical\` or \`Negative\` value state.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:`Fired when the input operation has finished by pressing Enter or on focusout.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<DateTimePickerDomRef, DatePickerChangeEventDetail>) => void"}},onClose:{defaultValue:null,description:`Fired after the component's picker is closed.

**Note:** Available since [v2.4.0](https://github.com/UI5/webcomponents/releases/tag/v2.4.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<DateTimePickerDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when the value of the component is changed at each key stroke.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<DateTimePickerDomRef, DatePickerInputEventDetail>) => void"}},onOpen:{defaultValue:null,description:`Fired after the component's picker is opened.

**Note:** Available since [v2.4.0](https://github.com/UI5/webcomponents/releases/tag/v2.4.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DateTimePickerDomRef, never>) => void"}},onValueStateChange:{defaultValue:null,description:`Fired before the value state of the component is updated internally.
The event is preventable, meaning that if it's default action is
prevented, the component will not update the value state.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onValueStateChange",required:!1,type:{name:"(event: Ui5CustomEvent<DateTimePickerDomRef, DatePickerValueStateChangeEventDetail>) => void"}},accessibleDescription:{defaultValue:{value:"undefined"},description:`Defines the accessible description of the component.

**Note:** Available since [v2.14.0](https://github.com/UI5/webcomponents/releases/tag/v2.14.0) of **@ui5/webcomponents**.`,name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleDescriptionRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that describe the input.

**Note:** Available since [v2.14.0](https://github.com/UI5/webcomponents/releases/tag/v2.14.0) of **@ui5/webcomponents**.`,name:"accessibleDescriptionRef",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the aria-label attribute for the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},calendarWeekNumbering:{defaultValue:{value:'"Default"'},description:`Defines how to calculate calendar weeks and first day of the week.
If not set, the calendar will be displayed according to the currently set global configuration.

**Note:** Available since [v2.2.0](https://github.com/UI5/webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents**.`,name:"calendarWeekNumbering",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"ISO_8601"'},{value:'"MiddleEastern"'},{value:'"WesternTraditional"'},{value:'"ISO_8601"'},{value:'"MiddleEastern"'},{value:'"WesternTraditional"'}]}},disabled:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as disabled.",name:"disabled",required:!1,type:{name:"boolean"}},displayFormat:{defaultValue:{value:"undefined"},description:`Determines the format, displayed in the input field.

**Note:** Available since [v2.14.0](https://github.com/UI5/webcomponents/releases/tag/v2.14.0) of **@ui5/webcomponents**.`,name:"displayFormat",required:!1,type:{name:"string"}},formatPattern:{defaultValue:{value:"undefined"},description:`Determines the format, displayed in the input field.
@deprecated Use displayFormat and valueFormat instead`,name:"formatPattern",required:!1,type:{name:"string"}},hideWeekNumbers:{defaultValue:{value:"false"},description:`Defines the visibility of the week numbers column.

**Note:** For calendars other than Gregorian,
the week numbers are not displayed regardless of what is set.`,name:"hideWeekNumbers",required:!1,type:{name:"boolean"}},maxDate:{defaultValue:null,description:`Determines the maximum date available for selection.

**Note:** If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (yyyy-MM-dd).`,name:"maxDate",required:!1,type:{name:"string"}},minDate:{defaultValue:null,description:`Determines the minimum date available for selection.

**Note:** If the formatPattern property is not set, the minDate value must be provided in the ISO date format (yyyy-MM-dd).`,name:"minDate",required:!1,type:{name:"string"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:"name",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:`Defines the open or closed state of the popover.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"undefined"},description:`Defines a short hint, intended to aid the user with data entry when the
component has no value.

**Note:** When no placeholder is set, the format pattern is displayed as a placeholder.
Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.`,name:"placeholder",required:!1,type:{name:"string"}},primaryCalendarType:{defaultValue:{value:"undefined"},description:`Sets a calendar type used for display.
If not set, the calendar type of the global configuration is used.`,name:"primaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},readonly:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as read-only.",name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},secondaryCalendarType:{defaultValue:{value:"undefined"},description:`Defines the secondary calendar type.
If not set, the calendar will only show the primary calendar type.`,name:"secondaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},value:{defaultValue:null,description:"Defines a formatted date value.",name:"value",required:!1,type:{name:"string"}},valueFormat:{defaultValue:{value:"undefined"},description:`Determines the format, used for the value attribute.

**Note:** Available since [v2.14.0](https://github.com/UI5/webcomponents/releases/tag/v2.14.0) of **@ui5/webcomponents**.`,name:"valueFormat",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Information"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{c.displayName="DateTimePicker",c.__docgenInfo={description:`The \`DateTimePicker\` component alows users to select both date (day, month and year) and time (hours, minutes and seconds)
and for the purpose it consists of input field and Date/Time picker.

### Usage

Use the \`DateTimePicker\` if you need a combined date and time input component.
Don't use it if you want to use either date, or time value.
In this case, use the \`DatePicker\` or the \`TimePicker\` components instead.

The user can set date/time by:

- using the calendar and the time selectors
- typing in the input field

Programmatically, to set date/time for the \`DateTimePicker\`, use the \`value\` property

### Formatting

The value entered by typing into the input field must fit to the used date/time format.

Supported format options are pattern-based on Unicode LDML Date Format notation.
For more information, see [UTS #35: Unicode Locale Data Markup Language](https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).

**Example:** the following format \`dd/MM/yyyy, hh:mm:ss aa\`
corresponds the \`13/04/2020, 03:16:16 AM\` value.

The small 'h' defines "12" hours format and the "aa" symbols - "AM/PM" time periods.

**Example:** the following format \`dd/MM/yyyy, HH:mm:ss\`
corresponds the \`13/04/2020, 15:16:16\` value.

The capital 'H' indicates "24" hours format.

**Note:** If the \`formatPattern\` does NOT include time,
the \`DateTimePicker\` will fallback to the default time format according to the locale.

**Note:** If no placeholder is set to the \`DateTimePicker\`,
the current \`formatPattern\` is displayed as a placeholder.
If another placeholder is needed, it must be set or in case no placeholder is needed - it can be set to an empty string.

**Note:** If the user input does NOT match the \`formatPattern\`,
the \`DateTimePicker\` makes an attempt to parse it based on the
locale settings.

### Responsive behavior

The \`DateTimePicker\` is responsive and fully adapts to all devices.
For larger screens, such as tablet or desktop, it is displayed as a popover, while
on phone devices, it is displayed full screen.



__Note:__ This is a UI5 Web Component! [DateTimePicker UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/DateTimePicker) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"DateTimePicker",props:{valueStateMessage:{defaultValue:null,description:`Defines the value state message that will be displayed as pop up under the component.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed,
when the component is in \`Information\`, \`Critical\` or \`Negative\` value state.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:`Fired when the input operation has finished by pressing Enter or on focusout.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<DateTimePickerDomRef, DatePickerChangeEventDetail>) => void"}},onClose:{defaultValue:null,description:`Fired after the component's picker is closed.

**Note:** Available since [v2.4.0](https://github.com/UI5/webcomponents/releases/tag/v2.4.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<DateTimePickerDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when the value of the component is changed at each key stroke.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<DateTimePickerDomRef, DatePickerInputEventDetail>) => void"}},onOpen:{defaultValue:null,description:`Fired after the component's picker is opened.

**Note:** Available since [v2.4.0](https://github.com/UI5/webcomponents/releases/tag/v2.4.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DateTimePickerDomRef, never>) => void"}},onValueStateChange:{defaultValue:null,description:`Fired before the value state of the component is updated internally.
The event is preventable, meaning that if it's default action is
prevented, the component will not update the value state.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onValueStateChange",required:!1,type:{name:"(event: Ui5CustomEvent<DateTimePickerDomRef, DatePickerValueStateChangeEventDetail>) => void"}},accessibleDescription:{defaultValue:{value:"undefined"},description:`Defines the accessible description of the component.

**Note:** Available since [v2.14.0](https://github.com/UI5/webcomponents/releases/tag/v2.14.0) of **@ui5/webcomponents**.`,name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleDescriptionRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that describe the input.

**Note:** Available since [v2.14.0](https://github.com/UI5/webcomponents/releases/tag/v2.14.0) of **@ui5/webcomponents**.`,name:"accessibleDescriptionRef",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the aria-label attribute for the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},calendarWeekNumbering:{defaultValue:{value:'"Default"'},description:`Defines how to calculate calendar weeks and first day of the week.
If not set, the calendar will be displayed according to the currently set global configuration.

**Note:** Available since [v2.2.0](https://github.com/UI5/webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents**.`,name:"calendarWeekNumbering",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"ISO_8601"'},{value:'"MiddleEastern"'},{value:'"WesternTraditional"'},{value:'"ISO_8601"'},{value:'"MiddleEastern"'},{value:'"WesternTraditional"'}]}},disabled:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as disabled.",name:"disabled",required:!1,type:{name:"boolean"}},displayFormat:{defaultValue:{value:"undefined"},description:`Determines the format, displayed in the input field.

**Note:** Available since [v2.14.0](https://github.com/UI5/webcomponents/releases/tag/v2.14.0) of **@ui5/webcomponents**.`,name:"displayFormat",required:!1,type:{name:"string"}},formatPattern:{defaultValue:{value:"undefined"},description:`Determines the format, displayed in the input field.
@deprecated Use displayFormat and valueFormat instead`,name:"formatPattern",required:!1,type:{name:"string"}},hideWeekNumbers:{defaultValue:{value:"false"},description:`Defines the visibility of the week numbers column.

**Note:** For calendars other than Gregorian,
the week numbers are not displayed regardless of what is set.`,name:"hideWeekNumbers",required:!1,type:{name:"boolean"}},maxDate:{defaultValue:null,description:`Determines the maximum date available for selection.

**Note:** If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (yyyy-MM-dd).`,name:"maxDate",required:!1,type:{name:"string"}},minDate:{defaultValue:null,description:`Determines the minimum date available for selection.

**Note:** If the formatPattern property is not set, the minDate value must be provided in the ISO date format (yyyy-MM-dd).`,name:"minDate",required:!1,type:{name:"string"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:"name",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:`Defines the open or closed state of the popover.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"undefined"},description:`Defines a short hint, intended to aid the user with data entry when the
component has no value.

**Note:** When no placeholder is set, the format pattern is displayed as a placeholder.
Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.`,name:"placeholder",required:!1,type:{name:"string"}},primaryCalendarType:{defaultValue:{value:"undefined"},description:`Sets a calendar type used for display.
If not set, the calendar type of the global configuration is used.`,name:"primaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},readonly:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as read-only.",name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},secondaryCalendarType:{defaultValue:{value:"undefined"},description:`Defines the secondary calendar type.
If not set, the calendar will only show the primary calendar type.`,name:"secondaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},value:{defaultValue:null,description:"Defines a formatted date value.",name:"value",required:!1,type:{name:"string"}},valueFormat:{defaultValue:{value:"undefined"},description:`Determines the format, used for the value attribute.

**Note:** Available since [v2.14.0](https://github.com/UI5/webcomponents/releases/tag/v2.14.0) of **@ui5/webcomponents**.`,name:"valueFormat",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Information"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const be={title:"Inputs / DateTimePicker",component:c,argTypes:{valueStateMessage:{control:{disable:!0}}},args:{primaryCalendarType:C.Gregorian,valueState:z.None},tags:["package:@ui5/webcomponents"]},p={};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"{}",...p.parameters?.docs?.source}}};const ge=["Default"],Ne=Object.freeze(Object.defineProperty({__proto__:null,Default:p,__namedExportsOrder:ge,default:be},Symbol.toStringTag,{value:"Module"}));export{Ne as C,p as D};
