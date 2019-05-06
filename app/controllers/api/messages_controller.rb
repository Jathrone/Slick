class Api::MessagesController < ApplicationController

    def index
        parent_type, parent_id = params["parent_type"], params["parent_id"].to_i
        case parent_type
        when "Channel"
            @chat = Channel.find_by(id: parent_id)
        when "DirectMessage"
            @chat = DirectMessage.find_by(id: parent_id)
        when "Message"
            @chat = Message.find_by(id: parent_id)
        else 
            render json: ["invalid chat type detected, chat type must be of channel, directMessage, or message"]
        end

        if @chat
            render :index, status: 200
        else 
            render json: ["chat not found"], status: 404
        end 
    end

    def create
        @message = Message.new(message_params)
        if @message.save
            render :show, status: 200
        else 
            render json: @message.errors.full_messages, status: 404
        end
    end

    def destroy
    end

    def update
    end

    private
    def message_params
        params.require(:message).permit(:sender_id, :parent_type, :parent_id, :body)
    end
end
