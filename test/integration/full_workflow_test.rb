
# frozen_string_literal: true
require 'test_helper'

class FullWorkflowTest < ActionDispatch::IntegrationTest
  test 'The full workflow' do
    visit root_path
    click_link 'Log in'
    fill_in 'Email', with: 'un.email@gmail.com'
    fill_in 'Password', with: 'michel'
    within('div.actions') do
      click_button 'Log in'
    end
    assert_text 'Invalid email or password.'

    click_link 'Sign up'
    fill_in 'Email', with: 'un.email@gmail.com'
    fill_in 'Password', with: 'michel'
    fill_in 'Password confirmation', with: 'michel'
    click_button 'Sign up'
    assert_text 'Password is too short (minimum is 8 characters)'
    fill_in 'Password', with: 'michelmichel'
    fill_in 'Password confirmation', with: 'michelmichel'
    click_button 'Sign up'
    assert_text 'Welcome! You have signed up successfully.'

    within('nav') do
      click_link 'Create a new matrix'
    end
    fill_in 'Name', with: 'youpi'
    fill_in 'Value', with: 'la valeur'
    fill_in 'Cost', with: 'le cout'
    choose 'People with the link can see it; only you can modify it.'
    within('form') do
      click_button 'Create Matrix'
    end

    within('nav') do
      find('.fa-list-alt').click
    end
    assert_text 'youpi'
    assert_text 'false'
    assert_text 'Show'
    assert_text 'Edit'
    assert_text 'Destroy'

    click_link 'Show'
    assert_text 'youpi'
    all('input')[0].set('a task')
    all('input')[1].set('3')
    all('input')[2].set('35')
    all('input')[3].set('a desc')
    click_link 'Add Task'
  end
end
