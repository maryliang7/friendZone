class AddColumnsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :work, :string
    add_column :users, :hometown, :string
    add_column :users, :languages, :string
  end
end
