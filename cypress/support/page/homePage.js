/// <reference types="Cypress" />
import HomeElements from '../elements/homeElements';
const homeElements = new HomeElements();

class HomePage {
    acessarSite() {
        cy.visit("https://blog.agibank.com.br/");
    }

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

    validarMensagemTela(mensagemTela) {
        // cy.get(homeElements.mensagemPagina())
        cy.get('.page-content > p')
            .should('be.visible')
            .and('contain.text', mensagemTela);
    }


}

export default HomePage;
