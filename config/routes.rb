Rails.application.routes.draw do
  root 'welcome#index'
  resources :matrices do
    resources :tasks
  end
end
