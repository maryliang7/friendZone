class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :education
      t.string :location
      t.date :birth_date
      t.string :gender, null: false
      t.text :about_me
      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true

  end
end