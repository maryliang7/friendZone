class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :location_id, null: false
      t.string :picture_url
      t.timestamps
    end
    add_index :posts, :author_id
    add_index :posts, :location_id
  end
end
