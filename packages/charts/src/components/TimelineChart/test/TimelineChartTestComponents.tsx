import { useReducer } from 'react';
import { TimingFigure } from '../examples/Annotations.js';
import { dummyDataSet, illegalConnDataset, illegalConnDataset2, schedulingEDFData } from '../examples/Dataset.js';
import { TimelineChart } from '../index.js';
import { TimelineChartAnnotation } from '../TimelineChartAnnotation.js';

// --- Basic rendering tests (no state needed, used directly in spec) ---

// --- Connection layer toggle ---
export function ConnectionLayerToggle() {
  const [showConn, toggleShowConn] = useReducer((prev) => !prev, undefined);
  return (
    <>
      <button onClick={toggleShowConn}>Toggle Connection</button>
      <TimelineChart dataset={dummyDataSet} totalDuration={150} showConnection={showConn} />
    </>
  );
}

// --- Annotation layer toggle ---
export function AnnotationLayerToggle() {
  const [showAnn, toggleShowAnn] = useReducer((prev) => !prev, undefined);
  const [renderAnn, toggleAnn] = useReducer((prev) => !prev, undefined);
  return (
    <>
      <button onClick={toggleShowAnn}>Toggle Annotations visibility</button>
      <button onClick={toggleAnn}>Toggle Annotations</button>
      <TimelineChart
        dataset={dummyDataSet}
        totalDuration={150}
        showAnnotation={showAnn}
        annotations={
          renderAnn && (
            <>
              <TimelineChartAnnotation
                rowIndex={0}
                rowHeight={35}
                figure={<TimingFigure arrival={0} period={4} deadline={4} totalDuration={15} />}
              />
              <TimelineChartAnnotation
                rowIndex={1}
                rowHeight={35}
                figure={<TimingFigure arrival={4} period={5} deadline={5} totalDuration={15} />}
              />
              <TimelineChartAnnotation
                rowIndex={2}
                rowHeight={35}
                figure={<TimingFigure arrival={0} period={7} deadline={6} totalDuration={15} />}
              />
            </>
          )
        }
      />
    </>
  );
}

// --- Error throwing tests ---
export function InvalidDiscreteLabelTest() {
  return (
    <TimelineChart dataset={schedulingEDFData} totalDuration={15} discreteLabels={['label1', 'label2']} isDiscrete />
  );
}

export function IllegalConnectionTest1() {
  return <TimelineChart dataset={illegalConnDataset} totalDuration={10} showConnection />;
}

export function IllegalConnectionTest2() {
  return <TimelineChart dataset={illegalConnDataset2} totalDuration={10} showConnection />;
}

// --- valueFormat callback test ---
export function ValueFormatTest() {
  return (
    <TimelineChart
      dataset={dummyDataSet}
      totalDuration={150}
      valueFormat={(x: number) => `${Math.round(x)}-formatted`}
    />
  );
}

// --- Mouse cursor test ---
export function MouseCursorTest() {
  return <TimelineChart dataset={dummyDataSet} totalDuration={150} />;
}

// --- Annotation position test ---
export function AnnotationPositionTest() {
  return (
    <TimelineChart
      dataset={dummyDataSet}
      totalDuration={150}
      annotations={<TimelineChartAnnotation rowIndex={2} rowHeight={20} figure={<div></div>} />}
      showAnnotation
    />
  );
}

// --- Tooltip and opacity test ---
export function TooltipOpacityTest() {
  return <TimelineChart dataset={dummyDataSet} totalDuration={150} />;
}

export function TooltipHiddenTest() {
  return <TimelineChart dataset={dummyDataSet} totalDuration={150} hideTooltip />;
}

// --- Wheel zoom test ---
export function WheelZoomTest() {
  return <TimelineChart dataset={dummyDataSet} totalDuration={150} />;
}

// --- Layer structure test ---
export function LayerStructureTest() {
  return (
    <TimelineChart
      dataset={dummyDataSet}
      totalDuration={150}
      showConnection
      annotations={<TimelineChartAnnotation rowIndex={2} rowHeight={20} figure={<div></div>} />}
      showAnnotation
    />
  );
}

// --- Column labels test: continuous ---
export function ColumnLabelsContinuousTest() {
  return (
    <TimelineChart
      dataset={dummyDataSet}
      totalDuration={10}
      width="500px"
      valueFormat={(x: number) => `${Math.round(x)}`}
    />
  );
}

// --- Column labels test: discrete ---
export function ColumnLabelsDiscreteTest() {
  return (
    <TimelineChart
      dataset={dummyDataSet}
      totalDuration={10}
      width="500px"
      valueFormat={(x: number) => `${Math.round(x)}`}
      isDiscrete
    />
  );
}

// --- Column labels test: discrete with labels ---
export function ColumnLabelsDiscreteWithLabelsTest() {
  return (
    <TimelineChart
      dataset={dummyDataSet}
      totalDuration={10}
      width="500px"
      valueFormat={(x: number) => `${Math.round(x)}`}
      isDiscrete
      discreteLabels={['one', 'two', ...new Array(8).fill('label')]}
    />
  );
}

// --- rowHeight test ---
export function RowHeightTest() {
  return <TimelineChart dataset={dummyDataSet} totalDuration={10} rowHeight={200} />;
}

// --- Unit and titles test ---
export function UnitAndTitlesTest() {
  return (
    <TimelineChart
      dataset={dummyDataSet}
      totalDuration={10}
      unit="unit"
      rowTitle="rowTitle"
      columnTitle="columnTitle"
    />
  );
}

// --- Start prop test ---
export function StartPropTest() {
  return (
    <TimelineChart
      dataset={dummyDataSet}
      totalDuration={10}
      start={5}
      valueFormat={(x: number) => `${Math.round(x)}`}
    />
  );
}
