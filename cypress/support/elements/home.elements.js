class HomeElements {
    botaoLupa = () => cy.get('.site-header-above-section-right > .ast-builder-layout-element');
    inputPesquisa = () => cy.get('#search-field');
    resultadoPesquisa = () => cy.get('.ast-post-format- > .post-content > .entry-title > a');
    mensagemPagina = () => cy.get('.page-content > p');
}

export default HomeElements;