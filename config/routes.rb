Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :books, only: [:index, :show]
    end
  end

  resources :books, only: [:index]
end
