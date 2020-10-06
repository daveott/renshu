import { Given } from "cypress-cucumber-preprocessor/steps";

Given(`I am on the home page`, (page) => {
  cy.visit(`/`)
})
