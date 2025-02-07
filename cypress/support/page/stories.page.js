/// <reference types="Cypress" />
import StoriesElements from '../elements/stories.elements';
const storiesElements = new StoriesElements();

class StoriesPage {

    validarUrlPagina() {
        cy.wait(2000)
        cy.url().should('include', '/web-stories').and('eq', 'https://blog.agibank.com.br/web-stories/', { timeout: 5000 });
    }

    clicarPrimeiroItemLista() {
        storiesElements.primeiroItemLista().first().click()
    }

    validarStories() {
        storiesElements.itemStories().should('be.visible')
    }

}

export default StoriesPage;
