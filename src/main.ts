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

let tasks: Task[] = [{
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

const app = document.querySelector("#app") as HTMLDivElement;
app.classList.add("app");

const taskInput = document.querySelector("#task-input") as HTMLInputElement;
taskInput.classList.add("task-input");

const taskButton = document.querySelector("#task-button") as HTMLButtonElement;
taskButton.classList.add("task-btn");

const priorityInput = document.querySelector("#priority-input") as HTMLSelectElement;
priorityInput.classList.add("priority-input");

taskButton.addEventListener("click", () => {
    const taskName = taskInput.value.trim();
    if (taskName === "") {
        console.log("Task name is required.");
        alert("Please enter a task name.");
        return;
    }
    
    const priority = priorityInput.value as TaskPriority;
    newTask(taskName, priority);
})

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
    renderTasks();
    taskInput.value = "";
}

function toggleTask(id: number): void {
    for (const task of tasks) {
        if (task.id === id) {
            task.status = task.status === "pending" ? "completed" : "pending";
        }
    }
    renderTasks();
}

function removeTask(id: number): void {
    tasks = tasks.filter((task) => task.id !== id);

    renderTasks();
}

const dashboard = document.createElement("div") as HTMLDivElement;

function renderDashboard(): void {
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

newTask("Träna", "high");
newTask("Hoppa hopprep", "medium");
newTask("Hämta posten", "low");

renderDashboard();
renderTasks();