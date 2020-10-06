import { Given } from "cypress-cucumber-preprocessor/steps";

Given('the following product:', (table) => {
  let keys = table["rawTable"][0]
  let values = table["rawTable"][1]
  let attributes = Object.assign(...keys.map((k, i) => ({[k]: values[i]})))
  cy.factory('product', attributes)
})
