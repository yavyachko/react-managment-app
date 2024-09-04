const {validationResult} = require('express-validator');
const taskServise = require('../services/task-service')

class TaskController {
    async getTasks(req, res, next) {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return next(Error('Ошибка при валидации'))
            }
            const taskData = await taskServise.getTasks()
            return res.json(taskData)
        } catch (e){
            next(e);
        }
    }
}

module.exports = new TaskController();