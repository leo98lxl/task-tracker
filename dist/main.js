function showHeader() {
    console.log(`===============================`);
    console.log(`Task Tracker`);
    console.log(`===============================`);
}
showHeader();
let nextId = 1;
let pending = 0;
let completed = 0;
let tasks = [{
        id: nextId++,
        name: "Lära mig TypeScript",
        status: "pending",
        priority: "high",
    }, {
        id: nextId++,
        name: "Springa 5 km",
        status: "completed",
        priority: "medium",
        notes: "Tog 10 min",
    }, {
        id: nextId++,
        name: "Städa",
        status: "pending",
        priority: "high",
        description: "Städa förrådet",
    }];
const app = document.querySelector("#app");
const taskInput = document.querySelector("#task-input");
taskInput.classList.add("task-input");
const taskButton = document.querySelector("#task-button");
taskButton.classList.add("task-btn");
const priorityInput = document.querySelector("#priority-input");
priorityInput.classList.add("priority-input");
taskButton.addEventListener("click", () => {
    const taskName = taskInput.value.trim();
    if (taskName === "") {
        console.log("Task name is required.");
        alert("Please enter a task name.");
        return;
    }
    const priority = priorityInput.value;
    newTask(taskName, priority);
});
function newTask(name, priority) {
    const newTask = {
        id: nextId,
        name: name,
        status: "pending",
        priority: priority,
    };
    tasks.push(newTask);
    nextId++;
    renderTasks();
    taskInput.value = "";
}
function toggleTask(id) {
    for (const task of tasks) {
        if (task.id === id) {
            task.status = task.status === "pending" ? "completed" : "pending";
        }
    }
    renderTasks();
}
function removeTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    renderTasks();
}
function renderTasks() {
    if (app) {
        app.innerHTML = "";
    }
    const totalTasks = document.createElement("h2");
    totalTasks.textContent = `Total tasks: ${tasks.length}`;
    app?.append(totalTasks);
    for (const task of tasks) {
        const card = document.createElement("div");
        card.classList.add("task-card");
        if (task.status === "completed") {
            card.classList.add("completed-task");
        }
        const name = document.createElement("h3");
        name.textContent = task.name;
        name.classList.add("task-title");
        const status = document.createElement("p");
        status.textContent = `Status: ${task.status}`;
        const priority = document.createElement("p");
        priority.textContent = `Priority: ${task.priority}`;
        if (task.priority === "high") {
            priority.classList.add("task-priority-high");
        }
        const completeButton = document.createElement("button");
        completeButton.textContent = task.status === "pending" ? "Complete" : "Undo";
        completeButton.classList.add("task-btn");
        completeButton.addEventListener("click", () => {
            toggleTask(task.id);
        });
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("task-btn");
        deleteButton.addEventListener("click", () => {
            removeTask(task.id);
        });
        card.append(name, status, priority, completeButton, deleteButton);
        app.prepend(card);
    }
}
newTask("Träna", "high");
newTask("Hoppa hopprep", "medium");
newTask("Hämta posten", "low");
export {};
// function showTasks(): void {
//     console.log(tasks);
// }
// function showPendingTasks(): void {
//     for (const task of tasks) {
//         if (task.status === "pending") {
//          console.log(`Pending task: ${task.name}`);
//         }
//     }
// }
// function showCompletedTasks(): void {
//     for (const task of tasks) {
//         if (task.status === "completed") {
//          console.log(`Completed task: ${task.name}`);
//         }
//     }
// }
// function showPriorityHigh(): void {
//     for (const task of tasks) {
//         if (task.priority === "high") {
//             console.log(`High priority: ${task.name}`);
//         }
//     }
// }
// function totalTasks(): void {
//     console.log(`Total tasks: ${tasks.length}`);
// }
// function showStatus(): void {
//     let completed = 0;
//     let pending = 0;
//     for (const task of tasks) {
//         if (task.status === "completed") {
//             completed++;
//         } else {
//             pending++;
//         }
//     }
//     console.log(`Pending: ${pending} Completed: ${completed}`);
// }
// function showPriority(): void {
//     let prioLow = 0;
//     let prioMedium = 0;
//     let prioHigh = 0;
//     for (const task of tasks) {
//         if (task.priority === "high") {
//             prioHigh++;
//         } else if (task.priority === "medium") {
//             prioMedium++;
//         } else {
//             prioLow++;
//         }
//     }
//     console.log(`High: ${prioHigh} Medium: ${prioMedium} Low: ${prioLow}`);
// }
//# sourceMappingURL=main.js.map