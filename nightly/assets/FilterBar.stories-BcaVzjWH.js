import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{$d as r,Bo as i,Eo as a,Er as o,Gl as s,Ho as c,Io as l,Ki as u,Po as d,Qi as f,Sn as p,So as m,Wg as h,Xi as g,af as _,b as v,cp as y,d as b,df as x,ef as S,et as C,f as w,it as T,lp as E,mh as D,mu as O,of as k,p as A,pu as j,qu as ee,tt as M,tu as N,vi as P,wo as F,x as I,xu as L,yr as R,zd as z}from"./iframe-2aOx3Cwb.js";var B=e({Default:()=>K,IdentifyInputEventOrigin:()=>Z,InDynamicPage:()=>Y,WithLogic:()=>J,WithReordering:()=>X,__namedExportsOrder:()=>Q,default:()=>G});function V(e,t){switch(t.type){case`SET_AGE`:return{...e,age:t.payload};case`SET_COUNTRIES`:return{...e,countries:t.payload};case`SET_CURRENCY`:return{...e,currency:t.payload};case`SET_DATE`:return{...e,date:t.payload};case`SET_DATE_RANGE`:return{...e,dateRange:t.payload};case`SET_SEARCH`:return{...e,search:t.payload};case`DIALOG_RESTORE`:return t.payload;default:return e}}var H,U,W,G,K,q,J,Y,X,Z,Q,$=n((()=>{E(),H=t(h(),1),b(),T(),S(),O(),k(),I(),A(),M(),U=D(),{fn:W}=__STORYBOOK_MODULE_TEST__,G={title:`Layouts & Floorplans / FilterBar`,component:C,args:{search:(0,U.jsx)(z,{}),header:(0,U.jsx)(ee,{level:y.H2,size:y.H4,children:`FilterBar`}),filterContainerWidth:`13.125rem`,onFiltersDialogOpen:W()},argTypes:{activeFiltersCount:{control:`number`},search:{control:{disable:!0}},header:{control:{disable:!0}},children:{control:{disable:!0}},filterContainerWidth:{control:`text`},as:{control:{disable:!0}}},tags:[`package:@ui5/webcomponents-react`]},K={render:e=>(0,U.jsxs)(C,{...e,children:[(0,U.jsx)(j,{label:`StepInput`,required:!0,filterKey:`stepInput`,children:(0,U.jsx)(o,{required:!0})}),(0,U.jsx)(j,{label:`RatingIndicator`,filterKey:`ratingIndicator`,children:(0,U.jsx)(P,{})}),(0,U.jsx)(j,{label:`MultiInput`,active:!0,filterKey:`multiInput`,children:(0,U.jsx)(u,{tokens:(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(p,{text:`Argentina`,selected:!0}),(0,U.jsx)(p,{text:`Bulgaria`}),(0,U.jsx)(p,{text:`England`}),(0,U.jsx)(p,{text:`Finland`})]})})}),(0,U.jsx)(j,{label:`Input`,filterKey:`input`,children:(0,U.jsx)(z,{placeholder:`Placeholder`})}),(0,U.jsx)(j,{label:`Switch`,filterKey:`switch`,children:(0,U.jsx)(R,{})}),(0,U.jsx)(j,{label:`SELECT w/ initial selected`,hiddenInFilterBar:!0,filterKey:`selectInitialSelected`,children:(0,U.jsxs)(s,{children:[(0,U.jsx)(N,{children:`Option 1`}),(0,U.jsx)(N,{selected:!0,children:`Option 2`}),(0,U.jsx)(N,{children:`Option 3`}),(0,U.jsx)(N,{children:`Option 4`})]})}),(0,U.jsx)(j,{label:`SELECT w/o initial selected`,filterKey:`selectNoInitialSelected`,children:(0,U.jsxs)(s,{children:[(0,U.jsx)(N,{"data-key":`Test 1`,selected:!0,icon:`add`,children:`Test 1`}),(0,U.jsx)(N,{"data-key":`Test 2`,icon:`add`,children:`Test 2`}),(0,U.jsx)(N,{"data-key":`Test 3`,icon:`add`,children:`Test 3`}),(0,U.jsx)(N,{"data-key":`Test 4`,icon:`add`,children:`Test 4`}),(0,U.jsx)(N,{"data-key":`Test 5`,icon:`add`,children:`Test 5`})]})}),(0,U.jsx)(j,{label:`MultiBox w/ initial selected`,groupName:`Group 1`,filterKey:`multiBoxInitialSelected`,children:(0,U.jsxs)(f,{children:[(0,U.jsx)(g,{text:`MultiComboBoxItem 1`}),(0,U.jsx)(g,{selected:!0,text:`MultiComboBoxItem 2`}),(0,U.jsx)(g,{text:`MultiComboBoxItem 3`}),(0,U.jsx)(g,{selected:!0,text:`MultiComboBoxItem 4`})]})}),(0,U.jsx)(j,{label:`ComboBox w/o initial selected`,groupName:`Group 2`,filterKey:`comboBoxNoInitialSelected`,children:(0,U.jsxs)(c,{children:[(0,U.jsx)(i,{text:`ComboBoxItem 1`}),(0,U.jsx)(i,{text:`ComboBoxItem 2`}),(0,U.jsx)(i,{text:`ComboBoxItem 3`}),(0,U.jsx)(i,{text:`ComboBoxItem 4`})]})}),(0,U.jsx)(j,{label:`Date Picker`,groupName:`Group 2`,filterKey:`datePicker`,children:(0,U.jsx)(d,{style:{minWidth:`auto`}})})]})},q={age:37,countries:{},currency:`USD`,date:``,dateRange:``,search:``},J={render:()=>{let[e,t]=(0,H.useReducer)(V,q),[n,i]=(0,H.useState)(new Set([`age`,`countries`])),{age:a,countries:c,currency:u,date:p,dateRange:m,search:h}=e,v=(0,H.useRef)(void 0);return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(C,{showResetButton:!0,search:(0,U.jsx)(z,{onInput:e=>{t({type:`SET_SEARCH`,payload:e.target.value})}}),onRestore:e=>{let n=e.selectedFilterKeys;t({type:`DIALOG_RESTORE`,payload:v.current}),i(new Set(n))},onFiltersDialogOpen:()=>{v.current=e},onFiltersDialogSelectionChange:e=>{let t=e.selectedFilterKeys;i(new Set(t))},children:[(0,U.jsx)(j,{filterKey:`age`,label:`Age`,active:!!a,required:!0,children:(0,U.jsx)(o,{value:a,onChange:e=>{t({type:`SET_AGE`,payload:e.target.value})},required:!0})}),(0,U.jsx)(j,{filterKey:`countries`,label:`Countries`,active:Object.keys(c).length>0,hiddenInFilterBar:!n.has(`countries`),children:(0,U.jsxs)(f,{onSelectionChange:e=>{t({type:`SET_COUNTRIES`,payload:e.detail.items.reduce((e,t)=>({...e,[t.getAttribute(`text`).toLowerCase()]:!0}),{})})},children:[(0,U.jsx)(g,{text:`Argentina`,selected:c.argentina}),(0,U.jsx)(g,{text:`Bulgaria`,selected:c.bulgaria}),(0,U.jsx)(g,{text:`Finland`,selected:c.finland}),(0,U.jsx)(g,{text:`Germany`,selected:c.germany}),(0,U.jsx)(g,{text:`Ireland`,selected:c.ireland}),(0,U.jsx)(g,{text:`Ukraine`,selected:c.ukraine}),(0,U.jsx)(g,{text:`USA`,selected:c.usa})]})}),(0,U.jsx)(j,{filterKey:`currency`,label:`Currency`,active:!!u,hiddenInFilterBar:!n.has(`currency`),children:(0,U.jsxs)(s,{onChange:e=>{t({type:`SET_CURRENCY`,payload:e.detail.selectedOption.textContent})},children:[(0,U.jsx)(N,{additionalText:`€`,selected:u===`EUR`,children:`EUR`}),(0,U.jsx)(N,{additionalText:`$`,selected:u===`USD`,children:`USD`}),(0,U.jsx)(N,{additionalText:`£`,selected:u===`GBP`,children:`GBP`}),(0,U.jsx)(N,{additionalText:`₺`,selected:u===`TRY`,children:`TRY`}),(0,U.jsx)(N,{additionalText:`¥`,selected:u===`JPY`,children:`JPY`})]})}),(0,U.jsx)(j,{filterKey:`date`,label:`Date`,active:!!p,hiddenInFilterBar:!n.has(`date`),children:(0,U.jsx)(l,{value:p,onChange:e=>{e.detail.valid&&t({type:`SET_DATE`,payload:e.detail.value})},style:{minWidth:`auto`}})}),(0,U.jsx)(j,{filterKey:`date-range`,label:`Date Range`,active:!!m,hiddenInFilterBar:!n.has(`date-range`),children:(0,U.jsx)(d,{value:m,onChange:e=>{e.detail.valid&&t({type:`SET_DATE_RANGE`,payload:e.detail.value})},style:{minWidth:`auto`}})})]}),(0,U.jsxs)(_,{direction:x.Column,children:[(0,U.jsxs)(_,{children:[(0,U.jsx)(L,{showColon:!0,children:`Search`}),(0,U.jsx)(r,{children:h})]}),(0,U.jsxs)(_,{children:[(0,U.jsx)(L,{showColon:!0,children:`Age`}),(0,U.jsx)(r,{children:a})]}),(0,U.jsxs)(_,{children:[(0,U.jsx)(L,{showColon:!0,children:`Countries`}),(0,U.jsx)(r,{children:JSON.stringify(c)})]}),(0,U.jsxs)(_,{children:[(0,U.jsx)(L,{showColon:!0,children:`Currency`}),(0,U.jsx)(r,{children:u})]}),(0,U.jsxs)(_,{children:[(0,U.jsx)(L,{showColon:!0,children:`Date`}),(0,U.jsx)(r,{children:p})]}),(0,U.jsxs)(_,{children:[(0,U.jsx)(L,{showColon:!0,children:`Date Range`}),(0,U.jsx)(r,{children:m})]}),(0,U.jsx)(`hr`,{style:{width:`100%`}}),(0,U.jsxs)(_,{children:[(0,U.jsx)(L,{showColon:!0,children:`Visible Filters`}),(0,U.jsx)(r,{children:Array.from(n).join(`, `)})]})]})]})}},Y={name:`In DynamicPage`,render:e=>(0,U.jsx)(a,{style:{height:`800px`,position:`relative`,zIndex:0},titleArea:(0,U.jsx)(m,{style:{minHeight:`0px`},heading:(0,U.jsxs)(w,{onClick:e=>{e.stopPropagation()},children:[(0,U.jsx)(v,{children:`Variant 1`}),(0,U.jsx)(v,{selected:!0,children:`Variant 2`})]}),snappedHeading:(0,U.jsxs)(w,{onClick:e=>{e.stopPropagation()},children:[(0,U.jsx)(v,{children:`Variant 1`}),(0,U.jsx)(v,{selected:!0,children:`Variant 2`})]})}),headerArea:(0,U.jsx)(F,{children:(0,U.jsxs)(C,{...e,hideToolbar:!0,children:[(0,U.jsx)(j,{filterKey:`StepInput`,label:`StepInput`,children:(0,U.jsx)(o,{})}),(0,U.jsx)(j,{filterKey:`MultiInput`,label:`MultiInput`,active:!0,required:!0,children:(0,U.jsx)(u,{required:!0,tokens:(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(p,{text:`Argentina`,selected:!0}),(0,U.jsx)(p,{text:`Bulgaria`}),(0,U.jsx)(p,{text:`England`}),(0,U.jsx)(p,{text:`Finland`})]})})}),(0,U.jsx)(j,{filterKey:`Input`,label:`Input`,children:(0,U.jsx)(z,{placeholder:`Placeholder`})}),(0,U.jsx)(j,{filterKey:`Switch`,label:`Switch`,hiddenInFilterBar:!0,children:(0,U.jsx)(R,{})}),(0,U.jsx)(j,{filterKey:`select-init-selected`,label:`SELECT w/ initial selected`,hiddenInFilterBar:!0,children:(0,U.jsxs)(s,{children:[(0,U.jsx)(N,{children:`Option 1`}),(0,U.jsx)(N,{selected:!0,children:`Option 2`}),(0,U.jsx)(N,{children:`Option 3`}),(0,U.jsx)(N,{children:`Option 4`})]})}),(0,U.jsx)(j,{filterKey:`select-not-selected`,label:`SELECT w/o initial selected`,hiddenInFilterBar:!0,children:(0,U.jsxs)(s,{children:[(0,U.jsx)(N,{"data-key":`Test 1`,selected:!0,icon:`add`,children:`Test 1`}),(0,U.jsx)(N,{"data-key":`Test 2`,icon:`add`,children:`Test 2`}),(0,U.jsx)(N,{"data-key":`Test 3`,icon:`add`,children:`Test 3`}),(0,U.jsx)(N,{"data-key":`Test 4`,icon:`add`,children:`Test 4`}),(0,U.jsx)(N,{"data-key":`Test 5`,icon:`add`,children:`Test 5`})]})}),(0,U.jsx)(j,{filterKey:`mcb-selected`,label:`MultBox w/ initial selected`,groupName:`Group 1`,hiddenInFilterBar:!0,children:(0,U.jsxs)(f,{children:[(0,U.jsx)(g,{text:`MultiComboBoxItem 1`}),(0,U.jsx)(g,{selected:!0,text:`MultiComboBoxItem 2`}),(0,U.jsx)(g,{text:`MultiComboBoxItem 3`}),(0,U.jsx)(g,{selected:!0,text:`MultiComboBoxItem 4`})]})}),(0,U.jsx)(j,{filterKey:`cb-not-selected`,label:`ComboBox w/o initial selected`,groupName:`Group 2`,hiddenInFilterBar:!0,children:(0,U.jsxs)(c,{children:[(0,U.jsx)(i,{text:`ComboBoxItem 1`}),(0,U.jsx)(i,{text:`ComboBoxItem 2`}),(0,U.jsx)(i,{text:`ComboBoxItem 3`}),(0,U.jsx)(i,{text:`ComboBoxItem 4`})]})}),(0,U.jsx)(j,{filterKey:`date-picker`,label:`Date Picker`,groupName:`Group 2`,children:(0,U.jsx)(d,{style:{minWidth:`auto`}})})]})}),children:(0,U.jsx)(`div`,{style:{background:`cadetblue`,height:`200px`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,U.jsx)(r,{style:{color:`white`},children:`Content`})})})},X={render(e){let t=(0,H.useId)(),[n,r]=(0,H.useState)({0:!0,1:!0,2:!0,3:!0,5:!0}),[i,a]=(0,H.useState)([`0`,`1`,`2`,`3`,`4`,`5`]),c=e=>{a(e.detail.reorderedFilterKeys),r(e.detail.selectedFilterKeys.reduce((e,t)=>(e[t]=!0,e),{}))};return(0,U.jsx)(C,{...e,enableReordering:!0,showResetButton:!0,onFiltersDialogSave:c,children:i.map(e=>{let r=!n[e];switch(e){case`0`:return(0,U.jsx)(j,{filterKey:`0`,label:`StepInput`,required:!0,children:(0,U.jsx)(o,{required:!0})},`${t}-0`);case`1`:return(0,U.jsx)(j,{filterKey:`1`,label:`RatingIndicator`,hiddenInFilterBar:r,children:(0,U.jsx)(P,{})},`${t}-1`);case`2`:return(0,U.jsx)(j,{filterKey:`2`,label:`MultiInput`,active:!0,hiddenInFilterBar:r,children:(0,U.jsx)(u,{tokens:(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(p,{text:`Argentina`,selected:!0}),(0,U.jsx)(p,{text:`Bulgaria`}),(0,U.jsx)(p,{text:`England`}),(0,U.jsx)(p,{text:`Finland`})]})})},`${t}-2`);case`3`:return(0,U.jsx)(j,{filterKey:`3`,label:`Input`,hiddenInFilterBar:r,children:(0,U.jsx)(z,{placeholder:`Placeholder`})},`${t}-3`);case`4`:return(0,U.jsx)(j,{filterKey:`4`,label:`Switch`,hiddenInFilterBar:r,children:(0,U.jsx)(R,{})},`${t}-4`);case`5`:return(0,U.jsx)(j,{filterKey:`5`,label:`SELECT w/ initial selected`,hiddenInFilterBar:r,children:(0,U.jsxs)(s,{children:[(0,U.jsx)(N,{children:`Option 1`}),(0,U.jsx)(N,{selected:!0,children:`Option 2`}),(0,U.jsx)(N,{children:`Option 3`}),(0,U.jsx)(N,{children:`Option 4`})]})},`${t}-5`);default:return null}})})}},Z={parameters:{docs:{source:{type:`code`,transform:()=>`
        const InputEventOrigin = (props) => {
  const [origin, setOrigin] = useState("");

  const handleInput = (e) => {
    if (!!e.currentTarget.parentElement.dataset.inFilterBar) {
      setOrigin("FilterBar");
    } else {
      setOrigin("Filters Dialog");
    }
  };

  return (
    <>
      <FilterBar {...props}>
        <FilterGroupItem filterKey="input" label="Input">
          <Input onInput={handleInput} />
        </FilterGroupItem>
      </FilterBar>
      <br />
      <Label>Last fired input event origin:</Label>
      <Text>{origin}</Text>
    </>
  );
};

        `}}},render(e){let[t,n]=(0,H.useState)(``),i=e=>{e.currentTarget.parentElement.dataset.inFilterBar?n(`FilterBar`):n(`Filters Dialog`)};return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(C,{...e,children:(0,U.jsx)(j,{filterKey:`input`,label:`Input`,children:(0,U.jsx)(z,{onInput:i})})}),(0,U.jsx)(`br`,{}),(0,U.jsx)(L,{children:`Last fired input event origin:`}),(0,U.jsx)(r,{children:t})]})}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <FilterBar {...args}>
        <FilterGroupItem label="StepInput" required filterKey="stepInput">
          <StepInput required />
        </FilterGroupItem>
        <FilterGroupItem label="RatingIndicator" filterKey="ratingIndicator">
          <RatingIndicator />
        </FilterGroupItem>
        <FilterGroupItem label="MultiInput" active filterKey="multiInput">
          <MultiInput tokens={<>
                <Token text="Argentina" selected />
                <Token text="Bulgaria" />
                <Token text="England" />
                <Token text="Finland" />
              </>} />
        </FilterGroupItem>
        <FilterGroupItem label="Input" filterKey="input">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
        <FilterGroupItem label="Switch" filterKey="switch">
          <Switch />
        </FilterGroupItem>
        <FilterGroupItem label="SELECT w/ initial selected" hiddenInFilterBar filterKey="selectInitialSelected">
          <Select>
            <Option>Option 1</Option>
            <Option selected>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
          </Select>
        </FilterGroupItem>
        <FilterGroupItem label="SELECT w/o initial selected" filterKey="selectNoInitialSelected">
          <Select>
            <Option data-key="Test 1" selected icon="add">
              Test 1
            </Option>
            <Option data-key="Test 2" icon="add">
              Test 2
            </Option>
            <Option data-key="Test 3" icon="add">
              Test 3
            </Option>
            <Option data-key="Test 4" icon="add">
              Test 4
            </Option>
            <Option data-key="Test 5" icon="add">
              Test 5
            </Option>
          </Select>
        </FilterGroupItem>
        <FilterGroupItem label="MultiBox w/ initial selected" groupName="Group 1" filterKey="multiBoxInitialSelected">
          <MultiComboBox>
            <MultiComboBoxItem text="MultiComboBoxItem 1" />
            <MultiComboBoxItem selected text="MultiComboBoxItem 2" />
            <MultiComboBoxItem text="MultiComboBoxItem 3" />
            <MultiComboBoxItem selected text="MultiComboBoxItem 4" />
          </MultiComboBox>
        </FilterGroupItem>
        <FilterGroupItem label="ComboBox w/o initial selected" groupName="Group 2" filterKey="comboBoxNoInitialSelected">
          <ComboBox>
            <ComboBoxItem text="ComboBoxItem 1" />
            <ComboBoxItem text="ComboBoxItem 2" />
            <ComboBoxItem text="ComboBoxItem 3" />
            <ComboBoxItem text="ComboBoxItem 4" />
          </ComboBox>
        </FilterGroupItem>
        <FilterGroupItem label="Date Picker" groupName="Group 2" filterKey="datePicker">
          <DateRangePicker style={{
          minWidth: 'auto'
        }} />
        </FilterGroupItem>
      </FilterBar>;
  }
}`,...K.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [visibleFilters, setVisibleFilters] = useState(new Set(['age', 'countries']));
    const {
      age,
      countries,
      currency,
      date,
      dateRange,
      search
    } = state;
    const prevDialogOpenState = useRef(undefined);
    const handleSearch = e => {
      dispatch({
        type: 'SET_SEARCH',
        payload: e.target.value
      });
    };
    const handleAgeChange = e => {
      dispatch({
        type: 'SET_AGE',
        payload: e.target.value
      });
    };
    const handleCountriesChange = e => {
      const newCountries = e.detail.items.reduce((acc, cur) => {
        return {
          ...acc,
          [cur.getAttribute('text').toLowerCase()]: true
        };
      }, {});
      dispatch({
        type: 'SET_COUNTRIES',
        payload: newCountries
      });
    };
    const handleCurrencyChange = e => {
      dispatch({
        type: 'SET_CURRENCY',
        payload: e.detail.selectedOption.textContent
      });
    };
    const handleDateChange = e => {
      if (e.detail.valid) {
        dispatch({
          type: 'SET_DATE',
          payload: e.detail.value
        });
      }
    };
    const handleDateRangeChange = e => {
      if (e.detail.valid) {
        dispatch({
          type: 'SET_DATE_RANGE',
          payload: e.detail.value
        });
      }
    };
    const handleFiltersDialogOpen = () => {
      prevDialogOpenState.current = state;
    };
    const handleRestore: FilterBarPropTypes['onRestore'] = payload => {
      const prevDialogOpenVisibleFilters = payload.selectedFilterKeys;
      dispatch({
        type: 'DIALOG_RESTORE',
        payload: prevDialogOpenState.current
      });
      setVisibleFilters(new Set(prevDialogOpenVisibleFilters));
    };
    const handleFiltersDialogSelectionChange: FilterBarPropTypes['onFiltersDialogSelectionChange'] = payload => {
      const visibleFilterKeys = payload.selectedFilterKeys;
      setVisibleFilters(new Set(visibleFilterKeys));
    };
    return <>
        <FilterBar showResetButton search={<Input onInput={handleSearch} />} onRestore={handleRestore} onFiltersDialogOpen={handleFiltersDialogOpen} onFiltersDialogSelectionChange={handleFiltersDialogSelectionChange}>
          <FilterGroupItem filterKey="age" label="Age" active={!!age} required>
            <StepInput value={age} onChange={handleAgeChange} required />
          </FilterGroupItem>
          <FilterGroupItem filterKey="countries" label="Countries" active={Object.keys(countries).length > 0} hiddenInFilterBar={!visibleFilters.has('countries')}>
            <MultiComboBox onSelectionChange={handleCountriesChange}>
              <MultiComboBoxItem text="Argentina" selected={countries.argentina} />
              <MultiComboBoxItem text="Bulgaria" selected={countries.bulgaria} />
              <MultiComboBoxItem text="Finland" selected={countries.finland} />
              <MultiComboBoxItem text="Germany" selected={countries.germany} />
              <MultiComboBoxItem text="Ireland" selected={countries.ireland} />
              <MultiComboBoxItem text="Ukraine" selected={countries.ukraine} />
              <MultiComboBoxItem text="USA" selected={countries.usa} />
            </MultiComboBox>
          </FilterGroupItem>
          <FilterGroupItem filterKey="currency" label="Currency" active={!!currency} hiddenInFilterBar={!visibleFilters.has('currency')}>
            <Select onChange={handleCurrencyChange}>
              <Option additionalText="€" selected={currency === 'EUR'}>
                EUR
              </Option>
              <Option additionalText="$" selected={currency === 'USD'}>
                USD
              </Option>
              <Option additionalText="£" selected={currency === 'GBP'}>
                GBP
              </Option>
              <Option additionalText="₺" selected={currency === 'TRY'}>
                TRY
              </Option>
              <Option additionalText="¥" selected={currency === 'JPY'}>
                JPY
              </Option>
            </Select>
          </FilterGroupItem>
          <FilterGroupItem filterKey="date" label="Date" active={!!date} hiddenInFilterBar={!visibleFilters.has('date')}>
            <DatePicker value={date} onChange={handleDateChange} style={{
            minWidth: 'auto'
          }} />
          </FilterGroupItem>
          <FilterGroupItem filterKey="date-range" label="Date Range" active={!!dateRange} hiddenInFilterBar={!visibleFilters.has('date-range')}>
            <DateRangePicker value={dateRange} onChange={handleDateRangeChange} style={{
            minWidth: 'auto'
          }} />
          </FilterGroupItem>
        </FilterBar>
        <FlexBox direction={FlexBoxDirection.Column}>
          <FlexBox>
            <Label showColon>Search</Label>
            <Text>{search}</Text>
          </FlexBox>
          <FlexBox>
            <Label showColon>Age</Label>
            <Text>{age}</Text>
          </FlexBox>
          <FlexBox>
            <Label showColon>Countries</Label>
            <Text>{JSON.stringify(countries)}</Text>
          </FlexBox>
          <FlexBox>
            <Label showColon>Currency</Label>
            <Text>{currency}</Text>
          </FlexBox>
          <FlexBox>
            <Label showColon>Date</Label>
            <Text>{date}</Text>
          </FlexBox>
          <FlexBox>
            <Label showColon>Date Range</Label>
            <Text>{dateRange}</Text>
          </FlexBox>
          <hr style={{
          width: '100%'
        }} />
          <FlexBox>
            <Label showColon>Visible Filters</Label>
            <Text>{Array.from(visibleFilters).join(', ')}</Text>
          </FlexBox>
        </FlexBox>
      </>;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'In DynamicPage',
  render: args => {
    return <DynamicPage style={{
      height: '800px',
      position: 'relative',
      zIndex: 0
    }} titleArea={<DynamicPageTitle style={{
      minHeight: '0px'
    }} heading={<VariantManagement onClick={e => {
      e.stopPropagation();
    }}>
                <VariantItem>Variant 1</VariantItem>
                <VariantItem selected>Variant 2</VariantItem>
              </VariantManagement>} snappedHeading={<VariantManagement onClick={e => {
      e.stopPropagation();
    }}>
                <VariantItem>Variant 1</VariantItem>
                <VariantItem selected>Variant 2</VariantItem>
              </VariantManagement>} />} headerArea={<DynamicPageHeader>
            <FilterBar {...args} hideToolbar>
              <FilterGroupItem filterKey="StepInput" label="StepInput">
                <StepInput />
              </FilterGroupItem>
              <FilterGroupItem filterKey="MultiInput" label="MultiInput" active required>
                <MultiInput required tokens={<>
                      <Token text="Argentina" selected />
                      <Token text="Bulgaria" />
                      <Token text="England" />
                      <Token text="Finland" />
                    </>} />
              </FilterGroupItem>
              <FilterGroupItem filterKey="Input" label="Input">
                <Input placeholder="Placeholder" />
              </FilterGroupItem>
              <FilterGroupItem filterKey="Switch" label="Switch" hiddenInFilterBar>
                <Switch />
              </FilterGroupItem>
              <FilterGroupItem filterKey="select-init-selected" label="SELECT w/ initial selected" hiddenInFilterBar>
                <Select>
                  <Option>Option 1</Option>
                  <Option selected>Option 2</Option>
                  <Option>Option 3</Option>
                  <Option>Option 4</Option>
                </Select>
              </FilterGroupItem>
              <FilterGroupItem filterKey="select-not-selected" label="SELECT w/o initial selected" hiddenInFilterBar>
                <Select>
                  <Option data-key="Test 1" selected icon="add">
                    Test 1
                  </Option>
                  <Option data-key="Test 2" icon="add">
                    Test 2
                  </Option>
                  <Option data-key="Test 3" icon="add">
                    Test 3
                  </Option>
                  <Option data-key="Test 4" icon="add">
                    Test 4
                  </Option>
                  <Option data-key="Test 5" icon="add">
                    Test 5
                  </Option>
                </Select>
              </FilterGroupItem>
              <FilterGroupItem filterKey="mcb-selected" label="MultBox w/ initial selected" groupName="Group 1" hiddenInFilterBar>
                <MultiComboBox>
                  <MultiComboBoxItem text="MultiComboBoxItem 1" />
                  <MultiComboBoxItem selected text="MultiComboBoxItem 2" />
                  <MultiComboBoxItem text="MultiComboBoxItem 3" />
                  <MultiComboBoxItem selected text="MultiComboBoxItem 4" />
                </MultiComboBox>
              </FilterGroupItem>
              <FilterGroupItem filterKey="cb-not-selected" label="ComboBox w/o initial selected" groupName="Group 2" hiddenInFilterBar>
                <ComboBox>
                  <ComboBoxItem text="ComboBoxItem 1" />
                  <ComboBoxItem text="ComboBoxItem 2" />
                  <ComboBoxItem text="ComboBoxItem 3" />
                  <ComboBoxItem text="ComboBoxItem 4" />
                </ComboBox>
              </FilterGroupItem>
              <FilterGroupItem filterKey="date-picker" label="Date Picker" groupName="Group 2">
                <DateRangePicker style={{
            minWidth: 'auto'
          }} />
              </FilterGroupItem>
            </FilterBar>
          </DynamicPageHeader>}>
        <div style={{
        background: 'cadetblue',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
          <Text style={{
          color: 'white'
        }}>Content</Text>
        </div>
      </DynamicPage>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render(args) {
    const uniqueId = useId();
    const [visibleChildrenByKey, setVisibleChildrenByKey] = useState<Record<string, boolean>>({
      '0': true,
      '1': true,
      '2': true,
      '3': true,
      '5': true
    });
    const [orderedFilterKeys, setOrderedFilterKeys] = useState(['0', '1', '2', '3', '4', '5']);
    const handleFiltersDialogSave: FilterBarPropTypes['onFiltersDialogSave'] = e => {
      setOrderedFilterKeys(e.detail.reorderedFilterKeys);
      setVisibleChildrenByKey(e.detail.selectedFilterKeys.reduce((acc, cur) => {
        acc[cur] = true;
        return acc;
      }, {}));
    };
    return <FilterBar {...args} enableReordering showResetButton onFiltersDialogSave={handleFiltersDialogSave}>
        {orderedFilterKeys.map(filterKey => {
        const isHidden = !visibleChildrenByKey[filterKey];
        switch (filterKey) {
          case '0':
            return <FilterGroupItem filterKey="0" key={\`\${uniqueId}-0\`} label="StepInput" required>
                  <StepInput required />
                </FilterGroupItem>;
          case '1':
            return <FilterGroupItem filterKey="1" key={\`\${uniqueId}-1\`} label="RatingIndicator" hiddenInFilterBar={isHidden}>
                  <RatingIndicator />
                </FilterGroupItem>;
          case '2':
            return <FilterGroupItem filterKey="2" key={\`\${uniqueId}-2\`} label="MultiInput" active hiddenInFilterBar={isHidden}>
                  <MultiInput tokens={<>
                        <Token text="Argentina" selected />
                        <Token text="Bulgaria" />
                        <Token text="England" />
                        <Token text="Finland" />
                      </>} />
                </FilterGroupItem>;
          case '3':
            return <FilterGroupItem filterKey="3" key={\`\${uniqueId}-3\`} label="Input" hiddenInFilterBar={isHidden}>
                  <Input placeholder="Placeholder" />
                </FilterGroupItem>;
          case '4':
            return <FilterGroupItem filterKey="4" key={\`\${uniqueId}-4\`} label="Switch" hiddenInFilterBar={isHidden}>
                  <Switch />
                </FilterGroupItem>;
          case '5':
            return <FilterGroupItem filterKey="5" key={\`\${uniqueId}-5\`} label="SELECT w/ initial selected" hiddenInFilterBar={isHidden}>
                  <Select>
                    <Option>Option 1</Option>
                    <Option selected>Option 2</Option>
                    <Option>Option 3</Option>
                    <Option>Option 4</Option>
                  </Select>
                </FilterGroupItem>;
          default:
            return null;
        }
      })}
      </FilterBar>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code',
        transform: () => \`
        const InputEventOrigin = (props) => {
  const [origin, setOrigin] = useState("");

  const handleInput = (e) => {
    if (!!e.currentTarget.parentElement.dataset.inFilterBar) {
      setOrigin("FilterBar");
    } else {
      setOrigin("Filters Dialog");
    }
  };

  return (
    <>
      <FilterBar {...props}>
        <FilterGroupItem filterKey="input" label="Input">
          <Input onInput={handleInput} />
        </FilterGroupItem>
      </FilterBar>
      <br />
      <Label>Last fired input event origin:</Label>
      <Text>{origin}</Text>
    </>
  );
};

        \`
      }
    }
  },
  render(args) {
    const [origin, setOrigin] = useState('');
    const handleInput = e => {
      if (e.currentTarget.parentElement.dataset.inFilterBar) {
        setOrigin('FilterBar');
      } else {
        setOrigin('Filters Dialog');
      }
    };
    return <>
        <FilterBar {...args}>
          <FilterGroupItem filterKey="input" label="Input">
            <Input onInput={handleInput} />
          </FilterGroupItem>
        </FilterBar>
        <br />
        <Label>Last fired input event origin:</Label>
        <Text>{origin}</Text>
      </>;
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`WithLogic`,`InDynamicPage`,`WithReordering`,`IdentifyInputEventOrigin`]}));$();export{K as Default,Z as IdentifyInputEventOrigin,Y as InDynamicPage,J as WithLogic,X as WithReordering,Q as __namedExportsOrder,G as default,$ as n,B as t};