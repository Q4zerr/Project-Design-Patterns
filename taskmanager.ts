class TaskManager {
  // Attributs gestionnaire de tâches
  tasks: Task[];

  // Constructeur de gestionnaire de tâches
  constructor() {
    this.tasks = [];
  }

  // Méthode permettant d'ajouter une tâche dans le gestionnaire de tâches
  addTask(Task: Task) {
    this.tasks.push(Task);
  }

  // Méthode permettant de cloturer une tâche dans le gestionnaire de tâches
  closeTask(Task: Task) {
    let indexDelete = this.tasks.indexOf(Task);
    this.tasks.splice(indexDelete, 1);
  }
}

// Factory Pattern
interface taskFactory {
  create(): Task;
}

export interface Task {
  run(): string;
}

export class ProjectTasksManager implements taskFactory {
  public create(): Task {
    return new ProjectTasksTask();
  }
}

export class PersonalTasksManager implements taskFactory {
  public create(): Task {
    return new PersonalTasksTask();
  }
}

export class UrgentTasksManager implements taskFactory {
  public create(): Task {
    return new UrgentTasksTask();
  }
}

export class ProjectTasksTask implements Task {
  public run(): string {
    return "result of project tasks task";
  }
}

export class PersonalTasksTask implements Task {
  public run(): string {
    return "result of personal tasks task";
  }
}

export class UrgentTasksTask implements Task {
  public run(): string {
    return "result of urgent tasks task";
  }
}

// Singleton
export const taskManager = new TaskManager();

// Decorator
class taskExtraDecorator implements Task {
  constructor(private task: Task) {}

  run() {
    return this.task.run();
  }
}

class notesDecorator extends taskExtraDecorator {
  constructor(task: Task) {
    super(task);
  }

  run() {
    return super.run() + " testNotes";
  }
}

class labelDecorator extends taskExtraDecorator {
  constructor(task: Task) {
    super(task);
  }

  run() {
    return super.run() + " testLabel";
  }
}

class prioritiesDecorator extends taskExtraDecorator {
  constructor(task: Task) {
    super(task);
  }

  run() {
    return super.run() + " testPriorities";
  }
}
