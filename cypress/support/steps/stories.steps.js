/* global Given, Then, When */
import StoriesPage from "../page/stories.page";
const storiesPage = new StoriesPage();

Then("sera carregada a pagina de stories", () => {
    storiesPage.validarUrlPagina()
})

And("clicar no primeiro item da lista carregada", () => {
    storiesPage.clicarPrimeiroItemLista()
})

Then("sera carregado stories com sucesso", () => {
    storiesPage.validarStories()
})