import { Given } from "cypress-cucumber-preprocessor/steps";

Given(`I fill in {string} with {string}`, (label, text) => {
  cy.contains(label).should('have.attr', 'for').then($for => {
    cy.get(`#${$for}`).type(text)
  })
})

Given(`I click {string}`, (text) => {
  cy.contains(text).click()
})

Given(`I press {string}`, (text) => {
  cy.get('button').contains(text).click()
})

Given(`I should see {string}`, (text) => {
  cy.contains(text)
})

Given(`I select {string} from {string}`, (value, label) => {
  cy.get(".ant-select-selector").click()
  cy.contains(value).click()
})
