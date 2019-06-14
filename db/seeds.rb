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
Workspace.create!({creator_email: "user@demo.com", name: "Demo-workspace"})
User.create!({workspace_id: Workspace.find_by({name: "Demo-workspace"}).id, display_name: "DemoUser", email: "user@demo.com", password: "password"})
User.create!({workspace_id: Workspace.find_by({name: "Demo-workspace"}).id, display_name: "Barnardo", email: "barnardo@hamlet.com", password: "password"})
User.create!({workspace_id: Workspace.find_by({name: "Demo-workspace"}).id, display_name: "Claudius", email: "claudius@hamlet.com", password: "password"})
User.create!({workspace_id: Workspace.find_by({name: "Demo-workspace"}).id, display_name: "Cornelius", email: "cornelius@hamlet.com", password: "password"})
User.create!({workspace_id: Workspace.find_by({name: "Demo-workspace"}).id, display_name: "Ophelia", email: "ophelia@hamlet.com", password: "password"})
User.create!({workspace_id: Workspace.find_by({name: "Demo-workspace"}).id, display_name: "Horatio", email: "horatio@hamlet.com", password: "password"})
Channel.create!({workspace_id: Workspace.find_by({name: "Demo-workspace"}).id, name: "general"})
Channel.create!({workspace_id: Workspace.find_by({name: "Demo-workspace"}).id, name: "announcements"})
