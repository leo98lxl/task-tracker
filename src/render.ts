import { app, dashboard } from "./main.js";
import { getTaskArray, showTaskStatus, removeTask, toggleTask } from "./tasks.js";
import { date } from "./storage.js";

export function renderDashboard(): void {
    if (app) {
        app.innerHTML = "";
    }

    const totalPendingTasks = showTaskStatus("pending");
    const totalCompletedTasks = showTaskStatus("completed");

    dashboard.innerHTML = 
    `<div class="dashboard">
    <p>Pending tasks: ${totalPendingTasks.length}</p>
    <p>Completed tasks: ${totalCompletedTasks.length}</p>
    <h3>Total tasks: ${getTaskArray().length}</h3>
    <p>Last saved: ${date}</p>
    </div>`;

    const emptyMessage = document.createElement("p");
        if (getTaskArray().length === 0) {
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

export function renderTasks(): void {
    if (app) {
        app.innerHTML = "";
    }

    for (const task of getTaskArray()) {
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