Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    namespace :v1 do
      devise_for :users, controllers: {
        sessions: 'api/v1/sessions',
        registrations: 'api/v1/registrations'
      }, defaults: { format: :json }
      resources :questions, only: [:index, :create] do
        member do
          put :update_counter
        end
      end
    end
  end
end
