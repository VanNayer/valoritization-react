class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks, id: :uuid do |t|
      t.string :title
      t.integer :value
      t.integer :cost
      t.string :description
      t.boolean :completed

      t.timestamps null: false
    end
  end
end
