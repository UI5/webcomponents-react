import{n as e}from"./chunk-jRWAZmH_.js";import{Gm as t}from"./iframe-CIxr1oGB.js";import{r as n}from"./react-SG0niN1o.js";import{_ as r}from"./components-BNEF2O9g.js";import{_ as i,r as a}from"./blocks-Dd0jPISe.js";function o(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)({h3:`h3`,...n(),...e.components}.h3,{id:`with-stack-aggregate-totals`,children:`With Stack Aggregate Totals`}),`
`,(0,c.jsx)(`p`,{children:e.description}),`
`,(0,c.jsx)(a,{of:e.of})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c,l=e((()=>{c=t(),r(),i()}));function u(e){let t={code:`code`,h3:`h3`,pre:`pre`,...n(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.h3,{id:`with-custom-tooltip-total`,children:`With Custom Tooltip Total`}),`
`,(0,f.jsx)(`p`,{children:e.description}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-jsx`,children:`import { ThemingParameters } from '@ui5/webcomponents-react-base/ThemingParameters';
import { DefaultTooltipContent } from 'recharts';

const stackedAccessors = new Set(['users', 'sessions']);

const CustomTooltipContent = (props) => {
  const { payload, ...rest } = props;
  if (!payload?.length) {
    return <DefaultTooltipContent {...rest} payload={payload} />;
  }
  const stackedEntries = payload.filter((entry) => stackedAccessors.has(entry.dataKey));
  if (!stackedEntries.length) {
    return <DefaultTooltipContent {...rest} payload={payload} />;
  }
  const total = stackedEntries.reduce((sum, entry) => sum + (Number(entry.value) || 0), 0);
  const augmentedPayload = [
    ...payload,
    {
      name: \`Total (\${stackedEntries.map((entry) => entry.name).join(' + ')})\`,
      value: total,
      color: ThemingParameters.sapTextColor,
    },
  ];
  return (
    <DefaultTooltipContent
      {...rest}
      payload={augmentedPayload}
      wrapperClassName="custom-stacked-tooltip"
    />
  );
};

// CSS: bold the Total row (last item)
// .custom-stacked-tooltip .recharts-tooltip-item:last-child { font-weight: bold; }

<MyChart
  {...props}
  tooltipConfig={{
    content: <CustomTooltipContent />
  }}
/>
`})}),`
`,(0,f.jsx)(a,{of:e.of})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f,p=e((()=>{f=t(),r(),i()}));export{l as i,p as n,s as r,d as t};