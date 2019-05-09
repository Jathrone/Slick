
users = []
@chat.messages.each do |message|
    if !users.include?(message.sender)
        users.append(message.sender)
    end
end

json.messages do 
    @chat.messages.each do |message|
        json.set! message.id do 
            json.partial! "api/messages/message", message: message
        end 
    end
end

json.senders do 
    @chat.messages.each do |message|
        json.partial! "api/users/index", users: users
    end
end

