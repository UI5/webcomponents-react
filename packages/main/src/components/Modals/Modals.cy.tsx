import { Bar, Button, MenuItem } from '../../webComponents/index.js';
import { Modals } from './index.js';

describe('Modals - static helpers', () => {
  it('showDialog', () => {
    const TestComp = () => {
      return (
        <>
          <Modals />
          <Button
            onClick={() => {
              const { close } = Modals.showDialog({
                children: 'Dialog Content',
                footer: <Bar endContent={<Button onClick={() => close()}>Close</Button>} />,
              });
            }}
          >
            Show Dialog
          </Button>
        </>
      );
    };
    cy.mount(<TestComp />);

    cy.findByText('Show Dialog').click();
    cy.findByText('Dialog Content').should('be.visible');
    cy.findByText('Close').click();
    cy.findByText('Dialog Content').should('not.exist');
  });

  it('showPopover', () => {
    const TestComp = () => {
      return (
        <>
          <Modals />
          <Button
            id="modals-show-popover"
            onClick={() => {
              const { close } = Modals.showPopover({
                opener: 'modals-show-popover',
                children: 'Popover Content',
                footer: <Bar endContent={<Button onClick={() => close()}>Close</Button>} />,
              });
            }}
          >
            Show Popover
          </Button>
          <br />
          <Button
            onClick={() => {
              Modals.showPopover(
                {
                  opener: 'modals-show-popover',
                  children: 'Popover 2',
                },
                { autoClosePopovers: true },
              );
            }}
          >
            Show Popover 2
          </Button>
        </>
      );
    };
    cy.mount(<TestComp />);

    cy.findByText('Show Popover').click();
    cy.findByText('Popover Content').should('be.visible');
    cy.findByText('Show Popover').click();
    cy.get('[ui5-popover]').should('have.length', 2);

    cy.findByText('Show Popover 2').click();
    cy.findByText('Popover 2').should('be.visible');
    cy.get('[ui5-popover]').should('have.length', 1);
  });

  it('showResponsivePopover', () => {
    const TestComp = () => {
      return (
        <>
          <Modals />
          <Button
            id="modals-show-responsive-popover"
            onClick={() => {
              Modals.showResponsivePopover({
                opener: 'modals-show-responsive-popover',
                children: 'ResponsivePopover Content',
              });
            }}
          >
            Show ResponsivePopover
          </Button>
          <br />
          <Button
            onClick={() => {
              Modals.showResponsivePopover(
                {
                  opener: 'modals-show-responsive-popover',
                  children: 'ResponsivePopover 2',
                },
                { autoClosePopovers: true },
              );
            }}
          >
            Show ResponsivePopover 2
          </Button>
        </>
      );
    };
    cy.mount(<TestComp />);

    cy.findByText('Show ResponsivePopover').click();
    cy.findByText('ResponsivePopover Content').should('be.visible');
    cy.findByText('Show ResponsivePopover').click();
    cy.get('[ui5-responsive-popover]').should('have.length', 2);

    cy.findByText('Show ResponsivePopover 2').click();
    cy.findByText('ResponsivePopover 2').should('be.visible');
    cy.get('[ui5-responsive-popover]').should('have.length', 1);
  });

  it('showMenu', () => {
    const TestComp = () => {
      return (
        <>
          <Modals />
          <Button
            id="modals-show-menu"
            onClick={() => {
              Modals.showMenu({
                opener: 'modals-show-menu',
                children: <MenuItem text="MenuItem 1" />,
              });
            }}
          >
            Show Menu
          </Button>
          <Button
            onClick={() => {
              Modals.showMenu(
                {
                  opener: 'modals-show-menu',
                  children: <MenuItem text="MenuItem 2" />,
                },
                { autoClosePopovers: true },
              );
            }}
          >
            Show Menu 2
          </Button>
        </>
      );
    };
    cy.mount(<TestComp />);

    cy.findByText('Show Menu').click();
    cy.get('[ui5-menu-item][text="MenuItem 1"]').should('be.visible');
    cy.findByText('Show Menu').click();
    cy.get('[ui5-menu]').should('have.length', 2);

    cy.findByText('Show Menu 2').click();
    cy.get('[ui5-menu-item][text="MenuItem 2"]').should('be.visible');
    cy.get('[ui5-menu]').should('have.length', 1);
  });

  it('showMessageBox', () => {
    const TestComp = () => {
      return (
        <>
          <Modals />
          <Button
            onClick={() => {
              Modals.showMessageBox({
                children: 'MessageBox Content',
              });
            }}
          >
            Show MessageBox
          </Button>
        </>
      );
    };
    cy.mount(<TestComp />);

    cy.findByText('Show MessageBox').click();
    cy.findByText('MessageBox Content').should('be.visible');
    cy.findByText('OK').click();
    cy.findByText('MessageBox Content').should('not.exist');
  });

  it('showToast', () => {
    const TestComp = () => {
      return (
        <>
          <Modals />
          <div id="container">
            <Button
              onClick={() => {
                Modals.showToast(
                  {
                    children: 'Toast Content',
                  },
                  document.getElementById('container'),
                );
              }}
            >
              Show Toast
            </Button>
          </div>
        </>
      );
    };
    cy.mount(<TestComp />);

    cy.findByText('Show Toast').click();
    cy.findByText('Toast Content').should('exist');
  });
});
