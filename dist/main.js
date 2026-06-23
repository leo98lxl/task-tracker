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
const task2 = {
    name: "TS",
    completed: true,
    priority: 5
};
const tasks2 = [];
tasks2.push({
    name: "Träna",
    completed: false,
    priority: 2,
});
function showTask2(task2) {
    console.log(task2.name);
}
function addTask2(task2) {
    tasks2.push(task2);
}
showTask2(task2);
addTask2({
    name: "Springa",
    priority: 3,
    completed: true
});
const user = "Leo";
const age = 28;
let value;
value: 42;
value: "Hej";
const userId = 123;
function updateStatus(status) {
    console.log(status);
}
updateStatus("completed");
const admin = {
    name: "Leo",
    completed: "pending",
    toggle() {
        this.completed = this.completed === "pending" ? "completed" : "pending";
    },
};
;
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["West"] = 2] = "West";
    Direction[Direction["East"] = 3] = "East";
})(Direction || (Direction = {}));
;
console.log(Direction.East);
export {};
//# sourceMappingURL=main.js.map