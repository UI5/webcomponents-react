import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{Bf as r,Bl as i,Ga as a,Ha as o,Jd as s,Ji as c,Ka as l,Mo as u,Ua as d,Va as f,Vl as p,Wa as m,Xi as h,Xl as g,Yd as _,Yi as v,Zl as y,_u as b,b as x,cu as S,et as C,f as w,gu as T,ip as E,jo as D,lh as O,lu as k,p as A,qi as j,rp as M,tt as N,vm as P,x as F,ym as I,zf as L,zg as R}from"./iframe-BFhYY9WH.js";var z=e({Default:()=>U,WithCustomValidation:()=>W,WithFilterBarImplementation:()=>G,__namedExportsOrder:()=>K,default:()=>H}),B,V,H,U,W,G,K,q=n((()=>{r(),E(),P(),B=t(R(),1),u(),l(),m(),o(),b(),h(),c(),y(),p(),_(),N(),k(),F(),A(),V=O(),H={title:`Inputs / VariantManagement`,component:w,args:{placement:L.Bottom,level:M.H4},tags:[`package:@ui5/webcomponents-react`]},U={render:e=>(0,V.jsxs)(w,{...e,children:[(0,V.jsx)(x,{children:`Default VariantItem`}),(0,V.jsx)(x,{selected:!0,children:`Selected`}),(0,V.jsx)(x,{author:`SAP`,children:`Author`}),(0,V.jsx)(x,{favorite:!0,children:`Favorite`}),(0,V.jsx)(x,{isDefault:!0,children:`IsDefault`}),(0,V.jsx)(x,{favorite:!0,labelReadOnly:!0,children:`Favorite & labelReadOnly`}),(0,V.jsx)(x,{applyAutomatically:!0,children:`ApplyAutomatically`}),(0,V.jsx)(x,{applyAutomatically:!0,applyAutomaticallyText:`Describe your exceptions that deviate from the standard behavior here.`,children:`applyAutomatically & applyAutomaticallyText`}),(0,V.jsx)(x,{readOnly:!0,children:`ReadOnly`}),(0,V.jsx)(x,{global:!0,children:`Global`}),(0,V.jsx)(x,{global:!0,readOnly:!0,children:`Global & readOnly`}),(0,V.jsx)(x,{global:!0,children:`Not deletable -> global`}),(0,V.jsx)(x,{hideDelete:!0,children:`Not deletable -> hideDelete`}),(0,V.jsx)(x,{hideDelete:!1,global:!0,children:`Deletable -> hideDelete: false, global: true`})]})},W={render:({selectedByIndex:e=1})=>{let[t,n]=(0,B.useState)(void 0),[r,i]=(0,B.useState)(void 0),[a,o]=(0,B.useState)({1:`Only alphanumeric chars in Save View input`,2:`Max 12 chars`});return(0,V.jsxs)(w,{onSaveAs:e=>{o(t=>({...t,[e.detail[`data-id`]]:e.detail.children}))},onSaveManageViews:e=>{let t=e.detail.updatedVariants.find(e=>e[`data-custom-manage-views`]);!r&&t&&o(e=>({...e,[t[`data-id`]]:t.children}))},onManageViewsCancel:()=>{i(void 0)},onSaveViewCancel:()=>{n(void 0)},children:[(0,V.jsx)(x,{"data-id":1,selected:e===0,saveViewInputProps:{valueState:t,valueStateMessage:t?(0,V.jsx)(`div`,{children:`Only alphanumeric and space characters allowed!`}):void 0,onInput:e=>{e.target.value.match(/^[a-z0-9\s]+$/i)?(e.isInvalid=!1,n(void 0)):(e.isInvalid=!0,n(I.Negative))},"data-testid":`alphanumeric`},children:a[1]}),(0,V.jsx)(x,{"data-custom-manage-views":!0,"data-id":2,selected:e===1,manageViewsInputProps:{valueState:r,valueStateMessage:r?(0,V.jsx)(`div`,{children:`No more than 12 characters allowed!`}):void 0,onInput:e=>{e.target.value.length>12?(e.isInvalid=!0,i(I.Negative)):(e.isInvalid=!1,i(void 0))},"data-testid":`12chars`},children:a[2]})]})}},G={name:`in FilterBar`,render:()=>{let[e,t]=(0,B.useState)(`Standard`),[n,r]=(0,B.useState)(`Standard`),[o,c]=(0,B.useState)([]),[l,u]=(0,B.useState)(!1),[p,m]=(0,B.useState)(!1),h=(0,B.useRef)({Standard:{selectedCountry:`Indonesia`,date:``,selectedCodes:{}}}),[_,y]=(0,B.useReducer)((e,t)=>{let{payload:n,type:r}=t;switch(m(!0),r){case`selectedCountry`:return{...e,selectedCountry:n};case`date`:return{...e,date:n};case`selectedCodes`:return{...e,selectedCodes:n};case`changeVariant`:return n;default:return console.warn(`Unknown action type!`),e}},h.current.Standard),{selectedCountry:b,date:E,selectedCodes:O}=_;return(0,B.useEffect)(()=>{if(p){let t=Object.entries(h.current[e]).some(([e,t])=>{if(e===`selectedCodes`){let e=Object.keys(_.selectedCodes).length;return Object.keys(t).length===e?Object.entries(_.selectedCodes).some(([e,n])=>t?.[e]!==n):!0}return _[e]!==t});m(!1),u(t)}},[p,e]),(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(C,{header:(0,V.jsxs)(w,{hideApplyAutomatically:!0,dirtyState:l,onSaveAs:e=>{let{variantItem:n,selected:i,readOnly:a,labelReadOnly:o,...s}=e.detail;s.isDefault&&r(s.children),c(e=>[...e,{...s,author:`Current User`}]),h.current[s.children]=_,t(s.children),u(!1)},onSave:e=>{let{variantItem:t,selected:n,...r}=e.detail;h.current[r.children]=_,u(!1)},onSelect:e=>{let n=e.detail.selectedVariant.children;y({type:`changeVariant`,payload:h.current[n]}),t(n)},onSaveManageViews:e=>{let{deletedVariants:n,updatedVariants:i}=e.detail;n.forEach(e=>{delete h.current[e.children],c(t=>t.filter(t=>t.children!==e.children))}),i.forEach(e=>{let{variantItem:n,selected:i,...a}=e;h.current[e.children]=a,e.isDefault&&r(e.children),e.selected&&t(e.children),c(t=>t.map(t=>t.children===e.prevVariant.children?a:t))})},children:[(0,V.jsx)(x,{selected:e===`Standard`,global:!0,isDefault:n===`Standard`,author:`SAP`,readOnly:!0,labelReadOnly:!0,children:`Standard`}),o.map(t=>(0,V.jsx)(x,{...t,selected:e===t.children,isDefault:n===t.children,children:t.children},t.children))]}),children:[(0,V.jsx)(S,{label:`Countries`,filterKey:0,children:(0,V.jsxs)(i,{onChange:e=>{let{selectedOption:t}=e.detail;y({type:`selectedCountry`,payload:t.textContent})},children:[(0,V.jsx)(g,{selected:b===`Indonesia`,children:`Indonesia`}),(0,V.jsx)(g,{selected:b===`Costa Rica`,children:`Costa Rica`}),(0,V.jsx)(g,{selected:b===`Slovakia`,children:`Slovakia`}),(0,V.jsx)(g,{selected:b===`Iceland`,children:`Iceland`}),(0,V.jsx)(g,{selected:b===`Malta`,children:`Malta`}),(0,V.jsx)(g,{selected:b===`Guyana`,children:`Guyana`}),(0,V.jsx)(g,{selected:b===`Spain`,children:`Spain`}),(0,V.jsx)(g,{selected:b===`Austria`,children:`Austria`})]})}),(0,V.jsx)(S,{label:`Date`,filterKey:1,children:(0,V.jsx)(D,{value:E,onChange:e=>{y({type:`date`,payload:e.detail.value})}})}),(0,V.jsx)(S,{label:`Company Code`,filterKey:2,children:(0,V.jsxs)(v,{onSelectionChange:e=>{y({type:`selectedCodes`,payload:e.detail.items.reduce((e,t)=>(e[t.dataset.code]=!0,e),{})})},children:[(0,V.jsx)(j,{text:`001`,selected:O[`001`],"data-code":`001`}),(0,V.jsx)(j,{text:`002`,selected:O[`002`],"data-code":`002`}),(0,V.jsx)(j,{text:`003`,selected:O[`003`],"data-code":`003`}),(0,V.jsx)(j,{text:`004`,selected:O[`004`],"data-code":`004`}),(0,V.jsx)(j,{text:`005`,selected:O[`005`],"data-code":`005`})]})})]}),(0,V.jsxs)(a,{style:{marginBlockStart:`2rem`},layout:`S1 M1 L1 XL1`,labelSpan:`S3 M3 L3 XL3`,children:[(0,V.jsx)(d,{headerText:`Variant`,children:(0,V.jsx)(f,{labelContent:(0,V.jsx)(T,{showColon:!0,children:`Current View`}),children:(0,V.jsx)(s,{children:e})})}),(0,V.jsxs)(d,{headerText:`Filters`,children:[(0,V.jsx)(f,{labelContent:(0,V.jsx)(T,{showColon:!0,children:`Selected Country`}),children:(0,V.jsx)(s,{children:b})}),(0,V.jsx)(f,{labelContent:(0,V.jsx)(T,{showColon:!0,children:`Selected Date`}),children:(0,V.jsx)(s,{children:E})}),(0,V.jsx)(f,{labelContent:(0,V.jsx)(T,{showColon:!0,children:`Selected Company Codes`}),children:(0,V.jsx)(s,{children:Object.keys(O).join(`, `)})})]})]})]})}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <VariantManagement {...args}>
        <VariantItem>Default VariantItem</VariantItem>
        <VariantItem selected>Selected</VariantItem>
        <VariantItem author="SAP">Author</VariantItem>
        <VariantItem favorite>Favorite</VariantItem>
        <VariantItem isDefault>IsDefault</VariantItem>
        <VariantItem favorite labelReadOnly>
          Favorite & labelReadOnly
        </VariantItem>
        <VariantItem applyAutomatically>ApplyAutomatically</VariantItem>
        <VariantItem applyAutomatically applyAutomaticallyText="Describe your exceptions that deviate from the standard behavior here.">
          applyAutomatically & applyAutomaticallyText
        </VariantItem>
        <VariantItem readOnly>ReadOnly</VariantItem>
        <VariantItem global>Global</VariantItem>
        <VariantItem global readOnly>
          Global & readOnly
        </VariantItem>
        <VariantItem global>{\`Not deletable -> global\`}</VariantItem>
        <VariantItem hideDelete>{\`Not deletable -> hideDelete\`}</VariantItem>
        <VariantItem hideDelete={false} global>
          {\`Deletable -> hideDelete: false, global: true\`}
        </VariantItem>
      </VariantManagement>;
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: ({
    selectedByIndex = 1
  }: any) => {
    const [valueStateSaveView, setValueStateSaveView] = useState(undefined);
    const [valueStateManageViews, setValueStateManageViews] = useState(undefined);
    const [values, setValues] = useState({
      1: 'Only alphanumeric chars in Save View input',
      2: 'Max 12 chars'
    });
    const handleSaveViewInput = e => {
      // only allow alphanumeric and space characters
      if (!e.target.value.match(/^[a-z0-9\\s]+$/i)) {
        // mark variant as invalid (prevent internal logic from being applied)
        e.isInvalid = true;
        setValueStateSaveView(ValueState.Negative);
      } else {
        // mark variant as valid again
        e.isInvalid = false;
        setValueStateSaveView(undefined);
      }
    };
    const handleSaveAs = e => {
      setValues(prev => ({
        ...prev,
        [e.detail['data-id']]: e.detail.children
      }));
    };
    const handleManageViewInput = e => {
      // only 12 or fewer characters
      if (e.target.value.length > 12) {
        // mark variant as invalid (prevent internal logic from being applied)
        e.isInvalid = true;
        setValueStateManageViews(ValueState.Negative);
      } else {
        // mark variant as valid again
        e.isInvalid = false;
        setValueStateManageViews(undefined);
      }
    };
    const handleSaveManageViews = e => {
      // if is custom manage view variant and is not in error state, set children to new value
      const isCustomManageViewsItem = e.detail.updatedVariants.find(item => item['data-custom-manage-views']);
      if (!valueStateManageViews && isCustomManageViewsItem) {
        setValues(prev => ({
          ...prev,
          [isCustomManageViewsItem['data-id']]: isCustomManageViewsItem.children
        }));
      }
    };
    // reset value-state if user closes the dialogs without saving (cancel click or ESC press)
    const handleManageViewsCancel = () => {
      setValueStateManageViews(undefined);
    };
    const handleSaveViewCancel = () => {
      setValueStateSaveView(undefined);
    };
    return <VariantManagement onSaveAs={handleSaveAs} onSaveManageViews={handleSaveManageViews} onManageViewsCancel={handleManageViewsCancel} onSaveViewCancel={handleSaveViewCancel}>
        <VariantItem data-id={1} selected={selectedByIndex === 0} saveViewInputProps={{
        valueState: valueStateSaveView,
        valueStateMessage: valueStateSaveView ? <div>Only alphanumeric and space characters allowed!</div> : undefined,
        onInput: handleSaveViewInput,
        // @ts-expect-error: data- attributes are allowed on Input
        'data-testid': 'alphanumeric'
      }}>
          {values[1]}
        </VariantItem>
        <VariantItem data-custom-manage-views data-id={2} selected={selectedByIndex === 1} manageViewsInputProps={{
        valueState: valueStateManageViews,
        valueStateMessage: valueStateManageViews ? <div>No more than 12 characters allowed!</div> : undefined,
        onInput: handleManageViewInput,
        // @ts-expect-error: data- attributes are allowed on Input
        'data-testid': '12chars'
      }}>
          {values[2]}
        </VariantItem>
      </VariantManagement>;
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'in FilterBar',
  render: () => {
    const [selectedVariant, setSelectedVariant] = useState('Standard');
    const [defaultVariant, setDefaultVariant] = useState('Standard');
    const [customVariants, setCustomVariants] = useState<VariantItemPropTypes[]>([]);
    const [isDirty, setIsDirty] = useState(false);
    const [checkIfDiry, setCheckIfDirty] = useState(false);

    // this should be persisted (e.g. by the local storage of the browser or on the server)
    const initialVariantValues = useRef({
      Standard: {
        selectedCountry: 'Indonesia',
        date: '',
        selectedCodes: {}
      }
    });
    const filterReducer = (state, action) => {
      const {
        payload,
        type
      } = action;
      setCheckIfDirty(true);
      switch (type) {
        case 'selectedCountry':
          return {
            ...state,
            selectedCountry: payload
          };
        case 'date':
          return {
            ...state,
            date: payload
          };
        case 'selectedCodes':
          return {
            ...state,
            selectedCodes: payload
          };
        case 'changeVariant':
          return payload;
        default:
          console.warn('Unknown action type!');
          return state;
      }
    };
    const [filters, dispatchFiltersChange] = useReducer(filterReducer, initialVariantValues.current.Standard);
    const {
      selectedCountry,
      date,
      selectedCodes
    } = filters;
    const handleSelectChange = e => {
      const {
        selectedOption
      } = e.detail;
      dispatchFiltersChange({
        type: 'selectedCountry',
        payload: selectedOption.textContent
      });
    };
    const handleDateChange = e => {
      dispatchFiltersChange({
        type: 'date',
        payload: e.detail.value
      });
    };
    const handleSelectedCodesChange = e => {
      dispatchFiltersChange({
        type: 'selectedCodes',
        payload: e.detail.items.reduce((acc, cur) => {
          acc[cur.dataset.code] = true;
          return acc;
        }, {})
      });
    };
    const handleSaveAs = e => {
      const {
        variantItem: _omit,
        selected: _omit2,
        readOnly: _omit3,
        labelReadOnly: _omit4,
        ...variantItemProps
      } = e.detail;
      if (variantItemProps.isDefault) {
        setDefaultVariant(variantItemProps.children);
      }
      setCustomVariants(prev => [...prev, {
        ...variantItemProps,
        author: 'Current User'
      }]);
      initialVariantValues.current[variantItemProps.children] = filters;
      setSelectedVariant(variantItemProps.children);
      setIsDirty(false);
    };
    const handleSave = e => {
      const {
        variantItem: _omit,
        selected: _omit2,
        ...variantItemProps
      } = e.detail;
      initialVariantValues.current[variantItemProps.children] = filters;
      setIsDirty(false);
    };
    const handleSaveManageViews = e => {
      const {
        deletedVariants,
        updatedVariants
      } = e.detail;
      deletedVariants.forEach(variant => {
        delete initialVariantValues.current[variant.children];
        setCustomVariants(prev => prev.filter(item => item.children !== variant.children));
      });
      updatedVariants.forEach(variant => {
        const {
          variantItem: _omit,
          selected: _omit2,
          ...variantItemProps
        } = variant;
        initialVariantValues.current[variant.children] = variantItemProps;
        if (variant.isDefault) {
          setDefaultVariant(variant.children);
        }
        if (variant.selected) {
          setSelectedVariant(variant.children);
        }
        setCustomVariants(prev => {
          return prev.map(item => {
            if (item.children === variant.prevVariant.children) {
              return variantItemProps;
            }
            return item;
          });
        });
      });
    };
    const handleSelect = e => {
      const privateSelectedVariant = e.detail.selectedVariant.children;
      dispatchFiltersChange({
        type: 'changeVariant',
        payload: initialVariantValues.current[privateSelectedVariant]
      });
      setSelectedVariant(privateSelectedVariant);
    };
    useEffect(() => {
      if (checkIfDiry) {
        const hasChanged = Object.entries(initialVariantValues.current[selectedVariant]).some(([key, val]) => {
          if (key === 'selectedCodes') {
            const selectedCodesLength = Object.keys(filters.selectedCodes).length;
            if (Object.keys(val).length !== selectedCodesLength) {
              return true;
            }
            return Object.entries(filters.selectedCodes).some(([code, bool]) => {
              return val?.[code] !== bool;
            });
          }
          return filters[key] !== val;
        });
        setCheckIfDirty(false);
        setIsDirty(hasChanged);
      }
    }, [checkIfDiry, selectedVariant]);
    return <>
        <FilterBar header={<VariantManagement hideApplyAutomatically dirtyState={isDirty} onSaveAs={handleSaveAs} onSave={handleSave} onSelect={handleSelect} onSaveManageViews={handleSaveManageViews}>
              <VariantItem selected={selectedVariant === 'Standard'} global isDefault={defaultVariant === 'Standard'} author="SAP" readOnly labelReadOnly>
                Standard
              </VariantItem>
              {customVariants.map(variantItemProps => {
          return <VariantItem key={variantItemProps.children} {...variantItemProps} selected={selectedVariant === variantItemProps.children} isDefault={defaultVariant === variantItemProps.children}>
                    {variantItemProps.children}
                  </VariantItem>;
        })}
            </VariantManagement>}>
          <FilterGroupItem label="Countries" filterKey={0}>
            <Select onChange={handleSelectChange}>
              <Option selected={selectedCountry === 'Indonesia'}>Indonesia</Option>
              <Option selected={selectedCountry === 'Costa Rica'}>Costa Rica</Option>
              <Option selected={selectedCountry === 'Slovakia'}>Slovakia</Option>
              <Option selected={selectedCountry === 'Iceland'}>Iceland</Option>
              <Option selected={selectedCountry === 'Malta'}>Malta</Option>
              <Option selected={selectedCountry === 'Guyana'}>Guyana</Option>
              <Option selected={selectedCountry === 'Spain'}>Spain</Option>
              <Option selected={selectedCountry === 'Austria'}>Austria</Option>
            </Select>
          </FilterGroupItem>
          <FilterGroupItem label="Date" filterKey={1}>
            <DatePicker value={date} onChange={handleDateChange} />
          </FilterGroupItem>
          <FilterGroupItem label="Company Code" filterKey={2}>
            <MultiComboBox onSelectionChange={handleSelectedCodesChange}>
              <MultiComboBoxItem text="001" selected={selectedCodes['001']} data-code="001" />
              <MultiComboBoxItem text="002" selected={selectedCodes['002']} data-code="002" />
              <MultiComboBoxItem text="003" selected={selectedCodes['003']} data-code="003" />
              <MultiComboBoxItem text="004" selected={selectedCodes['004']} data-code="004" />
              <MultiComboBoxItem text="005" selected={selectedCodes['005']} data-code="005" />
            </MultiComboBox>
          </FilterGroupItem>
        </FilterBar>
        <Form style={{
        marginBlockStart: '2rem'
      }} layout={'S1 M1 L1 XL1'} labelSpan={'S3 M3 L3 XL3'}>
          <FormGroup headerText="Variant">
            <FormItem labelContent={<Label showColon>Current View</Label>}>
              <Text>{selectedVariant}</Text>
            </FormItem>
          </FormGroup>
          <FormGroup headerText="Filters">
            <FormItem labelContent={<Label showColon>Selected Country</Label>}>
              <Text>{selectedCountry}</Text>
            </FormItem>
            <FormItem labelContent={<Label showColon>Selected Date</Label>}>
              <Text>{date}</Text>
            </FormItem>
            <FormItem labelContent={<Label showColon>Selected Company Codes</Label>}>
              <Text>{Object.keys(selectedCodes).join(', ')}</Text>
            </FormItem>
          </FormGroup>
        </Form>
      </>;
  }
}`,...G.parameters?.docs?.source}}},K=[`Default`,`WithCustomValidation`,`WithFilterBarImplementation`]}));q();export{U as Default,W as WithCustomValidation,G as WithFilterBarImplementation,K as __namedExportsOrder,H as default,q as n,z as t};