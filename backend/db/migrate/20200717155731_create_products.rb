class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :model_number
      t.string :size
      t.integer :cost
      t.string :product_type
      t.timestamps
    end
  end
end
