Rails.application.routes.draw do
  namespace :api do
    resources :questions do
      member do
        get :answer
      end
    end
  end
end
