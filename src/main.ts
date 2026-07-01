import type { Status, Task, TaskPriority } from "./types.js";
import { renderDashboard, renderTasks } from "./render.js";
import { selectId, selectTask } from "./tasks.js";

function showHeader():void {
    console.log(`===============================`);
    console.log(`Task Tracker`);
    console.log(`===============================`);
}

showHeader();

export const app = document.querySelector("#app") as HTMLDivElement;
app.classList.add("app");

export const form = document.querySelector("#task-form") as HTMLFormElement;
form.addEventListener("submit", submitSettings);

export const taskInput = document.querySelector("#task-input") as HTMLInputElement;
taskInput.classList.add("task-input");

export const priorityInput = document.querySelector("#priority-input") as HTMLSelectElement;
priorityInput.classList.add("priority-input");

export const formButton = document.querySelector("#form-button") as HTMLButtonElement;
formButton.classList.add("task-btn");

export const errorMessage = document.querySelector("#error-message") as HTMLParagraphElement;

export const dashboard = document.createElement("div") as HTMLDivElement;

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

let date = new Date().toLocaleString("sv-SE");

function saveTasksDate(): void {
    const jsonSaveTitle = `Last saved:`;
    const jsonSaveTime = JSON.stringify(date);
    localStorage.setItem(jsonSaveTitle, jsonSaveTime);
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