import{n as e}from"./chunk-zsgVPwQN.js";import{Jm as t}from"./iframe-BZL7dK_T.js";import{r as n}from"./react-DXfyXPHN.js";import{_ as r,o as i,p as a,s as o,t as s}from"./components--6YuvWVb.js";import{_ as c,d as l,n as u,r as d,u as f}from"./blocks-CDFERQx5.js";import{n as p,t as m}from"./TimelineChartAnnotation-BvhJDrbf.js";import{n as h,t as g}from"./SubcomponentsSection-B85wrRHJ.js";import{Default as _,LoadingPlaceholder as v,WithAnnotations as y,WithAnnotationsOnly as b,WithMoreCustomization as x,n as S,t as C}from"./TimeLineChart.stories-DQII-17X.js";function w(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(l,{of:C}),`
`,(0,E.jsx)(o,{of:C,isChart:!0,since:`1.10.0`,experimental:!0,deprecationText:"The component will be removed without replacement in version 3.0 of `@ui5/webcomponents-react-charts`."}),`
`,(0,E.jsx)(d,{of:_}),`
`,(0,E.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,E.jsx)(a,{of:_}),`
`,(0,E.jsx)(`br`,{}),`
`,(0,E.jsx)(`br`,{}),`
`,(0,E.jsx)(t.h2,{id:`more-examples`,children:`More Examples`}),`
`,(0,E.jsx)(t.h3,{id:`with-annotations`,children:`With Annotations`}),`
`,(0,E.jsxs)(t.p,{children:[`This example shows how the `,(0,E.jsx)(t.code,{children:`TimelineChart`}),` is used to visualize a simple simulation of the
`,(0,E.jsx)(t.a,{href:`https://en.wikipedia.org/wiki/Earliest_deadline_first_scheduling`,rel:`nofollow`,children:(0,E.jsx)(`b`,{children:`Earliest Deadline First`})}),` scheduling
algorithm. The tasks are shown in the chart and the annotations are added on top and used to indicate the
arrival time, period and deadline of the tasks. The `,(0,E.jsx)(t.code,{children:`TimelineChartAnnotation`}),` component provides a way to specify the row
the annotations are applied to. For the annotations to scale well with the scaling of the width of the timeline, when
zooming is done, a `,(0,E.jsx)(t.strong,{children:`ResizeObserver`}),` could be used if desired. But for most purposes, the `,(0,E.jsx)(t.code,{children:`TimelineChartBodyCtx`}),` provided
should suffice. Using the React `,(0,E.jsx)(t.code,{children:`useContext`}),` hook to get the context and the `,(0,E.jsx)(t.em,{children:`chartBodyWidth`}),` property should help with
the scaling. This will prevent having to create too many ResizeObservers and affecting performance.`]}),`
`,(0,E.jsxs)(t.p,{children:[`The annotations are drawn using the HTML canvas and all the annotations for the same row are drawn at the same time using
the `,(0,E.jsx)(t.code,{children:`TimingFigure`}),` custom component created for this specific example. As can be seen, the annotations scale neatly without
blurring when the timeline is zoomed. A valueFormat `,(0,E.jsx)(t.code,{children:`(x) => Number.parseFloat(x).toFixed(2)`}),` has also been applied to the
ticks and tooltip numbers.`]}),`
`,(0,E.jsx)(d,{of:y}),`
`,(0,E.jsx)(t.h4,{id:`timingfigure-code`,children:`TimingFigure Code`}),`
`,(0,E.jsxs)(`details`,{children:[(0,E.jsx)(`summary`,{children:`Show Code`}),(0,E.jsx)(t.pre,{children:(0,E.jsx)(t.code,{className:`language-jsx`,children:`export const TimingFigure = ({ arrival, period, deadline, totalDuration }) => {
  const ref = useRef(null);
  const verticalSpacing = 2;
  const halfArrowWidth = 4;
  const chartBodyCtx = useContext(TimelineChartBodyCtx);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');

    // Set the canvas dimensions to avoid blurring
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;

    const width = canvas.width;
    const height = canvas.height;
    const one5thHeight = height / 5;
    const four5thHeight = 4 * one5thHeight;

    const interval = (period / totalDuration) * width;
    const arrivalOffset = (arrival / totalDuration) * width;
    const deadlineOffset = (deadline / totalDuration) * width;

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--sapTextColor');

    // Draw the up-pointing arrows for the arrival
    for (let i = 0; i * interval + arrivalOffset < width; i++) {
      const offset = i * interval + arrivalOffset;
      ctx.moveTo(offset, verticalSpacing);
      ctx.lineTo(offset, height - verticalSpacing);
      ctx.moveTo(offset, verticalSpacing);
      ctx.lineTo(offset - halfArrowWidth, one5thHeight);
      ctx.moveTo(offset, verticalSpacing);
      ctx.lineTo(offset + halfArrowWidth, one5thHeight);
    }

    // Draw the down-pointing arrows for the deadline
    for (let i = 0; i * interval + arrivalOffset + deadlineOffset < width; i++) {
      const offset = i * interval + arrivalOffset + deadlineOffset;
      ctx.moveTo(offset, verticalSpacing);
      ctx.lineTo(offset, height - verticalSpacing);
      ctx.lineTo(offset - halfArrowWidth, four5thHeight);
      ctx.moveTo(offset, height - verticalSpacing);
      ctx.lineTo(offset + halfArrowWidth, four5thHeight);
    }

    ctx.stroke();
  });

  return <canvas ref={ref} style={{ width: chartBodyCtx.chartBodyWidth, height: '100%' }}></canvas>;
};
`})})]}),`
`,(0,E.jsx)(t.h3,{id:`with-annotations-only`,children:`With Annotations Only`}),`
`,(0,E.jsxs)(t.p,{children:[`Using annotations can be so powerful. This allows a very good customization of the timeline as desired. The
chart can be made to contain only custom annotations that utilize the other features available in the
`,(0,E.jsx)(t.code,{children:`TimelineChart`}),`. By default, the annotations are set so that they dont interact with the mouse. If an
interaction with the mouse is needed for the custom annotation, the annotation should have the
`,(0,E.jsx)(t.code,{children:`pointerEvents`}),` set to `,(0,E.jsx)(t.em,{children:`auto`}),` in its own style.`]}),`
`,(0,E.jsx)(t.p,{children:`The example below shows the timeline for the some of the most momentuous inventions in the
last 6000 years from the year 2022. These annotations have been made using SVG just to
demonstrate that any valid element can be used for making the annotations.`}),`
`,(0,E.jsx)(d,{of:b}),`
`,(0,E.jsx)(t.h3,{id:`with-more-customization`,children:`With More Customization`}),`
`,(0,E.jsxs)(t.p,{children:[`A lot more things can be customized in the `,(0,E.jsx)(t.code,{children:`TimelineChart`}),`. These include:`]}),`
`,(0,E.jsxs)(t.ul,{children:[`
`,(0,E.jsx)(t.li,{children:`The color of each item on a row.`}),`
`,(0,E.jsx)(t.li,{children:`The label of each item on a row.`}),`
`,(0,E.jsxs)(t.li,{children:[`The kind of connections between two different items:`,`
`,(0,E.jsxs)(t.ol,{children:[`
`,(0,E.jsx)(t.li,{children:`Start-To-Start`}),`
`,(0,E.jsx)(t.li,{children:`Start-To-Finish`}),`
`,(0,E.jsx)(t.li,{children:`Finish-To-Start`}),`
`,(0,E.jsx)(t.li,{children:`Finish-To-Finish`}),`
`]}),`
`]}),`
`]}),`
`,(0,E.jsx)(d,{of:x}),`
`,(0,E.jsx)(t.h3,{id:`loading-placeholder`,children:`Loading Placeholder`}),`
`,(0,E.jsx)(d,{of:v}),`
`,(0,E.jsx)(f,{children:g}),`
`,(0,E.jsx)(t.h2,{id:`timelinechartannotation`,children:`TimelineChartAnnotation`}),`
`,(0,E.jsxs)(t.p,{children:[`The `,(0,E.jsx)(t.code,{children:`TimelineChartAnnotation`}),` is designed to be used for creating custom annotations, markers
or illustrations on the timeline of the chart.`]}),`
`,(0,E.jsx)(u,{of:m}),`
`,(0,E.jsx)(i,{})]})}function T(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,E.jsx)(t,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;e((()=>{E=t(),r(),s(),c(),h(),S(),p()}))();export{T as default};