import{r as p,aw as J,fX as G,j as n,q as H,R as E,K as D}from"./iframe-Dy0Vcyg3.js";import{d as K}from"./Friends500-CRbR9XAn.js";import{d as X,A as b,e as O,g as V,m as q,f as w,h as $}from"./AnalyticalTable.stories-dkAXnipr.js";import{a as Y}from"./Input-DUm1g3II.js";import{p as Q}from"./paper-plane-DxCnK-Wp.js";import{C as j}from"./index-DfUhPIiB.js";import{I as A}from"./index-UQjpo2rY.js";import{L as x}from"./index-BRFe_2UD.js";import{S as Z}from"./index-DyLYJM1Y.js";import{T as ee}from"./index-DLHjFZTm.js";import{T as F}from"./index-B6XxYOg-.js";import{F as y,c as L,a as te}from"./index-BMTL_1tu.js";import{d as ne}from"./debounce-D7W5PopO.js";import"./preload-helper-PPVm8Dsz.js";import"./delete-BYhpf2jF.js";import"./settings-BZhNQSdh.js";import"./NoData-BOK9z97z.js";import"./IllustratedMessage-BJD0KkWB.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-lmbuGEH-.js";import"./index-DzrRbZFE.js";import"./index-De6Jkvg9.js";import"./slim-arrow-down-KQetxSCA.js";import"./ListBoxItemGroupTemplate-Bao4syhQ.js";import"./ComboBoxItemGroup-sVlirqx1.js";import"./ListItemBaseTemplate-BQNNSgaC.js";import"./Token-DRKQmCcw.js";import"./ScrollEnablement-Ba4Wf0S8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-QXpolB0M.js";import"./ResponsivePopoverCommon.css-0gtwTwlc.js";import"./Suggestions.css-C-TebQWZ.js";import"./ToggleButton-wPcmOR8q.js";import"./SuggestionItem-u0isYGwD.js";import"./ValueStateMessage.css-CqzpiX8G.js";import"./index-BE5XNI17.js";import"./Option-DURHFvsu.js";import"./index-Dn60_PGH.js";import"./SegmentedButton--YNa3vua.js";import"./index-D3ZVC3jU.js";import"./Select-DjzM7l1z.js";import"./InvisibleMessage-DOS3eHIH.js";import"./slim-arrow-down-tdJshJ_8.js";import"./index-DihO4jCR.js";import"./alert-CoPtJvs8.js";import"./information-BWURtjFA.js";import"./sys-enter-2-D7LiZd3_.js";import"./index-zvcZ-4bx.js";import"./IconDesign-DXd8PPVF.js";import"./filter-6frFTFpf.js";import"./group-2-Yb8lcurx.js";import"./sort-descending-B0xSjoj0.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./utils-_2mEl_F_.js";import"./index-XYGDqR0-.js";import"./index-B8bpeD_U.js";import"./index-DA4_n7ku.js";import"./navigation-down-arrow-C202Rycb.js";import"./navigation-right-arrow-CK8BM-ml.js";import"./navigation-right-arrow-DGzC3PDm.js";import"./useCurrentTheme-ljABpVn3.js";import"./IndicationColor-DVw-fSM_.js";import"./useIsRTL-GvvBhc-H.js";import"./less-L4Koo52C.js";import"./Tag-DXMLJOuX.js";const P=e=>{const t=p.useCallback((s,{cell:{value:a},instance:{webComponentsReactProperties:{a11yElementIds:{cellEmptyDescId:l}}}})=>typeof a!="number"&&!a?[s,{"aria-labelledby":`${s["aria-labelledby"]} ${l}`}]:s,[]);e.getCellProps.push(t)};P.pluginName="useAnnounceEmptyCells";const ae=["[ui5-checkbox]","[ui5-switch]","[ui5-radio-button]","[ui5-rating-indicator]","[ui5-segmented-button]","[ui5-select]","[ui5-slider]","[ui5-split-button]",'[ui5-icon][mode="Interactive"]'],R=e=>{const t=J("@ui5/webcomponents-react"),s=p.useCallback((a,{cell:l,instance:o})=>{const{dispatch:c,state:r}=o,{interactiveElementName:i}=l.column,d=typeof i=="function"?i(l):i,u=(i?t.getText(G,d):"")+" "+a["aria-label"];return[a,{onKeyDown:m=>{if(r.cellContentTabIndex===0&&X.has(m.key)&&!m.key.includes("Arrow")&&m.preventDefault(),m.key==="F2"){if(m.currentTarget===m.target&&i){const f=oe(m.target);f&&(c({type:"CELL_CONTENT_TAB_INDEX",payload:0}),m.currentTarget.tabIndex=-1,requestAnimationFrame(()=>{f.focus()}))}m.currentTarget!==m.target&&(c({type:"CELL_CONTENT_TAB_INDEX",payload:-1}),m.currentTarget.tabIndex=0,m.currentTarget.focus())}},onFocus:m=>{typeof a.onFocus=="function"&&a.onFocus(m),m.currentTarget!==m.target?c({type:"CELL_CONTENT_TAB_INDEX",payload:0}):c({type:"CELL_CONTENT_TAB_INDEX",payload:-1})},"aria-label":u}]},[t]);e.getCellProps.push(s),e.stateReducers.push(se),e.useInstanceBeforeDimensions.push(re)};R.pluginName="useF2CellEdit";R.useCallbackRef=e=>{const t=e.state.cellContentTabIndex===-1?"-1":"0";return p.useCallback(s=>{if(s){const a=l=>{typeof l.getFocusDomRefAsync=="function"?l.getFocusDomRefAsync().then(o=>a(o)).catch(()=>{}):l.setAttribute("tabindex",t)};a(s)}},[t])};const se=(e,t,s)=>{const{payload:a,type:l}=t;return l==="CELL_CONTENT_TAB_INDEX"?{...e,cellContentTabIndex:a}:e};function oe(e){if(!e)return null;function t(s){for(const a of s.children){const l=getComputedStyle(a);if(a.disabled||l.display==="none"||l.visibility==="hidden")continue;const o=["a[href]","button","input","textarea","select",'[tabindex]:not([tabindex="-1"])',...ae];if(a.matches(o.join(",")))return a;if(a.shadowRoot){const r=t(a.shadowRoot);if(r)return r}const c=t(a);if(c)return c}return null}return t(e)}function re(e){p.useEffect(()=>{e.dispatch({type:"CELL_CONTENT_TAB_INDEX",payload:-1})},[e.dispatch])}const ie=(e,t)=>{let s=e.lastIndexOf(".");s===-1&&(s=1/0);const a=e.slice(0,s);return[t[a],s]},W=e=>{const t={},s=e.lastIndexOf(".");return t[e]=!0,s!==-1&&Object.assign(t,W(e.slice(0,s))),t},le=(e,t,s)=>{const a={};let l="";const o=(c,r=null)=>{for(const i of c)if(i.subRows.length>0)o(i.subRows,i.id);else if(r!==null&&l!==r){l=r;const d=u=>{const[g,h]=ie(u,t),m=g.subRows.filter(C=>s.selectedRowIds[C.id]),f=g.subRows.length===m.length;if(m.length>0&&!f){const C=g.id;Object.assign(a,W(C));return}h!==1/0&&d(g.id)};d(i.id)}};return o(e),a},N=e=>{const t=(o,{row:c,instance:r})=>{let i;return r.isAllRowsSelected?i=!1:i=r?.state?.indeterminateRows?.[c.id]??!1,o.checked&&!r.state.selectedRowIds[c.id]&&c.toggleRowSelected(!0),[o,{indeterminate:i,checked:i?!0:o.checked}]},s=(o,c,r,i)=>{const{rowsById:d,state:u,rows:g}=i;if(c.type==="INDETERMINATE_ROW_IDS"){if(c.payload==="reset")return{...o,indeterminateRows:{}};const h=le(g,d,u);return{...o,indeterminateRows:h}}},a=o=>{const{data:c,dispatch:r,rowsById:i,state:{selectedRowIds:d,indeterminateRows:u},webComponentsReactProperties:{selectionMode:g,selectionBehavior:h,isTreeTable:m}}=o;p.useEffect(()=>{m&&g===b.Multiple&&h!==O.RowOnly&&Object.keys(d).length&&Object.keys(i).length!==Object.keys(d).length?r({type:"INDETERMINATE_ROW_IDS"}):typeof u=="object"&&Object.keys(u).length&&r({type:"INDETERMINATE_ROW_IDS",payload:"reset"})},[c,d,m,g,h]),p.useEffect(()=>{typeof e=="function"&&u&&e({indeterminateRowsById:u,tableInstance:o})},[u])},l=o=>{o.getToggleRowSelectedProps.push(t),o.stateReducers.push(s),o.useInstanceAfterData.push(a)};return l.pluginName="useIndeterminate",l};try{N.displayName="useIndeterminateRowSelection",N.__docgenInfo={description:"A plugin hook that marks parent rows as indeterminate if a child row is selected in `Multiple` mode.\nWhen using this hook, it is recommended to also select all sub-rows when selecting a row. (`reactTableOptions={{ selectSubRows: true }}`)\n\n__Note:__ The `indeterminate` state has a higher priority than the `selected` state. Therefore, a row can be selected and indeterminate at the same time. This can for example happen, if `selectSubRows: true` is set and a row with sub-rows is selected and then a sub-row is unselected.\n\n__Note:__ This hook has to traverse the whole data tree on each selection, which can lead to performance degradation with large datasets. Please use with caution!",displayName:"useIndeterminateRowSelection",props:{}}}catch{}try{N.displayName="useIndeterminateRowSelection",N.__docgenInfo={description:"A plugin hook that marks parent rows as indeterminate if a child row is selected in `Multiple` mode.\nWhen using this hook, it is recommended to also select all sub-rows when selecting a row. (`reactTableOptions={{ selectSubRows: true }}`)\n\n__Note:__ The `indeterminate` state has a higher priority than the `selected` state. Therefore, a row can be selected and indeterminate at the same time. This can for example happen, if `selectSubRows: true` is set and a row with sub-rows is selected and then a sub-row is unselected.\n\n__Note:__ This hook has to traverse the whole data tree on each selection, which can lead to performance degradation with large datasets. Please use with caution!",displayName:"useIndeterminateRowSelection",props:{}}}catch{}const ce=(e="isSelected")=>{const t=({flatRows:a,toggleRowSelected:l})=>{p.useEffect(()=>{a.forEach(({id:o,original:c})=>{e in c&&l(o,c.isSelected)})},[a,e])},s=a=>{a.useInstanceAfterData.push(t)};return s.pluginName="useManualRowSelect",s},de=(e,t)=>{const s=ne(e,t?.wait??100),a=o=>{const{state:c,columns:r}=o,{columnResizing:i}=c,{isResizingColumn:d,columnWidths:u}=i,g=p.useRef(void 0);p.useEffect(()=>{if(d&&t?.liveUpdate){const h=r.find(m=>m.id===d);s({columnWidth:u[d],header:h})}},[i,t?.liveUpdate,r]),p.useEffect(()=>{if(t?.liveUpdate)return()=>s.cancel()},[t?.liveUpdate]),p.useEffect(()=>{if(!t?.liveUpdate){const h=r.find(m=>m.id===g.current);d&&(g.current=d),!d&&g.current&&e({columnWidth:u[g.current],header:h})}},[i,t?.liveUpdate,r])},l=o=>{o.useFinalInstance.push(a)};return l.pluginName="useOnColumnResize",l},ue=e=>{const t=s=>{s.stateReducers.push((a,l)=>{if(l.type==="toggleSortBy"){if(a.sortBy.length<=1)return a;{const o=[...a.sortBy],c=e.flatMap(r=>{const i=o.findIndex(d=>d.id===r);if(i!==-1){const d=o[i];return o.splice(i,1),[d]}return[]});return{...a,sortBy:[...c,...o]}}}return a})};return t.pluginName="useOrderedMultiSort",t},me={verticalAlign:"middle"},ge=(e,{instance:{webComponentsReactProperties:{selectionMode:t,translatableTexts:s}}})=>{if(e.key==="header___ui5wcr__internal_selection_column"&&t===b.Multiple){const a={...e.style,cursor:"auto"},l=e["aria-label"]?.replace(s.selectAllA11yText,"");return[e,{onClick:void 0,onKeyDown:void 0,onKeyUp:void 0,title:void 0,"aria-label":l,style:a}]}return e},pe=e=>e.map(t=>t.id==="__ui5wcr__internal_selection_column"?{...t,Cell:s=>{const{webComponentsReactProperties:a,row:l}=s;return l.disableSelect===!0?l.isGrouped&&a.selectionMode===b.Single?null:a.selectionMode===b.Single?n.jsx("div",{onClick:void 0,"data-name":"internal_selection_column"}):n.jsx(j,{...l.getToggleRowSelectedProps(),disabled:!0,style:me,"data-name":"internal_selection_column",tabIndex:-1}):t.Cell(s)},Header:()=>null}:t),S=e=>{const t=typeof e=="function"?e:r=>V(r.original,e,void 0),s=(r,{row:i,instance:d})=>{const{webComponentsReactProperties:u}=d;return t(i)===!0?(i.disableSelect=!0,{...r,onClick:f=>{typeof u.onRowClick=="function"&&u.onRowClick(H(f,{row:i}))},onKeyDown:f=>{(f.code==="Enter"||f.code==="Space")&&(f.preventDefault(),f.code==="Enter"&&typeof u.onRowClick=="function"&&u.onRowClick(H(f,{row:i})))},onKeyUp:f=>{f.code==="Space"&&(f.preventDefault(),typeof u.onRowClick=="function"&&u.onRowClick(H(f,{row:i})))},className:u.classes.tr}):r},a=r=>[...r,e],l=(r,{cell:{row:i,column:d},instance:u})=>{const{selectionMode:g,selectionBehavior:h}=u.webComponentsReactProperties;if(t(i)===!0&&g!==b.None&&(h!==O.RowSelector||d.id==="__ui5wcr__internal_selection_column")){const{"aria-label":m,...f}=r;if(d.id==="__ui5wcr__internal_selection_column"){const U={...r.style,cursor:"auto"};return{...f,"aria-disabled":!0,style:U}}const{"aria-selected":z,...C}=f;return C}return r},o=(r,{row:i})=>{if(t(i)===!0){const{title:d,...u}=r;return u}return r},c=r=>{r.getHeaderProps.push(ge),r.getRowProps.push(s),r.columns.push(pe),r.columnsDeps.push(a),r.getCellProps.push(l),r.getToggleRowSelectedProps.push(o)};return c.pluginName="useRowDisableSelection",c};try{S.displayName="useRowDisableSelection",S.__docgenInfo={description:`A plugin hook for disabling row selection of specific rows.

__Note:__ The "Select All" checkbox is not available with this hook.`,displayName:"useRowDisableSelection",props:{}}}catch{}try{S.displayName="useRowDisableSelection",S.__docgenInfo={description:`A plugin hook for disabling row selection of specific rows.

__Note:__ The "Select All" checkbox is not available with this hook.`,displayName:"useRowDisableSelection",props:{}}}catch{}const fe=[{name:"Owens Glover",age:22,friend:{name:"Daisy Giles",age:33},status:"Negative"},{name:"Waller Nguyen",age:56,friend:{name:"Lola Banks",age:55},status:"None"},{name:"Bowen Mckay",age:32,friend:{name:"Graham Wells",age:51},status:"Information"},{name:"Freida Weeks",age:68,friend:{name:"Lee Johnson",age:61},status:"Negative"},{name:"England Whitehead",age:82,friend:{name:"Phillips Merritt",age:19},status:"Information"},{name:"Alissa Duke",age:43,friend:{name:"Rosella Slater",age:58},status:"None"},{name:"Randolph Grant",age:76,friend:{name:"Madge Mitchell",age:48},status:"Critical"},{name:"Malone Hampton",age:42,friend:{name:"Landry Hancock",age:33},status:"Negative"},{name:"Lorna Hinton",age:27,friend:{name:"Maddox House",age:67},status:"None"},{name:"Janis Wade",age:19,friend:{name:"Nell Hines",age:82},status:"Negative"},{name:"Rose Vance",age:47,friend:{name:"Jacobson Wilcox",age:69},status:"Information"},{name:"Rowe Hamilton",age:85,friend:{name:"Vasquez Craft",age:79},status:"Critical"},{name:"Trisha Ellis",age:42,friend:{name:"Jacobs Ramsey",age:41},status:"Positive"},{name:"Bowers Rowe",age:57,friend:{name:"Brigitte Buckner",age:19},status:"None"},{name:"Gamble Rice",age:85,friend:{name:"Manning Jenkins",age:57},status:"Negative"},{name:"Letitia Finch",age:54,friend:{name:"Silva Fulton",age:52},status:"Information"},{name:"Elinor Middleton",age:71,friend:{name:"Hines Mckenzie",age:33},status:"None"},{name:"Jeannine Lopez",age:38,friend:{name:"Benjamin Rodriguez",age:76},status:"Negative"},{name:"Natasha Simon",age:73,friend:{name:"Simon Morin",age:20},status:"Negative"},{name:"Marquita Morrison",age:61,friend:{name:"Mitzi Blake",age:80},status:"Negative"},{name:"Lula Mason",age:49,friend:{name:"Holmes York",age:31},status:"Information"},{name:"Ginger Strong",age:79,friend:{name:"Higgins Shannon",age:25},status:"None"},{name:"Reeves Finley",age:84,friend:{name:"Sheila Hickman",age:25},status:"None"},{name:"Reilly Mcpherson",age:34,friend:{name:"Horton Smith",age:37},status:"Critical"},{name:"Moreno Moore",age:39,friend:{name:"Lacey Fox",age:55},status:"None"},{name:"Santana Gilliam",age:20,friend:{name:"Baird Barton",age:68},status:"Critical"},{name:"Deidre Richmond",age:45,friend:{name:"Newman Adkins",age:81},status:"Positive"},{name:"Willis Wise",age:73,friend:{name:"Haynes Dominguez",age:47},status:"Negative"},{name:"Wilson Hunter",age:49,friend:{name:"Greene Wood",age:24},status:"None"},{name:"Nancy Klein",age:54,friend:{name:"Callie Foster",age:64},status:"Negative"},{name:"Woods Porter",age:74,friend:{name:"Mercer Perry",age:62},status:"None"},{name:"Hopkins Schmidt",age:34,friend:{name:"Mcfadden David",age:51},status:"Negative"},{name:"Yang Lloyd",age:16,friend:{name:"Bates Barker",age:84},status:"None"},{name:"Vinson Ferguson",age:50,friend:{name:"Dejesus Owens",age:47},status:"Negative"},{name:"Flores Jones",age:32,friend:{name:"Anita Stark",age:47},status:"Positive"},{name:"Jennings Pope",age:39,friend:{name:"Ellen Avila",age:50},status:"Information"},{name:"Bettie Fernandez",age:61,friend:{name:"Lilian Juarez",age:61},status:"Information"},{name:"Sherri Abbott",age:26,friend:{name:"Floyd Clarke",age:51},status:"Negative"},{name:"Barrett Cameron",age:47,friend:{name:"Barton Waller",age:45},status:"None"},{name:"Young Frazier",age:26,friend:{name:"Hardin Branch",age:47},status:"Negative"},{name:"Cheri Obrien",age:75,friend:{name:"Karyn Merrill",age:81},status:"Positive"},{name:"Anne Hayden",age:61,friend:{name:"Joanne Powell",age:79},status:"Negative"},{name:"Hart Cortez",age:16,friend:{name:"Gross Beard",age:82},status:"Information"},{name:"Mallory Caldwell",age:57,friend:{name:"Curry Leonard",age:68},status:"None"},{name:"Snider Eaton",age:52,friend:{name:"Lucia Santos",age:47},status:"Information"},{name:"Leticia Tillman",age:60,friend:{name:"Langley Nielsen",age:80},status:"Negative"},{name:"Kemp Workman",age:35,friend:{name:"Calderon Mcleod",age:30},status:"Information"},{name:"Campos Leach",age:75,friend:{name:"Savannah Hogan",age:36},status:"Negative"},{name:"Colon Dunn",age:33,friend:{name:"Lily Love",age:73},status:"Negative"},{name:"Koch Henson",age:60,friend:{name:"Ola Welch",age:24},status:"Positive"}],he=[{name:"Owens Glover",age:22,friend:{name:"Daisy Giles",age:33},status:"Negative",isSelected:!0},{name:"Waller Nguyen",age:56,friend:{name:"Lola Banks",age:55},status:"None",isSelected:!0},{name:"Bowen Mckay",age:32,friend:{name:"Graham Wells",age:51},status:"Information"},{name:"Freida Weeks",age:68,friend:{name:"Lee Johnson",age:61},status:"Negative"},{name:"England Whitehead",age:82,friend:{name:"Phillips Merritt",age:19},status:"Information",isSelected:!0},{name:"Alissa Duke",age:43,friend:{name:"Rosella Slater",age:58},status:"None"},{name:"Randolph Grant",age:76,friend:{name:"Madge Mitchell",age:48},status:"Critical"},{name:"Malone Hampton",age:42,friend:{name:"Landry Hancock",age:33},status:"Negative"},{name:"Lorna Hinton",age:27,friend:{name:"Maddox House",age:67},status:"None"},{name:"Janis Wade",age:19,friend:{name:"Nell Hines",age:82},status:"Negative",isSelected:!0},{name:"Rose Vance",age:47,friend:{name:"Jacobson Wilcox",age:69},status:"Information"},{name:"Rowe Hamilton",age:85,friend:{name:"Vasquez Craft",age:79},status:"Critical"},{name:"Trisha Ellis",age:42,friend:{name:"Jacobs Ramsey",age:41},status:"Positive"},{name:"Bowers Rowe",age:57,friend:{name:"Brigitte Buckner",age:19},status:"None"},{name:"Gamble Rice",age:85,friend:{name:"Manning Jenkins",age:57},status:"Negative",isSelected:!0},{name:"Letitia Finch",age:54,friend:{name:"Silva Fulton",age:52},status:"Information"},{name:"Elinor Middleton",age:71,friend:{name:"Hines Mckenzie",age:33},status:"None"},{name:"Jeannine Lopez",age:38,friend:{name:"Benjamin Rodriguez",age:76},status:"Negative",isSelected:!0},{name:"Natasha Simon",age:73,friend:{name:"Simon Morin",age:20},status:"Negative"},{name:"Marquita Morrison",age:61,friend:{name:"Mitzi Blake",age:80},status:"Negative"},{name:"Lula Mason",age:49,friend:{name:"Holmes York",age:31},status:"Information"},{name:"Ginger Strong",age:79,friend:{name:"Higgins Shannon",age:25},status:"None"},{name:"Reeves Finley",age:84,friend:{name:"Sheila Hickman",age:25},status:"None",isSelected:!0},{name:"Reilly Mcpherson",age:34,friend:{name:"Horton Smith",age:37},status:"Critical"},{name:"Moreno Moore",age:39,friend:{name:"Lacey Fox",age:55},status:"None"}],Pt={...q,title:"Data Display / AnalyticalTable / Plugin Hooks",tags:["excludeFromSidebar","package:@ui5/webcomponents-react"]},be=[P],k={args:{data:[{age:void 0,friend:{name:null,age:0},status:"Error"},...fe],visibleRows:5},render(e){return n.jsx(w,{columns:e.columns,data:e.data,visibleRows:e.visibleRows,tableHooks:be})}},we=e=>e.original.age<40,Re=[S(we)],ye=[S("disableSelection")],I={args:{data:K.map(e=>({...e,disableSelection:Math.random()<.5})),selectionMode:b.Multiple},render:e=>{const[t,s]=p.useState(!0);return n.jsxs(n.Fragment,{children:[n.jsx(F,{onClick:()=>{s(!0)},pressed:t,children:"with function parameter"}),n.jsx(F,{onClick:()=>{s(!1)},pressed:!t,children:"with string parameter"}),t?n.jsx(w,{data:e.data,columns:e.columns,selectionMode:e.selectionMode,tableHooks:Re,visibleRows:10,header:"All under 40 are not selectable"}):n.jsx(w,{data:e.data,columns:e.columns,selectionMode:e.selectionMode,selectionBehavior:e.selectionBehavior,tableHooks:ye,visibleRows:10,header:'All with "disableSelection: true" are not selectable'})]})}},Se=[N()],v={render:e=>{const[t,s]=p.useReducer(a=>!a,!0);return n.jsxs(n.Fragment,{children:[n.jsx(F,{onClick:s,pressed:t,children:`${t?"Don't ":""}Select Sub-Rows`}),n.jsx(w,{selectionMode:b.Multiple,data:$,columns:e.columns,isTreeTable:!0,tableHooks:Se,reactTableOptions:{selectSubRows:t}})]})}},Ce=[ce("isSelected")],_={args:{data:he},render:e=>{const[t,s]=p.useReducer(o=>!o,!0),[a,l]=p.useReducer(o=>{const[,...c]=o;return o[0].isSelected?[{...o[0],isSelected:!1},...c]:[{...o[0],isSelected:!0},...c]},e.data);return n.jsxs(n.Fragment,{children:[n.jsxs(E,{onClick:l,children:["Toggle ",n.jsx("code",{children:"isSelected"})," of 1st row"]}),n.jsx("br",{}),n.jsx(x,{children:"Clicking this button will refresh the data array passed to the `data` prop."}),n.jsx("br",{}),n.jsx("br",{}),n.jsx(w,{selectionMode:b.Multiple,data:a,columns:e.columns,tableHooks:Ce}),n.jsx(E,{onClick:s,children:"Show first entries in data array"}),!t&&n.jsxs(y,{direction:"Column",children:[n.jsx("span",{children:JSON.stringify(a[0],null,2)}),n.jsx("span",{children:JSON.stringify(a[1],null,2)}),n.jsx("span",{children:JSON.stringify(a[2],null,2)}),n.jsx("span",{children:JSON.stringify(a[3],null,2)}),n.jsx("span",{children:JSON.stringify(a[4],null,2)}),n.jsx("span",{children:"..."})]})]})}},T={render:e=>{const[t,s]=p.useState({}),[a,l]=p.useState(!1),[o,c]=p.useState(100),r=g=>{l(g.target.checked)},i=g=>{c(parseInt(g.target.value))},d=p.useCallback(g=>{s(g)},[s]),u=p.useMemo(()=>[de(d,{liveUpdate:a,wait:o})],[d,a,o]);return n.jsxs(n.Fragment,{children:[n.jsx(w,{extension:n.jsxs(n.Fragment,{children:[n.jsxs(y,{alignItems:L.Center,children:[n.jsx(x,{children:"liveUpdate: "}),n.jsx(j,{onChange:r,checked:a})]}),n.jsxs(y,{alignItems:L.Center,children:[n.jsx(x,{children:"wait: "}),n.jsx(A,{onInput:i,type:Y.Number,value:`${o}`})]}),n.jsx("br",{})]}),data:e.data,columns:e.columns,tableHooks:u}),!!Object.keys(t).length&&n.jsxs(y,{direction:te.Column,children:[n.jsx("br",{}),n.jsx(D,{children:"Last fired callback of changed column:"}),n.jsx("br",{}),n.jsxs(y,{children:[n.jsx(x,{children:"Column:"}),n.jsx(D,{children:t.header.id})]}),n.jsxs(y,{children:[n.jsx(x,{children:"Width:"}),n.jsx(D,{children:t.columnWidth})]})]})]})}},xe=[{Header:"Name",accessor:"name",enableMultiSort:!0},{Header:"Age",accessor:"age",enableMultiSort:!0},{Header:"Name 2",accessor:"name2",enableMultiSort:!0},{Header:"Age 2",accessor:"age2",enableMultiSort:!0}],Ne=[{name:"Peter",age:40,name2:"Alissa",age2:18},{name:"Kristen",age:40,name2:"Randolph",age2:21},{name:"Peter",age:30,name2:"Rose",age2:90},{name:"Peter",age:70,name2:"Rose",age2:22},{name:"Kristen",age:60,name2:"Willis",age2:80},{name:"Kristen",age:20,name2:"Alissa",age2:80},{name:"Graham",age:40,name2:"Alissa",age2:80},{name:"Peter",age:65,name2:"Rose",age2:26},{name:"Graham",age:65,name2:"Rose",age2:26},{name:"Graham",age:65,name2:"Willis",age2:26},{name:"Graham",age:62,name2:"Willis",age2:26}],M={args:{orderedIds:["name","name2","age","age2"]},argTypes:{orderedIds:{control:"array",description:`Defines the sort priority when sorting by multiple columns, starting with the first column ID.

**Note:** Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column.`}},render(e){const t=p.useMemo(()=>[ue(e.orderedIds)],[e.orderedIds]);return n.jsx(w,{columns:xe,data:Ne,sortable:!0,tableHooks:t})}},ke=[{Header:"Input",id:"input",Cell:e=>{const t=R.useCallbackRef(e);return n.jsx(A,{ref:t})},interactiveElementName:"Input"},{Header:"Input & Button",id:"input_btn",Cell:e=>{const t=R.useCallbackRef(e);return n.jsxs(n.Fragment,{children:[n.jsx(A,{ref:t}),n.jsx(E,{ref:t,icon:Q,tooltip:"Submit",accessibleName:"Submit"})]})},interactiveElementName:"Input and Button"},{Header:"Text",accessor:"name"},{Header:"Button",id:"btn",Cell:e=>{const t=R.useCallbackRef(e);return n.jsx(E,{ref:t,children:"Button"})},interactiveElementName:()=>"Button"},{Header:"Non-interactive custom content",accessor:"friend.name",Cell:e=>n.jsx(ee,{children:e.value})},{Header:"Switch or CheckBox",id:"switch_checkbox",Cell:e=>{const t=R.useCallbackRef(e);return e.row.index%2?n.jsx(j,{ref:t,accessibleName:"Dummy CheckBox"}):n.jsx(Z,{ref:t,accessibleName:"Dummy Switch"})},interactiveElementName:e=>e.row.index%2?"CheckBox":"Switch"}],Ie=[R],B={render(e){return n.jsx(w,{data:e.data.slice(0,10),columns:ke,tableHooks:Ie,visibleRows:5})}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectSubRows, setSelectSubRows] = useReducer(prev => !prev, true);
    return <>
        <ToggleButton onClick={setSelectSubRows} pressed={selectSubRows}>{\`\${selectSubRows ? "Don't " : ''}Select Sub-Rows\`}</ToggleButton>
        <AnalyticalTable selectionMode={AnalyticalTableSelectionMode.Multiple} data={dataTree} columns={args.columns} isTreeTable tableHooks={tableHooksIndeterminateRowSel} reactTableOptions={{
        selectSubRows: selectSubRows
      }} />
      </>;
  }
}`,...v.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <AnalyticalTable data={args.data.slice(0, 10)} columns={inputCols} tableHooks={tableHooks} visibleRows={5} />;
  }
}`,...B.parameters?.docs?.source}}};const Wt=["PluginAnnounceEmptyCells","PluginDisableRowSelection","PluginIndeterminateRowSelection","PluginManualRowSelect","PluginOnColumnResize","PluginOrderedMultiSort","F2CellEdit"];export{B as F2CellEdit,k as PluginAnnounceEmptyCells,I as PluginDisableRowSelection,v as PluginIndeterminateRowSelection,_ as PluginManualRowSelect,T as PluginOnColumnResize,M as PluginOrderedMultiSort,Wt as __namedExportsOrder,Pt as default};
