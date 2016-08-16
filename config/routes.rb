Rails.application.routes.draw do
  namespace :api do
    namespace :v1, defaults: { version: '1', format: 'json' } do
      resources :developers, only: [:index, :create, :show]
    end
  end
  mount_ember_app :frontend, to: "/"
end
