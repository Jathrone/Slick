class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.integer :sender_id, null: false
      t.string :parent_type, null: false
      t.integer :parent_id, null: false 
      t.text :body, null: false
      t.timestamps
    end

    add_index :messages, :sender_id
    add_index :messages, :parent_id
    add_index :messages, :parent_type
  end
end
