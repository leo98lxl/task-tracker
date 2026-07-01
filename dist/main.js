import { errorMessage, priorityInput, taskInput } from "./elements.js";
import { renderDashboard, renderTasks } from "./render.js";
import { loadTasksFromLocal, saveTasksDate } from "./storage.js";
import { newTask, validateTaskInput } from "./tasks.js";
function showHeader() {
    console.log(`===============================`);
    console.log(`Task Tracker`);
    console.log(`===============================`);
}
showHeader();
const form = document.querySelector("#task-form");
form.addEventListener("submit", submitSettings);
const formButton = document.querySelector("#form-button");
formButton.classList.add("task-btn");
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