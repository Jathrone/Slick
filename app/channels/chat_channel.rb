class ChatChannel < ApplicationCable::Channel
  def subscribed
    @first_channel = Channel.first
    stream_for @first_channel
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
