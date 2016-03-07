class AddSharedToMatrices < ActiveRecord::Migration
  def change
    add_column :matrices, :shared, :boolean, :default => true
  end
end
