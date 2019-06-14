class Api::DirectMessagesController < ApplicationController

    def create
        @direct_message = DirectMessage.create({})
        params[:user_ids].each do |user_id|
            user_id = user_id.to_i
            DirectMessageParticipant.create!({direct_message_id: @direct_message.id, participant_id: user_id})
        end 
        render :show
    end

    def index 
        @direct_messages = DirectMessage.joins(:participants).where("users.id = ?", current_user.id)
        if @direct_messages 
            render :index, status: 200
        else 
            render json: {}
        end
    end
end
