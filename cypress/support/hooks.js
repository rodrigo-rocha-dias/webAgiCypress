import { Before } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.window().then((win) => {
        win.sessionStorage.clear();
        win.localStorage.clear();
    });
});
