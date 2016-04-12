Rails.application.routes.draw do
  root to: "developers#index"
  resources :developers, only: [:index, :create, :new]
  get '/codes', to: 'developers#codes_index', as: 'codes_index'
end
