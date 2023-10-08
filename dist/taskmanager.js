"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskManager = exports.TaskManager = void 0;
class TaskManager {
    // Constructeur de gestionnaire de tâches
    constructor() {
        this.tasks = [];
    }
    // Méthode permettant d'ajouter une tâche dans le gestionnaire de tâches
    addTask(Task) {
        this.tasks.push(Task);
    }
    // Méthode permettant de cloturer une tâche dans le gestionnaire de tâches
    closeTask(Task) {
        let indexDelete = this.tasks.indexOf(Task);
        this.tasks.splice(indexDelete, 1);
    }
}
exports.TaskManager = TaskManager;
class ProjectTasksManager {
    create() {
        return new ProjectTasksTask();
    }
}
class PersonalTasksManager {
    create() {
        return new PersonalTasksTask();
    }
}
class UrgentTasksManager {
    create() {
        return new UrgentTasksTask();
    }
}
class ProjectTasksTask {
    run() {
        return "result of project tasks task";
    }
}
class PersonalTasksTask {
    run() {
        return "result of personal tasks task";
    }
}
class UrgentTasksTask {
    run() {
        return "result of urgent tasks task";
    }
}
// Singleton
exports.taskManager = new TaskManager();
// Decorator
class taskExtraDecorator {
    constructor(task) {
        this.task = task;
    }
    run() {
        return this.task.run();
    }
}
class notesDecorator extends taskExtraDecorator {
    constructor(task) {
        super(task);
    }
    run() {
        return super.run() + " testNotes";
    }
}
class labelDecorator extends taskExtraDecorator {
    constructor(task) {
        super(task);
    }
    run() {
        return super.run() + " testLabel";
    }
}
class prioritiesDecorator extends taskExtraDecorator {
    constructor(task) {
        super(task);
    }
    run() {
        return super.run() + " testPriorities";
    }
}
//# sourceMappingURL=taskmanager.js.map