class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.integer :friend_one, null: false
      t.integer :friend_two, null: false
      t.timestamps
    end
    add_index :friendships, :friend_one
    add_index :friendships, :friend_two
    add_index :friendships, [:friend_one, :friend_two], unique: true
  end
end
