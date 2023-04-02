Rails.application.routes.draw do
  use_doorkeeper
  
  devise_for :users
  root 'home#index'
  
 

  namespace :api do
    namespace :v1 do
      resources :questions, only: [:index, :create] do
        member do
          put :update_counter
        end
      end
    end
  end
end
