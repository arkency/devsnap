class DevelopersController < ApplicationController
  def index
    @developers = Developer.paginate(page: params[:page], per_page: 8).order(id: :asc)
  end

  def new
    @developer = Developer.new
  end

  def create
    @developer = Developer.new(developer_params)

    respond_to do |format|
      if @developer.save
        format.html { redirect_to developers_path, notice: 'You\'ve been successfully added to our growing list of devs on Snapchat.' }
      else
        format.html { render :new }
      end
    end
  end

  def codes_index
    @developers = Developer.from_newest
  end

  private
  
  def developer_params
    params.require(:developer).permit(:snapchat_username, :full_name, :about)
  end
end
