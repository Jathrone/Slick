# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Workspace.delete_all
User.delete_all
Channel.delete_all
Workspace.create({creator_email: "user@demo.com", name: "Demo-workspace"})
User.create({workspace_id: 1, display_name: "DemoUser", email: "user@demo.com", password: "password"})
Channel.create({workspace_id: 1, name: "general"})
Channel.create({workspace_id: 1, name: "announcements"})
