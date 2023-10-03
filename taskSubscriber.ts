// Observer
class notifySubscriber{
    // Attributs gestionnaire de tâches
    tasks: Task[];

    // Constructeur de gestionnaire de tâches
    constructor(){
        this.tasks = [];
    }

    // Méthode permettant d'ajouter une tâche dans le gestionnaire de tâches
    addTask(Task: Task){
        this.tasks.push(Task);
    }

    // Méthode permettant de cloturer une tâche dans le gestionnaire de tâches
    closeTask(Task: Task){
        let indexDelete = this.tasks.indexOf(Task);
        this.tasks.splice(indexDelete, 1);
    }
}

// Observer
// Manque récupération de la nouvelle tâche
export interface taskSubscriber{
    sendNotify(notify: string): void;
}

class Sender{
    taskSubscribers: taskSubscriber[];

    constructor(){
        this.taskSubscribers = [];
    }

    addTaskSubscriber(taskSubscriber: taskSubscriber){
        this.taskSubscribers.push(taskSubscriber);
    }

    writeNotify(notify: string){
        this.taskSubscribers.forEach((taskSubscriber) =>{
            taskSubscriber.sendNotify(notify);
        });
    }
}

class unionTaskSubscriber implements taskSubscriber{
    fnameSubscriber: string;

    constructor(fnameSubscriber: string){
        this.fnameSubscriber = fnameSubscriber;
    }

    sendNotify(notify: string): void {
        console.log(`${this.fnameSubscriber} découvrez ${notify}`);
    }
}