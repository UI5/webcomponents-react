import{n as e}from"./chunk-zsgVPwQN.js";import{Hi as t,Ld as n,Wm as r,u as i}from"./iframe-Cka0UKMq.js";import{r as a}from"./react-xgcNoH_S.js";import{c as o,m as s,s as c,t as l,v as u}from"./components-Ds5Cfq3J.js";import{_ as d,d as f,n as p,o as m,r as h,u as g}from"./blocks-B40191hP.js";import{n as _,t as v}from"./SubcomponentsSection-DDnl7AR6.js";import{a as y,d as b,f as x,l as S,o as C,u as w}from"./Table-DmRuK0Q_.js";import{n as T,t as E}from"./TableGroupRow-CTyaUIpf.js";import{Default as D,GrowingTable as O,n as k,t as A}from"./Table.stories-D59fL0Kk.js";function j(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...a(),...e.components};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(f,{of:A}),`
`,(0,N.jsx)(o,{of:A}),`
`,(0,N.jsx)(t,{children:(0,N.jsxs)(n,{children:[`Using the Table from the `,(0,N.jsx)(r.code,{children:`compat`}),` package and the `,(0,N.jsx)(r.code,{children:`main`}),` package in the same application is not supported without scoping the compat package.`]}),design:`Critical`,hideCloseButton:!0}),`
`,(0,N.jsx)(`br`,{}),`
`,(0,N.jsx)(`br`,{}),`
`,(0,N.jsx)(r.h2,{id:`example`,children:`Example`}),`
`,(0,N.jsx)(h,{of:D}),`
`,(0,N.jsx)(r.h2,{id:`properties`,children:`Properties`}),`
`,(0,N.jsx)(s,{of:D}),`
`,(0,N.jsx)(`br`,{}),`
`,(0,N.jsx)(r.h1,{id:`more-examples`,children:`More Examples`}),`
`,(0,N.jsx)(`br`,{}),`
`,(0,N.jsx)(r.h2,{id:`growing-table`,children:`Growing Table`}),`
`,(0,N.jsxs)(r.p,{children:[(0,N.jsx)(r.code,{children:`Table`}),` with `,(0,N.jsx)(r.code,{children:`growing={TableGrowingMode.Scroll}`}),`.`]}),`
`,(0,N.jsx)(h,{of:O}),`
`,(0,N.jsx)(r.h3,{id:`code`,children:`Code`}),`
`,(0,N.jsx)(r.pre,{children:(0,N.jsx)(r.code,{className:`language-jsx`,children:`const createRows = (indexOffset) => {
  return new Array(25).fill('').map((_, index) => (
    <TableRow key={\`\${index + indexOffset} - row\`}>
      <TableCell>
        <Label>{index + indexOffset}</Label>
      </TableCell>
      <TableCell>
        <Label>Placeholder</Label>
      </TableCell>
    </TableRow>
  ));
};

const GrowingTable = () => {
  const [rows, setRows] = useState(createRows(1));
  const onLoadMore = () => {
    setRows((prev) => [...prev, ...createRows(prev.length + 1)]);
  };
  return (
    <div style={{ height: '250px', overflow: 'auto' }}>
      <Table
        onLoadMore={onLoadMore}
        growing={TableGrowingMode.Scroll}
        columns={
          <>
            <TableColumn>
              <Label>Column 1</Label>
            </TableColumn>
            <TableColumn>
              <Label>Column 2</Label>
            </TableColumn>
          </>
        }
      >
        {rows}
      </Table>
    </div>
  );
};
`})}),`
`,(0,N.jsx)(g,{children:v}),`
`,(0,N.jsx)(r.h2,{id:`tablecolumn`,children:`TableColumn`}),`
`,(0,N.jsx)(m,{of:S}),`
`,(0,N.jsx)(p,{of:S}),`
`,(0,N.jsx)(r.h2,{id:`tablerow`,children:`TableRow`}),`
`,(0,N.jsx)(m,{of:y}),`
`,(0,N.jsx)(p,{of:y}),`
`,(0,N.jsx)(r.h2,{id:`tablegrouprow`,children:`TableGroupRow`}),`
`,(0,N.jsx)(m,{of:E}),`
`,(0,N.jsx)(p,{of:E}),`
`,(0,N.jsx)(r.h2,{id:`tablecell`,children:`TableCell`}),`
`,(0,N.jsx)(m,{of:b}),`
`,(0,N.jsx)(p,{of:b}),`
`,(0,N.jsx)(c,{})]})}function M(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,N.jsx)(t,{...e,children:(0,N.jsx)(j,{...e})}):j(e)}var N;e((()=>{N=r(),u(),l(),_(),d(),i(),x(),w(),T(),C(),k()}))();export{M as default};