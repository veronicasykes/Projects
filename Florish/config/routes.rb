Rails.application.routes.draw do

  root 'static_pages#index'

  resources :products, only: [:index]
  resource :cart, only: [:show]
  resources :order_items, only: [:create, :update, :destroy]
  get 'products/index' => "products#index"

  get 'payments/index' => 'payments#index'
  resources :payments, only: [:index, :new, :create]


end
