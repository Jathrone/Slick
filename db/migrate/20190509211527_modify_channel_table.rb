class ModifyChannelTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :creator_id
    add_column :channels, :workspace_id, :integer,  null: false
    add_index :channels, :workspace_id
  end
end
