import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{$d as r,$i as i,Cm as a,Gf as o,Gl as s,Io as c,Ja as l,Ka as u,Kl as d,Lo as f,Qi as p,Su as m,Wf as h,Wg as g,Xa as _,Xi as v,Ya as y,Za as b,Zi as x,b as S,cp as C,ef as w,et as T,f as E,lp as D,mh as O,mu as k,nu as A,p as j,pu as M,qa as N,tt as P,tu as F,wm as I,x as L,xu as R}from"./iframe-BkGOjVS7.js";var z=e({Default:()=>U,WithCustomValidation:()=>W,WithFilterBarImplementation:()=>G,__namedExportsOrder:()=>K,default:()=>H}),B,V,H,U,W,G,K,q=n((()=>{o(),D(),a(),B=t(g(),1),f(),b(),y(),N(),m(),i(),x(),A(),d(),w(),P(),k(),L(),j(),V=O(),H={title:`Inputs / VariantManagement`,component:E,args:{placement:h.Bottom,level:C.H4},tags:[`package:@ui5/webcomponents-react`]},U={render:e=>(0,V.jsxs)(E,{...e,children:[(0,V.jsx)(S,{children:`Default VariantItem`}),(0,V.jsx)(S,{selected:!0,children:`Selected`}),(0,V.jsx)(S,{author:`SAP`,children:`Author`}),(0,V.jsx)(S,{favorite:!0,children:`Favorite`}),(0,V.jsx)(S,{isDefault:!0,children:`IsDefault`}),(0,V.jsx)(S,{favorite:!0,labelReadOnly:!0,children:`Favorite & labelReadOnly`}),(0,V.jsx)(S,{applyAutomatically:!0,children:`ApplyAutomatically`}),(0,V.jsx)(S,{applyAutomatically:!0,applyAutomaticallyText:`Describe your exceptions that deviate from the standard behavior here.`,children:`applyAutomatically & applyAutomaticallyText`}),(0,V.jsx)(S,{readOnly:!0,children:`ReadOnly`}),(0,V.jsx)(S,{global:!0,children:`Global`}),(0,V.jsx)(S,{global:!0,readOnly:!0,children:`Global & readOnly`}),(0,V.jsx)(S,{global:!0,children:`Not deletable -> global`}),(0,V.jsx)(S,{hideDelete:!0,children:`Not deletable -> hideDelete`}),(0,V.jsx)(S,{hideDelete:!1,global:!0,children:`Deletable -> hideDelete: false, global: true`})]})},W={render:({selectedByIndex:e=1})=>{let[t,n]=(0,B.useState)(void 0),[r,i]=(0,B.useState)(void 0),[a,o]=(0,B.useState)({1:`Only alphanumeric chars in Save View input`,2:`Max 12 chars`});return(0,V.jsxs)(E,{onSaveAs:e=>{o(t=>({...t,[e.detail[`data-id`]]:e.detail.children}))},onSaveManageViews:e=>{let t=e.detail.updatedVariants.find(e=>e[`data-custom-manage-views`]);!r&&t&&o(e=>({...e,[t[`data-id`]]:t.children}))},onManageViewsCancel:()=>{i(void 0)},onSaveViewCancel:()=>{n(void 0)},children:[(0,V.jsx)(S,{"data-id":1,selected:e===0,saveViewInputProps:{valueState:t,valueStateMessage:t?(0,V.jsx)(`div`,{children:`Only alphanumeric and space characters allowed!`}):void 0,onInput:e=>{e.target.value.match(/^[a-z0-9\s]+$/i)?(e.isInvalid=!1,n(void 0)):(e.isInvalid=!0,n(I.Negative))},"data-testid":`alphanumeric`},children:a[1]}),(0,V.jsx)(S,{"data-custom-manage-views":!0,"data-id":2,selected:e===1,manageViewsInputProps:{valueState:r,valueStateMessage:r?(0,V.jsx)(`div`,{children:`No more than 12 characters allowed!`}):void 0,onInput:e=>{e.target.value.length>12?(e.isInvalid=!0,i(I.Negative)):(e.isInvalid=!1,i(void 0))},"data-testid":`12chars`},children:a[2]})]})}},G={name:`in FilterBar`,render:()=>{let[e,t]=(0,B.useState)(`Standard`),[n,i]=(0,B.useState)(`Standard`),[a,o]=(0,B.useState)([]),[d,f]=(0,B.useState)(!1),[m,h]=(0,B.useState)(!1),g=(0,B.useRef)({Standard:{selectedCountry:`Indonesia`,date:``,selectedCodes:{}}}),[y,b]=(0,B.useReducer)((e,t)=>{let{payload:n,type:r}=t;switch(h(!0),r){case`selectedCountry`:return{...e,selectedCountry:n};case`date`:return{...e,date:n};case`selectedCodes`:return{...e,selectedCodes:n};case`changeVariant`:return n;default:return console.warn(`Unknown action type!`),e}},g.current.Standard),{selectedCountry:x,date:C,selectedCodes:w}=y;return(0,B.useEffect)(()=>{if(m){let t=Object.entries(g.current[e]).some(([e,t])=>{if(e===`selectedCodes`){let e=Object.keys(y.selectedCodes).length;return Object.keys(t).length===e?Object.entries(y.selectedCodes).some(([e,n])=>t?.[e]!==n):!0}return y[e]!==t});h(!1),f(t)}},[m,e]),(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(T,{header:(0,V.jsxs)(E,{hideApplyAutomatically:!0,dirtyState:d,onSaveAs:e=>{let{variantItem:n,selected:r,readOnly:a,labelReadOnly:s,...c}=e.detail;c.isDefault&&i(c.children),o(e=>[...e,{...c,author:`Current User`}]),g.current[c.children]=y,t(c.children),f(!1)},onSave:e=>{let{variantItem:t,selected:n,...r}=e.detail;g.current[r.children]=y,f(!1)},onSelect:e=>{let n=e.detail.selectedVariant.children;b({type:`changeVariant`,payload:g.current[n]}),t(n)},onSaveManageViews:e=>{let{deletedVariants:n,updatedVariants:r}=e.detail;n.forEach(e=>{delete g.current[e.children],o(t=>t.filter(t=>t.children!==e.children))}),r.forEach(e=>{let{variantItem:n,selected:r,...a}=e;g.current[e.children]=a,e.isDefault&&i(e.children),e.selected&&t(e.children),o(t=>t.map(t=>t.children===e.prevVariant.children?a:t))})},children:[(0,V.jsx)(S,{selected:e===`Standard`,global:!0,isDefault:n===`Standard`,author:`SAP`,readOnly:!0,labelReadOnly:!0,children:`Standard`}),a.map(t=>(0,V.jsx)(S,{...t,selected:e===t.children,isDefault:n===t.children,children:t.children},t.children))]}),children:[(0,V.jsx)(M,{label:`Countries`,filterKey:0,children:(0,V.jsxs)(s,{onChange:e=>{let{selectedOption:t}=e.detail;b({type:`selectedCountry`,payload:t.textContent})},children:[(0,V.jsx)(F,{selected:x===`Indonesia`,children:`Indonesia`}),(0,V.jsx)(F,{selected:x===`Costa Rica`,children:`Costa Rica`}),(0,V.jsx)(F,{selected:x===`Slovakia`,children:`Slovakia`}),(0,V.jsx)(F,{selected:x===`Iceland`,children:`Iceland`}),(0,V.jsx)(F,{selected:x===`Malta`,children:`Malta`}),(0,V.jsx)(F,{selected:x===`Guyana`,children:`Guyana`}),(0,V.jsx)(F,{selected:x===`Spain`,children:`Spain`}),(0,V.jsx)(F,{selected:x===`Austria`,children:`Austria`})]})}),(0,V.jsx)(M,{label:`Date`,filterKey:1,children:(0,V.jsx)(c,{value:C,onChange:e=>{b({type:`date`,payload:e.detail.value})}})}),(0,V.jsx)(M,{label:`Company Code`,filterKey:2,children:(0,V.jsxs)(p,{onSelectionChange:e=>{b({type:`selectedCodes`,payload:e.detail.items.reduce((e,t)=>(e[t.dataset.code]=!0,e),{})})},children:[(0,V.jsx)(v,{text:`001`,selected:w[`001`],"data-code":`001`}),(0,V.jsx)(v,{text:`002`,selected:w[`002`],"data-code":`002`}),(0,V.jsx)(v,{text:`003`,selected:w[`003`],"data-code":`003`}),(0,V.jsx)(v,{text:`004`,selected:w[`004`],"data-code":`004`}),(0,V.jsx)(v,{text:`005`,selected:w[`005`],"data-code":`005`})]})})]}),(0,V.jsxs)(_,{style:{marginBlockStart:`2rem`},layout:`S1 M1 L1 XL1`,labelSpan:`S3 M3 L3 XL3`,children:[(0,V.jsx)(l,{headerText:`Variant`,children:(0,V.jsx)(u,{labelContent:(0,V.jsx)(R,{showColon:!0,children:`Current View`}),children:(0,V.jsx)(r,{children:e})})}),(0,V.jsxs)(l,{headerText:`Filters`,children:[(0,V.jsx)(u,{labelContent:(0,V.jsx)(R,{showColon:!0,children:`Selected Country`}),children:(0,V.jsx)(r,{children:x})}),(0,V.jsx)(u,{labelContent:(0,V.jsx)(R,{showColon:!0,children:`Selected Date`}),children:(0,V.jsx)(r,{children:C})}),(0,V.jsx)(u,{labelContent:(0,V.jsx)(R,{showColon:!0,children:`Selected Company Codes`}),children:(0,V.jsx)(r,{children:Object.keys(w).join(`, `)})})]})]})]})}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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