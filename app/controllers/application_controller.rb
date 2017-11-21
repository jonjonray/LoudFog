class ApplicationController < ActionController::Base
  protect_from_forgery with: :exceptionconcert
  helper_methods :current_user, :signed_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def signed_in?
    !current_user
  end

  def login!(user)
    session[:session_token] = user.session_token
  end

  def logout!
    session[:session_token] = nil
    current_user.reset_session_token
    @current_user = nil
  end

  def require_logged_in
    unless current_user
      render json: { base: ['please provide valid credentials']}
    end
  end

  

end
