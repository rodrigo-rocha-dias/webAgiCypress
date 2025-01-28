# webAgiCypress
# Projeto de Testes Web com Cypress e Cucumber

Este repositório contém um projeto de testes para uma aplicação web utilizando Cypress e Cucumber. O objetivo é garantir a qualidade e a confiabilidade da aplicação através de testes automatizados.

## Configuração do Ambiente

### Passo 1: Inicialização do Projeto

1. **Criação do Diretório do Projeto**:
    ```bash
    mkdir projeto-web-cypress
    cd projeto-web-cypress
    ```

2. **Inicialização do NPM**:
    ```bash
    npm init -y
    ```

### Passo 2: Instalação do Cypress e Cucumber

1. **Instalação do Cypress e Cucumber como Dependências de Desenvolvimento**:
    ```bash
    npm install cypress --save-dev
    npm install cypress-cucumber-preprocessor --save-dev
    ```

### Passo 3: Configuração do Cypress

1. **Configurar o Cypress para Usar o Cucumber**:
    Crie ou edite o arquivo `cypress.config.js`:

    ```javascript
    const cucumber = require('cypress-cucumber-preprocessor').default;
    const { defineConfig } = require("cypress");

    module.exports = defineConfig({
      e2e: {
        setupNodeEvents(on, config) {
          on('file:preprocessor', cucumber());
        },
        specPattern: "cypress/e2e/step_definitions/*.feature"
      }
    });
    ```

### Passo 4: Estrutura do Projeto

1. **Criação da Estrutura de Pastas e Arquivos de Teste**:
    Crie uma pasta `e2e` dentro da pasta `cypress` e, dentro dela, crie uma subpasta `step_definitions` para armazenar seus arquivos de feature e steps:

    ```bash
    mkdir -p cypress/e2e/step_definitions
    ```

2. **Escrita do Primeiro Teste**:
    Crie um arquivo de feature, por exemplo `home.feature`, e escreva seu cenário em Gherkin:

    ```gherkin
    Feature: Home

    Scenario: Buscar conteúdo existente
        Given que esteja no site blogAgi
        When buscar por "Nota salvador" na lupa no canto superior direito da tela
        Then sera retornado artigo com sucesso
    ```

3. **Implementar os Steps**:
    Implemente os steps correspondentes em um arquivo JavaScript, por exemplo `home.steps.js`:

    ```javascript
    const { Given, When, Then } = require('@cucumber/cucumber');

    Given('the user is on the login page', function () {
      // Implementação do step
    });

    When('the user enters valid credentials', function () {
      // Implementação do step
    });

    Then('the user is redirected to the homepage', function () {
      // Implementação do step
    });
    ```

### Passo 5: Executar os Testes

1. **Execução dos Testes em Modo Interativo ou Headless**:
    - Modo interativo:
        ```bash
        npx cypress open
        ```
        - Na interface do Cypress, clique no arquivo de teste `web_test.spec.js` para executar os testes.

    - Modo headless:
        ```bash
        npx cypress run
        ```

## Relatório de Resultados

Para gerar relatórios detalhados após a execução dos testes, usamos a biblioteca `cypress-mochawesome-reporter`.

### Passos para Configuração do Relatório

1. **Instalar `cypress-mochawesome-reporter`**:
    ```bash
    npm install --save-dev cypress-mochawesome-reporter
    ```

2. **Configurar o Cypress para Usar o `cypress-mochawesome-reporter`**:
    No arquivo `cypress.config.js`, adicione a configuração do reporter:

    ```javascript
    const { defineConfig } = require('cypress');

    module.exports = defineConfig({
      viewportWidth: 1366,
      viewportHeight: 768,
      defaultCommandTimeout: 15000,
      requestTimeout: 5000,
      responseTimeout: 30000,
      video: false,
      videoCompression: 15,
      videoUploadOnPasses: false,
      screenshotOnRunFailure: true,
      screenshotsFolder: 'cypress/screenshots',
      videosFolder: 'cypress/videos',
      downloadsFolder: 'cypress/downloads',
      trashAssetsBeforeRuns: true,
      reporter: 'cypress-mochawesome-reporter',
      reporterOptions: {
        reportDir: 'cypress/reports',
        overwrite: false,
        html: true,
        json: true,
        timestamp: 'mmddyyyy_HHMMss',
      },
      retries: {
        runMode: 0,
        openMode: 0,
      },
      e2e: {
        setupNodeEvents(on, config) {
          require('cypress-mochawesome-reporter/plugin')(on);
          require('./cypress/plugins/index.js')(on, config);
        },
        specPattern: 'cypress/integration/**/*.spec.js',
        slowTestThreshold: 10000,
        supportFile: 'cypress/support/e2e.js',
      }
    });
    ```

3. **Adicionar o `cypress-mochawesome-reporter` ao Suporte**:
    No arquivo `cypress/support/e2e.js`, adicione o seguinte para habilitar o reporter:

    ```javascript
    import 'cypress-mochawesome-reporter/register';
    ```

4. **Executar os Testes e Gerar o Relatório**:
    Para rodar os testes e gerar os relatórios, use o comando:
    ```bash
    npx cypress run --reporter cypress-mochawesome-reporter
    ```

### Visualização dos Resultados
Após a execução dos testes, os relatórios serão gerados na pasta `cypress/reports`. Você pode abrir o arquivo HTML no seu navegador para visualizar os resultados.

## Integração com o GitHub

1. **Inicialização do Repositório Git Local e Commit Inicial**:
    ```bash
    git init
    git add .
    git commit -m "Primeiro commit - adicionando todos os arquivos do projeto"
    ```

2. **Vinculação ao Repositório Remoto no GitHub**:
    ```bash
    git remote add origin https://github.com/rodrigo-rocha-dias/webAgiCypress.git
    git push -u origin master
    ```

---

