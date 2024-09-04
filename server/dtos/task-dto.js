module.exports = class TaskDto {
    heading;
    description;
    tasks;

    constructor(model) {
        this.description = model.description;
        this.heading = model.heading;
        this.tasks = model.tasks;
    }
}