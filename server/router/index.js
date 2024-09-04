const Router = require('express').Router;
const router = new Router;
const taskController = require('../controllers/task-controller');

router.get('/tasks', taskController.getTasks);

module.exports = router;