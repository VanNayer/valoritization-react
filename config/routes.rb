Rails.application.routes.draw do
  root 'welcome#index'
  resources :matrices do
    resources :tasks
  end
  get '/about', to: 'about#index'

end
