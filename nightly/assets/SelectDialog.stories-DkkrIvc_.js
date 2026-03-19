import{q as o,O as he,M as _,aJ as fe,aI as ge,b2 as be,j as t,$ as ve,Y as w,V as q,eI as Y,Q as Ce,t as Z,I as Se,aS as ye,eJ as M,T as Q,eK as _e,eL as we,eM as xe,aa as b,eN as Ie,_ as De}from"./iframe-CyQHbHxC.js";import{L as Te}from"./index-hCRaM0Y7.js";import{L as X}from"./index-B1gaarcs.js";import{F as ee,c as Be}from"./index-DMBzjcEO.js";import{a as Le}from"./Input-8PEEDwad.js";import{p as Oe,e as Ne}from"./InvisibleMessage-e12K6vz3.js";import{s as ke}from"./search-QlHCkj8q.js";import{I as Ve}from"./index-DCN3pIQM.js";import{L as Re}from"./index-1FZuTEGH.js";const Ee='@layer ui5-webcomponents-react{._dialog_3uhsn_1{&::part(header){flex-direction:column;margin-block-end:0;padding-block-end:.25rem}&::part(content){padding:0}}._headerContent_3uhsn_13{align-items:center;display:grid;grid-template-areas:"titleStart titleCenter cancel" "input input input";grid-template-columns:fit-content(100px) minmax(0,1fr) fit-content(100px);grid-template-rows:var(--_ui5wcr-DialogHeaderHeight) var(--_ui5wcr-DialogSubHeaderHeight);width:100%}._title_3uhsn_24{font-family:var(--sapFontHeaderFamily);font-size:var(--sapFontLargeSize);grid-column-end:titleCenter;grid-column-start:titleStart;max-width:100%;overflow:hidden;text-overflow:ellipsis}._titleCenterAlign_3uhsn_34{grid-area:titleCenter;justify-self:center}._hiddenClearBtn_3uhsn_39{grid-area:titleStart;visibility:hidden}._clearBtn_3uhsn_44{grid-area:cancel;justify-self:end}._input_3uhsn_49{grid-area:input;width:100%}._footer_3uhsn_54{align-items:center;box-sizing:border-box;display:flex;justify-content:flex-end;width:100%;>*{margin-inline-start:.5rem}}._inputIcon_3uhsn_66{color:var(--sapField_TextColor);cursor:pointer;&:hover{background-color:var(--_ui5_input_icon_hover_bg);box-shadow:var(--sapField_Hover_Shadow)}&:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--sapField_Hover_Shadow);color:var(--sapButton_Active_TextColor)}}._infoBar_3uhsn_82{background-color:var(--sapInfobar_NonInteractive_Background);border-block-end:.0625rem solid var(--sapGroup_TitleBorderColor);color:var(--sapList_TextColor);height:2rem;overflow:hidden;padding-inline-start:var(--_ui5wcr-CheckBoxPaddingInline);position:sticky;top:0;z-index:1}}',r={dialog:"_dialog_3uhsn_1",headerContent:"_headerContent_3uhsn_13",title:"_title_3uhsn_24",titleCenterAlign:"_titleCenterAlign_3uhsn_34",hiddenClearBtn:"_hiddenClearBtn_3uhsn_39",clearBtn:"_clearBtn_3uhsn_44",input:"_input_3uhsn_49",footer:"_footer_3uhsn_54",inputIcon:"_inputIcon_3uhsn_66",infoBar:"_infoBar_3uhsn_82"},v=o.forwardRef((i,C)=>{const{accessibleName:m,open:s,children:f,className:g,confirmButtonText:c,confirmButtonProps:d,growing:A,headerText:L,headerTextAlignCenter:O,headerTextLevel:H=he.H1,listProps:S={},selectionMode:h=_.Single,numberOfSelectedItems:N,rememberSelections:F,showClearButton:k,onClose:V,onClear:R,onConfirm:u,onLoadMore:a,onSearch:n,onSearchInput:y,onSearchReset:p,onBeforeOpen:z,onBeforeClose:G,onOpen:W,onCancel:E,...ne}=i;fe(Ee,v.displayName);const l=ge("@ui5/webcomponents-react"),[P,U]=o.useState(""),[j,$]=o.useState([]),[oe,x]=be(S.ref),[se,I]=o.useState(s);o.useEffect(()=>{I(s)},[s]);const ae=e=>{const D=x.current?.getSelectedItems()??[];typeof z=="function"&&z(e),h===_.Multiple&&x.current?.hasData&&$(D)},ie=e=>{typeof W=="function"&&W(e),x.current?.focusFirstItem()},le=e=>{!e.target.value&&e.detail.inputType===""&&re(e),typeof y=="function"&&y(b(e,{value:e.target.value})),U(e.target.value)},J=e=>{typeof n=="function"&&(e.type==="keyup"&&e.code==="Enter"&&n(b(e,{value:e.target.value})),e.type==="click"&&n(b(e,{value:P})))},re=e=>{typeof p=="function"&&p(b(e,{prevValue:P})),U("")},ce=e=>{const{selectedItems:D}=e.detail;typeof S?.onSelectionChange=="function"&&S.onSelectionChange(e),h===_.Multiple?($(D),D.length&&Oe(l.getText(Ie,D.length),Ne.Polite)):(typeof u=="function"&&u(e),I(!1))},de=e=>{I(!1),typeof E=="function"&&E(e)},K=e=>{typeof R=="function"&&R(b(e,{prevSelectedItems:j})),$([]),x.current?.deselectSelectedItems()},ue=e=>{typeof u=="function"&&u(b(e,{selectedItems:j})),I(!1)},pe=e=>{I(!1),typeof V=="function"&&V(e),typeof p=="function"&&p(b(e,{prevValue:P})),U(""),F||x.current?.deselectSelectedItems()},me=e=>{typeof G=="function"&&G(e),typeof E=="function"&&e.detail.escPressed&&E(e)};return t.jsxs(ve,{...ne,open:se,"data-component-name":"SelectDialog",ref:C,className:Z(r.dialog,g),onClose:pe,onBeforeOpen:ae,onOpen:ie,onBeforeClose:me,accessibleName:m??L,children:[t.jsxs("div",{className:r.headerContent,slot:"header","data-sap-ui-fastnavgroup":"true",children:[k&&O&&t.jsx(w,{onClick:K,design:q.Transparent,className:r.hiddenClearBtn,tabIndex:-1,"aria-hidden":"true",children:l.getText(Y)}),t.jsx(Ce,{className:Z(r.title,O&&r.titleCenterAlign),level:H,children:L}),k&&t.jsx(w,{onClick:K,design:q.Transparent,className:r.clearBtn,children:l.getText(Y)}),t.jsx(Ve,{className:r.input,accessibleName:l.getText(M),value:P,placeholder:l.getText(M),onInput:le,onKeyUp:J,type:Le.Search,showClearIcon:!0,icon:t.jsx(t.Fragment,{children:t.jsx(Se,{mode:ye.Decorative,name:ke,className:r.inputIcon,onClick:J,accessibleName:l.getText(M),title:l.getText(M)})})})]}),h===_.Multiple&&(!!j.length||N>0)&&t.jsx(ee,{alignItems:Be.Center,className:r.infoBar,children:t.jsx(Q,{children:`${l.getText(_e)}: ${N??j.length}`})}),t.jsx(Re,{...S,ref:oe,growing:A,onLoadMore:a,selectionMode:h,onSelectionChange:ce,"data-sap-ui-fastnavgroup":"true",children:f}),t.jsxs("div",{slot:"footer",className:r.footer,"data-sap-ui-fastnavgroup":"true",children:[h===_.Multiple&&t.jsx(w,{...d,onClick:ue,design:q.Emphasized,children:c??l.getText(we)}),t.jsx(w,{onClick:de,design:q.Transparent,children:l.getText(xe)})]})]})});v.displayName="SelectDialog";try{v.displayName="SelectDialog",v.__docgenInfo={description:"The SelectDialog enables users to filter a comprehensive list via a search field and to select one or more items.",displayName:"SelectDialog",props:{accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the component.\n\n__Note:__ If not set, the dialog uses the `headerText` for its accessible name.",name:"accessibleName",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Defines the list items of the component.\n\n__Note:__ Although this prop accepts all HTML Elements and therefore also all list items, it is strongly recommended that you only use `ListItemStandard` in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},showClearButton:{defaultValue:null,description:"This flag controls whether the Clear button is shown. When set to `true`, it provides a way to clear selections. We recommend enabling the Clear button in cases where a mechanism to delete the selection is required: In single selection mode (default mode) or when `rememberSelections` is set to `true`.",name:"showClearButton",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the header text.",name:"headerText",required:!1,type:{name:"string"}},headerTextAlignCenter:{defaultValue:null,description:"Specifies the `headerText` alignment.",name:"headerTextAlignCenter",required:!1,type:{name:"boolean"}},headerTextLevel:{defaultValue:{value:'"H1"'},description:'Defines the aria-level of the `headerText`.\nAvailable options are: `"H1"` to `"H6"`.\nThis property does not influence the style of the `headerText`.',name:"headerTextLevel",required:!1,type:{name:'TitleLevel | "H1" | "H2" | "H3" | "H4" | "H5" | "H6"'}},confirmButtonText:{defaultValue:null,description:"Overwrites the default text for the confirmation button.",name:"confirmButtonText",required:!1,type:{name:"string"}},rememberSelections:{defaultValue:null,description:"This flag controls whether the dialog clears the selection after the confirm event has been fired. If the dialog needs to be opened multiple times in the same context to allow for corrections of previous user inputs, set this flag to `true`.\n\n__Note:__ This won't work if the dialog is unmounted, if you want to unmount the dialog when closed, you need to persist the selection yourself.",name:"rememberSelections",required:!1,type:{name:"boolean"}},numberOfSelectedItems:{defaultValue:null,description:"Defines the number of selected list items displayed above the list in `MultiSelect` mode. Programmatically setting the counter is necessary if all previously selected elements are to remain selected during search.",name:"numberOfSelectedItems",required:!1,type:{name:"number"}},selectionMode:{defaultValue:{value:"ListSelectionMode.Single"},description:"Defines the mode of the SelectDialog list.\n\n__Note:__ Although this prop accepts all `ListSelectionMode`s, it is strongly recommended that you only use `Single` or `Multiple` in order to preserve the intended design.",name:"selectionMode",required:!1,type:{name:'"None" | "Delete" | "Single" | "Multiple" | ListSelectionMode | "SingleStart" | "SingleEnd" | "SingleAuto"'}},listProps:{defaultValue:{value:"{}"},description:"Defines props you can pass to the internal `List` component.\n\n__Note:__ `selectionMode`, `children`, `growing`, `onLoadMore` and `footerText` are not supported.",name:"listProps",required:!1,type:{name:'Omit<ListPropTypes, "children" | "footerText" | "growing" | "selectionMode" | "onLoadMore">'}},confirmButtonProps:{defaultValue:null,description:"Defines the props of the confirm button.\n\n__Note:__`onClick` and `design` are not supported.\n@since 1.25.0",name:"confirmButtonProps",required:!1,type:{name:'Omit<ButtonPropTypes, "onClick" | "design">'}},onSearchInput:{defaultValue:null,description:"This event will be fired when the value of the search field is changed by a user - e.g. at each key press",name:"onSearchInput",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void"}},onSearch:{defaultValue:null,description:"This event will be fired when the search button has been clicked or the ENTER key has been pressed in the search field.",name:"onSearch",required:!1,type:{name:"((event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void) | ((event: Ui5CustomEvent<IconDomRef, { value: string; }>) => void)"}},onSearchReset:{defaultValue:null,description:"This event will be fired when the reset button has been clicked in the search field or when the dialog is closed.",name:"onSearchReset",required:!1,type:{name:"(event: Ui5CustomEvent<{ prevValue: string; nativeDetail?: number; }, never>) => void"}},onClear:{defaultValue:null,description:"This event will be fired when the clear button has been clicked.",name:"onClear",required:!1,type:{name:"(event: Ui5CustomEvent<ButtonDomRef, { prevSelectedItems: ListItemStandardDomRef[]; nativeDetail: number; }>) => void"}},onConfirm:{defaultValue:null,description:"This event will be fired when the dialog is confirmed by selecting an item in single selection mode or by pressing the confirmation button in multi selection mode.",name:"onConfirm",required:!1,type:{name:"(event: Ui5CustomEvent<ButtonDomRef | ListDomRef, { selectedItems: ListItemBase[]; }>) => void"}},onCancel:{defaultValue:null,description:"This event will be fired when the cancel button is clicked or ESC key is pressed.",name:"onCancel",required:!1,type:{name:"((event: Ui5CustomEvent<ButtonDomRef, ButtonClickEventDetail>) => void) | ((event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void)"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},draggable:{defaultValue:{value:"false"},description:`Determines whether the component is draggable.
If this property is set to true, the Dialog will be draggable by its header.

**Note:** The component can be draggable only in desktop mode.

**Note:** This property overrides the default HTML "draggable" attribute native behavior.
When "draggable" is set to true, the native browser "draggable"
behavior is prevented and only the Dialog custom logic ("draggable by its header") works.`,name:"draggable",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},resizable:{defaultValue:{value:"false"},description:`Configures the component to be resizable.
If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages.
In RTL languages, the resize handle will be placed in the bottom left corner.

**Note:** The component can be resizable only in desktop mode.

**Note:** Upon resizing, externally defined height and width styling will be ignored.`,name:"resizable",required:!1,type:{name:"boolean"}},accessibleDescription:{defaultValue:{value:"undefined"},description:`Defines the accessible description of the component.

**Note:** Available since [v2.11.0](https://github.com/UI5/webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents**.`,name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleDescriptionRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that describe the component.

**Note:** Available since [v2.11.0](https://github.com/UI5/webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents**.`,name:"accessibleDescriptionRef",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Defines the IDs of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/UI5/webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Dialog"'},description:`Allows setting a custom role.

**Note:** Available since [v1.10.0](https://github.com/UI5/webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:'"None" | PopupAccessibleRole | "Dialog" | "AlertDialog"'}},initialFocus:{defaultValue:{value:"undefined"},description:"Defines the ID of the HTML Element, which will get the initial focus.\n\n**Note:** If an element with `autofocus` attribute is added inside the component,\n`initialFocus` won't take effect.",name:"initialFocus",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:`Indicates if the element is open

**Note:** Available since [v1.2.0](https://github.com/UI5/webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},preventFocusRestore:{defaultValue:{value:"false"},description:`Defines if the focus should be returned to the previously focused element,
when the popup closes.`,name:"preventFocusRestore",required:!1,type:{name:"boolean"}},preventInitialFocus:{defaultValue:{value:"false"},description:`Indicates whether initial focus should be prevented.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"preventInitialFocus",required:!1,type:{name:"boolean"}},onBeforeClose:{defaultValue:null,description:`Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void"}},onBeforeOpen:{defaultValue:null,description:`Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onClose:{defaultValue:null,description:`Fired after the component is closed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onOpen:{defaultValue:null,description:`Fired after the component is opened.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},stretch:{defaultValue:{value:"false"},description:`Determines if the dialog will be stretched to full screen on mobile. On desktop,
the dialog will be stretched to approximately 90% of the viewport.

**Note:** For better usability of the component it is recommended to set this property to "true" when the dialog is opened on phone.`,name:"stretch",required:!1,type:{name:"boolean"}},growing:{defaultValue:{value:'"None"'},description:'Defines whether the component will have growing capability either by pressing a `More` button,\nor via user scroll. In both cases `load-more` event is fired.\n\n**Restrictions:** `growing="Scroll"` is not supported for Internet Explorer,\non IE the component will fallback to `growing="Button"`.',name:"growing",required:!1,type:{name:'"None" | "Button" | ListGrowingMode | "Scroll"'}},onLoadMore:{defaultValue:null,description:`Fired when the user scrolls to the bottom of the list.

**Note:** The event is fired when the \`growing='Scroll'\` property is enabled.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, never>) => void"}}}}}catch{}const Pe=""+new URL("Laptop1-BiqZozDV.jpg",import.meta.url).href,je=""+new URL("Laptop2-CLTht4yo.jpg",import.meta.url).href,qe=""+new URL("PC1-BekXrNHY.jpg",import.meta.url).href,Me=""+new URL("PC2-DZLCUDFz.jpg",import.meta.url).href,Ae={title:"Modals & Popovers / SelectDialog",component:v,argTypes:{children:{control:{disable:!0}}},args:{headerText:"Select Product",open:De},parameters:{chromatic:{delay:1e3}},tags:["extends:@ui5/webcomponents","cem-module:Dialog","package:@ui5/webcomponents-react"]},te=[{img:Pe,description:"LT-10",text:"Gaming Laptop"},{img:je,description:"LT-20",text:"Business Laptop"},{img:Me,description:"HT-10",text:"Gaming PC"},{img:qe,description:"HT-20",text:"Business PC"}],T={render:i=>{const[C,m]=o.useState(i.open),s=()=>{m(!0)},f=g=>{m(!1),i.onClose(g)};return o.useEffect(()=>{m(i.open)},[i.open]),t.jsxs(t.Fragment,{children:[t.jsx(w,{onClick:s,children:"Open SelectDialog"}),t.jsx(v,{...i,open:C,onClose:f,children:new Array(40).fill("").map((g,c)=>{const d=te[c%4];return t.jsx(X,{selected:c===1,image:t.jsx("img",{src:d.img,alt:"Example Image"}),description:`${d.description}${c}`,text:d.text},`${d.text}${c}`)})})]})}},B={render:()=>{const[i,C]=o.useState(!1),m={"HT-102":!0,"HT-203":!0,"HT-1038":!0},[s,f]=o.useState(m),g=o.useRef(s),[c,d]=o.useState(),[A,L]=o.useState(Object.keys(m)),O=()=>{g.current=s},H=()=>{C(!0)},S=()=>{C(!1)},h=u=>{d(u.detail.value)},N=()=>{d(void 0)},F=u=>{const a=u.detail.targetItem.dataset.description;f(n=>{if(n[a]){const{[a]:y,...p}=n;return p}else return{...n,[a]:!0}})},k=()=>{f({})},V=()=>{L(Object.keys(s))},R=()=>{f(g.current)};return t.jsxs(t.Fragment,{children:[t.jsx(w,{onClick:H,children:"Open Dialog"}),t.jsx(v,{open:i,selectionMode:_.Multiple,numberOfSelectedItems:Object.keys(s).length,listProps:{onSelectionChange:F},showClearButton:!0,rememberSelections:!0,onClear:k,onConfirm:V,onClose:S,onSearchInput:h,onSearch:h,onSearchReset:N,onBeforeOpen:O,onCancel:R,children:new Array(40).fill("").map((u,a)=>{const n=te[a%4],y=`${n.description}${a}`,p=c?.toLowerCase();return c&&!y.toLowerCase().includes(p)&&!n.text.toLowerCase().includes(p)?null:t.jsx(X,{image:t.jsx("img",{src:n.img,alt:"Example Image"}),description:`${n.description}${a}`,"data-description":`${n.description}${a}`,selected:s[y],text:n.text},`${n.text}${a}`)}).filter(Boolean)}),t.jsxs(ee,{children:[t.jsx(Te,{children:"Selected: "}),t.jsx(Q,{children:A.join(", ")})]})]})}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState<boolean | undefined>(args.open);
    const onButtonClick = () => {
      setOpen(true);
    };
    const handleClose = e => {
      setOpen(false);
      args.onClose(e);
    };
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button onClick={onButtonClick}>Open SelectDialog</Button>
        <SelectDialog {...args} open={open} onClose={handleClose}>
          {new Array(40).fill('').map((_, index) => {
          const currentProduct = listItems[index % 4];
          return <ListItemStandard selected={index === 1} image={<img src={currentProduct.img} alt="Example Image" />} description={\`\${currentProduct.description}\${index}\`} key={\`\${currentProduct.text}\${index}\`} text={currentProduct.text} />;
        })}
        </SelectDialog>
      </>;
  }
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    // predefined selection
    const selectedProducts = {
      'HT-102': true,
      'HT-203': true,
      'HT-1038': true
    };
    // number of selected items
    const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(selectedProducts);
    const selectedItemsBeforeOpen = useRef(selectedItems);
    const [searchVal, setSearchVal] = useState<string | undefined>();
    const [products, setProducts] = useState(Object.keys(selectedProducts));
    const handleBeforeOpen = () => {
      selectedItemsBeforeOpen.current = selectedItems;
    };
    const handleOpen = () => {
      setDialogOpen(true);
    };
    const handleClose = () => {
      setDialogOpen(false);
    };
    // search
    const handleSearch = e => {
      setSearchVal(e.detail.value);
    };
    // reset input value of search field
    const handleSearchReset = () => {
      setSearchVal(undefined);
    };
    // select/unselect
    const handleItemClick = e => {
      const itemDescription = e.detail.targetItem.dataset.description;
      setSelectedItems(prev => {
        if (prev[itemDescription]) {
          const {
            [itemDescription]: _omit,
            ...rest
          } = prev;
          return rest;
        } else {
          return {
            ...prev,
            [itemDescription]: true
          };
        }
      });
    };
    // clear selection
    const handleClear = () => {
      setSelectedItems({});
    };
    // confirm selection
    const handleConfirm = () => {
      setProducts(Object.keys(selectedItems));
    };
    // cancel selection
    const handleCancel = () => {
      setSelectedItems(selectedItemsBeforeOpen.current);
    };
    return <>
        <Button onClick={handleOpen}>Open Dialog</Button>
        <SelectDialog open={dialogOpen} selectionMode={ListSelectionMode.Multiple} numberOfSelectedItems={Object.keys(selectedItems).length} listProps={{
        onSelectionChange: handleItemClick
      }} showClearButton rememberSelections onClear={handleClear} onConfirm={handleConfirm} onClose={handleClose} onSearchInput={handleSearch} onSearch={handleSearch} onSearchReset={handleSearchReset} onBeforeOpen={handleBeforeOpen} onCancel={handleCancel}>
          {new Array(40).fill('').map((_, index) => {
          const currentProduct = listItems[index % 4];
          const description = \`\${currentProduct.description}\${index}\`;
          const lowerCaseSearchVal = searchVal?.toLowerCase();
          if (searchVal && !description.toLowerCase().includes(lowerCaseSearchVal) && !currentProduct.text.toLowerCase().includes(lowerCaseSearchVal)) {
            return null;
          }
          return <ListItemStandard image={<img src={currentProduct.img} alt="Example Image" />} description={\`\${currentProduct.description}\${index}\`} data-description={\`\${currentProduct.description}\${index}\`} key={\`\${currentProduct.text}\${index}\`} selected={selectedItems[description]} text={currentProduct.text} />;
        }).filter(Boolean)}
        </SelectDialog>
        <FlexBox>
          <Label>Selected: </Label>
          <Text>{products.join(', ')}</Text>
        </FlexBox>
      </>;
  }
}`,...B.parameters?.docs?.source}}};const He=["Default","MultiSelect"],Ze=Object.freeze(Object.defineProperty({__proto__:null,Default:T,MultiSelect:B,__namedExportsOrder:He,default:Ae},Symbol.toStringTag,{value:"Module"}));export{Ze as C,T as D,B as M};
