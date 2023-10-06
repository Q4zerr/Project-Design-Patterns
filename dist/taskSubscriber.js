"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Observer
class notifySubscriber {
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
class Sender {
    constructor() {
        this.taskSubscribers = [];
    }
    addTaskSubscriber(taskSubscriber) {
        this.taskSubscribers.push(taskSubscriber);
    }
    writeNotify(notify) {
        this.taskSubscribers.forEach((taskSubscriber) => {
            taskSubscriber.sendNotify(notify);
        });
    }
}
class unionTaskSubscriber {
    constructor(fnameSubscriber) {
        this.fnameSubscriber = fnameSubscriber;
    }
    sendNotify(notify) {
        console.log(`${this.fnameSubscriber} découvrez ${notify}`);
    }
}
//# sourceMappingURL=taskSubscriber.js.map