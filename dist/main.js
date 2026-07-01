import { renderDashboard, renderTasks } from "./render.js";
import { newTask, validateTaskInput } from "./tasks.js";
import { loadTasksFromLocal, saveTasksDate } from "./storage.js";
function showHeader() {
    console.log(`===============================`);
    console.log(`Task Tracker`);
    console.log(`===============================`);
}
showHeader();
export function resetForm() {
    taskInput.value = "";
    priorityInput.value = "medium";
}
export const app = document.querySelector("#app");
app.classList.add("app");
export const dashboard = document.createElement("div");
const form = document.querySelector("#task-form");
form.addEventListener("submit", submitSettings);
const taskInput = document.querySelector("#task-input");
taskInput.classList.add("task-input");
const priorityInput = document.querySelector("#priority-input");
priorityInput.classList.add("priority-input");
const formButton = document.querySelector("#form-button");
formButton.classList.add("task-btn");
const errorMessage = document.querySelector("#error-message");
function submitSettings(event) {
    event.preventDefault();
    console.log("Form was successfully submitted!");
    const taskName = taskInput.value.trim();
    const priority = priorityInput.value;
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
//# sourceMappingURL=main.js.map