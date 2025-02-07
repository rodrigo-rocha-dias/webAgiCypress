Feature: BlogAgi - Stories

    @regressivo @blogAgi @servicos
    Scenario: Acessar menu Stories
        Given que esteja no site blogAgi
        When clicar no menu "Stories"
        Then sera carregada a pagina de stories

    @regressivo @blogAgi @servicos
    Scenario: Clicar primeiro item da lista de stories
        Given que esteja no site blogAgi
        When clicar no menu "Stories"
        And clicar no primeiro item da lista carregada
        Then sera carregado stories com sucesso
