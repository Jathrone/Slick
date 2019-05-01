users.each do |user|
    json.set! user.id do
        json.partial! "api/users/user.json.jbuilder", user: user
    end
end