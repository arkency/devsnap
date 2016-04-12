Rails.application.routes.draw do
  root to: "developers#index"
  resources :developers
  get '/codes', to: 'developers#codes_index', as: 'codes_index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Serve websocket cable requests in-process
  # mount ActionCable.server => '/cable'
end
