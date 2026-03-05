import{j as e}from"./iframe-jlZ7haKH.js";import{useMDXComponents as a}from"./index-BDRke1Rk.js";import{M as i}from"./blocks-GgaXKyV0.js";import"./Tag-BnvuCeE_.js";import"./index-DB16QQd2.js";import"./CommandsAndQueries-C62gP0Wv.js";import"./copy-BXrubwPI.js";import{F as s}from"./Footer-Cyt0gd6r.js";import"./PageNotFound-D9hL323p.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D3vqfhW8.js";import"./sys-enter-2-D9bp2L1z.js";import"./alert-7poHLLeI.js";import"./Link-CmI2uh2s.js";import"./index-UUYL4bRA.js";import"./index-BfL44CNr.js";import"./index-DnDTeT16.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_1ld5sf.js";import"./addCustomCSSWithScoping-Cg_sPlM6.js";import"./index-BtQ34sqz.js";import"./index-BcLhYSRh.js";import"./index-EXbubmTe.js";import"./index-BJRmM88L.js";import"./Illustrations-DJD2oa8r.js";import"./i18n-defaults-C7ICj5-E.js";function o(n){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"IDs via dataset"}),`
`,e.jsx(t.h1,{id:"using-dataset-as-container-for-ids-and-other-values",children:"Using dataset as container for IDs and other values"}),`
`,e.jsxs(t.p,{children:["Many components like the ",e.jsx(t.code,{children:"Select"}),", ",e.jsx(t.code,{children:"List"}),", ",e.jsx(t.code,{children:"Table"}),`, etc. are registering an event that handles the selection of child elements/components.
In the handler of the event you receive the corresponding element(s), where you can e.g. access the `,e.jsx(t.code,{children:"textContent"})," to retrieve the selected text."]}),`
`,e.jsxs(t.p,{children:[`In many cases the "text" is only there for users of the application, the actual value for e.g. the backend is often an id or a key.
To also include these in the callback of the event, we recommend using `,e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset",rel:"nofollow",children:"HTMLElement.dataset"}),`.
With the help of the `,e.jsx(t.code,{children:"data-"})," API you can define any primitive value (like numbers, strings) as an attribute on an element. This data will be available on the change event as part of the dataset object of the selected element(s)."]}),`
`,e.jsx(t.p,{children:"Here you can find a few examples:"}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Select:"})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const data = [
  { id: 1, text: 'Option 1' },
  { id: 2, text: 'Option 2' }
];

const onChange = (event) => {
  // event.detail.selectedOption is a reference to the selected HTML Element
  // dataset contains all attributes that were passed with the data- prefix.
  console.log(event.detail.selectedOption.dataset.id);
};

<Select onChange={onChange}>
  {data.map((item) => (
    <Option key={item.id} data-id={item.id}>
      {item.text}
    </Option>
  ))}
</Select>;
`})}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"List:"})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const onSelectionChange = (event) => {
  const { targetItem } = event.detail;
  console.log(targetItem.dataset.custom);
};

<List mode={ListSelectionMode.MultiSelect} onSelectionChange={onSelectionChange}>
  <ListItemStandard additionalText="3" data-custom="custom value of list item 1" text="List Item 1" />
  <ListItemStandard additionalText="2" data-custom="custom value of list item 2" text="List Item 2" />
  <ListItemStandard additionalText="1" data-custom="custom value of list item 3" text="List Item 3" />
</List>;
`})}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"MultiInput with suggestion items:"})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const onTokenDelete = (event) => {
  const { token } = event.detail;
  console.log(token.dataset.code);
};
const onSuggestionItemSelect = (event) => {
  const { item } = event.detail;
  console.log(item.dataset.code);
};

<MultiInput
  onTokenDelete={onTokenDelete}
  onSuggestionItemSelect={onSuggestionItemSelect}
  showSuggestions
  tokens={
    <>
      <Token data-code="ARG" text="Argentina" />
      <Token data-code="BGR" text="Bulgaria" />
      <Token data-code="FIN" text="Finland" />
      <Token data-code="MEX" text="Mexico" />
      <Token data-code="PHL" text="Philippines" />
    </>
  }
>
  <SuggestionItem data-code="GBR" text="United Kingdom" />
  <SuggestionItem data-code="USA" text="United States" />
  <SuggestionItem data-code="DEU" text="Germany" />
  <SuggestionItem data-code="ISL" text="Iceland" />
  <SuggestionItem data-code="MDA" text="Moldova" />
  <SuggestionItem data-code="MAR" text="Morocco" />
</MultiInput>;
`})}),`
`,e.jsx(s,{})]})}function O(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{O as default};
