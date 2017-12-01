Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resources :users, only: [:index]
    resource :session, only: [:create, :destroy, :show]
    resources :songs, only: [:create, :update, :show, :index, :destroy]
    resources :likes, only: [:create]
    resources :comments, only: [:create, :index, :destroy]
  end

  patch '/api/likes', to: 'api/likes#update'

  root "static_pages#root"
end
