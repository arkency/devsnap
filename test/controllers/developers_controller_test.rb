require 'test_helper'

class DevelopersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @developer = developers(:one)
  end

  test "should get index" do
    get developers_url
    assert_response :success
  end

  test "should get new" do
    get new_developer_url
    assert_response :success
  end

  test "should create developer" do
    assert_difference('Developer.count') do
      post developers_url, params: { developer: { about: @developer.about, full_name: @developer.full_name, snapchat_username: @developer.snapchat_username } }
    end

    assert_redirected_to developer_path(Developer.last)
  end

  test "should show developer" do
    get developer_url(@developer)
    assert_response :success
  end

  test "should get edit" do
    get edit_developer_url(@developer)
    assert_response :success
  end

  test "should update developer" do
    patch developer_url(@developer), params: { developer: { about: @developer.about, full_name: @developer.full_name, snapchat_username: @developer.snapchat_username } }
    assert_redirected_to developer_path(@developer)
  end

  test "should destroy developer" do
    assert_difference('Developer.count', -1) do
      delete developer_url(@developer)
    end

    assert_redirected_to developers_path
  end
end
