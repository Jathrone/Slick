Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resources :workspaces, only: [:create, :show, :index] 

    resources :users, only: [:create, :show, :edit, :index]

    resource :session, only: [:create, :destroy]

    resources :messages, only: [:create, :destroy, :update, :index]

    resources :channels, only: [:create, :index]

    resources :direct_messages, only: [:create, :index]
  end

  mount ActionCable.server, at: "/cable"
end
