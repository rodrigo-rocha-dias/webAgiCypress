/* global Given, Then, When */
import HomePage from "../../support/page/homePage";
const homePage = new HomePage();

Given("que esteja no site blogAgi", () => {
    homePage.acessarSite()
})

When("buscar por {string} na lupa no canto superior direito da tela", (texto) => {
    homePage.buscarConteudo(texto)
})

Then("sera retornado artigo com sucesso", () => {
    homePage.validarResultadoEsperado()
})

Then("sera retornado mensagem no centro da tela {string}", (mensagemTela) => {
    homePage.validarMensagemTela(mensagemTela)
})