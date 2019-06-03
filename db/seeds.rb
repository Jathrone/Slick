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
User.create({workspace_id: 1, display_name: "hamlet", email: "hamlet@hamlet.com", password:"password"})
Channel.create({workspace_id: 1, name: "general"})
Channel.create({workspace_id: 1, name: "announcements"})
Channel.create({workspace_id: 1, name: "monologue"})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'A little more than kin and less than kind.', created_at:'1599-08-20T14:22:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Not so, my lord; I am too much in the sun.', created_at:'1599-08-20T14:48:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Ay, madam, it is common.', created_at:'1599-08-20T15:14:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'“Seems,” madam? Nay, it is. I know not “seems.”', created_at:'1599-08-20T15:29:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'’Tis not alone my inky cloak, good mother,', created_at:'1599-08-20T15:45:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Nor customary suits of solemn black,', created_at:'1599-08-20T16:00:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Nor windy suspiration of forced breath,', created_at:'1599-08-20T16:22:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'No, nor the fruitful river in the eye,', created_at:'1599-08-20T16:49:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Nor the dejected havior of the visage,', created_at:'1599-08-20T16:52:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Together with all forms, moods, shapes of grief,', created_at:'1599-08-20T17:07:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'That can denote me truly. These indeed “seem,”', created_at:'1599-08-20T17:26:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'For they are actions that a man might play;', created_at:'1599-08-20T17:27:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'But I have that within which passes show,', created_at:'1599-08-20T17:31:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'These but the trappings and the suits of woe.', created_at:'1599-08-20T17:41:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'I shall in all my best obey you, madam.', created_at:'1599-08-20T17:43:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'O, that this too, too sullied flesh would melt,', created_at:'1599-08-20T17:59:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Thaw, and resolve itself into a dew,', created_at:'1599-08-20T18:38:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Or that the Everlasting had not fixed', created_at:'1599-08-20T18:41:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'His canon ’gainst self-slaughter! O God, God,', created_at:'1599-08-20T19:01:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'How weary, stale, flat, and unprofitable', created_at:'1599-08-20T19:29:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Seem to me all the uses of this world!', created_at:'1599-08-20T19:33:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Fie on ’t, ah fie! ’Tis an unweeded garden', created_at:'1599-08-20T20:02:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'That grows to seed. Things rank and gross in nature', created_at:'1599-08-20T20:23:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Possess it merely. That it should come to this:', created_at:'1599-08-20T20:29:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'But two months dead—nay, not so much, not two.', created_at:'1599-08-20T21:06:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'So excellent a king, that was to this', created_at:'1599-08-20T21:36:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Hyperion to a satyr; so loving to my mother', created_at:'1599-08-20T22:05:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'That he might not beteem the winds of heaven', created_at:'1599-08-20T22:35:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Visit her face too roughly. Heaven and Earth,', created_at:'1599-08-20T23:07:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Must I remember? Why, she would hang on him', created_at:'1599-08-20T23:19:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'As if increase of appetite had grown', created_at:'1599-08-20T23:40:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'By what it fed on. And yet, within a month', created_at:'1599-08-21T00:13:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'(Let me not think on ’t; frailty, thy name is woman!),', created_at:'1599-08-21T00:23:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'A little month, or ere those shoes were old', created_at:'1599-08-21T00:39:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'With which she followed my poor father’s body,', created_at:'1599-08-21T00:54:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Like Niobe, all tears—why she, even she', created_at:'1599-08-21T00:56:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'(O God, a beast that wants discourse of reason', created_at:'1599-08-21T01:32:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Would have mourned longer!), married with my uncle,', created_at:'1599-08-21T02:12:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'My father’s brother, but no more like my father', created_at:'1599-08-21T02:30:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Than I to Hercules. Within a month,', created_at:'1599-08-21T02:36:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Ere yet the salt of most unrighteous tears', created_at:'1599-08-21T02:45:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Had left the flushing in her gallèd eyes,', created_at:'1599-08-21T02:50:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'She married. O, most wicked speed, to post', created_at:'1599-08-21T03:05:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'With such dexterity to incestuous sheets!', created_at:'1599-08-21T03:11:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'It is not, nor it cannot come to good.', created_at:'1599-08-21T03:26:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'But break, my heart, for I must hold my tongue.', created_at:'1599-08-21T03:36:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'I am glad to see you well.', created_at:'1599-08-21T03:52:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Horatio—or I do forget myself!', created_at:'1599-08-21T03:58:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Sir, my good friend. I’ll change that name with you.', created_at:'1599-08-21T04:17:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'And what make you from Wittenberg, Horatio?—', created_at:'1599-08-21T04:24:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Marcellus?', created_at:'1599-08-21T05:02:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'I am very glad to see you. Good even, sir.—', created_at:'1599-08-21T05:27:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'But what, in faith, make you from Wittenberg?', created_at:'1599-08-21T06:01:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'I would not hear your enemy say so,', created_at:'1599-08-21T06:15:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Nor shall you do my ear that violence', created_at:'1599-08-21T06:46:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'To make it truster of your own report', created_at:'1599-08-21T07:11:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Against yourself. I know you are no truant.', created_at:'1599-08-21T07:25:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'But what is your affair in Elsinore?', created_at:'1599-08-21T07:52:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'We’ll teach you to drink deep ere you depart.', created_at:'1599-08-21T08:25:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'I prithee, do not mock me, fellow student.', created_at:'1599-08-21T08:50:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'I think it was to see my mother’s wedding.', created_at:'1599-08-21T09:30:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Thrift, thrift, Horatio. The funeral baked meats', created_at:'1599-08-21T09:40:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Did coldly furnish forth the marriage tables.', created_at:'1599-08-21T09:52:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Would I had met my dearest foe in heaven', created_at:'1599-08-21T10:24:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Or ever I had seen that day, Horatio!', created_at:'1599-08-21T10:51:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'My father—methinks I see my father.', created_at:'1599-08-21T11:05:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'In my mind’s eye, Horatio.', created_at:'1599-08-21T11:10:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'He was a man. Take him for all in all,', created_at:'1599-08-21T11:20:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'I shall not look upon his like again.', created_at:'1599-08-21T11:24:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Saw who?', created_at:'1599-08-21T11:25:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'The King my father?', created_at:'1599-08-21T11:52:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'For God’s love, let me hear!', created_at:'1599-08-21T11:56:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'But where was this?', created_at:'1599-08-21T12:08:30.594158'})
Message.create({sender_id:2, parent_type:'Channel', parent_id:'3',body:'Did you not speak to it?', created_at:'1599-08-21T12:40:30.594158'})
