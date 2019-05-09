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

    end
end
