import { defaultText } from '../../src/app/default-data/default-text';

describe('Home page', () => {
  it('check title', () => {
    cy.visit('/');
    cy.contains('Keyboard trainer');
  });

  it('check input', () => {
    cy.visit('/');

    cy.get('[data-testid="key-input"]').type(defaultText[0]);
    cy.get('#pastString-0').contains(defaultText[0]);
    cy.get('#futureString-0').contains(defaultText[1]);

    cy.get('[data-testid="key-input"]').type(defaultText[1]);
    cy.get('#pastString-0').contains(defaultText[0]);
    cy.get('#pastString-1').contains(defaultText[1]);
    cy.get('#futureString-0').contains(defaultText[2]);

    const wrongKey = 'Y';
    cy.get('[data-testid="key-input"]').type(wrongKey);
    cy.get('#pastString-3').contains(wrongKey);
    cy.get('#pastString-2').contains(defaultText[2]);
    cy.get('#pastString-1').contains(defaultText[1]);
    cy.get('#pastString-0').contains(defaultText[0]);
    cy.get('#futureString-0').contains(defaultText[3]);
    cy.get('#futureString-4').contains(defaultText[2]);
    cy.get('[data-testid="info-panel-presses"]').contains('2');

  });
});
