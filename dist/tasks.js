import { resetForm } from "./main.js";
import { renderDashboard, renderTasks } from "./render.js";
import { saveTasksDate, saveTasksToLocal } from "./storage.js";
let nextId = 1;
let tasks = [];
export function selectId() {
    return nextId;
}
export function getTaskArray() {
    return tasks;
}
export function setTaskArray(newTasks) {
    tasks = newTasks;
}
export const showTaskStatus = (status) => {
    return tasks.filter((tasks) => tasks.status === status);
};
export function existingTask(name) {
    for (const task of tasks) {
        if (task.name.toLowerCase() === name.toLowerCase()) {
            return true;
        }
    }
    return false;
}
export function validateTaskInput(name) {
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
        return "Task name already exists.";
    }
    return "";
}
export function newTask(name, priority) {
    const newTask = {
        id: nextId,
        name: name,
        status: "pending",
        priority: priority,
    };
    tasks.push(newTask);
    nextId++;
    saveTasksToLocal();
    saveTasksDate();
    renderDashboard();
    renderTasks();
    resetForm();
}
export function toggleTask(id) {
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
export function removeTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    saveTasksToLocal();
    saveTasksDate();
    renderDashboard();
    renderTasks();
}
//# sourceMappingURL=tasks.js.map