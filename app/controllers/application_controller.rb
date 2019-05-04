class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?, :all_current_users, :activate_session

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
        return @current_user
    end

    def all_current_users
        all_current_users = User.where(session_token: session[:session_table])
        active_session_tokens = all_current_users.map do |user| 
            user.session_token
        end 
        if session[:session_table]
            session[:session_table].delete_if do |session_token|
                !active_session_tokens.include?(session_token)
            end
        end
        return all_current_users
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
            if user == current_user
                if session[:session_table].include?(session[:session_token])
                    session[:session_table].delete(session[:session_token])
                    session[:session_token] = nil
                    user.reset_session_token!
                else
                    raise RuntimeError.new("user's log in was not previously registered")
                    #TODO what am I supposed to do with all these exceptions?
                end
            else 
                if session[:session_table].include?(user.session_token)
                    session[:session_table].delete(user.session_token)
                    user.reset_session_token!
                else
                    raise RuntimeError.new("user's log in was not previously registered")
                    #TODO what am I supposed to do with all these exceptions?
                end
            end
        else
            raise RuntimeError.new("user not currently logged in")
        end
    end

    def activate_session(id)
        @user = User.find_by(id: id)
        if session[:session_table].include?(@user.session_token)
            session[:session_token] = @user.session_token
            return true
        else 
            return nil
        end
    end

    #TODO require log in
end
