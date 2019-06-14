participant_ids = []
direct_message.participants.each do |participant|
    if participant.id != current_user.id
        participant_ids.push(participant.id)
    end
end

json.id direct_message.id

json.participantIds do 
    json.array! participant_ids
end