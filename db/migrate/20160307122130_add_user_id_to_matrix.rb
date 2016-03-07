class AddUserIdToMatrix < ActiveRecord::Migration
  def change
    add_column :matrices, :user_id, :integer
    add_foreign_key :matrices, :users
  end
end
