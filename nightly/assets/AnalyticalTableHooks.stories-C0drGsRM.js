import{n as f,aH as J,fY as G,j as n,a7 as E,U as B,T as H}from"./iframe-GiALwnwk.js";import{d as K}from"./Friends500-CRbR9XAn.js";import{m as X,d as V}from"./AnalyticalTable.stories-C6gOy1mt.js";import{a as q}from"./Input-CAEdEQYs.js";import{p as Y}from"./paper-plane-BcYb5zY2.js";import{C as j}from"./index-BiTyXHR_.js";import{I as D}from"./index-C8KGwsoJ.js";import{L as C}from"./index-_Dwwjvl6.js";import{S as $}from"./index-WUkGkR3K.js";import{T as Q}from"./index-D48RNIki.js";import{T as A}from"./index-UQ8-K6Hp.js";import{F as w,c as O,d as Z}from"./index-DmWjxGkj.js";import{N as ee,b,c as P,g as te,A as R}from"./index-DBmUjfqO.js";import{d as ne}from"./debounce-D7W5PopO.js";import"./preload-helper-PPVm8Dsz.js";import"./delete-DW7iMKa4.js";import"./settings-DhekAkc-.js";import"./NoData-Ck7AmFs7.js";import"./Illustrations-OXUCAhva.js";import"./i18n-defaults-CFWtSmu6.js";import"./NoFilterResults-Bdr0pWK1.js";import"./index-CSqY6oqd.js";import"./IllustratedMessage-CWorwHI8.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-XPdaETP2.js";import"./ListBoxItemGroupTemplate-D9WXmJvJ.js";import"./ComboBoxItemGroup-D_9tYabb.js";import"./ListItemBaseTemplate-GKtph4El.js";import"./Token-DqvIjy0G.js";import"./ScrollEnablement-Dfwd2yQV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CmNegGRy.js";import"./ResponsivePopoverCommon.css-Dd9wsj0Z.js";import"./Suggestions.css-Dyj9iu2Q.js";import"./ToggleButton-CNcKoSZH.js";import"./multiselect-all-D9lBPv0A.js";import"./SuggestionItem-Cg2rZPAd.js";import"./ValueStateMessage.css-CsbnVp72.js";import"./index-CicHf-ly.js";import"./Option-BhicZcBl.js";import"./index-BbmFzA7n.js";import"./SegmentedButton-CFgw25ym.js";import"./index-COLQUQjD.js";import"./Select-wAYP5Lkd.js";import"./InvisibleMessage-C6bw_76w.js";import"./index-DdEYvRu2.js";import"./alert-C-pLX4kq.js";import"./information-DVV2_7m2.js";import"./sys-enter-2-BLXa0HBj.js";import"./less-BKVo8B_X.js";import"./Tag-LkaAJwXo.js";import"./index-CSIhU0w2.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CTpqP-um.js";import"./group-2-CYIXDJv4.js";import"./sort-descending-DYYr51Ys.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./utils-CfCxZg4A.js";import"./index-Bsb-fTU5.js";import"./index-CKCwf71g.js";import"./index-1SgfqZTS.js";import"./navigation-down-arrow-Dw3dfCIj.js";import"./navigation-right-arrow-CIGq5ecr.js";import"./navigation-right-arrow-C6hsZ--E.js";import"./useCurrentTheme-Bp92R9Yj.js";import"./useIsRTL-EHylbWiC.js";const W=e=>{const t=f.useCallback((r,{cell:{value:a},instance:{webComponentsReactProperties:{a11yElementIds:{cellEmptyDescId:l}}}})=>typeof a!="number"&&!a?[r,{"aria-labelledby":`${r["aria-labelledby"]} ${l}`}]:r,[]);e.getCellProps.push(t)};W.pluginName="useAnnounceEmptyCells";const ae=["[ui5-checkbox]","[ui5-switch]","[ui5-radio-button]","[ui5-rating-indicator]","[ui5-segmented-button]","[ui5-select]","[ui5-slider]","[ui5-split-button]",'[ui5-icon][mode="Interactive"]'],S=e=>{const t=J("@ui5/webcomponents-react"),r=f.useCallback((a,{cell:l,instance:s})=>{const{dispatch:u,state:o}=s,{interactiveElementName:i}=l.column,c=typeof i=="function"?i(l):i,g=(i?t.getText(G,c):"")+" "+a["aria-label"];return[a,{onKeyDown:d=>{if(o.cellContentTabIndex===0&&ee.has(d.key)&&!d.key.includes("Arrow")&&d.preventDefault(),d.key==="F2"){if(d.currentTarget===d.target&&i){const p=oe(d.target);p&&(u({type:"CELL_CONTENT_TAB_INDEX",payload:0}),d.currentTarget.tabIndex=-1,requestAnimationFrame(()=>{p.focus()}))}d.currentTarget!==d.target&&(u({type:"CELL_CONTENT_TAB_INDEX",payload:-1}),d.currentTarget.tabIndex=0,d.currentTarget.focus())}},onFocus:d=>{typeof a.onFocus=="function"&&a.onFocus(d),d.currentTarget!==d.target?u({type:"CELL_CONTENT_TAB_INDEX",payload:0}):u({type:"CELL_CONTENT_TAB_INDEX",payload:-1})},"aria-label":g}]},[t]);e.getCellProps.push(r),e.stateReducers.push(se),e.useInstanceBeforeDimensions.push(re)};S.pluginName="useF2CellEdit";S.useCallbackRef=e=>{const t=e.state.cellContentTabIndex===-1?"-1":"0";return f.useCallback(r=>{if(r){const a=l=>{typeof l.getFocusDomRefAsync=="function"?l.getFocusDomRefAsync().then(s=>{s&&s!==l?a(s):l.setAttribute("tabindex",t)}).catch(()=>{}):l.setAttribute("tabindex",t)};a(r)}},[t])};const se=(e,t,r)=>{const{payload:a,type:l}=t;return l==="CELL_CONTENT_TAB_INDEX"?{...e,cellContentTabIndex:a}:e};function oe(e){if(!e)return null;function t(r){for(const a of r.children){const l=getComputedStyle(a);if(a.disabled||l.display==="none"||l.visibility==="hidden")continue;const s=["a[href]","button","input","textarea","select",'[tabindex]:not([tabindex="-1"])',...ae];if(a.matches(s.join(",")))return a;if(a.shadowRoot){const o=t(a.shadowRoot);if(o)return o}const u=t(a);if(u)return u}return null}return t(e)}function re(e){const{dispatch:t}=e;f.useEffect(()=>{t({type:"CELL_CONTENT_TAB_INDEX",payload:-1})},[t])}const ie=(e,t)=>{let r=e.lastIndexOf(".");r===-1&&(r=1/0);const a=e.slice(0,r);return[t[a],r]},z=e=>{const t={},r=e.lastIndexOf(".");return t[e]=!0,r!==-1&&Object.assign(t,z(e.slice(0,r))),t},le=(e,t,r)=>{const a={};let l="";const s=(u,o=null)=>{for(const i of u)if(i.subRows.length>0)s(i.subRows,i.id);else if(o!==null&&l!==o){l=o;const c=g=>{const[m,h]=ie(g,t),d=m.subRows.filter(y=>r.selectedRowIds[y.id]),p=m.subRows.length===d.length;if(d.length>0&&!p){const y=m.id;Object.assign(a,z(y));return}h!==1/0&&c(m.id)};c(i.id)}};return s(e),a},F=e=>{const t=(s,{row:u,instance:o})=>{let i;return o.isAllRowsSelected?i=!1:i=o?.state?.indeterminateRows?.[u.id]??!1,[s,{indeterminate:i,checked:i?!0:s.checked}]},r=(s,u,o,i)=>{const{rowsById:c,rows:g}=i;if(u.type==="toggleRowSelected"){const m=u.id;if(s.selectedRowIds[m]){const d=m.substring(0,m.lastIndexOf("."));if(d&&c[d]&&c[d].subRows?.every(y=>s.selectedRowIds[y.id])&&!s.selectedRowIds[d])return{...s,selectedRowIds:{...s.selectedRowIds,[d]:!0}}}}if(u.type==="INDETERMINATE_ROW_IDS"){if(u.payload==="reset")return{...s,indeterminateRows:{}};const m=le(g,c,{selectedRowIds:s.selectedRowIds});return{...s,indeterminateRows:m}}},a=s=>{const{data:u,dispatch:o,rowsById:i,state:{selectedRowIds:c,indeterminateRows:g},webComponentsReactProperties:{selectionMode:m,selectionBehavior:h,isTreeTable:d}}=s,p=f.useRef(c);f.useEffect(()=>{p.current!==c&&(p.current=c,d&&m===b.Multiple&&h!==P.RowOnly&&Object.keys(c).length&&Object.keys(i).length!==Object.keys(c).length?o({type:"INDETERMINATE_ROW_IDS"}):typeof g=="object"&&Object.keys(g).length&&o({type:"INDETERMINATE_ROW_IDS",payload:"reset"}))},[u,c,d,m,h,o]),f.useEffect(()=>{typeof e=="function"&&g&&e({indeterminateRowsById:g,tableInstance:s})},[g])},l=s=>{s.getToggleRowSelectedProps.push(t),s.stateReducers.push(r),s.useInstanceAfterData.push(a)};return l.pluginName="useIndeterminate",l};try{F.displayName="useIndeterminateRowSelection",F.__docgenInfo={description:"A plugin hook that marks parent rows as indeterminate if a child row is selected in `Multiple` mode.\nWhen using this hook, it is recommended to also select all sub-rows when selecting a row. (`reactTableOptions={{ selectSubRows: true }}`)\n\n__Note:__\n- This functionality is not covered by SAP UXC design guidelines and should be avoided if UXC is required.\n- The `indeterminate` state has a higher priority than the `selected` state. Therefore, a row can be selected and indeterminate at the same time. This can for example happen, if `selectSubRows: true` is set and a row with sub-rows is selected and then a sub-row is unselected.\n- This hook has to traverse the whole data tree on each selection, which can lead to performance degradation with large datasets. Please use with caution!",displayName:"useIndeterminateRowSelection",props:{}}}catch{}const ce=(e="isSelected")=>{const t=({flatRows:a,toggleRowSelected:l,webComponentsReactProperties:s})=>{const{selectionMode:u}=s;f.useEffect(()=>{u!==b.None&&a.forEach(({id:o,original:i})=>{e in i&&l(o,i.isSelected)})},[a,l,u])},r=a=>{a.useInstanceAfterData.push(t)};return r.pluginName="useManualRowSelect",r},de=(e,t)=>{const r=ne(e,t?.wait??100),a=s=>{const{state:u,columns:o}=s,{columnResizing:i}=u,{isResizingColumn:c,columnWidths:g}=i,m=f.useRef(void 0);f.useEffect(()=>{if(c&&t?.liveUpdate){const h=o.find(d=>d.id===c);r({columnWidth:g[c],header:h})}},[i,t?.liveUpdate,o]),f.useEffect(()=>{if(t?.liveUpdate)return()=>r.cancel()},[]),f.useEffect(()=>{if(!t?.liveUpdate){const h=o.find(d=>d.id===m.current);c&&(m.current=c),!c&&m.current&&e({columnWidth:g[m.current],header:h})}},[i,t?.liveUpdate,o])},l=s=>{s.useFinalInstance.push(a)};return l.pluginName="useOnColumnResize",l},ue=e=>{const t=r=>{r.stateReducers.push((a,l)=>{if(l.type==="toggleSortBy"){if(a.sortBy.length<=1)return a;{const s=[...a.sortBy],u=e.flatMap(o=>{const i=s.findIndex(c=>c.id===o);if(i!==-1){const c=s[i];return s.splice(i,1),[c]}return[]});return{...a,sortBy:[...u,...s]}}}return a})};return t.pluginName="useOrderedMultiSort",t},me={verticalAlign:"middle"},ge=(e,{instance:{webComponentsReactProperties:{selectionMode:t,translatableTexts:r}}})=>{if(e.key==="header___ui5wcr__internal_selection_column"&&t===b.Multiple){const a={...e.style,cursor:"auto"},l=e["aria-label"]?.replace(r.selectAllA11yText,"");return[e,{onClick:void 0,onKeyDown:void 0,onKeyUp:void 0,title:void 0,"aria-label":l,style:a}]}return e},pe=e=>e.map(t=>t.id==="__ui5wcr__internal_selection_column"?{...t,Cell:r=>{const{webComponentsReactProperties:a,row:l}=r;return l.disableSelect===!0?l.isGrouped&&a.selectionMode===b.Single?null:a.selectionMode===b.Single?n.jsx("div",{onClick:void 0,"data-name":"internal_selection_column"}):n.jsx(j,{...l.getToggleRowSelectedProps(),disabled:!0,style:me,"data-name":"internal_selection_column",tabIndex:-1}):t.Cell(r)},Header:()=>null}:t),_=e=>{const t=typeof e=="function"?e:o=>te(o.original,e,void 0),r=(o,{row:i,instance:c})=>{const{webComponentsReactProperties:g}=c;return g.selectionMode===b.None?o:t(i)===!0?(i.disableSelect=!0,{...o,onClick:p=>{typeof g.onRowClick=="function"&&g.onRowClick(E(p,{row:i}))},onKeyDown:p=>{(p.code==="Enter"||p.code==="Space")&&(p.preventDefault(),p.code==="Enter"&&typeof g.onRowClick=="function"&&g.onRowClick(E(p,{row:i})))},onKeyUp:p=>{p.code==="Space"&&(p.preventDefault(),typeof g.onRowClick=="function"&&g.onRowClick(E(p,{row:i})))},className:g.classes.tr}):o},a=o=>[...o,e],l=(o,{cell:{row:i,column:c},instance:g})=>{const{selectionMode:m,selectionBehavior:h}=g.webComponentsReactProperties;if(t(i)===!0&&m!==b.None&&(h!==P.RowSelector||c.id==="__ui5wcr__internal_selection_column")){const{"aria-label":d,...p}=o;if(c.id==="__ui5wcr__internal_selection_column"){const U={...o.style,cursor:"auto"};return{...p,"aria-disabled":!0,style:U}}const{"aria-selected":L,...y}=p;return y}return o},s=(o,{row:i,instance:c})=>{if(c.webComponentsReactProperties.selectionMode===b.None)return o;if(t(i)===!0){const{title:g,...m}=o;return m}return o},u=o=>{o.getHeaderProps.push(ge),o.getRowProps.push(r),o.columns.push(pe),o.columnsDeps.push(a),o.getCellProps.push(l),o.getToggleRowSelectedProps.push(s)};return u.pluginName="useRowDisableSelection",u};try{_.displayName="useRowDisableSelection",_.__docgenInfo={description:`A plugin hook for disabling row selection of specific rows.

__Note:__ The "Select All" checkbox is not available with this hook.`,displayName:"useRowDisableSelection",props:{}}}catch{}const fe=[{name:"Owens Glover",age:22,friend:{name:"Daisy Giles",age:33},status:"Negative"},{name:"Waller Nguyen",age:56,friend:{name:"Lola Banks",age:55},status:"None"},{name:"Bowen Mckay",age:32,friend:{name:"Graham Wells",age:51},status:"Information"},{name:"Freida Weeks",age:68,friend:{name:"Lee Johnson",age:61},status:"Negative"},{name:"England Whitehead",age:82,friend:{name:"Phillips Merritt",age:19},status:"Information"},{name:"Alissa Duke",age:43,friend:{name:"Rosella Slater",age:58},status:"None"},{name:"Randolph Grant",age:76,friend:{name:"Madge Mitchell",age:48},status:"Critical"},{name:"Malone Hampton",age:42,friend:{name:"Landry Hancock",age:33},status:"Negative"},{name:"Lorna Hinton",age:27,friend:{name:"Maddox House",age:67},status:"None"},{name:"Janis Wade",age:19,friend:{name:"Nell Hines",age:82},status:"Negative"},{name:"Rose Vance",age:47,friend:{name:"Jacobson Wilcox",age:69},status:"Information"},{name:"Rowe Hamilton",age:85,friend:{name:"Vasquez Craft",age:79},status:"Critical"},{name:"Trisha Ellis",age:42,friend:{name:"Jacobs Ramsey",age:41},status:"Positive"},{name:"Bowers Rowe",age:57,friend:{name:"Brigitte Buckner",age:19},status:"None"},{name:"Gamble Rice",age:85,friend:{name:"Manning Jenkins",age:57},status:"Negative"},{name:"Letitia Finch",age:54,friend:{name:"Silva Fulton",age:52},status:"Information"},{name:"Elinor Middleton",age:71,friend:{name:"Hines Mckenzie",age:33},status:"None"},{name:"Jeannine Lopez",age:38,friend:{name:"Benjamin Rodriguez",age:76},status:"Negative"},{name:"Natasha Simon",age:73,friend:{name:"Simon Morin",age:20},status:"Negative"},{name:"Marquita Morrison",age:61,friend:{name:"Mitzi Blake",age:80},status:"Negative"},{name:"Lula Mason",age:49,friend:{name:"Holmes York",age:31},status:"Information"},{name:"Ginger Strong",age:79,friend:{name:"Higgins Shannon",age:25},status:"None"},{name:"Reeves Finley",age:84,friend:{name:"Sheila Hickman",age:25},status:"None"},{name:"Reilly Mcpherson",age:34,friend:{name:"Horton Smith",age:37},status:"Critical"},{name:"Moreno Moore",age:39,friend:{name:"Lacey Fox",age:55},status:"None"},{name:"Santana Gilliam",age:20,friend:{name:"Baird Barton",age:68},status:"Critical"},{name:"Deidre Richmond",age:45,friend:{name:"Newman Adkins",age:81},status:"Positive"},{name:"Willis Wise",age:73,friend:{name:"Haynes Dominguez",age:47},status:"Negative"},{name:"Wilson Hunter",age:49,friend:{name:"Greene Wood",age:24},status:"None"},{name:"Nancy Klein",age:54,friend:{name:"Callie Foster",age:64},status:"Negative"},{name:"Woods Porter",age:74,friend:{name:"Mercer Perry",age:62},status:"None"},{name:"Hopkins Schmidt",age:34,friend:{name:"Mcfadden David",age:51},status:"Negative"},{name:"Yang Lloyd",age:16,friend:{name:"Bates Barker",age:84},status:"None"},{name:"Vinson Ferguson",age:50,friend:{name:"Dejesus Owens",age:47},status:"Negative"},{name:"Flores Jones",age:32,friend:{name:"Anita Stark",age:47},status:"Positive"},{name:"Jennings Pope",age:39,friend:{name:"Ellen Avila",age:50},status:"Information"},{name:"Bettie Fernandez",age:61,friend:{name:"Lilian Juarez",age:61},status:"Information"},{name:"Sherri Abbott",age:26,friend:{name:"Floyd Clarke",age:51},status:"Negative"},{name:"Barrett Cameron",age:47,friend:{name:"Barton Waller",age:45},status:"None"},{name:"Young Frazier",age:26,friend:{name:"Hardin Branch",age:47},status:"Negative"},{name:"Cheri Obrien",age:75,friend:{name:"Karyn Merrill",age:81},status:"Positive"},{name:"Anne Hayden",age:61,friend:{name:"Joanne Powell",age:79},status:"Negative"},{name:"Hart Cortez",age:16,friend:{name:"Gross Beard",age:82},status:"Information"},{name:"Mallory Caldwell",age:57,friend:{name:"Curry Leonard",age:68},status:"None"},{name:"Snider Eaton",age:52,friend:{name:"Lucia Santos",age:47},status:"Information"},{name:"Leticia Tillman",age:60,friend:{name:"Langley Nielsen",age:80},status:"Negative"},{name:"Kemp Workman",age:35,friend:{name:"Calderon Mcleod",age:30},status:"Information"},{name:"Campos Leach",age:75,friend:{name:"Savannah Hogan",age:36},status:"Negative"},{name:"Colon Dunn",age:33,friend:{name:"Lily Love",age:73},status:"Negative"},{name:"Koch Henson",age:60,friend:{name:"Ola Welch",age:24},status:"Positive"}],he=[{name:"Owens Glover",age:22,friend:{name:"Daisy Giles",age:33},status:"Negative",isSelected:!0},{name:"Waller Nguyen",age:56,friend:{name:"Lola Banks",age:55},status:"None",isSelected:!0},{name:"Bowen Mckay",age:32,friend:{name:"Graham Wells",age:51},status:"Information"},{name:"Freida Weeks",age:68,friend:{name:"Lee Johnson",age:61},status:"Negative"},{name:"England Whitehead",age:82,friend:{name:"Phillips Merritt",age:19},status:"Information",isSelected:!0},{name:"Alissa Duke",age:43,friend:{name:"Rosella Slater",age:58},status:"None"},{name:"Randolph Grant",age:76,friend:{name:"Madge Mitchell",age:48},status:"Critical"},{name:"Malone Hampton",age:42,friend:{name:"Landry Hancock",age:33},status:"Negative"},{name:"Lorna Hinton",age:27,friend:{name:"Maddox House",age:67},status:"None"},{name:"Janis Wade",age:19,friend:{name:"Nell Hines",age:82},status:"Negative",isSelected:!0},{name:"Rose Vance",age:47,friend:{name:"Jacobson Wilcox",age:69},status:"Information"},{name:"Rowe Hamilton",age:85,friend:{name:"Vasquez Craft",age:79},status:"Critical"},{name:"Trisha Ellis",age:42,friend:{name:"Jacobs Ramsey",age:41},status:"Positive"},{name:"Bowers Rowe",age:57,friend:{name:"Brigitte Buckner",age:19},status:"None"},{name:"Gamble Rice",age:85,friend:{name:"Manning Jenkins",age:57},status:"Negative",isSelected:!0},{name:"Letitia Finch",age:54,friend:{name:"Silva Fulton",age:52},status:"Information"},{name:"Elinor Middleton",age:71,friend:{name:"Hines Mckenzie",age:33},status:"None"},{name:"Jeannine Lopez",age:38,friend:{name:"Benjamin Rodriguez",age:76},status:"Negative",isSelected:!0},{name:"Natasha Simon",age:73,friend:{name:"Simon Morin",age:20},status:"Negative"},{name:"Marquita Morrison",age:61,friend:{name:"Mitzi Blake",age:80},status:"Negative"},{name:"Lula Mason",age:49,friend:{name:"Holmes York",age:31},status:"Information"},{name:"Ginger Strong",age:79,friend:{name:"Higgins Shannon",age:25},status:"None"},{name:"Reeves Finley",age:84,friend:{name:"Sheila Hickman",age:25},status:"None",isSelected:!0},{name:"Reilly Mcpherson",age:34,friend:{name:"Horton Smith",age:37},status:"Critical"},{name:"Moreno Moore",age:39,friend:{name:"Lacey Fox",age:55},status:"None"}],Pt={...X,title:"Data Display / AnalyticalTable / Plugin Hooks",tags:["excludeFromSidebar","package:@ui5/webcomponents-react"]},be=[W],x={args:{data:[{age:void 0,friend:{name:null,age:0},status:"Error"},...fe],visibleRows:5},render(e){return n.jsx(R,{columns:e.columns,data:e.data,visibleRows:e.visibleRows,tableHooks:be})}},Re=e=>e.original.age<40,ye=[_(Re)],Se=[_("disableSelection")],I={args:{data:K.map(e=>({...e,disableSelection:Math.random()<.5})),selectionMode:b.Multiple},render:e=>{const[t,r]=f.useState(!0);return n.jsxs(n.Fragment,{children:[n.jsx(A,{onClick:()=>{r(!0)},pressed:t,children:"with function parameter"}),n.jsx(A,{onClick:()=>{r(!1)},pressed:!t,children:"with string parameter"}),t?n.jsx(R,{data:e.data,columns:e.columns,selectionMode:e.selectionMode,tableHooks:ye,visibleRows:10,header:"All under 40 are not selectable"}):n.jsx(R,{data:e.data,columns:e.columns,selectionMode:e.selectionMode,selectionBehavior:e.selectionBehavior,tableHooks:Se,visibleRows:10,header:'All with "disableSelection: true" are not selectable'})]})}},we=[F()],N={render:e=>{const[t,r]=f.useReducer(a=>!a,!0);return n.jsxs(n.Fragment,{children:[n.jsx(A,{onClick:r,pressed:t,children:`${t?"Don't ":""}Select Sub-Rows`}),n.jsx(R,{selectionMode:b.Multiple,data:V,columns:e.columns,isTreeTable:!0,tableHooks:we,reactTableOptions:{selectSubRows:t}})]})}},Ce=[ce("isSelected")],v={args:{data:he},render:e=>{const[t,r]=f.useReducer(s=>!s,!0),[a,l]=f.useReducer(s=>{const[,...u]=s;return s[0].isSelected?[{...s[0],isSelected:!1},...u]:[{...s[0],isSelected:!0},...u]},e.data);return n.jsxs(n.Fragment,{children:[n.jsxs(B,{onClick:l,children:["Toggle ",n.jsx("code",{children:"isSelected"})," of 1st row"]}),n.jsx("br",{}),n.jsx(C,{children:"Clicking this button will refresh the data array passed to the `data` prop."}),n.jsx("br",{}),n.jsx("br",{}),n.jsx(R,{selectionMode:b.Multiple,data:a,columns:e.columns,tableHooks:Ce}),n.jsx(B,{onClick:r,children:"Show first entries in data array"}),!t&&n.jsxs(w,{direction:"Column",children:[n.jsx("span",{children:JSON.stringify(a[0],null,2)}),n.jsx("span",{children:JSON.stringify(a[1],null,2)}),n.jsx("span",{children:JSON.stringify(a[2],null,2)}),n.jsx("span",{children:JSON.stringify(a[3],null,2)}),n.jsx("span",{children:JSON.stringify(a[4],null,2)}),n.jsx("span",{children:"..."})]})]})}},k={render:e=>{const[t,r]=f.useState({}),[a,l]=f.useState(!1),[s,u]=f.useState(100),o=m=>{l(m.target.checked)},i=m=>{u(parseInt(m.target.value))},c=f.useCallback(m=>{r(m)},[r]),g=f.useMemo(()=>[de(c,{liveUpdate:a,wait:s})],[c,a,s]);return n.jsxs(n.Fragment,{children:[n.jsx(R,{extension:n.jsxs(n.Fragment,{children:[n.jsxs(w,{alignItems:O.Center,children:[n.jsx(C,{children:"liveUpdate: "}),n.jsx(j,{onChange:o,checked:a})]}),n.jsxs(w,{alignItems:O.Center,children:[n.jsx(C,{children:"wait: "}),n.jsx(D,{onInput:i,type:q.Number,value:`${s}`})]}),n.jsx("br",{})]}),data:e.data,columns:e.columns,tableHooks:g}),!!Object.keys(t).length&&n.jsxs(w,{direction:Z.Column,children:[n.jsx("br",{}),n.jsx(H,{children:"Last fired callback of changed column:"}),n.jsx("br",{}),n.jsxs(w,{children:[n.jsx(C,{children:"Column:"}),n.jsx(H,{children:t.header.id})]}),n.jsxs(w,{children:[n.jsx(C,{children:"Width:"}),n.jsx(H,{children:t.columnWidth})]})]})]})}},xe=[{Header:"Name",accessor:"name",enableMultiSort:!0},{Header:"Age",accessor:"age",enableMultiSort:!0},{Header:"Name 2",accessor:"name2",enableMultiSort:!0},{Header:"Age 2",accessor:"age2",enableMultiSort:!0}],Ie=[{name:"Peter",age:40,name2:"Alissa",age2:18},{name:"Kristen",age:40,name2:"Randolph",age2:21},{name:"Peter",age:30,name2:"Rose",age2:90},{name:"Peter",age:70,name2:"Rose",age2:22},{name:"Kristen",age:60,name2:"Willis",age2:80},{name:"Kristen",age:20,name2:"Alissa",age2:80},{name:"Graham",age:40,name2:"Alissa",age2:80},{name:"Peter",age:65,name2:"Rose",age2:26},{name:"Graham",age:65,name2:"Rose",age2:26},{name:"Graham",age:65,name2:"Willis",age2:26},{name:"Graham",age:62,name2:"Willis",age2:26}],M={args:{orderedIds:["name","name2","age","age2"]},argTypes:{orderedIds:{control:"array",description:`Defines the sort priority when sorting by multiple columns, starting with the first column ID.

**Note:** Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column.`}},render(e){const t=f.useMemo(()=>[ue(e.orderedIds)],[e.orderedIds]);return n.jsx(R,{columns:xe,data:Ie,sortable:!0,tableHooks:t})}},Ne=[{Header:"Input",id:"input",Cell:e=>{const t=S.useCallbackRef(e);return n.jsx(D,{ref:t})},interactiveElementName:"Input"},{Header:"Input & Button",id:"input_btn",Cell:e=>{const t=S.useCallbackRef(e);return n.jsxs(n.Fragment,{children:[n.jsx(D,{ref:t}),n.jsx(B,{ref:t,icon:Y,tooltip:"Submit",accessibleName:"Submit"})]})},interactiveElementName:"Input and Button"},{Header:"Text",accessor:"name"},{Header:"Button",id:"btn",Cell:e=>{const t=S.useCallbackRef(e);return n.jsx(B,{ref:t,children:"Button"})},interactiveElementName:()=>"Button"},{Header:"Non-interactive custom content",accessor:"friend.name",Cell:e=>n.jsx(Q,{children:e.value})},{Header:"Switch or CheckBox",id:"switch_checkbox",Cell:e=>{const t=S.useCallbackRef(e);return e.row.index%2?n.jsx(j,{ref:t,accessibleName:"Dummy CheckBox"}):n.jsx($,{ref:t,accessibleName:"Dummy Switch"})},interactiveElementName:e=>e.row.index%2?"CheckBox":"Switch"}],ve=[S],T={render(e){return n.jsx(R,{data:e.data.slice(0,10),columns:Ne,tableHooks:ve,visibleRows:5})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectSubRows, setSelectSubRows] = useReducer(prev => !prev, true);
    return <>
        <ToggleButton onClick={setSelectSubRows} pressed={selectSubRows}>{\`\${selectSubRows ? "Don't " : ''}Select Sub-Rows\`}</ToggleButton>
        <AnalyticalTable selectionMode={AnalyticalTableSelectionMode.Multiple} data={dataTree} columns={args.columns} isTreeTable tableHooks={tableHooksIndeterminateRowSel} reactTableOptions={{
        selectSubRows: selectSubRows
      }} />
      </>;
  }
}`,...N.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};const Wt=["PluginAnnounceEmptyCells","PluginDisableRowSelection","PluginIndeterminateRowSelection","PluginManualRowSelect","PluginOnColumnResize","PluginOrderedMultiSort","F2CellEdit"];export{T as F2CellEdit,x as PluginAnnounceEmptyCells,I as PluginDisableRowSelection,N as PluginIndeterminateRowSelection,v as PluginManualRowSelect,k as PluginOnColumnResize,M as PluginOrderedMultiSort,Wt as __namedExportsOrder,Pt as default};
