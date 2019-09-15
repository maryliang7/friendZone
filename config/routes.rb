Rails.application.routes.draw do

  namespace :api, default: { format: JSON } do
    resources :users, only: [:index, :create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :friendships, only: [:create, :destroy]
    resources :friend_requests, only: [:create, :destroy]
    resources :posts, except: [:new, :edit] do
      resources :likes, only: [:create]
    end
    resources :comments, only: [:create, :update, :delete] do
      resources :likes, only: [:create]
    end
    resources :likes, only: [:delete]
  end

  root to: 'static_pages#root'
end
