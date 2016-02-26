Rails.application.routes.draw do
  root 'welcome#index'
  resources :matrices do
    resources :tasks do
      put :toggle
    end
  end
  get '/about', to: 'about#index'

end
