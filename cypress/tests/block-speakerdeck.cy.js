context('Speakerdeck Block Acceptance Tests', () => {
  describe('Visit a page', () => {
    beforeEach(() => {
      // Given a logged in editor
      cy.viewport('macbook-16');
      cy.createContent({
        contentType: 'Document',
        contentId: 'document',
        contentTitle: 'Test document',
      });
      cy.autologin();
    });

    it('As editor I can add a Speakerdeck block', function () {
      cy.visit('/document');
      cy.navigate('/document/edit');
      cy.get('.button .block-add-button').click({ force: true });
      cy.get('.blocks-chooser .common .button.speakerdeckBlock').click({
        force: true,
      });

      cy.get('.objectbrowser-field input').type(
        'https://speakerdeck.com/ericof/nem-tudo-e-codigo{enter}',
      );

      cy.get('.speakerdeck-wrapper.block-l', { timeout: 10000 }).should(
        'be.visible',
      );

      cy.get('#toolbar-save').click();
    });
  });
});
