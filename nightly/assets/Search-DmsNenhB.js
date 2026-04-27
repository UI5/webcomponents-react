import{n as e}from"./chunk-jRWAZmH_.js";import{$r as t,Gm as n,Jr as r,Qr as i,Xr as a,Yr as o,Zr as s,ei as c,ni as l,qr as u,ti as d}from"./iframe-Dht4FHWD.js";import{r as f}from"./react-BNtP-Eko.js";import{_ as p,m,o as h,p as g,s as _,t as v}from"./components-CqZFx5WQ.js";import{_ as y,d as b,o as x,r as S}from"./blocks-CuH3j8Dx.js";import{Default as C,ShowMoreItem as w,WithScopeAndItems as T,n as E,t as D}from"./Search.stories-BI_p_c1L.js";function O(e){let n={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...f(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(b,{of:D}),`
`,(0,A.jsx)(_,{of:D,experimental:!0}),`
`,(0,A.jsx)(`br`,{}),`
`,(0,A.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,A.jsx)(S,{of:C}),`
`,(0,A.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,A.jsx)(g,{of:C}),`
`,(0,A.jsx)(n.h2,{id:`more-examples`,children:`More Examples`}),`
`,(0,A.jsx)(n.h3,{id:`search-with-scope-and-searchitems`,children:`Search with Scope and SearchItems`}),`
`,(0,A.jsxs)(n.p,{children:[`A `,(0,A.jsx)(n.code,{children:`Search`}),` component with enabled scope, items and filtering by scope.`]}),`
`,(0,A.jsx)(S,{of:T}),`
`,(0,A.jsxs)(`details`,{children:[(0,A.jsx)(`summary`,{children:`Show static code`}),(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{className:`language-tsx`,children:`const scopeData = [
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
`,(0,A.jsxs)(n.h3,{id:`search-with-searchshowmore-item`,children:[`Search with `,(0,A.jsx)(n.code,{children:`SearchShowMore`}),` Item`]}),`
`,(0,A.jsx)(n.p,{children:`Search with Grouped Suggestions and Show More (N) Item`}),`
`,(0,A.jsx)(S,{of:w}),`
`,(0,A.jsxs)(`details`,{children:[(0,A.jsx)(`summary`,{children:`Show static code`}),(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{className:`language-tsx`,children:`const allItems = [
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
`,(0,A.jsx)(n.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,A.jsx)(n.h3,{id:`searchitem`,children:`SearchItem`}),`
`,(0,A.jsx)(x,{of:d}),`
`,(0,A.jsx)(m,{metaOf:D,of:d}),`
`,(0,A.jsx)(n.h3,{id:`searchitemgroup`,children:`SearchItemGroup`}),`
`,(0,A.jsx)(x,{of:t}),`
`,(0,A.jsx)(m,{metaOf:D,of:t}),`
`,(0,A.jsx)(n.h3,{id:`searchitemshowmore`,children:`SearchItemShowMore`}),`
`,(0,A.jsx)(x,{of:s}),`
`,(0,A.jsx)(m,{metaOf:D,of:s}),`
`,(0,A.jsx)(n.h3,{id:`searchmessagearea`,children:`SearchMessageArea`}),`
`,(0,A.jsx)(x,{of:o}),`
`,(0,A.jsx)(m,{metaOf:D,of:o}),`
`,(0,A.jsx)(n.h3,{id:`searchscope`,children:`SearchScope`}),`
`,(0,A.jsx)(x,{of:u}),`
`,(0,A.jsx)(m,{metaOf:D,of:u}),`
`,(0,A.jsx)(h,{})]})}function k(e={}){let{wrapper:t}={...f(),...e.components};return t?(0,A.jsx)(t,{...e,children:(0,A.jsx)(O,{...e})}):O(e)}var A;e((()=>{A=n(),p(),v(),y(),E(),l(),c(),i(),a(),r()}))();export{k as default};