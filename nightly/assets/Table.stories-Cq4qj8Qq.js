import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{Jm as r,yg as i}from"./iframe-CNuzj0XO.js";import{a,d as o,f as s,i as c,l,n as u,o as d,r as f,t as p,u as m}from"./Table-C4GLRGi5.js";var h=n({Default:()=>y,GrowingTable:()=>b,__namedExportsOrder:()=>x,default:()=>v}),g,_,v,y,b,x,S=e((()=>{c(),g=t(i(),1),s(),m(),d(),u(),_=r(),v={title:`Table`,component:p,argTypes:{columns:{control:{disable:!0}},children:{control:{disable:!0}}},args:{},tags:[`package:@ui5/webcomponents-compat`,`deprecated`]},y={render:e=>(0,_.jsxs)(p,{...e,columns:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l,{style:{width:`12rem`},children:(0,_.jsx)(`span`,{children:`Product`})}),(0,_.jsx)(l,{minWidth:800,popinText:`Supplier`,children:(0,_.jsx)(`span`,{children:`Supplier`})}),(0,_.jsx)(l,{minWidth:600,popinText:`Dimensions`,demandPopin:!0,children:(0,_.jsx)(`span`,{children:`Dimensions`})}),(0,_.jsx)(l,{minWidth:600,popinText:`Weight`,demandPopin:!0,children:(0,_.jsx)(`span`,{children:`Weight`})}),(0,_.jsx)(l,{children:(0,_.jsx)(`span`,{children:`Price`})})]}),children:[(0,_.jsxs)(a,{children:[(0,_.jsx)(o,{children:(0,_.jsx)(`span`,{children:`Notebook Basic`})}),(0,_.jsx)(o,{children:(0,_.jsx)(`span`,{children:`Very Best Screens`})}),(0,_.jsx)(o,{children:(0,_.jsx)(`span`,{children:`30 x 18 x 3cm`})}),(0,_.jsx)(o,{children:(0,_.jsx)(`span`,{children:`4.2KG`})}),(0,_.jsx)(o,{children:(0,_.jsx)(`span`,{children:`956EUR`})})]}),(0,_.jsxs)(a,{children:[(0,_.jsx)(o,{children:(0,_.jsx)(`span`,{children:`Notebook Basic 17HT-1001`})}),(0,_.jsx)(o,{children:(0,_.jsx)(`span`,{children:`Very Best Screens`})}),(0,_.jsx)(o,{children:(0,_.jsx)(`span`,{children:`29 x 17 x 3.1cm`})}),(0,_.jsx)(o,{children:(0,_.jsx)(`span`,{children:`4.5KG`})}),(0,_.jsx)(o,{children:(0,_.jsx)(`span`,{children:`1249EUR`})})]})]})},b={render:()=>{let e=e=>Array(25).fill(``).map((t,n)=>(0,_.jsxs)(a,{children:[(0,_.jsx)(o,{children:(0,_.jsx)(`span`,{children:n+e})}),(0,_.jsx)(o,{children:(0,_.jsx)(`span`,{children:`Placeholder`})})]},`${n+e}-row`)),[t,n]=(0,g.useState)(e(1));return(0,_.jsx)(`div`,{style:{height:`250px`,overflow:`auto`},children:(0,_.jsx)(p,{onLoadMore:()=>{n(t=>[...t,...e(t.length+1)])},growing:f.Scroll,columns:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l,{children:(0,_.jsx)(`span`,{children:`Column 1`})}),(0,_.jsx)(l,{children:(0,_.jsx)(`span`,{children:`Column 2`})})]}),children:t})})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Table {...args} columns={<>
            <TableColumn style={{
        width: '12rem'
      }}>
              <span>Product</span>
            </TableColumn>
            <TableColumn minWidth={800} popinText="Supplier">
              <span>Supplier</span>
            </TableColumn>
            <TableColumn minWidth={600} popinText="Dimensions" demandPopin>
              <span>Dimensions</span>
            </TableColumn>
            <TableColumn minWidth={600} popinText="Weight" demandPopin>
              <span>Weight</span>
            </TableColumn>
            <TableColumn>
              <span>Price</span>
            </TableColumn>
          </>}>
        <TableRow>
          <TableCell>
            <span>Notebook Basic</span>
          </TableCell>
          <TableCell>
            <span>Very Best Screens</span>
          </TableCell>
          <TableCell>
            <span>30 x 18 x 3cm</span>
          </TableCell>
          <TableCell>
            <span>4.2KG</span>
          </TableCell>
          <TableCell>
            <span>956EUR</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span>Notebook Basic 17HT-1001</span>
          </TableCell>
          <TableCell>
            <span>Very Best Screens</span>
          </TableCell>
          <TableCell>
            <span>29 x 17 x 3.1cm</span>
          </TableCell>
          <TableCell>
            <span>4.5KG</span>
          </TableCell>
          <TableCell>
            <span>1249EUR</span>
          </TableCell>
        </TableRow>
      </Table>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const createRows = indexOffset => {
      return new Array(25).fill('').map((_, index) => <TableRow key={\`\${index + indexOffset}-row\`}>
          <TableCell>
            <span>{index + indexOffset}</span>
          </TableCell>
          <TableCell>
            <span>Placeholder</span>
          </TableCell>
        </TableRow>);
    };
    const [rows, setRows] = useState(createRows(1));
    const onLoadMore = () => {
      setRows(prev => [...prev, ...createRows(prev.length + 1)]);
    };
    return <div style={{
      height: '250px',
      overflow: 'auto'
    }}>
        <Table onLoadMore={onLoadMore} growing={TableGrowingMode.Scroll} columns={<>
              <TableColumn>
                <span>Column 1</span>
              </TableColumn>
              <TableColumn>
                <span>Column 2</span>
              </TableColumn>
            </>}>
          {rows}
        </Table>
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`GrowingTable`]}));S();export{y as Default,b as GrowingTable,x as __namedExportsOrder,v as default,S as n,h as t};