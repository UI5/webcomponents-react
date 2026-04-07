import{n as e}from"./chunk-zsgVPwQN.js";import{Wm as t}from"./iframe-a0DPs_N4.js";import{r as n}from"./react-B0mTcu7O.js";import{c as r,m as i,s as a,t as o,v as s}from"./components-iDhKVYGD.js";import{_ as c,d as l,r as u}from"./blocks-DVe7GyIA.js";import{Default as d,ValueChange as f,n as p,t as m}from"./DynamicDateRange.stories-DRPtNxJb.js";function h(e){let t={code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,pre:`pre`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l,{of:m}),`
`,(0,_.jsx)(r,{of:m}),`
`,(0,_.jsx)(`br`,{}),`
`,(0,_.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,_.jsx)(u,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,_.jsx)(i,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`more-examples`,children:`More examples`}),`
`,(0,_.jsx)(t.h3,{id:`value-change`,children:`Value Change`}),`
`,(0,_.jsx)(u,{of:f}),`
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
`,(0,_.jsx)(a,{})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=t(),s(),o(),c(),p()}))();export{g as default};