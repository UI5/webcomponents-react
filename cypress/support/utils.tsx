import { getRGBColor } from '@ui5/webcomponents-base/dist/util/ColorConversion.js';
import type { ComponentType } from 'react';
import { useState } from 'react';

export function cypressPassThroughTestsFactory(Component: ComponentType, props?: Record<string, unknown>) {
  it('Pass Through HTML Standard Props', () => {
    const testId = 'component-to-be-tested';
    cy.mount(
      <Component
        data-testid={testId}
        data-special-test-prop="data-prop"
        aria-labelledby="aria-prop"
        id="element-id"
        className="thisClassIsUsedForTestingPurposesOnly"
        style={{ pointerEvents: 'none' }}
        title="Tooltip"
        customattribute="true"
        {...props}
      />,
    );

    cy.findByTitle('Tooltip').should('exist');

    cy.findByTestId(testId)
      .should('exist')
      .should('have.class', 'thisClassIsUsedForTestingPurposesOnly')
      .should('have.css', 'pointer-events', 'none')
      .should('have.attr', 'aria-labelledby', 'aria-prop')
      .should('have.attr', 'customattribute', 'true')
      .should('have.data', 'specialTestProp', 'data-prop');

    // special handling for ObjectPage Sections because of own ID handling...
    if (Component.displayName !== 'ObjectPageSection' && Component.displayName !== 'ObjectPageSubSection') {
      cy.findByTestId(testId).should('have.id', 'element-id');
    }
  });
}

interface MountWithCustomTagNameOptions {
  testTitle?: string;
  defaultTagName?: string;
  only?: boolean;
  wrapperComponent?: ComponentType<any>;
}
export function mountWithCustomTagName<P extends { as?: keyof HTMLElementTagNameMap }>(
  Component: ComponentType<P>,
  props?: P,
  options: MountWithCustomTagNameOptions = {},
) {
  const { testTitle = 'mount with custom tag name', defaultTagName, only, wrapperComponent } = options;
  const test = only ? it.only : it;
  test(testTitle, () => {
    const testId = 'component-to-be-tested';
    const as = props?.as ?? 'header';
    if (wrapperComponent) {
      const Wrapper = wrapperComponent;
      cy.mount(
        <Wrapper>
          <Component as={as} data-testid={testId} {...props} />
        </Wrapper>,
      );
    } else {
      cy.mount(<Component as={as} data-testid={testId} {...props} />);
    }
    cy.get(`${defaultTagName ?? as}[data-testid="${testId}"]`).should('be.visible');
  });
}

export const cssVarToRgb = (cssVar) => {
  const cssVarValue = getComputedStyle(document.documentElement).getPropertyValue(cssVar.match(/(--)[^)]+/)[0]);
  const rgbVal = getRGBColor(cssVarValue);
  return `rgb(${rgbVal.r}, ${rgbVal.g}, ${rgbVal.b})`;
};

export function testChartZoomingTool(Component, props) {
  it('zoomingTool', () => {
    cy.mount(<Component {...props} chartConfig={{ zoomingTool: true }} />);
    cy.get('.recharts-brush').should('be.visible');

    cy.mount(<Component {...props} chartConfig={{ zoomingTool: false }} />);
    cy.get('.recharts-brush').should('not.exist');

    cy.mount(<Component {...props} chartConfig={{ zoomingTool: { stroke: 'red' } }} />);
    cy.get('.recharts-brush').should('be.visible');
    cy.get('.recharts-brush [stroke="red"]').should('be.visible');
  });
}

export function testChartLegendConfig(Component, props) {
  it('legendConfig', () => {
    cy.mount(
      <Component
        {...props}
        chartConfig={{
          legendConfig: {
            formatter: (value) => <span data-testid="catval">{value}🐱</span>,
          },
        }}
      />,
    );
    cy.findAllByTestId('catval').should('be.visible');
  });
}

export function testPieSectorFocus(Component, props, { only }: { only?: boolean } = {}) {
  const chartConfig = { accessibilityLayer: true };
  const containerSelector = '[aria-roledescription="chart"]';
  const test = only ? it.only : it;

  test('sector focus - keyboard navigation: Tab, arrows, Enter', () => {
    const onDataPointClick = cy.spy().as('onDataPointClick');
    cy.mount(
      <>
        <button>before</button>
        <Component {...props} noAnimation chartConfig={chartConfig} onDataPointClick={onDataPointClick} />
        <button>after</button>
      </>,
    );

    cy.findByText('before').focus();
    cy.realPress('Tab');
    cy.focused()
      .should('have.attr', 'tabindex', '0')
      .should('have.attr', 'role', 'application')
      .should('have.attr', 'aria-roledescription', 'chart');

    cy.realPress('Tab');
    cy.focused()
      .should('have.attr', 'data-sector-index', '0')
      .and('have.attr', 'role', 'img')
      .and('have.attr', 'aria-label');

    cy.realPress('ArrowRight');
    cy.focused().should('have.attr', 'data-sector-index', '1');
    cy.realPress('ArrowLeft');
    cy.focused().should('have.attr', 'data-sector-index', '0');

    // Wraps from first to last
    cy.realPress('ArrowLeft');
    cy.focused().should('have.attr', 'data-sector-index', String(props.dataset.length - 1));

    cy.realPress('Enter');
    cy.get('@onDataPointClick').should(
      'have.been.calledWith',
      Cypress.sinon.match({
        detail: Cypress.sinon.match({
          dataIndex: props.dataset.length - 1,
        }),
      }),
    );

    cy.realPress(['Shift', 'Tab']);
    cy.focused().should('have.attr', 'aria-roledescription', 'chart').and('have.attr', 'tabindex', '0');
  });

  test('sector focus - activeSegment with Enter and Space', () => {
    const onDataPointClick = cy.spy().as('onDataPointClick');
    const StatefulChart = () => {
      const [activeSegment, setActiveSegment] = useState(3);
      return (
        <>
          <button>before</button>
          <Component
            {...props}
            noAnimation
            chartConfig={{ ...chartConfig, activeSegment }}
            onDataPointClick={(e) => {
              onDataPointClick(e);
              setActiveSegment(e.detail.dataIndex);
            }}
          />
        </>
      );
    };
    cy.mount(<StatefulChart />);
    cy.findByText('before').focus();
    cy.realPress('Tab');

    // Tab focuses the activeSegment
    cy.realPress('Tab');
    cy.focused().should('have.attr', 'data-sector-index', '3');

    cy.realPress('ArrowRight');
    cy.focused().should('have.attr', 'data-sector-index', '4');
    cy.realPress('Enter');
    cy.get('@onDataPointClick').should(
      'have.been.calledWith',
      Cypress.sinon.match({
        detail: Cypress.sinon.match({
          dataIndex: 4,
        }),
      }),
    );
    cy.get('.recharts-active-shape').should('exist');
    cy.focused().should('have.attr', 'data-sector-index', '4');

    cy.realPress('ArrowRight');
    cy.focused().should('have.attr', 'data-sector-index', '5');

    // Space activates on keyup — hold Space, arrow to next sector, then release
    cy.focused().then(($el) => $el[0].dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true })));
    cy.realPress('ArrowRight');
    cy.focused().should('have.attr', 'data-sector-index', '6');
    cy.focused().then(($el) => $el[0].dispatchEvent(new KeyboardEvent('keyup', { key: ' ', bubbles: true })));
    cy.get('@onDataPointClick').should(
      'have.been.calledWith',
      Cypress.sinon.match({
        detail: Cypress.sinon.match({
          dataIndex: 6,
        }),
      }),
    );
    cy.focused().should('have.attr', 'data-sector-index', '6');
  });

  test('sector focus - activeSegment out of bounds is clamped', () => {
    cy.mount(
      <>
        <button>before</button>
        <Component {...props} noAnimation chartConfig={{ ...chartConfig, activeSegment: 999 }} />
      </>,
    );
    cy.findByText('before').focus();
    cy.realPress('Tab');
    cy.realPress('Tab');
    cy.focused().should('have.attr', 'data-sector-index', String(props.dataset.length - 1));
  });

  test('sector focus - empty dataset is non-interactive', () => {
    cy.mount(<Component {...props} dataset={[]} noAnimation chartConfig={chartConfig} />);
    cy.get(containerSelector)
      .should('have.attr', 'tabindex', '0')
      .should('have.attr', 'aria-roledescription', 'chart')
      .should('not.have.attr', 'role', 'application');
  });

  test('sector focus - dataset shrink resets keyboard state', () => {
    const initialDataset = props.dataset;
    const smallDataset = initialDataset.slice(0, 3);
    const baseProps = { ...props, noAnimation: true, chartConfig };
    const StatefulChart = () => {
      const [ds, setDs] = useState(initialDataset);
      return (
        <>
          <button>before</button>
          <button onClick={() => setDs(smallDataset)}>shrink</button>
          <Component {...baseProps} dataset={ds} />
        </>
      );
    };
    cy.mount(<StatefulChart />);
    cy.findByText('before').focus();
    cy.realPress('Tab');
    cy.realPress('Tab');
    cy.realPress('Tab');

    for (let i = 0; i < 5; i++) {
      cy.realPress('ArrowRight');
    }
    cy.focused().should('have.attr', 'data-sector-index', '5');

    cy.findByText('shrink').click();
    cy.get(containerSelector).should('have.attr', 'tabindex', '0');

    cy.findByText('before').focus();
    cy.realPress('Tab');
    cy.realPress('Tab');
    cy.realPress('Tab');
    cy.focused().should('have.attr', 'data-sector-index');
  });

  test('sector focus - consumer event handlers are composed with internal handlers', () => {
    const onBlur = cy.spy().as('onBlur');
    const onFocus = cy.spy().as('onFocus');
    const onKeyDownCapture = cy.spy().as('onKeyDownCapture');
    cy.mount(
      <>
        <button>before</button>
        <Component
          {...props}
          noAnimation
          chartConfig={chartConfig}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyDownCapture={onKeyDownCapture}
        />
        <button>after</button>
      </>,
    );

    cy.findByText('before').focus();
    cy.realPress('Tab');
    cy.get('@onFocus').should('have.been.calledOnce');

    cy.realPress('Tab');
    cy.get('@onKeyDownCapture').should('have.been.called');
    cy.focused().should('have.attr', 'data-sector-index', '0');

    cy.findByText('after').click();
    cy.get('@onBlur').should('have.been.called');
    // raf defers exitSectorMode, so wait for tabindex to flip back
    cy.get(containerSelector).should('have.attr', 'tabindex', '0');
  });
}

export function testStackAggregateTotals(Component, props) {
  it('showStackAggregateTotals', () => {
    const { dataset, measures } = props;
    const stackAccessors = measures.filter((measure) => measure.stackId != null).map((measure) => measure.accessor);
    const expectedTotals: number[] = dataset.map((entry) =>
      stackAccessors.reduce((sum, accessor) => sum + (Number(entry[accessor]) || 0), 0),
    );

    cy.mount(<Component {...props} chartConfig={{ showStackAggregateTotals: true }} />);

    expectedTotals.forEach((total) => {
      cy.get('.recharts-label').contains(total).closest('text').should('have.attr', 'font-weight', 'bold');
    });

    // tooltip
    cy.get('.recharts-wrapper').trigger('mousemove', 'center', { force: true });
    cy.get('.recharts-tooltip-item').last().should('contain.text', 'Total : 560').and('have.css', 'font-weight', '700');

    cy.mount(<Component {...props} chartConfig={{ showStackAggregateTotals: false }} />);
    cy.get('.recharts-bar-rectangles').should('exist');
    cy.get('text[font-weight="bold"]').should('not.exist');
  });
}
