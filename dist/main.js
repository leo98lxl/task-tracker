function showHeader() {
    console.log(`===============================`);
    console.log(`Task Tracker`);
    console.log(`===============================`);
}
let nextId = 1;
let tasks = [{
        id: nextId,
        name: "Lära mig TypeScript",
        status: "pending",
        priority: "high",
        toggle() {
            this.category = "school";
        },
    }, {
        id: nextId,
        name: "Springa 5 km",
        status: "completed",
        priority: "medium",
        notes: "Tog 10 min",
        toggle() {
            this.description = "Vanliga löparrundan";
        },
    }, {
        id: nextId,
        name: "Städa",
        status: "pending",
        priority: "high",
        description: "Städa förrådet",
        toggle() {
            this.category = this.category === "school" ? "spare time" : "spare time";
        },
    }];
function addTask(task) {
    tasks.push(task);
}
function showTasks() {
    console.log(tasks);
}
function showPendingTasks() {
    for (const task of tasks) {
        if (task.status === "pending") {
            console.log(`Pending task: ${task.name}`);
        }
    }
}
function showCompletedTasks() {
    for (const task of tasks) {
        if (task.status === "completed") {
            console.log(`Completed task: ${task.name}`);
        }
    }
}
function showPriorityHigh() {
    for (const task of tasks) {
        if (task.priority === "high") {
            console.log(`High priority: ${task.name}`);
        }
    }
}
// function completeTask(taskName: string): void {
//     for (const task of tasks) {
//         if (task.name === taskName) {
//             task.status = "completed";
//         }
//     }
//     renderTasks();
// }
function totalTasks() {
    console.log(`Total tasks: ${tasks.length}`);
}
function showStatus() {
    let completed = 0;
    let pending = 0;
    for (const task of tasks) {
        if (task.status === "completed") {
            completed++;
        }
        else {
            pending++;
        }
    }
    console.log(`Pending: ${pending} Completed: ${completed}`);
}
function showPriority() {
    let prioLow = 0;
    let prioMedium = 0;
    let prioHigh = 0;
    for (const task of tasks) {
        if (task.priority === "high") {
            prioHigh++;
        }
        else if (task.priority === "medium") {
            prioMedium++;
        }
        else {
            prioLow++;
        }
    }
    console.log(`High: ${prioHigh} Medium: ${prioMedium} Low: ${prioLow}`);
}
addTask({
    id: nextId,
    name: "Träna",
    status: "pending",
    priority: "low",
    toggle() {
        this.name = "Träna med flickvännen";
    },
});
addTask({
    id: nextId,
    name: "Hoppa hopprep",
    status: "completed",
    priority: "medium",
    description: "Det säger sig självt",
    notes: "Jag fastnade i repet",
    toggle() {
        this.notes = "Det gjorde ont";
    },
});
addTask({
    id: nextId,
    name: "Hämta posten",
    status: "completed",
    priority: "low",
    category: "spare time",
    dueDate: 2026,
    toggle() {
        this.tags = "Post från Cubus";
    },
});
const app = document.querySelector("#app");
function renderTasks() {
    if (app) {
        app.innerHTML = "";
    }
    const total = document.createElement("h2");
    total.textContent = `Total tasks: ${tasks.length}`;
    app?.append(total);
    for (const task of tasks) {
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
        if (task.status === "completed") {
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
            deleteTask(task.id);
        });
        app?.append(name, status, priority, completeButton, deleteButton);
    }
}
renderTasks();
const taskInput = document.querySelector("#task-input");
const testButton = document.querySelector("#test-button");
const priorityInput = document.querySelector("#priority-input");
testButton.addEventListener("click", () => {
    const taskName = taskInput.value.trim();
    if (taskName === "") {
        console.log("Task name is required.");
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
        toggle() {
            this.category = "school";
        },
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
function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    renderTasks();
}
export {};
//# sourceMappingURL=main.js.map