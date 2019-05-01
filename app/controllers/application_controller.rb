class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
        return @current_user
    end

    def logged_in? 
        !!(current_user)
    end

    def login(user)
        session[:session_token] = user.reset_session_token!
        session[:session_table] ||= []
        session[:session_table].push(session[:session_token])
        @current_user = user
    end

    def logout(user = current_user)
        #consider allowing input user (user = current_user) in logout as well
        #TODO catch these errors
        if user
            if session[:session_table].include?(session[:session_token])
                session[:session_table].delete(session[:session_token])
                session[:session_token] = nil
                user.reset_session_token!
            else
                raise RuntimeError.new("user's log in was not previously registered")
            end
        else
            raise RuntimeError.new("user not currently logged in")
        end
    end

    #TODO require log in
end
