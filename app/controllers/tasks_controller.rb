class TasksController < ApplicationController
  before_action :set_task, only: [:update, :destroy]

  def index
    @tasks = Task.where(matrix_id: params[:matrix_id])
    render json: { tasks: @tasks }
  end

  # POST /tasks
  def create
    @task = Task.new(task_params)
    if @task.save
      render json: {id: @task.id}
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tasks/1
  def update
    if @task.update(task_params)
      render_task_as_json
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tasks/1
  def destroy
    @task.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_task
    @task = Task.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def task_params
    params.permit(:title, :value, :cost, :description, :matrix_id)
  end
end
