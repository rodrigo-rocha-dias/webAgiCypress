Feature: BlogAgi - Home

    @regressivo @blogAgi @home
    Scenario: Buscar conteúdo existente
        Given que esteja no site blogAgi
        When buscar por "Nota salvador" na lupa no canto superior direito da tela
        Then sera retornado artigo com sucesso

    @regressivo @blogAgi @home
    Scenario: Buscar conteúdo inexistente
        Given que esteja no site blogAgi
        When buscar por "Teste123" na lupa no canto superior direito da tela
        Then sera retornado mensagem no centro da tela "Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras."
