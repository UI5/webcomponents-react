import{i as e}from"./preload-helper-usAeo7Bx.js";import{lh as t}from"./iframe-CQUeTTJ8.js";import{J as n,_ as r,d as i,r as a}from"./blocks-D3NYxawe.js";import{E as o,b as s,f as c,t as l,u}from"./components-DWePh5_o.js";import{Default as d,ValueChange as f,n as p,t as m}from"./DynamicDateRange.stories-D37P4Br8.js";function h(e){let t={code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,pre:`pre`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(i,{of:m}),`
`,(0,_.jsx)(c,{of:m}),`
`,(0,_.jsx)(`br`,{}),`
`,(0,_.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,_.jsx)(a,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,_.jsx)(s,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`more-examples`,children:`More examples`}),`
`,(0,_.jsx)(t.h3,{id:`value-change`,children:`Value Change`}),`
`,(0,_.jsx)(a,{of:f}),`
`,(0,_.jsx)(t.h4,{id:`code`,children:`Code`}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`function DynamicDateRangeComponent() {
  const [selValue, setSelValue] = useState("");
  const [convertedDates, setConvertedDates] = useState("");
  return (
    <>
      <DynamicDateRange
        onChange={(e) => {
          const selectedValue = e.detail.value;
          setSelValue(JSON.stringify(selectedValue));

          const dates = e.currentTarget.toDates(selectedValue);
          setConvertedDates(
            dates.map((date) => date.toLocaleString()).join(" - "),
          );
        }}
      />
      <hr />
      <FlexBox alignItems="Center" gap="0.5rem">
        <Label for="sel-val" showColon>
          Selected Value
        </Label>
        <Input
          id="sel-val"
          readonly
          value={selValue}
          style={{ width: "100%", maxWidth: "400px" }}
        />
      </FlexBox>
      <FlexBox alignItems="Center" gap="0.5rem">
        <Label for="conv-val" showColon>
          Converted Dates
        </Label>
        <Input
          id="conv-val"
          readonly
          value={convertedDates}
          style={{ width: "100%", maxWidth: "400px" }}
        />
      </FlexBox>
    </>
  );
}
`})}),`
`,(0,_.jsx)(u,{})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=t(),o(),l(),r(),p()}))();export{g as default};