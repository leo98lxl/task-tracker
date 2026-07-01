import type { TaskPriority } from "./types.js";
import { renderDashboard, renderTasks } from "./render.js";
import { newTask, validateTaskInput } from "./tasks.js";
import { loadTasksFromLocal, saveTasksDate } from "./storage.js";

function showHeader():void {
    console.log(`===============================`);
    console.log(`Task Tracker`);
    console.log(`===============================`);
}

showHeader();

export function resetForm(): void {
    taskInput.value = "";
    priorityInput.value = "medium";
}

export const app = document.querySelector("#app") as HTMLDivElement;
app.classList.add("app");

export const dashboard = document.createElement("div") as HTMLDivElement;

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

loadTasksFromLocal();
renderDashboard();
renderTasks();