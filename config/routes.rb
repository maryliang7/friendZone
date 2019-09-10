Rails.application.routes.draw do

  namespace :api, default: { format: JSON } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :posts do
      resources :likes, only: [:create]
    end
    resources :comments, only: [:create, :update, :delete] do
      resources :likes, only: [:create]
    end
    resources :likes, only: [:delete]
  end

  root to: 'static_pages#root'
end
