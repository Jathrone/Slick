class CreateDirectMessageParticipants < ActiveRecord::Migration[5.2]
  def change
    create_table :direct_message_participants do |t|
      t.integer :direct_message_id, null:false
      t.integer :participant_id, null:false
      t.boolean :is_muted, null:false
      t.timestamps
    end

    add_index :direct_message_participants, [:participant_id, :direct_message_id], unique: true, name: "dm_participant_index"
    add_index :direct_message_participants, :direct_message_id
  end
end
