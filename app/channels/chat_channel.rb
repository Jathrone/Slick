class ChatChannel < ApplicationCable::Channel
  def subscribed
    # TODO need logic here to limit user subscriptions to those channels they are involved in
    parent_type, parent_id = params[:parent_type], params[:parent_id]
    case parent_type
        when "Channel"
            @chat = Channel.find_by(id: parent_id)
        when "DirectMessage"
            @chat = DirectMessage.find_by(id: parent_id)
        when "Message"
            @chat = Message.find_by(id: parent_id)
        else 
            # TODO unsubscribe users with too many subscriptions, etc
            return nil
        end
    stream_for @chat
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
