class CreateWorkspaces < ActiveRecord::Migration[5.2]
  def change
    create_table :workspaces do |t|
      t.string :name, null: false
      t.string :creator_email, null: false
      t.timestamps
    end

    add_index :workspaces, :name, unique: true
  end
end
