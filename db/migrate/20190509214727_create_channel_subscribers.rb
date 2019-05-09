class CreateChannelSubscribers < ActiveRecord::Migration[5.2]
  def change
    create_table :channel_subscribers do |t|
      t.integer :channel_id, null: false
      t.integer :subscriber_id, null: false
      t.boolean :is_muted, null:false
      t.timestamps
    end

    add_index :channel_subscribers, [:subscriber_id, :channel_id], unique: true, name: "channel_subscriber_index"
    add_index :channel_subscribers, :channel_id
  end
end
