json.message do 
    json.partial! "api/messages/message", message: @message
end

json.sender do 
    json.partial! "api/users/user", user: @message.sender
end