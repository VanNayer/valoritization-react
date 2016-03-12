class TasksController < ApplicationController
  before_action :set_task, only: [:update, :toggle, :destroy]
  before_action :require_authorization, :only => [:edit, :update, :destroy]

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
      render status: :accepted, nothing: true
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  def toggle
    if @task.update completed: !@task.completed
      render status: :accepted, nothing: true
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
    @task = Task.find(params[:id] || params[:task_id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def task_params
    params.permit(:title, :value, :cost, :description, :matrix_id)
  end

  def require_authorization
    if @task.matrix.user != current_user
      render json: @task.errors, status: :unauthorized
    end
  end
end
