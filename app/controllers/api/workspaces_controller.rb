class Api::WorkspacesController < ApplicationController

    def create
        @workspace = Workspace.new(workspace_params)
        if @workspace.save
            general = Channel.create({name:"general", workspace_id: @workspace.id})
            announcements = Channel.create({name:"announcements", workspace_id: @workspace.id})
            render :show, status: 200
        else 
            render json: @workspace.errors.full_messages, status: 404
        end
    end

    def show
        @workspace = Workspace.find_by(id: params[:id])
        if @workspace 
            render :show, status: 200
        else 
            render json: ["workspace not found"], status: 404
        end
    end

    def index
        if params[:name]
            @workspace = Workspace.find_by(name: params[:name])
            if @workspace
                render :show, status: 200
            else 
                render json: ["workspace not found"], status: 404
            end
        else 
            @workspaces = Workspace.all 
            render :index, status: 200
        end
    end

    private
    def workspace_params
        params.require(:workspace).permit(:name, :creator_email)
    end
end
