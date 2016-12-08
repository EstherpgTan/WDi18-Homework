require 'test_helper'

class ModelControllerTest < ActionController::TestCase
  test "should get book" do
    get :book
    assert_response :success
  end

end
