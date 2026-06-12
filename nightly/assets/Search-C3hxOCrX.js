import{i as e}from"./preload-helper-usAeo7Bx.js";import{ai as t,ci as n,di as r,fi as i,ii as a,li as o,mh as s,oi as c,pi as l,si as u,ui as d}from"./iframe-TnKwsNrM.js";import{J as f,_ as p,d as m,o as h,r as g}from"./blocks-DayqEpmq.js";import{E as _,S as v,b as y,f as b,t as x,u as S}from"./components-CA_cUx0F.js";import{Default as C,ShowMoreItem as w,WithScopeAndItems as T,n as E,t as D}from"./Search.stories-CN8PF9E5.js";function O(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...f(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(m,{of:D}),`
`,(0,A.jsx)(b,{of:D,experimental:!0}),`
`,(0,A.jsx)(`br`,{}),`
`,(0,A.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,A.jsx)(g,{of:C}),`
`,(0,A.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,A.jsx)(y,{of:C}),`
`,(0,A.jsx)(t.h2,{id:`more-examples`,children:`More Examples`}),`
`,(0,A.jsx)(t.h3,{id:`search-with-scope-and-searchitems`,children:`Search with Scope and SearchItems`}),`
`,(0,A.jsxs)(t.p,{children:[`A `,(0,A.jsx)(t.code,{children:`Search`}),` component with enabled scope, items and filtering by scope.`]}),`
`,(0,A.jsx)(g,{of:T}),`
`,(0,A.jsxs)(`details`,{children:[(0,A.jsx)(`summary`,{children:`Show static code`}),(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{className:`language-tsx`,children:`const scopeData = [
  { name: 'Laptop', scope: 'products' },
  { name: 'Leave Requests', scope: 'apps' },
  { name: 'Log work', scope: 'apps' },
  { name: 'Manage Products', scope: 'apps' },
  { name: 'Mobile Phones', scope: 'products' },
  { name: 'Tablet', scope: 'products' },
];

function SearchComponent(props) {
  const [filterData, setFilterData] = useState(scopeData);

  const handleScopeChange: SearchPropTypes['onScopeChange'] = (e) => {
    props.onScopeChange(e);
    const { scope } = e.detail;
    if (scope.text === 'All') {
      setFilterData(scopeData);
    } else {
      setFilterData(
        scopeData.filter((item) => {
          return item.scope === scope.text.toLowerCase();
        }),
      );
    }
  };

  return (
    <Search {...props} onScopeChange={handleScopeChange}>
      {filterData.map((item) => {
        return <SearchItem key={item.name} text={item.name} scopeName={item.scope} />;
      })}
    </Search>
  );
}
`})})]}),`
`,(0,A.jsxs)(t.h3,{id:`search-with-searchshowmore-item`,children:[`Search with `,(0,A.jsx)(t.code,{children:`SearchShowMore`}),` Item`]}),`
`,(0,A.jsx)(t.p,{children:`Search with Grouped Suggestions and Show More (N) Item`}),`
`,(0,A.jsx)(g,{of:w}),`
`,(0,A.jsxs)(`details`,{children:[(0,A.jsx)(`summary`,{children:`Show static code`}),(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{className:`language-tsx`,children:`const allItems = [
  { text: 'Search Item 1', icon: historyIcon },
  { text: 'Search Item 2', icon: searchIcon },
  { text: 'Search Item 3', icon: historyIcon },
  { text: 'Search Item 4', icon: historyIcon },
  { text: 'Search Item 5', icon: searchIcon },
  { text: 'Search Item 6', icon: globeIcon },
];
const visibleItems = allItems.slice(0, 3);
const hiddenItems = allItems.slice(3);

export function ShowMoreItem() {
  const [showHiddenItems, setShowHiddenItems] = useState(false);

  return (
    <Search showClearIcon={true} placeholder="Placeholder">
      <SearchItemGroup headerText="Group Header 1">
        {visibleItems.map((item) => (
          <SearchItem key={item.text} text={item.text} icon={item.icon} />
        ))}
        {!showHiddenItems && (
          <SearchItemShowMore itemsToShowCount={hiddenItems.length} onClick={() => setShowHiddenItems(true)} />
        )}
        {showHiddenItems && hiddenItems.map((item) => <SearchItem key={item.text} text={item.text} icon={item.icon} />)}
      </SearchItemGroup>

      <SearchItemGroup headerText="Group Header 2">
        <SearchItem text="Search Item 1" icon={historyIcon} />
        <SearchItem text="Search Item 2" icon={historyIcon} />
        <SearchItem text="Search Item 3" icon={globeIcon} />
      </SearchItemGroup>
    </Search>
  );
}
`})})]}),`
`,(0,A.jsx)(t.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,A.jsx)(t.h3,{id:`searchitem`,children:`SearchItem`}),`
`,(0,A.jsx)(h,{of:i}),`
`,(0,A.jsx)(v,{metaOf:D,of:i}),`
`,(0,A.jsx)(t.h3,{id:`searchitemgroup`,children:`SearchItemGroup`}),`
`,(0,A.jsx)(h,{of:d}),`
`,(0,A.jsx)(v,{metaOf:D,of:d}),`
`,(0,A.jsx)(t.h3,{id:`searchitemshowmore`,children:`SearchItemShowMore`}),`
`,(0,A.jsx)(h,{of:n}),`
`,(0,A.jsx)(v,{metaOf:D,of:n}),`
`,(0,A.jsx)(t.h3,{id:`searchmessagearea`,children:`SearchMessageArea`}),`
`,(0,A.jsx)(h,{of:c}),`
`,(0,A.jsx)(v,{metaOf:D,of:c}),`
`,(0,A.jsx)(t.h3,{id:`searchscope`,children:`SearchScope`}),`
`,(0,A.jsx)(h,{of:a}),`
`,(0,A.jsx)(v,{metaOf:D,of:a}),`
`,(0,A.jsx)(S,{})]})}function k(e={}){let{wrapper:t}={...f(),...e.components};return t?(0,A.jsx)(t,{...e,children:(0,A.jsx)(O,{...e})}):O(e)}var A;e((()=>{A=s(),_(),x(),p(),E(),l(),r(),o(),u(),t()}))();export{k as default};