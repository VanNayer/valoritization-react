class MatricesController < ApplicationController
  before_action :set_matrix, only: [:show, :edit, :update, :destroy]

  def index
    @public_matrices = Matrix.where(shared: true)
    @my_matrices = user_signed_in? ? current_user.matrices : []
  end

  def show
    @tasks = Matrix.find(params[:id]).tasks
  end

  def new
    @matrix = Matrix.new
  end

  def edit
  end

  def create
    @matrix = Matrix.new(matrix_params)

    respond_to do |format|
      if @matrix.save
        format.html { redirect_to @matrix, notice: 'Matrix was successfully created.' }
        format.json { render :show, status: :created, location: @matrix }
      else
        format.html { render :new }
        format.json { render json: @matrix.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @matrix.update(matrix_params)
        format.html { redirect_to @matrix, notice: 'Matrix was successfully updated.' }
        format.json { render :show, status: :ok, location: @matrix }
      else
        format.html { render :edit }
        format.json { render json: @matrix.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @matrix.destroy
    respond_to do |format|
      format.html { redirect_to matrices_url, notice: 'Matrix was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_matrix
    @matrix = Matrix.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def matrix_params
    params.require(:matrix).permit(:name, :value, :cost, :shared).merge(user: current_user)
  end
end
