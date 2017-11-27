Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :songs, only: [:create, :update, :show, :index, :destroy]
  end

  root "static_pages#root"
end
