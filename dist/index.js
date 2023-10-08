"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasks = [new UrgentTasks(), new ProjectTasks(), new PersonalTasks()];
tasks.forEach((task) => {
    console.log(task);
    //   taskManager.addTask(task);
});
//# sourceMappingURL=index.js.map