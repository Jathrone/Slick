class Api::MessagesController < ApplicationController

    def index
        parent_type, parent_id = params["parent_type"], params["parent_id"].to_i
        case parent_type
        when "channel"
            @chat = Channel.find_by(id: parent_id)
        when "directMessage"
            @chat = DirectMessage.find_by(id: parent_id)
        when "message"
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
    end

    def destroy
    end

    def update
    end
end
