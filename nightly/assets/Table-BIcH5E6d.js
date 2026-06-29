import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{t as n}from"./Text-xQwBbt3q.js";import{t as r}from"./MessageStrip-PxPcSkqK.js";import{u as i}from"./iframe-RbQI6e-d.js";import{A as a,_ as o,d as s,n as c,o as l,r as u,u as d}from"./blocks-DKjKLjLA.js";import{E as f,b as p,f as m,t as h,u as g}from"./components-Csr1YOL2.js";import{n as _,t as v}from"./SubcomponentsSection-CcVV1-ds.js";import{a as y,d as b,f as x,l as S,o as C,u as w}from"./Table-DmrILaj4.js";import{n as T,t as E}from"./TableGroupRow-BlxJwLRc.js";import{Default as D,GrowingTable as O,n as k,t as A}from"./Table.stories-QQBmkWPS.js";function j(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...a(),...e.components};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(s,{of:A}),`
`,(0,N.jsx)(m,{of:A}),`
`,(0,N.jsx)(r,{children:(0,N.jsxs)(n,{children:[`Using the Table from the `,(0,N.jsx)(t.code,{children:`compat`}),` package and the `,(0,N.jsx)(t.code,{children:`main`}),` package in the same application is not supported without scoping the compat package.`]}),design:`Critical`,hideCloseButton:!0}),`
`,(0,N.jsx)(`br`,{}),`
`,(0,N.jsx)(`br`,{}),`
`,(0,N.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,N.jsx)(u,{of:D}),`
`,(0,N.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,N.jsx)(p,{of:D}),`
`,(0,N.jsx)(`br`,{}),`
`,(0,N.jsx)(t.h1,{id:`more-examples`,children:`More Examples`}),`
`,(0,N.jsx)(`br`,{}),`
`,(0,N.jsx)(t.h2,{id:`growing-table`,children:`Growing Table`}),`
`,(0,N.jsxs)(t.p,{children:[(0,N.jsx)(t.code,{children:`Table`}),` with `,(0,N.jsx)(t.code,{children:`growing={TableGrowingMode.Scroll}`}),`.`]}),`
`,(0,N.jsx)(u,{of:O}),`
`,(0,N.jsx)(t.h3,{id:`code`,children:`Code`}),`
`,(0,N.jsx)(t.pre,{children:(0,N.jsx)(t.code,{className:`language-jsx`,children:`const createRows = (indexOffset) => {
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
`,(0,N.jsx)(d,{children:v}),`
`,(0,N.jsx)(t.h2,{id:`tablecolumn`,children:`TableColumn`}),`
`,(0,N.jsx)(l,{of:S}),`
`,(0,N.jsx)(c,{of:S}),`
`,(0,N.jsx)(t.h2,{id:`tablerow`,children:`TableRow`}),`
`,(0,N.jsx)(l,{of:y}),`
`,(0,N.jsx)(c,{of:y}),`
`,(0,N.jsx)(t.h2,{id:`tablegrouprow`,children:`TableGroupRow`}),`
`,(0,N.jsx)(l,{of:E}),`
`,(0,N.jsx)(c,{of:E}),`
`,(0,N.jsx)(t.h2,{id:`tablecell`,children:`TableCell`}),`
`,(0,N.jsx)(l,{of:b}),`
`,(0,N.jsx)(c,{of:b}),`
`,(0,N.jsx)(g,{})]})}function M(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,N.jsx)(t,{...e,children:(0,N.jsx)(j,{...e})}):j(e)}var N;e((()=>{N=t(),f(),h(),_(),o(),i(),x(),w(),T(),C(),k()}))();export{M as default};