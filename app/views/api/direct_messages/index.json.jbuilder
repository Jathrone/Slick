@direct_messages.each do |direct_message|
    json.set! direct_message.id do
        json.partial! "api/direct_messages/direct_message", direct_message: direct_message
    end
end