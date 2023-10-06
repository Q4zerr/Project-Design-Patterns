interface Task{
    create(): Task;
}

class ProjectTasks implements Task{
    public create(): Task{
        return new ProjectTasks();
    }
}

class PersonalTasks implements Task{
    public create(): Task{
        return new ProjectTasks();
    }
}

class UrgentTasks implements Task{
    public create(): Task{
        return new ProjectTasks();
    }
}