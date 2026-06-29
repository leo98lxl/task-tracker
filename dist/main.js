function showHeader() {
    console.log(`===============================`);
    console.log(`Task Tracker`);
    console.log(`===============================`);
}
showHeader();
let nextId = 1;
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
app.classList.add("app");
const form = document.querySelector("#task-form");
const errorMessage = document.querySelector("#error-message");
const taskInput = document.querySelector("#task-input");
taskInput.classList.add("task-input");
const taskButton = document.querySelector("#task-button");
taskButton.classList.add("task-btn");
const priorityInput = document.querySelector("#priority-input");
priorityInput.classList.add("priority-input");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted!");
    const taskName = taskInput.value.trim();
    const priority = priorityInput.value;
    const error = validateTaskName(taskName);
    if (error !== "") {
        errorMessage.textContent = error;
        return;
    }
    errorMessage.textContent = "";
    newTask(taskName, priority);
    renderTasks();
}
function clearForm() {
    taskInput.value = "";
    priorityInput.value = "medium";
}
taskButton.addEventListener("click", () => {
    const taskName = taskInput.value.trim();
    if (taskName === "") {
        console.log("Task name is required.");
        return;
    }
    const priority = priorityInput.value;
    newTask(taskName, priority);
});
function validateTaskName(name) {
    if (name === "") {
        return "Task name is required.";
    }
    if (name.length < 3) {
        return "Task name must be longer than 3 characters.";
    }
    if (name.length > 40) {
        return "Task name cannot be longer than 40 characters.";
    }
    if (taskExists(name)) {
        return "Task name already exists.";
    }
    return "";
}
function taskExists(name) {
    for (const task of tasks) {
        if (task.name.toLowerCase() === name.toLowerCase())
            return true;
    }
}
const showTaskStatus = (status) => {
    return tasks.filter((tasks) => tasks.status === status);
};
function newTask(name, priority) {
    const newTask = {
        id: nextId,
        name: name,
        status: "pending",
        priority: priority,
    };
    tasks.push(newTask);
    nextId++;
    clearForm();
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
const dashboard = document.createElement("div");
function renderDashboard() {
    if (app) {
        app.innerHTML = "";
    }
    const totalPendingTasks = showTaskStatus("pending");
    const totalCompletedTasks = showTaskStatus("completed");
    const totalTasks = tasks.length;
    dashboard.innerHTML =
        `<div class="dashboard">
    <h2>Dashboard</h2>
    <p>Pending tasks: ${totalPendingTasks.length}</p>
    <p>Completed tasks: ${totalCompletedTasks.length}</p>
    <h3>Total tasks: ${tasks.length}</h3>
    </div>`;
    app?.before(dashboard);
}
function renderTasks() {
    if (app) {
        app.innerHTML = "";
    }
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
            renderDashboard();
            renderTasks();
        });
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("task-btn");
        deleteButton.addEventListener("click", () => {
            removeTask(task.id);
            renderDashboard();
            renderTasks();
        });
        card.append(name, status, priority, completeButton, deleteButton);
        app.prepend(card);
    }
}
newTask("Träna", "high");
newTask("Hoppa hopprep", "medium");
newTask("Hämta posten", "low");
renderDashboard();
renderTasks();
//destructuring
const runners = [
    "Leo",
    "Andréa",
    "Johan"
];
const [, second, third] = runners;
const easyRuns = [
    "Monday",
    "Wednesday"
];
const workouts = [
    "Tuesday",
    "Thursday"
];
const week = [
    ...easyRuns,
    ...workouts,
    "Friday"
];
const numbers = [1, 2, 3];
const copy = [...numbers];
copy.push(4);
const runner = {
    name: "Leo",
    pace: "4:20"
};
const fasterRunner = {
    ...runner,
    pace: "4:10"
};
function printRunner({ distance, pace }) {
}
export {};
//# sourceMappingURL=main.js.map