class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        @user.display_name = @user.email
        #TODO initialize each user with a chopped version of email instead
        if @user.save
            login(@user)
            render :show 
        else 
            render json: @user.errors.full_messages, status: 404
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        if @user 
            #TODO here we should render something other than show
            render :show
        else 
            render json: ["user not found"], status: 404
        end
    end

    def update 
        @user = User.find_by(id: params[:id])
        if @user
            if @user.update(user_params)
                render json: {}, status: 200
            else 
                render json: @user.errors.full_messages, status: 404
            end
        else 
            render json: ["user not found"], status: 404
        end
    end

    def index 
        @users = User.where(workspace_id: params[:workspace_id])
        if @users 
            render :index 
        else
            render json: ["users not found"], status: 404 
        end
    end

    #TODO destroy?

    private

    def user_params
        params.require(:user).permit(:workspace_id, :email, :password)
    end
end
