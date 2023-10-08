import { taskManager } from "./taskmanager";
// Observer
export interface taskSubscriber {
  sendNotify(taskManager): void;
}

class Sender {
  taskSubscribers: taskSubscriber[];

  constructor() {
    this.taskSubscribers = [];
  }

  addTaskSubscriber(taskSubscriber: taskSubscriber) {
    this.taskSubscribers.push(taskSubscriber);
  }

  getLatestTask(taskManager) {
    const lastItem = taskManager.tasks.length - 1;
    return taskManager.tasks[lastItem];
  }

  writeNotify(taskManager) {
    this.taskSubscribers.forEach((taskSubscriber) => {
      taskSubscriber.sendNotify(this.getLatestTask(taskManager));
    });
  }
}

// Singleton
export const taskSubscriberUnion = new Sender();

class unionTaskSubscriber implements taskSubscriber {
  fnameSubscriber: string;

  constructor(fnameSubscriber: string) {
    this.fnameSubscriber = fnameSubscriber;
  }

  sendNotify(latestTask: string): void {
    console.log(`${this.fnameSubscriber} découvrez ${latestTask}`);
  }
}

const sender = new Sender();

sender.addTaskSubscriber(new unionTaskSubscriber("Jean Paul"));
sender.addTaskSubscriber(new unionTaskSubscriber("Jean Claude"));

sender.writeNotify(taskManager);
