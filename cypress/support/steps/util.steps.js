/* global Given, Then, When */
import UtilPage from "../page/util.page";
const utilPage = new UtilPage();

Given("que esteja no site blogAgi", () => {
    utilPage.acessarSite()
})

When("clicar no menu {string}", (menu) => {
    utilPage.clicarMenu(menu)
})

Then("sera retornado mensagem no centro da tela {string}", (mensagemTela) => {
    utilPage.validarMensagemTela(mensagemTela)
})