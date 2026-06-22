function showHeader():void {
    console.log(`===============================`);
    console.log(`Task Tracker`);
    console.log(`===============================`);
}

type Task = {
    name: string;
    completed: boolean;
    priority?: number;
}

const tasks: Task[] = [ {
    name: "Lära mig TS",
    completed: false,
    priority: 5, 
}, {
    name: "Diska",
    completed: true, 
}, {
    name: "Springa 5 km",
    completed: false,
    priority: 4, 
}
];

const taskNames = tasks.map(task => task.name);

function addTask(task: Task):void {
    tasks.push(task);
}

function showTask(task: Task | undefined):void {
    console.log(task?.name);
}

function completeTask(taskName: string):void {
    for (const task of tasks) {
        if (task.name === taskName) {
            task.completed = true;
        } 
    }
}

function showPendingTasks():void {
    for (const task of tasks) {
        if (!task.completed) {
            console.log(task.name);
        } 
    }
}

function showCompletedTasks():void {
    for (const task of tasks) {
        if (task.completed) {
            console.log(task.name);
        } 
    }
}

function showStatistics():void {
    let completed = 0;
    let pending = 0;
    for (const task of tasks) {
        if (task.completed) {
            completed++;
    } else { 
        pending++;
    }
    }
    console.log(`Completed: ${completed} Pending: ${pending}`);
}

showHeader();
showTask(tasks[1]);
addTask({
    name: "Gå ut med hunden",
    completed: false,
    priority: 2
});
completeTask("Springa 5 km");
showCompletedTasks();
showPendingTasks();
showStatistics();

console.log(taskNames);