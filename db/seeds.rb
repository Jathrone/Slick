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
User.create!({workspace_id: Workspace.find_by({name: "Demo-workspace"}).id, display_name: "Fortinbras", email: "fortinbras@hamlet.com", password: "password"})
User.create!({workspace_id: Workspace.find_by({name: "Demo-workspace"}).id, display_name: "Francisco", email: "francisco@hamlet.com", password: "password"})
User.create!({workspace_id: Workspace.find_by({name: "Demo-workspace"}).id, display_name: "Gertrude", email: "gertrude@hamlet.com", password: "password"})
User.create!({workspace_id: Workspace.find_by({name: "Demo-workspace"}).id, display_name: "Ghost", email: "ghost@hamlet.com", password: "password"})
User.create!({workspace_id: Workspace.find_by({name: "Demo-workspace"}).id, display_name: "Guildenstern", email: "guildenstern@hamlet.com", password: "password"})
User.create!({workspace_id: Workspace.find_by({name: "Demo-workspace"}).id, display_name: "Hamlet", email: "hamlet@hamlet.com", password: "password"})
User.create!({workspace_id: Workspace.find_by({name: "Demo-workspace"}).id, display_name: "Laertes", email: "laertes@hamlet.com", password: "password"})
User.create!({workspace_id: Workspace.find_by({name: "Demo-workspace"}).id, display_name: "Marcellus", email: "marcellus@hamlet.com", password: "password"})
User.create!({workspace_id: Workspace.find_by({name: "Demo-workspace"}).id, display_name: "Osric", email: "osric@hamlet.com", password: "password"})
User.create!({workspace_id: Workspace.find_by({name: "Demo-workspace"}).id, display_name: "Polonius", email: "polonius@hamlet.com", password: "password"})
User.create!({workspace_id: Workspace.find_by({name: "Demo-workspace"}).id, display_name: "Reynaldo", email: "reynaldo@hamlet.com", password: "password"})
User.create!({workspace_id: Workspace.find_by({name: "Demo-workspace"}).id, display_name: "rosencrantz", email: "rosencrantz@hamlet.com", password: "password"})
User.create!({workspace_id: Workspace.find_by({name: "Demo-workspace"}).id, display_name: "Voltemand", email: "voltemand@hamlet.com", password: "password"})
Channel.create!({workspace_id: Workspace.find_by({name: "Demo-workspace"}).id, name: "general"})
Channel.create!({workspace_id: Workspace.find_by({name: "Demo-workspace"}).id, name: "announcements"})
