interface Task{
    create(): Task;
}

class ProjectTasks extends Task{
    public create(): Task{
        return new ProjectTasks();
    }
}

class PersonalTasks extends Task{
    public create(): Task{
        return new ProjectTasks();
    }
}

class UrgentTasks extends Task{
    public create(): Task{
        return new ProjectTasks();
    }
}