class Api::ChannelsController < ApplicationController

    def index
        @channels = Channel.where(workspace_id: params[:workspace_id])
        if @channels
            render :index 
        else 
            render json: ["channels not found"], status: 404
        end
    end

    def create
        @channel = Channel.new(channel_params)
        if @channel.save 
            render :show 
        else 
            render json: @channel.errors.full_messages, status: 404
        end
    end

    private
    def channel_params
        params.require(:channel).permit(:name, :topic, :purpose, :workspace_id)
    end
end
