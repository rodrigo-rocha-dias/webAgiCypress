/// <reference types="Cypress" />
import HomeElements from '../elements/home.elements';
const homeElements = new HomeElements();

class HomePage {

    buscarConteudo(texto) {
        // cy.get(homeElements.botaoLupa()).click();
        // cy.get(homeElements.inputPesquisa()).type(`${texto}{enter}`);
        cy.get('.site-header-above-section-right > .ast-builder-layout-element').click()
        cy.get('#search-field').type(`${texto}{enter}`);
    }

    validarResultadoEsperado() {
        // cy.get(homeElements.resultadoPesquisa())
        cy.get('.ast-post-format- > .post-content > .entry-title > a')
            .should('be.visible')
            .and('contain.text', 'Nota Salvador');
    }

}

export default HomePage;
