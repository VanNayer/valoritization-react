class CreateMatrices < ActiveRecord::Migration
  def change
    create_table :matrices do |t|
      t.string :name
      t.string :value
      t.string :cost

      t.timestamps null: false
    end
  end
end
