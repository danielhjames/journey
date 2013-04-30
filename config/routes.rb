Journey::Application.routes.draw do
  devise_for :people
  
  resources :questionnaires do
    collection do
      get :responses
    end

    member do
      get :pagelist
      get :available_special_field_purposes
      get :customize
      get :publish
      get :export
      get :share
      get :preview
      get :print
    end

    match '/publish/:action.:format' => 'publish#index', :as => :publish

    resources :pages do
      collection do
        post :sort
      end
    
      resources :questions do
        collection do
          post :sort
        end
        member do
          post :duplicate
          get :edit_options
        end
        resources :question_options do
          collection do
            post :sort
          end
        end
      end
    end

    resources :responses do
      collection do
        get :responseviewer
        get :aggregate
        get :print
        get :export
        get :subscribe
      end
    end
  end

  match '/questionnaires/:questionnaire_id/responses/graphs/' => 'graphs#index', :as => :response_graphs
  match '/questionnaires/:questionnaire_id/responses/graphs/:action.:format' => 'graphs#index', :as => :response_graph
  match '/answer/:id' => 'answer#index', :as => :answer
  match '/dashboard' => 'root#dashboard', :as => :dashboard
  match '/' => 'root#index'
  match ':controller/:action.:format' => '#index'
  match '/:controller(/:action(/:id))'
end
