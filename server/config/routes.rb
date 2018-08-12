Rails.application.routes.draw do
  namespace :api do
    resources :questions do
      collection do
        post 'answer'
      end
    end
  end
end
