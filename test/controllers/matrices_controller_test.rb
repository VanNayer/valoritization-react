require 'test_helper'

class MatricesControllerTest < ActionController::TestCase
  setup do
    @matrix = create :matrix, shared: true
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:public_matrices)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create matrix" do
    assert_difference('Matrix.count') do
      post :create, matrix: { cost: @matrix.cost, name: @matrix.name, value: @matrix.value }
    end

    assert_redirected_to matrix_path(assigns(:matrix))
  end

  test 'create matrix when logged in should associate user' do
    @request.env["devise.mapping"] = Devise.mappings[:user]
    user = create :user
    # user.confirm! # or set a confirmed_at inside the factory. Only necessary if you are using the "confirmable" module
    sign_in user

    post :create, matrix: { cost: @matrix.cost, name: @matrix.name, value: @matrix.value }
    users_matrices = Matrix.where(user_id: user.id)
    assert_equal 1, users_matrices.count
    assert_equal @matrix.name, users_matrices.first.name
    assert_redirected_to matrix_path(assigns(:matrix))
  end

  test "should show matrix" do
    get :show, id: @matrix
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @matrix
    assert_response :success
  end

  test "should update matrix" do
    patch :update, id: @matrix, matrix: { cost: @matrix.cost, name: @matrix.name, value: @matrix.value }
    assert_redirected_to matrix_path(assigns(:matrix))
  end

  test "should destroy matrix" do
    assert_difference('Matrix.count', -1) do
      delete :destroy, id: @matrix
    end

    assert_redirected_to matrices_path
  end
end
