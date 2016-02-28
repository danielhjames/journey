Journey::Application.routes.draw do
  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: "/letter_opener"
  end

  mount_ember_app :journey_ember, to: "/journey-ember"

  devise_for :people, controllers: { cas_sessions: :journey_cas_sessions }

  namespace :api do
    namespace :v1 do
      resources :questionnaires
      resources :pages
      resources :questions
      resources :question_options
    end
  end

  resources :questionnaires do
    collection do
      get :responses
    end

    member do
      get :pagelist
      get :available_special_field_purposes
      get :customize
      get :export
      get :share
      get :preview
      get :print
      get 'edit/*extra' => 'questionnaires#edit'
    end

    resource :publish, :controller => 'publish', :only => :show do
      member do
        get :settings
      end
    end

    resources :pages, :except => [:new] do
      collection do
        post :sort
      end

      resources :questions, :except => [:new] do
        collection do
          post :sort
        end
        member do
          post :duplicate
          get :edit_options
        end
        resources :question_options, :except => [:new, :edit] do
          collection do
            post :sort
          end
        end
      end
    end

    resources :responses do
      collection do
        get :aggregate
        get :print
        get :export
        get :subscribe
        put :update_subscription
      end
    end
  end

  get '/answer/:id' => 'answer#index', :as => :questionnaire_answer
  scope '/answer/:id', as: 'questionnaire_answer', controller: 'answer' do
    get :resume
    match :preview, via: [:get, :post]
    get 'closed' => :questionnaire_closed
    get :prompt
    get :start
    post :save_answers
    get :save_session
  end

  get '/questionnaires/:questionnaire_id/responses/graphs/' => 'graphs#index', :as => :response_graphs
  get '/questionnaires/:questionnaire_id/responses/graphs/:action.:format' => 'graphs#index', :as => :response_graph
  get '/dashboard' => 'root#dashboard', :as => :dashboard
  get '/welcome' => 'root#welcome', :as => :welcome

  if ENV['SUGAR_POND_BRANDING']
    get '/support' => 'sugar_pond/support#index', as: :support
    get '/tos' => 'sugar_pond/legal#tos', as: :legal_tos
    get '/privacy' => 'sugar_pond/legal#privacy', as: :legal_privacy
  end

  root to: 'root#index'
end
