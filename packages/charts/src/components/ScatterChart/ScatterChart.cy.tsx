import { complexDataSet, scatterComplexDataSet } from '../../resources/DemoProps.js';
import { ScatterChart } from './index.js';
import { cypressPassThroughTestsFactory, testChartLegendConfig } from '@/cypress/support/utils';

const measures = [
  {
    accessor: 'users',
    label: 'Number',
    axis: 'x' as const,
  },
  {
    accessor: 'sessions',
    label: 'Sessions',
    axis: 'y' as const,
  },
  {
    accessor: 'volume',
    axis: 'z' as const,
  },
];

function activePointLabelShould(containerSelector: string, ...matchers: string[]) {
  cy.get(containerSelector)
    .should('have.attr', 'aria-activedescendant')
    .then((activeId) => {
      let chain = cy.get(`#${CSS.escape(activeId as string)}`).should('have.attr', 'aria-label');
      for (const m of matchers) {
        chain = chain.and('contain', m);
      }
    });
}

describe('ScatterChart', () => {
  it('Basic', () => {
    cy.mount(<ScatterChart dataset={scatterComplexDataSet} measures={measures} />);
    cy.get('.recharts-responsive-container').should('be.visible');
    cy.get('.recharts-scatter').should('have.length', 2);
    cy.get('.recharts-symbols[name="APJ"]').should('have.length', 12);
  });

  it('click handlers', () => {
    const onClick = cy.spy().as('onClick');
    const onLegendClick = cy.spy().as('onLegendClick');
    cy.mount(
      <ScatterChart
        dataset={scatterComplexDataSet}
        measures={measures}
        onDataPointClick={onClick}
        onLegendClick={onLegendClick}
        noAnimation
      />,
    );

    cy.get('[name="Users"]').eq(0).click();
    cy.get('@onClick')
      .should('have.been.calledOnce')
      .and(
        'have.been.calledWith',
        Cypress.sinon.match({
          detail: Cypress.sinon.match({
            payload: scatterComplexDataSet[0].data[0],
          }),
        }),
      );

    cy.contains('Users').click();
    cy.get('@onLegendClick').should(
      'have.been.calledWith',
      Cypress.sinon.match({
        detail: Cypress.sinon.match({
          value: 'Users',
        }),
      }),
    );
  });

  it('Loading Placeholder', () => {
    cy.mount(<ScatterChart dataset={[]} measures={[]} />);
    cy.get('.recharts-scatter').should('not.exist');
    cy.findByText('Loading...').should('exist');
  });

  it('accessibilityLayer: keyboard navigation, Enter, blur/re-focus, consumer handlers', () => {
    const chartConfig = { accessibilityLayer: true };
    const containerSelector = '[aria-roledescription="chart"]';
    const singleDataset = [
      {
        label: 'Series A',
        data: [
          { users: 100, sessions: 200, volume: 300 },
          { users: 50, sessions: 150, volume: 250 },
          { users: 200, sessions: 400, volume: 500 },
        ],
      },
    ];

    const onDataPointClick = cy.spy().as('onDataPointClick');
    const onBlur = cy.spy().as('onBlur');
    const onFocus = cy.spy().as('onFocus');
    const onKeyDownCapture = cy.spy().as('onKeyDownCapture');

    cy.mount(
      <>
        <button>before</button>
        <ScatterChart
          dataset={singleDataset}
          measures={measures}
          chartConfig={chartConfig}
          onDataPointClick={onDataPointClick}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyDownCapture={onKeyDownCapture}
        />
        <button>after</button>
      </>,
    );
    cy.get('[role="img"][aria-label]').should('have.length', 3);

    cy.findByText('before').focus();

    // container focused, first scatter "active"
    cy.realPress('Tab');
    cy.focused()
      .should('have.attr', 'tabindex', '0')
      .should('have.attr', 'role', 'application')
      .should('have.attr', 'aria-roledescription', 'chart');
    cy.get('@onFocus').should('have.been.calledOnce');
    activePointLabelShould(containerSelector, 'Number: 50');
    cy.get('[data-point-focused]').should('have.length', 1);

    // 2nd scatter "active" - forward by X
    cy.realPress('ArrowRight');
    activePointLabelShould(containerSelector, 'Number: 100');
    cy.get('@onKeyDownCapture').should('have.been.called');

    // 3rd scatter "active"
    cy.realPress('ArrowRight');
    activePointLabelShould(containerSelector, 'Number: 200');

    // 3rd scatter "active" -> last one
    cy.realPress('ArrowRight');
    activePointLabelShould(containerSelector, 'Number: 200');

    // 2nd scatter "active"
    cy.realPress('ArrowLeft');
    activePointLabelShould(containerSelector, 'Number: 100');

    cy.realPress('Enter');
    cy.get('@onDataPointClick').should(
      'have.been.calledWith',
      Cypress.sinon.match({
        detail: Cypress.sinon.match({ payload: singleDataset[0].data[0] }),
      }),
    );

    cy.get('[role="img"][aria-label]').eq(2).click();
    cy.get('@onDataPointClick').should('have.been.calledTwice');
    activePointLabelShould(containerSelector, 'Number: 200');

    // Leave chart
    cy.realPress('Tab');
    cy.focused().should('contain.text', 'after');
    cy.get(containerSelector).should('not.have.attr', 'aria-activedescendant');
    cy.get('[data-point-focused]').should('not.exist');
    cy.get('@onBlur').should('have.been.called');

    // Reenter chart
    cy.realPress(['Shift', 'Tab']);
    cy.focused().should('have.attr', 'aria-roledescription', 'chart');
    activePointLabelShould(containerSelector, 'Number: 200');

    cy.realPress('ArrowLeft');
    activePointLabelShould(containerSelector, 'Number: 100');
    cy.realPress('ArrowLeft');
    activePointLabelShould(containerSelector, 'Number: 50');
    cy.realPress('ArrowLeft');
    activePointLabelShould(containerSelector, 'Number: 50');
  });

  it('accessibilityLayer: multi-dataset points sorted by X then datasetIndex', () => {
    const chartConfig = { accessibilityLayer: true };
    const containerSelector = '[aria-roledescription="chart"]';
    const multiDataset = [
      {
        label: 'Alpha',
        data: [{ users: 30, sessions: 100, volume: 200 }],
      },
      {
        label: 'Beta',
        data: [
          { users: 30, sessions: 150, volume: 250 },
          { users: 60, sessions: 300, volume: 400 },
        ],
      },
    ];

    cy.mount(
      <>
        <button>before</button>
        <ScatterChart dataset={multiDataset} measures={measures} chartConfig={chartConfig} />
      </>,
    );

    cy.get('[role="img"][aria-label]').should('have.length', 3);
    cy.findByText('before').focus();
    cy.realPress('Tab');

    // Same X value (30): sorted by dataset index, Alpha (0) before Beta (1)
    activePointLabelShould(containerSelector, 'Alpha');
    cy.realPress('ArrowRight');
    activePointLabelShould(containerSelector, 'Beta', 'Number: 30');
    cy.realPress('ArrowRight');
    activePointLabelShould(containerSelector, 'Beta', 'Number: 60');
  });

  it('accessibilityLayer: multiple charts', () => {
    const chartConfig = { accessibilityLayer: true };
    const singleDataset = [
      {
        label: 'Series A',
        data: [
          { users: 100, sessions: 200, volume: 300 },
          { users: 50, sessions: 150, volume: 250 },
        ],
      },
    ];

    cy.mount(
      <>
        <button>before</button>
        <ScatterChart
          dataset={singleDataset}
          measures={measures}
          chartConfig={chartConfig}
          aria-roledescription="chart1"
        />
        <ScatterChart
          dataset={singleDataset}
          measures={measures}
          chartConfig={chartConfig}
          aria-roledescription="chart2"
        />
        <button>after</button>
      </>,
    );

    cy.get('[role="img"][id]').then(($els) => {
      const ids = [...$els].map((el) => el.id);
      expect(new Set(ids).size).to.equal(ids.length);
    });

    cy.findByText('before').focus();
    cy.realPress('Tab');
    cy.focused().should('have.attr', 'aria-roledescription', 'chart1');
    cy.realPress('ArrowRight');
    activePointLabelShould('[aria-roledescription="chart1"]:first', 'Number: 100');

    cy.realPress('Tab');
    cy.focused().should('have.attr', 'aria-roledescription', 'chart2');
    cy.realPress('ArrowRight');
    activePointLabelShould('[aria-roledescription="chart2"]:first', 'Number: 100');

    cy.realPress('Tab');
    cy.focused().should('contain.text', 'after');
  });

  [false, true].forEach((accessibilityLayer) => {
    it(`empty dataset (accessibilityLayer: ${accessibilityLayer})`, () => {
      cy.mount(<ScatterChart dataset={[]} measures={measures} chartConfig={{ accessibilityLayer }} />);
      cy.get('.recharts-scatter').should('not.exist');
      cy.findByText('Loading...').should('exist');
      if (accessibilityLayer) {
        cy.get('[aria-roledescription="chart"]')
          .should('have.attr', 'tabindex', '0')
          .should('not.have.attr', 'role', 'application');
      }
    });
  });

  testChartLegendConfig(ScatterChart, { dataset: complexDataSet, measures });

  cypressPassThroughTestsFactory(ScatterChart, { measures: [] });
});
