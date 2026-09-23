import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { LoaderType } from '../../enums/LoaderType.js';
import { Loader } from './index.js';

describe('Loader', () => {
  it('indeterminate', () => {
    cy.mount(<Loader data-testid="loader" />);
    cy.findByTestId('loader').should('have.css', 'animation-duration', '1.2s');

    cy.mount(<Loader data-testid="loader" type={LoaderType.Indeterminate} />);
    cy.findByTestId('loader').should('have.css', 'animation-duration', '1.2s');
  });
  it('determinate', () => {
    cy.mount(<Loader type={LoaderType.Determinate} data-testid="loader" />);
    cy.findByTestId('loader')
      .should('have.css', 'animation-duration', '0s')
      // Chrome may serialize the computed value with an explicit `auto` height (e.g. `0px auto`)
      .should(($el) => {
        expect($el.css('background-size')).to.match(/^0px( auto)?$/);
      });

    cy.mount(<Loader type={LoaderType.Determinate} data-testid="loader" progress="50%" />);

    cy.findByTestId('loader')
      .should('have.css', 'animation-duration', '0s')
      .should(($el) => {
        expect($el.css('background-size')).to.match(/^50%( auto)?$/);
      });
  });
  it('with delay', () => {
    cy.mount(<Loader delay={300} data-testid="loader" />);
    cy.findByTestId('loader', { timeout: 200 }).should('not.exist');
    cy.findByTestId('loader').should('be.visible');
  });

  cypressPassThroughTestsFactory(Loader);
});
