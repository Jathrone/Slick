participant_ids = []
direct_message.participants.each do |participant|
    participant_ids.push(participant.id)
end

json.id direct_message.id

json.participantIds do 
    json.array! participant_ids
end