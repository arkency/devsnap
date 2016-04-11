class DevelopersController < ApplicationController
  before_action :set_developer, only: [:show, :edit, :update, :destroy]

  def index
    @developers = Developer.paginate(page: params[:page], per_page: 9)
  end

  def new
    @developer = Developer.new
  end

  def create
    @developer = Developer.new(developer_params)

    respond_to do |format|
      if @developer.save
        format.html { redirect_to developers_path, notice: 'You\'ve been successfully added to our growing list of devs.' }
      else
        format.html { render :new }
      end
    end
  end


  private
    def set_developer
      @developer = Developer.find(params[:id])
    end

    def developer_params
      params.require(:developer).permit(:login, :full_name, :about)
    end
end
