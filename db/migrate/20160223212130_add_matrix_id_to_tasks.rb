class AddMatrixIdToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :matrix_id, :uuid
    add_foreign_key :tasks, :matrices
  end
end
