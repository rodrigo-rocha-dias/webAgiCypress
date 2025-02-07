/// <reference types="Cypress" />
import UtilElements from '../elements/util.elements';
const utilElements = new UtilElements();

class UtilPage {

    acessarSite() {
        cy.visit("https://blog.agibank.com.br/");
    }

    clicarMenu(menu) {
        utilElements.menu().contains(menu).click();
    }

    validarMensagemTela(mensagemTela) {
        cy.get('.page-content > p')
            .should('be.visible')
            .and('contain.text', mensagemTela);
    }

    validarTituloTela() {
        // cy.url().should('include', '/web-stories').and('eq', 'https://blog.agibank.com.br/web-stories/', { timeout: 5000 });
    }


}

export default UtilPage;
