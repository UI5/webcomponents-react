import{j as e}from"./iframe-d6kFjKmB.js";import{useMDXComponents as r}from"./index-C_GtGqSz.js";import{M as h,C as i,a as l,A as c}from"./blocks-cydmgMgt.js";import"./Tag-pDj71kKq.js";import"./index-Df2R9LIn.js";import{C as d}from"./ControlsWithNote-akDrH3MV.js";import{D as m}from"./DocsHeader-BylOnSY4.js";import{F as f}from"./CommandsAndQueries-CN1OL-NC.js";import{S as p}from"./SubcomponentsSection-BVy4lpQe.js";import{C as o,D as a,W as x,a as u,b as g,L as j,T as v}from"./TimeLineChart.stories-1ybL0cNU.js";import"./preload-helper-PPVm8Dsz.js";import"./information-U09OVfZR.js";import"./sys-enter-2-Iyx_uxbM.js";import"./alert-BF6Rf2Y5.js";import"./index-ByGA7EJm.js";import"./index-CPMalJUe.js";import"./Link-sWUxxSV7.js";import"./copy-CargNeW6.js";import"./copy-10s1L_tU.js";import"./GitHub-Mark-DoOcp9P3.js";import"./TableOfContent-D6ljph8i.js";import"./index-C-SdRuQi.js";import"./index-Ct6Sh5v4.js";import"./index-CYwfFviQ.js";import"./index-Bn3tqYuU.js";import"./index-Cmh3YBGn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cp8_wMdK.js";import"./addCustomCSSWithScoping-CykojlcF.js";import"./ThemingParameters-pyhX3s39.js";import"./react-content-loader.es-DKHv_qon.js";function s(n){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:o}),`
`,e.jsx(m,{of:o,isChart:!0,since:"1.10.0",experimental:!0}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(d,{of:a}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(t.h3,{id:"with-annotations",children:"With Annotations"}),`
`,e.jsxs(t.p,{children:["This example shows how the ",e.jsx(t.code,{children:"TimelineChart"}),` is used to visualize a simple simulation of the
`,e.jsx(t.a,{href:"https://en.wikipedia.org/wiki/Earliest_deadline_first_scheduling",rel:"nofollow",children:e.jsx("b",{children:"Earliest Deadline First"})}),` scheduling
algorithm. The tasks are shown in the chart and the annotations are added on top and used to indicate the
arrival time, period and deadline of the tasks. The `,e.jsx(t.code,{children:"TimelineChartAnnotation"}),` component provides a way to specify the row
the annotations are applied to. For the annotations to scale well with the scaling of the width of the timeline, when
zooming is done, a `,e.jsx(t.strong,{children:"ResizeObserver"})," could be used if desired. But for most purposes, the ",e.jsx(t.code,{children:"TimelineChartBodyCtx"}),` provided
should suffice. Using the React `,e.jsx(t.code,{children:"useContext"})," hook to get the context and the ",e.jsx(t.em,{children:"chartBodyWidth"}),` property should help with
the scaling. This will prevent having to create too many ResizeObservers and affecting performance.`]}),`
`,e.jsxs(t.p,{children:[`The annotations are drawn using the HTML canvas and all the annotations for the same row are drawn at the same time using
the `,e.jsx(t.code,{children:"TimingFigure"}),` custom component created for this specific example. As can be seen, the annotations scale neatly without
blurring when the timeline is zoomed. A valueFormat `,e.jsx(t.code,{children:"(x) => Number.parseFloat(x).toFixed(2)"}),` has also been applied to the
ticks and tooltip numbers.`]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(t.h4,{id:"timingfigure-code",children:"TimingFigure Code"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show Code"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`export const TimingFigure = ({ arrival, period, deadline, totalDuration }) => {
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
`,e.jsx(t.h3,{id:"with-annotations-only",children:"With Annotations Only"}),`
`,e.jsxs(t.p,{children:[`Using annotations can be so powerful. This allows a very good customization of the timeline as desired. The
chart can be made to contain only custom annotations that utilize the other features available in the
`,e.jsx(t.code,{children:"TimelineChart"}),`. By default, the annotations are set so that they dont interact with the mouse. If an
interaction with the mouse is needed for the custom annotation, the annotation should have the
`,e.jsx(t.code,{children:"pointerEvents"})," set to ",e.jsx(t.em,{children:"auto"})," in its own style."]}),`
`,e.jsx(t.p,{children:`The example below shows the timeline for the some of the most momentuous inventions in the
last 6000 years from the year 2022. These annotations have been made using SVG just to
demonstrate that any valid element can be used for making the annotations.`}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(t.h3,{id:"with-more-customization",children:"With More Customization"}),`
`,e.jsxs(t.p,{children:["A lot more things can be customized in the ",e.jsx(t.code,{children:"TimelineChart"}),". These include:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"The color of each item on a row."}),`
`,e.jsx(t.li,{children:"The label of each item on a row."}),`
`,e.jsxs(t.li,{children:["The kind of connections between two different items:",`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"Start-To-Start"}),`
`,e.jsx(t.li,{children:"Start-To-Finish"}),`
`,e.jsx(t.li,{children:"Finish-To-Start"}),`
`,e.jsx(t.li,{children:"Finish-To-Finish"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(t.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(l,{children:p}),`
`,e.jsx(t.h2,{id:"timelinechartannotation",children:"TimelineChartAnnotation"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"TimelineChartAnnotation"}),` is designed to be used for creating custom annotations, markers
or illustrations on the timeline of the chart.`]}),`
`,e.jsx(c,{of:v}),`
`,e.jsx(f,{})]})}function Y(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{Y as default};
