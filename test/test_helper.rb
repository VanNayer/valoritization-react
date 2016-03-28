ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'capybara/rails'
require "database_cleaner"

DatabaseCleaner.strategy = :deletion

Capybara.register_driver :local_selenium do |app|
  driver = Capybara::Selenium::Driver.new app, browser: :chrome
  driver.resize_window_to driver.window_handles[0], 1400, 800
  driver
end

class ActiveSupport::TestCase
  include FactoryGirl::Syntax::Methods
end

class ActionController::TestCase
  include Devise::TestHelpers
end

class ActionDispatch::IntegrationTest
  include Capybara::DSL

  self.use_transactional_fixtures = false

  setup do
    Capybara.current_driver = :local_selenium
    DatabaseCleaner.clean
  end

  teardown do
    DatabaseCleaner.clean
  end
end
