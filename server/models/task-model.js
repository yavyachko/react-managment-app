const {Schema, model} = require('mongoose');

const TaskSchema = new Schema({
    heading: {type: String, unique: false, required: true},
    description: {type: String, required: true},
    tasks: {type: Array, required: false},
})

module.exports = model('Task', TaskSchema);