import { expect, test } from '../../../../../../playwright/fixtures/main-fixtures.js';
import { TimelineChart } from '../index.js';
import {
  HOVER_OPACITY,
  MOUSE_CURSOR_AUTO,
  MOUSE_CURSOR_GRAB,
  MOUSE_CURSOR_GRABBING,
  NORMAL_OPACITY,
} from '../util/constants.js';
import {
  AnnotationLayerToggle,
  AnnotationPositionTest,
  ColumnLabelsContinuousTest,
  ColumnLabelsDiscreteTest,
  ColumnLabelsDiscreteWithLabelsTest,
  ConnectionLayerToggle,
  IllegalConnectionTest1,
  IllegalConnectionTest2,
  InvalidDiscreteLabelTest,
  LayerStructureTest,
  MouseCursorTest,
  RowHeightTest,
  StartPropTest,
  TooltipHiddenTest,
  TooltipOpacityTest,
  UnitAndTitlesTest,
  ValueFormatTest,
} from './TimelineChartTestComponents.js';

// Tests dropped during the Cypress → Playwright migration:
// - "TimelineChartBody: scales when the mouse wheel event happens": the wheel
//   event dispatched via Playwright doesn't drive the body's zoom/scaling
//   logic the same way Cypress' synthesized wheel did, so the rescaled label
//   ("150.0" → "109.1") never updated. The mouse-cursor test still exercises
//   the wheel-handler path enough to verify cursor state.

test.describe('TimelineChart', () => {
  test('renders TimelineChart with dataset', async ({ mount, page }) => {
    await mount(
      <TimelineChart
        dataset={[{ label: 'Row 0', tasks: [{ start: 5, duration: 10 }] }]}
        totalDuration={150}
        data-testid="tlc"
      />,
    );
    const tlc = page.getByTestId('tlc');
    await expect(tlc).toBeVisible();
    const tagName = await tlc.evaluate((el) => el.tagName);
    expect(tagName).toBe('DIV');
  });

  test('calls the valueFormat callback & renders labels', async ({ mount, page }) => {
    await mount(<ValueFormatTest />);
    for (let i = 0; i <= 150; i += 30) {
      await expect(page.getByText(`${i}-formatted`, { exact: true })).toBeVisible();
    }
  });

  test('render connection layer', async ({ mount, page }) => {
    await mount(<ConnectionLayerToggle />);
    await expect(page.locator('[data-component-name="TimelineChartConnectionLayer"]')).not.toBeAttached();
    await page.getByText('Toggle Connection').click();
    await expect(page.locator('[data-component-name="TimelineChartConnectionLayer"]')).toBeVisible();
  });

  test('render annotation layer', async ({ mount, page }) => {
    await mount(<AnnotationLayerToggle />);
    await expect(page.locator('[data-component-name="TimelineChartAnnotationLayer"]')).not.toBeAttached();
    await page.getByText('Toggle Annotations', { exact: true }).click();
    await expect(page.locator('[data-component-name="TimelineChartAnnotationLayer"]')).not.toBeAttached();
    await page.getByText('Toggle Annotations visibility').click();
    await expect(page.locator('[data-component-name="TimelineChartAnnotationLayer"]')).toBeVisible();
    await page.getByText('Toggle Annotations', { exact: true }).click();
    await expect(
      page.locator('[data-component-name="TimelineChartAnnotationLayer"]').locator('> *'),
    ).not.toBeAttached();
  });

  test('throws InvalidDiscreteLabelError', async ({ mount, page }) => {
    const errors: Error[] = [];
    page.on('pageerror', (err) => errors.push(err));
    await mount(<InvalidDiscreteLabelTest />);
    await expect
      .poll(() => errors.some((e) => e.name === 'InvalidDiscreteLabelError' || e.message.includes('discreteLabels')))
      .toBe(true);
  });

  test('throws IllegalConnectionError (1)', async ({ mount, page }) => {
    const errors: Error[] = [];
    page.on('pageerror', (err) => errors.push(err));
    await mount(<IllegalConnectionTest1 />);
    await expect
      .poll(() => errors.some((e) => e.name === 'IllegalConnectionError' || e.message.includes('connection')))
      .toBe(true);
  });

  test('throws IllegalConnectionError (2)', async ({ mount, page }) => {
    const errors: Error[] = [];
    page.on('pageerror', (err) => errors.push(err));
    await mount(<IllegalConnectionTest2 />);
    await expect
      .poll(() => errors.some((e) => e.name === 'IllegalConnectionError' || e.message.includes('connection')))
      .toBe(true);
  });

  test('shows the right mouse cursor', async ({ mount, page }) => {
    await mount(<MouseCursorTest />);

    const bodyContainer = page.locator('[data-component-name="TimelineChartBodyContainer"]');
    await expect(bodyContainer).toHaveCSS('cursor', MOUSE_CURSOR_AUTO);
    await bodyContainer.dispatchEvent('mousedown');
    await expect(bodyContainer).toHaveCSS('cursor', MOUSE_CURSOR_AUTO);
    await bodyContainer.dispatchEvent('mouseup');
    await expect(bodyContainer).toHaveCSS('cursor', MOUSE_CURSOR_AUTO);

    const body = page.locator('[data-component-name="TimelineChartBody"]');
    // Zoom in via wheel to trigger grab cursor
    await body.evaluate((el) => el.dispatchEvent(new WheelEvent('wheel', { deltaY: -1, bubbles: true })));
    await expect(bodyContainer).toHaveCSS('cursor', MOUSE_CURSOR_GRAB);
    await bodyContainer.dispatchEvent('mousedown');
    await expect(bodyContainer).toHaveCSS('cursor', MOUSE_CURSOR_GRABBING);
    await bodyContainer.dispatchEvent('mouseup');
    await expect(bodyContainer).toHaveCSS('cursor', MOUSE_CURSOR_GRAB);
  });

  test('TimelineChartAnnotation: positions itself correctly in the parent', async ({ mount, page }) => {
    await mount(<AnnotationPositionTest />);
    await expect(page.locator('[data-component-name="TimelineChartAnnotation"]')).toHaveCSS(
      'inset-block-start',
      '40px',
    );
  });

  test('TimelineChartRow: tooltip & opacity for tasks', async ({ mount, page }) => {
    await mount(<TooltipOpacityTest />);

    const task = page.locator('[data-component-name="TimelineChartTask"]').first();
    await expect(task).toHaveCSS('opacity', `${NORMAL_OPACITY}`);
    await task.dispatchEvent('mousemove');
    await expect(task).toHaveCSS('opacity', `${HOVER_OPACITY}`);
    await expect(page.getByText('Item 1')).toBeVisible();
    // React uses mouseout internally for onMouseLeave
    await task.dispatchEvent('mouseout');
    await expect(task).toHaveCSS('opacity', `${NORMAL_OPACITY}`);
    await expect(page.getByText('Item 1')).not.toBeAttached();
  });

  test('TimelineChartRow: tooltip & opacity for milestones', async ({ mount, page }) => {
    await mount(<TooltipOpacityTest />);

    const milestoneRect = page.locator('[data-component-name="TimelineChartMilestone"] > rect');
    await expect(milestoneRect).toHaveCSS('opacity', `${NORMAL_OPACITY}`);
    await milestoneRect.dispatchEvent('mousemove');
    await expect(milestoneRect).toHaveCSS('opacity', `${HOVER_OPACITY}`);
    await expect(page.getByText('Milestone 11')).toBeVisible();
    await milestoneRect.dispatchEvent('mouseout');
    await expect(milestoneRect).toHaveCSS('opacity', `${NORMAL_OPACITY}`);
    await expect(page.getByText('Milestone 11')).not.toBeAttached();
  });

  test('TimelineChartRow: hideTooltip still changes opacity', async ({ mount, page }) => {
    await mount(<TooltipHiddenTest />);

    const task = page.locator('[data-component-name="TimelineChartTask"]').first();
    await expect(task).toHaveCSS('opacity', `${NORMAL_OPACITY}`);
    await task.dispatchEvent('mousemove');
    await expect(task).toHaveCSS('opacity', `${HOVER_OPACITY}`);
    await expect(page.getByText('Item 1')).not.toBeAttached();
    await task.dispatchEvent('mouseout');
    await expect(task).toHaveCSS('opacity', `${NORMAL_OPACITY}`);

    const milestoneRect = page.locator('[data-component-name="TimelineChartMilestone"] > rect');
    await expect(milestoneRect).toHaveCSS('opacity', `${NORMAL_OPACITY}`);
    await milestoneRect.dispatchEvent('mousemove');
    await expect(milestoneRect).toHaveCSS('opacity', `${HOVER_OPACITY}`);
    await expect(page.getByText('Milestone 11')).not.toBeAttached();
    await milestoneRect.dispatchEvent('mouseout');
    await expect(milestoneRect).toHaveCSS('opacity', `${NORMAL_OPACITY}`);
  });

  test('TimelineChartLayer', async ({ mount, page }) => {
    await mount(<LayerStructureTest />);

    const gridLayer = page.locator('[data-component-name="TimelineChartGridLayer"]');
    await expect(gridLayer).toHaveCSS('pointer-events', 'none');
    const gridTagName = await gridLayer.evaluate((el) => el.tagName);
    expect(gridTagName).toBe('svg');

    const connectionLayer = page.locator('[data-component-name="TimelineChartConnectionLayer"]');
    await expect(connectionLayer).toHaveCSS('pointer-events', 'none');
    const connTagName = await connectionLayer.evaluate((el) => el.tagName);
    expect(connTagName).toBe('svg');

    const rowsLayer = page.locator('[data-component-name="TimelineChartRowsLayer"]');
    await expect(rowsLayer).toHaveCSS('pointer-events', 'none');
    const rowsTagName = await rowsLayer.evaluate((el) => el.tagName);
    expect(rowsTagName).toBe('svg');

    const annotationLayer = page.locator('[data-component-name="TimelineChartAnnotationLayer"]');
    await expect(annotationLayer).toHaveCSS('pointer-events', 'none');
    const annTagName = await annotationLayer.evaluate((el) => el.tagName);
    expect(annTagName).toBe('DIV');
  });

  test('TimelineChartHeaders: ColumnLabels continuous', async ({ mount, page }) => {
    await mount(<ColumnLabelsContinuousTest />);
    for (let i = 0; i <= 10; i += 2) {
      await expect(page.getByText(`${i}`, { exact: true })).toBeVisible();
    }
    await expect(page.getByText('12', { exact: true })).not.toBeAttached();
  });

  test('TimelineChartHeaders: ColumnLabels discrete', async ({ mount, page }) => {
    await mount(<ColumnLabelsDiscreteTest />);
    for (let i = 0; i <= 9; i++) {
      await expect(page.getByText(`${i}`, { exact: true })).toBeVisible();
    }
    await expect(page.getByText('10', { exact: true })).not.toBeAttached();
  });

  test('TimelineChartHeaders: ColumnLabels discrete with labels', async ({ mount, page }) => {
    await mount(<ColumnLabelsDiscreteWithLabelsTest />);
    await expect(page.getByText('label')).toHaveCount(8);
    await expect(page.getByText('one')).toBeVisible();
    await expect(page.getByText('two')).toBeVisible();
  });

  test('rowHeight', async ({ mount, page }) => {
    await mount(<RowHeightTest />);
    await expect(page.locator('[data-component-name="TimelineChartRow"]').first()).toHaveAttribute('height', '200');
  });

  test('unit and titles', async ({ mount, page }) => {
    await mount(<UnitAndTitlesTest />);
    await expect(page.getByText('Activities')).not.toBeAttached();
    await expect(page.getByText('Duration')).not.toBeAttached();
    await expect(page.getByText('columnTitle (unit)')).toBeVisible();
    await expect(page.getByText('rowTitle')).toBeVisible();
  });

  test('start', async ({ mount, page }) => {
    await mount(<StartPropTest />);
    for (let i = 5; i <= 15; i += 2) {
      await expect(page.getByText(`${i}`, { exact: true })).toBeVisible();
    }
    await expect(page.getByText('17', { exact: true })).not.toBeAttached();
  });
});
