function showHeader():void {
    console.log(`===============================`);
    console.log(`Task Tracker`);
    console.log(`===============================`);
}

showHeader();

type Task = {
    id: number;
    name: string;
    status: "pending" | "completed";
    priority: "low" | "medium" | "high";
    description?: string;
    notes?: string;
    dueDate?: number | string;
    category?: "school" | "spare time";
    tags?: string;
}

type TaskPriority = "low" | "medium" | "high";
type Status = "pending" | "completed";
let nextId = 1;
let tasks: Task[] = [];

const app = document.querySelector("#app") as HTMLDivElement;
app.classList.add("app");

const form = document.querySelector("#task-form") as HTMLFormElement;
form.addEventListener("submit", submitSettings);

const taskInput = document.querySelector("#task-input") as HTMLInputElement;
taskInput.classList.add("task-input");

const priorityInput = document.querySelector("#priority-input") as HTMLSelectElement;
priorityInput.classList.add("priority-input");

const formButton = document.querySelector("#form-button") as HTMLButtonElement;
formButton.classList.add("task-btn");

const errorMessage = document.querySelector("#error-message") as HTMLParagraphElement;

function submitSettings(event: SubmitEvent) {
    event.preventDefault();
    console.log("Form was successfully submitted!");

    const taskName = taskInput.value.trim();
    const priority = priorityInput.value as TaskPriority;
    const error = validateTaskInput(taskName);
        if (error !== "") {
            errorMessage.textContent = error;
            return;
        }
    errorMessage.textContent = "";
    newTask(taskName, priority);
    saveTasksDate();
    renderDashboard();
    renderTasks();
}

function resetForm(): void {
    taskInput.value = "";
    priorityInput.value = "medium";
}

const showTaskStatus = (status: Status): Task[] => {
    return tasks.filter((tasks) => tasks.status === status);
}

function newTask(name: string, priority: TaskPriority): void {
    const newTask: Task = {
        id: nextId,
        name: name,
        status: "pending",
        priority: priority,
    }

    tasks.push(newTask);
    nextId++;
    saveTasksToLocal();
    saveTasksDate();
    renderDashboard();
    renderTasks();
    resetForm();
}

function validateTaskInput(name: string): string {
        if (name === "") {
            return "Task name is required.";
        }
        if (name.length < 3) {
            return "Task name must be longer than 3 characters.";
        }
        if (name.length > 40) {
            return "Task name cannot extend 40 characters.";
        }
        if (existingTask(name)) {
            return "Task name already exists."
        }
    return "";
}

function existingTask(name: string): boolean {
    for (const task of tasks) {
        if (task.name.toLowerCase() === name.toLowerCase()) {
            return true;
        }
    }
    return false;
}

function toggleTask(id: number): void {
    for (const task of tasks) {
        if (task.id === id) {
            task.status = task.status === "pending" ? "completed" : "pending";
        }
    }
    saveTasksToLocal();
    saveTasksDate();
    renderDashboard();
    renderTasks();
}

function removeTask(id: number): void {
    tasks = tasks.filter((task) => task.id !== id);

    saveTasksToLocal();
    saveTasksDate();
    renderDashboard();
    renderTasks();
}

function saveTasksToLocal(): void {
    const jsonSave = JSON.stringify(tasks);
    localStorage.setItem("tasks", jsonSave);
}

function loadTasksFromLocal(): void {
    const jsonLoad = localStorage.getItem("tasks");
    if (jsonLoad === null) {
        return;
    }
    tasks = JSON.parse(jsonLoad);
}

let date = new Date().toLocaleString();

function saveTasksDate(): void {
    const jsonSaveTitle = `Last saved:`;
    const jsonSaveTime = JSON.stringify(date);
    localStorage.setItem(jsonSaveTitle, jsonSaveTime);
}

const dashboard = document.createElement("div") as HTMLDivElement;

function renderDashboard(): void {
    if (app) {
        app.innerHTML = "";
    }

    const totalPendingTasks = showTaskStatus("pending");
    const totalCompletedTasks = showTaskStatus("completed");

    dashboard.innerHTML = 
    `<div class="dashboard">
    <h2>Dashboard</h2>
    <p>Pending tasks: ${totalPendingTasks.length}</p>
    <p>Completed tasks: ${totalCompletedTasks.length}</p>
    <h3>Total tasks: ${tasks.length}</h3>
    <p>Last saved: ${date}</p>
    </div>`;

    const emptyMessage = document.createElement("p");
        if (tasks.length === 0) {
            emptyMessage.textContent = "No tasks added yet.";
        } else {
            emptyMessage.textContent = "";
        }

    const clearButton = document.createElement("button");
    clearButton.classList.add("task-btn");
    clearButton.textContent = "Clear All";

    clearButton.addEventListener("click", () => {
        localStorage.removeItem("tasks");
        renderDashboard();
        renderTasks();
    })

    dashboard.append(clearButton, emptyMessage);
    app?.before(dashboard);
}

function renderTasks(): void {
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
        })

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("task-btn");
        deleteButton.addEventListener("click", () => {
            removeTask(task.id);
            renderDashboard();
            renderTasks();
        })

        card.append(
            name,
            status,
            priority,
            completeButton,
            deleteButton,
        );
        app.prepend(card);
    }
}

loadTasksFromLocal();
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

type Run = {
    name: string;
    distance: number;
    pace: string;
    location: string;
}

function printRunner({distance, pace}: Run): void {

}