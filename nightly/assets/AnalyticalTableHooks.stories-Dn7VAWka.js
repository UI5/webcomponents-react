import{r as p,aH as J,fZ as G,j as n,a9 as E,X as B,T as H}from"./iframe-BHRyWWCK.js";import{d as K}from"./Friends500-CRbR9XAn.js";import{m as X,d as V}from"./AnalyticalTable.stories-1M8nkNX0.js";import{a as q}from"./Input-BhCBHTib.js";import{p as $}from"./paper-plane-Dw8DE4LY.js";import{C as j}from"./index-CiAXoTzx.js";import{I as D}from"./index-BYPEZsB4.js";import{L as w}from"./index-DibDZuef.js";import{S as Y}from"./index-BrVWHGQ1.js";import{T as Z}from"./index-CBZ8EfYd.js";import{T as A}from"./index-DyS5aeY8.js";import{F as S,c as L,d as Q}from"./index-UnB73Rnf.js";import{N as ee,c as b,d as O,g as te,A as R}from"./index-CgNK1KA-.js";import{d as ne}from"./debounce-D7W5PopO.js";import"./preload-helper-PPVm8Dsz.js";import"./delete-CTFibazR.js";import"./settings-pDITWEjw.js";import"./NoData-JLZTrtOP.js";import"./IllustratedMessage-Cu6GWfHR.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DwQvGPpm.js";import"./index-DJiwBl3_.js";import"./index-DgAZ2xF_.js";import"./slim-arrow-down-CRkJhUFV.js";import"./ListBoxItemGroupTemplate-DjmSj5Ii.js";import"./ComboBoxItemGroup-BvHhbI-q.js";import"./ListItemBaseTemplate-CS4PXitH.js";import"./Token-BTLeMA0R.js";import"./ScrollEnablement-DFn_AcWU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-8svZRnYC.js";import"./ResponsivePopoverCommon.css-BUbUes1r.js";import"./Suggestions.css-C7i9nEw7.js";import"./ToggleButton-Dbbqw8NC.js";import"./SuggestionItem-Dl2JpPy1.js";import"./ValueStateMessage.css-BKyDhgmA.js";import"./index-DCuRMYTu.js";import"./Option-D23nggyx.js";import"./index-kofx5hev.js";import"./SegmentedButton-CgEID4bj.js";import"./index-BZ0xl2ay.js";import"./Select-BbotqLf_.js";import"./InvisibleMessage-Coe0Io3Y.js";import"./slim-arrow-down-4vXxtfSR.js";import"./index-8j0U0p6k.js";import"./alert-CaNIaeyx.js";import"./information-Nr6PmwbG.js";import"./sys-enter-2--GTeHKCC.js";import"./less-Cida6587.js";import"./Tag-R17NMrYt.js";import"./index-BDlnLxSo.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DDR77_RK.js";import"./group-2-X3Rnt8GU.js";import"./sort-descending-mIkhhQAV.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./utils-CkDRuQDp.js";import"./index-B2U7uG2L.js";import"./index-DD47so0i.js";import"./index-CAq1dCAC.js";import"./navigation-down-arrow-Ct6f73lC.js";import"./navigation-right-arrow-gjH-5iV-.js";import"./navigation-right-arrow-Da29Og35.js";import"./useCurrentTheme-B-94HWui.js";import"./useIsRTL-BTNxBqyX.js";const P=e=>{const t=p.useCallback((s,{cell:{value:a},instance:{webComponentsReactProperties:{a11yElementIds:{cellEmptyDescId:i}}}})=>typeof a!="number"&&!a?[s,{"aria-labelledby":`${s["aria-labelledby"]} ${i}`}]:s,[]);e.getCellProps.push(t)};P.pluginName="useAnnounceEmptyCells";const ae=["[ui5-checkbox]","[ui5-switch]","[ui5-radio-button]","[ui5-rating-indicator]","[ui5-segmented-button]","[ui5-select]","[ui5-slider]","[ui5-split-button]",'[ui5-icon][mode="Interactive"]'],y=e=>{const t=J("@ui5/webcomponents-react"),s=p.useCallback((a,{cell:i,instance:o})=>{const{dispatch:c,state:r}=o,{interactiveElementName:l}=i.column,d=typeof l=="function"?l(i):l,u=(l?t.getText(G,d):"")+" "+a["aria-label"];return[a,{onKeyDown:m=>{if(r.cellContentTabIndex===0&&ee.has(m.key)&&!m.key.includes("Arrow")&&m.preventDefault(),m.key==="F2"){if(m.currentTarget===m.target&&l){const f=oe(m.target);f&&(c({type:"CELL_CONTENT_TAB_INDEX",payload:0}),m.currentTarget.tabIndex=-1,requestAnimationFrame(()=>{f.focus()}))}m.currentTarget!==m.target&&(c({type:"CELL_CONTENT_TAB_INDEX",payload:-1}),m.currentTarget.tabIndex=0,m.currentTarget.focus())}},onFocus:m=>{typeof a.onFocus=="function"&&a.onFocus(m),m.currentTarget!==m.target?c({type:"CELL_CONTENT_TAB_INDEX",payload:0}):c({type:"CELL_CONTENT_TAB_INDEX",payload:-1})},"aria-label":u}]},[t]);e.getCellProps.push(s),e.stateReducers.push(se),e.useInstanceBeforeDimensions.push(re)};y.pluginName="useF2CellEdit";y.useCallbackRef=e=>{const t=e.state.cellContentTabIndex===-1?"-1":"0";return p.useCallback(s=>{if(s){const a=i=>{typeof i.getFocusDomRefAsync=="function"?i.getFocusDomRefAsync().then(o=>a(o)).catch(()=>{}):i.setAttribute("tabindex",t)};a(s)}},[t])};const se=(e,t,s)=>{const{payload:a,type:i}=t;return i==="CELL_CONTENT_TAB_INDEX"?{...e,cellContentTabIndex:a}:e};function oe(e){if(!e)return null;function t(s){for(const a of s.children){const i=getComputedStyle(a);if(a.disabled||i.display==="none"||i.visibility==="hidden")continue;const o=["a[href]","button","input","textarea","select",'[tabindex]:not([tabindex="-1"])',...ae];if(a.matches(o.join(",")))return a;if(a.shadowRoot){const r=t(a.shadowRoot);if(r)return r}const c=t(a);if(c)return c}return null}return t(e)}function re(e){const{dispatch:t}=e;p.useEffect(()=>{t({type:"CELL_CONTENT_TAB_INDEX",payload:-1})},[t])}const ie=(e,t)=>{let s=e.lastIndexOf(".");s===-1&&(s=1/0);const a=e.slice(0,s);return[t[a],s]},W=e=>{const t={},s=e.lastIndexOf(".");return t[e]=!0,s!==-1&&Object.assign(t,W(e.slice(0,s))),t},le=(e,t,s)=>{const a={};let i="";const o=(c,r=null)=>{for(const l of c)if(l.subRows.length>0)o(l.subRows,l.id);else if(r!==null&&i!==r){i=r;const d=u=>{const[g,h]=ie(u,t),m=g.subRows.filter(C=>s.selectedRowIds[C.id]),f=g.subRows.length===m.length;if(m.length>0&&!f){const C=g.id;Object.assign(a,W(C));return}h!==1/0&&d(g.id)};d(l.id)}};return o(e),a},F=e=>{const t=(o,{row:c,instance:r})=>{let l;return r.isAllRowsSelected?l=!1:l=r?.state?.indeterminateRows?.[c.id]??!1,o.checked&&!r.state.selectedRowIds[c.id]&&c.toggleRowSelected(!0),[o,{indeterminate:l,checked:l?!0:o.checked}]},s=(o,c,r,l)=>{const{rowsById:d,state:u,rows:g}=l;if(c.type==="INDETERMINATE_ROW_IDS"){if(c.payload==="reset")return{...o,indeterminateRows:{}};const h=le(g,d,u);return{...o,indeterminateRows:h}}},a=o=>{const{data:c,dispatch:r,rowsById:l,state:{selectedRowIds:d,indeterminateRows:u},webComponentsReactProperties:{selectionMode:g,selectionBehavior:h,isTreeTable:m}}=o;p.useEffect(()=>{m&&g===b.Multiple&&h!==O.RowOnly&&Object.keys(d).length&&Object.keys(l).length!==Object.keys(d).length?r({type:"INDETERMINATE_ROW_IDS"}):typeof u=="object"&&Object.keys(u).length&&r({type:"INDETERMINATE_ROW_IDS",payload:"reset"})},[c,d,m,g,h]),p.useEffect(()=>{typeof e=="function"&&u&&e({indeterminateRowsById:u,tableInstance:o})},[u])},i=o=>{o.getToggleRowSelectedProps.push(t),o.stateReducers.push(s),o.useInstanceAfterData.push(a)};return i.pluginName="useIndeterminate",i};try{F.displayName="useIndeterminateRowSelection",F.__docgenInfo={description:"A plugin hook that marks parent rows as indeterminate if a child row is selected in `Multiple` mode.\nWhen using this hook, it is recommended to also select all sub-rows when selecting a row. (`reactTableOptions={{ selectSubRows: true }}`)\n\n__Note:__\n- This functionality is not covered by SAP UXC design guidelines and should be avoided if UXC is required.\n- The `indeterminate` state has a higher priority than the `selected` state. Therefore, a row can be selected and indeterminate at the same time. This can for example happen, if `selectSubRows: true` is set and a row with sub-rows is selected and then a sub-row is unselected.\n- This hook has to traverse the whole data tree on each selection, which can lead to performance degradation with large datasets. Please use with caution!",displayName:"useIndeterminateRowSelection",props:{}}}catch{}const ce=(e="isSelected")=>{const t=({flatRows:a,toggleRowSelected:i})=>{p.useEffect(()=>{a.forEach(({id:o,original:c})=>{e in c&&i(o,c.isSelected)})},[a,i])},s=a=>{a.useInstanceAfterData.push(t)};return s.pluginName="useManualRowSelect",s},de=(e,t)=>{const s=ne(e,t?.wait??100),a=o=>{const{state:c,columns:r}=o,{columnResizing:l}=c,{isResizingColumn:d,columnWidths:u}=l,g=p.useRef(void 0);p.useEffect(()=>{if(d&&t?.liveUpdate){const h=r.find(m=>m.id===d);s({columnWidth:u[d],header:h})}},[l,t?.liveUpdate,r]),p.useEffect(()=>{if(t?.liveUpdate)return()=>s.cancel()},[]),p.useEffect(()=>{if(!t?.liveUpdate){const h=r.find(m=>m.id===g.current);d&&(g.current=d),!d&&g.current&&e({columnWidth:u[g.current],header:h})}},[l,t?.liveUpdate,r])},i=o=>{o.useFinalInstance.push(a)};return i.pluginName="useOnColumnResize",i},ue=e=>{const t=s=>{s.stateReducers.push((a,i)=>{if(i.type==="toggleSortBy"){if(a.sortBy.length<=1)return a;{const o=[...a.sortBy],c=e.flatMap(r=>{const l=o.findIndex(d=>d.id===r);if(l!==-1){const d=o[l];return o.splice(l,1),[d]}return[]});return{...a,sortBy:[...c,...o]}}}return a})};return t.pluginName="useOrderedMultiSort",t},me={verticalAlign:"middle"},ge=(e,{instance:{webComponentsReactProperties:{selectionMode:t,translatableTexts:s}}})=>{if(e.key==="header___ui5wcr__internal_selection_column"&&t===b.Multiple){const a={...e.style,cursor:"auto"},i=e["aria-label"]?.replace(s.selectAllA11yText,"");return[e,{onClick:void 0,onKeyDown:void 0,onKeyUp:void 0,title:void 0,"aria-label":i,style:a}]}return e},pe=e=>e.map(t=>t.id==="__ui5wcr__internal_selection_column"?{...t,Cell:s=>{const{webComponentsReactProperties:a,row:i}=s;return i.disableSelect===!0?i.isGrouped&&a.selectionMode===b.Single?null:a.selectionMode===b.Single?n.jsx("div",{onClick:void 0,"data-name":"internal_selection_column"}):n.jsx(j,{...i.getToggleRowSelectedProps(),disabled:!0,style:me,"data-name":"internal_selection_column",tabIndex:-1}):t.Cell(s)},Header:()=>null}:t),_=e=>{const t=typeof e=="function"?e:r=>te(r.original,e,void 0),s=(r,{row:l,instance:d})=>{const{webComponentsReactProperties:u}=d;return t(l)===!0?(l.disableSelect=!0,{...r,onClick:f=>{typeof u.onRowClick=="function"&&u.onRowClick(E(f,{row:l}))},onKeyDown:f=>{(f.code==="Enter"||f.code==="Space")&&(f.preventDefault(),f.code==="Enter"&&typeof u.onRowClick=="function"&&u.onRowClick(E(f,{row:l})))},onKeyUp:f=>{f.code==="Space"&&(f.preventDefault(),typeof u.onRowClick=="function"&&u.onRowClick(E(f,{row:l})))},className:u.classes.tr}):r},a=r=>[...r,e],i=(r,{cell:{row:l,column:d},instance:u})=>{const{selectionMode:g,selectionBehavior:h}=u.webComponentsReactProperties;if(t(l)===!0&&g!==b.None&&(h!==O.RowSelector||d.id==="__ui5wcr__internal_selection_column")){const{"aria-label":m,...f}=r;if(d.id==="__ui5wcr__internal_selection_column"){const U={...r.style,cursor:"auto"};return{...f,"aria-disabled":!0,style:U}}const{"aria-selected":z,...C}=f;return C}return r},o=(r,{row:l})=>{if(t(l)===!0){const{title:d,...u}=r;return u}return r},c=r=>{r.getHeaderProps.push(ge),r.getRowProps.push(s),r.columns.push(pe),r.columnsDeps.push(a),r.getCellProps.push(i),r.getToggleRowSelectedProps.push(o)};return c.pluginName="useRowDisableSelection",c};try{_.displayName="useRowDisableSelection",_.__docgenInfo={description:`A plugin hook for disabling row selection of specific rows.

__Note:__ The "Select All" checkbox is not available with this hook.`,displayName:"useRowDisableSelection",props:{}}}catch{}const fe=[{name:"Owens Glover",age:22,friend:{name:"Daisy Giles",age:33},status:"Negative"},{name:"Waller Nguyen",age:56,friend:{name:"Lola Banks",age:55},status:"None"},{name:"Bowen Mckay",age:32,friend:{name:"Graham Wells",age:51},status:"Information"},{name:"Freida Weeks",age:68,friend:{name:"Lee Johnson",age:61},status:"Negative"},{name:"England Whitehead",age:82,friend:{name:"Phillips Merritt",age:19},status:"Information"},{name:"Alissa Duke",age:43,friend:{name:"Rosella Slater",age:58},status:"None"},{name:"Randolph Grant",age:76,friend:{name:"Madge Mitchell",age:48},status:"Critical"},{name:"Malone Hampton",age:42,friend:{name:"Landry Hancock",age:33},status:"Negative"},{name:"Lorna Hinton",age:27,friend:{name:"Maddox House",age:67},status:"None"},{name:"Janis Wade",age:19,friend:{name:"Nell Hines",age:82},status:"Negative"},{name:"Rose Vance",age:47,friend:{name:"Jacobson Wilcox",age:69},status:"Information"},{name:"Rowe Hamilton",age:85,friend:{name:"Vasquez Craft",age:79},status:"Critical"},{name:"Trisha Ellis",age:42,friend:{name:"Jacobs Ramsey",age:41},status:"Positive"},{name:"Bowers Rowe",age:57,friend:{name:"Brigitte Buckner",age:19},status:"None"},{name:"Gamble Rice",age:85,friend:{name:"Manning Jenkins",age:57},status:"Negative"},{name:"Letitia Finch",age:54,friend:{name:"Silva Fulton",age:52},status:"Information"},{name:"Elinor Middleton",age:71,friend:{name:"Hines Mckenzie",age:33},status:"None"},{name:"Jeannine Lopez",age:38,friend:{name:"Benjamin Rodriguez",age:76},status:"Negative"},{name:"Natasha Simon",age:73,friend:{name:"Simon Morin",age:20},status:"Negative"},{name:"Marquita Morrison",age:61,friend:{name:"Mitzi Blake",age:80},status:"Negative"},{name:"Lula Mason",age:49,friend:{name:"Holmes York",age:31},status:"Information"},{name:"Ginger Strong",age:79,friend:{name:"Higgins Shannon",age:25},status:"None"},{name:"Reeves Finley",age:84,friend:{name:"Sheila Hickman",age:25},status:"None"},{name:"Reilly Mcpherson",age:34,friend:{name:"Horton Smith",age:37},status:"Critical"},{name:"Moreno Moore",age:39,friend:{name:"Lacey Fox",age:55},status:"None"},{name:"Santana Gilliam",age:20,friend:{name:"Baird Barton",age:68},status:"Critical"},{name:"Deidre Richmond",age:45,friend:{name:"Newman Adkins",age:81},status:"Positive"},{name:"Willis Wise",age:73,friend:{name:"Haynes Dominguez",age:47},status:"Negative"},{name:"Wilson Hunter",age:49,friend:{name:"Greene Wood",age:24},status:"None"},{name:"Nancy Klein",age:54,friend:{name:"Callie Foster",age:64},status:"Negative"},{name:"Woods Porter",age:74,friend:{name:"Mercer Perry",age:62},status:"None"},{name:"Hopkins Schmidt",age:34,friend:{name:"Mcfadden David",age:51},status:"Negative"},{name:"Yang Lloyd",age:16,friend:{name:"Bates Barker",age:84},status:"None"},{name:"Vinson Ferguson",age:50,friend:{name:"Dejesus Owens",age:47},status:"Negative"},{name:"Flores Jones",age:32,friend:{name:"Anita Stark",age:47},status:"Positive"},{name:"Jennings Pope",age:39,friend:{name:"Ellen Avila",age:50},status:"Information"},{name:"Bettie Fernandez",age:61,friend:{name:"Lilian Juarez",age:61},status:"Information"},{name:"Sherri Abbott",age:26,friend:{name:"Floyd Clarke",age:51},status:"Negative"},{name:"Barrett Cameron",age:47,friend:{name:"Barton Waller",age:45},status:"None"},{name:"Young Frazier",age:26,friend:{name:"Hardin Branch",age:47},status:"Negative"},{name:"Cheri Obrien",age:75,friend:{name:"Karyn Merrill",age:81},status:"Positive"},{name:"Anne Hayden",age:61,friend:{name:"Joanne Powell",age:79},status:"Negative"},{name:"Hart Cortez",age:16,friend:{name:"Gross Beard",age:82},status:"Information"},{name:"Mallory Caldwell",age:57,friend:{name:"Curry Leonard",age:68},status:"None"},{name:"Snider Eaton",age:52,friend:{name:"Lucia Santos",age:47},status:"Information"},{name:"Leticia Tillman",age:60,friend:{name:"Langley Nielsen",age:80},status:"Negative"},{name:"Kemp Workman",age:35,friend:{name:"Calderon Mcleod",age:30},status:"Information"},{name:"Campos Leach",age:75,friend:{name:"Savannah Hogan",age:36},status:"Negative"},{name:"Colon Dunn",age:33,friend:{name:"Lily Love",age:73},status:"Negative"},{name:"Koch Henson",age:60,friend:{name:"Ola Welch",age:24},status:"Positive"}],he=[{name:"Owens Glover",age:22,friend:{name:"Daisy Giles",age:33},status:"Negative",isSelected:!0},{name:"Waller Nguyen",age:56,friend:{name:"Lola Banks",age:55},status:"None",isSelected:!0},{name:"Bowen Mckay",age:32,friend:{name:"Graham Wells",age:51},status:"Information"},{name:"Freida Weeks",age:68,friend:{name:"Lee Johnson",age:61},status:"Negative"},{name:"England Whitehead",age:82,friend:{name:"Phillips Merritt",age:19},status:"Information",isSelected:!0},{name:"Alissa Duke",age:43,friend:{name:"Rosella Slater",age:58},status:"None"},{name:"Randolph Grant",age:76,friend:{name:"Madge Mitchell",age:48},status:"Critical"},{name:"Malone Hampton",age:42,friend:{name:"Landry Hancock",age:33},status:"Negative"},{name:"Lorna Hinton",age:27,friend:{name:"Maddox House",age:67},status:"None"},{name:"Janis Wade",age:19,friend:{name:"Nell Hines",age:82},status:"Negative",isSelected:!0},{name:"Rose Vance",age:47,friend:{name:"Jacobson Wilcox",age:69},status:"Information"},{name:"Rowe Hamilton",age:85,friend:{name:"Vasquez Craft",age:79},status:"Critical"},{name:"Trisha Ellis",age:42,friend:{name:"Jacobs Ramsey",age:41},status:"Positive"},{name:"Bowers Rowe",age:57,friend:{name:"Brigitte Buckner",age:19},status:"None"},{name:"Gamble Rice",age:85,friend:{name:"Manning Jenkins",age:57},status:"Negative",isSelected:!0},{name:"Letitia Finch",age:54,friend:{name:"Silva Fulton",age:52},status:"Information"},{name:"Elinor Middleton",age:71,friend:{name:"Hines Mckenzie",age:33},status:"None"},{name:"Jeannine Lopez",age:38,friend:{name:"Benjamin Rodriguez",age:76},status:"Negative",isSelected:!0},{name:"Natasha Simon",age:73,friend:{name:"Simon Morin",age:20},status:"Negative"},{name:"Marquita Morrison",age:61,friend:{name:"Mitzi Blake",age:80},status:"Negative"},{name:"Lula Mason",age:49,friend:{name:"Holmes York",age:31},status:"Information"},{name:"Ginger Strong",age:79,friend:{name:"Higgins Shannon",age:25},status:"None"},{name:"Reeves Finley",age:84,friend:{name:"Sheila Hickman",age:25},status:"None",isSelected:!0},{name:"Reilly Mcpherson",age:34,friend:{name:"Horton Smith",age:37},status:"Critical"},{name:"Moreno Moore",age:39,friend:{name:"Lacey Fox",age:55},status:"None"}],Pt={...X,title:"Data Display / AnalyticalTable / Plugin Hooks",tags:["excludeFromSidebar","package:@ui5/webcomponents-react"]},be=[P],x={args:{data:[{age:void 0,friend:{name:null,age:0},status:"Error"},...fe],visibleRows:5},render(e){return n.jsx(R,{columns:e.columns,data:e.data,visibleRows:e.visibleRows,tableHooks:be})}},Re=e=>e.original.age<40,ye=[_(Re)],Se=[_("disableSelection")],v={args:{data:K.map(e=>({...e,disableSelection:Math.random()<.5})),selectionMode:b.Multiple},render:e=>{const[t,s]=p.useState(!0);return n.jsxs(n.Fragment,{children:[n.jsx(A,{onClick:()=>{s(!0)},pressed:t,children:"with function parameter"}),n.jsx(A,{onClick:()=>{s(!1)},pressed:!t,children:"with string parameter"}),t?n.jsx(R,{data:e.data,columns:e.columns,selectionMode:e.selectionMode,tableHooks:ye,visibleRows:10,header:"All under 40 are not selectable"}):n.jsx(R,{data:e.data,columns:e.columns,selectionMode:e.selectionMode,selectionBehavior:e.selectionBehavior,tableHooks:Se,visibleRows:10,header:'All with "disableSelection: true" are not selectable'})]})}},Ce=[F()],N={render:e=>{const[t,s]=p.useReducer(a=>!a,!0);return n.jsxs(n.Fragment,{children:[n.jsx(A,{onClick:s,pressed:t,children:`${t?"Don't ":""}Select Sub-Rows`}),n.jsx(R,{selectionMode:b.Multiple,data:V,columns:e.columns,isTreeTable:!0,tableHooks:Ce,reactTableOptions:{selectSubRows:t}})]})}},we=[ce("isSelected")],k={args:{data:he},render:e=>{const[t,s]=p.useReducer(o=>!o,!0),[a,i]=p.useReducer(o=>{const[,...c]=o;return o[0].isSelected?[{...o[0],isSelected:!1},...c]:[{...o[0],isSelected:!0},...c]},e.data);return n.jsxs(n.Fragment,{children:[n.jsxs(B,{onClick:i,children:["Toggle ",n.jsx("code",{children:"isSelected"})," of 1st row"]}),n.jsx("br",{}),n.jsx(w,{children:"Clicking this button will refresh the data array passed to the `data` prop."}),n.jsx("br",{}),n.jsx("br",{}),n.jsx(R,{selectionMode:b.Multiple,data:a,columns:e.columns,tableHooks:we}),n.jsx(B,{onClick:s,children:"Show first entries in data array"}),!t&&n.jsxs(S,{direction:"Column",children:[n.jsx("span",{children:JSON.stringify(a[0],null,2)}),n.jsx("span",{children:JSON.stringify(a[1],null,2)}),n.jsx("span",{children:JSON.stringify(a[2],null,2)}),n.jsx("span",{children:JSON.stringify(a[3],null,2)}),n.jsx("span",{children:JSON.stringify(a[4],null,2)}),n.jsx("span",{children:"..."})]})]})}},I={render:e=>{const[t,s]=p.useState({}),[a,i]=p.useState(!1),[o,c]=p.useState(100),r=g=>{i(g.target.checked)},l=g=>{c(parseInt(g.target.value))},d=p.useCallback(g=>{s(g)},[s]),u=p.useMemo(()=>[de(d,{liveUpdate:a,wait:o})],[d,a,o]);return n.jsxs(n.Fragment,{children:[n.jsx(R,{extension:n.jsxs(n.Fragment,{children:[n.jsxs(S,{alignItems:L.Center,children:[n.jsx(w,{children:"liveUpdate: "}),n.jsx(j,{onChange:r,checked:a})]}),n.jsxs(S,{alignItems:L.Center,children:[n.jsx(w,{children:"wait: "}),n.jsx(D,{onInput:l,type:q.Number,value:`${o}`})]}),n.jsx("br",{})]}),data:e.data,columns:e.columns,tableHooks:u}),!!Object.keys(t).length&&n.jsxs(S,{direction:Q.Column,children:[n.jsx("br",{}),n.jsx(H,{children:"Last fired callback of changed column:"}),n.jsx("br",{}),n.jsxs(S,{children:[n.jsx(w,{children:"Column:"}),n.jsx(H,{children:t.header.id})]}),n.jsxs(S,{children:[n.jsx(w,{children:"Width:"}),n.jsx(H,{children:t.columnWidth})]})]})]})}},xe=[{Header:"Name",accessor:"name",enableMultiSort:!0},{Header:"Age",accessor:"age",enableMultiSort:!0},{Header:"Name 2",accessor:"name2",enableMultiSort:!0},{Header:"Age 2",accessor:"age2",enableMultiSort:!0}],ve=[{name:"Peter",age:40,name2:"Alissa",age2:18},{name:"Kristen",age:40,name2:"Randolph",age2:21},{name:"Peter",age:30,name2:"Rose",age2:90},{name:"Peter",age:70,name2:"Rose",age2:22},{name:"Kristen",age:60,name2:"Willis",age2:80},{name:"Kristen",age:20,name2:"Alissa",age2:80},{name:"Graham",age:40,name2:"Alissa",age2:80},{name:"Peter",age:65,name2:"Rose",age2:26},{name:"Graham",age:65,name2:"Rose",age2:26},{name:"Graham",age:65,name2:"Willis",age2:26},{name:"Graham",age:62,name2:"Willis",age2:26}],M={args:{orderedIds:["name","name2","age","age2"]},argTypes:{orderedIds:{control:"array",description:`Defines the sort priority when sorting by multiple columns, starting with the first column ID.

**Note:** Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column.`}},render(e){const t=p.useMemo(()=>[ue(e.orderedIds)],[e.orderedIds]);return n.jsx(R,{columns:xe,data:ve,sortable:!0,tableHooks:t})}},Ne=[{Header:"Input",id:"input",Cell:e=>{const t=y.useCallbackRef(e);return n.jsx(D,{ref:t})},interactiveElementName:"Input"},{Header:"Input & Button",id:"input_btn",Cell:e=>{const t=y.useCallbackRef(e);return n.jsxs(n.Fragment,{children:[n.jsx(D,{ref:t}),n.jsx(B,{ref:t,icon:$,tooltip:"Submit",accessibleName:"Submit"})]})},interactiveElementName:"Input and Button"},{Header:"Text",accessor:"name"},{Header:"Button",id:"btn",Cell:e=>{const t=y.useCallbackRef(e);return n.jsx(B,{ref:t,children:"Button"})},interactiveElementName:()=>"Button"},{Header:"Non-interactive custom content",accessor:"friend.name",Cell:e=>n.jsx(Z,{children:e.value})},{Header:"Switch or CheckBox",id:"switch_checkbox",Cell:e=>{const t=y.useCallbackRef(e);return e.row.index%2?n.jsx(j,{ref:t,accessibleName:"Dummy CheckBox"}):n.jsx(Y,{ref:t,accessibleName:"Dummy Switch"})},interactiveElementName:e=>e.row.index%2?"CheckBox":"Switch"}],ke=[y],T={render(e){return n.jsx(R,{data:e.data.slice(0,10),columns:Ne,tableHooks:ke,visibleRows:5})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      age: undefined,
      friend: {
        name: null,
        age: 0
      },
      status: 'Error'
    }, ...dataSmall],
    visibleRows: 5
  },
  render(args) {
    return <AnalyticalTable columns={args.columns} data={args.data} visibleRows={args.visibleRows} tableHooks={tableHooksEmptyCells} />;
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataLarge.map(item => ({
      ...item,
      disableSelection: Math.random() < 0.5
    })),
    selectionMode: AnalyticalTableSelectionMode.Multiple
  },
  render: args => {
    const [isFunc, setIsFunc] = useState(true);
    return <>
        <ToggleButton onClick={() => {
        setIsFunc(true);
      }} pressed={isFunc}>
          with function parameter
        </ToggleButton>
        <ToggleButton onClick={() => {
        setIsFunc(false);
      }} pressed={!isFunc}>
          with string parameter
        </ToggleButton>
        {isFunc ? <AnalyticalTable data={args.data} columns={args.columns} selectionMode={args.selectionMode} tableHooks={tableHooksDisableRowSel} visibleRows={10} header="All under 40 are not selectable" /> : <AnalyticalTable data={args.data} columns={args.columns} selectionMode={args.selectionMode} selectionBehavior={args.selectionBehavior} tableHooks={tableHooksDisableRowSel1} visibleRows={10} header={\`All with "disableSelection: true" are not selectable\`} />}
      </>;
  }
}`,...v.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectSubRows, setSelectSubRows] = useReducer(prev => !prev, true);
    return <>
        <ToggleButton onClick={setSelectSubRows} pressed={selectSubRows}>{\`\${selectSubRows ? "Don't " : ''}Select Sub-Rows\`}</ToggleButton>
        <AnalyticalTable selectionMode={AnalyticalTableSelectionMode.Multiple} data={dataTree} columns={args.columns} isTreeTable tableHooks={tableHooksIndeterminateRowSel} reactTableOptions={{
        selectSubRows: selectSubRows
      }} />
      </>;
  }
}`,...N.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataManualSelect
  },
  render: args => {
    const [collapsedCode, setCollapsedCode] = useReducer(coll => !coll, true);
    const [data, toggleFirstRowSelected] = useReducer(prev => {
      const [, ...updatedData] = prev;
      if (prev[0].isSelected) {
        return [{
          ...prev[0],
          isSelected: false
        }, ...updatedData];
      } else {
        return [{
          ...prev[0],
          isSelected: true
        }, ...updatedData];
      }
    }, args.data);
    return <>
        <Button onClick={toggleFirstRowSelected}>
          Toggle <code>isSelected</code> of 1st row
        </Button>
        <br />
        <Label>Clicking this button will refresh the data array passed to the \`data\` prop.</Label>
        <br />
        <br />
        <AnalyticalTable selectionMode={AnalyticalTableSelectionMode.Multiple} data={data} columns={args.columns} tableHooks={tableHooksManualRowSel} />
        <Button onClick={setCollapsedCode}>Show first entries in data array</Button>
        {!collapsedCode && <FlexBox direction="Column">
            <span>{JSON.stringify(data[0], null, 2)}</span>
            <span>{JSON.stringify(data[1], null, 2)}</span>
            <span>{JSON.stringify(data[2], null, 2)}</span>
            <span>{JSON.stringify(data[3], null, 2)}</span>
            <span>{JSON.stringify(data[4], null, 2)}</span>
            <span>...</span>
          </FlexBox>}
      </>;
  }
}`,...k.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [useColResizeEvent, setUseColResizeEvent] = useState({});
    const [liveUpdate, setLiveUpdate] = useState(false);
    const [wait, setWait] = useState(100);
    const handleLiveUpdateChange = e => {
      setLiveUpdate(e.target.checked);
    };
    const handleWaitChange = e => {
      setWait(parseInt(e.target.value));
    };
    const handleColWidthUpdate = useCallback(e => {
      setUseColResizeEvent(e);
    }, [setUseColResizeEvent]);
    const tableHooksColResize = useMemo(() => [AnalyticalTableHooks.useOnColumnResize(handleColWidthUpdate, {
      liveUpdate,
      wait
    })], [handleColWidthUpdate, liveUpdate, wait]);
    return <>
        <AnalyticalTable extension={<>
              <FlexBox alignItems={FlexBoxAlignItems.Center}>
                <Label>liveUpdate: </Label>
                <CheckBox onChange={handleLiveUpdateChange} checked={liveUpdate} />
              </FlexBox>
              <FlexBox alignItems={FlexBoxAlignItems.Center}>
                <Label>wait: </Label>
                <Input onInput={handleWaitChange} type={InputType.Number} value={\`\${wait}\`} />
              </FlexBox>
              <br />
            </>} data={args.data} columns={args.columns} tableHooks={tableHooksColResize} />
        {!!Object.keys(useColResizeEvent).length && <FlexBox direction={FlexBoxDirection.Column}>
            <br />
            <Text>Last fired callback of changed column:</Text>
            <br />
            <FlexBox>
              <Label>Column:</Label>
              <Text>{useColResizeEvent.header.id}</Text>
            </FlexBox>
            <FlexBox>
              <Label>Width:</Label>
              <Text>{useColResizeEvent.columnWidth}</Text>
            </FlexBox>
          </FlexBox>}
      </>;
  }
}`,...I.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    orderedIds: ['name', 'name2', 'age', 'age2']
  },
  argTypes: {
    orderedIds: {
      control: 'array',
      description: 'Defines the sort priority when sorting by multiple columns, starting with the first column ID.\\n' + '\\n' + '**Note:** Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column.'
    }
  },
  render(args) {
    const tableHooksOrderedMultiSort = useMemo(() => [AnalyticalTableHooks.useOrderedMultiSort(args.orderedIds)], [args.orderedIds]);
    return <AnalyticalTable columns={orderedMultiSortColumns} data={orderedMultiSortData} sortable tableHooks={tableHooksOrderedMultiSort} />;
  }
}`,...M.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <AnalyticalTable data={args.data.slice(0, 10)} columns={inputCols} tableHooks={tableHooks} visibleRows={5} />;
  }
}`,...T.parameters?.docs?.source}}};const Wt=["PluginAnnounceEmptyCells","PluginDisableRowSelection","PluginIndeterminateRowSelection","PluginManualRowSelect","PluginOnColumnResize","PluginOrderedMultiSort","F2CellEdit"];export{T as F2CellEdit,x as PluginAnnounceEmptyCells,v as PluginDisableRowSelection,N as PluginIndeterminateRowSelection,k as PluginManualRowSelect,I as PluginOnColumnResize,M as PluginOrderedMultiSort,Wt as __namedExportsOrder,Pt as default};
