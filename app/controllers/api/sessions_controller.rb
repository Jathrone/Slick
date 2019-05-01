class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(*listed_user_params)
        if @user 
            login(@user)
            render "api/users/show"
        else 
            render json: ["invalid credentails"], status: 404
        end
    end

    #TODO consider removing non-current_user logouts for post development
    def destroy
        if params[:userId]
            user = User.find_by(id: params[:userId])
            if user 
                logout(user)
                render json: {}, status: 200
            else 
                render json: ["user to log out not found"], status: 404
            end 
        elsif current_user
            logout
            render json: {}, status: 200
        else 
            render json: ["no user to log out"], status: 404
        end
    end

    private
    def listed_user_params
        [params[:user][:workspace_id], params[:user][:email], params[:user][:password]]
    end
end
