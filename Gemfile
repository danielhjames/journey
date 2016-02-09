source "http://rubygems.org"
ruby "2.1.2"

gem 'bundler'
gem "rails", "4.2.5.1"
gem "rails-api"
gem 'paginator'
gem 'will_paginate'
gem "mysql2"
gem "sqlite3", :groups => [:development, :test]
gem "xebec"
gem "heroku_external_db", ">= 1.0.0"
gem "jipe", ">= 2.0.1"
gem 'rollbar'
gem 'sequel', require: 'sequel/no_core_ext'
gem 'dynamic_form'
gem 'thin'
gem 'active_model_serializers', '~> 0.8.1'
gem 'figaro', '1.0.0.rc1'
gem 'breach-mitigation-rails'
gem 'builder'
gem 'responders', '~> 2.0'

gem 'jquery-rails'
gem 'jquery-ui-rails'
gem 'ember-cli-rails'

gem 'haml'
gem 'haml-rails'
gem 'tinymce-rails'

group :assets do
  gem 'sass-rails'
  gem 'coffee-rails'
  gem 'uglifier'
  gem 'bourbon'
  gem 'sprite-factory'
end

gem 'devise'
gem 'rubycas-client'
gem 'devise_cas_authenticatable'
gem 'cancancan'
gem 'illyan_client'
gem 'ae_users_migrator'

gem 'rack-ssl'

gem 'rmagick4j', :require => "RMagick", :platforms => 'jruby'
gem 'rmagick', :require => 'RMagick', :platforms => ['ruby', 'mswin']
gem 'gruff', '~> 0.3.6'

gem 'newrelic_rpm'

group :test do
  gem "factory_girl_rails"
  gem "minitest-spec-rails"
  gem "launchy"
  gem "database_cleaner"
  gem "capybara", ">= 2.0.0"
  gem "capybara-webkit"
  gem "capybara_minitest_spec"
  gem "rails-dom-testing"
end

gem 'letter_opener_web', :group => :development
gem 'pry-rails', :groups => [:development, :test]

group :development do
  gem 'capistrano-rails',   '~> 1.1', require: false
  gem 'capistrano-bundler', '~> 1.1', require: false
  gem 'capistrano-rbenv', '~> 2.0', require: false
end
