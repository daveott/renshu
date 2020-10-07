import { Given } from "cypress-cucumber-preprocessor/steps";

Given('the following product:', (table) => {
  const [keys, values] = table["rawTable"].slice(0,2)
  const attributes = Object.assign(...keys.map((k, i) => ({[k]: values[i]})))
  cy.factory('product', attributes)
})
