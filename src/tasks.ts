import type { Status, Task, TaskPriority } from "./types.js";
import { priorityInput, taskInput } from "./elements.js";
import { renderDashboard, renderTasks } from "./render.js";
import { saveTasksDate, saveTasksToLocal } from "./storage.js";

let nextId = 1;

let tasks: Task[] = [];

export function selectId() {
    return nextId;
}

export function getTaskArray() {
    return tasks;
}

export function setTaskArray(newTasks: Task[]) {
    tasks = newTasks;
}

export const showTaskStatus = (status: Status): Task[] => {
    return tasks.filter((tasks) => tasks.status === status);
}

export function existingTask(name: string): boolean {
    for (const task of tasks) {
        if (task.name.toLowerCase() === name.toLowerCase()) {
            return true;
        }
    }
    return false;
}

export function validateTaskInput(name: string): string {
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

export function newTask(name: string, priority: TaskPriority): void {
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

export function toggleTask(id: number): void {
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

export function removeTask(id: number): void {
    tasks = tasks.filter((task) => task.id !== id);

    saveTasksToLocal();
    saveTasksDate();
    renderDashboard();
    renderTasks();
}

export function resetForm(): void {
    taskInput.value = "";
    priorityInput.value = "medium";
}