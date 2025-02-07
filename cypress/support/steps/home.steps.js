/* global Given, Then, When */
import HomePage from "../page/home.page";
const homePage = new HomePage();

When("buscar por {string} na lupa no canto superior direito da tela", (texto) => {
    homePage.buscarConteudo(texto)
})

Then("sera retornado artigo com sucesso", () => {
    homePage.validarResultadoEsperado()
})

Then("sera carregada tela com titulo {string}", (titulo) => {
    storiesPage.validarTituloTela(titulo)
})