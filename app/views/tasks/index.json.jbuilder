json.array!(@tasks) do |task|
  json.extract! task, :id, :title, :value, :cost, :description, :done
  json.url task_url(task, format: :json)
end
