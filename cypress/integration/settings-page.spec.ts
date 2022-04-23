const newText =
  '123456789 abcdefghi 123456789 abcdefghi 123456789 abcdefghi 123456789 abcdefghi 123456789 abcdefghi 123456789 abcdefghi' +
  '123456789 abcdefghi 123456789 abcdefghi 123456789 abcdefghi 123456789 abcdefghi 123456789 abcdefghi 123456789 abcdefghi' +

  describe('settings-page', () => {
    it('set text', () => {
      cy.visit('/');
      cy.get('#go-to-settings-button').click();
      cy.location('pathname').should('include', 'settings');

      cy.get('#save-text-button').should('not.be.disabled');
      cy.get('#text-area').clear();
      cy.get('#save-text-button').should('be.disabled');
      cy.get('#text-area').type(newText);
      cy.get('#save-text-button').should('not.be.disabled');
      cy.get('#save-text-button').click();

      cy.get('#go-to-home-button').click();
      cy.get('#futureString-0 > div').contains(newText[0]);
      cy.get('#futureString-1 > div').contains(newText[1]);
      cy.get('#futureString-2 > div').contains(newText[2]);
    });
  });
