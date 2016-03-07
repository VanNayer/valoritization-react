Rails.application.routes.draw do
  devise_for :users
  root 'welcome#index'
  resources :matrices do
    resources :tasks do
      put :toggle
    end
  end
  get '/about', to: 'about#index'

end
