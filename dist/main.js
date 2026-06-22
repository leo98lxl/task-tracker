function showHeader() {
    console.log(`===============================`);
    console.log(`Task Tracker`);
    console.log(`===============================`);
}
const tasks = [{
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
function addTask(task) {
    tasks.push(task);
}
function showTask(task) {
    console.log(task?.name);
}
function completeTask(taskName) {
    for (const task of tasks) {
        if (task.name === taskName) {
            task.completed = true;
        }
    }
}
function showPendingTasks() {
    for (const task of tasks) {
        if (!task.completed) {
            console.log(task.name);
        }
    }
}
function showCompletedTasks() {
    for (const task of tasks) {
        if (task.completed) {
            console.log(task.name);
        }
    }
}
function showStatistics() {
    let completed = 0;
    let pending = 0;
    for (const task of tasks) {
        if (task.completed) {
            completed++;
        }
        else {
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
export {};
//# sourceMappingURL=main.js.map