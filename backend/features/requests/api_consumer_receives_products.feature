Feature: API consumer receives products

  In order to consume product information across sales channels
  As an API consumer requesting products
  I want to receive products from an API endpoint

  I make a request to /api/products
  For each product I see
    - Name
    - SKU
    - Size

Scenario:
  Given the following products:
    | name         | sku        | size |
    | The Original | TN-MAT-001 | Twin |
  When I make a GET request to "/api/products"
  Then I should get an OK response
  And that response should include the following products:
    | name         | sku        | size |
    | The Original | TN-MAT-001 | Twin |
