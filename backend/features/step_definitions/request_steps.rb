When('I make a GET request to {string}') do |endpoint|
  @response = get endpoint
end

Then('I should get an OK response') do
  expect(@response.status).to eql 200
end

Then('that response should include the following products:') do |table|
  expect(table.hashes).to eql JSON.parse @response.body
end
