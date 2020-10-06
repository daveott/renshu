Rails.application.routes.draw do
  if Rails.env.test?
    require 'test_routes'
    define_test_routes
  end
end
