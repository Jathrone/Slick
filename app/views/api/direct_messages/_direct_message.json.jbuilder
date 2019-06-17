participant_ids = []
direct_message.participants.each do |participant|
    if participant.id != current_user.id
        participant_ids.push(participant.id)
    end
end

json.id direct_message.id
json.createdAt direct_message.created_at
json.updatedAt direct_message.updated_at
json.participantIds do 
    json.array! participant_ids
end