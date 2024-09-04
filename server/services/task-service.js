const TaskModel = require('../models/task-model')

class TaskService {
    async getTasks(){
        const tasks = await TaskModel.find();
        return tasks;
    }
}