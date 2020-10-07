Feature: Customer adds item to their cart

  In order to purchase an item I am interested in
  As a customer browsing a product page
  I want to add an item to my cart

  Acceptance criteria:

  Given I am on a product page
  When I press Add To Cart
  Then I should an indication that my item was added to my cart

  For each item I see:
    - Product image
    - Product name
    - Product attributes [size, color, material]
    - Product price

  Scenario: Success
    Given the following product:
        | name            | sku         | cost  | product_type | size |
        | Mattress - Twin | MAT-TN-01-T | 35000 | mattress     | twin |
    And I am on the home page
    Then I should not see "1 item added to your cart"
    When I click "Mattresses"
    And I click "The Original"
    And I select "Twin" from "Size"
    And I press "Add to Cart"
    Then I should see "1 item added to your cart"
