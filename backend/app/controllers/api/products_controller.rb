class Api::ProductsController < ApiController
  def index
    render json: Product.all.to_json(only: [:name, :sku, :size])
  end
end
