Rails.application.routes.draw do
  if Rails.env.test?
    require 'test_routes'
    define_test_routes
  end

  scope module: 'api', path: '/api' do
    resources :products, only: [:index]
  end
end
